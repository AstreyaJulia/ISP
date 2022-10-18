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
export const COURT_REGION = "Смоленская область"; // Не используется

/** Настройки для картотек
 * @type {{ADM1: {color: string}, ADM: {color: string}, G1: {color: string}, U1: {color: string}, M: {color: string}}}
 */
export const caseTypesSettings = {
  ADM1: {
    color: "indigo",
    name: "Жалобы по делам об административных правонарушениях"
  },
  ADM: {
    color: "blue",
    name: "Дела об административных правонарушениях"
  },
  G1: {
    color: "green",
    name: "Гражданские дела первой инстанции"
  },
  M: {
    color: "orange",
    name: "Материалы в порядке исполнения решений, ОРМ, досудебные материалы"
  },
  U1: {
    color: "red",
    name: "Уголовные дела первой инстанции"
  }
};