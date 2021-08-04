'use strict';

// Слайдер
// Массив слайдера
let slides_arr = [
  {
    id: 0,
    image:
      "assets/img/slider/cosmonaut.jpg",
    header: "Поехали!"
  },
  {
    id: 1,
    image:
      "assets/img/slider/hello.jpg",
    header: "Приветствуем на внутреннем сайте суда!"
  },
  {
    id: 2,
    image:
      "assets/img/slider/wear_masks.jpg",
    header: "Пожалуйста, не забывайте носить маску."
  },
];

// Кнопки управления слайдером
const sliderContainer = document.querySelector('.carousel-inner');
const sliderDotsContainer = document.querySelector('.carousel-indicators');

const createSliderItemString = ({image, header}) =>

  `<div class="carousel-item" data-bs-interval="10000">
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
    sliderRender();
  });

};

initdashboard();
