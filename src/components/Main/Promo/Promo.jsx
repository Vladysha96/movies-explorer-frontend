import NavTab from "../NavTab/NavTab";
import "./Promo.css";
import promo from '../../../images/promo_planet.svg';

function Promo() {
    return (
        <section className="promo">
            <div className="promo__content">
                <div className="promo__container">
                    <img className='promo__logo' alt='Промо логотип' src={promo} />
                    <h1 className="promo__title">
                        Учебный проект студента факультета Веб-разработки.
                    </h1>
                    <p className="promo__text">
                        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                    </p>
                </div>
                <NavTab />
            </div>
        </section>
    );
}

export default Promo;
