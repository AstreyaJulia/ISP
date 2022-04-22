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
//const searchResultsFooter = searchResultsWindow.querySelector('.search-results-footer');
/** Счетчик найденного */
const searchResultsCounter = searchResultsWindow.querySelector('.search-results-counter');
/** Контейнер для параметров запроса */
const searchResultsGetParams = searchResultsWindow.querySelector('.search-results-get-params');
/** Кнопка закрытия результатов */
const searchResultsCloseButton = searchResultsWindow.querySelector('.btn-close');
/** Таймеры для устранения дребежжания */
let typingTimer;                //идентификатор таймера
let doneTypingInterval = 300;  //время в мс (5 сек)

/** Закрыть окно поиска */
function closeSearchResults() {
  searchResultsWindow.classList.remove('d-flex');
  searchResultsWindow.classList.add('d-none');
  searchResults.textContent = '';
}

/** Открыть окно поиска, вставить результаты
 * @param results - отрендеренные результаты
 */
function openSearchResults(results) {
  searchResults.textContent = '';
  searchResults.insertAdjacentHTML('beforeend', results);
  searchResultsWindow.classList.remove('d-none');
  searchResultsWindow.classList.add('d-flex');
}

/** Подсветка выделенного текста
 * @param text - строка, в которой нужно подсветить строку поиска
 * @param highlight - строка поиска
 * @returns {string} - текст с выделеной тегом <mark> строкой поиска
 */
function textHighlight(text, highlight) {
  const index = text.toUpperCase().indexOf(highlight.toUpperCase());
  if (index >= 0) {
    return `${text.substring(0, index)}<mark>${text.substring(index, index + highlight.length)}</mark>${text.substring(index + highlight.length)}`;
  } else {
    return `${text}`
  }
}

/** Рендер поиска сотрудников
 * @param fullname
 * @param room
 * @param phone_worck
 * @param profession
 * @param highlight
 * @returns {string}
 */
const createUsersSearchItem = ({fullname, room, phone_worck, profession}, highlight) =>
  `
<div class="d-flex align-items-center py-3 border-bottom border-light">
<div class="flex-shrink-0 user-avatar rounded-circle avatar-sm bg-primary-20 m-0 me-3 d-flex align-items-center justify-content-center">
<span class="flex-shrink-0 font-size-base fw-bold text-primary">
${fullname.split(" ").slice(1).map((n) => n[0]).join("").toUpperCase()}
</span>
</div>
<div class="d-flex flex-column me-5" style="min-width: 320px">
<span class="font-size-base">${textHighlight(fullname, highlight)}</span>
<span class="font-size-base text-secondary">${profession}</span>
</div>
<div class="d-flex flex-column">
<span class="font-size-base"><i class="mdi mdi-phone-classic me-2"></i>${textHighlight(phone_worck, highlight)}</span>
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
 * @param MESSAGE_TYPE
 * @param highlight
 * @returns {string}
 */
const createInboxSearchItem = ({DELO_CORRESP_NUM, INSERT_DATE, CORRESP_MSG_ANNOTATION, SENDER_NAME, CORRESP_FIO, MESSAGE_TYPE}, highlight) =>
  `
<div class="d-flex py-3 border-bottom border-light">
<div class="flex-shrink-0 user-avatar rounded-circle avatar-xs bg-danger-20 m-0 me-3 d-flex align-items-center justify-content-center">
<span class="flex-shrink-0 font-size-base fw-bold text-danger" title=${MESSAGE_TYPE !== "" ? MESSAGE_TYPE : "Входящая"}>
<i class="mdi ${MESSAGE_TYPE === "Разноска" ? 'mdi-briefcase-outline' : MESSAGE_TYPE === "Электронная почта" ? "mdi-email-outline" : MESSAGE_TYPE === "Обращения" ? "mdi-file-document-multiple-outline" : "mdi-email-mark-as-unread"}"></i>
</span>
</div>
<div class="d-flex flex-column me-3" style="min-width: 100px">
<span class="search-results-counter badge-pill bg-primary-20 text-primary font-small-2"><span>№:</span> ${textHighlight(DELO_CORRESP_NUM, highlight)}</span>
<span class="font-small-2 ms-3"><span>От:</span> ${INSERT_DATE}</span>
</div>
<div class="d-flex flex-column me-3 flex-wrap" style="min-width: 400px; max-width: 400px;">
<span class="me-3 font-small-1" title="${CORRESP_MSG_ANNOTATION}">${textHighlight(CORRESP_MSG_ANNOTATION, highlight)}</span>
</div>
<div class="d-flex flex-column me-3" style="min-width: 100px">
<span class="font-small-1">От: ${textHighlight(SENDER_NAME, highlight)}</span>
<span class="font-small-1">Кому: ${CORRESP_FIO}</span>
</div>
</div>
`;

/** Рендер поиска БСР
 */
/*const createBsrSearchItem = ({}, highlight) =>
  `
