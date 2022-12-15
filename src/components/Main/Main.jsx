import "./Main.css";
import MainHeader from "../Header/MainHeader/MainHeader";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";

function Main() {
    return (
        <>
            <MainHeader />
            <main className="main">
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
            </main>
            <Footer />
        </>
    );
}

export default Main;
