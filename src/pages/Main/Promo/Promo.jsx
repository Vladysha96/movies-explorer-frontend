import Title from '../../../components/Title/Title';
import promo from '../../../images/promo-logo.svg';

import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <img className="promo__logo" alt="Промо логотип" src={promo} />
        <Title Tag="h1" className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </Title>
        <p className="promo__text">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
      </div>
    </section>
  );
}

export default Promo;
