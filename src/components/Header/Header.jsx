import { React, useState } from "react";
import Logo from "../Logo/Logo";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import BurgerMenu from './BurgerMenu/BurgerMenu';

function Header() {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

    const toggleHamburger = () => {
        setBurgerMenuOpen(!burgerMenuOpen);
    };

    return (
        <header className="header">
            <div className="header__container">
                <Logo />
                <Navigation />
                <div className="header__burger-menu" onClick={toggleHamburger}>
                    <BurgerMenu isOpen={burgerMenuOpen} />
                </div>
            </div>
        </header>
    );
}

export default Header;
