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

//Фильтр в телефонном справочнике
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

// Виджет событий и дней рождения скрывается сам, если остальные скрыты
const todayeventswidget = document.querySelector('.today-events');

// Модалы для списка ссылок
const multimodal = document.querySelector('.modal-multiaction');
const multimodalbtns = document.querySelectorAll('.btnmodal-multiaction');

// Toast
// Всплывашка. Принимает заголовок header, текст text, время time в виде строки, значок icon (danger)
function showToast(header,text,time,icon,iconcolor) {
  /*
  document.getElementById("toastbtn").onclick = function() {
        var toastElList = [].slice.call(document.querySelectorAll('.toast'))
        var toastList = toastElList.map(function(toastEl) {
        // Creates an array of toasts (it only initializes them)
          return new bootstrap.Toast(toastEl) // No need for options; use the default options
        });
       toastList.forEach(toast => toast.show()); // This show them

        console.log(toastList); // Testing to see if it works
      };

          const btn = document.createElement("div");
    document.querySelector('.toasts-container').appendChild(toast);
   */

  //const toast = document.querySelector('.toast');
 /* const toastheader = toast.querySelector('.toast-header strong');
  const toasttext = toast.querySelector('.toast-body');
  const toasttime = toast.querySelector('.toast-header small');
  const toasticon = toast.querySelector('.toast-header i');
  toastheader.textContent = header;
  toasttext.textContent = text;
  toasttime.textContent = time;*/
  //toasticon.classList.add('mdi-' + icon);
  //toasticon.classList.add('text-' + iconcolor);
  /*const bstoast = new bootstrap.Toast(toast);
  bstoast.show()*/
  const toast = '  <div class="toast fade hide" role="alert" aria-live="assertive" aria-atomic="true">\n' +
    '    <div class="toast-header">\n' +
    '      <i class="mdi mdi-alert-circle-outline"></i>\n' +
    '      <strong class="me-auto">' + header + '</strong> <small class="text-muted">'  + time +  '</small>\n' +
    '      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button>\n' +
    '    </div>\n' +
    '    <div class="toast-body">'  + text +  '</div>\n' +
    '  </div>'


  document.querySelector('.toasts-container').appendChild(toast);
  const toastElList = [].slice.call(document.querySelectorAll('.toast'));
  const toastList = toastElList.map(function (toastEl) {
    // Creates an array of toasts (it only initializes them)
    return new bootstrap.Toast(toastEl) // No need for options; use the default options
  });
  toastList.forEach(toast => toast.show()); // This show them
}


// Tasks задачи
const todowrapper = document.querySelector('.todo-wrapper');

// Календарь на главной
// Контейнер для календаря
const minicalendar = document.querySelector('.today-calendar-widget');

// Календарь большой
// Контейнер для календаря
const calendarEl = document.getElementById('calendar');


