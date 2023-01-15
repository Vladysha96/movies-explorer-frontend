import Footer from "../Footer/Footer";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies({
    displayMovies,
    savedMovies,
    savedFilteredMovies,
    resStatus,
    formValues,
    handleSearchSavedMovies,
    onLikeMovie,
    onDurationFilter,
    location
}) {
    return (
        <>
            <main className="main">
                <SearchForm
                    searchSavedMovies={handleSearchSavedMovies}
                    formValues={formValues}
                    onDurationFilter={onDurationFilter}
                    location={location}
                />
                <MoviesCardList
                    displayMovies={displayMovies}
                    savedMovies={savedMovies}
                    savedFilteredMovies={savedFilteredMovies}
                    onLikeMovie={onLikeMovie}
                    resStatus={resStatus}
                    location={location}
                />
                <div className="saved-movies__interval"></div>
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
