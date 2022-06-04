import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Badge = ({size, color, item, className}) => {

    const BadgeSize = {
        small: "px-2.5 py-0.5 text-xs",
        large: "px-3 py-0.5 text-sm"
    }

    const BadgeColor = {
        red: "bg-red-500/30 text-red-700 dark:text-red-300",
        orange: "bg-orange-500/30 text-orange-700 dark:text-orange-300",
        yellow: "bg-yellow-500/30 text-yellow-700 dark:text-yellow-300",
        green: "bg-green-500/30 text-green-700 dark:text-green-300",
        cyan: "bg-cyan-500/30 text-cyan-700 dark:text-cyan-300",
        blue: "bg-blue-500/30 text-blue-700 dark:text-blue-300",
        indigo: "bg-indigo-500/30 text-indigo-700 dark:text-indigo-300",
        pink: "bg-pink-500/30 text-pink-700 dark:text-pink-300"
    }


    return (
        <span
            className={classNames("inline-flex items-center rounded-full font-medium", BadgeSize[size], BadgeColor[color], className)}>
        {item}
      </span>
    );
};

Badge.propTypes = {
    /**  Данные */
    item: PropTypes.string.isRequired,
    /**  Размер бейджа */
    size: PropTypes.oneOf(["small", "large"]).isRequired,
    /**  Цвет бейджа */
    color: PropTypes.oneOf(["red", "orange", "yellow", "green", "cyan", "blue", "indigo", "pink"]).isRequired,
    /** Доп. класс/ы для бейджа */
    className: PropTypes.string
};

Badge.defaultProps = {
    size: "small",
    color: "red",
    item: "Бейдж",
    className: ""
};

export default Badge;