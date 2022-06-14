import React from "react";
import PropTypes from "prop-types";
import {AvatarBasic} from "./AvatarBasic";
import {AvatarCircularWithPlaceholderInitials} from "./AvatarCircularWithPlaceholderInitials";

export const Avatar = ({size, classname, name, avatar, color, icon, shape}) => {

    return (
        avatar ?
            <AvatarBasic size={size} name={name} avatar={avatar} classname={classname || ""} shape={shape}/> :
            <AvatarCircularWithPlaceholderInitials name={name} size={size} color={color || "indigo"}
                                                   classname={classname || ""} icon={icon} shape={shape}/>
    );
};

Avatar.propTypes = {
    /** Данные */
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    /**  Цвет аватара */
    color: PropTypes.oneOf(["red", "orange", "yellow", "green", "cyan", "blue", "indigo", "pink"]),
    /**  Форма аватара */
    shape: PropTypes.oneOf(["square", "roundedMD", "roundedLG", "circle"]).isRequired,
    /** Размер аватара */
    size: PropTypes.oneOf(["6", "8", "10", "12", "14", "16", "20"]).isRequired,
    /** Доп. класс для аватара */
    classname: PropTypes.string
};


Avatar.defaultProps = {
    size: "10",
    name: "Name",
    shape: "circle",
    classname: ""
};
