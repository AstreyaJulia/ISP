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

/** Справочник ид профессий
 * @type {({profession: string, id: number, group: number}|{profession: string, id: number, group: number}|{profession: string, id: number, group: number}|{profession: string, id: number, group: number}|{profession: string, id: number, group: number})[]}
 */
export const profCodes = [
  { id: 1, profession: "Председатель", group: 24 },
  { id: 2, profession: "Заместитель председателя", group: 24 },
  { id: 3, profession: "Судья", group: 24 },
  { id: 4, profession: "Начальник отдела", group: 27 },
  { id: 5, profession: "Заместитель начальника отдела", group: 27 },
  { id: 6, profession: "Помощник председателя суда", group: 25 },
  { id: 7, profession: "Помощник судьи", group: 25 },
  { id: 8, profession: "Консультант", group: 27 },
  { id: 9, profession: "Секретарь судебного заседания", group: 26 },
  { id: 10, profession: "Главный специалист", group: 27 },
  { id: 11, profession: "Ведущий специалист", group: 27 },
  { id: 12, profession: "Секретарь суда", group: 27 },
  { id: 13, profession: "Специалист", group: 27 },
  { id: 14, profession: "Старший специалист 1 разряда", group: 27 },
  { id: 15, profession: "Старший специалист 2 разряда", group: 27 },
  { id: 16, profession: "Старший специалист 3 разряда", group: 27 },
  { id: 17, profession: "Специалист 1 разряда", group: 27 },
  { id: 18, profession: "Специалист 2 разряда", group: 27 },
  { id: 19, profession: "Специалист 3 разряда", group: 27 },
  { id: 20, profession: "Администратор", group: 27 },
  { id: 21, profession: "Рабочий, 1 разряд", group: 27 },
  { id: 22, profession: "Рабочий, 2 разряд", group: 27 },
  { id: 23, profession: "Рабочий, 3 разряд", group: 27 },
  { id: 24, profession: "Судьи", group: null },
  { id: 25, profession: "Помощники судей", group: null },
  { id: 26, profession: "Секретари судебного заседания", group: null },
  { id: 27, profession: "Канцелярия", group: null }
];
