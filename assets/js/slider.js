'use strict';

// Слайдер
// Массив слайдера
let slides_arr = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1612640975490-497b68f80639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400",
    header: "Заголовок слайда №1. Короткий",
    text: "Текст слайда"
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1614357235247-99fabbee67f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400",
    header: "Заголовок слайда №2. Чуть больше, чем первый"
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1613557029019-e536807463dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400",
    header: "Заголовок слайда №3. Этот немного больше, чем предыдущие"
  },
  {
    id: 4,
    image:
      "https://tproger.ru/s3/uploads/2020/07/field.jpg",
    header: "Заголовок слайда №4. Этот должен быть самым длинным из предыдущих трех"
  },
  {
    id: 5,
    image:
      "https://tproger.ru/s3/uploads/2020/07/rose.jpg",
    header: "Заголовок слайда"
  },
  {
    id: 6,
    image:
      "https://tproger.ru/s3/uploads/2020/07/leaf.jpg",
    header: "Заголовок слайда"
  },
];
const sliderContainer = document.querySelector('.slider-elements');

const createSliderItemString = ({image, header, id}) =>

  `    <form class="col-4">
    <div class="card">
        <img src="${image}" alt="${header}" aria-label="${header}" height="150" style="object-fit: cover;">
      <div class="card-body">
      <p class="h6">Слайд №${id}</p>
        <p class="card-title">${header}</p>
                <div class="mt-2 mb-2 form-check form-switch">
          <!-- ID для слайдеров разные-->
          <input class="form-check-input" type="checkbox" id="slider${id}" checked="">
          <label class="form-check-label" for="slider${id}">Вкл./Выкл.</label>
      </div>
                <button type="submit" class="btn btn-sm btn-primary">Редактировать</button>
        <button type="button" class="btn btn-sm btn-danger">Удалить</button>

      </div>
</div>
    </form>`;

// Рендеринг слайдера
const sliderRender = () => {
  sliderContainer.innerHTML = '';
  const sliderElementsString = slides_arr.map((image) => createSliderItemString(image)).join('');
  sliderContainer.insertAdjacentHTML('beforeend', sliderElementsString);
}

const initslider = () => {
  document.addEventListener('DOMContentLoaded', () => {
    sliderRender();
  });

};

initslider();
