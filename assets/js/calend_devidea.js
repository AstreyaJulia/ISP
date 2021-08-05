'use strict';

// Контейнер для календаря. Класс .calendar
const calendarmodule = document.querySelector('.calendar');

// Кнопка добавления события
const btn = document.getElementById("myBtn");

// Модал добавления события
const modal = document.getElementById("addEventsModal");

// Кнопка "Добавить событие" в модале добавления события. Сохраняет событие
const addEvent = document.getElementById("add-e");

// Кпока "Сохранить" событие на модале
const editEvent = document.getElementById("edit-event");

// Кнопка Отмена на модале
const discardModal = document.querySelectorAll("[data-dismiss='modal']")[0];

// Заголовок модала Добавить событие
const addEventTitle = document.getElementsByClassName("add-event-title")[0];

// Заголовок модала Редактировать событие
const editEventTitle = document.getElementsByClassName("edit-event-title")[0];

// Элемент, закрывающий модал
const span = document.getElementsByClassName("btn-close")[0];

// Все <input> элементы в модале
const input = document.querySelectorAll('input[type="text"]');
const radioInput = document.querySelectorAll('input[type="radio"]');

// Все <textarea> элементы внутри модала
const textarea = document.getElementsByTagName('textarea');

// Создает Overlay элемент
function createBackdropElement () {
  const btn = document.createElement("div");
  btn.setAttribute('class', 'modal-backdrop fade show')
  document.body.appendChild(btn);
}

// Сброс радио кнопок

function clearRadioGroup(GroupName) {
  const ele = document.getElementsByName(GroupName);
  for(let i=0; i<ele.length; i++)
    ele[i].checked = false;
}

// Сброс данных в модале, когда модал закрывают
function modalResetData() {
  modal.style.display = "none";
  for (let i = 0; i < input.length; i++) {
    input[i].value = '';
  }
  for (let j = 0; j < textarea.length; j++) {
    textarea[j].value = '';
  }
  clearRadioGroup("marker");
  // Get Modal Backdrop
  const getModalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
  document.body.removeChild(getModalBackdrop)
}

// Когда пользователь нажимает на кнопку, открыть модал
btn.onclick = function() {
  modal.style.display = "block";
  addEvent.style.display = 'block';
  editEvent.style.display = 'none';
  addEventTitle.style.display = 'block';
  editEventTitle.style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  createBackdropElement();
  enableDatePicker();
}

// Очищение данных и закрытие модала, когда пользователь жмет кнопку отмены
discardModal.onclick = function() {
  modalResetData();
  document.getElementsByTagName('body')[0].removeAttribute('style');
}

// Очищение данных и закрытие модала, когда пользователь жмет на кнопку закрытия модала (крестик)
span.onclick = function() {
  modalResetData();
  document.getElementsByTagName('body')[0].removeAttribute('style');
}

// Очищение данных и закрытие модала, когда пользователь жмет где-то вне модала.
window.onclick = function(event) {
  if (event.target === modal) {
    modalResetData();
    document.getElementsByTagName('body')[0].removeAttribute('style');
  }
}

const newDate = new Date()
const monthArray = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ]

function getDynamicMonth( monthOrder ) {
  const getNumericMonth = parseInt(monthArray[newDate.getMonth()]);
  const getNumericMonthInc = parseInt(monthArray[newDate.getMonth()]) + 1;
  const getNumericMonthDec = parseInt(monthArray[newDate.getMonth()]) - 1;

  if (monthOrder === 'default') {

    if (getNumericMonth < 10 ) {
      return '0' + getNumericMonth;
    } else if (getNumericMonth >= 10) {
      return getNumericMonth;
    }

  } else if (monthOrder === 'inc') {

    if (getNumericMonthInc < 10 ) {
      return '0' + getNumericMonthInc;
    } else if (getNumericMonthInc >= 10) {
      return getNumericMonthInc;
    }

  } else if (monthOrder === 'dec') {

    if (getNumericMonthDec < 10 ) {
      return '0' + getNumericMonthDec;
    } else if (getNumericMonthDec >= 10) {
      return getNumericMonthDec;
    }
  }
}


