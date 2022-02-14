/** Календарь */
import {selectedCheckboxes} from "../globalfunc"
import {cookieID} from "../globalfunc"
import {ajax_send} from "../globalfunc"
import {showMiniToast} from "../globalfunc"
import {validateForm, setValidationListeners} from "./validation"

/**
 * Настройки для модуля календаря
 * @type {{addEventTitle: string, datepickerformat: string, addEventFormSubmit: string, deleteWarningMessage: string, cancelBtn: string, privateinp: string, repeatparams: string, timezone: string, addDelEventModal: string, closeAddEventModalCrossButton: string, bddatetimeformat: string, eventMouseEnter: calendarModuleSettings.eventMouseEnter, filterInput: string, selectAll: string, eventClassNames: (function({event: *}): [string]), calEventFilter: string, daysForRepeatEvents: string[], datetimeformat: string, addEventButton: string}}
 */
const calendarModuleSettings = {
  addEventButton: ".add-event-button",
  addDelEventModal: ".add-del-event-modal",
  addEventFormSubmit: ".add-update-event-submit",
  addEventTitle: ".add-event-title",
  closeAddEventModalCrossButton: ".btn-close",
  cancelBtn: ".delete-discard-event-button",
  daysForRepeatEvents: ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'],
  deleteWarningMessage: ".delete-warning",
  calEventFilter: ".calendar-events-filter",
  filterInput: ".input-filter",
  selectAll: ".select-all",
  privateinp: "Private",
  repeatparams: ".repeat-col",
  timezone: 'Europe/Moscow',
  datetimeformat: 'YYYY-MM-DD HH:mm',
  bddatetimeformat: 'YYYY-MM-DD HH:mm',
  datepickerformat: "Y-m-d H:i",
  eventClassNames: function ({event: calendarEvent}) {
    const colorName = calendarsColor[calendarEvent._def.extendedProps.calendar];
    return [
      /** Фоновый цвет событий */
      'fc-event-' + colorName
    ];
  },
  eventMouseEnter: function (event) {
    if (event.event.display !== "background") {
      showPopover(event);
    }
  }
}

/** Цвета для Fullcalendar */
/** Цвета событий, названия менять в разметке, в js менять не надо */
const calendCat = [
  {
    color: "primary",
    name: "События",
  },
  {
    color: "success",
    name: "Отпуск",
  },
  {
    color: "info",
    name: "Дежурство",
  },
  {
    color: "warning",
    name: "Важно",
  },
  {
    color: "danger",
    name: "Праздники",
  },
  {
    color: "pink",
    name: "Категория 1",
  },
  {
    color: "blue",
    name: "Категория 2",
  },
  {
    color: "orange",
    name: "Категория 3",
  },
  {
    color: "teal",
    name: "Категория 4",
  },
  {
    color: "azure",
    name: "Категория 5",
  },
]

function araycal() {
  let array = new Map();
  for (let i = 0; i < calendCat.length; i++) {
    array.set(calendCat[i].color, calendCat[i].color);
  }
  return (Object.fromEntries(array))
}

/** Для использования в Fullcalendar */
const calendarsColor = araycal();

/**
 * Получение событий. Эта функция будет вызываться fullCalendar для получения и обновления событий.
 * @param info
 * @param successCallback ф-я коллбек для передачи
 */
function fetchEvents(info, successCallback) {
  /** Чекбокс Только мои события */
  const privateinp = document.getElementById(calendarModuleSettings.privateinp);
  const filterInput2 = document.querySelectorAll('.input-filter:not(.select-all)');
  const privCheck = privateinp ? (privateinp.checked === true ? 1 : 0) : 0;
  let data = {
    /** С не фиксированной датой не работают повторяющиеся собыия */
    startParam: moment(info.start).tz(calendarModuleSettings.timezone).format('YYYY-MM-DD'),
    endParam: moment(info.end).tz(calendarModuleSettings.timezone).format('YYYY-MM-DD'),
    calendars: filterInput2.length > 0 ? (selectedCheckboxes(filterInput2, 'selected')) : (Object.keys(calendarsColor)),
    private: privCheck
  };

  ajax_send("GET", "components/fullcalendar/events.php", data, "json", result => successCallback(result));
}

/**
 * Показать popover
 * @param event
 */
function showPopover(event) {
  const popoverClass = "popover-" + event.event.extendedProps.calendar.toLowerCase();
  const tooltip = new bootstrap.Popover(event.el, {
    template: '<div class="popover ' + popoverClass + '" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    title: event.event.title,
    content: event.event.extendedProps.description,
    placement: 'top',
  });
  tooltip.show();
}

