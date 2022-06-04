import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/** Кнопка, предупреждающая о действии
 * @param size - размер
 * @param label - лейбл кнопки
 * @param onClick - обработчик клика
 * @param type - тип
 * @param className
 * @param props - доп. пропсы
 * @returns {JSX.Element}
 * @constructor
 */
const DangerButton = ({size, label, onClick, type, className, ...props}) => {
    const sizes = {
        "small": "px-3 py-1.5 text-xs",
        "medium": "px-4 py-2 text-sm",
        "large": "px-6 py-3 text-base"
    }
    return (
        <button
            type={type}
            onClick={onClick}
            className={classNames("ml-5 bg-white dark:bg-gray-900 border border-gray-300 rounded-md shadow-sm leading-4 font-medium text-red-700 dark:text-red-300 hover:bg-red-300 hover:border-red-400 dark:hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 dark:border-gray-600 dark:hover:border-red-600", sizes[size], className || "")}
            {...props}
        >
            {label}
        </button>
    );
};

DangerButton.propTypes = {
    /** Размер кнопки */
    size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
    /** Лейбл (надпись) кнопки */
    label: PropTypes.string.isRequired,
    /** Доп. класс */
    className: PropTypes.string,
    /** Тип кнопки */
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    /** Обработчик клика */
    onClick: PropTypes.func,
};

DangerButton.defaultProps = {
    size: "medium",
    type: "button",
    className: "",
    label: "button",
    onClick: undefined,
};

export default DangerButton;