let calendar = new FullCalendar.Calendar(calendarmodule, {
  locale: 'ru',
  timeZone: 'GMT+3',
  initialView: 'dayGridMonth',
  editable: true,
  selectable: true,
  businessHours: false,
  handleWindowResize: true,
  nowIndicator: true,
  dayMaxEvents: true, // allow "more" link when too many events
  headerToolbar: {
    left: 'title',
    center: '',
    right: 'prev,next,today dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  },
  events: [
    {
      id: 'event-1',
      title: 'All Day Event',
      start: newDate.getFullYear() + '-'+ getDynamicMonth('default') +'-01T14:30:00',
      end: newDate.getFullYear() + '-'+ getDynamicMonth('default') +'-02T14:30:00',
      className: "bg-danger",
      description: 'Aenean fermentum quam vel sapien rutrum cursus. Vestibulum imperdiet finibus odio, nec tincidunt felis facilisis eu. '
    },
    {
      id: 'event-2',
      title: 'Long Event',
      start: newDate.getFullYear() + '-'+ getDynamicMonth('default') +'-07T19:30:00',
      end: newDate.getFullYear() + '-'+ getDynamicMonth('default') +'-09T14:30:00',
      className: "bg-primary",
      description: 'Etiam a odio eget enim aliquet laoreet. Vivamus auctor nunc ultrices varius lobortis.'
    },
    {
      id: 'event-3',
      title: 'Conference',
      start: newDate.getFullYear() + '-'+ getDynamicMonth('default') +'-17T14:30:00',
      end: newDate.getFullYear() + '-'+ getDynamicMonth('default') +'-18T14:30:00',
      className: "bg-warning",
      description: 'Proin et consectetur nibh. Mauris et mollis purus. Ut nec tincidunt lacus. Nam at rutrum justo, vitae egestas dolor. '
    },
    {
      id: 'event-4',
      title: 'Meeting',
      start: newDate.getFullYear() + '-'+ getDynamicMonth('default') +'-12T10:30:00',
      end: newDate.getFullYear() + '-'+ getDynamicMonth('default') +'-13T10:30:00',
      className: "bg-danger",
      description: 'Mauris ut mauris aliquam, fringilla sapien et, dignissim nisl. Pellentesque ornare velit non mollis fringilla.'
    },
    {
      id: 'event-5',
      title: 'Lunch',
      start: newDate.getFullYear() + '-'+ getDynamicMonth('default') +'-12T15:00:00',
      end: newDate.getFullYear() + '-'+ getDynamicMonth('default') +'-13T15:00:00',
      className: "bg-warning",
      description: 'Integer fermentum bibendum elit in egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    },
    {
      id: 'event-6',
      title: 'Meeting',
      start: newDate.getFullYear() + '-'+ getDynamicMonth('default') +'-12T21:30:00',
      end: newDate.getFullYear() + '-'+ getDynamicMonth('default') +'-13T21:30:00',
      className: "bg-success",
      description: 'Curabitur facilisis vel elit sed dapibus. Nunc sagittis ex nec ante facilisis, sed sodales purus rhoncus. Donec est sapien, porttitor et feugiat sed, eleifend quis sapien. Sed sit amet maximus dolor.'
    },
    {
      id: 'event-7',
      title: 'Happy Hour',
      start: newDate.getFullYear() + '-'+ getDynamicMonth('default') +'-12T05:30:00',
      end: newDate.getFullYear() + '-'+ getDynamicMonth('default') +'-13T05:30:00',
      className: "bg-warning",
      description: 'Morbi odio lectus, porttitor molestie scelerisque blandit, hendrerit sed ex. Aenean malesuada iaculis erat, vitae blandit nisl accumsan ut.'
    },
    {
      id: 'event-8',
      title: 'Dinner',
      start: newDate.getFullYear() + '-'+ getDynamicMonth('default') +'-12T20:00:00',
      end: newDate.getFullYear() + '-'+ getDynamicMonth('default') +'-13T20:00:00',
      className: "bg-danger",
      description: 'Sed purus urna, aliquam et pharetra ut, efficitur id mi. Pellentesque ut convallis velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 'event-9',
      title: 'Click for Designreset',
      url: 'http://designreset.com/',
      start: newDate.getFullYear() + '-'+ getDynamicMonth('default') +'-27T20:00:00',
      end: newDate.getFullYear() + '-'+ getDynamicMonth('default') +'-28T20:00:00',
      className: "bg-success",
      description: 'Sed purus urna, aliquam et pharetra ut, efficitur id mi. Pellentesque ut convallis velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 'event-10',
      title: 'new event',
      start: newDate.getFullYear() + '-'+ getDynamicMonth('default') +'-24T08:12:14',
      end: newDate.getFullYear() + '-'+ getDynamicMonth('default') +'-27T22:20:20',
      className: "bg-danger",
      description: 'Sed purus urna, aliquam et pharetra ut, efficitur id mi. Pellentesque ut convallis velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 'event-12',
      title: 'Other new',
      start: newDate.getFullYear() + '-'+ getDynamicMonth('dec') +'-13T08:12:14',
      end: newDate.getFullYear() + '-' + getDynamicMonth('dec') +'-16T22:20:20',
      className: "bg-primary",
      description: 'Pellentesque ut convallis velit. Sed purus urna, aliquam et pharetra ut, efficitur id mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 'event-13',
      title: 'Upcoming Event',
      start: newDate.getFullYear() + '-'+ getDynamicMonth('inc') +'-15T08:12:14',
      end: newDate.getFullYear() + '-'+ getDynamicMonth('inc') +'-18T22:20:20',
      className: "bg-primary",
      description: 'Pellentesque ut convallis velit. Sed purus urna, aliquam et pharetra ut, efficitur id mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }

  ],
  eventMouseEnter: function(event, jsEvent, view) {
    $(this).attr('id', event.id);

    $('#'+event.id).bootstrap.Popover({
      template: '<div class="popover popover-primary" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      title: event.title,
      content: event.description,
      placement: 'top',
    });

    $('#'+event.id).bootstrap.Popover('show');
  },
  eventMouseLeave: function(event, jsEvent, view) {
    $('#'+event.id).bootstrap.Popover('hide');
  },
  eventClick: function(info) {
    addEvent.style.display = 'none';
    editEvent.style.display = 'block';
    addEventTitle.style.display = 'none';
    editEventTitle.style.display = 'block';
    modal.style.display = "block";
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    createBackdropElement();

    // Calendar Event Featch
    const eventTitle = info.title;
    const eventDescription = info.description;

    // Task Modal Input
    const taskTitle = $('#write-e');
    const taskTitleValue = taskTitle.val(eventTitle);

    const taskDescription = $('#taskdescription');
    const taskDescriptionValue = taskDescription.val(eventDescription);

    const taskInputStarttDate = $("#start-date");
    const taskInputStarttDateValue = taskInputStarttDate.val(info.start.format("YYYY-MM-DD HH:mm:ss"));

    const taskInputEndDate = $("#end-date");
    const taskInputEndtDateValue = taskInputEndDate.val(info.end.format("YYYY-MM-DD HH:mm:ss"));

    const startDate = flatpickr(document.getElementById('start-date'), {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      defaultDate: info.start.format("YYYY-MM-DD HH:mm:ss"),
    });

    const abv = startDate.config.onChange.push(function (selectedDates, dateStr, instance) {
      const endtDate = flatpickr(document.getElementById('end-date'), {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: dateStr
      });
    });

    const endtDate = flatpickr(document.getElementById('end-date'), {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      defaultDate: info.end.format("YYYY-MM-DD HH:mm:ss"),
      minDate: info.start.format("YYYY-MM-DD HH:mm:ss")
    });

    $('#edit-event').off('click').on('click', function(event) {
      event.preventDefault();
      /* Act on the event */
      const radioValue = $("input[name='marker']:checked").val();

      const taskStartTimeValue = document.getElementById("start-date").value;
      const taskEndTimeValue = document.getElementById("end-date").value;

      info.title = taskTitle.val();
      info.description = taskDescription.val();
      info.start = taskStartTimeValue;
      info.end = taskEndTimeValue;
      info.className = radioValue;

      $('#calendar').calendar.refetchEvents('updateEvent', info);
      modal.style.display = "none";
      modalResetData();
      document.getElementsByTagName('body')[0].removeAttribute('style');
    });
  },

});

function enableDatePicker() {
  const startDate = flatpickr(document.getElementById('start-date'), {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    minDate: new Date()
  });

  const abv = startDate.config.onChange.push(function (selectedDates, dateStr, instance) {

    const endtDate = flatpickr(document.getElementById('end-date'), {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      minDate: dateStr
    });
  });

  const endtDate = flatpickr(document.getElementById('end-date'), {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    minDate: new Date()
  });
}


function randomString(length, chars) {
  let result = '';
  for (let i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
  return result;
}
$("#add-e").off('click').on('click', function(event) {
  const radioValue = $("input[name='marker']:checked").val();
  const randomAlphaNumeric = randomString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
  const inputValue = $("#write-e").val();
  const inputStarttDate = document.getElementById("start-date").value;
  const inputEndDate = document.getElementById("end-date").value;

  const arrayStartDate = inputStarttDate.split(' ');

  const arrayEndDate = inputEndDate.split(' ');

  const startDate = arrayStartDate[0];
  const startTime = arrayStartDate[1];

  const endDate = arrayEndDate[0];
  const endTime = arrayEndDate[1];

  const concatenateStartDateTime = startDate + 'T' + startTime + ':00';
  const concatenateEndDateTime = endDate + 'T' + endTime + ':00';

  const inputDescription = document.getElementById("taskdescription").value;
  const myCalendar = $('#calendar');
  myCalendar.fullCalendar();
  const myEvent = {
    timeZone: 'UTC',
    allDay: false,
    id: randomAlphaNumeric,
    title: inputValue,
    start: concatenateStartDateTime,
    end: concatenateEndDateTime,
    className: radioValue,
    description: inputDescription
  };
  myCalendar.fullCalendar( 'renderEvent', myEvent, true );
  modal.style.display = "none";
  modalResetData();
  document.getElementsByTagName('body')[0].removeAttribute('style');
});


// Setting dynamic style ( padding ) of the highlited ( current ) date

function setCurrentDateHighlightStyle() {
  let getCurrentDate = $('.fc-content-skeleton .fc-today').attr('data-date');
  if (getCurrentDate === undefined) {
    return;
  }
  let splitDate = getCurrentDate.split('-');
  if (splitDate[2] < 10) {
    $('.fc-content-skeleton .fc-today .fc-day-number').css('padding', '3px 8px');
  } else if (splitDate[2] >= 10) {
    $('.fc-content-skeleton .fc-today .fc-day-number').css('padding', '3px 4px');
  }
}
setCurrentDateHighlightStyle();

const initcalendar = () => {
  document.addEventListener('DOMContentLoaded', () => {
    calendar.render();
  });
}
initcalendar();

/**/
/**
 * App Calendar
 */

/**
 * ! If both start and end dates are same Full calendar will nullify the end date value.
 * ! Full calendar will end the event on a day before at 12:00:00AM thus, event won't extend to the end date.
 **/

'use-strict';

// RTL Support
var direction = 'ltr',
  assetPath = '../../../app-assets/';
if ($('html').data('textdirection') == 'rtl') {
  direction = 'rtl';
}

if ($('body').attr('data-framework') === 'laravel') {
  assetPath = $('body').attr('data-asset-path');
}

$(document).on('click', '.fc-sidebarToggle-button', function (e) {
  $('.app-calendar-sidebar, .body-content-overlay').addClass('show');
});

$(document).on('click', '.body-content-overlay', function (e) {
  $('.app-calendar-sidebar, .body-content-overlay').removeClass('show');
});

document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar'),
    eventToUpdate,
    sidebar = $('.event-sidebar'),
    calendarsColor = {
      Business: 'primary',
      Holiday: 'success',
      Personal: 'danger',
      Family: 'warning',
      ETC: 'info'
    },
    eventForm = $('.event-form'),
    addEventBtn = $('.add-event-btn'),
    cancelBtn = $('.btn-cancel'),
    updateEventBtn = $('.update-event-btn'),
    toggleSidebarBtn = $('.btn-toggle-sidebar'),
    eventTitle = $('#title'),
    eventLabel = $('#select-label'),
    startDate = $('#start-date'),
    endDate = $('#end-date'),
    eventUrl = $('#event-url'),
    eventGuests = $('#event-guests'),
    eventLocation = $('#event-location'),
    allDaySwitch = $('.allDay-switch'),
    selectAll = $('.select-all'),
    calEventFilter = $('.calendar-events-filter'),
    filterInput = $('.input-filter'),
    btnDeleteEvent = $('.btn-delete-event'),
    calendarEditor = $('#event-description-editor');

  // --------------------------------------------
  // On add new item, clear sidebar-right field fields
  // --------------------------------------------
  $('.add-event button').on('click', function (e) {
    $('.event-sidebar').addClass('show');
    $('.sidebar-left').removeClass('show');
    $('.app-calendar .body-content-overlay').addClass('show');
  });

  // Label  select
  if (eventLabel.length) {
    function renderBullets(option) {
      if (!option.id) {
        return option.text;
      }
      var $bullet =
        "<span class='bullet bullet-" +
        $(option.element).data('label') +
        " bullet-sm mr-50'> " +
        '</span>' +
        option.text;

      return $bullet;
    }
    eventLabel.wrap('<div class="position-relative"></div>').select2({
      placeholder: 'Select value',
      dropdownParent: eventLabel.parent(),
      templateResult: renderBullets,
      templateSelection: renderBullets,
      minimumResultsForSearch: -1,
      escapeMarkup: function (es) {
        return es;
      }
    });
  }

  // Guests select
  if (eventGuests.length) {
    function renderGuestAvatar(option) {
      if (!option.id) {
        return option.text;
      }

      var $avatar =
        "<div class='d-flex flex-wrap align-items-center'>" +
        "<div class='avatar avatar-sm my-0 mr-50'>" +
        "<span class='avatar-content'>" +
        "<img src='" +
        assetPath +
        'images/avatars/' +
        $(option.element).data('avatar') +
        "' alt='avatar' />" +
        '</span>' +
        '</div>' +
        option.text +
        '</div>';

      return $avatar;
    }
    eventGuests.wrap('<div class="position-relative"></div>').select2({
      placeholder: 'Select value',
      dropdownParent: eventGuests.parent(),
      closeOnSelect: false,
      templateResult: renderGuestAvatar,
      templateSelection: renderGuestAvatar,
      escapeMarkup: function (es) {
        return es;
      }
    });
  }

  // Start date picker
  if (startDate.length) {
    var start = startDate.flatpickr({
      enableTime: true,
      altFormat: 'Y-m-dTH:i:S',
      onReady: function (selectedDates, dateStr, instance) {
        if (instance.isMobile) {
          $(instance.mobileInput).attr('step', null);
        }
      }
    });
  }

  // End date picker
  if (endDate.length) {
    var end = endDate.flatpickr({
      enableTime: true,
      altFormat: 'Y-m-dTH:i:S',
      onReady: function (selectedDates, dateStr, instance) {
        if (instance.isMobile) {
          $(instance.mobileInput).attr('step', null);
        }
      }
    });
  }

  // Event click function
  function eventClick(info) {
    eventToUpdate = info.event;
    if (eventToUpdate.url) {
      info.jsEvent.preventDefault();
      window.open(eventToUpdate.url, '_blank');
    }

    sidebar.modal('show');
    addEventBtn.addClass('d-none');
    cancelBtn.addClass('d-none');
    updateEventBtn.removeClass('d-none');
    btnDeleteEvent.removeClass('d-none');

    eventTitle.val(eventToUpdate.title);
    start.setDate(eventToUpdate.start, true, 'Y-m-d');
    eventToUpdate.allDay === true ? allDaySwitch.prop('checked', true) : allDaySwitch.prop('checked', false);
    eventToUpdate.end !== null
      ? end.setDate(eventToUpdate.end, true, 'Y-m-d')
      : end.setDate(eventToUpdate.start, true, 'Y-m-d');
    sidebar.find(eventLabel).val(eventToUpdate.extendedProps.calendar).trigger('change');
    eventToUpdate.extendedProps.location !== undefined ? eventLocation.val(eventToUpdate.extendedProps.location) : null;
    eventToUpdate.extendedProps.guests !== undefined
      ? eventGuests.val(eventToUpdate.extendedProps.guests).trigger('change')
      : null;
    eventToUpdate.extendedProps.guests !== undefined
      ? calendarEditor.val(eventToUpdate.extendedProps.description)
      : null;

    //  Delete Event
    btnDeleteEvent.on('click', function () {
      eventToUpdate.remove();
      // removeEvent(eventToUpdate.id);
      sidebar.modal('hide');
      $('.event-sidebar').removeClass('show');
      $('.app-calendar .body-content-overlay').removeClass('show');
    });
  }

  // Modify sidebar toggler
  function modifyToggler() {
    $('.fc-sidebarToggle-button')
      .empty()
      .append(feather.icons['menu'].toSvg({ class: 'ficon' }));
  }

  // Selected Checkboxes
  function selectedCalendars() {
    var selected = [];
    $('.calendar-events-filter input:checked').each(function () {
      selected.push($(this).attr('data-value'));
    });
    return selected;
  }

  // --------------------------------------------------------------------------------------------------
  // AXIOS: fetchEvents
  // * This will be called by fullCalendar to fetch events. Also this can be used to refetch events.
  // --------------------------------------------------------------------------------------------------
  function fetchEvents(info, successCallback) {
    // Fetch Events from API endpoint reference
    /* $.ajax(
      {
        type: 'GET',
        success: function (result) {
          // Get requested calendars as Array
          var calendars = selectedCalendars();

          return [result.events.filter(event => calendars.includes(event.extendedProps.calendar))];
        },
        error: function (error) {
          console.log(error);
        }
      }
    ); */

    var calendars = selectedCalendars();
    // You should make an API call, look into above commented API call for reference
    selectedEvents = events.filter(function (event) {
      // console.log(event.extendedProps.calendar.toLowerCase());
      return calendars.includes(event.extendedProps.calendar.toLowerCase());
    });
    // if (selectedEvents.length > 0) {
    successCallback(selectedEvents);
    // }
  }

  // Calendar plugins
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: fetchEvents,
    editable: true,
    dragScroll: true,
    dayMaxEvents: 2,
    eventResizableFromStart: true,
    customButtons: {
      sidebarToggle: {
        text: 'Sidebar'
      }
    },
    headerToolbar: {
      start: 'sidebarToggle, prev,next, title',
      end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    direction: direction,
    initialDate: new Date(),
    navLinks: true, // can click day/week names to navigate views
    eventClassNames: function ({ event: calendarEvent }) {
      const colorName = calendarsColor[calendarEvent._def.extendedProps.calendar];

      return [
        // Background Color
        'bg-light-' + colorName
      ];
    },
    dateClick: function (info) {
      var date = moment(info.date).format('YYYY-MM-DD');
      resetValues();
      sidebar.modal('show');
      addEventBtn.removeClass('d-none');
      updateEventBtn.addClass('d-none');
      btnDeleteEvent.addClass('d-none');
      startDate.val(date);
      endDate.val(date);
    },
    eventClick: function (info) {
      eventClick(info);
    },
    datesSet: function () {
      modifyToggler();
    },
    viewDidMount: function () {
      modifyToggler();
    }
  });

  // Render calendar
  calendar.render();
  // Modify sidebar toggler
  modifyToggler();
  // updateEventClass();

  // Validate add new and update form
  if (eventForm.length) {
    eventForm.validate({
      submitHandler: function (form, event) {
        event.preventDefault();
        if (eventForm.valid()) {
          sidebar.modal('hide');
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

  // Sidebar Toggle Btn
  if (toggleSidebarBtn.length) {
    toggleSidebarBtn.on('click', function () {
      cancelBtn.removeClass('d-none');
    });
  }

  // ------------------------------------------------
  // addEvent
  // ------------------------------------------------
  function addEvent(eventData) {
    calendar.addEvent(eventData);
    calendar.refetchEvents();
  }

  // ------------------------------------------------
  // updateEvent
  // ------------------------------------------------
  function updateEvent(eventData) {
    var propsToUpdate = ['id', 'title', 'url'];
    var extendedPropsToUpdate = ['calendar', 'guests', 'location', 'description'];

    updateEventInCalendar(eventData, propsToUpdate, extendedPropsToUpdate);
  }

  // ------------------------------------------------
  // removeEvent
  // ------------------------------------------------
  function removeEvent(eventId) {
    removeEventInCalendar(eventId);
  }

  // ------------------------------------------------
  // (UI) updateEventInCalendar
  // ------------------------------------------------
  const updateEventInCalendar = (updatedEventData, propsToUpdate, extendedPropsToUpdate) => {
    const existingEvent = calendar.getEventById(updatedEventData.id);

    // --- Set event properties except date related ----- //
    // ? Docs: https://fullcalendar.io/docs/Event-setProp
    // dateRelatedProps => ['start', 'end', 'allDay']
    // eslint-disable-next-line no-plusplus
    for (var index = 0; index < propsToUpdate.length; index++) {
      var propName = propsToUpdate[index];
      existingEvent.setProp(propName, updatedEventData[propName]);
    }

    // --- Set date related props ----- //
    // ? Docs: https://fullcalendar.io/docs/Event-setDates
    existingEvent.setDates(updatedEventData.start, updatedEventData.end, { allDay: updatedEventData.allDay });

    // --- Set event's extendedProps ----- //
    // ? Docs: https://fullcalendar.io/docs/Event-setExtendedProp
    // eslint-disable-next-line no-plusplus
    for (var index = 0; index < extendedPropsToUpdate.length; index++) {
      var propName = extendedPropsToUpdate[index];
      existingEvent.setExtendedProp(propName, updatedEventData.extendedProps[propName]);
    }
  };

  // ------------------------------------------------
  // (UI) removeEventInCalendar
  // ------------------------------------------------
  function removeEventInCalendar(eventId) {
    calendar.getEventById(eventId).remove();
  }

  // Add new event
  $(addEventBtn).on('click', function () {
    if (eventForm.valid()) {
      var newEvent = {
        id: calendar.getEvents().length + 1,
        title: eventTitle.val(),
        start: startDate.val(),
        end: endDate.val(),
        startStr: startDate.val(),
        endStr: endDate.val(),
        display: 'block',
        extendedProps: {
          location: eventLocation.val(),
          guests: eventGuests.val(),
          calendar: eventLabel.val(),
          description: calendarEditor.val()
        }
      };
      if (eventUrl.val().length) {
        newEvent.url = eventUrl.val();
      }
      if (allDaySwitch.prop('checked')) {
        newEvent.allDay = true;
      }
      addEvent(newEvent);
    }
  });

  // Update new event
  updateEventBtn.on('click', function () {
    if (eventForm.valid()) {
      var eventData = {
        id: eventToUpdate.id,
        title: sidebar.find(eventTitle).val(),
        start: sidebar.find(startDate).val(),
        end: sidebar.find(endDate).val(),
        url: eventUrl.val(),
        extendedProps: {
          location: eventLocation.val(),
          guests: eventGuests.val(),
          calendar: eventLabel.val(),
          description: calendarEditor.val()
        },
        display: 'block',
        allDay: allDaySwitch.prop('checked') ? true : false
      };

      updateEvent(eventData);
      sidebar.modal('hide');
    }
  });

  // Reset sidebar input values
  function resetValues() {
    endDate.val('');
    eventUrl.val('');
    startDate.val('');
    eventTitle.val('');
    eventLocation.val('');
    allDaySwitch.prop('checked', false);
    eventGuests.val('').trigger('change');
    calendarEditor.val('');
  }

  // When modal hides reset input values
  sidebar.on('hidden.bs.modal', function () {
    resetValues();
  });

  // Hide left sidebar if the right sidebar is open
  $('.btn-toggle-sidebar').on('click', function () {
    btnDeleteEvent.addClass('d-none');
    updateEventBtn.addClass('d-none');
    addEventBtn.removeClass('d-none');
    $('.app-calendar-sidebar, .body-content-overlay').removeClass('show');
  });

  // Select all & filter functionality
  if (selectAll.length) {
    selectAll.on('change', function () {
      var $this = $(this);

      if ($this.prop('checked')) {
        calEventFilter.find('input').prop('checked', true);
      } else {
        calEventFilter.find('input').prop('checked', false);
      }
      calendar.refetchEvents();
    });
  }

  if (filterInput.length) {
    filterInput.on('change', function () {
      $('.input-filter:checked').length < calEventFilter.find('input').length
        ? selectAll.prop('checked', false)
        : selectAll.prop('checked', true);
      calendar.refetchEvents();
    });
  }
});


// Послений код

'use strict';

const calendarEl = document.getElementById('calendar');

let calendarsColor = {
  All: 'primary',
  Personal: 'success',
  Holidays: 'danger',
  Warning: 'warning',
  Misc: 'info'
};
let calendar = new FullCalendar.Calendar(calendarEl, {
  locale: 'ru',
  initialView: 'dayGridMonth',
  events: fetchEvents,
  editable: true,
  dragScroll: true,
  dayMaxEvents: 2,
  eventResizableFromStart: true,
  headerToolbar: {
    start: 'prev,next, title',
    end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
  },
  initialDate: new Date(),
  navLinks: true, // can click day/week names to navigate views
  eventClassNames: function ({event: calendarEvent}) {
    const colorName = calendarsColor[calendarEvent._def.extendedProps.calendar];
    return [
      // Фоновый цвет событий
      'bg-' + colorName + '-light'
    ];
  },
});

// Selected Checkboxes
function selectedCalendars() {
  const selected = [];
  $('.calendar-events-filter input:checked').each(function () {
    selected.push($(this).attr('data-value'));
  });
  return selected;
}

// --------------------------------------------------------------------------------------------------
// AXIOS: fetchEvents
// * This will be called by fullCalendar to fetch events. Also this can be used to refetch events.
// --------------------------------------------------------------------------------------------------
function fetchEvents(info, successCallback) {
  // Fetch Events from API endpoint reference
  /* $.ajax(
    {
      type: 'GET',
      success: function (result) {
        // Get requested calendars as Array
        var calendars = selectedCalendars();

        return [result.events.filter(event => calendars.includes(event.extendedProps.calendar))];
      },
      error: function (error) {
        console.log(error);
      }
    }
  ); */

  const calendars = selectedCalendars();
  // You should make an API call, look into above commented API call for reference
  let selectedEvents = events.filter(function (event) {
    // console.log(event.extendedProps.calendar.toLowerCase());
    return calendars.includes(event.extendedProps.calendar.toLowerCase());
  });
  // if (selectedEvents.length > 0) {
  successCallback(selectedEvents);
  // }
}

const initdashboard = () => {

  document.addEventListener('DOMContentLoaded', () => {
    calendar.render();
  });
};

initdashboard();

// События для календаря

'use strict';

const date = new Date();
const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
const nextMonth = date.getMonth() === 11 ? new Date(date.getFullYear() + 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() + 1, 1);
const prevMonth = date.getMonth() === 11 ? new Date(date.getFullYear() - 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() - 1, 1);

const events = [
  {
    id: 1,
    url: '',
    title: 'Событие 1',
    start: date,
    end: nextDay,
    allDay: false,
    extendedProps: {
      calendar: 'All'
    }
  },
  {
    id: 2,
    url: '',
    title: 'Событие 2',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
    allDay: true,
    extendedProps: {
      calendar: 'All'
    }
  },
  {
    id: 3,
    url: '',
    title: 'Событие 3',
    allDay: true,
    start: new Date(date.getFullYear(), date.getMonth() + 1, -9),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -7),
    extendedProps: {
      calendar: 'Misc'
    }
  },
  {
    id: 4,
    url: '',
    title: "Событие 4",
    start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
    allDay: true,
    extendedProps: {
      calendar: 'Личный'
    }
  },
  {
    id: 5,
    url: '',
    title: 'Событие 5',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    extendedProps: {
      calendar: 'Misc'
    }
  },
  {
    id: 6,
    url: '',
    title: 'Событие 6',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    extendedProps: {
      calendar: 'Личный'
    }
  },
  {
    id: 7,
    url: '',
    title: 'Событие 7',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    extendedProps: {
      calendar: 'Warning'
    }
  },
  {
    id: 8,
    url: '',
    title: 'Событие 8',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    extendedProps: {
      calendar: 'All'
    }
  },
  {
    id: 9,
    url: '',
    title: 'Событие 9',
    start: nextMonth,
    end: nextMonth,
    allDay: true,
    extendedProps: {
      calendar: 'All'
    }
  },
  {
    id: 10,
    url: '',
    title: 'Событие 10',
    start: prevMonth,
    end: prevMonth,
    allDay: true,
    extendedProps: {
      calendar: 'Личный'
    }
  },
  {
    id: 11,
    url: '',
    title: 'Событие 3',
    allDay: true,
    start: '2021-08-03',
    end: '2021-08-03',
    extendedProps: {
      calendar: 'Holidays'
    }
  }
];
