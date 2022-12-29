import CustomLink from '../../../components/CustomLink/CustomLink';

import './NavTab.css';

function NavTab() {
  return (
    <section className="navtab">
      <nav>
        <div className="nav__links">
          <CustomLink className="nav__link" path="#about">
            <p className="nav__text">Узнать больше</p>
          </CustomLink>
        </div>
      </nav>
      <div className="nav__area" />
    </section>
  );
}

export default NavTab;
