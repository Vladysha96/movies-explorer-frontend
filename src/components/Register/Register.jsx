import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormValidation";
import { VALIDATION_CONFIG } from "../../utils/constants";
import Logo from "../Logo/Logo";
import "./Register.css";

function Register({ onRegister }) {
    const { values, handleChange, errors, isValid } = useFormWithValidation(VALIDATION_CONFIG.REGISTER_DATA);

    function handleSubmitForm(e) {
        e.preventDefault();

        const { name, email, password } = values;
        if (!isValid) return;
        onRegister(name, email, password);
    }

    return (
        <section className="auth">
            <div className="auth__header">
                <Logo />
                <h1 className="auth__title">Добро пожаловать!</h1>
            </div>
            <form className="form" onSubmit={handleSubmitForm}>
                <label className="form__label">
                    Имя
                    <input
                        type="text"
                        className={`form__input ${errors.name ? "form__input_error" : ""}`}
                        placeholder="Имя"
                        name="name"
                        minLength="2"
                        value={values.name || ""}
                        onChange={handleChange}
                        required
                    />
                    <span className="form__text-error">{errors.name || ""}</span>
                </label>
                <label className="form__label">
                    E-mail
                    <input
                        type="email"
                        className={`form__input ${errors.email ? "form__input_error" : ""}`}
                        placeholder="E-mail"
                        name="email"
                        value={values.email || ""}
                        onChange={handleChange}
                        required
                    />
                    <span className="form__text-error">{errors.email || ""}</span>
                </label>
                <label className="form__label" placeholder="Пароль">
                    Пароль
                    <input
                        type="password"
                        className={`form__input ${errors.password ? "form__input_error" : ""}`}
                        placeholder="Пароль"
                        name="password"
                        minLength="5"
                        value={values.password || ""}
                        onChange={handleChange}
                        required
                    />
                    <span className="form__text-error">{errors.password || ""}</span>
                </label>
                <button
                    className={isValid ? "form__button" : "form__button form__button_disabled"}
                    type="submit"
                    disabled={!isValid}
                >
                    Зарегистрироваться
                </button>
                <p className="form__text">
                    Уже зарегистрированы?
                    <Link className="form__link" to="/signin">Войти</Link>
                </p>
            </form>
        </section>
    );
}

export default Register;
