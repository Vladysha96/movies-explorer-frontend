import "./Portfolio.css";

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a
                        href="https://github.com/Vladysha96/how-to-learn"
                        className="portfolio__link"
                        target="#_blank"
                    >
                        Статичный сайт
                    </a>
                    <a
                        href="https://github.com/Vladysha96/how-to-learn"
                        className="portfolio__arrow"
                        target="#_blank"
                    >
                        ↗
                    </a>
                </li>
                <li className="portfolio__item">
                    <a
                        href="https://Vladysha96.github.io/russian-travel/"
                        className="portfolio__link"
                        target="#_blank"
                    >
                        Адаптивный сайт
                    </a>
                    <a
                        href="https://Vladysha96.github.io/russian-travel/"
                        className="portfolio__arrow"
                        target="#_blank"
                    >
                        ↗
                    </a>
                </li>
                <li className="portfolio__item">
                    <a
                        href="https://vladysha96.frontend.nomoredomains.icu/"
                        className="portfolio__link"
                        target="#_blank"
                    >
                        Одностраничное приложение
                    </a>
                    <a
                        href="https://vladysha96.frontend.nomoredomains.icu/"
                        className="portfolio__arrow"
                        target="#_blank"
                    >
                        ↗
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;
