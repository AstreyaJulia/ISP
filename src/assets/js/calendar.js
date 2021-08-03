'use strict';

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
  selectHelper: true,
});

const initdashboard = () => {

  document.addEventListener('DOMContentLoaded', () => {
    calendar.render();
  });
};

initdashboard();
