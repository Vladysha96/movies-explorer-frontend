import { useEffect, useState } from "react";
import { PAGES } from "../../../utils/constants";
import "./SearchForm.css";

function SearchForm({ formValues, searchMovies, searchSavedMovies, location, onDurationFilter }) {
    const [isInvalid, setInvalid] = useState(false);
    const [searchValue, setSearchValue] = useState(location.pathname === PAGES.MOVIES ? formValues.value : '');
    const [searchCheckbox, setCheckbox] = useState(location.pathname === PAGES.MOVIES ? formValues.checkbox : false);

    function handleSearchValue(e) {
        setSearchValue(e.target.value);
    }

    function handleSearchCheckbox(e) {
        const checkbox = e.target.checked;
        setCheckbox(checkbox);
        onDurationFilter(searchValue, checkbox);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (e.target[0].value === "" && location.pathname === PAGES.MOVIES) {
            setInvalid(true);
            return;
        }
        setInvalid(false);
        if (location.pathname === PAGES.SAVEDMOVIES) {
            searchSavedMovies(searchValue, searchCheckbox);
        } else {
            searchMovies(searchValue, searchCheckbox);
        }
    }

    useEffect(() => {
        if (location.pathname === PAGES.MOVIES) {
            setSearchValue(formValues.value);
            setCheckbox(formValues.checkbox);
        }
    }, [formValues, location]);

    return (
        <section className="search-form">
            <form className="search-form__form" onSubmit={handleSubmit}>
                <input
                    className="search-form__input"
                    type="text"
                    placeholder="Фильм"
                    name="search"
                    value={searchValue}
                    onChange={handleSearchValue}
                />
                <button className="search-form__button-text" type="submit">
                    Найти
                </button>
            </form>
            <span className="search-form__error">
                {isInvalid && "Нужно ввести ключевое слово"}
            </span>
            <div htmlFor="search-checkbox" className="search-form__switch">
                <input
                    className="search-form__checkbox"
                    type="checkbox"
                    name="checkbox"
                    checked={searchCheckbox}
                    onChange={handleSearchCheckbox}
                    id="search-checkbox"
                />
                <label htmlFor="search-checkbox"></label>
                <span className="search-form__switch-text">Короткометражки</span>
            </div>
        </section>
    );
}

export default SearchForm;
