'use strict';

// Меню сайдбара
const sidebarnavmenu = document.querySelector('.navigation-menu');

// Спиннер
const spinnerloader = document.querySelector('.spinner-wrapper');

// Все элементы, для к-рых нужна прокрутка
const overlayscrollbar = OverlayScrollbars(document.querySelectorAll(".overlayscrollbar"), {
  //className            : "os-theme-light",
  resize: "none",
  sizeAutoCapable: true,
  clipAlways: true,
  normalizeRTL: true,
  paddingAbsolute: false,
  autoUpdate: null,
  autoUpdateInterval: 33,
  updateOnLoad: ["img"],
  nativeScrollbarsOverlaid: {
    showNativeScrollbars: false,
    initialize: true
  },
  overflowBehavior: {
    x: "scroll",
    y: "scroll"
  },
  scrollbars: {
    visibility: "auto",
    autoHide: "never",
    autoHideDelay: 800,
    dragScrolling: true,
    clickScrolling: false,
    touchSupport: true,
    snapHandle: false
  },
  textarea: {
    dynWidth: false,
    dynHeight: false,
    inheritedAttrs: ["style", "class"]
  },
  callbacks: {
    onInitialized: null,
    onInitializationWithdrawn: null,
    onDestroyed: null,
    onScrollStart: null,
    onScroll: null,
    onScrollStop: null,
    onOverflowChanged: null,
    onOverflowAmountChanged: null,
    onDirectionChanged: null,
    onContentSizeChanged: null,
    onHostSizeChanged: null,
    onUpdated: null
  }
});

// ГЛОБАЛЬНЫЕ ФУНКЦИИ

// Toast. Большие всплывашки с заголовком и временем
// Всплывашка. Принимает заголовок header, текст text, время time в виде строки
function showToast(header, text, time) {
  const toastcontainer = document.querySelector('.toasts-container');
  // Удаляем скрытые всплывашки
  const hiddentoasts = toastcontainer.querySelectorAll('.hide');
  if (hiddentoasts) {
    hiddentoasts.forEach((hiddentoast) => {
      toastcontainer.removeChild(hiddentoast);
    });
  }

  const toastElement = '<div class="toast fade" role="alert" aria-live="assertive" aria-atomic="true"><div class="toast-header"><i class="mdi mdi-message-alert-outline"></i><strong class="me-auto">' + header + '</strong><small class="text-muted">' + time + '</small><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button></div><div class="toast-body">' + text + '</div></div>';
  toastcontainer.insertAdjacentHTML('beforeend', toastElement);
  const toastElList = [].slice.call(document.querySelectorAll('.toast'));
  const toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl)
  });
  toastList.forEach(toast => toast.show());
}

// Ошибки Toast. Большие всплывашки с заголовком и временем
// Всплывашка. Принимает заголовок header, текст text, время time в виде строки
function showErrorToast(header, text, time) {
  const toastcontainer = document.querySelector('.toasts-container');
  // Удаляем скрытые всплывашки
  const hiddentoasts = toastcontainer.querySelectorAll('.hide');
  if (hiddentoasts) {
    hiddentoasts.forEach((hiddentoast) => {
      toastcontainer.removeChild(hiddentoast);
    });
  }

  const toastElement = '<div class="toast fade" role="alert" aria-live="assertive" aria-atomic="true"><div class="toast-header"><i class="mdi mdi-alert text-danger"></i><strong class="me-auto text-danger">' + header + '</strong><small class="text-muted">' + time + '</small><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button></div><div class="toast-body">' + text + '</div></div>';
  toastcontainer.insertAdjacentHTML('beforeend', toastElement);
  const toastElList = [].slice.call(document.querySelectorAll('.toast'));
  const toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl, {
      autohide: false
    })
  });
  toastList.forEach(toast => toast.show());
}

// Toast mini. Маленькие цветные всплывашки без заголовка и времени
function showMiniToast(text, color) {
  const toastcontainer = document.querySelector('.toasts-container');
  // Удаляем скрытые всплывашки
  const hiddentoasts = toastcontainer.querySelectorAll('.hide');
  if (hiddentoasts) {
    hiddentoasts.forEach((hiddentoast) => {
      toastcontainer.removeChild(hiddentoast);
    });
  }

  const toastElement = '<div class="toast align-items-center bg-' + color + '-50" role="alert" aria-live="assertive" aria-atomic="true"><div class="d-flex"><div class="toast-body">' + text + '</div><button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Закрыть"></button></div></div>';
  toastcontainer.insertAdjacentHTML('beforeend', toastElement);

  const toastElList = [].slice.call(document.querySelectorAll('.toast'));
  const toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl)
  });
  toastList.forEach(toast => toast.show());
}

// Получение Cookie
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Права супер-пользователя
const cookieSudo = getCookie('aut[sudo]');

// ID пользователя
const cookieID = getCookie('aut[id]');

