import React from "react";
import PropTypes from "prop-types";
import {AvatarBasic} from "./AvatarBasic";
import {AvatarCircularWithPlaceholderInitials} from "./AvatarCircularWithPlaceholderInitials";

export const Avatar = ({size, classname, name, avatar, color}) => {

    return (
        avatar ?
            <AvatarBasic size={size} name={name} avatar={avatar} className={classname || ""}/> :
            <AvatarCircularWithPlaceholderInitials name={name} size={size} color={color || "indigo"}
                                                   className={classname || ""}/>
    );
};

Avatar.propTypes = {
    /** Данные */
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    color: PropTypes.string,
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