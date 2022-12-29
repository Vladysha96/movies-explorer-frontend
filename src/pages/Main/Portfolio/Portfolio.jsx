import Title from '../../../components/Title/Title';
import LinkContainer from '../../../components/LinkContainer/LinkContainer';
import CustomLink from '../../../components/CustomLink/CustomLink';

import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <Title className="portfolio__title">Портфолио</Title>
      <ul className="portfolio__links">
        <LinkContainer className="portfolio__item">
          <CustomLink
            path="https://vladysha96.github.io/how-to-learn/"
            className="portfolio__link"
          >
            Статичный сайт
          </CustomLink>
        </LinkContainer>
        <LinkContainer className="portfolio__item">
          <CustomLink
            path="https://vladysha96.github.io/russian-travel/"
            className="portfolio__link"
          >
            Адаптивный сайт
          </CustomLink>
        </LinkContainer>
        <LinkContainer className="portfolio__item">
          <CustomLink
            path="https://vladysha96.frontend.nomoredomains.icu"
            className="portfolio__link"
          >
            Одностраничное приложение
          </CustomLink>
        </LinkContainer>
      </ul>
    </section>
  );
}

export default Portfolio;