const calendmodulehandler = () => {
  //Элементы

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

  // Цвета событий, названия менять в разметке, в js менять не надо

  const calendarsColor = {
    Primary: 'primary',
    Success: 'success',
    Danger: 'danger',
    Warning: 'warning',
    Info: 'info'
  }

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

  // Кнопка закрыть
  $(span).on('click', function () {
    hideModal();
    resetValues()
  });

  // Кнопка отмены
  $(cancelBtn).on('click', function () {
    hideModal();
    resetValues()
  });

  // Очистить данные и закрыть модал, если нажали вне модала
  window.onclick = function (event) {
    if (event.target === modal) {
      resetValues();
      hideModal();
    }
  };

  // Событие при нажатии на событие
  function eventClick(info) {
    eventToUpdate = info.event;

    // Открывает ссылку в новом окне
    if ((eventToUpdate).url) {
      info.jsEvent.preventDefault();
      // window.open((eventToUpdate).url, '_blank');
    }
    //console.log(eventToUpdate);
    showModal();
    addEventBtn.style.display = "none";
    cancelBtn.style.display = "none";
    updateEventBtn.style.display = "block";
    btnDeleteEvent.style.display = "block";
    addEventTitle.style.display = "none";
    editEventTitle.style.display = "block";

    $(eventTitle).val(eventToUpdate.title);
    if (eventToUpdate.extendedProps.user_id === 0) {
      $(privateSwitch).prop('checked', false)
    } else {
      $(privateSwitch).prop('checked', true)
    }
    start.setDate(eventToUpdate.start, true, 'YYYY-MM-DD hh:mm');
    if (eventToUpdate.allDay === true) {
      $(allDaySwitch).prop('checked', true)
    } else {
      $(allDaySwitch).prop('checked', false)
    }
    eventToUpdate.end !== null
      ? end.setDate(eventToUpdate.end, true, 'YYYY-MM-DD hh:mm')
      : end.setDate(eventToUpdate.start, true, 'YYYY-MM-DD hh:mm');
    $(modal).find(eventLabel).val(eventToUpdate.extendedProps.calendar).trigger('change');
    $(modal).find(calendarEditor).val(eventToUpdate.extendedProps.description);
    $(modal).find(eventUrl).val(eventToUpdate.url);

    //  Удаление события
    $(btnDeleteEvent).on('click', function () {
      eventToUpdate.remove(eventToUpdate.id);
      hideModal();
      resetValues();
    });
  }

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

  // Выбранные чекбоксы
  function selectedCalendars() {
    const selected = [];
    $('.calendar-events-filter input:checked').each(function () {
      selected.push($(this).attr('data-value'));
    });
    return selected;
  }

  // Получение событий. Эта функция будет вызываться fullCalendar для получения и обновления событий.
  function fetchEvents(info, successCallback) {
    // Получение событий AJAX

    $.ajax(
      {
        url: "components/fullcalendar/events.php",
        type: "GET",
        dataType: "json",

        data: {
          startParam: moment(info.start).format('YYYY-MM-DD'),
          endParam: moment(info.end).format('YYYY-MM-DD'),
        },
        success: function (result) {
          // Получение запрашиваемых календарей(категорий событий)
          /*const calendars = selectedCalendars();*/
          successCallback(result);
          //console.log(result);
          //console.log(moment(info.start).format('YYYY-MM-DD'), moment(info.end).format('YYYY-MM-DD'),);
          /*return [result.events.filter(event => (calendars.includes(event.extendedProps.calendar)))];*/
        },
        error: function (error) {
          alert("Ошибка" + error.responseText);
          //console.log(moment(info.start).format('YYYY-MM-DD'), moment(info.end).format('YYYY-MM-DD'),);

        }
      }
    );

    /* const calendars = selectedCalendars();
     // Сделать API вызов
     let selectedEvents = $(events).filter(function (event) {
       // console.log(event.extendedProps.calendar.toLowerCase());
       return calendars.includes(event.extendedProps.calendar.toLowerCase());
     });
     // if (selectedEvents.length > 0) {
     successCallback(selectedEvents);
     // }*/
  }

  const bgevents = [
    {
      id: 1000,
      start: "2021-07-31",
      end: "2021-07-31",
      display: "background"
    },
    {
      id: 1001,
      start: "2021-08-01",
      end: "2021-08-01",
      allDay: true,
      display: "background"
    },
    {
      id: 1002,
      start: "2021-08-07",
      end: "2021-08-07",
      allDay: true,
      display: "background"
    },
    {
      id: 1003,
      start: "2021-08-08",
      end: "2021-08-08",
      display: "background"
    },
    {
      id: 1004,
      start: "2021-08-14",
      end: "2021-08-15",
      display: "background"
    },
    {
      id: 1005,
      start: "2021-08-15",
      end: "2021-08-15",
      display: "background"
    },
    {
      id: 1006,
      start: "2021-08-21",
      end: "2021-08-21",
      display: "background"
    },
    {
      id: 1007,
      start: "2021-08-22",
      end: "2021-08-22",
      display: "background"
    },
    {
      id: 1008,
      start: "2021-08-28",
      end: "2021-08-28",
      display: "background"
    },
    {
      id: 1009,
      start: "2021-08-29",
      end: "2021-08-29",
      display: "background"
    },
    {
      id: 1010,
      start: "2021-09-04",
      end: "2021-09-04",
      display: "background"
    },
    {
      id: 1011,
      start: "2021-09-05",
      end: "2021-09-05",
      display: "background"
    },
  ];

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

    eventSources: [
      fetchEvents,
      bgevents
    ],
    //  events: fetchEvents,
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
      // Клик на пустую дату
      const date = moment(info.date).format('YYYY-MM-DD hh:mm');
      resetValues();
      showModal();
      // Показываем кнопку Добавить
      addEventBtn.style.display = "block";
      // Скрываем кнопку Сохранить
      updateEventBtn.style.display = "none";
      // Скрываем кнопку Удалить
      btnDeleteEvent.style.display = "none";
      $(startDate).val(date);
      $(endDate).val(date);
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
      title: {
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

  // Функция - Добавление события
  function addEvent(eventData) {
    calendar.refetchEvents(eventData);
    hideModal();
    resetValues();
  }

  // Функция - Обновление события
  function updateEvent(eventData) {
    calendar.refetchEvents(eventData);
    hideModal();
    resetValues();
  }

  // Функция - Удаление события
  function removeEvent(eventId) {
    calendar.refetchEvents(eventId);
    hideModal();
    resetValues();
  }

  // Кнопка - Добавление нового события
  $(addEventBtn).on('click', function () {
    // Показываем на модале кнопку Отмена
    cancelBtn.style.display = "block";
    // Скрываем на модале кнопку Удалить
    btnDeleteEvent.style.display = "none";
    if ($(eventForm).valid()) {
      // Задаем переменную. На данный момент она пустая.
      let allDay;
      const Event = {
        operation: "add",
        title: $(eventTitle).val(),
        start: moment($(startDate).val()).format('YYYY-MM-DD hh:mm:ss'),
        end: moment($(endDate).val()).format('YYYY-MM-DD hh:mm:ss'),
        calendar: $(eventLabel).val(),
        description: $(calendarEditor).val(),
        url: $(eventUrl).val(),
        user_id: $(privateSwitch).prop('checked') ? "999999999" : "0",
        // Тут тоже она пустая, но без ее объявления нельзя
        allDay: allDay,
      }
      if ($(allDaySwitch).prop('checked')) {
        // Если Весь день, то меняем переменную
        Event.allDay = '1';
      }
      // Пишем в базу новое событие методом POST
      $.ajax({
        url: 'components/fullcalendar/ajax.php',
        data: Event,
        type: "POST",
        headers: {
          'Accept': 'application/json;odata=nometadata'
        },
        success: function (response) {
          addEvent(Event);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          alert("Ошибка" + jqXHR + textStatus + errorThrown);
        }
      });
    }
  });

  // Кнопка - Обновление нового события
  $(updateEventBtn).on('click', function () {
    if ($(eventForm).valid()) {
      let allDay;
      const Event = {
        operation: "upd",
        id: eventToUpdate.id,
        title: $(modal).find(eventTitle).val(),
        start: $(modal).find(startDate).val(),
        end: $(modal).find(endDate).val(),
        url: $(eventUrl).val(),
        calendar: $(eventLabel).val(),
        user_id: $(privateSwitch).prop('checked') ? "999999999" : "0",
        description: $(calendarEditor).val(),
        allDay: allDay,
      }
      if ($(allDaySwitch).prop('checked')) {
        // Если Весь день, то меняем переменную
        Event.allDay = '1';
      }

      // Пишем в базу событие методом POST
      $.ajax({
        url: 'components/fullcalendar/ajax.php',
        data: Event,
        type: "POST",
        headers: {
          'Accept': 'application/json;odata=nometadata'
        },
        success: function (response) {
          updateEvent(Event);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          alert("Ошибка" + jqXHR + textStatus + errorThrown);
        }
      });
    }
  });

  // Кнопка - Удаление события
  $(btnDeleteEvent).on('click', function () {
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
        removeEvent(Event);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        alert("Ошибка" + jqXHR + textStatus + errorThrown);
      }
    });
  });

  // Сброс значений модала
  function resetValues() {
    $(endDate).val('');
    $(eventUrl).val('');
    $(startDate).val('');
    $(eventTitle).val('');
    $(allDaySwitch).prop('checked', false);
    $(privateSwitch).prop('checked', false);
    $(calendarEditor).val('');
  }

  // Когда модал закрыт, сбросить значения
  $(modal).on('hidden.bs.modal', function () {
    resetValues();
  });

  // Выбрать все и другие фильтры
  if ($(selectAll).length) {
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

  if ($(filterInput).length) {
    $(filterInput).on('change', function () {
      $('.input-filter:checked').length < $(calEventFilter).find('input').length
        ? $(selectAll).prop('checked', false)
        : $(selectAll).prop('checked', true);
      calendar.refetchEvents();
    });
  }
}

