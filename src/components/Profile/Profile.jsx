import { useContext, useEffect } from "react";
import { useFormWithValidation } from "../../hooks/useFormValidation";
import { VALIDATION_ATTRIBUTES } from "../../utils/constants";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { VALIDATION_CONFIG } from "../../utils/constants";
import "./Profile.css";

function Profile({ onUpdateUser, onLogout }) {
    const currentUser = useContext(CurrentUserContext);
    const { values, isValid, errors, handleChange, resetForm } = useFormWithValidation(VALIDATION_CONFIG.REGISTER_DATA);

    const validUpdateUser =
        (values.name !== currentUser.name || values.email !== currentUser.email) &&
        VALIDATION_ATTRIBUTES.REGEX.NAME.test(values.name) &&
        VALIDATION_ATTRIBUTES.REGEX.EMAIL.test(values.email);

    function clickUpdateButton(e) {
        e.preventDefault();
        if (!isValid) return;
        onUpdateUser(values);
    }

    useEffect(() => {
        if (currentUser) {
            resetForm(currentUser, {}, true);
        }
    }, [currentUser, resetForm]);


    return (
        <>
            <section className="profile">
                <div className="profile__container">
                    <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
                    <form className="profile__form">
                        <label className="profile__label">
                            Имя
                            <input
                                className={`profile__input ${errors.name ? 'profile__input_error' : ''}`}
                                type="text"
                                name="name"
                                value={values.name || ""}
                                onChange={handleChange}
                                minLength="2"
                                required
                            />
                        </label>
                        <span className="profile__text-error">{errors.name || ""}</span>
                        <label className="profile__label">
                            E-mail
                            <input
                                className={`profile__input ${errors.email ? 'profile__input_error' : ''}`}
                                type="email"
                                name="email"
                                value={values.email || ""}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <span className="profile__text-error">{errors.email || ""}</span>
                    </form>
                    <div className="profile__control">
                        <button
                            className={isValid ? "profile__button" : "profile__button profile__button_disabled"}
                            type="submit"
                            disabled={!validUpdateUser}
                            onClick={clickUpdateButton}
                        >
                            Редактировать
                        </button>
                        <button
                            className="profile__button profile__button_red"
                            type="button"
                            onClick={onLogout}
                        >
                            Выйти из аккаунта
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;
