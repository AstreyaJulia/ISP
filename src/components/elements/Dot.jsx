import React from "react";
import PropTypes from "prop-types";

/** Точка (bullet)
 * @param size - размер
 * @param color - цвет
 * @param className - класс
 * @returns {JSX.Element}
 * @constructor
 */
const Dot = ({size, color, className}) => {

    const dotSize = {
        2: "h-2 w-2",
        3: "h-3 w-3",
        4: "h-4 w-4",
        5: "h-5 w-5",
        6: "h-6 w-6"
    }

    const dotColor = {
        red: "bg-red-500",
        orange: "bg-orange-500",
        yellow: "bg-yellow-500",
        green: "bg-green-500",
        cyan: "bg-cyan-500",
        blue: "bg-blue-500",
        indigo: "bg-indigo-500",
        pink: "bg-pink-500",
        gray: "bg-gray-500",
        sky: "bg-sky-500",
        teal: "bg-teal-500"
    }

    return (
        <span className={["rounded-full", className || "", dotColor[color], dotSize[size]].join(" ")}/>
    );
};

Dot.propTypes = {
    /** Размер точки */
    size: PropTypes.oneOf(["2", "3", "4", "5", "6"]).isRequired,
    /** Цвет */
    color: PropTypes.oneOf(["red", "orange", "yellow", "green", "cyan", "blue", "indigo", "pink", "gray", "sky", "teal"]).isRequired,
    /** Доп. класс для точки */
    className: PropTypes.string
};

Dot.defaultProps = {
    size: "2",
    color: "red",
    classname: ""
};

export default Dot;