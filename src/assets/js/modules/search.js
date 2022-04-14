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

const submitHandler = () => {
  let data = {
    type: topSearchSelect.value,
    query: topSearchInput.value
  };
  ajax_send("GET", "components/fullcalendar/events.php", data, "json", result => console.log(result))
}

/** Ждем полной загрузки дерева */
document.addEventListener("DOMContentLoaded", () => {

  if(topSearchForm) {
    topSearchSubmit.addEventListener('click', submitHandler);
  }

});
