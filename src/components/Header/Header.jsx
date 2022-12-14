import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Header.css";
import { pages } from "../../utils/constants";
import Navigation from "../Navigation/Navigation";

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <Logo />
                {window.location.pathname === pages.Main && (
                    <div className="header__auth-button">
                        <Link className="header__button" to={pages.Signup}>
                            Регистрация
                        </Link>
                        <Link
                            className="header__button header__button_green"
                            to={pages.Signin}
                        >
                            Войти
                        </Link>
                    </div>
                )}
                {(window.location.pathname === pages.Movies ||
                    window.location.pathname === pages.SavedMovies ||
                    window.location.pathname === pages.Profile) && <Navigation />}
            </div>
        </header>
    );
}

export default Header;
