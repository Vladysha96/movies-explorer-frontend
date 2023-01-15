import { React, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { PAGES } from "../../utils/constants";

function Header({ isLoggedIn, location }) {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

    const toggleHamburger = () => {
        setBurgerMenuOpen(!burgerMenuOpen);
    };

    const authorization = ['/signup', '/signin'];

    return (
        <header className="header">
            {!isLoggedIn ? (
                <>
                    {!authorization.includes(location.pathname) && (
                        <div className="header__container_main">
                            <Logo />
                            <div className="header__auth-button">
                                <Link className="header__button" to={PAGES.SIGNUP}>
                                    Регистрация
                                </Link>
                                <Link
                                    className="header__button header__button_green"
                                    to={PAGES.SIGNIN}
                                >
                                    Войти
                                </Link>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div className="header__container">
                        <Logo />
                        <Navigation />
                        <div className="header__burger-menu" onClick={toggleHamburger}>
                            <BurgerMenu isOpen={burgerMenuOpen} />
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}

export default Header;
