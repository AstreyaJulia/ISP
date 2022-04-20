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
const searchResultsWindow = document.querySelector('.search-results-window');
/** Таблица с результатами быстрого поиска */
const searchResults = searchResultsWindow.querySelector('.search-results-container');
/** Футер с ссылками в таблице с результатами быстрого поиска */
const searchResultsFooter = searchResultsWindow.querySelector('.search-results-footer');
/** Счетчик найденного */
const searchResultsCounter = searchResultsWindow.querySelector('.search-results-counter');
/** Кнопка закрытия результатов */
const searchResultsCloseButton = searchResultsWindow.querySelector('.btn-close');
/** Таймеры для устранения дребежжания */
let typingTimer;                //идентификатор таймера
let doneTypingInterval = 100;  //время в мс (5 сек)

function closeSearchResults() {
  searchResultsWindow.classList.remove('d-flex');
  searchResultsWindow.classList.add('d-none');
  searchResults.textContent = '';
}


/** Рендер поиска сотрудников
 * @param fullname - имя
 * @param room - кабинет
 * @param phone_worck - номер телефона
 * @param profession
 * @returns {string} - элемент результата
 */
const createUsersSearchItem = ({fullname, room, phone_worck, profession}) =>
  `
<div class="d-flex align-items-center py-3 border-bottom border-light">
<div class="user-avatar rounded-circle avatar-sm bg-primary-20 m-0 me-3 d-flex align-items-center justify-content-center">
<span class="font-size-base fw-bold text-primary">
${fullname.split(" ").slice(1).map((n) => n[0]).join("").toUpperCase()}
</span>
</div>
<div class="d-flex flex-column me-5" style="min-width: 320px">
<span class="font-size-base">${fullname}</span>
<span class="font-size-base text-secondary">${profession}</span>
</div>
<div class="d-flex flex-column">
<span class="font-size-base"><i class="mdi mdi-phone-classic me-2"></i>${phone_worck}</span>
<span class="font-size-base text-secondary"><i class="mdi mdi-office-building-marker-outline me-2"></i>${room}</span>
</div>
</div>
`;

/** Рендер поиска входящих писем
 * @param DELO_CORRESP_NUM
 * @param INSERT_DATE
 * @param CORRESP_MSG_ANNOTATION
 * @param SENDER_NAME
 * @param CORRESP_FIO
 * @returns {string}
 */
const createInboxSearchItem = ({DELO_CORRESP_NUM, INSERT_DATE, CORRESP_MSG_ANNOTATION, SENDER_NAME, CORRESP_FIO}) =>
  `
<div class="d-flex align-items-center py-3 border-bottom border-light">
<div class="user-avatar rounded-circle avatar-xs bg-danger-20 m-0 me-3 d-flex align-items-center justify-content-center">
<span class="font-size-base fw-bold text-danger">
<i class="mdi mdi-email-receive-outline"></i>
</span>
</div>
<div class="d-flex flex-column me-3" style="min-width: 100px">
<span class="search-results-counter badge-pill bg-primary-20 text-primary font-small-2"><span>№:</span> ${DELO_CORRESP_NUM}</span>
<span class="font-small-2 ms-3"><span>От:</span> ${INSERT_DATE}</span>
</div>
<div class="d-flex flex-column me-3 flex-wrap" style="min-width: 400px; max-width: 400px;">
<span class="me-3 font-small-1" title="${CORRESP_MSG_ANNOTATION}">${CORRESP_MSG_ANNOTATION}</span>
</div>
<div class="d-flex flex-column me-3" style="min-width: 100px">
<span class="font-small-1">От: ${SENDER_NAME}</span>
<span class="font-small-1">Кому: ${CORRESP_FIO}</span>
</div>
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
  <div class="text-primary">📞 ${phone_worck}</div>
</div>
`;

/** Рендер поиска исходящих писем
 * @param fullname - имя
 * @param room - кабинет
 * @param phone_worck - номер телефона
 * @returns {string} - элемент результата
 */
