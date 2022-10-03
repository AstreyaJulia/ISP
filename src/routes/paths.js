/** Склеивает корневой роут с дочерним роутом в одну строку
 * @param root
 * @param sublink
 * @returns {string}
 */
function path(root, sublink) {
  return `${root}${sublink}`;
}

/* Роуты без потомков */
export const PATH_HOME = "/home"; // Главная
export const PATH_SETTINGS = "/settings"; // Настройки для пользователя
export const PATH_PROFILE = "/profile"; // Профиль

/** Корневые пути для роутов с дочерними роутами
 * @type {string}
 */
const ROOTS_CASE = "/case"; // Дела
const ROOTS_MAIL = "/mail"; // Корреспонденция
// const ROOTS_NEWS = "/news"; // Новости
const ROOTS_USERS = "/users"; // Сотрудники
// const ROOTS_DOCUMENTS = "/documents"; // Документы
const ROOTS_PLANING = "/planing"; // Планировщик
const ROOTS_INFO = "/info"; // Информация
// const ROOTS_COURSES = "/courses"; // Обучение
// const ROOTS_INVENTARIZATION = "/inventarization"; // Инвентаризация
// const ROOTS_FEEDBACK = "/feedback"; // Обратная связь
const ROOTS_ADMIN = "/admin"; // Администрирование
const ROOTS_AUTH = "/auth"; // Авторизация
const ROOTS_ERRORS = "/error"; // Ошибки

// Дела
export const PATH_CASE = {
  lists: {
    overPeriod: path(ROOTS_CASE, "/over-period"), // Рассмотренные свыше срока
    process: path(ROOTS_CASE, "/process"), // В производстве
    finished: path(ROOTS_CASE, "/finished"), // Оконченные
    archive: path(ROOTS_CASE, "/archive"), // Архив
  },
  case: {
    view: (id) => path(ROOTS_CASE, `/case/${id}/view`), // Просмотр данных по делу
  },
  publication: {
    list: path(ROOTS_CASE, "/publication"), // Данные по публикации
    notLoaded: path(ROOTS_CASE, "/publication/not-loaded"), // Неопубликованные
  },
};

// Корреспонденция
export const PATH_MAIL = {
  list: path(ROOTS_MAIL, "/list"), // Список
};

// Планировщик
export const PATH_PLANING = {
  root: ROOTS_PLANING, // Календарь + задачи
};

// Информация
export const PATH_INFO = {
  root: ROOTS_INFO, // Плашки, поиск
  info: {
    addressBook: path(ROOTS_INFO, "/address-book"), // Телефоны, адреса
    proxyList: path(ROOTS_INFO, "/proxy-list"), // Каталог ссылок
    faq: path(ROOTS_INFO, "/faq"), // База знаний
  },
};

// Сотрудники, телефоны суда
export const PATH_USERS = {
  list: path(ROOTS_USERS, "/list"), // Список
  user: {
    root: path(ROOTS_USERS, "/user/profile"), // Профиль пользователя для просмотра, ограниченные данные
  }
};

// Админка
export const PATH_ADMIN = {
  root: ROOTS_ADMIN,
  users: {
    list: path(ROOTS_ADMIN, "/users/list"), // Список для администратора
    new: path(ROOTS_ADMIN, "/users/new"), // Новый пользователь
    view: (id) => path(ROOTS_ADMIN, `/users/${id}/view`), // Просмотр пользователя администратором, все данные
    edit: (id) => path(ROOTS_ADMIN, `/users/${id}/edit`), // Правка пользователя администратором
    demoEdit: path(ROOTS_ADMIN, `/users/1/edit`) // FIXME удалить, демо
  }
};

// Авторизация
export const PATH_AUTH = {
  login: path(ROOTS_AUTH, "/login"), // Вход
  register: path(ROOTS_AUTH, "/register"), // Регистрация
};

// Ошибки
export const PATH_ERRORS = {
  404: path(ROOTS_ERRORS, "/404"), // Страница не найдена
  500: path(ROOTS_ERRORS, "/500"), // Ошибка на стороне сервера
};
