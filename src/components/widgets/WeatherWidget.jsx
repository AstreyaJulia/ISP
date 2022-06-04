import React, {useEffect, useState} from "react";
import classnames from "classnames";
import icon01 from "../../assets/images/weathericons/01.png";
import icon10 from "../../assets/images/weathericons/10.png";
import icon11 from "../../assets/images/weathericons/11.png";
import icon12 from "../../assets/images/weathericons/12.png";
import icon13 from "../../assets/images/weathericons/13.png";
import icon14 from "../../assets/images/weathericons/14.png";
import icon15 from "../../assets/images/weathericons/15.png";
import icon16 from "../../assets/images/weathericons/16.png";
import icon18 from "../../assets/images/weathericons/18.png";
import icon19 from "../../assets/images/weathericons/19.png";
import icon20 from "../../assets/images/weathericons/20.png";
import icon21 from "../../assets/images/weathericons/21.png";
import icon22 from "../../assets/images/weathericons/22.png";
import icon50 from "../../assets/images/weathericons/50.png";
import icon51 from "../../assets/images/weathericons/51.png";
import icon52 from "../../assets/images/weathericons/52.png";
import icon04 from "../../assets/images/weathericons/04.png";
import icon03 from "../../assets/images/weathericons/03.png";
import icon02 from "../../assets/images/weathericons/02.png";
import {Droplet, Wind} from "react-feather";
import {APIClient} from "../../utils/Helpers/api_helper";
import moment from "moment";
import "moment/locale/ru";
import Skeleton from "react-loading-skeleton";

