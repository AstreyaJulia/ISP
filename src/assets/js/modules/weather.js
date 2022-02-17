import {ajax_send} from "../globalfunc"

/** Погодный виджет */
const weatherHandler = () => {
  /** ID города искать в файле http://bulk.openweathermap.org/sample/current.city.list.json.gz */

  const weatherSettings = {
    city: "Safonovo",
    cityId: 499452,
    cityrus: "Сафоново",
    apikey: "0590d73840a4e5980796c90f4f20e0a4",
    states: {
      200: {"desc": "гроза с небольшим дождем", "day": "wi-day-thunderstorm", "night": "wi-night-alt-thunderstorm",},
      201: {"desc": "гроза с дождем", "day": "wi-day-thunderstorm", "night": "wi-night-alt-thunderstorm",},
      202: {"desc": "гроза с сильным дождем", "day": "wi-day-thunderstorm", "night": "wi-night-alt-thunderstorm",},
      210: {"desc": "небольшая гроза", "day": "wi-day-lightning", "night": "wi-night-alt-lightning",},
      212: {"desc": "сильная гроза", "day": "wi-day-lightning", "night": "wi-night-alt-lightning",},
      221: {"desc": "очень сильная гроза", "day": "wi-day-lightning", "night": "wi-night-alt-lightning",},
      230: {"desc": "гроза с мелким дождем", "day": "wi-day-thunderstorm", "night": "wi-night-alt-thunderstorm",},
      231: {"desc": "гроза с средним дождем", "day": "wi-day-thunderstorm", "night": "wi-night-alt-thunderstorm",},
      232: {"desc": "гроза с сильным дождем", "day": "wi-day-thunderstorm", "night": "wi-night-alt-thunderstorm",},
      300: {"desc": "слабая морось", "day": "wi-day-hail", "night": "wi-night-alt-hail",},
      301: {"desc": "морось", "day": "wi-day-hail", "night": "wi-night-alt-hail",},
      302: {"desc": "сильная морось", "day": "wi-day-hail", "night": "wi-night-alt-hail",},
      310: {"desc": "слабый моросящий дождь", "day": "wi-day-hail", "night": "wi-night-alt-hail",},
      311: {"desc": "моросящий дождь", "day": "wi-day-hail", "night": "wi-night-alt-hail",},
      312: {"desc": "сильный моросящий дождь", "day": "wi-day-hail", "night": "wi-night-alt-hail",},
      313: {"desc": "ливневый дождь и морось", "day": "wi-day-hail", "night": "wi-night-alt-hail",},
      314: {"desc": "ливневый дождь и изморось", "day": "wi-day-hail", "night": "wi-night-alt-hail",},
      321: {"desc": "ливень", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
      500: {"desc": "небольшой дождь", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
      501: {"desc": "умеренный дождь", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
      502: {"desc": "сильный дождь", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
      503: {"desc": "очень сильный дождь", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
      504: {"desc": "сильный дождь", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
      511: {"desc": "ледяной дождь", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
      520: {"desc": "слабый ливневый дождь", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
      521: {"desc": "ливень", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
      522: {"desc": "сильный ливневый дождь", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
      531: {"desc": "частично ливневый дождь", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
      600: {"desc": "легкий снег", "day": "wi-day-snow", "night": "wi-night-alt-snow",},
      601: {"desc": "снег", "day": "wi-day-snow", "night": "wi-night-alt-snow",},
      602: {"desc": "сильный снегопад", "day": "wi-day-snow", "night": "wi-night-alt-snow",},
      611: {"desc": "мокрый снег", "day": "wi-day-rain-mix", "night": "wi-night-alt-rain-mix",},
      612: {"desc": "слабый мокрый снег", "day": "wi-day-rain-mix", "night": "wi-night-alt-rain-mix",},
      613: {"desc": "ливень с мокрым снегом", "day": "wi-day-rain-mix", "night": "wi-night-alt-rain-mix",},
      615: {"desc": "небольшой дождь и снег", "day": "wi-day-rain-mix", "night": "wi-night-alt-rain-mix",},
      616: {"desc": "дождь со снегом", "day": "wi-day-rain-mix", "night": "wi-night-alt-rain-mix",},
      620: {"desc": "небольшой снегопад", "day": "wi-day-snow", "night": "wi-night-alt-snow",},
      621: {"desc": "снегопад", "day": "wi-day-snow", "night": "wi-night-alt-snow",},
      622: {"desc": "сильный снегопад", "day": "wi-day-snow", "night": "wi-night-alt-snow",},
      701: {"desc": "туман", "day": "wi-day-fog", "night": "wi-night-fog",},
      711: {"desc": "дым", "day": "wi-smoke", "night": "wi-smoke",},
      721: {"desc": "дымка", "day": "wi-smoke", "night": "wi-smoke",},
      731: {"desc": "песчано-пыльные вихри", "day": "wi-sandstorm", "night": "wi-sandstorm",},
      741: {"desc": "туман", "day": "wi-smog", "night": "wi-smog",},
      751: {"desc": "песок", "day": "wi-sandstorm", "night": "wi-sandstorm",},
      761: {"desc": "пыль", "day": "wi-dust", "night": "wi-dust",},
      762: {"desc": "вулканический пепел", "day": "wi-volcano", "night": "wi-volcano",},
      771: {"desc": "шквал", "day": "wi-strong-wind", "night": "wi-strong-wind",},
      781: {"desc": "смерч", "day": "wi-tornado", "night": "wi-tornado",},
      800: {"desc": "безоблачно", "day": "wi-day-sunny", "night": "wi-night-clear",},
      801: {"desc": "небольшая облачность: 11-25%", "day": "wi-day-cloudy", "night": "wi-night-alt-cloudy",},
      802: {"desc": "средняя облачность: 25-50%", "day": "wi-cloudy", "night": "wi-cloudy",},
      803: {"desc": "высокая облачность: 51-84%", "day": "wi-cloudy", "night": "wi-cloudy",},
      804: {"desc": "очень высокая облачность: 85-100%", "day": "wi-cloudy", "night": "wi-cloudy",},
    },
  }

  const data = {
    id: weatherSettings.cityId,
    appid: weatherSettings.apikey
  };

  let weather = {
    state: "",
    icon: "",
    temp_max: "",
  };


  let letter = "";

  if ((moment().hour() >= 7 && moment().hour() <= 21)) {
    letter = "day";
  }
  if ((moment().hour() <= 6 && moment().hour() >= 0) || (moment().hour() >= 22 && moment().hour() <= 23)) {
    letter = "night";
  }

  let url = "https://api.openweathermap.org/data/2.5/weather";

  function setWeather(response) {
    weather.state = weatherSettings.states[response.weather[0].id]["desc"];
    weather.icon = weatherSettings.states[response.weather[0].id][letter];
    weather.temp_max = Math.round(response.main.temp_max - 273.15);

    if (weather.temp_max > 0) {
      weather.temp_max = "+" + weather.temp_max + '°';
    } else {
      weather.temp_max = weather.temp_max + '°';
    }

    const weatherInner =
      `<a class="d-flex align-items-center justify-content-center" style="text-decoration: none;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="` + weather.state + `" data-bs-original-title="` + weather.state + `">
              <p class="m-0 p-0" style="font-size: 23px; color: #5552d9; font-weight: 700; line-height: normal;">` + weather.temp_max + `</p>
              <i class="ms-2 d-flex align-items-center justify-content-center wi ` + weather.icon + `" style="width=35px; height: 35px;"></i>
            </a>`;
    document.querySelector('.weather-info').textContent = '';
    document.querySelector('.weather-info').insertAdjacentHTML('beforeend', weatherInner);
  }

  ajax_send("GET", url, data, "json", result => {
    setWeather(result);
  })
}

/** Ждем полной загрузки дерева */
document.addEventListener("DOMContentLoaded", () => {

  /** Погода */
  if (document.querySelector('.weather-info')) {

    weatherHandler();

    /** Обновление каждые 5 минут */
    setInterval(() => {

      if (document.querySelector('.weather-info')) {
        weatherHandler();
      }

    }, 300000);
  }
});
