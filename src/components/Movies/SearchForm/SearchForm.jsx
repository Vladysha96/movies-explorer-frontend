import "./SearchForm.css";

function SearchForm() {
    return (
        <section className="search-form">
            <form className="search-form__form">
                <input
                    className="search-form__input"
                    type="text"
                    placeholder="Фильм"
                    name="film"
                    required
                />
                <button className="search-form__button-text" type="submit">
                    Найти
                </button>
            </form>
            <div htmlFor="search-switch" className="search-form__switch">
                <input
                    className="search-form__checkbox"
                    type="checkbox"
                    name="filter"
                    id="filter"
                />
                <label htmlFor="filter"></label>
                <span className="search-form__switch-text">Короткометражные фильмы</span>
            </div>
        </section>
    );
}

export default SearchForm;
