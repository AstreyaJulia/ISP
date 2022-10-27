import React, {useEffect, useState} from 'react';
import {classNames} from "../../utils/classNames";

export const WidgetWeather = ({currentWeather, currentIsLoading, currentError}) => {

    const [weather, setWeather] = useState(currentWeather ?? {});

    useEffect(() => {
        setWeather({...currentWeather});
        // eslint-disable-next-line
    }, [currentIsLoading]);

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

    return (
        <div className='flex items-center justify-between bg-indigo-600 p-5 rounded-md'>
            {currentError === null && weather?.weather ?
                <>
                    <div className='flex flex-col gap-2'>
                        <p className='flex items-center gap-1 text-gray-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                            </svg>
                            <span>{weather?.name}</span>
                        </p>
                        <p className='font-bold text-4xl text-gray-100'>{Math.ceil(weather?.main?.temp) > 0 ? `+ ${Math.ceil(weather?.main?.temp)}` : Math.ceil(weather?.main?.temp)}</p>
                    </div>

                    <div className='flex flex-col items-end gap-2'>
                        <i
                            className={classNames("d-flex align-items-center text-4xl justify-content-center text-gray-100 wi", weatherStates[weather?.weather[0]?.id].icon)}
                            title={weather?.weather[0]?.description}
                        />
                        <p className='text-sm font-medium text-gray-100'>{weather?.weather[0]?.description}</p>
                    </div>
                </>
                : <p className='text-base font-medium text-gray-100 flex items-center gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
                    </svg>
                    Ошибка обновления погоды</p>
            }
        </div>
    );
};
