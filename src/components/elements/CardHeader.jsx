import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/** Заголовок карточки
 * @param title - заголовок
 * @param className - доп. класс/ы
 * @param props - доп. пропсы
 * @returns {JSX.Element}
 * @constructor
 */
const CardHeader = ({title, className, ...props}) => {
    return (
        <h3
            className={classNames("text-base leading-6 font-medium text-gray-800 dark:text-gray-200 pb-4 border-b border-gray-200 dark:border-gray-700", className || "")}
            {...props}
        >
            {title}
        </h3>
    );
};

CardHeader.propTypes = {
    /** Заголовок */
    title: PropTypes.string.isRequired,
    /** Класс/ы */
    className: PropTypes.string
};

CardHeader.defaultProps = {
    /** Заголовок */
    title: "",
    /** Класс/ы */
    className: PropTypes.string
};

export default CardHeader;