// Ajax. Передача GET и POST запросов
// url - ссылка на скрипт/страницу; data - данные для передачи; type - GET или POST;
// success - ф-я к-рая выполняется в случае успешного запроса;
// successparams - параметры для передачи в ф-ю success
function ajaxQuery(url, data, type, success, successparams) {

  $.ajax({
    url: url,
    data: data,
    dataType: "json",
    type: type,
    headers: {
      'Accept': 'application/json;odata=nometadata'
    },
    success: function () {
      success(successparams);
    },
    error: function (jqXHR, textStatus, errorThrown, exception) {
      let header;
      if (jqXHR.status === 0) {
        header = 'Не подключено. Проверьте сеть';
      } else if (jqXHR.status === 404) {
        header = 'Запрашиваемая страница не найдена [404]';
      } else if (jqXHR.status === 500) {
        header = 'Внутренняя ошибка сервера [500]';
      } else if (exception === 'parsererror') {
        header = 'Запрошенный синтаксический анализ JSON завершился неудачно';
      } else if (exception === 'timeout') {
        header = 'Ошибка тайм-аута';
      } else if (exception === 'abort') {
        header = 'Ajax запрос прерван';
      } else {
        header = 'Неперехваченная ошибка';
      }
      showErrorToast(header, textStatus + errorThrown + jqXHR.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'))
    }
  });
}

// Общие

// При прокручивании вниз на 20px от верхнего края элемента с классом main-content, показывает кнопку Назад наверх
// Кнопка Назад Наверх, класс .back-to-top
const backtotopbutton = document.querySelector('.back-to-top');
// Прокручиваемое содержимое, класс .main-content, если его прокручивать, появляется кнопка Назад наверх
const maincontent = document.querySelector('.main-content');

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

// Переключает класс disabled у .page-body, сайдбар
// Кнопка, переключающая сайдбар, класс .sidebar-toggle-button
const sidebartogglbutton = document.querySelector('.sidebar-toggle-button');
// Тело страницы, класс .main-sidebar
const sidebarwrapper = document.querySelector('.page-body');

const buttonsidebartoggleHandler = () => {
  sidebarwrapper.classList.toggle('disabled');
};


// Добавляет класс open у .top-search
// Кнопка вкл/выкл верхнего поиска, класс .top-search-button-toggle
const searchbutton = document.querySelector('.top-search-button-toggle');
// Верхний поиск, класс .top-search
const searchinput = document.querySelector('.top-search');
// Кнопка закрытия верхнего поиска, класс .top-search-close
const searchclosebtn = document.querySelector('.top-search-close');

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
// Селект Профессия
const profselect = document.getElementById('profession');
// Селект Принадлежность
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

// Если не в штате, то блокирует и сбрасывает кабинет
// Селект В штате
const activeselect = document.getElementById('active');
// Селект Кабинет
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

/* Возвращает текущий день, месяц и день недели в элементы с классами today-group-day,
*  today-group-month, today-group-dayw */
if (document.querySelector('.today-group')) {
  document.querySelector(".today-group-dayw").innerHTML = moment().tz('Europe/Moscow').format('dddd');
  document.querySelector(".today-group-day").innerHTML = moment().tz('Europe/Moscow').format('D');
  document.querySelector(".today-group-month").innerHTML = moment().tz('Europe/Moscow').format('MMMM');

}

// Переключает класс .active у ближайшего .list-group-item нажатой ссылки списка ссылок
// Список групп ссылок
const listgroupmenu = document.querySelector('.list-tab-group .list-group');
// Список ссылок
const tablistgroupmenu = document.querySelector('.tab-content');

if (listgroupmenu && tablistgroupmenu) {
  const listgroup = listgroupmenu.querySelectorAll('.list-group-item');
  const tablistgroup = tablistgroupmenu.querySelectorAll('.tab-list-group');

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

// Показать / скрыть пароль
// Кнопка показать / скрыть пароль
const showhidepass = document.querySelector('.passcode-switch');
// Поле ввода пароля
const passinplist = document.querySelectorAll('.passinput');

const showhidepassHandler = () => {
  // Меняем тип поля ввода пароля с password на text
  if (passinplist[0].type === "password") {
    passinplist.forEach(passinp => passinp.type = "text");
    showhidepass.classList.toggle('is-hidden');
  } else {
    passinplist.forEach(passinp => passinp.type = "password");
    showhidepass.classList.toggle('is-hidden');
  }
};

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

// Отключаем спиннер загрузки при загрузке содержимого
const spinnerloaderHandler = () => {
  spinnerloader.style.display = "none";
};

// Получает имя файла текущей открытой страницы и ищет такое же в ссылках бокового меню, устанавливает класс active открытому пункту или субпункту и его родителю
const sidebarnavmenuHandler = () => {
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
};

// Отключаем спиннер загрузки при загрузке содержимого
const maincontentscrollHandler = () => {
  const winScroll = maincontent.scrollTop;
  const height = maincontent.scrollHeight - maincontent.clientHeight;
  const scrolled = (winScroll / height) * 100;
  const topprogress = document.querySelector('.topprogressbar');
  if (topprogress) {
    topprogress.style.width = scrolled + "%";
  }

};


// Календарь

// Цвета для Fullcalendar
// Цвета событий, названия менять в разметке, в js менять не надо
const calendarsColor = {
  Primary: 'primary',
  Success: 'success',
  Danger: 'danger',
  Warning: 'warning',
  Info: 'info'
}

// Мини календарь на главной

// Контейнер для календаря
const minicalendar = document.querySelector('.today-calendar-widget');

const minicalendarhandler = () => {
  function fetchevents(info, successCallback) {
    // Получение событий AJAX
    $.ajax(
      {
        url: "components/fullcalendar/events.php",
        type: "GET",
        dataType: "json",
        data: {
          startParam: moment(info.start).tz('Europe/Moscow').format('YYYY-MM-DD'),
          endParam: moment(info.end).tz('Europe/Moscow').format('YYYY-MM-DD'),
          calendars: Object.keys(calendarsColor),
          private: '0',
        },
        success: function (result) {
          successCallback(result);
        },
        error: function (jqXHR, textStatus, errorThrown, exception) {
          let header;
          if (jqXHR.status === 0) {
            header = 'Не подключено. Проверьте сеть';
          } else if (jqXHR.status === 404) {
            header = 'Запрашиваемая страница не найдена [404]';
          } else if (jqXHR.status === 500) {
            header = 'Внутренняя ошибка сервера [500]';
          } else if (exception === 'parsererror') {
            header = 'Запрос синтаксического анализа JSON завершился неудачно';
          } else if (exception === 'timeout') {
            header = 'Ошибка тайм-аута';
          } else if (exception === 'abort') {
            header = 'Ajax запрос прерван';
          } else {
            header = 'Неперехваченная ошибка';
          }
          showErrorToast(header, textStatus + errorThrown + jqXHR.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'))
        }
      }
    );
  }

  // Показать popover
  function showPopover(event) {
    const classpopover = "popover-" + event.event.extendedProps.calendar.toLowerCase();
    let tooltip = new bootstrap.Popover(event.el, {
      template: '<div class="popover ' + classpopover + '" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      title: event.event.title,
      content: event.event.extendedProps.description,
      placement: 'top',
    });
    tooltip.show();
  }

  // Скрыть popover
  function hidePopover() {
    let tooltips = document.querySelectorAll(".popover");
    tooltips.forEach(function (tooltip) {
      document.body.removeChild(tooltip);
    });
  }

  let calendar = new FullCalendar.Calendar(minicalendar, {
    locale: 'ru',
    timeZone: 'Europe/Moscow',
    initialView: 'dayGridMonth',
    height: 250,
    editable: false,
    selectable: true,
    businessHours: false,
    dayMaxEvents: false, //
    eventClassNames: function ({event: calendarEvent}) {
      const colorName = calendarsColor[calendarEvent._def.extendedProps.calendar];
      return [
        // Фоновый цвет событий
        'bg-' + colorName + '-50'
      ];
    },
    headerToolbar: {
      right: 'prev,next,today',
      left: 'title',
    },
    eventSources: [fetchevents],
    eventMouseEnter: function (event,) {
      if (event.event.display !== "background") {
        showPopover(event);
      }
    },
    eventMouseLeave: function () {
      hidePopover();
    },
  });
  calendar.render();
}

// Календарь. Модуль
// Контейнер для календаря
const calendarEl = document.getElementById('calendar');

const calendmodulehandler = () => {
  //Элементы
  const neweventbtn = document.getElementById("myBtn");
  //Модал и его элементы
  // Модал добавления события
  const modal = document.getElementById("addEventsModal");

  // Кнопка "Добавить событие" в модале добавления события. Сохраняет событие
  const addEventBtn = document.getElementById("add-event-btn");
  // Кпока "Сохранить" событие на модале
  const updateEventBtn = document.getElementById("edit-event");

  // Заголовок модала Добавить событие. Для переключения в заголовке слов редактировать / создать
  const addEventTitle = document.querySelector(".add-event-title");
  // Заголовок модала Редактировать событие. Для переключения в заголовке слов редактировать / создать
  const editEventTitle = document.querySelector(".edit-event-title");

  // Кнопка закрыть на модале (крестик)
  const span = modal.querySelector(".btn-close");
  // Кнопка отмены на модале
  const cancelBtn = document.getElementById("discard");
  // Кнопка удалить событие на модале
  const btnDeleteEvent = document.getElementById("delete");

  // Форма в модале
  const eventForm = modal.querySelector(".event-form");

  // Название события в модале
  const eventTitle = document.getElementById("title");
  // Селект категории события
  const eventLabel = document.getElementById("select-label");
  // Дата начала
  const startDate = document.getElementById("start-date");
  // Дата окончания
  const endDate = document.getElementById("end-date");
  // URL события
  const eventUrl = document.getElementById("event-url");
  // Кнопка открыть ссылку
  const urlopen = document.getElementById("urlopen");
  // Переключатель Весь день
  const allDaySwitch = document.querySelector(".allDay-switch");
  // Переключатель Вижу только я (приватное событие)
  const privateSwitch = document.querySelector(".private-switch");

  // Все элементы <textarea> в модале
  const calendarEditor = document.getElementById('event-description-editor');

  // Фильтр событий
  const calEventFilter = document.querySelector(".calendar-events-filter");
  // Чекбоксы в фильтре
  const filterInput = document.querySelectorAll('.input-filter');
  // Чекбокс Все в фильтре
  const selectAll = document.querySelector(".select-all");
  // Чекбокс Только мои события
  const privateinp = document.getElementById('Private');

  // Чекбокс повторяющееся событие
  const repeatSwitch = document.querySelector(".repeat-switch");
  // Колонки с параметрами повторения
  const repeatparams = document.querySelector(".repeat-col");

  // Переключатели повторения
  const repparamSwitch = document.getElementById("dayrepopt");
  // Секции с параметрами повторения по неделям, месяцам, годам
  //const dailysection = document.getElementById("daily-section");
  const weeklysection = document.getElementById("weekly-section");
  const monthlysection = document.getElementById("monthly-section");
  //const yearlysection = document.getElementById("yearly-section");
  // Секция с интервалом
  const intervalsection = document.getElementById("interval-section");
  // Метка "день" в интервале
  const daynumlabel1 = document.getElementById("daynum-label");
  // Метка "Каждый" в интервале
  const daynumlabel2 = document.getElementById("intervallabel1");

  // поле ввода начала повторения
  const startrepDate = document.getElementById("startrep-date");
  // поле ввода окончания повторения
  const endrepDate = document.getElementById("endrep-date");
  // Таб Основное на модале
  const maintab = document.getElementById("nav-main-tab");
  // Таб Повторение на модале
  const reptab = document.getElementById("nav-rep-tab");
  // Вкладка Основное на модале
  const mainpane = document.getElementById("nav-main");
  // Вкладка Повторение на модале
  const reppane = document.getElementById("nav-rep");
  // Все чекбоксы дней недель
  const wdayscheck = document.querySelectorAll('.wdays-check');
  // Чекбокс Пн
  const monday = document.getElementById("monday");
  // Чекбокс Вт
  const tuesday = document.getElementById("tuesday");
  // Чекбокс Ср
  const wednesday = document.getElementById("wednesday");
  // Чекбокс Чт
  const thursday = document.getElementById("thursday");
  // Чекбокс Пт
  const friday = document.getElementById("friday");
  // Чекбокс Сб
  const saturday = document.getElementById("saturday");
  // Чекбокс Вс
  const sunday = document.getElementById("sunday");
  // Радио Закончить после даты
  const repdate = document.getElementById("Radio5");
  // Радио Закончить после повторений
  const repcount = document.getElementById("Radio6");

  // Радио Каждое число месяца
  const evdmonth = document.getElementById("Radio1");
  // Радио Последний день месяца
  const lastdmonth = document.getElementById("month1");
  // Радио Предоследний рабочий день месяца
  const prelastdmonth = document.getElementById("month2");
  // Радио Первый день месяца
  const firstdmonth = document.getElementById("month3");
  // Радио Первый рабочий день месяца
  const firstworkdmonth = document.getElementById("month4");
  // Радио Последний рабочий день месяца
  const lastworkdmonth = document.getElementById("month5");


  // Инпут Закончить после даты
  const repdateinp = document.getElementById("endrep-date");
  // Инпут Закончить после повторений
  const repcountinp = document.getElementById("repcount");
  // Интервал повторений
  const daynum = document.getElementById("daynum");
  // Поле ввода дня для ежемесячного
  const dayofmonth = document.getElementById("dayofmonth");

  // Событие для просмотра
  let eventToUpdate;

  // Функции

  // Скрыть модал
  function hideModal() {
    modal.style.display = "none";
    modal.classList.remove('show');
    const btn = document.querySelector('.modal-backdrop');
    if (btn) {
      document.body.removeChild(btn);
    }
  }

  // Показать модал
  function showModal() {
    modal.classList.add('show');
    modal.style.display = "block";
    const btn = document.createElement("div");
    btn.setAttribute('class', 'modal-backdrop fade show')
    document.body.appendChild(btn);
  }

  // Отметить чекбоксы дней недели по массиву
  function checkweekdays(array) {
    for (let j = 0; j < array.length; j++) {
      $(wdayscheck[array[j]]).prop('checked', true);
    }
  }

  // Сформировать строку дней недели по чекбоксам
  function getweekdaycheck() {
    const days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    let array = '';
    let count = 1;
    for (let j = 0; j < wdayscheck.length; j++) {
      if ($(wdayscheck[j]).prop('checked')) {
        if (count === 1) {
          array = array + days[j];
        } else {
          array = array + ', ' + days[j];
        }
        count++;
      }
    }
    return array;
  }

  // Выбор повторения
  function repswitch(info) {
    if ($(repeatSwitch).prop('checked')) {
      if (info == null) {
        const date = moment().tz('Europe/Moscow').format('YYYY-MM-DD HH:mm');
        $(startrepDate).val(date);
        const enddate = moment(date).tz('Europe/Moscow').add(9, 'years').format('YYYY-MM-DD HH:mm');
        $(endrepDate).val(enddate);
      } else {
        const date = moment(info).tz('Europe/Moscow').format('YYYY-MM-DD HH:mm');
        $(startrepDate).val(date);
        const enddate = moment(date).tz('Europe/Moscow').add(9, 'years').format('YYYY-MM-DD HH:mm');
        $(endrepDate).val(enddate);
      }
      repeatparams.style.display = "block";
      $(repparamSwitch).prop('required', true);
    } else {
      repeatparams.style.display = "none";
      $(startrepDate).val('');
      $(endrepDate).val('');
      $(repparamSwitch).val('none');
      $(repparamSwitch).prop('required', false);
    }
  }

  // Добавление события
  const addEvent = () => {
    if ($(eventForm).valid()) {
      const Event = {
        operation: "upd",
        id: eventToUpdate.id,
        title: $(modal).find(eventTitle).val(),
        start: $(modal).find(startDate).val(),
        end: $(modal).find(endDate).val(),
        url: $(eventUrl).val(),
        calendar: $(eventLabel).val(),
        private: $(privateSwitch).prop('checked') ? 1 : 0,
        description: $(calendarEditor).val(),
        allDay: null,
        tzid: "Europe/Moscow",
        freq: null,
        byweekday: null,
        bysetpos: null,
        interval: null,
        dtstart: null,
        count: null,
        until: null,
      }
      if ($(allDaySwitch).prop('checked')) {
        // Если Весь день, то меняем переменную
        Event.allDay = '1';
      }

      // Параметры повторения. Если галочка включена
      if ($(repeatSwitch).prop('checked')) {
        if (Event.interval !== '') {
          Event.interval = $(daynum).val();
        } else Event.interval = null;
        if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'daily-section') {
          // Ежедневно. Готово
          Event.freq = 'DAILY';
        } else if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'weekly-section') {
          // Еженедельно. Готово
          Event.freq = 'WEEKLY';
          // Получаем отмеченные чекбоксы
          let wday = getweekdaycheck();
          console.log(wday);
          if (wday !== "" || null) {
            Event.byweekday = wday;
          } else Event.byweekday = null;
        } else if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'monthly-section') {
          // Ежемесячно
          Event.freq = 'MONTHLY';
          // Проверяем чекбоксы
            // Последний день
          if ($(lastdmonth).prop('checked')) {
            Event.byweekday = 'MO, TU, WE, TH, FR, SA, SU';
            Event.bysetpos = '-1';
          } else
            // Предпоследний день
          if ($(prelastdmonth).prop('checked')) {
            Event.byweekday = 'MO, TU, WE, TH, FR, SA, SU';
            Event.bysetpos = '-2';
          } else
            // Первый день
          if ($(firstdmonth).prop('checked')) {
            Event.byweekday = 'MO, TU, WE, TH, FR, SA, SU';
            Event.bysetpos = '1';
          } else
            // Первый рабочий день
          if ($(firstworkdmonth).prop('checked')) {
            Event.byweekday = 'MO, TU, WE, TH, FR';
            Event.bysetpos = '1';
          } else
            // Последний рабочий день
          if ($(lastworkdmonth).prop('checked')) {
            Event.byweekday = 'MO, TU, WE, TH, FR';
            Event.bysetpos = '-1';
          }
        } else if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'yearly-section') {
          // Ежегодно
          Event.freq = 'YEARLY';
        } else if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'none') {
          // Без повторения
          Event.freq = null;
          Event.byweekday = null;
          Event.bysetpos = null;
        }

        // Начало повторения
        Event.dtstart = moment($(startrepDate).val()).format('YYYY-MM-DD HH:mm:ss');

        // Диапазон повторения
        if ($(repdate).prop('checked')) {
          Event.until = moment($(endrepDate).val()).format('YYYY-MM-DD HH:mm:ss');
        } else {
          Event.until = null;
        }
        // Кол-во повторений
        if ($(repcount).prop('checked')) {
          Event.count = $(repcountinp).val();
        } else {
          Event.count = null;
        }

        // Начало повторения
        Event.dtstart = moment($(startrepDate).val()).format('YYYY-MM-DD HH:mm:ss');

        // Диапазон повторения
        if ($(repdate).prop('checked')) {
          Event.until = moment($(endrepDate).val()).format('YYYY-MM-DD HH:mm:ss');
        }
        // Кол-во повторений
        if ($(repcount).prop('checked')) {
          Event.count = $(repcountinp).val();
        }

      } else {
        Event.interval = null;
      }

      console.log(Event);
      // Пишем в базу событие методом POST
      $.ajax({
        url: 'components/fullcalendar/ajax.php',
        data: Event,
        type: "POST",
        headers: {
          'Accept': 'application/json;odata=nometadata'
        },
        success: function (response) {
          //updateEvent(Event);
          calendar.refetchEvents(Event);
          hideModal();
          resetValues();
          showMiniToast('Событие ' + Event.title + ' обновлено', "info");
          if (response) {
            showErrorToast("Ошибка", response, moment().tz('Europe/Moscow').format('YYYY-MM-DD'))
          }
        },
        error: function (jqXHR, textStatus, errorThrown, exception) {
          let header;
          if (jqXHR.status === 0) {
            header = 'Не подключено. Проверьте сеть';
          } else if (jqXHR.status === 404) {
            header = 'Запрашиваемая страница не найдена [404]';
          } else if (jqXHR.status === 500) {
            header = 'Внутренняя ошибка сервера [500]';
          } else if (exception === 'parsererror') {
            header = 'Запрос синтаксического анализа JSON завершился неудачно';
          } else if (exception === 'timeout') {
            header = 'Ошибка тайм-аута';
          } else if (exception === 'abort') {
            header = 'Ajax запрос прерван';
          } else {
            header = 'Неперехваченная ошибка';
          }
          showErrorToast(header, textStatus + errorThrown + jqXHR.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'))
        }
      });
    }
  }

  // Удаление события
  const delEvent = () => {
    const Event = {
      operation: "del",
      id: eventToUpdate.id,
    }
    // Удалям из базы событие методом POST
    $.ajax({
      url: 'components/fullcalendar/ajax.php',
      data: Event,
      type: "POST",
      headers: {
        'Accept': 'application/json;odata=nometadata'
      },
      success: function (response) {
        calendar.refetchEvents(Event);
        hideModal();
        resetValues();
        showMiniToast('Событие ' + eventToUpdate.title + ' удалено', "danger");
        if (response) {
          showErrorToast("Ошибка", response, moment().tz('Europe/Moscow').format('YYYY-MM-DD'))
        }
      },
      error: function (jqXHR, textStatus, errorThrown, exception) {
        let header;
        if (jqXHR.status === 0) {
          header = 'Не подключено. Проверьте сеть';
        } else if (jqXHR.status === 404) {
          header = 'Запрашиваемая страница не найдена [404]';
        } else if (jqXHR.status === 500) {
          header = 'Внутренняя ошибка сервера [500]';
        } else if (exception === 'parsererror') {
          header = 'Запрос синтаксического анализа JSON завершился неудачно';
        } else if (exception === 'timeout') {
          header = 'Ошибка тайм-аута';
        } else if (exception === 'abort') {
          header = 'Ajax запрос прерван';
        } else {
          header = 'Неперехваченная ошибка';
        }
        showErrorToast(header, textStatus + errorThrown + jqXHR.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'))
      }
    });
  }

  // Закрытие модала и сброс инпутов
  const closeAddEvModal = () => {
    hideModal();
    resetValues();
  }

  // Событие при нажатии на событие
  function eventClick(info) {
    eventToUpdate = info.event;

    // Прослушка кликов по кнопке закрыть
    span.addEventListener('click', () => closeAddEvModal());

    // Открывает ссылку в новом окне
    if ((eventToUpdate).url) {
      info.jsEvent.preventDefault();
    }
    // Открывашка ссылки
    $(urlopen).on('click', function () {
      window.open((eventToUpdate).url, '_blank');
    });

    console.log(eventToUpdate);
    // Запрет на редактирование событий без id и фоновых
    if (info.event.id !== "" && info.event.display !== "background") {
      showModal();
      // Проверяем права пользователя и его ID и включаем возможность редактирования
      if (eventToUpdate.extendedProps.user_id === cookieID || JSON.stringify(eventToUpdate.extendedProps.user_id) === cookieID) {
        // Добавляем прослушку кликов по кнопкам Добавить и Обновить
        updateEventBtn.addEventListener('click', () => addEvent());
        btnDeleteEvent.addEventListener('click', () => delEvent());
        updateEventBtn.style.display = "block";
        btnDeleteEvent.style.display = "block";
        updateEventBtn.disabled = false;
        btnDeleteEvent.disabled = false;
      } else {
        // Удаляем прослушку кликов по кнопкам Добавить и Обновить
        updateEventBtn.removeEventListener('click', () => addEvent());
        btnDeleteEvent.removeEventListener('click', () => delEvent());
        updateEventBtn.style.display = "block";
        btnDeleteEvent.style.display = "block";
        updateEventBtn.disabled = true;
        btnDeleteEvent.disabled = true;
      }
      editEventTitle.style.display = "block";
      $(eventTitle).val(eventToUpdate.title);
      // Приватное событие
      if (eventToUpdate.extendedProps.private === 0 || eventToUpdate.extendedProps.private === "0") {
        $(privateSwitch).prop('checked', false)
      } else {
        $(privateSwitch).prop('checked', true)
      }
      // Разные даты начала и конца события для создаваемых событий при нажатии на кнопку создания и на день
      const date = moment(info.date).format('YYYY-MM-DD HH:mm');
      $(startDate).val(date);
      $(endDate).val(date);

      // Если включили повторение, то дата начала повторения берется из даты начала события
      repeatSwitch.addEventListener('click', () => repswitch(moment($(startDate).val()).format('YYYY-MM-DD HH:mm')));

      // Выбор повторения для дня
      $(repparamSwitch).on('change', function () {
        if (
          repparamSwitch.options[repparamSwitch.selectedIndex].value === 'none') {
          intervalsection.style.display = "none";
          weeklysection.style.display = "none";
          monthlysection.style.display = "none";
          $(evdmonth).prop("checked", false);
        }
        if (
          repparamSwitch.options[repparamSwitch.selectedIndex].value === 'daily-section') {
          intervalsection.style.display = "block";
          weeklysection.style.display = "none";
          monthlysection.style.display = "none";
          $(evdmonth).prop("checked", false);
          daynumlabel2.innerHTML = 'Каждый';
          daynumlabel1.innerHTML = 'день';
          daynum.setAttribute('max', '31');
        }
        if (
          repparamSwitch.options[repparamSwitch.selectedIndex].value === 'weekly-section') {
          intervalsection.style.display = "block";
          weeklysection.style.display = "block";
          monthlysection.style.display = "none";
          // Получаем текущий день недели, ставим галочку в параметрах
          if (!(eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.byweekday)) {
            checkweekdays([moment($(startDate).val()).weekday()]);
          }
          $(evdmonth).prop("checked", false);
          daynumlabel2.innerHTML = 'Каждую';
          daynumlabel1.innerHTML = 'неделю';
          daynum.setAttribute('max', '53');
        }
        if (
          repparamSwitch.options[repparamSwitch.selectedIndex].value === 'monthly-section') {
          intervalsection.style.display = "block";
          weeklysection.style.display = "none";
          monthlysection.style.display = "block";
          // Переключаем на дефолтное радио
          $(evdmonth).prop("checked", true);
          $(dayofmonth).val(moment($(startDate).val()).date());
          daynumlabel2.innerHTML = 'Каждый';
          daynumlabel1.innerHTML = 'месяц';
          daynum.setAttribute('max', '12');
        }
        if (
          repparamSwitch.options[repparamSwitch.selectedIndex].value === 'yearly-section') {
          intervalsection.style.display = "block";
          weeklysection.style.display = "none";
          monthlysection.style.display = "none";
          $(evdmonth).prop("checked", false);
          daynumlabel2.innerHTML = 'Каждый';
          daynumlabel1.innerHTML = 'год';
          daynum.setAttribute('max', '100');
        }
      })

      // Если в конце повторения включена дата, то блокируется ввоб кол-ва повторений и наоборот
      $(repdate).on('click', function () {
        if ($(repdate).is(':checked')) {
          $(repdateinp).prop("disabled", false);
          $(repcount).prop("checked", false);
        } else {
          $(repdateinp).prop("disabled", true);
        }
      })
      $(repcount).on('click', function () {
        if ($(repcount).is(':checked')) {
          $(repcountinp).prop("disabled", false);
          $(repdate).prop("checked", false);
        } else {
          $(repcountinp).prop("disabled", true);
        }
      })

      // Если переключают на весь день, то меняется диапазон времени на весь день, и наоборот, на текущее время, не меняя введенной даты
      $(allDaySwitch).on('click', function () {
        if ($(allDaySwitch).prop('checked')) {
          $(startDate).val(moment($(startDate).val()).hour(0).minutes(0).format('YYYY-MM-DD HH:mm'));
          $(endDate).val(moment($(endDate).val()).hour(23).minutes(59).format('YYYY-MM-DD HH:mm'));
        } else {
          $(startDate).val(moment($(startDate).val()).hour(moment().hour()).minutes(moment().minutes()).format('YYYY-MM-DD HH:mm'));
          $(endDate).val(moment($(endDate).val()).hour(moment().hour()).minutes(moment().minutes()).format('YYYY-MM-DD HH:mm'));
        }
      })

      // Проверка дат начала и конца, при изменении даты, меняет неправильную
      $(startDate).on('change', function () {
        if ($(startDate).val() > $(endDate).val()) {
          $(endDate).val($(startDate).val());
        }
      })
      $(endDate).on('change', function () {
        if ($(startDate).val() > $(endDate).val()) {
          $(startDate).val($(endDate).val());
        }
      })

      // Повторять до даты
      if (eventToUpdate._def.recurringDef !== null) {
        // Для еженедельного
        if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.freq === 2) {
          intervalsection.style.display = "block";
          // Чекбоксы дней недель
          let array = eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.byweekday;
          for (let i = 0; i < array.length; i++) {
            if (array[i] === 0) {
              $(monday).prop('checked', true)
            }
            if (array[i] === 1) {
              $(tuesday).prop('checked', true)
            }
            if (array[i] === 2) {
              $(wednesday).prop('checked', true)
            }
            if (array[i] === 3) {
              $(thursday).prop('checked', true)
            }
            if (array[i] === 4) {
              $(friday).prop('checked', true)
            }
            if (array[i] === 5) {
              $(saturday).prop('checked', true)
            }
            if (array[i] === 6) {
              $(sunday).prop('checked', true)
            }
          }
        }

        $(repeatSwitch).prop('checked', true);
        repeatparams.style.display = "block";
        $(repparamSwitch).prop('required', true);
        $(startrepDate).val(moment(eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.dtstart).utc().format('YYYY-MM-DD HH:mm'));
        if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.until) {
          $(endrepDate).val(moment(eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.until).utc().format('YYYY-MM-DD HH:mm'));
          $(repdate).prop('checked', true);
          $(endrepDate).prop("disabled", false);
        } else {
          $(endrepDate).val("");
          $(repdate).prop('checked', false);
          $(endrepDate).prop("disabled", true);
        }
        // Кол-во повторений
        if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.count) {
          $(repcountinp).val(eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.count);
          $(repcount).prop('checked', true);
        } else {
          $(repcountinp).val("");
          $(repcount).prop('checked', false);
        }

        if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.freq === 3) {
          $(repparamSwitch).val('daily-section');
          weeklysection.style.display = "none";
          monthlysection.style.display = "none";
          intervalsection.style.display = "block";
          daynumlabel2.innerHTML = 'Каждый';
          daynumlabel1.innerHTML = 'день';
          daynum.setAttribute('max', '31');
        } else if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.freq === 2) {
          $(repparamSwitch).val('weekly-section');
          weeklysection.style.display = "block";
          monthlysection.style.display = "none";
          intervalsection.style.display = "block";
          daynumlabel2.innerHTML = 'Каждую';
          daynumlabel1.innerHTML = 'неделю';
          daynum.setAttribute('max', '53');
        } else if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.freq === 1) {
          $(repparamSwitch).val('monthly-section');
          monthlysection.style.display = "block";
          weeklysection.style.display = "none";
          intervalsection.style.display = "block";
          daynumlabel2.innerHTML = 'Каждый';
          daynumlabel1.innerHTML = 'месяц';
          daynum.setAttribute('max', '12');
          // Чекбоксы повторения для месяца
          if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.bysetpos === null) {
            $(evdmonth).prop("checked", true);
            $(dayofmonth).val(eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.bymonthday[0]);
          }
          if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.bysetpos === -1 &&
            JSON.stringify(eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.byweekday) === '[0,1,2,3,4]') {
            $(lastworkdmonth).prop("checked", true);
          }
          if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.bysetpos === 1 &&
            JSON.stringify(eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.byweekday) === '[0,1,2,3,4]') {
            $(firstworkdmonth).prop("checked", true);
          }
          if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.bysetpos === 1 &&
            JSON.stringify(eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.byweekday) === '[0,1,2,3,4,5,6]') {
            $(firstdmonth).prop("checked", true);
          }
          if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.bysetpos === -1 &&
            JSON.stringify(eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.byweekday) === '[0,1,2,3,4,5,6]') {
            $(lastdmonth).prop("checked", true);
          }
        } else if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.freq === 0) {
          $(repparamSwitch).val('yearly-section');
          weeklysection.style.display = "none";
          monthlysection.style.display = "none";
          intervalsection.style.display = "block";
          daynumlabel2.innerHTML = 'Каждый';
          daynumlabel1.innerHTML = 'год';
          daynum.setAttribute('max', '100');
        } else if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.freq === null) {
          return;
        }
      } else {
        $(repeatSwitch).prop('checked', false);
      }

      start.setDate(eventToUpdate.start, true, 'YYYY-MM-DD HH:mm');
      if (eventToUpdate.allDay === true) {
        $(allDaySwitch).prop('checked', true)
      } else if (eventToUpdate.allDay === false) {
        $(allDaySwitch).prop('checked', false)
      }
      eventToUpdate.end !== null
        ? end.setDate(eventToUpdate.end, true, 'YYYY-MM-DD HH:mm')
        : end.setDate(eventToUpdate.start, true, 'YYYY-MM-DD HH:mm');
      $(modal).find(eventLabel).val(eventToUpdate.extendedProps.calendar).trigger('change');
      $(modal).find(calendarEditor).val(eventToUpdate.extendedProps.description);
      $(modal).find(eventUrl).val(eventToUpdate.url);

      $(repdate).on('click', function () {
        if ($(repdate).is(':checked')) {
          $(repdateinp).prop("disabled", false);
          $(repcount).prop("checked", false);
        } else {
          $(repdateinp).prop("disabled", true);
        }
      })
      $(repcount).on('click', function () {
        if ($(repcount).is(':checked')) {
          $(repcountinp).prop("disabled", false);
          $(repdate).prop("checked", false);
        } else {
          $(repcountinp).prop("disabled", true);
        }
      })
    }
  }

  // Селект для меток в модале
  function renderBullets(option) {
    if (!option.id) {
      return option.text;
    }
    return "<span class='bullet bullet-" +
      $(option.element).data('label') +
      " bullet-sm me-2 ms-2'> " +
      '</span>' +
      option.text;
  }

  $(eventLabel).wrap('<div class="position-relative"></div>').select2({
    placeholder: 'Выберите значение',
    dropdownParent: $(eventLabel).parent(),
    templateResult: renderBullets,
    templateSelection: renderBullets,
    minimumResultsForSearch: -1,
    escapeMarkup: function (es) {
      return es;
    }
  });

  // Датапикер начало события
  const start = startDate.flatpickr({
    locale: "ru",
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
  });

  // Датапикер конец события
  const end = endDate.flatpickr({
    locale: "ru",
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
    onReady: function (selectedDates, dateStr, instance) {
    }
  });

  // Датапикер начало повторения
  const startrep = startrepDate.flatpickr({
    locale: "ru",
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
  });

  // Датапикер конца повторения
  const endrep = endrepDate.flatpickr({
    locale: "ru",
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
  });

  // Выбранные чекбоксы
  function selectedCalendars() {
    const filterInput2 = document.querySelectorAll('.input-filter:not(.select-all)');
    const selected = [];
    for (let j = 0; j < filterInput2.length; j++) {
      if ($(filterInput2[j]).prop('checked')) {
        selected.push(filterInput2[j].dataset.value.toLowerCase());
      }
    }
    return selected;
  }

  function privatecheck() {
    if ($(privateinp).prop('checked')) {
      return 1;
    } else {
      return 0;
    }
  }

  // Получение событий. Эта функция будет вызываться fullCalendar для получения и обновления событий.
  function fetchEvents(info, successCallback) {
    // Получение событий AJAX
    const calendars = selectedCalendars();

    $.ajax(
      {
        url: "components/fullcalendar/events.php",
        type: "GET",
        dataType: "json",

        data: {
          // С не фиксированной датой не работают повторяющиеся собыия
          startParam: moment(info.start).tz('Europe/Moscow').format('YYYY-MM-DD'),
          endParam: moment(info.end).tz('Europe/Moscow').format('YYYY-MM-DD'),
          calendars: calendars,
          private: privatecheck(),
        },
        success: function (result) {
          successCallback(result);
          console.log(result);
        },
        error: function (jqXHR, textStatus, errorThrown, exception) {
          let header;
          if (jqXHR.status === 0) {
            header = 'Не подключено. Проверьте сеть';
          } else if (jqXHR.status === 404) {
            header = 'Запрашиваемая страница не найдена [404]';
          } else if (jqXHR.status === 500) {
            header = 'Внутренняя ошибка сервера [500]';
          } else if (exception === 'parsererror') {
            header = 'Запрос синтаксического анализа JSON завершился неудачно';
          } else if (exception === 'timeout') {
            header = 'Ошибка тайм-аута';
          } else if (exception === 'abort') {
            header = 'Ajax запрос прерван';
          } else {
            header = 'Неперехваченная ошибка';
          }
          showErrorToast(header, textStatus + errorThrown + jqXHR.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'))
        }
      }
    );
  }

  // Показать popover
  function showPopover(event) {
    const classpopover = "popover-" + event.event.extendedProps.calendar.toLowerCase();
    let tooltip = new bootstrap.Popover(event.el, {
      template: '<div class="popover ' + classpopover + '" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      title: event.event.title,
      content: event.event.extendedProps.description,
      placement: 'top',
    });
    tooltip.show();
  }

  // Скрыть popover
  function hidePopover() {
    let tooltips = document.querySelectorAll(".popover");
    tooltips.forEach(function (tooltip) {
      document.body.removeChild(tooltip);
    });
  }

  const calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'ru',
    timeZone: 'Europe/Moscow',
    initialView: 'dayGridMonth',
    editable: true,
    dragScroll: false,
    eventResizableFromStart: false,
    selectable: true,
    selectMirror: true,
    businessHours: false,
    handleWindowResize: true,
    nowIndicator: true,
    dayMaxEvents: true, // добавляет ссылку "еще", когда очень много событий
    navLinks: true, // можно нажимть на названия дней/недель для переключения между видами
    eventClassNames: function ({event: calendarEvent}) {
      const colorName = calendarsColor[calendarEvent._def.extendedProps.calendar];
      return [
        // Фоновый цвет событий
        'bg-' + colorName + '-50'
      ];
    },
    eventSources: [fetchEvents],
    headerToolbar: {
      left: 'title',
      center: '',
      right: 'prev,next,today dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    eventMouseEnter: function (event,) {
      if (event.event.display !== "background") {
        showPopover(event);
      }
    },
    eventMouseLeave: function () {
      hidePopover();
    },
    dateClick: function (info) {
      neweventmodal(info);
    },
    eventClick: function (info) {
      eventClick(info);
    }
  });
  // Рендеринг календаря
  calendar.render();

  // Валидация для jquery validate
  if ($(eventForm).length) {
    $(eventForm).validate({
      submitHandler: function (form, event) {
        event.preventDefault();
        if ($(eventForm).valid()) {
          $(modal)('hide');
        }
      },
      'title': {
        required: true
      },
      'start-date': {
        required: true
      },
      'end-date': {
        required: true
      }
    });
  }

  function neweventmodal(info) {
    resetValues();
    showModal();

    // Прослушка кликов по кнопкам отмена и закрыть
    span.addEventListener('click', () => closeAddEvModal());
    cancelBtn.addEventListener('click', () => closeAddEvModal());

    // Показываем кнопку Добавить
    addEventBtn.style.display = "block";
    // Показываем кнопку Отмена
    cancelBtn.style.display = "block";
    addEventTitle.style.display = "block";

    // Разные даты начала и конца события для создаваемых событий при нажатии на кнопку создания и на день
    if (info == null) {
      const date = moment().format('YYYY-MM-DD HH:mm');
      $(startDate).val(date);
      $(endDate).val(date);
    } else {
      const date = moment(info.date).format('YYYY-MM-DD HH:mm');
      $(startDate).val(date);
      $(endDate).val(date);
    }

    // Если включили повторение, то дата начала повторения берется из даты начала события
    $(repeatSwitch).on('click', function () {
      if (info == null) {
        const date = moment().format('YYYY-MM-DD HH:mm');
        repswitch(date);
      } else {
        const date = moment(info.date).format('YYYY-MM-DD HH:mm');
        repswitch(date);
      }
    })

    // Выбор повторения для дня
    $(repparamSwitch).on('change', function () {
      if (
        repparamSwitch.options[repparamSwitch.selectedIndex].value === 'none') {
        intervalsection.style.display = "none";
        weeklysection.style.display = "none";
        monthlysection.style.display = "none";
        $(evdmonth).prop("checked", false);
      }
      if (
        repparamSwitch.options[repparamSwitch.selectedIndex].value === 'daily-section') {
        intervalsection.style.display = "block";
        weeklysection.style.display = "none";
        monthlysection.style.display = "none";
        $(evdmonth).prop("checked", false);
        daynumlabel2.innerHTML = 'Каждый';
        daynumlabel1.innerHTML = 'день';
        daynum.setAttribute('max', '31');
      }
      if (
        repparamSwitch.options[repparamSwitch.selectedIndex].value === 'weekly-section') {
        intervalsection.style.display = "block";
        weeklysection.style.display = "block";
        monthlysection.style.display = "none";
        // Получаем текущий день недели, ставим галочку в параметрах
        checkweekdays([moment($(startDate).val()).weekday()]);
        $(evdmonth).prop("checked", false);
        daynumlabel2.innerHTML = 'Каждую';
        daynumlabel1.innerHTML = 'неделю';
        daynum.setAttribute('max', '53');
      }
      if (
        repparamSwitch.options[repparamSwitch.selectedIndex].value === 'monthly-section') {
        intervalsection.style.display = "block";
        weeklysection.style.display = "none";
        monthlysection.style.display = "block";
        // Переключаем на дефолтное радио
        $(evdmonth).prop("checked", true);
        $(dayofmonth).val(moment($(startDate).val()).date());
        daynumlabel2.innerHTML = 'Каждый';
        daynumlabel1.innerHTML = 'месяц';
        daynum.setAttribute('max', '12');
      }
      if (
        repparamSwitch.options[repparamSwitch.selectedIndex].value === 'yearly-section') {
        intervalsection.style.display = "block";
        weeklysection.style.display = "none";
        monthlysection.style.display = "none";
        $(evdmonth).prop("checked", false);
        daynumlabel2.innerHTML = 'Каждый';
        daynumlabel1.innerHTML = 'год';
        daynum.setAttribute('max', '100');
      }
    })

    // Если в конце повторения включена дата, то блокируется ввоб кол-ва повторений и наоборот
    $(repdate).on('click', function () {
      if ($(repdate).is(':checked')) {
        $(repdateinp).prop("disabled", false);
        $(repcount).prop("checked", false);
      } else {
        $(repdateinp).prop("disabled", true);
      }
    })
    $(repcount).on('click', function () {
      if ($(repcount).is(':checked')) {
        $(repcountinp).prop("disabled", false);
        $(repdate).prop("checked", false);
      } else {
        $(repcountinp).prop("disabled", true);
      }
    })

    // Если переключают на весь день, то меняется диапазон времени на весь день, и наоборот, на текущее время, не меняя введенной даты
    $(allDaySwitch).on('click', function () {
      if ($(allDaySwitch).prop('checked')) {
        $(startDate).val(moment($(startDate).val()).hour(0).minutes(0).format('YYYY-MM-DD HH:mm'));
        $(endDate).val(moment($(endDate).val()).hour(23).minutes(59).format('YYYY-MM-DD HH:mm'));
      } else {
        $(startDate).val(moment($(startDate).val()).hour(moment().hour()).minutes(moment().minutes()).format('YYYY-MM-DD HH:mm'));
        $(endDate).val(moment($(endDate).val()).hour(moment().hour()).minutes(moment().minutes()).format('YYYY-MM-DD HH:mm'));
      }
    })

    // Проверка дат начала и конца, при изменении даты, меняет неправильную
    $(startDate).on('change', function () {
      if ($(startDate).val() > $(endDate).val()) {
        $(endDate).val($(startDate).val());
      }
    })
    $(endDate).on('change', function () {
      if ($(startDate).val() > $(endDate).val()) {
        $(startDate).val($(endDate).val());
      }
    })
  }

  $(neweventbtn).on('click', function () {
    neweventmodal(null);
  });

  // Кнопка - Добавление нового события
  $(addEventBtn).on('click', function () {
    if ($(eventForm).valid()) {
      // Задаем переменную. На данный момент она пустая.
      const Event = {
        operation: "add",
        title: $(eventTitle).val(),
        start: moment($(startDate).val()).format('YYYY-MM-DD HH:mm:ss'),
        end: moment($(endDate).val()).format('YYYY-MM-DD HH:mm:ss'),
        calendar: $(eventLabel).val(),
        description: $(calendarEditor).val(),
        url: $(eventUrl).val(),
        private: $(privateSwitch).prop('checked') ? 1 : 0,
        user_id: cookieID,
        tzid: "Europe/Moscow",
      }
      if ($(allDaySwitch).prop('checked')) {
        // Если Весь день, то меняем переменную
        Event.allDay = '1';
      }

      // Параметры повторения. Если галочка включена
      if ($(repeatSwitch).prop('checked')) {
        Event.interval = $(daynum).val();
        if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'daily-section') {
          // Ежедневно. Готово
          Event.freq = 'DAILY';
        } else if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'weekly-section') {
          // Еженедельно. Готово
          Event.freq = 'WEEKLY';
          // Получаем отмеченные чекбоксы
          Event.byweekday = getweekdaycheck();
        } else if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'monthly-section') {
          // Ежемесячно
          Event.freq = 'MONTHLY';
          // Проверяем чекбоксы
            // Последний день
          if ($(lastdmonth).prop('checked')) {
            Event.byweekday = 'MO, TU, WE, TH, FR, SA, SU';
            Event.bysetpos = '-1';
          } else
            // Первый день
          if ($(firstdmonth).prop('checked')) {
            Event.byweekday = 'MO, TU, WE, TH, FR, SA, SU';
            Event.bysetpos = '1';
          } else
            // Первый рабочий день
          if ($(firstworkdmonth).prop('checked')) {
            Event.byweekday = 'MO, TU, WE, TH, FR';
            Event.bysetpos = '1';
          } else
            // Последний рабочий день
          if ($(lastworkdmonth).prop('checked')) {
            Event.byweekday = 'MO, TU, WE, TH, FR';
            Event.bysetpos = '-1';
          }
        } else if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'yearly-section') {
          // Ежегодно
          Event.freq = 'YEARLY';
        }

        // Начало повторения
        Event.dtstart = moment($(startrepDate).val()).format('YYYY-MM-DD HH:mm:ss');

        // Диапазон повторения
        if ($(repdate).prop('checked')) {
          Event.until = moment($(endrepDate).val()).format('YYYY-MM-DD HH:mm:ss');
        }
        // Кол-во повторений
        if ($(repcount).prop('checked')) {
          Event.count = $(repcountinp).val();
        }
      }

      console.log(Event);
      // Пишем в базу новое событие методом POST
      $.ajax({
        url: 'components/fullcalendar/ajax.php',
        data: Event,
        type: "POST",
        headers: {
          'Accept': 'application/json;odata=nometadata'
        },
        success: function (response) {
          //addEvent(Event);
          calendar.refetchEvents(Event);
          hideModal();
          resetValues();
          showMiniToast('Событие ' + Event.title + ' добавлено', "success");
          if (response) {
            showErrorToast("Ошибка", response, moment().tz('Europe/Moscow').format('YYYY-MM-DD'))
          }
        },
        error: function (jqXHR, textStatus, errorThrown, exception) {
          let header;
          if (jqXHR.status === 0) {
            header = 'Не подключено. Проверьте сеть';
          } else if (jqXHR.status === 404) {
            header = 'Запрашиваемая страница не найдена [404]';
          } else if (jqXHR.status === 500) {
            header = 'Внутренняя ошибка сервера [500]';
          } else if (exception === 'parsererror') {
            header = 'Запрос синтаксического анализа JSON завершился неудачно';
          } else if (exception === 'timeout') {
            header = 'Ошибка тайм-аута';
          } else if (exception === 'abort') {
            header = 'Ajax запрос прерван';
          } else {
            header = 'Неперехваченная ошибка';
          }
          showErrorToast(header, textStatus + errorThrown + jqXHR.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'))
        }
      });
    }
  });


  // Сброс значений модала
  function resetValues() {
    $(endDate).val('');
    $(eventUrl).val('');
    $(startDate).val('');
    $(eventTitle).val('');
    $(allDaySwitch).prop('checked', false);
    $(privateSwitch).prop('checked', false);
    $(repeatSwitch).prop('checked', false);
    $(calendarEditor).val('');
    repeatparams.style.display = "none";
    $(repparamSwitch).val('none');
    // Параметры повторений
    $(startrepDate).val('');
    $(endrepDate).val('');
    $(monday).prop('checked', false);
    $(tuesday).prop('checked', false);
    $(wednesday).prop('checked', false);
    $(thursday).prop('checked', false);
    $(friday).prop('checked', false);
    $(saturday).prop('checked', false);
    $(sunday).prop('checked', false);
    // Скрытие заголовков и кнопок
    updateEventBtn.style.display = "none";
    btnDeleteEvent.style.display = "none";
    addEventBtn.style.display = "none";
    cancelBtn.style.display = "none";
    addEventTitle.style.display = "none";
    editEventTitle.style.display = "none";
    // Переключить вкладку на Основное
    maintab.classList.add('active');
    mainpane.classList.add('show');
    mainpane.classList.add('active');
    reptab.classList.remove('active');
    reppane.classList.remove('show');
    reppane.classList.remove('active');
    // Скрыть параметры повторения
    intervalsection.style.display = "none";
    weeklysection.style.display = "none";
    monthlysection.style.display = "none";
  }

  // Когда модал закрыт, сбросить значения
  $(modal).on('hidden.bs.modal', function () {
    resetValues();
  });

  // Выбрать все и другие фильтры
  if ($(selectAll)) {
    $(selectAll).on('change', function () {
      const $this = $(this);
      if ($this.prop('checked')) {
        $(calEventFilter).find('input').prop('checked', true);
      } else {
        $(calEventFilter).find('input').prop('checked', false);
      }
      calendar.refetchEvents();
    });
  }

  if ($(filterInput)) {
    $(filterInput).on('change', function () {
      $('.input-filter:checked').length < $(calEventFilter).find('input').length
        ? $(selectAll).prop('checked', false)
        : $(selectAll).prop('checked', true);
      calendar.refetchEvents();
    });
  }

  // Фильтр Только мои
  if ($(privateinp)) {
    $(privateinp).on('change', function () {
      calendar.refetchEvents();
    });
  }

}


