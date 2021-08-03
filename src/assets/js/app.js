'use strict';

// Кнопка Назад Наверх, класс .back-to-top
const backtotopbutton = document.querySelector('.back-to-top');
// Прокручиваемое содержимое, класс .main-content, если его прокручивать, появляется кнопка Назад наверх
const maincontent = document.querySelector('.main-content');

// Кнопка, переключающая сайдбар, класс .sidebar-toggle-button
const sidebartogglbutton = document.querySelector('.sidebar-toggle-button');
// Тело страницы, класс .main-sidebar
const sidebarwrapper = document.querySelector('.page-body');

// Кнопка вкл/выкл верхнего поиска, класс .top-search-button-toggle
const searchbutton = document.querySelector('.top-search-button-toggle');
// Верхний поиск, класс .top-search
const searchinput = document.querySelector('.top-search');
// Кнопка закрытия верхнего поиска, класс .top-search-close
const searchclosebtn = document.querySelector('.top-search-close');

// Меню сайдбара
const sidebarnavmenu = document.querySelector('.navigation-menu');

// Кнопка показать / скрыть пароль
const showhidepass = document.querySelector('.passcode-switch');
// Поле ввода пароля
const passinp = document.getElementById('pass');

//Фильтр d телефонном справочнике
// Ищем группу фильтров с селектором button-group
const filterGroup = document.querySelector('.phonebook-filter');
// Куда будет выводиться результат
const result = document.getElementById('filter');
// Начальная строка без фильтров
const string = '/components/phonebook/ajax.php/?';

// FAQ
// Содержимое страницы FAQ
const faqcard = document.querySelector('.faq-categories-doc');
const cont = document.querySelector('.faq-body');
// Индикатор загрузки для страницы FAQ
const loading = document.querySelector('.loading-spinner-faq');
// Ссылки FAQ
const faqlinks = document.querySelectorAll('.faq-category-subitem a');

// FAQ акордеон в группе
const faqaccordeon = document.querySelector('.faq-categories-list');

// Спиннер
const spinnerloader = document.querySelector('.spinner-wrapper');

