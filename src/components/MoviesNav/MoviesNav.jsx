import Nav from '../Nav/Nav';
import LinkContainer from '../LinkContainer/LinkContainer';
import CustomLink from '../CustomLink/CustomLink';

import './MoviesNav.css';

function MoviesNav() {
  return (
    <Nav className="nav_movies">
      <LinkContainer className="nav__link-item">
        <CustomLink
          className="link_movies link_order_first"
          activeClassName="link_movies_active"
          path="/movies"
        >
          Фильмы
        </CustomLink>
      </LinkContainer>
      <LinkContainer className="nav__link-item">
        <CustomLink
          className="link_movies"
          activeClassName="link_movies_active"
          path="/saved-movies"
        >
          Сохранённые фильмы
        </CustomLink>
      </LinkContainer>
    </Nav>
  );
}

export default MoviesNav;