// Datatables
const datatablesHandler = () => {
  const colspan = $('td[colspan]').not('[colspan=1]');
  /* colspan.prop("colSpan")  получает кол-во colspan */
  colspan.after('<td style="display: none;"></td>');
  // Для таблиц с сортировкой
  $('.dataTable.sort').DataTable({
    "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Все"]],
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
    "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Все"]],
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


// Содержимое страницы FAQ
const faqcard = document.querySelector('.faq-categories-doc');
const cont = document.querySelector('.faq-body');
// Индикатор загрузки для страницы FAQ
const loading = document.querySelector('.loading-spinner-faq');
// Ссылки FAQ
const faqlinks = document.querySelectorAll('.faq-category-subitem a');

// FAQ акордеон в группе
const faqaccordeon = document.querySelector('.faq-categories-list');


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


// Мульти модал для каталога ссылок
// Модалы для списка ссылок
const multimodal = document.querySelector('.modal-multiaction');
const multimodalbtns = document.querySelectorAll('.btnmodal-multiaction');

const multimodalhandler = (evt) => {
  const link = evt.target.closest('a');
  const delbtn = multimodal.querySelector('.btn-del');
  const header1 = multimodal.querySelector('.header-1');
  const header2 = multimodal.querySelector('.header-2');
  const text1 = multimodal.querySelector('.text-1');
  const text2 = multimodal.querySelector('.text-2');
  const cancelBtn = multimodal.querySelector('.btn-discard');
  const span = multimodal.querySelector('.btn-close');

  // Функции

  // Скрыть модал
  function hideModal() {
    multimodal.style.display = "none";
    multimodal.classList.remove('show');
    const btn = document.querySelector('.modal-backdrop');
    if (btn) {
      document.body.removeChild(btn);
    }
  }

  // Показать модал
  function showModal() {
    multimodal.classList.add('show');
    multimodal.style.display = "block";
    const btn = document.createElement("div");
    btn.setAttribute('class', 'modal-backdrop fade show')
    document.body.appendChild(btn);
  }

  // Кнопка закрыть
  $(span).on('click', function () {
    hideModal();
    delbtn.href = '';
  });

  // Кнопка отмены
  $(cancelBtn).on('click', function () {
    hideModal();
    delbtn.href = '';
  });

  if (!link) {
    return;
  }

  const datalink = link.dataset.link;
  const dataaction = link.dataset.modaction;

  if (!datalink && !dataaction) {
    return;
  }

  if (dataaction === "1") {
    // 1 действие. Удалить группу
    header2.style.display = "none";
    text2.style.display = "none";
    header1.style.display = "block";
    text1.style.display = "block";
  }

  if (dataaction === "2") {
    // 2 действие. Удалить группу
    header1.style.display = "none";
    text1.style.display = "none";
    header2.style.display = "block";
    text2.style.display = "block";
  }

  delbtn.href = datalink;
  showModal()
}

