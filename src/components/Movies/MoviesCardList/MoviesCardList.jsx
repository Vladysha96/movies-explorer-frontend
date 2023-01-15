import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { ERROR_MESSAGES } from "../../../utils/constants";
import "./MoviesCardList.css";

function MoviesCardList({
    isLoading,
    displayMovies,
    savedMovies,
    onLikeMovie,
    resStatus,
    location
}) {
    return (
        <section className="movies-card-list">
            {isLoading ? (
                <Preloader />
            ) : !resStatus ? (
                <p className="movies-card-list__error-message">{ERROR_MESSAGES}</p>
            ) : (
                <>
                    {displayMovies.map((movie) => {
                        return (
                            <MoviesCard
                                movie={movie}
                                key={movie.id || movie._id}
                                savedMovie={savedMovies}
                                onLikeMovie={onLikeMovie}
                                location={location}
                            />
                        );
                    })}
                </>
            )}
        </section>
    );
}

export default MoviesCardList;