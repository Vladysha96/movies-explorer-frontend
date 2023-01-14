import Footer from "../Footer/Footer";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import { PAGES } from "../../utils/constants";
import "./Movies.css";

function Movies({
    location,
    allMovies,
    displayMovies,
    filteredMovies,
    savedMovies,
    resStatus,
    isLoading,
    formValues,
    onSearchMovies,
    onLikeMovie,
    onButtonMore,
}) {
    return (
        <>
            <main className="main">
                <SearchForm formValues={formValues} searchMovies={onSearchMovies} location={location} />
                {!allMovies.length ? '' : !filteredMovies.length &&
                    <p className="movies__error-message">Ничего не найдено.</p>
                }
                <MoviesCardList
                    location={location}
                    isLoading={isLoading}
                    displayMovies={displayMovies}
                    savedMovies={savedMovies}
                    onLikeMovie={onLikeMovie}
                    resStatus={resStatus}
                />
                {location.pathname === PAGES.MOVIES &&
                    filteredMovies && filteredMovies?.length !== displayMovies?.length && (
                        <button
                            className="movies__more-button"
                            type="button"
                            onClick={onButtonMore}
                        >
                            Ещё
                        </button>
                    )}
            </main>
            <Footer />
        </>
    );
}

export default Movies;