`;*/

/** Рендер поиска исходящих писем
 * @param DELO_SEND_NUM
 * @param INSERT_DATE
 * @param SEND_MSG_ANNOTATION
 * @param SENDER_FIO
 * @param SEND_TO
 * @param MESSAGE_TYPE
 * @param highlight
 * @returns {string}
 */
const createOutboxSearchItem = ({DELO_SEND_NUM, INSERT_DATE, SEND_MSG_ANNOTATION, SENDER_FIO, SEND_TO, MESSAGE_TYPE}, highlight) =>
  `
<div class="d-flex py-3 border-bottom border-light">
<div class="flex-shrink-0 user-avatar rounded-circle avatar-xs bg-success-20 m-0 me-3 d-flex align-items-center justify-content-center">
<span class="flex-shrink-0 font-size-base fw-bold text-success" title=${MESSAGE_TYPE !== "" ? MESSAGE_TYPE : "Исходящая"}>
<i class="mdi ${MESSAGE_TYPE === "Разноска" ? 'mdi-briefcase-outline' : MESSAGE_TYPE === "Электронная почта" ? "mdi-email-outline" : MESSAGE_TYPE === "Обращения" ? "mdi-file-document-multiple-outline" : "mdi-email-mark-as-unread"}"></i>
</span>
</div>
<div class="d-flex flex-column me-3" style="min-width: 100px">
<span class="search-results-counter badge-pill bg-primary-20 text-primary font-small-2"><span>№:</span> ${textHighlight(DELO_SEND_NUM, highlight)}</span>
<span class="font-small-2 ms-3"><span>От:</span> ${INSERT_DATE}</span>
</div>
<div class="d-flex flex-column me-3 flex-wrap" style="min-width: 400px; max-width: 400px;">
<span class="me-3 font-small-1" title="${SEND_MSG_ANNOTATION}">${textHighlight(SEND_MSG_ANNOTATION, highlight)}</span>
</div>
<div class="d-flex flex-column me-3" style="min-width: 100px">
<span class="font-small-1">От: ${SENDER_FIO}</span>
<span class="font-small-1">Кому: ${textHighlight(SEND_TO, highlight)}</span>
</div>
</div>
`;

/** Рендер поиска дел
 */
/*const createCaseSearchItem = ({}, highlight) =>
  `
`;*/

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
    placeholder: "Поиск по входящей корреспонденции по номеру / Ф.И.О. / содержанию",
    getParam: "query",
    getParamsAdd: {
      startDate: moment().subtract(80, 'days').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD')
    },
    getParamsNames: {
      startDate: "Поступило с: ",
      endDate: "по: "
    },
    render: createInboxSearchItem
  },
  outbox: {
    placeholder: "Поиск исходящей корреспондеции по номеру / Ф.И.О. / содержанию",
    getParam: "query",
    getParamsAdd: {
      startDate: moment().subtract(80, 'days').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD')
    },
    getParamsNames: {
      startDate: "Направлено с: ",
      endDate: "по: "
    },
    render: createOutboxSearchItem
  }
}

/** Показывает / скрывает окно быстрого поиска,
 * отрисовывает элементы поиска
 * @param array - массив данных для отрисовки результатов
 * @param render - коллбэк-шаблон элемента поиска
 * @param highlight
 * @param getParamsAdd
 * @param getParamsNames
 */
const makeSearchItems = (array, render, highlight, getParamsAdd, getParamsNames) => {
  let counter;
  let result;
  array.length > 0
    ? counter = array.length
    : counter = "0"
  array.length > 0
    ? result = array.map((result) => render(result, highlight)).join('')
    : result = '<span class="font-size-base text-secondary py-3">Ничего не найдено. Попробуйте изменить поисковой запрос.</span>'
  searchResultsGetParams.textContent = Object.keys(getParamsNames).map(key => getParamsNames[key] + moment(getParamsAdd[key]).format('DD MMMM YYYY')).join(" ");
  searchResultsCounter.textContent = counter;
  openSearchResults(result);
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
    ajax_send("GET", `api/search/${topSearchSelect.value}.php`, queryObj, "json", result => makeSearchItems(result.data, searchParams[topSearchSelect.value].render, topSearchInput.value, searchParams[topSearchSelect.value].getParamsAdd ? searchParams[topSearchSelect.value].getParamsAdd : "", searchParams[topSearchSelect.value].getParamsNames ? searchParams[topSearchSelect.value].getParamsNames : ""), true);
  } else {
    closeSearchResults();
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
