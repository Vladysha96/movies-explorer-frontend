import Footer from "../Footer/Footer";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies({
    location,
    displayMovies,
    savedMovies,
    savedFilteredMovies,
    resStatus,
    formValues,
    handleSearchSavedMovies,
    onLikeMovie,
}) {
    return (
        <>
            <main className="main">
                <SearchForm
                    location={location}
                    searchSavedMovies={handleSearchSavedMovies}
                    formValues={formValues}
                />
                <MoviesCardList
                    location={location}
                    displayMovies={displayMovies}
                    savedMovies={savedMovies}
                    savedFilteredMovies={savedFilteredMovies}
                    onLikeMovie={onLikeMovie}
                    resStatus={resStatus}
                />
                <div className="saved-movies__interval"></div>
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