if (multimodal && multimodalbtns) {
  multimodalbtns.forEach((multimodalbtn) => {
    multimodalbtn.addEventListener('click', (evt) => {
      multimodalhandler(evt);
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

//Фильтр в телефонном справочнике
// Ищем группу фильтров с селектором button-group
const filterGroup = document.querySelector('.phonebook-filter');
// Куда будет выводиться результат
const result = document.getElementById('filter');
// Начальная строка без фильтров
const string = '/components/phonebook/ajax.php/?';

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


// Tasks list
// Tasks задачи. Контейнер
const todowrapper = document.querySelector('.todo-wrapper');

// Поля: id, title, duedate (дата),
const tasksHandler = () => {
  // Заголовок задачи
  let taskTitle;
  // Кнопка Добавить задачу
  const addTaskBtn = document.querySelector('.add-task');

  // Модал
  const newTaskModal = document.getElementById('new-task-modal');
  // Форма в модале
  const newTaskForm = document.getElementById('task-form');
  // Заголовок модала статус задачи
  const modalTitle = document.querySelector('.task-title-status');
  // Заголовок модала Добавить
  const addmodalTitle = document.querySelector('.add-task-title');
  // Заголовок модала Редактировать
  const editmodalTitle = document.querySelector('.edit-task-title');
  // Кнопка закрыть на модале
  const span = document.querySelector('.btn-close');

  // Кнопка Добавить на модале
  const addBtn = document.querySelector('.add-task-btn');
  // Кнопка Сохранить на модале
  const updateTodoItem = document.querySelector('.edit-task');
  // Кнопка Удалить на модале
  const updateBtns = document.querySelector('.btn-delete-task');
  // Кнопка Отмена на модале
  const cancelBtn = document.querySelector('.btn-dismiss');

  // Сайдбар с фильтрами и метками
  const sidebarLeft = document.querySelector('.sidebar-left');
  // Меню сайдбара
  const sidebarMenuList = document.querySelector('.sidebar-menu-list');
  // Меню фильтров в сайдбаре
  const listItemFilter = document.querySelector('.list-group-filters');
  // Меню меток в сайдбаре
  const listItemLabel = document.querySelector('.list-group-labels');

  // Поле поиска по задачам
  const todoFilter = document.getElementById('todo-search');
  // Надпись Ничего не найдено в поиске
  const noResults = document.querySelector('.no-results');

  // Сортировка А - Я
  const sortAsc = document.querySelector('.sort-asc');
  // Сортировка Я - А
  const sortDesc = document.querySelector('.sort-desc');

  // Список задач
  const todoTaskList = document.querySelector('.todo-task-list');
  // Обертка списка задач
  const todoTaskListWrapper = document.querySelector('.todo-task-list-wrapper');

  // Поля модала
  // Поле ввода срока исполнения
  const flatPickr = document.querySelector('.due-date');
  // Описание события
  const taskDesc = document.getElementById('ask-description');
  // Метки
  const taskTag = document.getElementById('cat-select');
  // Переключатель Вижу только я (приватное событие)
  const privateSwitch = document.querySelector(".private-switch");
  const checkboxId = 100;

  //Массив задач. Заменить на обращение к базе
  let tasksList = [
    {
      id: 1,
      title: 'Задача',
      created: "2021-08-13 09:00:00",
      deadline: "2021-08-31 09:00:00",
      tag: 'primary',
      user_id: '1',
      completed: 'false',
      deleted: 'false',
      description: 'описание'
    },
    {
      id: 2,
      title: 'Задача 2',
      created: "2021-08-12 09:00:00",
      deadline: "2021-08-18 09:00:00",
      tag: 'danger',
      user_id: '1',
      completed: 'true',
      deleted: 'true',
      description: ''
    },
    {
      id: 3,
      title: 'Задача с большим описанием, которое надо обрезать в ращметке, чтобы не разывало контейнер',
      created: "2021-08-12 09:00:00",
      deadline: "2021-08-10 09:00:00",
      tag: 'warning',
      user_id: '1',
      completed: 'false',
      deleted: 'false',
      description: ''
    },
    {
      id: 4,
      title: 'Просто задача без названия',
      created: "2021-08-14 09:00:00",
      deadline: "2021-08-23 09:00:00",
      tag: 'success',
      user_id: '1',
      completed: 'false',
      deleted: 'false',
      description: ''
    },
    {
      id: 5,
      title: 'Задача с "кавычками"',
      created: "2021-08-01 09:00:00",
      deadline: "2021-09-18 09:00:00",
      tag: 'info',
      user_id: '1',
      completed: 'true',
      deleted: 'true',
      description: ''
    },
    {
      id: 6,
      title: 'Задача 2',
      created: "2021-08-12 09:00:00",
      deadline: "2021-08-18 09:00:00",
      tag: 'primary',
      user_id: '1',
      completed: 'true',
      deleted: 'true',
      description: ''
    }
  ];


  // Функции

  const createTaskItemString = ({id, deadline, tag, title}) =>
    `<li class="todo-item">
              <div class="todo-title-wrapper">
                <div class="todo-title-area">
                  <div class="title-wrapper">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="form-check-input" id="task-${id}">
                      <label class="custom-control-label" for="task-${id}"></label>
                    </div>
                    <span class="todo-title">${title}</span>
                  </div>
                </div>
                <div class="todo-item-action">
                <div class="tag-container">
                <span class="bullet bullet-sm bullet-${tag} me-2" id="tag-${id}"></span>
</div>
                  <small class="text-nowrap text-muted me-1">${moment(deadline).tz('Europe/Moscow').format('LLL')}</small>
                </div>
              </div>
            </li>`;


  // Рендеринг задач
  const tasksRender = () => {
    todoTaskList.innerHTML = '';
    const taskElementsString = tasksList.map((title) => createTaskItemString(title)).join('');
    todoTaskList.insertAdjacentHTML('beforeend', taskElementsString);

    /*
    // Множественный массив
    контейнер тегов
    const tagscontainers = todoTaskList.querySelectorAll('.tag-container');
    tagscontainers.forEach((tagscontainer) => {
      tagscontainer.innerHTML = '';
      for (let key in tasksList) {
        // если products[key]['category'] не равно 'vegetable', то тогда переходим к следующей итерации
        if (tasksList[key]['tags']) {
          console.log(tasksList[key]['tags']);
        }
        continue;
      }
      // тут нужен сброщик тегов
    });*/
  }

  // Скрыть модал
  function hideModal() {
    newTaskModal.style.display = "none";
    newTaskModal.classList.remove('show');
    const btn = document.querySelector('.modal-backdrop');
    if (btn) {
      document.body.removeChild(btn);
    }
  }

  // Показать модал
  function showModal() {
    newTaskModal.classList.add('show');
    newTaskModal.style.display = "block";
    const btn = document.createElement("div");
    btn.setAttribute('class', 'modal-backdrop fade show')
    document.body.appendChild(btn);
  }

  // Кнопка закрыть
  $(span).on('click', function () {
    hideModal();
    // сбросить модал
    resetValues()
  });

  // Кнопка отмены
  $(cancelBtn).on('click', function () {
    hideModal();
    // сбросить модал
    resetValues()
  });

  // Добавляет класс active при клике на список фильтров сайдбара
  if (listItemFilter) {
    $(listItemFilter).find('a').on('click', function () {
      if ($(listItemFilter).find('a').hasClass('active')) {
        $(listItemFilter).find('a').removeClass('active');
      }
      $(this).addClass('active');
    });
  }

  // Добавляет класс active при клике на список меток сайдбара
  if (listItemLabel) {
    $(listItemLabel).find('a').on('click', function () {
      if ($(listItemLabel).find('a').hasClass('active')) {
        $(listItemLabel).find('a').removeClass('active');
      }
      $(this).addClass('active');
    });
  }

  /* // Инициализация Drag'n'Drop. Нужен dragula
   const dndContainer = document.getElementById('todo-task-list');
   if (typeof dndContainer !== undefined && dndContainer !== null) {
     dragula([dndContainer], {
       moves: function (el, container, handle) {
         return handle.classList.contains('drag-icon');
       }
     });
   }*/

  // Метки задач
  if (taskTag) {
    $(taskTag).wrap('<div class="position-relative"></div>');
    $(taskTag).select2({
      placeholder: 'Выберите метку'
    });
  }

  // Датапикер даты исполнения
  if (flatPickr) {
    $(flatPickr).flatpickr({
      locale: "ru",
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      defaultDate: 'today'
    });
  }

  // Добавление новой задачи в список

  // To add new task form
  if (newTaskForm) {
    $(newTaskForm).validate({
      rules: {
        todoTitleAdd: {
          required: true
        },
        'task-due-date': {
          required: true
        }
      }
    });

    $(newTaskForm).on('submit', function (e) {
      e.preventDefault();
      const isValid = $(newTaskForm).valid();
      if (isValid) {
        //let checkboxId++;
        const todoTitle = $('.sidebar-todo-modal .new-todo-item-title').val();
        const date = $('.sidebar-todo-modal .task-due-date').val(),
          selectedDate = new Date(date),
          month = new Intl.DateTimeFormat('en', {month: 'short'}).format(selectedDate),
          day = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(selectedDate),
          todoDate = month + ' ' + day;

        // Badge calculation loop
        const selected = $('.task-tag').val();
        const badgeColor = {
          Team: 'primary',
          Low: 'success',
          Medium: 'warning',
          High: 'danger',
          Update: 'info'
        };
        $.each(selected, function (index, value) {
          let todoBadge = '<div class="badge badge-pill badge-light-' + badgeColor[value] + ' mr-50">' + value + '</div>';
        });

        // HTML Вывод
        if (todoTitle !== '') {
          $(todoTaskList).prepend(
            '<li class="todo-item">' +
            '<div class="todo-title-wrapper">' +
            '<div class="todo-title-area">' +
            '<i class="mdi mdi-dots-vertical"></i>' +
            '<div class="title-wrapper">' +
            '<div class="custom-control custom-checkbox">' +
            '<input type="checkbox" class="custom-control-input" id="customCheck' +
            checkboxId +
            '" />' +
            '<label class="custom-control-label" for="customCheck' +
            checkboxId +
            '"></label>' +
            '</div>' +
            '<span class="todo-title">' +
            todoTitle +
            '</span>' +
            '</div>' +
            '</div>' +
            '<div class="todo-item-action">' +
            '<div class="badge-wrapper mr-1">' +
            todoBadge +
            '</div>' +
            '<small class="text-nowrap text-muted mr-1">' +
            todoDate +
            '</small>' +
            '</div>' +
            '</div>' +
            '</li>'
          );
        }
        showToast('Задача сохранена', 'Сохранено 💾', "Сейчас");
        hideModal();
      }
    });
  }

  // Чекбокс завершения задачи
  $(todoTaskListWrapper).on('change', '.custom-checkbox', function () {
    const $this = $(this).find('input');
    if ($this.prop('checked')) {
      $this.closest('.todo-item').addClass('completed');
      showToast('Задача завершена', 'Поздравляем 🎉', "Сейчас");
    } else {
      $this.closest('.todo-item').removeClass('completed');
    }
  });
  $(todoTaskListWrapper).on('click', '.custom-checkbox', function (event) {
    event.stopPropagation();
  });

  // To open todo list item modal on click of item
  $(document).on('click', '.todo-task-list-wrapper .todo-item', function () {
    showModal();
    addBtn.style.display = "none";
    cancelBtn.style.display = "none";
    updateTodoItem.style.display = "block";
    updateBtns.style.display = "block";
    addmodalTitle.style.display = "none";
    editmodalTitle.style.display = "block";
    if ($(this).hasClass('completed')) {
      $(modalTitle).html(
        '<button type="button" class="btn btn-sm btn-outline-success complete-todo-item waves-effect waves-float waves-light" data-dismiss="modal">Завершена</button>'
      );
    } else {
      $(modalTitle).html(
        '<button type="button" class="btn btn-sm btn-outline-secondary complete-todo-item waves-effect waves-float waves-light" data-dismiss="modal">Не завершена</button>'
      );
    }
    $(taskTag).val('').trigger('change');
    taskTitle = $(this).find('.todo-title');
    const title = $(this).find('.todo-title').html();

    // apply all variable values to fields
    $(newTaskForm).find('.new-todo-item-title').val(title);
  });

  // Updating Data Values to Fields
  if (updateTodoItem) {
    $(updateTodoItem).on('click', function (e) {
      const isValid = $(newTaskForm).valid();
      e.preventDefault();
      if (isValid) {
        const $edit_title = newTaskForm.find('.new-todo-item-title').val();
        $(taskTitle).text($edit_title);
        showToast('Задача сохранена', 'Сохранено 💾', "Сейчас");
        hideModal();
      }
    });
  }

  // Сортировка по возрастанию А-Я. Работает
  if (sortAsc) {
    $(sortAsc).on('click', function () {
      $(todoTaskListWrapper)
        .find('li')
        .sort(function (a, b) {
          return $(b).find('.todo-title').text().toUpperCase() < $(a).find('.todo-title').text().toUpperCase() ? 1 : -1;
        })
        .appendTo(todoTaskList);
    });
  }
  // Сортировка по убыванию Я-А. Работает
  if (sortDesc) {
    $(sortDesc).on('click', function () {
      $(todoTaskListWrapper)
        .find('li')
        .sort(function (a, b) {
          return $(b).find('.todo-title').text().toUpperCase() > $(a).find('.todo-title').text().toUpperCase() ? 1 : -1;
        })
        .appendTo(todoTaskList);
    });
  }

  // Фильтр задач. Поиск. Работает
  if (todoFilter) {
    $(todoFilter).on('keyup', function () {
      const value = $(this).val().toLowerCase();
      if (value !== '') {
        $('.todo-item').filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
        const tbl_row = $('.todo-item:visible').length; // тут tbl_test название таблицы

        //Проверка имеет ли таблица строку или нет
        if (tbl_row === 0) {
          if (!$(noResults).hasClass('show')) {
            $(noResults).addClass('show');
          }
        } else {
          $(noResults).removeClass('show');
        }
      } else {
        // Если поле поиска пустое
        $('.todo-item').show();
        if ($(noResults).hasClass('show')) {
          $(noResults).removeClass('show');
        }
      }
    });
  }

  $(addTaskBtn).on('click', function () {
    showModal(newTaskModal);
    $(addBtn).style.display = "block";
    $(cancelBtn).style.display = "none";
    $(updateTodoItem).style.display = "block";
    $(updateBtns).style.display = "none";
    $(addmodalTitle).style.display = "block";
    $(editmodalTitle).style.display = "none";

  });

  // Сброс значений модала
  function resetValues() {
    $(flatPickr).val('');
    $(taskDesc).val('');
    $(taskTag).val('');
    $(privateSwitch).prop('checked', false);
  }

  tasksRender();
}


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

// Слайдер
// Массив слайдера
let slides_arr = [
  {
    id: 0,
    image:
      "assets/img/slider/cosmonaut.jpg",
    header: "Поехали!",
    text: "тут ссылка скрыта",
    hideLink: "visually-hidden",
    link: "?page=to-do"
  },
  {
    id: 1,
    image:
      "assets/img/slider/hello.jpg",
    header: "Приветствуем на внутреннем сайте суда!",
    text: "",
    hideLink: "",
    link: "?page=to-do"
  },
  {
    id: 2,
    image:
      "assets/img/slider/wear_masks.jpg",
    header: "Пожалуйста, не забывайте носить маску.",
    text: "это описание не помещается в контейнер слайдера полностью, оно должно быть обрезано, чтобы контейнер не переполнился и верстка не развалилась, поэтому он обрезается точками",
    hideLink: "",
    link: "?page=to-do"
  },
];

const sliderCarousel = document.getElementById("carouselNews");


const CarouselIndicators =
  `<div class="carousel-indicators" style="bottom: 0; margin-right: 47%;">
            </div>`;

const CarouselInner =
  `<div class="carousel-inner" style="border-radius: 0.25rem;">
            </div>`;

const CarouselControls =
  `<button class="carousel-control-prev h-100" type="button" data-bs-target="#carouselNews"
                    data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span> <span
                class="visually-hidden">Предыдущий</span></button>
            <button class="carousel-control-next h-100" type="button" data-bs-target="#carouselNews"
                    data-bs-slide="next" style="right: 32%;"><span class="carousel-control-next-icon" aria-hidden="true"></span> <span
                class="visually-hidden">Следующий</span></button>`;

const createSliderItemString = ({image, header, text, hideLink, link}) =>

  `<div class="carousel-item" data-bs-interval="10000">
  <div class="d-flex">
    <img src="${image}" alt="${header}" aria-label="${header}" style="object-fit: cover; height: 282px;">
    <div class="carousel-caption d-flex flex-column justify-content-between w-100" style="position: revert; padding: 1.25rem; text-align: left;">
      <div>
        <h6 style="text-overflow: ellipsis; overflow: hidden; display: -webkit-box; max-width: 173px; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">${header}</h6>
        <p style="text-overflow: ellipsis; overflow: hidden; display: -webkit-box; max-width: 173px; -webkit-line-clamp: 5; -webkit-box-orient: vertical; margin-bottom: 0;">${text}</p>
      </div>
      <a href="${link}" class="mt-2 ${hideLink}">Подробнее</a>
    </div>
  </div>
</div>`;

const createDotsItemString = ({id, header}) =>
  `<button type="button" data-bs-target="#carouselNews" data-bs-slide-to="${id}" aria-label="${header}" style="width: 10px; height: 10px; border-radius: 50%;"></button>`;

// Рендеринг слайдера
const sliderRender = (slideArray) => {
  sliderCarousel.insertAdjacentHTML('beforeend', CarouselIndicators);
  sliderCarousel.insertAdjacentHTML('beforeend', CarouselInner);
  sliderCarousel.insertAdjacentHTML('beforeend', CarouselControls);
  const sliderContainer = document.querySelector('.carousel-inner');
  const sliderDotsContainer = document.querySelector('.carousel-indicators');

  sliderContainer.innerHTML = '';
  sliderDotsContainer.innerHTML = '';
  const sliderElementsString = slideArray.map((image) => createSliderItemString(image)).join('');
  const dotsElementsString = slideArray.map((image) => createDotsItemString(image)).join('');
  sliderContainer.insertAdjacentHTML('beforeend', sliderElementsString);
  sliderDotsContainer.insertAdjacentHTML('beforeend', dotsElementsString);

  // Показывает 1 слайд
  let slide1 = sliderContainer.firstChild;
  let dot1 = sliderDotsContainer.firstChild;
  slide1.classList.add('active');
  dot1.classList.add('active');
}

// Определение функции, запускающейся при полной загрузке страницы
const init = () => {

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

  // Получает имя файла текущей открытой страницы и ищет такое же в ссылках бокового меню,
  // устанавливает класс active открытому пункту или субпункту и его родителю
  if (sidebarnavmenu) {
    sidebarnavmenuHandler();
  }

  // Прогресс бар над хедером
  maincontent.addEventListener('scroll', maincontentscrollHandler);

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

  // Отрисовка модуля календаря
  if (calendarEl) {
    calendmodulehandler();
  }

  // Отрисовка виджета календаря
  if (minicalendar) {
    minicalendarhandler();
  }
  // Задачи
  if (todowrapper) {
    tasksHandler()
  }

  // Показать/скрыть пароль
  if (showhidepass && passinplist) {
    showhidepass.addEventListener('click', showhidepassHandler);
  }

  // Принадлежность судье
  if (profselect && affselect) {
    profselect.addEventListener('change', profselectHandler);
  }

  // В штате
  if (activeselect && roomselect) {
    activeselect.addEventListener('change', activeselectHandler);
  }

  datatablesHandler();

  // Подсказки
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });

  // Отрисовка слайдера на дашбоарде
  if (sliderCarousel) {
    sliderRender(slides_arr);
  }

  //Отключаем спиннер
  document.addEventListener('DOMContentLoaded', () => {
    if (spinnerloader) {
      spinnerloaderHandler();
    }
  });


};

// Запуск функции при загрузке. Будет запущено все, что внутри const init = () => {}

init();
