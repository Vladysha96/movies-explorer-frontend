import CustomLink from '../CustomLink/CustomLink';

import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__companies">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>
      <div className="footer__wrapper">
        <p className="footer__copyright">© 2022</p>
        <div className="footer__nav">
          <CustomLink
            className="footer__nav-link"
            path="https://practicum.yandex.ru/"
          >
            Яндекс.Практикум
          </CustomLink>
          <CustomLink
            className="footer__nav-link"
            path="https://github.com/Vladysha96"
          >
            Github
          </CustomLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
