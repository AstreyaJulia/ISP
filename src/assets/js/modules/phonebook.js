import {selectedCheckboxes} from "../globalfunc"
import {ajax_send} from "../globalfunc"

// Фильтр в телефонной книге

//Фильтр в телефонном справочнике
// Ищем группу фильтров с селектором button-group
const filterGroup = document.querySelector('.phonebook-filter');

// Куда будет выводиться результат
const result = document.getElementById('filter');

const filterClickHandler = () => {
  //Обнуление строк фильтров - выбранного и пустого
  let filterItems = filterGroup.querySelectorAll('input[type=checkbox]');

  let selected = selectedCheckboxes(filterItems, 'selected');

  if (selected.length === 0) {
    let data = {
      filter: selectedCheckboxes(filterItems, 'all'),
    };
    ajax_send("GET", "components/phonebook/ajax.php", data, "text", response => {
      result.innerHTML = "";
      result.innerHTML = response
    });

  } else {
    let data = {
      filter: selected,
    };

    ajax_send("GET", "components/phonebook/ajax.php", data, "text", response => {
      result.innerHTML = "";
      result.innerHTML = response
    });
  }
};

/* Слушаем клик по каждому из фильтров телефонной книги */
if (filterGroup && result) {
  // Ищем в filter-group элементы фильтров checkbox
  let filterItems = filterGroup.querySelectorAll('input[type=checkbox]');

  filterItems.forEach(function (filter) {
    filter.addEventListener('click', () => {
      filterClickHandler();
    });
  });
}

// Ждем полной загрузки дерева
document.addEventListener("DOMContentLoaded", () => {
  // Загрузка телефонной книги
  if (filterGroup && result) {
    filterClickHandler();
  }
});
