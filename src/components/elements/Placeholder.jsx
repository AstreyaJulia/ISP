import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

/** Заглушка-распорка для заполнения пустых блоков
 * @param height - высота заглушки
 * @returns {JSX.Element}
 * @constructor
 */
const Placeholder = ({height}) => {
    return (
        <svg
            className={classNames("border-2 border-dashed border-gray-200 dark:border-gray-700 w-full text-gray-200 dark:hover:text-gray-300", height)}
            preserveAspectRatio="none" stroke="currentColor" fill="none" viewBox="0 0 200 200" aria-hidden="true">
        </svg>
    );
};

Placeholder.propTypes = {
    /** Высота заглушки */
    height: PropTypes.oneOf(["h-1", "h-10", "h-20", "h-30", "h-40", "h-50", "h-60"]).isRequired,
};

Placeholder.defaultProps = {
    height: "h-60"
};

export default Placeholder;
