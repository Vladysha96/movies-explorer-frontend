import Title from '../../../components/Title/Title';
import CustomLink from '../../../components/CustomLink/CustomLink';
import profileImage from '../../../images/profile-img.jpg';

import './AboutMe.css';

function AboutMe() {
  return (
    <section className="profile" id="profile">
      <Title className="profile__subject">Студент</Title>
      <div className="profile__about">
        <img className="profile__image" src={profileImage} alt="student" />
        <div className="profile__container">
          <Title Tag="h3" className="profile__title">
            Владислав
          </Title>
          <p className="profile__subtitle">Фронтенд-разработчик, 26 лет</p>
          <p className="profile__description">
            Я родился в Крыму. В 2019 году получил степерь магистра по
            специальности &Prime;Электротехника и электротехнологии&Prime;.
            Проработав по данной специальности в электросетевой компании, после
            в строительной компании, понял, что этот вид деятельности
            удовольствия мне не приносит. В 2022 году переехал в Москву и решил
            специальность. Долгое время увлекался интернет-ресурсами и контентом
            в сфере кино и игровой индустрии. Поэтому я прошел курс по
            веб-разработке в Яндекс Практикуме с перспективой окунуться в этот
            дивный и интересный мир.
          </p>
          <CustomLink
            path="https://github.com/Vladysha96"
            className="profile__link"
          >
            Github
          </CustomLink>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
