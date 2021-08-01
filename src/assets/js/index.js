'use strict';

/* Рендеринг мини-календаря дашбоарда */
const minicalendar = document.querySelector('.today-calendar-widget');

let calendar = new FullCalendar.Calendar(minicalendar, {
  locale: 'ru',
  timeZone: 'GMT+3',
  initialView: 'dayGridMonth',
  height: 250,
  editable: false,
  selectable: true,
  businessHours: false,
  dayMaxEvents: false, // allow "more" link when too many events
  headerToolbar: {
    right: 'prev,next,today',
    left: 'title',
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

// Слайдер
// Массив слайдера
let slides_arr = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1612640975490-497b68f80639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400",
    header: "Заголовок слайда №1. Короткий",
    text: "Текст слайда"
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1614357235247-99fabbee67f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400",
    header: "Заголовок слайда №2. Чуть больше, чем первый"
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1613557029019-e536807463dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400",
    header: "Заголовок слайда №3. Этот немного больше, чем предыдущие"
  },
  {
    id: 3,
    image:
      "https://tproger.ru/s3/uploads/2020/07/field.jpg",
    header: "Заголовок слайда №4. Этот должен быть самым длинным из предыдущих трех"
  },
  {
    id: 4,
    image:
      "https://tproger.ru/s3/uploads/2020/07/rose.jpg",
    header: "Заголовок слайда"
  },
  {
    id: 5,
    image:
      "https://tproger.ru/s3/uploads/2020/07/leaf.jpg",
    header: "Заголовок слайда"
  },
];

// Кнопки управления слайдером
const sliderContainer = document.querySelector('.carousel-inner');
const sliderDotsContainer = document.querySelector('.carousel-indicators');

const createSliderItemString = ({image, header}) =>

  `<div class="carousel-item">
  <img src="${image}" alt="${header}" class="d-block w-100" aria-label="${header}" height="300" style="object-fit: cover;">
  <div class="carousel-caption d-none d-md-block">
  <h6>${header}</h6>
  </div>
  </div>`;

const createDotsItemString = ({id, header}) =>
  `<button type="button" data-bs-target="#carouselNews" data-bs-slide-to="${id}" aria-label="${header}"></button>`;

// Рендеринг слайдера
const sliderRender = () => {
  sliderContainer.innerHTML = '';
  sliderDotsContainer.innerHTML = '';
  const sliderElementsString = slides_arr.map((image) => createSliderItemString(image)).join('');
  const dotsElementsString = slides_arr.map((image) => createDotsItemString(image)).join('');
  sliderContainer.insertAdjacentHTML('beforeend', sliderElementsString);
  sliderDotsContainer.insertAdjacentHTML('beforeend', dotsElementsString);

  // Показывает 1 слайд
  let slide1 = sliderContainer.firstChild;
  let dot1 = sliderDotsContainer.firstChild;
  slide1.classList.add('active');
  dot1.classList.add('active');
}

const initdashboard = () => {

  document.addEventListener('DOMContentLoaded', () => {
    calendar.render();
    sliderRender();
  });

};

initdashboard();
