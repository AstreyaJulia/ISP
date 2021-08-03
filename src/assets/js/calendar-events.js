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
