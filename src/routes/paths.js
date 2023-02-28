/** Склеивает корневой роут с дочерним роутом в одну строку
 * @param root
 * @param sublink
 * @returns {string}
 */
function pathJoin(root, sublink) {
  return `${root}${sublink}`;
}

/* Роуты без потомков */
export const PATH_HOME = '/home'; // Главная

/** Корневые пути для роутов с дочерними роутами
 * @type {string}
 */
// const ROOTS_NEWS = "/news"; // Новости
// const ROOTS_DOCUMENTS = "/documents"; // Документы
// const ROOTS_COURSES = "/courses"; // Обучение
// const ROOTS_FEEDBACK = "/feedback"; // Обратная связь

/* Дела. Картотека */
const ROOTS_CASE = '/cases'; // Корень модуля "Дела"
export const PATH_CASE = {
  accessibleProfessions: [1, 2, 3, 6, 7, 9], // Для отрисовки группы в меню

  /* Списки дел */
  lists: {
    /* Находящиеся в производстве */
    process: { // По судье
      client: pathJoin(ROOTS_CASE, '/process'),
      accessibleProfessions: [1, 2, 3, 6, 7, 9],
      accessibleRoles: null,
      api: {
        main: null,
      },
    },

    processAll: { // По всем судьям
      client: pathJoin(ROOTS_CASE, '/process/all'),
      accessibleProfessions: [1, 2, 4, 5, 6, null],
      accessibleRoles: null,
      api: {
        main: null,
      },
    },

    /* Рассмотренные свыше срока */
    overPeriod: { // По судье
      client: pathJoin(ROOTS_CASE, '/over-period'),
      accessibleProfessions: [1, 2, 3, 6, 7, 9],
      accessibleRoles: null,
      api: {
        main: null,
      },
    },

    overPeriodAll: { // По всем судьям
      client: pathJoin(ROOTS_CASE, '/over-period/all'),
      accessibleProfessions: [1, 2, 4, 5, 6, null],
      accessibleRoles: null,
      api: {
        main: null,
      },
    },

    /* Не отмечены последние события */
    noLastEvents: { // По судье
      client: pathJoin(ROOTS_CASE, '/no-last-events'),
      accessibleProfessions: [1, 2, 3, 9],
      accessibleRoles: null,
      api: {
        main: null,
      },
    },
    noLastEventsAll: { // По всем судьям
      client: pathJoin(ROOTS_CASE, '/no-last-events/all'),
      accessibleProfessions: [1, 2, 6, null],
      accessibleRoles: null,
      api: {
        main: null,
      },
    },
  },
  case: {
    /* Просмотр данных по делу по ид */
    view: { // category - картотека дела, id - ид дела в картотеке
      client: (id, category) => pathJoin(ROOTS_CASE, `/case/view&case=${category}&id=${id}`),
      accessibleProfessions: null,
      accessibleRoles: null,
      api: {
        main: null,
      },
    },
  },
  publication: {
    /* Подлежащие публикации */
    neededPublication: { // По судье
      client: pathJoin(ROOTS_CASE, '/publication/needed-publication'),
      accessibleProfessions: [1, 2, 3, 6, 7],
      accessibleRoles: null,
      api: {
        main: null,
      },
    },
    neededPublicationAll: { // По всем судьям
      client: pathJoin(ROOTS_CASE, '/publication/needed-publication/all'),
      accessibleProfessions: [1, 2, 4, 5, 6, null],
      accessibleRoles: null,
      api: {
        main: null,
      },
    },

    /* Данные по публикации */
    isPublished: { // По судье
      client: pathJoin(ROOTS_CASE, '/publication/is-published'),
      accessibleProfessions: [1, 2, 3, 6, 7],
      accessibleRoles: null,
      api: {
        main: null,
      },
    },
    isPublishedAll: { // По всем судьям
      client: pathJoin(ROOTS_CASE, '/publication/is-published/all'),
      accessibleProfessions: [1, 2, 4, 5, 6, null],
      accessibleRoles: null,
      api: {
        main: null,
      },
    },
  },
};

// Корреспонденция
const ROOTS_MAIL = '/mail';
export const PATH_MAIL = {
  list: pathJoin(ROOTS_MAIL, '/list'), // Список
};

// Планировщик
const ROOTS_PLANING = '/planing';
export const PATH_PLANING = {
  root: {  // Календарь + задачи
    client: ROOTS_PLANING,
    accessibleProfessions: null,
    accessibleRoles: [1],
    api: {
      main: null,
    },
  },
};