// Конец календаря

// Мини календарь на главной
const minicalendarhandler = () => {
  let calendar = new FullCalendar.Calendar(minicalendar, {
    locale: 'ru',
    timeZone: 'Europe/Moscow',
    initialView: 'dayGridMonth',
    height: 250,
    editable: false,
    selectable: true,
    businessHours: false,
    dayMaxEvents: false, //
    headerToolbar: {
      right: 'prev,next,today',
      left: 'title',
    },
    events: {
      url: 'components/fullcalendar/events.php',
      method: 'GET',
      extraParams: function () { // функция, которая возвращает объект
        return {
          cachebuster: new Date().valueOf()
        };
      }
    }
  });
  calendar.render();
}

// Мульти модал для каталога ссылок
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
    // 1 действие. Удалить группу
    header1.style.display = "none";
    text1.style.display = "none";
    header2.style.display = "block";
    text2.style.display = "block";
  }

  delbtn.href = datalink;
  showModal()
}


// Виджет событий
const todayeventswidgethandler = () => {
  // Если списки дней рождения скрыты и событий, то список скрывается польностью
  const todayeventslist = todayeventswidget.querySelector('.today-events-list');
  const todaybdayslist = todayeventswidget.querySelector('.today-birthdays-list');
  if (todayeventslist.classList.contains('visually-hidden') && todaybdayslist.classList.contains('visually-hidden')) {
    todayeventswidget.querySelector('.widget-title').classList.add('visually-hidden');
    todayeventswidget.style.padding = '0';
  } else {
    todayeventswidget.querySelector('.widget-title').classList.remove('visually-hidden');
    todayeventswidget.style = '';
  }
}

