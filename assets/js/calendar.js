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

      $('#calendar').fullCalendar('updateEvent', info);
      modal.style.display = "none";
      modalResetData();
      document.getElementsByTagName('body')[0].removeAttribute('style');
    });
  },

});

function enableDatePicker() {
  var startDate = flatpickr(document.getElementById('start-date'), {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    minDate: new Date()
  });

  var abv = startDate.config.onChange.push(function(selectedDates, dateStr, instance) {

    var endtDate = flatpickr(document.getElementById('end-date'), {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      minDate: dateStr
    });
  })

  var endtDate = flatpickr(document.getElementById('end-date'), {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    minDate: new Date()
  });
}


function randomString(length, chars) {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
  return result;
}
$("#add-e").off('click').on('click', function(event) {
  var radioValue = $("input[name='marker']:checked").val();
  var randomAlphaNumeric = randomString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
  var inputValue = $("#write-e").val();
  var inputStarttDate = document.getElementById("start-date").value;
  var inputEndDate = document.getElementById("end-date").value;

  var arrayStartDate = inputStarttDate.split(' ');

  var arrayEndDate = inputEndDate.split(' ');

  var startDate = arrayStartDate[0];
  var startTime = arrayStartDate[1];

  var endDate = arrayEndDate[0];
  var endTime = arrayEndDate[1];

  var concatenateStartDateTime = startDate+'T'+startTime+':00';
  var concatenateEndDateTime = endDate+'T'+endTime+':00';

  var inputDescription = document.getElementById("taskdescription").value;
  var myCalendar = $('#calendar');
  myCalendar.fullCalendar();
  var myEvent = {
    timeZone: 'UTC',
    allDay : false,
    id: randomAlphaNumeric,
    title:inputValue,
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
