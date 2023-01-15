import { NavLink } from "react-router-dom";
import { PAGES } from "../../utils/constants";
import "./Navigation.css";

function Navigation() {
    return (
        <nav className="navigation">
            <div className="navigation__auth">
                <div className="navigation__movies">
                    <NavLink
                        className="navigation__link"
                        activeClassName="navigation__link_active"
                        to={PAGES.MOVIES}
                    >
                        Фильмы
                    </NavLink>
                    <NavLink
                        className="navigation__link"
                        activeClassName="navigation__link_active"
                        to={PAGES.SAVEDMOVIES}
                    >
                        Сохранённые фильмы
                    </NavLink>
                </div>
                <div className="navigation__profile">
                    <NavLink
                        className="navigation__link navigation__link_profile"
                        activeClassName="navigation__link_active"
                        to={PAGES.PROFILE}
                    >
                        Аккаунт
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
