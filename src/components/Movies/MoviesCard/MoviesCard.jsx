import "./MoviesCard.css";
import { PAGES, BASE_URL } from "../../../utils/constants";

function MoviesCard({ movie, savedMovie, onLikeMovie, location }) {
    const displayDuration = (duration) => {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;

        return hours ? `${hours}ч ${minutes}м` : `${minutes}м`;
    }

    return (
        <div className="movies-card">
            <a
                className="movies-card__trailer-link"
                href={movie.trailerLink}
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className="movies-card__img"
                    src={`${location.pathname === PAGES.SAVEDMOVIES ?
                        movie.image : `${BASE_URL}${movie.image.url}`}`}
                    alt={movie.nameRU}
                />
            </a>
            <div className="movies-card__info">
                <p className="movies-card__name-film">{movie.nameRU}</p>
                <button
                    onClick={() => onLikeMovie(movie)}
                    className={`movies-card__like ${savedMovie.find((i) => i.movieId === movie.id)
                        ? "movies-card__like_active"
                        : location.pathname === PAGES.SAVEDMOVIES
                            ? "movies-card__delete"
                            : ""
                        }`}
                />
            </div>
            <p className="movies-card__film-duration">{displayDuration(movie.duration)}</p>
        </div>
    );
}

export default MoviesCard;