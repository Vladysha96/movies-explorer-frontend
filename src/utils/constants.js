export const PAGES = {
    SIGNIN: '/signin',
    SIGNUP: '/signup',
    MAIN: '/',
    MOVIES: '/movies',
    PROFILE: '/profile',
    SAVEDMOVIES: '/saved-movies',
};

export const BASE_URL = "https://api.nomoreparties.co/";

export const VALIDATION_ATTRIBUTES = {
    REGEX: {
        NAME: /^[A-Za-zА-Яа-яЁё /s -]+$/i,
        EMAIL: /^\S+@\S+\.\S+$/i,
    },
    MESSAGES: {
        NAME: 'Имя может состоять только из букв, пробелов и дефиса',
        EMAIL: 'Неправильный формат Email',
    },
};

export const VALIDATION_CONFIG = {
    REGISTER_DATA: {
        INPUTS: ['name', 'email'],
        REGEX: {
            name: VALIDATION_ATTRIBUTES.REGEX.NAME,
            email: VALIDATION_ATTRIBUTES.REGEX.EMAIL,
        },
        MESSAGES: {
            name: VALIDATION_ATTRIBUTES.MESSAGES.NAME,
            email: VALIDATION_ATTRIBUTES.MESSAGES.EMAIL,
        },
    },
    LOGIN_DATA: {
        INPUTS: ['email'],
        REGEX: {
            email: VALIDATION_ATTRIBUTES.REGEX.EMAIL,
        },
        MESSAGES: {
            email: VALIDATION_ATTRIBUTES.MESSAGES.EMAIL,
        },
    },
};

export const ERROR_MESSAGES =
    'Во время запроса произошла ошибка.';

export const DISPLAY_MOVIE = {
    FIRST_REQUEST: {
        DESKTOP: 12,
        TABLET: 8,
        MOBILE: 5,
    },
    NEXT_REQUEST: {
        DESKTOP: 3,
        TABLET_MOBILE: 2,
    },
};

export const SORT_DURATION = 40;