//
// to do list
/*
var todos = [{
  text: "вынести мусор",
  done: false,
  id: 0
}];
var currentTodo = {
  text: "",
  done: false,
  id: 0
}
document.getElementById("todo-input").oninput = function (e) {
  currentTodo.text = e.target.value;
};
function DrawTodo(todo) {
  var newTodoHTML = `
				  <div class="pb-3 todo-item" todo-id="${todo.id}">
				  <div class="input-group">
					<div class="input-group-text">
					  <input type="checkbox" onchange="TodoChecked(${todo.id})" aria-label="Checkbox for following text input" ${todo.done && "checked"} >
					</div>
				  <input type="text" readonly class="form-control ${todo.done && "todo-done"} " aria-label="Text input with checkbox"
					value="${todo.text}">
					<button todo-id="${todo.id}" class="btn btn-outline-secondary bg-danger text-white" type="button" onclick="DeleteTodo(this);"
					  id="button-addon2 ">X</button>
				  </div>
				  </div>
				  `;
  var dummy = document.createElement("DIV");
  dummy.innerHTML = newTodoHTML;
  document.getElementById("todo-container").appendChild(dummy.children[0]);
}
function RenderAllTodos() {
  var container = document.getElementById("todo-container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for (var i = 0; i < todos.length; i++) {
    DrawTodo(todos[i]);
  }
}
RenderAllTodos();
function DeleteTodo(button) {
  var deleteID = parseInt(button.getAttribute("todo-id"));
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === deleteID) {
      todos.splice(i, 1);
      RenderAllTodos();
      break;
    }
  }
}
function TodoChecked(id) {
  todos[id].done = !todos[id].done;
  RenderAllTodos();
}
function CreateTodo() {
  newtodo = {
    text: currentTodo.text,
    done: false,
    id: todos.length
  }
  todos.push(newtodo);
  RenderAllTodos();
}
*/

