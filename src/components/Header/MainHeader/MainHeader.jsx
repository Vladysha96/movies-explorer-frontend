import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Logo/Logo";
import "./MainHeader.css";
import { pages } from "../../../utils/constants";

function MainHeader() {
    return (
        <header className="header_main">
            <div className="header__container">
                <Logo />
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
            </div>
        </header>
    );
}

export default MainHeader;