/** Скрыть popover */
function hidePopover() {
  let tooltips = document.querySelectorAll(".popover");
  tooltips.forEach(function (tooltip) {
    document.body.removeChild(tooltip);
  });
}

/** Мини календарь на главной */

/** Контейнер для календаря */
const minicalendar = document.querySelector('.today-calendar-widget');

function minicalendarhandler(settings) {

  let calendar = new FullCalendar.Calendar(minicalendar, {
    locale: 'ru',
    timeZone: settings.timezone,
    initialView: 'dayGridMonth',
    height: 300,
    editable: false,
    selectable: true,
    businessHours: false,
    dayMaxEvents: false,
    eventClassNames: settings.eventClassNames,
    headerToolbar: {
      right: 'prev,title,next',
      left: 'today',
    },
    eventSources: [fetchEvents],
    eventMouseEnter: settings.eventMouseEnter,
    eventMouseLeave: function () {
      hidePopover();
    },
  });
  calendar.render();
  setInterval(() => {
    calendar.refetchEvents();
  }, 1000);
}

/**
 * Календарь. Модуль
 */

/**
 * Контейнер для календаря
 * @type {HTMLElement}
 */
const calendarEl = document.getElementById('calendar');

function calendmodulehandler(settings) {

  /** Модал добавления/удаления события @type {HTMLElement} */
  const addDelEventModal = document.querySelector(calendarModuleSettings.addDelEventModal);

  /** Кнопка Добавить/Сохранить событие в модале добавления/редактирования. Отправка формы @type {HTMLButtonElement} */
  const addEventFormSubmit = document.querySelector(calendarModuleSettings.addEventFormSubmit);

  /** Заголовок в модале добавления/редактирования @type {HTMLElement} */
  const addEventTitle = document.querySelector(calendarModuleSettings.addEventTitle);

  /** Кнопка Закрыть (крестик) модал добавления/редактирования @type {HTMLButtonElement} */
  const closeAddEventModalCrossButton = addDelEventModal.querySelector(calendarModuleSettings.closeAddEventModalCrossButton);

  /** Кнопка Отмена/Удалить событие в модале добавления/редактирования @type {HTMLButtonElement} */
  const cancelBtn = document.querySelector(calendarModuleSettings.cancelBtn);

  /** Предупреждение об удалении события */
  const deleteWarningMessage = document.querySelector(calendarModuleSettings.deleteWarningMessage);

  /** Форма в модале добавления/редактирования @type {HTMLFormElement} */
  const eventForm = document.forms.eventForm;

  /** Инпут ввода названия события */
  let eventTitle = eventForm.elements.eventTitle;

  /** Инпут ввода даты начала события */
  let startDate = eventForm.elements.dateStart;

  /** Инпут ввода даты окончания события */
  let endDate = eventForm.elements.dateEnd;

  /** Переключатель Вижу только я (приватное событие) */
  const privateSwitch = eventForm.elements.privateCheck;

  /** Селект категории события */
  const eventLabel = eventForm.elements.selectLabel;

  /** Переключатель Весь день */
  const allDaySwitch = eventForm.elements.allDaySwitch;

  /** Чекбокс повторяющееся событие */
  const repeatSwitch = eventForm.elements.repeatSwitch;

  /** Описание события */
  const calendarEditor = eventForm.elements.eventDescription;

  /** Фильтр событий */
  const calEventFilter = document.querySelector(calendarModuleSettings.calEventFilter);

  /** Чекбоксы в фильтре */
  const filterInput = document.querySelectorAll(calendarModuleSettings.filterInput);

  /** Чекбокс Все в фильтре */
  const selectAll = document.querySelector(calendarModuleSettings.selectAll);

  /** Чекбокс Только мои события */
  const privateinp = document.getElementById(calendarModuleSettings.privateinp);

  /**  Колонки с параметрами повторения */
  const repeatparams = document.querySelector(calendarModuleSettings.repeatparams);

  /** Переключатели повторения */
  const repparamSwitch = document.getElementById("dayrepopt");

  /** Секции с параметрами повторения по неделям, месяцам, годам*/
  const weeklysection = document.getElementById("weekly-section");
  const monthlysection = document.getElementById("monthly-section");

  /** Секция с интервалом */
  const intervalsection = document.getElementById("interval-section");

  /** Метка "день" в интервале */
  const daynumlabel1 = document.getElementById("daynum-label");

  /** Метка "Каждый" в интервале */
  const daynumlabel2 = document.getElementById("intervallabel1");

  /** поле ввода начала повторения */
  const startrepDate = document.getElementById("startrep-date");

  /** поле ввода окончания повторения */
  const endrepDate = document.getElementById("endrep-date");

  /** Все чекбоксы дней недель */
  const wdayscheck = document.querySelectorAll('.wdays-check');

  /** Радио Закончить после даты */
  const repdate = document.getElementById("Radio5");

  /** Радио Закончить после повторений */
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


  /** Событие для просмотра */
  let eventToUpdate;

  /**
   * Закрыть модел. Показывает темный оверлей
   */
  function hideModal() {
    addDelEventModal.style.display = "none";
    addDelEventModal.classList.remove('show');
    const modalBackdrop = document.querySelector(".modal-backdrop");
    if (modalBackdrop) {
      document.body.removeChild(modalBackdrop);
    }
  }

  /**
   * Показать модал. Скрывает темный оверлей
   */
  function showModal(mode) {

    /** Добавляем прослушиватель нажатия кнопки Закрыть */
    closeAddEventModalCrossButton.addEventListener('click', closeAddEvModal);

    /** Если включили повторение, то дата начала повторения берется из даты начала события */
    repeatSwitch.addEventListener('click', () =>
      repswitch(moment(startDate.value).format(settings.datetimeformat))
    );

    /** Выбор повторения для дня */
    repparamSwitch.addEventListener('change', () =>
      repparamSwitchHandler(repparamSwitch.options[repparamSwitch.selectedIndex].value)
    );

    /** Если переключают на весь день, то меняется диапазон времени на весь день, и наоборот, на текущее время, не меняя введенной даты */
    allDaySwitch.addEventListener('click', function () {
      let start;
      let end;
      if (allDaySwitch.checked === true) {
        start = moment(startDate.value).hour(0).minutes(0).format(settings.datetimeformat);
        end = moment(endDate.value).hour(23).minutes(59).format(settings.datetimeformat);
      } else {
        start = moment(startDate.value).hour(moment().hour()).minutes(moment().minutes()).format(settings.datetimeformat);
        end = moment(endDate.value).hour(moment().hour()).minutes(moment().minutes()).format(settings.datetimeformat);
      }
      startDatepicker.setDate(start, true);
      endDatepicker.setDate(end, true);
    })

    function checkStartDate() {
      startDate.value > endDate.value ? endDatepicker.setDate(startDate.value, true) : false;
    }

    function checkEndDate() {
      startDate.value > endDate.value ? startDatepicker.setDate(endDate.value, true) : false;
    }

    /** Проверка дат начала и конца, при изменении даты, меняет неправильную */
    startDate.addEventListener('change', checkStartDate);
    endDate.addEventListener('change', checkEndDate);

    /** Если в конце повторения включена дата, то блокируется ввоб кол-ва повторений и наоборот */

    function repDateCheck() {
      if (repdate.checked === true) {
        repdateinp.nextSibling.disabled = false;
        repdateinp.disabled = false;
        repcount.checked = false;
      } else {
        repdateinp.nextSibling.disabled = true;
        repdateinp.disabled = true;
        repdateinp.value = "";
        endRepeatDatepicker.setDate('', true)
      }
    }

    function repCountCheck() {
      if (repcount.checked === true) {
        repcountinp.disabled = false;
        repdate.checked = false;
      } else {
        repcountinp.disabled = true;
        repcountinp.value = "";
      }
    }

    repdate.addEventListener('click', repDateCheck)
    repcount.addEventListener('click', repCountCheck)

    /** Меняем названия кнопок и заголовка */
    switch (mode) {
      case 'add':
        addEventFormSubmit.textContent = "Добавить";
        cancelBtn.textContent = "Отмена";
        addEventTitle.textContent = "Добавить событие";
        eventForm.addEventListener('submit', addEvent);
        cancelBtn.addEventListener('click', closeAddEvModal);
        deleteWarningMessage.classList.add('d-none');
        break
      case 'update':
        addEventFormSubmit.textContent = "Обновить";
        cancelBtn.textContent = "Удалить";
        addEventTitle.textContent = "Редактировать событие";
        cancelBtn.addEventListener('click', delEvent);
        eventForm.addEventListener('submit', updateEvent);
        break
    }

    addDelEventModal.classList.add('show');
    addDelEventModal.style.display = "block";
    const modalBackdrop = document.createElement("div");
    modalBackdrop.setAttribute('class', 'modal-backdrop fade show')
    document.body.appendChild(modalBackdrop);
    setValidationListeners(eventForm, addEventFormSubmit);
    validateForm(eventForm, addEventFormSubmit);
  }

  /**
   * Отметить чекбоксы дней недели по массиву
   * @param array массив дней
   */
  function checkweekdays(array) {
    array.map((currElement) => {
      wdayscheck[currElement].checked = true;
    });
  }

  /**
   * Сформировать строку дней недели по чекбоксам
   * @returns {string} строка вида "TH, FR, SA, SU"
   */
  function getweekdaycheck() {
    let array = [];
    Array.from(wdayscheck).map((currElement, index) => {
      if (currElement.checked === true) {
        array.push(settings.daysForRepeatEvents[index])
      }
    });
    return array.join(", ");
  }

  /**
   * Выбор повторения
   * @param info
   */
  function repswitch(info) {
    if (repeatSwitch.checked === true) {
      if (info == null) {
        const date = moment().tz(settings.timezone).format(settings.datetimeformat);
        startrepDate.value = date;
        endrepDate.value = moment(date).tz(settings.timezone).add(9, 'years').format(settings.datetimeformat);
      } else {
        const date = moment(info).tz(settings.timezone).format(settings.datetimeformat);
        startrepDate.value = date;
        endrepDate.value = moment(date).tz(settings.timezone).add(9, 'years').format(settings.datetimeformat);
      }
      repeatparams.style.display = "block";
      repparamSwitch.required = true;
    } else {
      repeatparams.style.display = "none";
      startrepDate.value = '';
      endrepDate.value = '';
      repparamSwitch.value = 'none';
      repparamSwitch.required = false;
    }
  }

  /** Собрать данные для отправки на сервер по добавляемому/удаляемому событию*/
  function getEventFormData(mode) {
    let Event = new FormData();
    mode === "upd" ? Event.append("id", eventToUpdate.id) : false ;
    Event.append("operation", mode);
    Event.append("title", eventTitle.value);
    Event.append("start", moment(startDate.value).format(settings.datetimeformat));
    Event.append("end", moment(endDate.value).format(settings.datetimeformat));
    Event.append("calendar", eventLabel.value);
    Event.append("description", calendarEditor.value);
    Event.append("private", privateSwitch.checked === true ? '1' : '0');
    mode === "add" ? Event.append("user_id", cookieID) : false ; // только для создания
    Event.append("tzid", settings.timezone);
    Event.append("allDay", allDaySwitch.checked === true ? '1' : '0');
    /** Параметры повторения. Если галочка включена */
    if (repeatSwitch.checked === true) {
      Event.append("interval", daynum.value);
      if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'daily-section') {
        /** Ежедневно */
        Event.append("freq", "DAILY");
      } else if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'weekly-section') {
        /** Еженедельно */
        Event.append("freq", "WEEKLY");
        /** Получаем отмеченные чекбоксы */
        Event.append("byweekday", getweekdaycheck());
      } else if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'monthly-section') {
        /** Ежемесячно */
        Event.append("freq", "MONTHLY");
        /** Проверяем чекбоксы */
        /** Последний день */
        if (lastdmonth.checked === true) {
          Event.append("byweekday", "MO, TU, WE, TH, FR, SA, SU");
          Event.append("bysetpos", "-1");
        } else
          /** Первый день */
        if (firstdmonth.checked === true) {
          Event.append("byweekday", "MO, TU, WE, TH, FR, SA, SU");
          Event.append("bysetpos", "1");
        } else
          /** Первый рабочий день */
        if (firstworkdmonth.checked === true) {
          Event.append("byweekday", "MO, TU, WE, TH, FR");
          Event.append("bysetpos", "1");
        } else
          /** Последний рабочий день */
        if (lastworkdmonth.checked === true) {
          Event.append("byweekday", "MO, TU, WE, TH, FR");
          Event.append("bysetpos", "-1");
        }
      } else if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'yearly-section') {
        /** Ежегодно */
        Event.append("freq", "YEARLY");
      }

      /** Начало повторения */
      Event.append("dtstart", moment(startrepDate.value).format('YYYY-MM-DD HH:mm'));
      /** Диапазон повторения */
      if (repdate.checked === true) {
        Event.append("until", moment(endrepDate.value).format('YYYY-MM-DD HH:mm'));
      }
      /** Кол-во повторений */
      if (repcount.checked === true) {
        Event.append("count", repcountinp.value);
      }
    } else {
      Event.append("interval", '0');
    }
    return Event
  }

  /** Добавление нового события */
  function addEvent(evt) {
    evt.preventDefault();

    function addSucces(result, title) {
      closeAddEvModal(evt);
      if (result === "null") {
        showMiniToast('Событие ' + title + ' добавлено', "success");
      }
      calendar.refetchEvents();
    }

    if (validateForm(eventForm, addEventFormSubmit) === true) {
      ajax_send("POST", "components/fullcalendar/ajax.php", getEventFormData("add"), "json", result => addSucces(result, title));
    }

    let title = eventTitle.value;
  }

  /**
   * Обновление события
   */
  const updateEvent = (evt) => {
    evt.preventDefault();

    function updSucces(result, title) {
      closeAddEvModal(evt);
      if (result === "null") {
        showMiniToast('Событие ' + title + ' обновлено', "info");
      }
      calendar.refetchEvents();
    }

    if (validateForm(eventForm, addEventFormSubmit) === true) {
      if (eventToUpdate.extendedProps.user_id === cookieID || JSON.stringify(eventToUpdate.extendedProps.user_id) === cookieID) {
        ajax_send("POST", "components/fullcalendar/ajax.php", getEventFormData("upd"), "json", result => updSucces(result, title));
      } else {
        showMiniToast('Вы не имеете прав на правку события ' + title, "danger");
      }
    }

    let title = eventTitle.value;
  }

  /** Удалить событие */
  const delEvent = (evt) => {
    evt.preventDefault();

    /**
     * Скрыть модал. Сбросить инпуты. Показать всплывашку что удалено. Обновить события
     * @param result результат отправки запроса на сервер
     * @param title название удаляемого события
     */
    function delSucces(result, title) {
      closeAddEvModal(evt);
      if (result === "null") {
        showMiniToast('Событие ' + title + ' удалено', "danger");
      }
      calendar.refetchEvents();
    }

    let Event = new FormData();
    Event.append("operation", "del");
    Event.append("id", eventToUpdate.id);
    let title = eventToUpdate.title;

    if (eventToUpdate.extendedProps.user_id === cookieID || JSON.stringify(eventToUpdate.extendedProps.user_id) === cookieID) {
      ajax_send("POST", "components/fullcalendar/ajax.php", Event, "json", result => delSucces(result, title));
    } else {
      showMiniToast('Вы не имеете прав на удаление события ' + title, "danger");
    }

  }

  /** Закрытие модала и сброс инпутов */
  const closeAddEvModal = (evt) => {
    evt.preventDefault();
    hideModal();
    resetValues();
    eventForm.removeEventListener('submit', updateEvent);
    eventForm.removeEventListener('submit', addEvent);
    cancelBtn.removeEventListener('click', delEvent);
    cancelBtn.removeEventListener('click', closeAddEvModal);
    deleteWarningMessage.classList.add('d-none');
  }

  /**
   * Переключатель повторений
   * @param mode значение repparamSwitch.options[repparamSwitch.selectedIndex].value
   */
  function repparamSwitchHandler(mode) {
    switch (mode) {
      case 'none':
        intervalsection.style.display = "none";
        weeklysection.style.display = "none";
        monthlysection.style.display = "none";
        evdmonth.checked = false;
        break

      case 'daily-section':
        intervalsection.style.display = "block";
        weeklysection.style.display = "none";
        monthlysection.style.display = "none";
        evdmonth.checked = false;
        daynumlabel2.textContent = 'Каждый';
        daynumlabel1.textContent = 'день';
        daynum.setAttribute('max', '31');
        break

      case 'weekly-section':
        intervalsection.style.display = "block";
        weeklysection.style.display = "block";
        monthlysection.style.display = "none";

        /** Получаем текущий день недели, ставим галочку в параметрах */
        /*if (!(eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.byweekday)) {
          checkweekdays([moment(startDate.value).weekday()]);
        }*/

        evdmonth.checked = false;
        daynumlabel2.textContent = 'Каждую';
        daynumlabel1.textContent = 'неделю';
        daynum.setAttribute('max', '53');
        break

      case 'monthly-section':
        intervalsection.style.display = "block";
        weeklysection.style.display = "none";
        monthlysection.style.display = "block";

        /** Переключаем на дефолтное радио */
        evdmonth.checked = true;
        dayofmonth.value = moment(startDate.value.date());
        daynumlabel2.textContent = 'Каждый';
        daynumlabel1.textContent = 'месяц';
        daynum.setAttribute('max', '12');
        break

      case 'yearly-section':
        intervalsection.style.display = "block";
        weeklysection.style.display = "none";
        monthlysection.style.display = "none";
        evdmonth.checked = false;
        daynumlabel2.textContent = 'Каждый';
        daynumlabel1.textContent = 'год';
        daynum.setAttribute('max', '100');
        break
    }
  }

  /**
   * Получить сведения о событии
   * @param info данные по событию из fullcalendar
   */
  function getEventParams(info) {

    let event = info.event;

    /** Название события */
    eventTitle.value = event.title;
    /** Приватное событие */
    privateSwitch.checked = !(event.extendedProps.private === 0 || event.extendedProps.private === "0");
    /** Разные даты начала и конца события для создаваемых событий при нажатии на кнопку создания и на день */
    const date = moment(info.date).format(settings.datetimeformat);
    startDatepicker.setDate(date, true, settings.datetimeformat)
    endDatepicker.setDate(date, true, settings.datetimeformat)

    /**
     * Чекбоксы повторения для месяца
     * @param num
     * @param array
     */
    function getCheckboxesForMonth(num, array) {
      switch (num) {
        case 'null':
          evdmonth.checked = true;
          dayofmonth.value = event._def.recurringDef.typeData.rruleSet._rrule[0].options.bymonthday[0];
          break
        case '1':
          break
        case '-1':
          if (array === '[0,1,2,3,4]') {
            lastworkdmonth.checked = true;
          } else if (array === '[0,1,2,3,4]') {
            firstworkdmonth.checked = true;
          } else if (array === '[0,1,2,3,4,5,6]') {
            firstdmonth.checked = true;
          } else if (array === '[0,1,2,3,4,5,6]') {
            lastdmonth.checked = true;
          }
          break
      }
    }

    /**
     * Получить повторения из события, открыть нужные вкладки
     * @param num
     */
    function getRepeatsEvent(num) {
      switch (num) {
        case 3:
          repparamSwitch.value = 'daily-section';
          weeklysection.style.display = "none";
          monthlysection.style.display = "none";
          intervalsection.style.display = "block";
          daynumlabel2.innerHTML = 'Каждый';
          daynumlabel1.innerHTML = 'день';
          daynum.setAttribute('max', '31');
          break
        case 2:
          repparamSwitch.value = 'weekly-section';
          weeklysection.style.display = "block";
          monthlysection.style.display = "none";
          intervalsection.style.display = "block";
          daynumlabel2.innerHTML = 'Каждую';
          daynumlabel1.innerHTML = 'неделю';
          daynum.setAttribute('max', '53');
          break
        case 1:
          repparamSwitch.value = 'monthly-section';
          monthlysection.style.display = "block";
          weeklysection.style.display = "none";
          intervalsection.style.display = "block";
          daynumlabel2.innerHTML = 'Каждый';
          daynumlabel1.innerHTML = 'месяц';
          daynum.setAttribute('max', '12');

          /** Чекбоксы повторения для месяца */
          getCheckboxesForMonth(event._def.recurringDef.typeData.rruleSet._rrule[0].options.bysetpos, JSON.stringify(event._def.recurringDef.typeData.rruleSet._rrule[0].options.byweekday));

          break
        case 0:
          repparamSwitch.value = 'yearly-section';
          weeklysection.style.display = "none";
          monthlysection.style.display = "none";
          intervalsection.style.display = "block";
          daynumlabel2.innerHTML = 'Каждый';
          daynumlabel1.innerHTML = 'год';
          daynum.setAttribute('max', '100');
          break
        case null:
          repparamSwitch.value = '';
          break
      }
    }

    /** Повторять до даты */
    if (event._def.recurringDef !== null) {
      deleteWarningMessage.classList.remove('d-none');
      getRepeatsEvent(event._def.recurringDef.typeData.rruleSet._rrule[0].options.freq);

      if (event._def.recurringDef.typeData.rruleSet._rrule[0].options.freq === 2) {
        /** Чекбоксы дней недель */
        checkweekdays(event._def.recurringDef.typeData.rruleSet._rrule[0].options.byweekday);
      }

      /** Для еженедельного */
      repeatSwitch.checked = true;
      repeatparams.style.display = "block";
      repparamSwitch.required = true;
      startrepDate.value = moment(event._def.recurringDef.typeData.rruleSet._rrule[0].options.dtstart).utc().format(settings.datetimeformat);
      if (event._def.recurringDef.typeData.rruleSet._rrule[0].options.until) {
        endrepDate.value = moment(event._def.recurringDef.typeData.rruleSet._rrule[0].options.until).utc().format(settings.datetimeformat);
        repdate.checked = true;
        endrepDate.checked = false;
      } else {
        endrepDate.value = "";
        repdate.checked = false;
        endrepDate.checked = true;
      }
      /** Кол-во повторений */
      if (event._def.recurringDef.typeData.rruleSet._rrule[0].options.count) {
        repcountinp.value = event._def.recurringDef.typeData.rruleSet._rrule[0].options.count;
        repcount.checked = true;
      } else {
        repcountinp.value = "";
        repcount.checked = false;
      }
    } else {
      repeatSwitch.checked = false;
      deleteWarningMessage.classList.add('d-none');
    }

    startDatepicker.setDate(event.start, true, settings.datetimeformat);
    event.allDay === true ? allDaySwitch.checked = true : allDaySwitch.checked = false;
    event.end !== null
      ? endDatepicker.setDate(event.end, true, settings.datetimeformat)
      : endDatepicker.setDate(event.start, true, settings.datetimeformat);
    $(addDelEventModal).find(eventLabel).val(event.extendedProps.calendar).trigger('change');
    $(addDelEventModal).find(calendarEditor).val(event.extendedProps.description);
  }

  /**
   * Нажатие на событие в календаре
   * @param info нажатое событие
   */
  function eventClick(info) {
    /** Запретить редактирование событий без id и фоновых */
    if (info.event.id !== "" && info.event.display !== "background") {

      eventToUpdate = info.event;

      /** Проверить права пользователя и его ID, включаем возможность редактирования */
      if (eventToUpdate.extendedProps.user_id === cookieID || JSON.stringify(eventToUpdate.extendedProps.user_id) === cookieID) {
        /** Добавляем прослушку кликов по кнопкам Добавить и Обновить */
        addEventFormSubmit.disabled = false;
        cancelBtn.disabled = false;
      } else {
        addEventFormSubmit.disabled = true;
        cancelBtn.disabled = true;
      }
      getEventParams(info);
      showModal('update');
    }
  }

  /**
   * Селект для меток в модале
   */
  function renderCheckboxes() {
    const parent = document.getElementById('calEventFilter');
    parent.textContent = '';

    const header = `<p class="group-title mb-2">Календарь:</p>`;

    const selAll = `<div class="form-check d-flex align-items-center mb-3">
                  <input class="form-check-input input-filter bg-dark select-all me-1" type="checkbox" id="select-all"
                         name="select-all" checked>
                  <label class="form-check-label" for="select-all">Все</label>
                </div>`;

    parent.insertAdjacentHTML('beforeend', header);
    parent.insertAdjacentHTML('beforeend', selAll);

    const createItem = ({color, name}) =>
      `<div class="form-check d-flex align-items-center mb-2">
                  <input class="form-check-input input-filter bg-${color} me-1" type="checkbox" id="${color}" name="${color}"
                         data-value="${color}" value="${color}" checked>
                  <label class="form-check-label" for="${color}">${name}</label>
                </div>`;

    const ElementsString = calendCat.map((color) => createItem(color)).join('');
    parent.insertAdjacentHTML('beforeend', ElementsString);
  }

  renderCheckboxes();

  /**
   * Селект для меток в модале
   * @param option
   * @returns {string|*}
   */
  function renderBullets(option) {
    if (!option.id) {
      return option.text;
    }
    return "<span class='bullet bg-" +
      $(option.element).data('label') +
      " bullet-sm me-2 ms-2'> " +
      '</span>' +
      option.text;
  }

  /**
   * Селект для меток в модале
   */
  function renderOptions() {
    eventLabel.textContent = '';
    const placeholderItem = `<option></option>`;
    eventLabel.insertAdjacentHTML('beforeend', placeholderItem);
    const createItem = ({color, name}) =>
      `<option data-label="${color}" value="${color}">${name}</option>`;
    const ElementsString = calendCat.map((color) => createItem(color)).join('');
    eventLabel.insertAdjacentHTML('beforeend', ElementsString);
  }

  renderOptions();

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

  /**
   * Датапикер начало события
   * @type {jQuery|Instance|Instance[]|*}
   */
  const startDatepicker = startDate.flatpickr({
    locale: "ru",
    enableTime: true,
    altInput: true,
    altFormat: "d.m.Y H:i",
    defaultDate: "today",
    dateFormat: settings.datepickerformat,
    onReady: function (selectedDates, dateStr, instance) {
      let startDateSelected = selectedDates;
    }
  });

  /**
   * Датапикер конец события
   * @type {jQuery|Instance|Instance[]|*}
   */
  const endDatepicker = endDate.flatpickr({
    locale: "ru",
    enableTime: true,
    altInput: true,
    altFormat: "d.m.Y H:i",
    defaultDate: "today",
    dateFormat: settings.datepickerformat,
    onReady: function (selectedDates, dateStr, instance) {
      let startDateSelected = selectedDates;
    }
  });

  /**
   * Датапикер начало повторения
   * @type {Instance}
   */
  const startRepeatDatepicker = startrepDate.flatpickr({
    locale: "ru",
    enableTime: true,
    altInput: true,
    altFormat: "d.m.Y H:i",
    defaultDate: "today",
    dateFormat: settings.datepickerformat,
  });

  /**
   * Датапикер конца повторения
   * @type {Instance}
   */
  const endRepeatDatepicker = endrepDate.flatpickr({
    locale: "ru",
    enableTime: true,
    altInput: true,
    altFormat: "d.m.Y H:i",
    defaultDate: "today",
    dateFormat: settings.datepickerformat,
  });

  const calendar = new FullCalendar.Calendar(calendarEl, {
    themeSystem: 'standard',
    locale: 'ru',
    timeZone: settings.timezone,
    initialView: 'dayGridMonth',
    editable: true,
    dragScroll: false,
    eventResizableFromStart: false,
    selectable: true,
    selectMirror: true,
    businessHours: false,
    handleWindowResize: true,
    nowIndicator: true,
    dayMaxEvents: true, /** добавляет ссылку "еще", когда очень много событий */
    navLinks: true, /** можно нажимть на названия дней/недель для переключения между видами */
    eventClassNames: settings.eventClassNames,
    eventSources: [fetchEvents],
    customButtons: {
      addEvBtn: {
        text: '+ Добавить событие',
        click: function () {
          neweventmodal(null);
        }
      }
    },
    headerToolbar: {
      left: 'addEvBtn',
      right: 'dayGridMonth,timeGridWeek,timeGridDay today prev,title,next'
    },
    eventMouseEnter: settings.eventMouseEnter,
    eventMouseLeave: hidePopover,
    dateClick: function (info) {
      neweventmodal(info);
    },
    eventClick: function (info) {
      eventClick(info);
    }
  });

  /** Рендеринг календаря */
  calendar.render();

  setInterval(() => {
    calendar.refetchEvents();
  }, 1000);



  function neweventmodal(info) {
    /** Разные даты начала и конца события для создаваемых событий при нажатии на кнопку создания и на день */
    let date;
    if (!info) {
      startDatepicker.setDate(moment().hour(0).minutes(0).format(settings.datetimeformat), true);
      endDatepicker.setDate(moment().hour(0).minutes(0).format(settings.datetimeformat), true);
    } else {
      date = moment(info.date).format(settings.datetimeformat);
      startDatepicker.setDate(moment(date).hour(0).minutes(0).format(settings.datetimeformat), true);
      endDatepicker.setDate(moment(date).hour(0).minutes(0).format(settings.datetimeformat), true);
      startDate.value = date;
      endDate.value = date;
    }
    /** */
    $('[name=dateStart]').next('input').attr("name","dateStart");
    $('[name=dateEnd]').next('input').attr("name","dateEnd");
    showModal('add');
  }

  /** Сброс значений модала */
  function resetValues() {
    eventForm.reset();
    repeatparams.style.display = "none";
    $(addDelEventModal).find(eventLabel).val('').trigger('change');
    /** Скрыть параметры повторения */
    intervalsection.style.display = "none";
    weeklysection.style.display = "none";
    monthlysection.style.display = "none";
  }

  /** Когда модал закрыт, сбросить значения */
  addDelEventModal.addEventListener('hidden.bs.modal', resetValues);

  // Выбрать все и другие фильтры
  if (document.querySelector(".select-all")) {
    // Фильтр событий
    const calEventFilter = document.querySelector(".calendar-events-filter");
    // Чекбокс Все в фильтре
    const selectAll = document.querySelector(".select-all");

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
    const filterInput2 = document.querySelectorAll('.input-filter:not(.select-all)');
    filterInput2.forEach((filterInput) => {
      filterInput.addEventListener('click', () => {
        ('.input-filter:checked').length < $(calEventFilter).find('input').length
          ? $(selectAll).prop('checked', false)
          : $(selectAll).prop('checked', true);
        calendar.refetchEvents();
      });
    });
  }

  // Фильтр Только мои
  if ($(privateinp)) {
    $(privateinp).on('change', function () {
      calendar.refetchEvents();
    });
  }

}

/** Ждем полной загрузки дерева */
document.addEventListener("DOMContentLoaded", () => {
  /** Отрисовка модуля календаря */
  if (calendarEl) {
    calendmodulehandler(calendarModuleSettings);
  }

  /** Отрисовка виджета календаря */
  if (minicalendar) {
    minicalendarhandler(calendarModuleSettings);
  }
});
