import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

/** Карточка с футером
 * @param children - содержимое карточки
 * @param className - доп. класс для карточки
 * @returns {JSX.Element}
 * @constructor
 */
const CardWithFooter = ({children, className}) => {
    return (
        <div className={classNames("shadow sm:rounded-md sm:overflow-hidden", className || "")}>
            {children}
        </div>
    );
};

/** Основная часть карточки */
CardWithFooter.Body = (props) =>
    <div className="bg-white dark:bg-gray-900 py-6 px-4 space-y-6 sm:p-6">
        {props.children}
    </div>;

/** Футер карточки */
CardWithFooter.Footer = (props) =>
    <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6">
        {props.children}
    </div>;

/** Типы свойств */
CardWithFooter.propTypes = {
    /** Доп. класс для карточки */
    className: PropTypes.string
};

/** Дефолтные свойства */
CardWithFooter.defaultProps = {
    className: ""
};

export default CardWithFooter;

