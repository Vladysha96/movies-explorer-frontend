import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "../Main/Main";
import { PAGES, SORT_DURATION, DISPLAY_MOVIE } from "../../utils/constants";
import "./App.css";
import Header from '../Header/Header';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as MainApi from "../../utils/MainApi";
import { api } from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import LocalStorage from "../../utils/LocalStorage";

const moviesLocal = new LocalStorage('movies');
const valueLocal = new LocalStorage('search-value');
const checkboxLocal = new LocalStorage('search-checkbox');

function App() {
  const history = useHistory();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedFilteredMovies, setSavedFilteredMovies] = useState([]);
  const [displayMovies, setDisplayMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = useState(false);
  const [resMessage, setResMessage] = useState('');
  const [resStatus, setResStatus] = useState(true);

  const [isSavedSearch, setIsSavedSearch] = useState(false);

  const [stepDisplayMovies, setStepDisplayMovies] = useState(DISPLAY_MOVIE.FIRST_REQUEST.DESKTOP);

  const [formValues, setFormValues] = useState({
    // состояние значения и фильтра по короткометражным
    value: '',
    checkbox: '',
  });

  useEffect(() => {
    if (moviesLocal) {
      setAllMovies(moviesLocal.load());
    }

    // добавление значений из LocalStorage
    if (valueLocal || checkboxLocal) {
      setFormValues({
        value: valueLocal.load(),
        checkbox: checkboxLocal.load(),
      });
    }

    // токен
    function getContent() {
      return MainApi.checkToken()
        .then((user) => {
          setIsLoggedIn(true);
          setCurrentUser(user);
        })
        .catch((err) => {
          console.log(err);
          setIsLoggedIn(false);
          setCurrentUser({});
        });
    }

    getContent();
  }, []);

  useEffect(() => {
    if (formValues.value && allMovies.length && location.pathname === PAGES.MOVIES) {
      handleSearchMovies(formValues.value, formValues.checkbox);
    }
    // eslint-disable-next-line
  }, [allMovies]);

  // получаем фильмы пользователя с сервера
  useEffect(() => {
    if (location.pathname === PAGES.SIGNIN || location.pathname === PAGES.SIGNUP) return;
    if (
      isLoggedIn &&
      !savedMovies.length &&
      (location.pathname === PAGES.MOVIES || location.pathname === PAGES.SAVEDMOVIES)
    ) {
      MainApi.getMovies()
        .then((movies) => {
          setSavedMovies(movies.reverse());
        })
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn, savedMovies.length, location]);

  useEffect(() => {
    if (location.pathname === PAGES.MOVIES) {
      window.addEventListener('resize', () => {
        setTimeout(() => {
          window.screen.width < 767
            ? setStepDisplayMovies(DISPLAY_MOVIE.FIRST_REQUEST.MOBILE)
            : window.screen.width > 1280
              ? setStepDisplayMovies(DISPLAY_MOVIE.FIRST_REQUEST.DESKTOP)
              : setStepDisplayMovies(DISPLAY_MOVIE.FIRST_REQUEST.TABLET);
        }, 3000);
      });
    } else {
      window.removeEventListener('resize', () => { });
    }
  }, [location]);

  // список фильмов по локации
  useEffect(() => {
    setDisplayMovies(
      location.pathname === PAGES.MOVIES
        ? filteredMovies.slice(0, stepDisplayMovies)
        : isSavedSearch
          ? savedFilteredMovies
          : savedMovies
    );
  }, [filteredMovies, savedMovies, isSavedSearch, savedFilteredMovies, stepDisplayMovies, location]);

  // получаем фильмы из API
  function handleSearchMovies(value, checkbox) {
    setIsSavedSearch(false);
    setFormValues({
      value: value,
      checkbox: checkbox,
    });

    valueLocal.save(value);
    checkboxLocal.save(checkbox);

    function filter(movies) {
      window.screen.width < 767
        ? setStepDisplayMovies(DISPLAY_MOVIE.FIRST_REQUEST.MOBILE)
        : window.screen.width > 1280
          ? setStepDisplayMovies(DISPLAY_MOVIE.FIRST_REQUEST.DESKTOP)
          : setStepDisplayMovies(DISPLAY_MOVIE.FIRST_REQUEST.TABLET);

      // фильтры без заглавных букв
      setFilteredMovies(
        movies.filter((i) => {
          if (checkbox) {
            return (
              i.nameRU.toLowerCase().includes(value.toLowerCase()) && i.duration <= SORT_DURATION
            );
          } else {
            return i.nameRU.toLowerCase().includes(value.toLowerCase());
          }
        })
      );
    }

    if (!allMovies.length) {
      setIsLoading(true);
      api
        .getMovies()
        .then((movies) => {
          setAllMovies(movies);
          moviesLocal.save(movies);
          filter(movies);
          setIsLoading(false);
          setResStatus(true);
        })
        .catch(() => {
          setResStatus(false);
          setIsInfoTooltip(true);
          setResMessage('Произошла ошибка запроса.');
        });
    } else {
      filter(allMovies);
    }
  }

  // фильтр сохраненных фильмов
  function handleSearchSavedMovies(value, checkbox) {
    setIsSavedSearch(true);

    const savedSearch = savedMovies.filter((i) => i.nameRU.toLowerCase().includes(value.toLowerCase()));

    const savedShortSearch = savedMovies.filter(
      (i) => i.nameRU.toLowerCase().includes(value.toLowerCase()) && i.SORT_DURATION <= SORT_DURATION
    );

    if (savedSearch || savedShortSearch) {
      if (checkbox && savedShortSearch) {
        setSavedFilteredMovies([...savedShortSearch]);
      } else if (savedSearch) {
        setSavedFilteredMovies([...savedSearch]);
      }
    }
  }

  function handleMovieLike(movie) {
    const savedMovie = savedMovies.find((i) => i.movieId === movie.id || movie.movieId);

    return MainApi.changeLikeMovieStatus(
      savedMovie && location.pathname === PAGES.MOVIES ? savedMovie : movie,
      savedMovie
    )
      .then((req) => {
        if (!savedMovie) {
          setSavedMovies([req, ...savedMovies]);
        } else if (location.pathname === PAGES.MOVIES) {
          setSavedMovies((state) => state.filter((c) => c.movieId !== movie.id));
        } else {
          setSavedMovies((state) => state.filter((c) => c.movieId !== movie.movieId));
        }
      })
      .catch(() => {
        setIsInfoTooltip(true);
        setResStatus(false);
        setResMessage('Произошла ошибка запроса.');
      });
  }

  function handleButtonMore() {
    const step =
      window.screen.width < 1280 ? DISPLAY_MOVIE.NEXT_REQUEST.TABLET_MOBILE : DISPLAY_MOVIE.NEXT_REQUEST.DESKTOP;
    setStepDisplayMovies(displayMovies.length + step);
  }

  function handleRegister(name, email, password) {
    return MainApi.register(name, email, password)
      .then((data) => {
        if (!data) return
        setFormValues({
          value: '',
          checkbox: '',
        });
        handleLogin({ email, password });
        setIsLoggedIn(true);
      })
      .catch(() => {
        setIsLoggedIn(false);
        setIsInfoTooltip(true);
        setResStatus(false);
        setResMessage('Произошла ошибка при регистрации. Попробуйте еще раз.');
      });
  }

  function handleLogin({ email, password }) {
    setIsLoggedIn(true);
    return MainApi.login(email, password)
      .then((data) => {
        if (!data) return;
        setFormValues({
          value: '',
          checkbox: '',
        });
        setCurrentUser(data);
        setIsLoggedIn(true);
        setIsInfoTooltip(true);
        setResStatus(true);
        setResMessage('Успешный вход.');
        history.push(PAGES.MOVIES);
      })
      .catch(() => {
        setCurrentUser({});
        setIsLoggedIn(false);
        setIsInfoTooltip(true);
        setResStatus(false);
        setResMessage('Неправильные Email или пароль.');
      });
  }

  function handleUpdateUser({ name, email }) {
    return MainApi.updateUser(name, email)
      .then((data) => {
        setCurrentUser(data);
        setIsInfoTooltip(true);
        setResStatus(true);
        setResMessage("Данные успешно обновлены.");
      })
      .catch(() => {
        setIsInfoTooltip(true);
        setResStatus(false);
        setResMessage('Произошла ошибка при внесении изменений.');
      });
  }

  function clearLocalStorage() {
    moviesLocal.delete();
    valueLocal.delete();
    checkboxLocal.delete();
  }

  function handleLogout() {
    return MainApi.logout()
      .then((data) => {
        if (!data) return;
        setIsLoggedIn(false);
        setCurrentUser({});
        setAllMovies([]);
        setFilteredMovies([]);
        setSavedMovies([]);
        setSavedFilteredMovies([]);
        setDisplayMovies([]);
        setFormValues({
          value: '',
          checkbox: '',
        });
        clearLocalStorage();
        history.push(PAGES.MAIN);
      })
      .catch(() => {
        setIsLoggedIn(false);
        setIsInfoTooltip(true);
        setResStatus(false);
        setResMessage('Произошла ошибка запроса.');
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header isLoggedIn={isLoggedIn} location={location} />
        <main className="content">
          <Switch>
            <Route path={PAGES.MAIN} exact>
              <Main />
            </Route>
            <Route path={PAGES.SIGNUP} exact>
              <Register onRegister={handleRegister} />
            </Route>
            <Route path={PAGES.SIGNIN} exact>
              <Login onLogin={handleLogin} />
            </Route>
            <ProtectedRoute isLoggedIn={isLoggedIn} path={PAGES.MOVIES} exact>
              <Movies
                location={location}
                allMovies={allMovies}
                displayMovies={displayMovies}
                filteredMovies={filteredMovies}
                savedMovies={savedMovies}
                isLoading={isLoading}
                formValues={formValues}
                resStatus={resStatus}
                onSearchMovies={handleSearchMovies}
                onLikeMovie={handleMovieLike}
                onButtonMore={handleButtonMore}
              />
            </ProtectedRoute>
            <ProtectedRoute isLoggedIn={isLoggedIn} path={PAGES.SAVEDMOVIES} exact>
              <SavedMovies
                location={location}
                displayMovies={displayMovies}
                savedMovies={savedMovies}
                savedFilteredMovies={savedFilteredMovies}
                isSavedSearchMovies={isSavedSearch}
                formValues={formValues}
                resStatus={resStatus}
                handleSearchSavedMovies={handleSearchSavedMovies}
                onLikeMovie={handleMovieLike}
              />
            </ProtectedRoute>
            <ProtectedRoute isLoggedIn={isLoggedIn} path={PAGES.PROFILE} exact>
              <Profile
                onUpdateUser={handleUpdateUser}
                onLogout={handleLogout}
              />
            </ProtectedRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
        <InfoTooltip
          isOpen={isInfoTooltip}
          onClose={() => {
            setIsInfoTooltip(false);
          }}
          resStatus={resStatus}
          resMessage={resMessage}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;