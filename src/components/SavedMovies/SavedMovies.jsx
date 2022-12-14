import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies() {
    return (
        <>
            <Header />
            <main className="main">
                <SearchForm />
                <MoviesCardList />
                <div className="saved-movies__interval"></div>
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