const WeatherWidget = ({apiKey, cityID, className}) => {

    /** Адрес Open Weather
     * @type {string}
     */
    const OPEN_WEATHER_API = "https://api.openweathermap.org/data/2.5/weather";

    /** Стейты погоды и даты */
    const [date, setDate] = useState({});
    const [weather, setWeather] = useState({});

    /** Текущая дата
     * @type {{dayOfWeek: string, day: string}}
     */
    const currentDate = {
        day: "",
        dayOfWeek: ""
    };

    /** Текущая погода
     * @type {{bg: string, city: string, icon: string, description: string, humidity: string, temp_max: string, wind: string}}
     */
    const currentWeather = {
        description: "", icon: "", temp_max: "", bg: "", wind: "", humidity: "", city: ""
    };

    function getDate() {
        currentDate.dayOfWeek = moment().locale("ru").format("dddd");
        currentDate.day = moment().locale("ru").format("DD.MM.YYYY");
        setDate(currentDate);
    }

    const weatherStates = {
        200: {"desc": "гроза с небольшим дождем", "icon": icon11, "bg": "bg-indigo-700/50"},
        201: {"desc": "гроза с дождем", "icon": icon11, "bg": "bg-indigo-800/50"},
        202: {"desc": "гроза с сильным дождем", "icon": icon12, "bg": "bg-indigo-800/50"},
        210: {"desc": "небольшая гроза", "icon": icon13, "bg": "bg-indigo-800/50"},
        212: {"desc": "сильная гроза", "icon": icon13, "bg": "bg-indigo-800/50"},
        221: {"desc": "очень сильная гроза", "icon": icon13, "bg": "bg-indigo-800/50"},
        230: {"desc": "гроза с мелким дождем", "icon": icon11, "bg": "bg-indigo-700/50"},
        231: {"desc": "гроза с средним дождем", "icon": icon11, "bg": "bg-indigo-700/50"},
        232: {"desc": "гроза с сильным дождем", "icon": icon12, "bg": "bg-indigo-700/50"},
        300: {"desc": "слабая морось", "icon": icon14, "bg": "bg-blue-800/50"},
        301: {"desc": "морось", "icon": icon14, "bg": "bg-blue-800/50"},
        302: {"desc": "сильная морось", "icon": icon15, "bg": "bg-blue-800/50"},
        310: {"desc": "слабый моросящий дождь", "icon": icon16, "bg": "bg-blue-800/50"},
        311: {"desc": "моросящий дождь", "icon": icon16, "bg": "bg-blue-800/50"},
        312: {"desc": "сильный моросящий дождь", "icon": icon16, "bg": "bg-blue-800/50"},
        313: {"desc": "ливневый дождь и морось", "icon": icon16, "bg": "bg-blue-800/50"},
        314: {"desc": "ливневый дождь и изморось", "icon": icon16, "bg": "bg-blue-800/50"},
        321: {"desc": "ливень", "icon": icon18, "bg": "bg-blue-800/50"},
        500: {"desc": "небольшой дождь", "icon": icon10, "bg": "bg-blue-800/50"},
        501: {"desc": "умеренный дождь", "icon": icon19, "bg": "bg-blue-800/50"},
        502: {"desc": "сильный дождь", "icon": icon18, "bg": "bg-blue-800/50"},
        503: {"desc": "очень сильный дождь", "icon": icon18, "bg": "bg-blue-800/50"},
        504: {"desc": "сильный дождь", "icon": icon18, "bg": "bg-blue-800/50"},
        511: {"desc": "ледяной дождь", "icon": icon18, "bg": "bg-blue-800/50"},
        520: {"desc": "слабый ливневый дождь", "icon": icon18, "bg": "bg-blue-800/50"},
        521: {"desc": "ливень", "icon": icon19, "bg": "bg-blue-800/50"},
        522: {"desc": "сильный ливневый дождь", "icon": icon19, "bg": "bg-blue-800/50"},
        531: {"desc": "частично ливневый дождь", "icon": icon19, "bg": "bg-blue-800/50"},
        600: {"desc": "легкий снег", "icon": icon20, "bg": "bg-blue-700/50"},
        601: {"desc": "снег", "icon": icon20, "bg": "bg-blue-700/50"},
        602: {"desc": "сильный снегопад", "icon": icon21, "bg": "bg-blue-700/50"},
        611: {"desc": "мокрый снег", "icon": icon22, "bg": "bg-blue-700/50"},
        612: {"desc": "слабый мокрый снег", "icon": icon22, "bg": "bg-blue-700/50"},
        613: {"desc": "ливень с мокрым снегом", "icon": icon22, "bg": "bg-blue-700/50"},
        615: {"desc": "небольшой дождь и снег", "icon": icon22, "bg": "bg-blue-700/50"},
        616: {"desc": "дождь со снегом", "icon": icon22, "bg": "bg-blue-700/50"},
        620: {"desc": "небольшой снегопад", "icon": icon21, "bg": "bg-blue-700/50"},
        621: {"desc": "снегопад", "icon": icon21, "bg": "bg-blue-700/50"},
        622: {"desc": "сильный снегопад", "icon": icon21, "bg": "bg-blue-700/50"},
        701: {"desc": "туман", "icon": icon51, "bg": "bg-teal-700/50"},
        711: {"desc": "дым", "icon": icon51, "bg": "bg-amber-700/50"},
        721: {"desc": "дымка", "icon": icon51, "bg": "bg-amber-700/50"},
        731: {"desc": "песчано-пыльные вихри", "icon": icon52, "bg": "bg-amber-700/50"},
        741: {"desc": "туман", "icon": icon51, "bg": "bg-teal-700/50"},
        751: {"desc": "песок", "icon": icon52, "bg": "bg-amber-700/50"},
        761: {"desc": "пыль", "icon": icon52, "bg": "bg-amber-700/50"},
        762: {"desc": "вулканический пепел", "icon": icon50, "bg": "bg-amber-700/50"},
        771: {"desc": "шквал", "icon": icon52, "bg": "bg-amber-700/50"},
        781: {"desc": "смерч", "icon": icon50, "bg": "bg-amber-700/50"},
        800: {"desc": "безоблачно", "icon": icon01, "bg": "bg-cyan-500/70"},
        801: {"desc": "небольшая облачность: 11-25%", "icon": icon02, "bg": "bg-cyan-500/70"},
        802: {"desc": "средняя облачность: 25-50%", "icon": icon03, "bg": "bg-blue-700/50"},
        803: {"desc": "высокая облачность: 51-84%", "icon": icon04, "bg": "bg-blue-700/50"},
        804: {"desc": "очень высокая облачность: 85-100%", "icon": icon04, "bg": "bg-blue-700/50"}
    }

    const getParams = {
        id: cityID,
        appid: apiKey,
        units: "metric",
        lang: "ru"
    };

    const fetch = new APIClient();

    const getWeather = () => {
        fetch.get(OPEN_WEATHER_API, getParams)
            .then((response) => {
                const {description} = response.weather[0];
                const {temp_max, humidity} = response.main;
                const {speed} = response.wind;
                currentWeather.description = description;
                currentWeather.icon = weatherStates[response.weather[0].id].icon;
                currentWeather.temp_max = Math.round(temp_max).toString();
                currentWeather.temp_max > 0 ? currentWeather.temp_max = "+" + currentWeather.temp_max + "°" : currentWeather.temp_max = currentWeather.temp_max + "°";
                currentWeather.wind = Math.round(speed).toString();
                currentWeather.humidity = Math.round(humidity).toString();
                currentWeather.city = response.name;
                currentWeather.bg = weatherStates[response.weather[0].id].bg;
                setWeather(currentWeather);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getWeather();
        getDate();
        setInterval(() => {
            getWeather();
            getDate();
        }, 300000);
        // eslint-disable-next-line
    }, []);

    return (
        <div
            className={classnames(weather.bg || "bg-indigo-700/50", "widget rounded-md drop-shadow-md overflow-hidden relative h-28 w-80", className)}>
            <div className="p-3 flex flex-col justify-between">
                <p className="text-gray-700 dark:text-gray-200 relative z-10 mb-1"><span
                    className="capitalize text-base mr-4">{date.dayOfWeek}</span><span
                    className="text-sm">{date.day}</span></p>
                {weather.temp_max
                    ? <><p
                        className="text-2xl font-bold leading-7 text-gray-700 dark:text-gray-200 sm:leading-9 relative z-10">{weather.temp_max}<span
                        className="font-medium">C</span></p>
                        <p className="flex items-center text-sm text-gray-700 dark:text-gray-200 relative z-10 mt-1">
                            <Droplet size={16}/><span className="ml-2 mr-3" title="Влажность">{weather.humidity}%</span>
                            <Wind size={16}/><span className="ml-2" title="Скорость ветра">{weather.wind} м/с</span>
                        </p></>
                    : <Skeleton count="2"
                                className="bg-gray-500/30 after:bg-gradient-to-r from-gray-400/10 via-gray-500/10 to-gray-400/10"/>}
            </div>
            <img src={weather.icon} alt={weather.description} title={weather.description}
                 className="absolute bottom-2 right-1 h-16"/>
        </div>
    );
};

export default WeatherWidget