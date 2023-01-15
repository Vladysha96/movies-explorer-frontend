import Footer from "../Footer/Footer";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import { PAGES } from "../../utils/constants";
import "./Movies.css";

function Movies({
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
    onDurationFilter,
    location
}) {
    return (
        <>
            <main className="main">
                <SearchForm formValues={formValues} searchMovies={onSearchMovies} location={location} onDurationFilter={onDurationFilter} />
                {!allMovies.length ? '' : !filteredMovies.length &&
                    <p className="movies__error-message">Ничего не найдено.</p>
                }
                <MoviesCardList
                    isLoading={isLoading}
                    displayMovies={displayMovies}
                    savedMovies={savedMovies}
                    onLikeMovie={onLikeMovie}
                    resStatus={resStatus}
                    location={location}
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