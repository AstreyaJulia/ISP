'use strict';

// Контейнер для календаря. Класс .calendar
const calendarmodule = document.querySelector('.calendar');
// Кнопка добавления события ID addEvent
const addEventBtn = $('#addEvent');
// Модал добавления события ID addEventPopup
const addEventPopup = $('#addEventPopup');


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
      title: 'Событие на весь день',
      start: '2021-03-01',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Длинное событие',
      start: '2021-03-07',
      end: '2021-03-10',
      description: "Длинное описание какого-то длинного события."
    },
    {
      groupId: 999,
      title: 'Повторяющееся событие',
      start: '2021-03-09T16:00:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      groupId: 999,
      title: 'Повторяющееся событие',
      start: '2021-03-16T16:00:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Совещание',
      start: '2021-03-11',
      end: '2021-03-13',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Встреча',
      start: '2021-03-12T10:30:00',
      end: '2021-03-12T12:30:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Обед',
      start: '2021-03-12T12:00:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Встреча',
      start: '2021-03-12T14:30:00'
    },
    {
      title: 'Конец работы',
      start: '2021-03-12T17:30:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Обед',
      start: '2021-03-12T20:00:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'ДР',
      start: '2021-03-13T07:00:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Ссылка Google',
      url: 'http://google.com/',
      start: '2021-03-28',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Событие на весь день',
      start: '2021-07-01',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Длинное событие',
      start: '2021-07-07',
      end: '2021-07-10',
      description: "Длинное описание какого-то длинного события."
    },
    {
      groupId: 999,
      title: 'Повторяющееся событие',
      start: '2021-07-09T16:00:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      groupId: 999,
      title: 'Повторяющееся событие',
      start: '2021-07-16T16:00:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Совещание',
      start: '2021-07-11',
      end: '2021-07-13',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Встреча',
      start: '2021-07-12T10:30:00',
      end: '2021-07-12T12:30:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Обед',
      start: '2021-07-12T12:00:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Встреча',
      start: '2021-07-12T14:30:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Конец работы',
      start: '2021-07-12T17:30:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Обед',
      start: '2021-07-12T20:00:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'ДР',
      start: '2021-07-13T07:00:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Ссылка Google',
      url: 'http://google.com/',
      start: '2021-07-28',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Событие на весь день',
      start: '2021-08-01',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Длинное событие',
      start: '2021-08-07',
      end: '2021-08-10',
      description: "Длинное описание какого-то длинного события."
    },
    {
      groupId: 999,
      title: 'Повторяющееся событие',
      start: '2021-08-09T16:00:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      groupId: 999,
      title: 'Повторяющееся событие',
      start: '2021-08-16T16:00:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Совещание',
      start: '2021-03-11',
      end: '2021-03-13',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Встреча',
      start: '2021-08-12T10:30:00',
      end: '2021-08-12T12:30:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Обед',
      start: '2021-08-12T12:00:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Встреча',
      start: '2021-08-12T14:30:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Конец работы',
      start: '2021-08-12T17:30:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Обед',
      start: '2021-08-12T20:00:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'ДР',
      start: '2021-08-13T07:00:00',
      description: "Длинное описание какого-то длинного события."
    },
    {
      title: 'Ссылка Google',
      url: 'http://google.com/',
      start: '2021-08-28',
      description: "Длинное описание какого-то длинного события."
    }
  ]
});

addEventBtn.on("click", function (e) {
  e.preventDefault();
  const eventTitle = $('#event-title').val();
  const eventStartDate = $('#event-start-date').val();
  const eventEndDate = $('#event-end-date').val();
  const eventStartTime = $('#event-start-time').val();
  const eventEndTime = $('#event-end-time').val();
  const eventDescription = $('#event-description').val();
  const eventTheme = $('#event-theme').val();
  const eventStartTimeCheck = eventStartTime ? 'T' + eventStartTime + 'Z' : '';
  const eventEndTimeCheck = eventEndTime ? 'T' + eventEndTime + 'Z' : '';
  console.log(eventStartTime);
  calendar.addEvent({
    id: 'added-event-id-' + Math.floor(Math.random() * 9999999),
    title: eventTitle,
    start: eventStartDate + eventStartTimeCheck,
    end: eventEndDate + eventEndTimeCheck,
    className: "fc-" + eventTheme,
    description: eventDescription
  });
  addEventPopup('hide');
});

const initcalendar = () => {
  document.addEventListener('DOMContentLoaded', () => {
    calendar.render();
  });
}
initcalendar();