// Tasks list

// Поля: id, title, duedate (дата),
const tasksHandler = () => {
  // Заголовок задачи
  let taskTitle;
  // Кнопка Добавить задачу
  const addTaskBtn = document.querySelector('.add-task');

  // Модал
  const newTaskModal = document.getElementById('new-task-modal');
  // Форма в модале
  const newTaskForm = document.getElementById('form-modal-todo');
  // Кнопка добавить в избранное
  const favoriteStar = document.querySelector('.todo-item-favorite');
  // Заголовок модала
  const modalTitle = document.querySelector('.modal-title');
  // Кнопка закрыть на модале
  const span = document.querySelector('.btn-close');

  // Кнопка Добавить на модале
  const addBtn = document.querySelector('.add-todo-item');
  // Кнопка Обновить на модале
  const updateTodoItem = document.querySelector('.update-todo-item');
  // Кнопка Удалить на модале
  const updateBtns = document.querySelector('.update-btn');
  // Кнопка Отмена на модале
  const cancelBtn = document.querySelector('.btn-dismiss');


  // Сайдбар с фильтрами и метками
  const sidebarLeft = document.querySelector('.sidebar-left');
  // Меню сайдбара
  const sidebarMenuList = document.querySelector('.sidebar-menu-list');
  // Меню фильтров в сайдбаре
  const listItemFilter = document.querySelector('.list-group-filters');

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
  const flatPickr = document.querySelector('.task-due-date');
  // Описание события
  const taskDesc = document.getElementById('task-desc');
  // Метки
  const taskTag = document.getElementById('task-tag');
  // Переключатель Вижу только я (приватное событие)
  const privateSwitch = document.querySelector(".private-switch");
  const checkboxId = 100;

  // Функции

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

  // Инициализация Drag'n'Drop. Нужен dragula
  const dndContainer = document.getElementById('todo-task-list');
  if (typeof dndContainer !== undefined && dndContainer !== null) {
    dragula([dndContainer], {
      moves: function (el, container, handle) {
        return handle.classList.contains('drag-icon');
      }
    });
  }

  // Метки задач
  if (taskTag) {
    $(taskTag).wrap('<div class="position-relative"></div>');
    $(taskTag).select2({
      placeholder: 'Выберите метку'
    });
  }

  // Нажатие на кнопку избранного - звезду
  if (favoriteStar) {
    $(favoriteStar).on('click', function () {
      $(this).toggleClass('text-warning');
    });
  }

  // Датапикер
  if (flatPickr) {
    $(flatPickr).flatpickr({
      dateFormat: 'Y-m-d',
      defaultDate: 'today',
      onReady: function (selectedDates, dateStr, instance) {
        if (instance.isMobile) {
          $(instance.mobileInput).attr('step', null);
        }
      }
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
      const isValid = newTaskForm.valid();
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
        // HTML Output
        if (todoTitle !== '') {
          $(todoTaskList).prepend(
            '<li class="todo-item">' +
            '<div class="todo-title-wrapper">' +
            '<div class="todo-title-area">' +
            /*feather.icons['more-vertical'].toSvg({ class: 'drag-icon' }) +*/
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
        toastr['success']('Data Saved', '💾 Task Action!', {
          closeButton: true,
          tapToDismiss: false
        });
        hideModal();
      }
    });
  }

  // Чекбокс завершения задачи
  $(todoTaskListWrapper).on('change', '.custom-checkbox', function (event) {
    const $this = $(this).find('input');
    if ($this.prop('checked')) {
      $this.closest('.todo-item').addClass('completed');
      showToast('Задача завершена', 'Поздравляем 🎉',"Сейчас", "checkbox-outline", "success");
    } else {
      $this.closest('.todo-item').removeClass('completed');
    }
  });
  $(todoTaskListWrapper).on('click', '.custom-checkbox', function (event) {
    event.stopPropagation();
  });

  // To open todo list item modal on click of item
  $(document).on('click', '.todo-task-list-wrapper .todo-item', function (e) {
    showModal();
    addBtn.addClass('d-none');
    updateBtns.removeClass('d-none');
    if ($(this).hasClass('completed')) {
      modalTitle.html(
        '<button type="button" class="btn btn-sm btn-outline-success complete-todo-item waves-effect waves-float waves-light" data-dismiss="modal">Completed</button>'
      );
    } else {
      modalTitle.html(
        '<button type="button" class="btn btn-sm btn-outline-secondary complete-todo-item waves-effect waves-float waves-light" data-dismiss="modal">Mark Complete</button>'
      );
    }
    $(taskTag).val('').trigger('change');
    const quill_editor = $('#task-desc .ql-editor'); // ? Dummy data as not connected with API or anything else
    quill_editor[0].innerHTML =
      'Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.';
    taskTitle = $(this).find('.todo-title');
    const $title = $(this).find('.todo-title').html();

    // apply all variable values to fields
    $(newTaskForm).find('.new-todo-item-title').val($title);
  });

  // Updating Data Values to Fields
  if (updateTodoItem.length) {
    updateTodoItem.on('click', function (e) {
      const isValid = newTaskForm.valid();
      e.preventDefault();
      if (isValid) {
        const $edit_title = newTaskForm.find('.new-todo-item-title').val();
        $(taskTitle).text($edit_title);

        toastr['success']('Data Saved', '💾 Task Action!', {
          closeButton: true,
          tapToDismiss: false
        });
        hideModal();
      }
    });
  }

  // Sort Ascending
  if (sortAsc.length) {
    sortAsc.on('click', function () {
      todoTaskListWrapper
        .find('li')
        .sort(function (a, b) {
          return $(b).find('.todo-title').text().toUpperCase() < $(a).find('.todo-title').text().toUpperCase() ? 1 : -1;
        })
        .appendTo(todoTaskList);
    });
  }
  // Sort Descending
  if (sortDesc.length) {
    sortDesc.on('click', function () {
      todoTaskListWrapper
        .find('li')
        .sort(function (a, b) {
          return $(b).find('.todo-title').text().toUpperCase() > $(a).find('.todo-title').text().toUpperCase() ? 1 : -1;
        })
        .appendTo(todoTaskList);
    });
  }

  // Filter task
  if (todoFilter.length) {
    todoFilter.on('keyup', function () {
      const value = $(this).val().toLowerCase();
      if (value !== '') {
        $('.todo-item').filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
        const tbl_row = $('.todo-item:visible').length; //here tbl_test is table name

        //Check if table has row or not
        if (tbl_row === 0) {
          if (!$(noResults).hasClass('show')) {
            $(noResults).addClass('show');
          }
        } else {
          $(noResults).removeClass('show');
        }
      } else {
        // If filter box is empty
        $('.todo-item').show();
        if ($(noResults).hasClass('show')) {
          $(noResults).removeClass('show');
        }
      }
    });
  }

  $(addTaskBtn).on('click', function () {
    console.log(newTaskModal);
    showModal(newTaskModal);
  });


  // Сброс значений модала
  function resetValues() {
    $(flatPickr).val('');
    $(taskDesc).val('');
    $(taskTag).val('');
    $(privateSwitch).prop('checked', false);
  }
}


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
  calendmodulehandler();
}

if (minicalendar) {
  minicalendarhandler();
}

if (todayeventswidget) {
  todayeventswidgethandler();
}

if (multimodal && multimodalbtns) {
  multimodalbtns.forEach((multimodalbtn) => {
    multimodalbtn.addEventListener('click', (evt) => {
      multimodalhandler(evt);
    });
  });
}

if (todowrapper) {
  tasksHandler()
}

datatablesHandler();

// Запуск функции при загрузке. Будет запущено все, что внутри const init = () => {}
init();
