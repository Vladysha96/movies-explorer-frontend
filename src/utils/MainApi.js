export const BASE_URL = "https://api.vladysha96.movies.nomoredomains.club/";

function request({ url, method = "POST", data, token }) {
    return fetch(`${BASE_URL}${url}`, {
        credentials: "include",
        mode: "cors",
        method: method,
        headers: {
            "Content-Type": "application/json",
            ...(!!token && { Authorization: `Bearer ${token}` }),
        },
        ...(!!data && { body: JSON.stringify(data) }),
    }).then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const register = (name, email, password) => {
    return request({
        url: "signup",
        data: { name, email, password },
    });
};

export const login = (email, password) => {
    return request({
        url: "signin",
        data: { email, password },
    });
};

export const updateUser = (name, email) => {
    return request({
        url: "users/me",
        method: "PATCH",
        data: { name, email },
    });
};

export const checkToken = (token) => {
    return request({
        url: "users/me",
        method: "GET",
        token,
    });
};

export const logout = () => {
    return request({
        url: "signout",
        method: "DELETE",
    });
};

export const getMovies = () => {
    return request({
        url: "movies",
        method: "GET",
    });
};

const saveMovie = (movie) => {
    return request({
        url: "movies",
        data: {
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image:
                movie.image instanceof Object
                    ? `https://api.nomoreparties.co/${movie.image.url}`
                    : movie.image,
            thumbnail:
                movie.image instanceof Object
                    ? `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`
                    : movie.thumbnail,
            trailerLink: movie.trailerLink,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
        },
    });
};

const deleteSaveMovies = (id) => {
    return request({
        url: `movies/${id}`,
        method: "DELETE",
    });
};

export const changeLikeMovieStatus = (movie, isLiked) => {
    return !isLiked ? saveMovie(movie) : deleteSaveMovies(movie._id);
};