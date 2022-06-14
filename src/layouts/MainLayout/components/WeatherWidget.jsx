import React, {Fragment, useEffect, useState} from "react";
import classnames from "classnames";
import {Droplet, Wind} from "react-feather";
import moment from "moment";
import "moment/locale/ru";
import Skeleton from "react-loading-skeleton";
import {fetch, setAuthorization} from "../../../utils/Helpers/api_helper";
import {Menu, Transition} from "@headlessui/react";

const WeatherWidget = ({apiKey, lat, lon, className}) => {

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
        day: "", dayOfWeek: ""
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
        200: {"desc": "гроза с небольшим дождем", "icon": "wi-day-thunderstorm"},
        201: {"desc": "гроза с дождем", "icon": "wi-day-thunderstorm"},
        202: {"desc": "гроза с сильным дождем", "icon": "wi-day-thunderstorm"},
        210: {"desc": "небольшая гроза", "icon": "wi-day-lightning"},
        212: {"desc": "сильная гроза", "icon": "wi-day-lightning"},
        221: {"desc": "очень сильная гроза", "icon": "wi-day-lightning"},
        230: {"desc": "гроза с мелким дождем", "icon": "wi-day-thunderstorm"},
        231: {"desc": "гроза с средним дождем", "icon": "wi-day-thunderstorm"},
        232: {"desc": "гроза с сильным дождем", "icon": "wi-day-thunderstorm"},
        300: {"desc": "слабая морось", "icon": "wi-day-hail"},
        301: {"desc": "морось", "icon": "wi-day-hail"},
        302: {"desc": "сильная морось", "icon": "wi-day-hail"},
        310: {"desc": "слабый моросящий дождь", "icon": "wi-day-hail"},
        311: {"desc": "моросящий дождь", "icon": "wi-day-hail"},
        312: {"desc": "сильный моросящий дождь", "icon": "wi-day-hail"},
        313: {"desc": "ливневый дождь и морось", "icon": "wi-day-hail"},
        314: {"desc": "ливневый дождь и изморось", "icon": "wi-day-hail"},
        321: {"desc": "ливень", "icon": "wi-day-rain"},
        500: {"desc": "небольшой дождь", "icon": "wi-day-rain"},
        501: {"desc": "умеренный дождь", "icon": "wi-day-rain"},
        502: {"desc": "сильный дождь", "icon": "wi-day-rain"},
        503: {"desc": "очень сильный дождь", "icon": "wi-day-rain"},
        504: {"desc": "сильный дождь", "icon": "wi-day-rain"},
        511: {"desc": "ледяной дождь", "icon": "wi-day-rain"},
        520: {"desc": "слабый ливневый дождь", "icon": "wi-day-rain"},
        521: {"desc": "ливень", "icon": "wi-day-rain"},
        522: {"desc": "сильный ливневый дождь", "icon": "wi-day-rain"},
        531: {"desc": "частично ливневый дождь", "icon": "wi-day-rain"},
        600: {"desc": "легкий снег", "icon": "wi-day-snow"},
        601: {"desc": "снег", "icon": "wi-day-snow"},
        602: {"desc": "сильный снегопад", "icon": "wi-day-snow"},
        611: {"desc": "мокрый снег", "icon": "wi-day-rain-mix"},
        612: {"desc": "слабый мокрый снег", "icon": "wi-day-rain-mix"},
        613: {"desc": "ливень с мокрым снегом", "icon": "wi-day-rain-mix"},
        615: {"desc": "небольшой дождь и снег", "icon": "wi-day-rain-mix"},
        616: {"desc": "дождь со снегом", "icon": "wi-day-rain-mix"},
        620: {"desc": "небольшой снегопад", "icon": "wi-day-snow"},
        621: {"desc": "снегопад", "icon": "wi-day-snow"},
        622: {"desc": "сильный снегопад", "icon": "wi-day-snow"},
        701: {"desc": "туман", "icon": "wi-day-fog"},
        711: {"desc": "дым", "icon": "wi-smoke"},
        721: {"desc": "дымка", "icon": "wi-smoke"},
        731: {"desc": "песчано-пыльные вихри", "icon": "wi-sandstorm"},
        741: {"desc": "туман", "icon": "wi-smog"},
        751: {"desc": "песок", "icon": "wi-sandstorm"},
        761: {"desc": "пыль", "icon": "wi-dust"},
        762: {"desc": "вулканический пепел", "icon": "wi-volcano"},
        771: {"desc": "шквал", "icon": "wi-strong-wind"},
        781: {"desc": "смерч", "icon": "wi-tornado"},
        800: {"desc": "безоблачно", "icon": "wi-day-sunny"},
        801: {"desc": "небольшая облачность: 11-25%", "icon": "wi-day-cloudy"},
        802: {"desc": "средняя облачность: 25-50%", "icon": "wi-cloudy"},
        803: {"desc": "высокая облачность: 51-84%", "icon": "wi-cloudy"},
        804: {"desc": "очень высокая облачность: 85-100%", "icon": "wi-cloudy"}
    }

    const getParams = {
        lat: lat, lon: lon, appid: apiKey, units: "metric", lang: "ru"
    };

    setAuthorization(null);

    const url = new URL(OPEN_WEATHER_API), params = getParams;
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

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

    return (<Menu as="div"
                  className="relative inline-block text-left ml-4 border-l border-r px-2 border-gray-200 dark:border-gray-700">
        <div>
            <Menu.Button
                className="messages-dropdown-button bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center">
                <i
                    className={classnames("ms-2 d-flex align-items-center text-2xl justify-content-center wi ", weather.icon)}
                />
                <span className="text-base text-gray-700 dark:text-gray-200 ml-2">{weather.temp_max}</span>
            </Menu.Button>
        </div>

        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items
                className="dark:border dark:border-gray-700 origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg py-1 bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100 dark:divide-gray-800">
                <Menu.Item>
                    {({active}) => (
                        <div className="p-3 flex flex-col justify-between">
                            {weather.temp_max ?
                                <>
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col">
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Сейчас</p>
                                            <p
                                                className="text-2xl font-bold leading-7 text-gray-700 dark:text-gray-200 sm:leading-9 relative z-10 mr-4">{weather.temp_max}
                                                <span className="font-medium">C</span>
                                            </p>
                                            <div className="flex items-center text-sm text-gray-700 dark:text-gray-200 relative z-10 mt-1">
                                                <Droplet size={16}/><span className="ml-2 mr-3"
                                                                          title="Влажность">{weather.humidity}%</span>
                                                <Wind size={16}/><span className="ml-2"
                                                                       title="Скорость ветра">{weather.wind} м/с</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col justify-center items-center">
                                            <i
                                                className={classnames("ms-2 d-flex align-items-center text-5xl justify-content-center text-gray-500 wi ", weather.icon)}
                                            />
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{weather.description}</p>
                                        </div>

                                    </div>

                            </> : <Skeleton count="2"
                                            className="bg-gray-500/30 after:bg-gradient-to-r from-gray-400/10 via-gray-500/10 to-gray-400/10"/>}
                        </div>)}
                </Menu.Item>
            </Menu.Items>
        </Transition>
    </Menu>);
};

export default WeatherWidget
