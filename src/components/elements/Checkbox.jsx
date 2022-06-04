import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({className, id, size, color, label, description, onChange, checked, children}) => {

    const checkboxSize = {
        4: {container: "h-5", checkbox: "h-4 w-4"},
        6: {container: "h-7", checkbox: "h-6 w-6"},
        8: {container: "h-9", checkbox: "h-8 w-8"},
        10: {container: "h-11", checkbox: "h-10 w-10"},
        12: {container: "h-13", checkbox: "h-12 w-12"}
    };

    const checkboxColor = {
        red: "focus:ring-red-500 text-red-600",
        orange: "focus:ring-orange-500 text-orange-600",
        yellow: "focus:ring-yellow-500 text-yellow-600",
        green: "focus:ring-green-500 text-green-600",
        cyan: "focus:ring-cyan-500 text-cyan-600",
        blue: "focus:ring-blue-500 text-blue-600",
        indigo: "focus:ring-indigo-500 text-indigo-600",
        pink: "focus:ring-pink-500 text-pink-600",
        gray: "focus:ring-gray-500 text-gray-600",
        sky: "focus:ring-sky-500 text-sky-600",
        teal: "focus:ring-teal-500 text-teal-600"
    }

    return (
        <div className={["relative flex", description ? "items-start" : "items-center", className || ""].join(" ")}>
            <div className={["flex items-center h-5", checkboxSize[size].container].join(" ")}>
                <input
                    id={id}
                    aria-describedby={[id, "-description"].join("")}
                    name={id}
                    type="checkbox"
                    className={["focus:outline-none focus:ring-2 border-gray-300 dark:border-gray-600 rounded", checkboxSize[size].checkbox, checkboxColor[color]].join(" ")}
                    onChange={onChange}
                    checked={checked}
                />
            </div>
            {label
                ? <div className={["ml-3 text-sm", description ? "pt-1" : ""].join(" ")}>
                    <label htmlFor={id} className="font-medium text-gray-700 dark:text-gray-500 flex items-center">{children}{label}</label>
                    {description ?
                        <p id={[id, "-description"].join("")} className="text-gray-500 dark:text-gray-400">{description}</p>
                        : null}
                </div>
                : null}
        </div>
    );
};

Checkbox.propTypes = {
    /**  ID */
    id: PropTypes.string.isRequired,
    /**  Размер чекбокса */
    size: PropTypes.oneOf(["4", "6", "8", "10", "12"]).isRequired,
    /**  Цвет чекбокса */
    color: PropTypes.oneOf(["red", "orange", "yellow", "green", "cyan", "blue", "indigo", "pink", "gray", "sky", "teal"]).isRequired,
    /** Доп. класс/ы для чекбокса */
    className: PropTypes.string,
    /** Обработчик смены значения */
    onChange: PropTypes.func,
    /** Метка чекбокса */
    label: PropTypes.string,
    /** Описание чекбокса */
    description: PropTypes.string
};

export default Checkbox;