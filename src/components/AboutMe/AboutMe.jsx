import "./AboutMe.css";
import photo from "../../images/photo.jpg";
import Portfolio from "../Main/Portfolio/Portfolio";

function AboutMe() {
    return (
        <section className="about-me">
            <div className="about-me__container">
                <h3 className="about-me__title">Студент</h3>
                <div className="about-me__wrapper">
                    <div className="about-me__description">
                        <p className="about-me__name">Владислав</p>
                        <p className="about-me__profession">Фронтенд-разработчик, 26 лет</p>
                        <p className="about-me__text">
                            Я родился в Крыму. В 2019 году получил степерь магистра по специальности "Электротехника и электротехнологии".
                            Проработав по данной специальности в электросетевой компании, после в строительной компании, понял, что
                            этот вид деятельности удовольствия мне не приносит. В 2022 году переехал в Москву и решил сменить специальность.
                            Долгое время увлекался интернет-ресурсами и контентом в сфере кино и игровой индустрии. Поэтому я прошел курс по
                            веб-разработке в Яндекс Практикуме с перспективой окунуться в этот дивный и интересный мир.
                        </p>
                        <a
                            className="about-me__link"
                            href="https://github.com/Vladysha96"
                            target="#_blank"
                        >
                            Github
                        </a>
                    </div>
                    <img className="about-me__photo" src={photo} alt="Моя фотография" />
                </div>
                <Portfolio />
            </div>
        </section>
    );
}

export default AboutMe;
