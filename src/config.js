/** Хост API из .ENV
 * @type {string}
 */
export const HOST_API = process.env.REACT_APP_HOST_API_KEY || "";

export const APP_NAME = "ИСП"; /** Название приложения */

/** Бесплатный ключ получить тут https://openweathermap.org/price */
export const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY || ""; /** API-ключ Open Weather из .ENV */

/** Координаты города. Искать кликом на карту https://yandex.ru/maps/ и нажав на название улицы или места, слева в меню будут показаны координаты  */
export const CITY_LAT = "55.106610";
export const CITY_LON = "33.242566";

/** Название суда и область */
export const COURT_NAME = "Сафоновский районный суд";
export const COURT_REGION = "Смоленская область";

/** Дефолтные значения темы и ширины меню
 * @type {{theme: number, sidebar: number}}
 */
export const defaultSettings = {
  theme: 1,
  sidebar: 1
};