// Календарь большой
const calendarEl = document.getElementById('calendar');
const calendar = new FullCalendar.Calendar(calendarEl, {
  height: 650,
  locale: 'ru',
  headerToolbar: {
    left: 'prev,next,today addEventButton',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  customButtons: {
    addEventButton: {
      text: 'Добавить событие',
      click: function () {
        const dateStr = prompt('Enter a date in YYYY-MM-DD format');
        const date = new Date(dateStr + 'T00:00:00'); // will be in local time

        if (!isNaN(date.valueOf())) { // valid?
          calendar.addEvent({
            title: 'dynamic event',
            start: date,
            allDay: true
          });
          alert('Great. Now, update your database...');
        } else {
          alert('Invalid date.');
        }
      }
    }
  },
  initialDate: '2020-03-12',
  navLinks: true, // can click day/week names to navigate views
  selectable: true,
  selectMirror: true,
  editable: true,
  dayMaxEvents: true, // allow "more" link when too many events
  events: 'components/fullcalendar/events.php',
});
// Конец календаря

// FAQ
const faqlinkClickHandler = (evt) => {
  const link = evt.target.closest('a');
  if (!link) {
    return;
  }
  const datalink = link.dataset.link;
  faqcard.style.display = 'block';               // Отображает тело карточки
  loading.style.display = 'inline-block';       // В странице FAQ, показывает индикатор загрузки, пока не прогрузится содержимое страницы
  // создание ajax объекта

  /*
  оригинал кода
  const xmlHttp = () => {
    // создание ajax объекта
    try {
      return new XMLHttpRequest()
    } catch (e) {
      try {
        return new ActiveXObject('Msxml2.XMLHTTP')
      } catch (e) {
        try {
          return new ActiveXObject('Microsoft.XMLHTTP')
        } catch (e) {
          return null;
        }
      }
    }
  }
  */

  let Http = new XMLHttpRequest();
  // Перебираем запросы HTTP,
  if (new XMLHttpRequest()) {
    Http = new XMLHttpRequest();
  } else if (new ActiveXObject('Msxml2.XMLHTTP')) {
    Http = new ActiveXObject('Msxml2.XMLHTTP');
  } else {
    if (new ActiveXObject('Microsoft.XMLHTTP')) {
      Http = new ActiveXObject('Microsoft.XMLHTTP');
    } else return null;
  }
  if (Http) {
    Http.open('GET', datalink, true);                             	// инициируем загрузку страницы
    Http.onreadystatechange = () => {                                             // назначаем асинхронный обработчик события
      if (Http.readyState === 4 && Http.status === 200) {
        cont.innerHTML = "";                                                      // Очищаем содержимое cont
        cont.insertAdjacentHTML('beforeend', Http.responseText);           // Вставляем текст ответа Http.responseText в cont перед концом
        datatablesHandler();
      }
    }
    Http.send(null);
  } else {
    document.location = datalink;                                                 // если ajax-объект не удается создать, просто перенаправляем на адрес
  }
}

// FAQ аккродеон в группе
const faqcategoryClickHandler = (evt) => {
  // Переключает класс родительского элемента события клик
  evt.target.parentElement.classList.toggle("active");
}

// Datatables
const datatablesHandler = () => {
  const colspan = $('td[colspan]').not('[colspan=1]');
  /* colspan.prop("colSpan")  получает кол-во colspan */
  colspan.after('<td style="display: none;"></td>');
  // Для таблиц с сортировкой
  $('.dataTable.sort').DataTable({
    "language": {
      "processing": "Подождите...",
      "search": "Поиск:",
      "lengthMenu": "Показать _MENU_ записей",
      "info": "Записи _START_ - _END_ из _TOTAL_",
      "infoEmpty": "Записи с 0 по 0 из 0 записей",
      "infoFiltered": "(отфильтровано из _MAX_ записей)",
      "loadingRecords": "Загрузка записей...",
      "zeroRecords": "Записи отсутствуют.",
      "emptyTable": "В таблице отсутствуют данные",
      "paginate": {
        "first": "Первая",
        "previous": "‹",
        "next": "›",
        "last": "Последняя"
      },
      "aria": {
        "sortAscending": ": активировать для сортировки столбца по возрастанию",
        "sortDescending": ": активировать для сортировки столбца по убыванию"
      },
      "select": {
        "rows": {
          "_": "Выбрано записей: %d",
          "0": "Кликните по записи для выбора",
          "1": "Выбрана одна запись"
        },
        "1": "%d ряд выбран",
        "_": "%d ряда(-ов) выбрано",
        "cells": {
          "1": "1 ячейка выбрана",
          "_": "Выбрано %d ячеек"
        },
        "columns": {
          "1": "1 столбец выбран",
          "_": "%d столбцов выбрано"
        }
      },
      "searchBuilder": {
        "conditions": {
          "string": {
            "startsWith": "Начинается с",
            "contains": "Содержит",
            "empty": "Пусто",
            "endsWith": "Заканчивается на",
            "equals": "Равно",
            "not": "Не",
            "notEmpty": "Не пусто"
          },
          "date": {
            "after": "После",
            "before": "До",
            "between": "Между",
            "empty": "Пусто",
            "equals": "Равно",
            "not": "Не",
            "notBetween": "Не между",
            "notEmpty": "Не пусто"
          },
          "number": {
            "empty": "Пусто",
            "equals": "Равно",
            "gt": "Больше чем",
            "gte": "Больше, чем равно",
            "lt": "Меньше чем",
            "lte": "Меньше, чем равно",
            "not": "Не",
            "notEmpty": "Не пусто",
            "between": "Между",
            "notBetween": "Не между ними"
          },
          "array": {
            "equals": "Равно",
            "empty": "Пусто",
            "contains": "Содержит",
            "not": "Не равно",
            "notEmpty": "Не пусто",
            "without": "Без"
          }
        },
        "data": "Данные",
        "deleteTitle": "Удалить условие фильтрации",
        "logicAnd": "И",
        "logicOr": "Или",
        "title": {
          "0": "Конструктор поиска",
          "_": "Конструктор поиска (%d)"
        },
        "value": "Значение",
        "add": "Добавить условие",
        "button": {
          "0": "Конструктор поиска",
          "_": "Конструктор поиска (%d)"
        },
        "clearAll": "Очистить всё",
        "condition": "Условие"
      },
      "searchPanes": {
        "clearMessage": "Очистить всё",
        "collapse": {
          "0": "Панели поиска",
          "_": "Панели поиска (%d)"
        },
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Нет панелей поиска",
        "loadMessage": "Загрузка панелей поиска",
        "title": "Фильтры активны - %d"
      },
      "thousands": ",",
      "buttons": {
        "pageLength": {
          "_": "Показать 10 строк",
          "-1": "Показать все ряды",
          "1": "Показать 1 ряд"
        },
        "pdf": "PDF",
        "print": "Печать",
        "collection": "Коллекция <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
        "colvis": "Видимость столбцов",
        "colvisRestore": "Восстановить видимость",
        "copy": "Копировать",
        "copyKeys": "Нажмите ctrl or u2318 + C, чтобы скопировать данные таблицы в буфер обмена.  Для отмены, щелкните по сообщению или нажмите escape.",
        "copySuccess": {
          "1": "Скопирована 1 ряд в буфер обмена",
          "_": "Скопировано %ds рядов в буфер обмена"
        },
        "copyTitle": "Скопировать в буфер обмена",
        "csv": "CSV",
        "excel": "Excel"
      },
      "decimal": ".",
      "infoThousands": ",",
      "autoFill": {
        "cancel": "Отменить",
        "fill": "Заполнить все ячейки <i>%d<i><\/i><\/i>",
        "fillHorizontal": "Заполнить ячейки по горизонтали",
        "fillVertical": "Заполнить ячейки по вертикали",
        "info": "Пример автозаполнения"
      },
      "datetime": {
        "previous": "Предыдущий",
        "next": "Следующий",
        "hours": "Часы",
        "minutes": "Минуты",
        "seconds": "Секунды",
        "unknown": "Неизвестный",
        "amPm": [
          "AM",
          "PM"
        ]
      },
      "editor": {
        "close": "Закрыть",
        "create": {
          "button": "Новый",
          "title": "Создать новую запись",
          "submit": "Создать"
        },
        "edit": {
          "button": "Изменить",
          "title": "Изменить запись",
          "submit": "Изменить"
        },
        "remove": {
          "button": "Удалить",
          "title": "Удалить",
          "submit": "Удалить",
          "confirm": {
            "_": "Вы точно хотите удалить %d строк?",
            "1": "Вы точно хотите удалить 1 строку?"
          }
        },
        "multi": {
          "restore": "Отменить изменения"
        }
      }
    }
  });
  // Для таблиц без сортировки
  $('.dataTable.nosort').DataTable({
    "ordering": false,
    "language": {
      "processing": "Подождите...",
      "search": "Поиск:",
      "lengthMenu": "Показать _MENU_ записей",
      "info": "Записи _START_ - _END_ из _TOTAL_",
      "infoEmpty": "Записи с 0 по 0 из 0 записей",
      "infoFiltered": "(отфильтровано из _MAX_ записей)",
      "loadingRecords": "Загрузка записей...",
      "zeroRecords": "Записи отсутствуют.",
      "emptyTable": "В таблице отсутствуют данные",
      "paginate": {
        "first": "Первая",
        "previous": "‹",
        "next": "›",
        "last": "Последняя"
      },
      "aria": {
        "sortAscending": ": активировать для сортировки столбца по возрастанию",
        "sortDescending": ": активировать для сортировки столбца по убыванию"
      },
      "select": {
        "rows": {
          "_": "Выбрано записей: %d",
          "0": "Кликните по записи для выбора",
          "1": "Выбрана одна запись"
        },
        "1": "%d ряд выбран",
        "_": "%d ряда(-ов) выбрано",
        "cells": {
          "1": "1 ячейка выбрана",
          "_": "Выбрано %d ячеек"
        },
        "columns": {
          "1": "1 столбец выбран",
          "_": "%d столбцов выбрано"
        }
      },
      "searchBuilder": {
        "conditions": {
          "string": {
            "startsWith": "Начинается с",
            "contains": "Содержит",
            "empty": "Пусто",
            "endsWith": "Заканчивается на",
            "equals": "Равно",
            "not": "Не",
            "notEmpty": "Не пусто"
          },
          "date": {
            "after": "После",
            "before": "До",
            "between": "Между",
            "empty": "Пусто",
            "equals": "Равно",
            "not": "Не",
            "notBetween": "Не между",
            "notEmpty": "Не пусто"
          },
          "number": {
            "empty": "Пусто",
            "equals": "Равно",
            "gt": "Больше чем",
            "gte": "Больше, чем равно",
            "lt": "Меньше чем",
            "lte": "Меньше, чем равно",
            "not": "Не",
            "notEmpty": "Не пусто",
            "between": "Между",
            "notBetween": "Не между ними"
          },
          "array": {
            "equals": "Равно",
            "empty": "Пусто",
            "contains": "Содержит",
            "not": "Не равно",
            "notEmpty": "Не пусто",
            "without": "Без"
          }
        },
        "data": "Данные",
        "deleteTitle": "Удалить условие фильтрации",
        "logicAnd": "И",
        "logicOr": "Или",
        "title": {
          "0": "Конструктор поиска",
          "_": "Конструктор поиска (%d)"
        },
        "value": "Значение",
        "add": "Добавить условие",
        "button": {
          "0": "Конструктор поиска",
          "_": "Конструктор поиска (%d)"
        },
        "clearAll": "Очистить всё",
        "condition": "Условие"
      },
      "searchPanes": {
        "clearMessage": "Очистить всё",
        "collapse": {
          "0": "Панели поиска",
          "_": "Панели поиска (%d)"
        },
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Нет панелей поиска",
        "loadMessage": "Загрузка панелей поиска",
        "title": "Фильтры активны - %d"
      },
      "thousands": ",",
      "buttons": {
        "pageLength": {
          "_": "Показать 10 строк",
          "-1": "Показать все ряды",
          "1": "Показать 1 ряд"
        },
        "pdf": "PDF",
        "print": "Печать",
        "collection": "Коллекция <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
        "colvis": "Видимость столбцов",
        "colvisRestore": "Восстановить видимость",
        "copy": "Копировать",
        "copyKeys": "Нажмите ctrl or u2318 + C, чтобы скопировать данные таблицы в буфер обмена.  Для отмены, щелкните по сообщению или нажмите escape.",
        "copySuccess": {
          "1": "Скопирована 1 ряд в буфер обмена",
          "_": "Скопировано %ds рядов в буфер обмена"
        },
        "copyTitle": "Скопировать в буфер обмена",
        "csv": "CSV",
        "excel": "Excel"
      },
      "decimal": ".",
      "infoThousands": ",",
      "autoFill": {
        "cancel": "Отменить",
        "fill": "Заполнить все ячейки <i>%d<i><\/i><\/i>",
        "fillHorizontal": "Заполнить ячейки по горизонтали",
        "fillVertical": "Заполнить ячейки по вертикали",
        "info": "Пример автозаполнения"
      },
      "datetime": {
        "previous": "Предыдущий",
        "next": "Следующий",
        "hours": "Часы",
        "minutes": "Минуты",
        "seconds": "Секунды",
        "unknown": "Неизвестный",
        "amPm": [
          "AM",
          "PM"
        ]
      },
      "editor": {
        "close": "Закрыть",
        "create": {
          "button": "Новый",
          "title": "Создать новую запись",
          "submit": "Создать"
        },
        "edit": {
          "button": "Изменить",
          "title": "Изменить запись",
          "submit": "Изменить"
        },
        "remove": {
          "button": "Удалить",
          "title": "Удалить",
          "submit": "Удалить",
          "confirm": {
            "_": "Вы точно хотите удалить %d строк?",
            "1": "Вы точно хотите удалить 1 строку?"
          }
        },
        "multi": {
          "restore": "Отменить изменения"
        }
      }
    }
  });
}

// Меню демо администратора
// Кнопки
const toastoffbtn = document.querySelector('.toasts-off');
const alertoffbtn = document.querySelector('.alerts-off');
// Элементы
const toastselem = document.querySelectorAll('.toast');

const toastsoffHandler = () => {
  for (let i = 0, len = toastselem.length; i < len; i++) {
    toastselem[i].classList.toggle("show");
    toastselem[i].classList.toggle("hide");
  }
};

const alertoffHandler = () => {
  document.querySelectorAll('.alert')
    .forEach(function (alertNode) {
      const alert = new bootstrap.Alert(alertNode, {
        autohide: false
      });
      alert.close()
    })
};

// При прокручивании вниз на 20px от верхнего края элемента с классом main-content, показывает кнопку
const maincontentscroll = () => {
  if (maincontent.scrollTop > 20) {
    backtotopbutton.style.display = "flex";
  } else {
    backtotopbutton.style.display = "none";
  }
};

// Возвращает наверх при нажатии на кнопку .back-to-top
const buttonscrolltotopHandler = () => {
  maincontent.scrollTop = 0;
};

// Переключает класс disabled у .page-body
const buttonsidebartoggleHandler = () => {
  sidebarwrapper.classList.toggle('disabled');
};

// Добавляет класс open у .top-search
const buttonsearchHandler = () => {
  searchinput.classList.add('open');
};

// Удаляет класс open у .top-search
const buttonsearchcloseHandler = () => {
  searchinput.classList.remove('open');
};

// Переключает класс .active у ближайшего .menu-item нажатой ссылки меню сайдбара
const menuitemClickHandler = (evt) => {
  evt.target.closest('.menu-item').classList.toggle("active");
};

// Ищет в форме селект с id profession, проверяет, если судья или председатель, то отображает принадлежность судье, если нет, то блокирует и сбрасывает значение
const profselect = document.getElementById('profession');
const affselect = document.getElementById('affiliation');

const profselectHandler = () => {
  if (
    profselect.options[profselect.selectedIndex].value === '6' || profselect.options[profselect.selectedIndex].value === '7' || profselect.options[profselect.selectedIndex].value === '9') {
    affselect.disabled = false;
  } else {
    affselect.disabled = true;
    affselect.selectedIndex = 0;
  }
}

if (profselect && affselect) {
  profselect.addEventListener('change', profselectHandler);
}

// Ищет селект с id active
const activeselect = document.getElementById('active');
const roomselect = document.getElementById('room');

const activeselectHandler = () => {
  if (
    activeselect.options[activeselect.selectedIndex].value === '1') {
    roomselect.disabled = false;
  } else {
    roomselect.disabled = true;
    roomselect.selectedIndex = 0;
  }
}

if (activeselect && roomselect) {
  activeselect.addEventListener('change', activeselectHandler);
}

/* Возвращает текущий день, месяц и день недели в элементы с классами today-group-day,
*  today-group-month, today-group-dayw */

const datarenderHandler = () => {
  const d = new Date();
  const month = ["января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"];
  const day = ["воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота"];
  let curdayw = day[d.getDay()];
  let curmonth = month[d.getMonth()];
  let curday = d.getDate();
  document.querySelector(".today-group-dayw").innerHTML = curdayw;
  document.querySelector(".today-group-day").innerHTML = curday;
  document.querySelector(".today-group-month").innerHTML = curmonth;
  return curday;
};

// Список ссылок
const listgroupmenu = document.querySelector('.list-tab-group .list-group');
const tablistgroupmenu = document.querySelector('.tab-content');
if (listgroupmenu && tablistgroupmenu) {
  const listgroup = listgroupmenu.querySelectorAll('.list-group-item');
  const tablistgroup = tablistgroupmenu.querySelectorAll('.tab-list-group');

  // Переключает класс .active у ближайшего .list-group-item нажатой ссылки списка ссылок
  const listgroupitemClickHandler = (evt) => {
    const listgroupitem = evt.target.closest('.list-group-item');
    if (listgroupitem != null) {
      for (let i = 0, len = listgroup.length; i < len; i++) {
        listgroup[i].classList.remove("active");
      }
      listgroupitem.classList.add("active");
      for (let a = 0, len = tablistgroup.length; a < len; a++) {
        tablistgroup[a].classList.remove("active");
        if (listgroupitem.id + "-list" === tablistgroup[a].id) {
          tablistgroup[a].classList.add("active");
        }
      }
    }
  };
  // Устанавливает класс active первой из найденных ссылок и табов
  listgroup[0].classList.add("active");
  tablistgroup[0].classList.add("active");
  // Прослушивание нажатия нажатия на ссылки списка ссылок .list-group
  listgroupmenu.addEventListener('click', (evt) => {
    listgroupitemClickHandler(evt);
  });
}

// Кнопка Назад. Класс .btn-back. Возвращает на страницу, с которой был переход
const backbtn = document.querySelectorAll('.btn-back');
if (backbtn) {
  for (let a = 0; a < backbtn.length; a++) {
    backbtn[a].addEventListener('click', function () {
      window.history.back();
    })
  }
}

// Кнопка Печати страницы. Класс .btn-print
const printbtns = document.querySelectorAll('.btn-print');
if (printbtns) {
  printbtns.forEach(function (printbtn) {
    printbtn.addEventListener('click', () => {
      window.print()
    });
  });
}

// Фильтр в телефонной книге
const filterClickHandler = () => {
  //Обнуление строк фильтров - выбранного и пустого
  let filterItems = filterGroup.querySelectorAll('input[type=checkbox]');

  let filterstring = string;
  let emptyfilter = string;
  for (let i = 0, len = filterItems.length; i < len; i++) {
    if (filterItems[i].checked === true) {
      filterstring += '&filter[' + (filterItems[i].name) + ']=' + filterItems[i].value
    } else {
      //Если фильтр не включен. Составляет строку их всех имеющихся фильтров и их значений
      emptyfilter += '&filter[' + (filterItems[i].name) + ']=' + filterItems[i].value;
    }
  }
  if (filterstring === string) {
    //Если ни один фильтр не выбран, то выведет emptyfilter
    fetch(emptyfilter).then(
      response => {
        return response.text();
      }
    ).then(
      text => {
        result.innerHTML = text;
      }
    );
  } else {
    fetch(filterstring).then(
      response => {
        return response.text();
      }
    ).then(
      text => {
        result.innerHTML = text;
      }
    );
  }
};

// Погодный виджет
const weatherHandler = () => {
  const script = document.createElement("script");
  script.src = "assets/js/weather.min.js";
  script.defer = true;
  script.onload = function () {
    new MeteonovaInf({
      type: "88_31_2",
      cities: ["26686"],
      scheme: {
        "border_radius": "4px",
        "box_shadow": "none",
        "border_color": "#e9ecef",
        "background_color": "transparent",
        "city_color": "#343a40",
        "main_color": "#495057",
        "params_color": "#868e96"
      }
    });
  };
  document.getElementsByTagName("head")[0].appendChild(script);
}

// Определение функции, запускающейся при полной загрузке страницы
const init = () => {
  //Отключаем спиннер
  if (spinnerloader) {
    spinnerloader.style.display = "none";
  }
  // Прослушивание прокручивания .main-content
  if (backtotopbutton) {
    maincontent.addEventListener('scroll', maincontentscroll);
    // Прослушивание нажатия кнопки .back-to-top
    backtotopbutton.addEventListener('click', buttonscrolltotopHandler);
  }
  // Прослушивание нажатия кнопки .sidebar-toggle-button
  if (sidebartogglbutton && sidebarwrapper) {
    sidebartogglbutton.addEventListener('click', buttonsidebartoggleHandler);
  }
  // Прослушивание нажатия кнопки .top-search-button-toggle
  if (searchbutton && searchinput && searchclosebtn) {
    searchbutton.addEventListener('click', buttonsearchHandler);
    // Прослушивание нажатия кнопки .top-search-close
    searchclosebtn.addEventListener('click', buttonsearchcloseHandler);
  }
  // Получает имя файла текущей открытой страницы и ищет такое же в ссылках бокового меню, устанавливает класс active открытому пункту или субпункту и его родителю
  if (sidebarnavmenu) {
    let filename = window.location.href.replace(/^.*[\\\/]/, '').replace('#', '');
    let menulink = sidebarnavmenu.querySelectorAll('.menu-link');
    let submenulink = sidebarnavmenu.querySelectorAll('.submenu-link');
    for (let i = 0, len = menulink.length; i < len; i++) {
      // Поменять в этом условии http://isp/, если будет другой домен
      if (filename === "" && menulink[i].href.replace(/^.*[\\\/]/, '').replace('#', '') === "") {
        filename = "/";
        menulink[i].closest('.menu-item').classList.add("active");
      }
      // Условие для локальной версии, где главная index.html
      if (filename === "" && menulink[i].href.replace(/^.*[\\\/]/, '').replace('#', '') === "index.html") {
        filename = "index.html";
        menulink[i].closest('.menu-item').classList.add("active");
      }
      if (filename === menulink[i].href.replace(/^.*[\\\/]/, '').replace('#', '')) {
        menulink[i].closest('.menu-item').classList.add("active");
      }
    }
    for (let i = 0, len = submenulink.length; i < len; i++) {
      if (filename === submenulink[i].href.replace(/^.*[\\\/]/, '').replace('#', '')) {
        submenulink[i].closest('.submenu-item').classList.add("active");
        submenulink[i].closest('.menu-item').classList.add("active");
      }
    }
    // Прослушивание нажатия нажатия на ссылки меню .navigation-menu
    sidebarnavmenu.addEventListener('click', (evt) => {
      menuitemClickHandler(evt);
    });
  }
  // Прогресс бар над хедером
  maincontent.addEventListener('scroll', () => {
    const winScroll = maincontent.scrollTop;
    const height = maincontent.scrollHeight - maincontent.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const topprogress = document.querySelector('.topprogressbar');
    if (topprogress) {
      topprogress.style.width = scrolled + "%";
    }
  });

// Погода

  if (document.querySelector('.weather-info')) {
    weatherHandler();
  }

// Форма добавления сотрудника. Профессия и активность
  if (profselect && affselect) {
    profselectHandler();
  }
  if (activeselect && roomselect) {
    activeselectHandler();
  }
};

// Сегодняшняя дата
if (document.querySelector('.today-group')) {
  datarenderHandler();
}

// Показать / скрыть пароль
if (showhidepass && passinp) {
  showhidepass.addEventListener('click', () => {
    // Меняем тип поля ввода пароля с password на text
    if (passinp.type === "password") {
      passinp.type = "text";
      showhidepass.classList.toggle('is-hidden');
    } else {
      passinp.type = "password";
      showhidepass.classList.toggle('is-hidden');
    }
  });
}

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

// Tooltip и popover
document.querySelectorAll('.bs-tooltip')
  .forEach(function (tooltip) {
    new bootstrap.Tooltip(tooltip, {
      selector: '[data-bs-toggle="tooltip"]'
    })
  })

document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(function (popover) {
    new bootstrap.Popover(popover)
  })

document.querySelectorAll('.toast')
  .forEach(function (toastNode) {
    new bootstrap.Toast(toastNode, {
      autohide: false
    });
// Показывает всплывашки при загрузке страницы
    //  toast.show()
  })


// Меню демо администратора

if (toastoffbtn) {
  toastoffbtn.addEventListener('click', toastsoffHandler);
}
if (alertoffbtn) {
  alertoffbtn.addEventListener('click', alertoffHandler);
}

//FAQ
if (faqcard && cont && loading && faqlinks) {
  faqlinks.forEach((faqlink) => {
    faqlink.addEventListener('click', (evt) => {
      faqlinkClickHandler(evt);
    });
  });
}

if (faqaccordeon) {
  const faqcategorys = faqaccordeon.querySelectorAll('.faq-category');
  faqcategorys.forEach((faqcategory) => {
    faqcategory.addEventListener('click', (evt) => {
      faqcategoryClickHandler(evt);
    });
  });
}

if (calendarEl) {
  calendar.render();
}

datatablesHandler();

// Запуск функции при загрузке. Будет запущено все, что внутри const init = () => {}
init();


