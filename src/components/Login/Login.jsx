import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormValidation";
import { VALIDATION_CONFIG } from "../../utils/constants";
import Logo from "../Logo/Logo";
import "./Login.css";

function Login({ onLogin }) {
    const { values, errors, isValid, handleChange } = useFormWithValidation(VALIDATION_CONFIG.LOGIN_DATA);

    function handleSubmitForm(e) {
        e.preventDefault();
        onLogin(values);
    }

    return (
        <section className="auth">
            <div className="auth__header">
                <Logo />
                <h1 className="auth__title">Рады видеть!</h1>
            </div>
            <form className="form" onSubmit={handleSubmitForm}>
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
                        className={`form__input ${errors.email ? "form__input_error" : ""}`}
                        placeholder="Пароль"
                        name="password"
                        minLength="6"
                        value={values.password || ""}
                        onChange={handleChange}
                        required
                    />
                    <span className="form__text-error">{errors.password || ""}</span>
                </label>
                <button className={isValid ? "form__button" : "form__button form__button_disabled"}
                    type="submit"
                    disabled={!isValid}
                >
                    Войти
                </button>
                <p className="form__text">
                    Еще не зарегистрированы?
                    <Link className="form__link" to="/signup">
                        Регистрация
                    </Link>
                </p>
            </form>
        </section>
    );
}

export default Login;