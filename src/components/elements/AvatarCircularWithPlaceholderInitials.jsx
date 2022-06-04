import React from "react";
import PropTypes from "prop-types";
import {getInitialsOnly} from "../../utils";

/** Круглый аватар с инициалами (без изображения)
 * @param name - полное имя (ФИО)
 * @param size - размер аватара
 * @param color - цвет аватара
 * @param classname - доп. класс/ы
 * @returns {JSX.Element}
 * @constructor
 */
export const AvatarCircularWithPlaceholderInitials = ({size, color, classname, name}) => {

    /** Размеры аватаров
     * @type {{"12": {nameFont: string, size: string}, "14": {nameFont: string, size: string}, "6": {nameFont: string, size: string}, "8": {nameFont: string, size: string}, "10": {nameFont: string, size: string}}}
     */
    const AvatarGroupSize = {
        6: {
            nameFont: "text-xs",
            size: "h-6 w-6",
        },
        8: {
            nameFont: "text-sm",
            size: "h-8 w-8",
        },
        10: {
            nameFont: "text-base",
            size: "h-10 w-10",
        },
        12: {
            nameFont: "text-xl",
            size: "h-12 w-12",
        },
        14: {
            nameFont: "text-2xl",
            size: "h-14 w-14",
        },
    }

    /** Цвета аватаров
     * @type {{red: {bg: string, text: string}, orange: {bg: string, text: string}, pink: {bg: string, text: string}, green: {bg: string, text: string}, blue: {bg: string, text: string}, yellow: {bg: string, text: string}, indigo: {bg: string, text: string}, cyan: {bg: string, text: string}}}
     */
    const AvatarColor = {
        red: {
            bg: "bg-red-500/30",
            text: "text-red-700 dark:text-red-300",
        },
        orange: {
            bg: "bg-orange-500/30",
            text: "text-orange-700 dark:text-orange-300",
        },
        yellow: {
            bg: "bg-yellow-500/30",
            text: "text-yellow-700 dark:text-yellow-300",
        },
        green: {
            bg: "bg-green-500/30",
            text: "text-green-700 dark:text-green-300",
        },
        cyan: {
            bg: "bg-cyan-500/30",
            text: "text-cyan-700 dark:text-cyan-300",
        },
        blue: {
            bg: "bg-blue-500/30",
            text: "text-blue-700 dark:text-blue-300",
        },
        indigo: {
            bg: "bg-indigo-500/30",
            text: "text-indigo-700 dark:text-indigo-300",
        },
        pink: {
            bg: "bg-pink-500/30",
            text: "text-pink-700 dark:text-pink-300",
        },
    }

    return (<>
        <span
            className={
                ["inline-flex items-center justify-center rounded-full", AvatarGroupSize[size].size, AvatarColor[color || "indigo"].bg, classname || ""].join(" ")}
        >
        <span
            className={["font-medium leading-none", AvatarGroupSize[size].nameFont, AvatarColor[color || "indigo"].text].join(" ")}
        >
            {getInitialsOnly(name)}
        </span>
      </span>
    </>);
};

/** Типы свойств */
AvatarCircularWithPlaceholderInitials.propTypes = {
    /**  Данные */
    name: PropTypes.string.isRequired,
    /**  Размер аватара */
    size: PropTypes.oneOf(["6", "8", "10", "12", "14"]).isRequired,
    /**  Цвет аватара */
    color: PropTypes.oneOf(["red", "orange", "yellow", "green", "cyan", "blue", "indigo", "pink"]).isRequired,
    /** Доп. класс/ы для аватара */
    className: PropTypes.string
};

/** Дефолтные свойства */
AvatarCircularWithPlaceholderInitials.defaultProps = {
    size: "10",
    color: "red",
    name: "Иванов Иван Иванович",
    className: ""
};
