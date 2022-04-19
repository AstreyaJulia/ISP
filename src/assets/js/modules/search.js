import {ajax_send} from '../globalfunc';

/** Поиск.
 * http://isp/API-URL/search.php?type=users&query=56456
 * search: тип поиска users - Сотрудники, cases - Дела, inbox - Входящая почта,
 * outbox - Исходящая почта, bsr - БСР
 * */

/** Форма поиска */
const topSearchForm = document.querySelector('.top-search-form');
/** Инпут ввода строки поиска */
const topSearchInput = document.querySelector('#top-search');
/** Селект выбора поиска */
const topSearchSelect = document.querySelector('#topSearchSelect');
/** Выпадающее поле с результатами быстрого поиска */
const searchResults = document.querySelector('.search-results');

/** Рендер поиска сотрудников
 * @param fullname - имя
 * @param room - кабинет
 * @param phone_worck - номер телефона
 * @returns {string} - элемент результата
 */
const createUsersSearchItem = ({fullname, room, phone_worck}) =>
  `
<div class="d-flex p-2">
  <div class="me-2">${fullname}</div>
  <div class="me-2 text-secondary">(${room})</div>
  <div class="text-primary">тел. ${phone_worck}</div>
</div>
`;

/** Рендер поиска входящих писем
 * @param fullname - имя
 * @param room - кабинет
 * @param phone_worck - номер телефона
 * @returns {string} - элемент результата
 */
const createInboxSearchItem = ({fullname, room, phone_worck}) =>
  `
<div class="d-flex p-2">
  <div class="me-2">${fullname}</div>
  <div class="me-2 text-secondary">(${room})</div>
  <div class="text-primary">тел. ${phone_worck}</div>
</div>
`;

/** Рендер поиска БСР
 * @param fullname - имя
 * @param room - кабинет
 * @param phone_worck - номер телефона
 * @returns {string} - элемент результата
 */
const createBsrSearchItem = ({fullname, room, phone_worck}) =>
  `
<div class="d-flex p-2">
  <div class="me-2">${fullname}</div>
  <div class="me-2 text-secondary">(${room})</div>
  <div class="text-primary">тел. ${phone_worck}</div>
</div>
`;

/** Рендер поиска исходящих писем
 * @param fullname - имя
 * @param room - кабинет
 * @param phone_worck - номер телефона
 * @returns {string} - элемент результата
 */
const createOutboxSearchItem = ({fullname, room, phone_worck}) =>
  `
<div class="d-flex p-2">
  <div class="me-2">${fullname}</div>
  <div class="me-2 text-secondary">(${room})</div>
  <div class="text-primary">тел. ${phone_worck}</div>
</div>
`;

/** Рендер поиска дел
 * @param fullname - имя
 * @param room - кабинет
 * @param phone_worck - номер телефона
 * @returns {string} - элемент результата
 */
const createCaseSearchItem = ({fullname, room, phone_worck}) =>
  `
<div class="d-flex p-2">
  <div class="me-2">${fullname}</div>
  <div class="me-2 text-secondary">(${room})</div>
  <div class="text-primary">тел. ${phone_worck}</div>
</div>
`;

/** Настройки поиска */
/*const searchParams = {
  cases: {
    placeholder: "Поиск дел и материалов по Ф.И.О. стороны / лицу / номеру дела",
    getParam: "query",
    render: createCaseSearchItem
  },
  inbox: {
    placeholder: "Поиск по входящей корреспонденции по входящему номеру / Ф.И.О. / содержанию",
    getParam: "query",
    render: createInboxSearchItem
  },
  outbox: {
    placeholder: "Поиск исходящей корреспондеции по исходящему номеру / Ф.И.О. / содержанию",
    getParam: "query",
    render: createOutboxSearchItem
  },
  users: {
    placeholder: "Поиск сотрудников по Ф.И.О. / телефонному номеру",
    getParam: "searchUsers",
    render: createUsersSearchItem
  },
  bsr: {
    placeholder: "Поиск текстов судебных актов по номеру дела / материала",
    getParam: "query",
    render: createBsrSearchItem
  }
}
*/

/** Настройки поиска */
const searchParams = {
  users: {
    placeholder: "Поиск сотрудников по Ф.И.О. / телефонному номеру",
    getParam: "searchUsers",
    render: createUsersSearchItem
  },
  inbox: {
    placeholder: "Поиск по входящей корреспонденции по входящему номеру / Ф.И.О. / содержанию",
    getParam: "query",
    getParamsAdd: {
      startDate: moment().format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD')
    },
    render: createInboxSearchItem
  }
}

/** Показывает / скрывает окно быстрого поиска,
 * отрисовывает элементы поиска
 * @param array - массив данных для отрисовки результатов
 * @param render - коллбэк-шаблон элемента поиска
 */
const makeSearchItems = (array, render) => {
  if (array.length > 0) {
    searchResults.classList.remove('d-none');
    searchResults.classList.add('d-flex');
    searchResults.textContent = '';
    const searchElementsString = array.map((image) => render(image)).join('');
    searchResults.insertAdjacentHTML('beforeend', searchElementsString);
  } else {
    searchResults.classList.remove('d-flex');
    searchResults.classList.add('d-none');
    searchResults.textContent = '';
  }
}

/** Хендлер быстрого поиска */
const fastSearchHandler = () => {

  let queryObj = {};

  if(topSearchInput.value.length >= 3) {

    const query = searchParams[topSearchSelect.value];

    let data = {
      [query.getParam]: topSearchInput.value
    };

    query.getParamsAdd
      ? queryObj = Object.assign(queryObj, data, query.getParamsAdd)
      : queryObj = Object.assign(queryObj, data)

    ajax_send("GET", `api/search/${topSearchSelect.value}.php`, queryObj, "json", result => makeSearchItems(result.data, searchParams[topSearchSelect.value].render), true);
  } else {
    searchResults.classList.remove('d-flex');
    searchResults.classList.add('d-none');
    searchResults.textContent = '';
  }
}

/** Хэндлер очистки результатов поиска при переключении типа поиска
 * и плейсхолдера поиска */
const selectHandler = () => {
  searchResults.classList.add('d-none');
  searchResults.textContent = '';
  topSearchInput.value = '';
  topSearchInput.placeholder = searchParams[topSearchSelect.value].placeholder;
}

/** Ждем полной загрузки дерева */
document.addEventListener("DOMContentLoaded", () => {

  if (topSearchForm) {
    topSearchInput.placeholder = searchParams[topSearchSelect.value].placeholder;
    topSearchInput.addEventListener('input', fastSearchHandler);
    topSearchSelect.addEventListener('change', selectHandler);
  }

});
