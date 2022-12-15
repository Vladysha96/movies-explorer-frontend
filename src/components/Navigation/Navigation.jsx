import { NavLink } from "react-router-dom";

import "./Navigation.css";

import { pages } from "../../utils/constants";

function Navigation() {
    return (
        <nav className="navigation">
            <div className="navigation__auth">
                <div className="navigation__movies">
                    <NavLink
                        className="navigation__link"
                        activeClassName="navigation__link_active"
                        to={pages.Movies}
                    >
                        Фильмы
                    </NavLink>
                    <NavLink
                        className="navigation__link"
                        activeClassName="navigation__link_active"
                        to={pages.SavedMovies}
                    >
                        Сохранённые фильмы
                    </NavLink>
                </div>
                <div className="navigation__profile">
                    <NavLink
                        className="navigation__link navigation__link_profile"
                        activeClassName="navigation__link_active"
                        to={pages.Profile}
                    >
                        Аккаунт
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
