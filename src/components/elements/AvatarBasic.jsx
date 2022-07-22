import React from "react";
import PropTypes from "prop-types";

/** Круглый аватар с изображением
 * @param item - объект с данными {avatar: аватар, name: имя пользователя}
 * @param size - размер аватара
 * @param classname - доп. класс
 * @returns {JSX.Element}
 * @constructor
 */
export const AvatarBasic = ({size, classname, name, avatar, shape}) => {

    /** Размеры аватаров
     * @type {{"12": string, "14": string, "6": string, "8": string, "10": string}}
     */
    const AvatarGroupSize = {
        6: "h-6 w-6",
        8: "h-8 w-8",
        10: "h-10 w-10",
        12: "h-12 w-12",
        14: "h-14 w-14",
        18: "h-18 w-18",
        20: "h-20 w-20",
    }

    const AvatarShape = {
        square: "rounded-none",
        roundedMD: "rounded-md",
        roundedLG: "rounded-lg",
        circle: "rounded-full"
    }

    return (<>
        <img
            className={["flex-shrink-0 flex inline-block", AvatarShape[shape], AvatarGroupSize[size], classname].join(" ")}
            src={avatar}
            alt={name}
        />
    </>);
};

/** Типы свойств */
AvatarBasic.propTypes = {
    /** Данные */
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    /** Размер аватара */
    size: PropTypes.oneOf(["6", "8", "10", "12", "14", "16", "20"]).isRequired,
    /**  Форма аватара */
    shape: PropTypes.oneOf(["square", "roundedMD", "roundedLG", "circle"]).isRequired,
    /** Доп. класс для аватара */
    className: PropTypes.string
};

/** Дефолтные свойства */
AvatarBasic.defaultProps = {
    size: "10",
    name: null,
    avatar: null,
    shape: "circle",
    className: ""
};