// Информация
const ROOTS_INFO = '/info';
export const PATH_INFO = {
  root: ROOTS_INFO,
  phoneBook: { // Телефоны, адреса
    client: {
        list: pathJoin(ROOTS_INFO, '/phonebook/list'), // Список для пользоввателей
        view: (id) => pathJoin(ROOTS_INFO, `/phonebook/${id}/view`), // Просмотр пользователя пользователем
    },
    accessibleProfessions: null,
    accessibleRoles: [0, 1],
    api: {
      main: null,
    },
  },
  proxyList: {
    list: { // Каталог ссылок
      client: pathJoin(ROOTS_INFO, '/proxy-list'),
      accessibleProfessions: null,
      accessibleRoles: [0, 1],
      api: {
        main: null,
      },
    },
    group: { // Работа с группами каталога ссылок
      client: {
        edit: (id) => pathJoin(ROOTS_INFO, `/proxy-list/group/${id}/edit`), // Правка группы администратором
        new: pathJoin(ROOTS_INFO, '/proxy-list/group/new'), // Добавление группы администратором
      },
      accessibleProfessions: null,
      accessibleRoles: [1],
      api: {
        main: null,
      },
    },
    link: { // Работа с ссылками каталога ссылок
      client: {
        edit: (id) => pathJoin(ROOTS_INFO, `/proxy-list/link/${id}/edit`), // Правка ссылки администратором
        new: pathJoin(ROOTS_INFO, '/proxy-list/link/new'), // Добавление ссылки администратором
      },
      accessibleProfessions: null,
      accessibleRoles: [1],
      api: {
        main: null,
      },
    },
  },
  faq: { // База знаний
    client: {
      main: pathJoin(ROOTS_INFO, '/faq'),
      gas: pathJoin(ROOTS_INFO, '/faq/gas'),
      gCategory: pathJoin(ROOTS_INFO, '/faq/gas/g-category'),
      mCategory: pathJoin(ROOTS_INFO, '/faq/gas/m-category'),
    },
    accessibleProfessions: null,
    accessibleRoles: [0, 1],
    api: {
      main: null,
    },
  },
};

// Статистика, качество работы
const ROOTS_STAT = '/stat'
export const PATH_STAT = {
  grade: {
    client: pathJoin(ROOTS_STAT, '/grade'),
    accessibleProfessions: [null, 1, 2, 6],
    accessibleRoles: null,
    api: {
      main: null
    }
  },
  charts: {
    client: pathJoin(ROOTS_STAT, '/charts'),
    accessibleProfessions: [null, 1, 2, 6],
    accessibleRoles: null,
    api: {
      main: null
    }
  }
}

// Сотрудник. Профиль, настройки
const ROOTS_USER = '/user';
export const PATH_USERS = {
  user: {
    profile: pathJoin(ROOTS_USER, '/profile'), // Профиль пользователя
    settings: pathJoin(ROOTS_USER, '/settings'), // Настройки пользователя
  },
};

// Администрирование
const ROOTS_ADMIN = '/admin';
export const PATH_ADMIN = {
  root: {
    client: ROOTS_ADMIN,
    accessibleProfessions: null,
    accessibleRoles: [1],
    api: {
      main: null,
    },
  },
  users: {
    client: {
      list: pathJoin(ROOTS_ADMIN, '/users/list'), // Список для администратора
      new: pathJoin(ROOTS_ADMIN, '/users/new'), // Новый пользователь
      view: (id) => pathJoin(ROOTS_ADMIN, `/users/${id}/view`), // Просмотр пользователя администратором, все данные
      edit: (id) => pathJoin(ROOTS_ADMIN, `/users/${id}/edit`), // Правка пользователя администратором
    },
    accessibleProfessions: null,
    accessibleRoles: [1],
    api: {
      main: null,
    },
  },
  workplaces: {
    client: {
      list: pathJoin(ROOTS_ADMIN, '/workplaces/list'), // Список для администратора
    },
    accessibleProfessions: null,
    accessibleRoles: [1],
    api: {
      main: null,
    },
  },
};

// Авторизация
const ROOTS_AUTH = '/auth';
export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: pathJoin(ROOTS_AUTH, '/login'), // Вход
  register: pathJoin(ROOTS_AUTH, '/register'), // Регистрация
};

// Ошибки
const ROOTS_ERRORS = 'error';
export const PATH_ERRORS = {
  404: pathJoin(ROOTS_ERRORS, '/404'), // Страница не найдена
  500: pathJoin(ROOTS_ERRORS, '/500'), // Ошибка на стороне сервера
};
