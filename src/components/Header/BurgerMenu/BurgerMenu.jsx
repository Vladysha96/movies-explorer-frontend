import './BurgerMenu.css';
import { PAGES } from "../../../utils/constants";
import { NavLink } from "react-router-dom";

function BurgerMenu({ isOpen }) {
    return (
        <>
            <ul className="burger-btn">
                <div className="burger-btn__row burger-btn__row_first" />
                <div className="burger-btn__row burger-btn__row_second" />
                <div className="burger-btn__row burger-btn__row_third" />
            </ul>

            <style jsx="true">
                {`
                    .burger-btn__row_first {
                        transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                    }
                    .burger-btn__row_second {
                        transform: ${isOpen ? 'translateX(100%)' : 'translateX(0)'};
                        opacity: ${isOpen ? 0 : 1};
                    }
                    .burger-btn__row_third {
                        transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                    }
                `}
            </style>

            <div className={`burger-menu ${isOpen ? 'opened' : ''}`}>
                <ul className="burger-menu__links">
                    <li className="burger-menu__item">
                        <NavLink
                            className="burger-menu__link"
                            to={PAGES.MAIN}
                        >
                            Главная
                        </NavLink>
                    </li>
                    <li className="burger-menu__item">
                        <NavLink
                            className="burger-menu__link"
                            to={PAGES.MOVIES}
                        >
                            Фильмы
                        </NavLink>
                    </li>
                    <li className="burger-menu__item">
                        <NavLink
                            className="burger-menu__link"
                            to={PAGES.SAVEDMOVIES}
                        >
                            Сохраненные фильмы
                        </NavLink>
                    </li>
                </ul>
                <NavLink
                    className="burger-menu__account-btn"
                    to={PAGES.PROFILE}
                >
                    Аккаунт
                </NavLink>
            </div>

            <div className={`overlay ${isOpen ? 'visible' : ''}`} />
        </>
    );
}

export default BurgerMenu;
