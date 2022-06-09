import React from "react";
import PropTypes from "prop-types";
import {AvatarBasic} from "./AvatarBasic";
import {AvatarCircularWithPlaceholderInitials} from "./AvatarCircularWithPlaceholderInitials";

export const Avatar = ({size, classname, name, avatar, color, icon}) => {

    return (
        avatar ?
            <AvatarBasic size={size} name={name} avatar={avatar} className={classname || ""}/> :
            <AvatarCircularWithPlaceholderInitials name={name} size={size} color={color || "indigo"}
                                                   className={classname || ""} icon={icon}/>
    );
};

Avatar.propTypes = {
    /** Данные */
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    /**  Цвет аватара */
    color: PropTypes.oneOf(["red", "orange", "yellow", "green", "cyan", "blue", "indigo", "pink"]),
    /** Размер аватара */
    size: PropTypes.oneOf(["6", "8", "10", "12", "14"]).isRequired,
    /** Доп. класс для аватара */
    classname: PropTypes.string
};


Avatar.defaultProps = {
    size: "10",
    name: "Name",
    classname: ""
};
