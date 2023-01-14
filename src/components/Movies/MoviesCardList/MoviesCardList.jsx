import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { ERROR_MESSAGES } from "../../../utils/constants";
import "./MoviesCardList.css";

function MoviesCardList({
    location,
    isLoading,
    displayMovies,
    savedMovies,
    onLikeMovie,
    resStatus
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
                                location={location}
                                movie={movie}
                                key={movie.id || movie._id}
                                savedMovie={savedMovies}
                                onLikeMovie={onLikeMovie}
                            />
                        );
                    })}
                </>
            )}
        </section>
    );
}

export default MoviesCardList;