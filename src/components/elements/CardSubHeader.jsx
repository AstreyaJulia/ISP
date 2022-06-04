import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/** Подзаголовок карточки
 * @param title - подзаголовок
 * @param className - доп. класс/ы
 * @returns {JSX.Element}
 * @constructor
 */
export const CardSubHeader = ({title, className}) => {
    return (
        <p className={classNames("mt-1 text-sm text-gray-500", className || "")}>{title}</p>
    );
};

CardSubHeader.propTypes = {
    /** Заголовок */
    title: PropTypes.string.isRequired,
    /** Класс/ы */
    className: PropTypes.string
};

CardSubHeader.defaultProps = {
    /** Заголовок */
    title: "",
    /** Класс/ы */
    className: PropTypes.string
};

export default CardSubHeader;