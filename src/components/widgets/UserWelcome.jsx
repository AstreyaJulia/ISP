import React from "react";
import cosmonautFlag from "../../assets/images/pages/cosmonaut-flag.svg";
import cosmonautBalloon from "../../assets/images/pages/cosmonaut-balloon.svg";
import cloud1 from "../../assets/images/pages/cloud1.svg";
import cloud2 from "../../assets/images/pages/cloud2.svg";
import moment from "moment";
import "moment/locale/ru";
import classnames from "classnames";
import Icon from "@mdi/react";
import {mdiStar, mdiStarFourPoints} from "@mdi/js";
import {getInitials} from "../../utils";
import Skeleton from "react-loading-skeleton";

/** Виджет приветствия пользователя
 * @param userName - имя пользователя, строка
 * @param birthDayDate - дата рождения, в формате YYYY-MM-DD
 * @param className
 * @returns {JSX.Element}
 * @constructor
 */
const UserWelcome = ({userName, birthDayDate, className}) => {

    let isBirthDay;

    moment().locale("ru").format("YYYY-MM-DD").toString() === birthDayDate.toString() ? isBirthDay = true : isBirthDay = false;

    const commonAnimation = () => {
        return (
            <>
                <Icon path={mdiStar} size={1}
                      className="text-white absolute left-75 bottom-15 left-10 animation-star-1"/>
                <Icon path={mdiStar} size={1} className="text-white absolute bottom-30 right-40 animation-star-2"/>
                <Icon path={mdiStar} size={1} className="text-white absolute bottom-54 left-30 animation-star-3"/>
                <Icon path={mdiStarFourPoints} size={1}
                      className="text-white absolute bottom-5 right-6 animation-star-4"/>
                <Icon path={mdiStarFourPoints} size={1}
                      className="text-white absolute bottom-60 right-35 animation-star-5"/>
                <Icon path={mdiStarFourPoints} size={1}
                      className="text-white absolute animation-star-6 bottom-1 left-10"/>
                <div className="animation-circle-1 w-1.5 h-1.5 rounded-full bg-white absolute bottom-1/4 left-1/4"/>
                <div className="animation-circle-2 w-1.5 h-1.5 rounded-full bg-white absolute bottom-1/4 right-1/2"/>
                <div className="animation-circle-3 w-1.5 h-1.5 rounded-full bg-white absolute bottom-2/4 right-0"/>
            </>
        )
    }

    const bDayAnimation = () => {
        return (
            <>
                <img className="cloud absolute -top-37 right-20 opacity-70 w-24 animation-cloud" src={cloud1}
                     alt="Cloud"/>
                <img className="cloud absolute -top-200 left-10 opacity-80 w-36 animation-cloud" src={cloud2}
                     alt="Cloud"/>
                <img className="cloud absolute -top-180 left-70 w-28 animation-cloud" src={cloud1} alt="Cloud"/>
            </>
        )
    }

    return (
        <div
            className={classnames(isBirthDay ? "bg-cyan-500" : "bg-indigo-800/90", "widget rounded-md drop-shadow-md p-3 h-28 overflow-hidden w-94", className)}>
            <div className="relative">
                {isBirthDay ? bDayAnimation() : commonAnimation()}
                <div className="flex items-center justify-between">
                    <div>
                        <div className={classnames(isBirthDay ? "text-gray-900" : "text-white", "text-sm")}>
                            <p className="font-bold uppercase">{isBirthDay ? "С Днём рождения," : "С возвращением,"}</p>
                            {userName ? <p className="font-medium mb-2">{getInitials(userName) || <Skeleton/>}</p> :
                                <Skeleton count="2"
                                          className="bg-gray-200/30 after:bg-gradient-to-r from-gray-100/10 via-gray-200/10 to-gray-100/10"/>}
                            {isBirthDay ? (
                                <p className="font-size-15">Желаем долгой и прекрасной жизни в кругу любящих людей!
                                    Профессиональных успехов
                                    и большого человеческого счастья!</p>) : null}
                        </div>
                    </div>
                    <div className="flex items-center justify-content shrink-0">
                        <img src={isBirthDay ? cosmonautBalloon : cosmonautFlag}
                             className={isBirthDay ? "w-24 animation-cosmonaut-balloon" : "w-28"}
                             alt="Cosmonaut"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserWelcome