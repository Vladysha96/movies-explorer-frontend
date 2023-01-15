import "./InfoTooltip.css";

const InfoTooltip = ({ isOpen, onClose, resStatus, resMessage }) => {
    return (
        <div className={`popup ${isOpen ? "popup_opened" : ""}`} onClick={onClose}>
            <div
                className="popup__container"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <button
                    onClick={onClose}
                    className="popup__button-close"
                    type="button"
                />
                <div
                    className={`popup__status ${resStatus && "popup__status_ok"
                        }`}
                />
                <p className="popup__message">{resMessage}</p>
            </div>
        </div>
    );
};

export default InfoTooltip;