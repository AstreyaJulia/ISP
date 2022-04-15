import {ajax_send,} from '../globalfunc';

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
/** Кнопка отправки формы поиска */
const topSearchSubmit = document.querySelector('.topSearchSubmit');

const searchResults = document.querySelector('.search-results');

const searchPlaceholders = {
  cases: 'Поиск дел и материалов по Ф.И.О. стороны / лицу / номеру дела',
  inbox: 'Поиск по входящей корреспонденции по входящему номеру / Ф.И.О. / содержанию',
  outbox: 'Поиск исходящей корреспондеции по исходящему номеру / Ф.И.О. / содержанию',
  users: 'Поиск сотрудников по Ф.И.О. / телефонному номеру',
  bsr: 'Поиск текстов судебных актов по номеру дела / материала'
}

const createSearchItem = ({fullname, room, phone_worck}) =>
  `<div class="d-flex p-2">
<div class="me-2">${fullname}</div>
<div class="me-2 text-secondary">(${room})</div>
<div class="text-primary">тел. ${phone_worck}</div>
</div>`;

const makeUsersSearch = (array) => {
  if (array.length > 0) {
    searchResults.classList.remove('d-none');
    searchResults.classList.add('d-flex');
    searchResults.textContent = '';
    const searchElementsString = array.map((image) => createSearchItem(image)).join('');
    searchResults.insertAdjacentHTML('beforeend', searchElementsString);
  } else {
    searchResults.classList.remove('d-flex');
    searchResults.classList.add('d-none');
    searchResults.textContent = '';
  }
}

const submitHandler = () => {
  let data = {
    query: topSearchInput.value
  };
  ajax_send("GET", `api/search/${topSearchSelect.value}.php`, data, "json", result => console.log(result), true);
  topSearchForm.reset();
}

const fastSearchHandler = () => {
  let data = {
    "searchUsers": topSearchInput.value
  };
  ajax_send("GET", `api/search/users.php`, data, "json", result => makeUsersSearch(result.data), true);
}

const selectHandler = () => {
  searchResults.classList.add('d-none');
  searchResults.textContent = '';
  topSearchInput.placeholder = searchPlaceholders[topSearchSelect.value];
  topSearchSelect.value === 'users'
    ? topSearchInput.addEventListener('input', fastSearchHandler)
    : topSearchInput.removeEventListener('input', fastSearchHandler)
}

/** Ждем полной загрузки дерева */
document.addEventListener("DOMContentLoaded", () => {
  selectHandler();

  if (topSearchForm) {
    topSearchSubmit.addEventListener('click', submitHandler);
    topSearchSelect.addEventListener('change', selectHandler);
  }

});
