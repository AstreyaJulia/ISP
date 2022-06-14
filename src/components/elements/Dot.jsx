import React from "react";
import PropTypes from "prop-types";

/** Точка (bullet)
 * @param size - размер
 * @param color - цвет
 * @param className - класс
 * @param shape - форма
 * @param fill - заливка
 * @returns {JSX.Element}
 * @constructor
 */
const Dot = ({size, color, className, shape, fill}) => {

    const dotSize = {
        2: "h-2 w-2 border border-1",
        3: "h-3 w-3 border border-2",
        4: "h-4 w-4 border border-2",
        5: "h-5 w-5 border border-3",
        6: "h-6 w-6 border border-3"
    }

    const dotColor = {
        red: {bordered: "bg-red-500/30 border-red-500", solid: "bg-red-500 border-red-500"},
        orange: {bordered: "bg-orange-500/30 border-orange-500", solid: "bg-orange-500 border-orange-500"},
        yellow: {bordered: "bg-yellow-500/30 border-yellow-500", solid: "bg-yellow-500 border-yellow-500"},
        green: {bordered: "bg-green-500/30 border-green-500", solid: "bg-green-500 border-green-500"},
        cyan: {bordered: "bg-cyan-500/30 border-cyan-500", solid: "bg-cyan-500 border-cyan-500"},
        blue: {bordered: "bg-blue-500/30 border-blue-500", solid: "bg-blue-500 border-blue-500"},
        indigo: {bordered: "bg-indigo-500/30 border-indigo-500", solid: "bg-indigo-500 border-indigo-500"},
        pink: {bordered: "bg-pink-500/30 border-pink-500", solid: "bg-pink-500 border-pink-500"},
        gray: {bordered: "bg-gray-500/30 border-gray-500", solid: "bg-gray-500 border-gray-500"},
        sky: {bordered: "bg-sky-500/30 border-sky-500", solid: "bg-sky-500 border-sky-500"},
        teal: {bordered: "bg-teal-500/30 border-teal-500", solid: "bg-teal-500 border-teal-500"}
    }

    const dotShape = {
        square: "rounded-none", roundedMD: "rounded-md", roundedLG: "rounded-lg", circle: "rounded-full"
    }

    return (<span className={[dotShape[shape], className || "", dotColor[color][fill], dotSize[size]].join(" ")}/>);
};

Dot.propTypes = {
    /** Размер точки */
    size: PropTypes.oneOf(["2", "3", "4", "5", "6"]).isRequired,
    shape: PropTypes.oneOf(["square", "roundedMD", "roundedLG", "circle"]).isRequired,
    fill: PropTypes.oneOf(["bordered", "solid"]).isRequired,
    /** Цвет */
    color: PropTypes.oneOf(["red", "orange", "yellow", "green", "cyan", "blue", "indigo", "pink", "gray", "sky", "teal"]).isRequired,
    /** Доп. класс для точки */
    className: PropTypes.string
};

Dot.defaultProps = {
    size: "2", color: "red", shape: "circle", fill: "bordered", classname: ""
};

export default Dot;