const createOutboxSearchItem = ({DELO_CORRESP_NUM, INSERT_DATE, CORRESP_MSG_ANNOTATION, SENDER_NAME, CORRESP_FIO}) =>
  `
<div class="d-flex align-items-center py-3 border-bottom border-light">
<div class="user-avatar rounded-circle avatar-xs bg-danger-20 m-0 me-3 d-flex align-items-center justify-content-center">
<span class="font-size-base fw-bold text-danger">
<i class="mdi mdi-email-receive-outline"></i>
</span>
</div>
<div class="d-flex flex-column me-3" style="min-width: 100px">
<span class="search-results-counter badge-pill bg-primary-20 text-primary font-small-2"><span>№:</span> ${DELO_CORRESP_NUM}</span>
<span class="font-small-2 ms-3"><span>От:</span> ${INSERT_DATE}</span>
</div>
<div class="d-flex flex-column me-3 flex-wrap" style="min-width: 400px; max-width: 400px;">
<span class="me-3 font-small-1" title="${CORRESP_MSG_ANNOTATION}">${CORRESP_MSG_ANNOTATION}</span>
</div>
<div class="d-flex flex-column me-3" style="min-width: 100px">
<span class="font-small-1">От: ${SENDER_NAME}</span>
<span class="font-small-1">Кому: ${CORRESP_FIO}</span>
</div>
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
    placeholder: "Поиск исходящей корреспондеции по исходящему номеру / Ф.И.О. / содержанию",
    getParam: "query",
    getParamsAdd: {
      startDate: moment().subtract(80, 'days').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD')
    },
    render: createOutboxSearchItem
  },
  outbox: {
    placeholder: "Поиск по входящей корреспонденции по входящему номеру / Ф.И.О. / содержанию",
    getParam: "query",
    getParamsAdd: {
      startDate: moment().subtract(80, 'days').format('YYYY-MM-DD'),
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
  searchResultsCounter.textContent = array.length;
  if (array.length > 0) {
    searchResultsWindow.classList.remove('d-none');
    searchResultsWindow.classList.add('d-flex');
    searchResults.textContent = '';
    const searchElementsString = array.map((image) => render(image)).join('');
    searchResults.insertAdjacentHTML('beforeend', searchElementsString);
  } else {
    closeSearchResults();
  }
}

/** Хендлер быстрого поиска */
const fastSearchHandler = () => {
  let queryObj = {};
  if (topSearchInput.value.length >= 3) {
    const query = searchParams[topSearchSelect.value];
    let data = {
      [query.getParam]: topSearchInput.value
    };
    query.getParamsAdd
      ? queryObj = Object.assign(queryObj, data, query.getParamsAdd)
      : queryObj = Object.assign(queryObj, data)
    ajax_send("GET", `api/search/${topSearchSelect.value}.php`, queryObj, "json", result => makeSearchItems(result.data, searchParams[topSearchSelect.value].render), true);
  } else {
    searchResultsWindow.classList.remove('d-flex');
    searchResultsWindow.classList.add('d-none');
    searchResults.textContent = '';
  }
}

/** Хэндлер очистки результатов поиска при переключении типа поиска
 * и плейсхолдера поиска */
const selectHandler = () => {
  searchResultsWindow.classList.add('d-none');
  searchResults.textContent = '';
  topSearchInput.value = '';
  topSearchInput.placeholder = searchParams[topSearchSelect.value].placeholder;
}

/** Ждем полной загрузки дерева */
document.addEventListener("DOMContentLoaded", () => {

  if (topSearchForm) {
    topSearchInput.placeholder = searchParams[topSearchSelect.value].placeholder;
    //topSearchInput.addEventListener('input', fastSearchHandler);
    topSearchInput.addEventListener('keyup', () => {
      clearTimeout(typingTimer);
      if (topSearchInput.value) {
        typingTimer = setTimeout(fastSearchHandler, doneTypingInterval);
      }
    });
    topSearchSelect.addEventListener('change', selectHandler);
    searchResultsCloseButton.addEventListener('click', closeSearchResults);
  }

});
