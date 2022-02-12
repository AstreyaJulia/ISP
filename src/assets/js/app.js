'use strict';

import {COLORS} from './const.js';

/** */

/**
 * Настройки валидации
 * @param {string} formSelector - класс формы
 * @param {string} inputSelector - класс инпута
 * @param {string} submitButtonSelector - класс кнопки отправки формы
 * @param {string} inactiveButtonClass - класс, к-рый делает кнопку отправки формы заблокированной
 * @param {string} inputErrorClass - класс, подсвечивающий поле с ошибками
 * @param {string} errorClass - класс, делающий ошибку видимой
 */
/** @type {Object} */
const validationSettings = {
  formSelector: '.form-validate',
  inputSelector: '.form-control:not(div)',
  submitButtonSelector: '.btn-submit',
  inactiveButtonClass: 'disabled',
  inputErrorClass: 'border-danger',
  errorClass: 'd-flex'
};


/**
 * Включение ошибки валидации инпута
 * @param {HTMLInputElement} input - валидируемый инпут
 * @param {HTMLFormElement} form - элемент формы
 * @param {string} message - сообщение об ошибке
 */
function showInputError(input, form, message) {

  /** @type {HTMLElement} */
  const error = form.querySelector(`#${input.id}-error`);

  /** @type {string} */
  error.textContent = message;

  input.classList.add(validationSettings.inputErrorClass);
}


/**
 * Выключение ошибки валидации инпута
 * @param {HTMLInputElement} input - валидируемый инпут
 * @param {HTMLFormElement} form - элемент формы
 */
function hideInputError(input, form) {

  /** @type {HTMLElement} */
  const error = form.querySelector(`#${input.id}-error`);

  /** @type {string} */
  error.textContent = "";

  input.classList.remove(validationSettings.inputErrorClass);
}


/**
 * Валидация инпута
 * @param {HTMLInputElement} input - валидируемый инпут
 * @param {HTMLFormElement} form - элемент формы
 */
function validateInput(form, input) {

  /** Если инпут не прошел валидацию (?) показывает ошибку, иначе (:) убирает ошибку */
  !input.validity.valid ? showInputError(input, form, input.validationMessage) : hideInputError(input, form);
}


/**
 * Переключатель состояния кнопки отправки формы
 * @param {HTMLCollection} inputArray - коллекция валидируемых инпутов
 * @param {HTMLButtonElement} submitButton - кнопка отправки формы
 */
function switchSubmitButton(inputArray, submitButton) {
  if (Array.from(inputArray).filter(input => !input.validity.valid).length === 0) {
    submitButton.disabled = false;
    submitButton.classList.remove(validationSettings.inactiveButtonClass);
  } else {
    submitButton.disabled = true;
    submitButton.classList.add(validationSettings.inactiveButtonClass);
  }
}


/**
 * Создание прослушивателей
 * @param {Element} form - элемент формы, на которую вешаем прослушиватели
 */
function setInputEvtListeners(form) {
  /** @type {HTMLCollection} */
  const inputArray = form.querySelectorAll(validationSettings.inputSelector);
  /** @type {HTMLButtonElement} */
  const submitButton = form.querySelector(validationSettings.submitButtonSelector);
  /** Валидация при открытии формы */
  switchSubmitButton(inputArray, submitButton)
  /** Вешаем прослушиватель input каждому инпуту */
  Array.from(inputArray).forEach((input) => {
    input.addEventListener('input', () => {
      /** Валидация инпута, включает/выключает ошибки */
      validateInput(form, input);
      /** Переключалка состояния кнопки отправки формы */
      switchSubmitButton(inputArray, submitButton);
    });
  });
}

/**
 * Функция включения валидации
 */
function enableValidation() {
  /** @type {HTMLCollection} */
  const formsArray = document.querySelectorAll(validationSettings.formSelector);
  Array.from(formsArray).forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setInputEvtListeners(form);
  });
}


/** ждем загрузки DOM */
/*document.addEventListener('DOMContentLoaded', function () {
  enableValidation();
});*/


/**
 * Отправка GET и POST
 * @param {string} method - метод - GET или POST
 * @param {string} url - url запроса
 * @param {Object} parameters - параметры в виде массива
 */
const sendAjaxPromise = (method, url, parameters) => new Promise((onFulfilled, onFail) => {
  const xhr = new XMLHttpRequest();
  switch (method) {
    /** Настраиваем его: GET или POST, URL */
    case "GET":
      let queryString;
      if (parameters !== null) {
        queryString = Object.keys(parameters).map(key => key + '=' + parameters[key]).join('&');
      } else {
        queryString = null;
      }
      xhr.open(method, url + "?" + queryString, true);
      xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
      xhr.onload = () => onFulfilled(JSON.parse(xhr.response));
      xhr.onerror = () => onFail(xhr.status);
      xhr.send(null);
      break;

    case "POST":
      xhr.open(method, url, true);
      xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
      xhr.onload = () => onFulfilled(JSON.parse(xhr.response));
      xhr.onerror = () => onFail(xhr.status);
      xhr.send(parameters);
      break;
  }
});


/** Справка по судьям */
/** @type {HTMLButtonElement} Кнопка Сформировать */
const certBtn = document.querySelector('.cert-get');

/** Получить квартал и год из селекта */
function certBtnHandler() {
  let value = document.querySelector('.cert-select');
  let year = $(value).find(':selected').parent().attr('label');
  let data = {
    quarter: value.value,
    year: year,
  };

  /** Вставить данные справки по судьям в таблицу */
  function createTable(data) {
    const createRowString = ({
                               col_3,
                               col_4,
                               col_5,
                               col_6,
                               col_7,
                               col_8,
                               col_9,
                               col_10,
                               col_11,
                               col_12,
                               col_13,
                               col_14,
                               col_15,
                               col_16,
                               col_17,
                               fullname,
                               row_num
                             }) =>
      `<tr>
<td>${row_num}</td>
<td>${fullname}</td>
<td>${col_3}</td>
<td>${col_4}</td>
<td>${col_5}</td>
<td>${col_6}</td>
<td>${col_7}</td>
<td>${col_8}</td>
<td>${col_9}</td>
<td>${col_10}</td>
<td>${col_11}</td>
<td>${col_12}</td>
<td>${col_13}</td>
<td>${col_14}</td>
<td>${col_15}</td>
<td>${col_16}</td>
<td>${col_17}</td>
</tr>`;
    document.querySelector('.cert-table').innerHTML = '';
    const taskElementsString = data.data.map((col_3, col_4, col_5, col_6, col_7, col_8, col_9, col_10, col_11, col_12, col_13, col_14, col_15, col_16, col_17, fullname, row_num) => createRowString(col_3, col_4, col_5, col_6, col_7, col_8, col_9, col_10, col_11, col_12, col_13, col_14, col_15, col_16, col_17, fullname, row_num)).join('');
    document.querySelector('.cert-table').insertAdjacentHTML('beforeend', taskElementsString);
  }

  /** Отправить запрос с параметрами и вставить в таблицу справки по судьям */
  ajax_send("GET", "api/certificatework/getCertificateWork.php", data, "json", response => {
    createTable(response);
  });

}

/** Прослушиватель нажатия кнопки Сформировать справки по судьям */
if (certBtn) {
  certBtn.addEventListener('click', function () {
    certBtnHandler()
  })
}


/** Тетрис */
const tetrwrapper = document.querySelector(".tetris-wrapper");
const tetrgame = () => {

  /** License CC0 1.0 Universal */
  /** https://gist.github.com/straker/3c98304f8a6a9174efd8292800891ea1 */
  /** https://tetris.fandom.com/wiki/Tetris_Guideline */

  /** получаем доступ к основному холсту */
  const canvas = document.getElementById('game');
  const context = canvas.getContext('2d');

  /** Кнопка начала игры */
  const startbtn = document.querySelector('.tetr-start-game');

  /** получаем доступ к холсту с игровой статистикой */
  const canvasScore = document.getElementById('score');
  const contextScore = canvasScore.getContext('2d');

  const start = () => {
    /** размер квадратика */
    const grid = 32;
    /** массив с последовательностями фигур, на старте — пустой */
    const tetrominoSequence = [];

    /** с помощью двумерного массива следим за тем, что находится в каждой клетке игрового поля */
    /** размер поля — 10 на 20, и несколько строк ещё находится за видимой областью */
    const playfield = [];

    /** заполняем сразу массив пустыми ячейками */
    for (let row = -2; row < 20; row++) {
      playfield[row] = [];

      for (let col = 0; col < 10; col++) {
        playfield[row][col] = 0;
      }
    }

    /** как рисовать каждую фигуру */
    /** https://tetris.fandom.com/wiki/SRS */
    const tetrominos = {
      'I': [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      'J': [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ],
      'L': [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
      ],
      'O': [
        [1, 1],
        [1, 1],
      ],
      'S': [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
      ],
      'Z': [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
      ],
      'T': [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0],
      ]
    };

    /** цвет каждой фигуры */
    const colors = {
      'I': COLORS.theme['info'],
      'O': COLORS.theme['warning'],
      'T': COLORS.theme['primary'],
      'S': COLORS.theme['success'],
      'Z': COLORS.theme['danger'],
      'J': COLORS.theme['blue'],
      'L': COLORS.theme['orange']
    };

    /** счётчик */
    let count = 0;
    /** текущая фигура в игре */
    let tetromino = getNextTetromino();
    /** следим за кадрами анимации, чтобы если что — остановить игру */
    let rAF = null;
    /** флаг конца игры, на старте — неактивный */
    let gameOver = false;

    /** количество набранных очков на старте */
    let score = 0;
    /** рекорд игры */
    let record = 0;
    /** текущий уровень сложности */
    let level = 1;
    /** имя игрока с наибольшим рейтингом */
    let recordName = '';

    /** берем имя игрока из разметки */
    let name = document.querySelector(".user-name").innerHTML;

    /** Узнаём размер хранилища */
    const Storage_size = localStorage.length;
    /** Если в хранилище уже что-то есть… */
    if (Storage_size > 0) {
      /** …то достаём оттуда значение рекорда и имя чемпиона */
      record = localStorage.record;
      recordName = localStorage.recordName;
    }

    /** Функция возвращает случайное число в заданном диапазоне */
    /** https://stackoverflow.com/a/1527820/2124254 */
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /** создаём последовательность фигур, которая появится в игре */
    /** https://tetris.fandom.com/wiki/Random_Generator */
    function generateSequence() {
      /** тут — сами фигуры */
      const sequence = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];

      while (sequence.length) {
        /** случайным образом находим любую из них */
        const rand = getRandomInt(0, sequence.length - 1);
        const name = sequence.splice(rand, 1)[0];
        /** помещаем выбранную фигуру в игровой массив с последовательностями */
        tetrominoSequence.push(name);
      }
    }

    /** получаем следующую фигуру */
    function getNextTetromino() {
      /** если следующей нет — генерируем */
      if (tetrominoSequence.length === 0) {
        generateSequence();
      }
      /** берём первую фигуру из массива */
      const name = tetrominoSequence.pop();
      /** сразу создаём матрицу, с которой мы отрисуем фигуру */
      const matrix = tetrominos[name];

      /** I и O стартуют с середины, остальные — чуть левее */
      const col = playfield[0].length / 2 - Math.ceil(matrix[0].length / 2);

      /** I начинает с 21 строки (смещение -1), а все остальные — со строки 22 (смещение -2) */
      const row = name === 'I' ? -1 : -2;

      /** вот что возвращает функция */
      return {
        name: name, /** название фигуры (L, O, и т. д.) */
        matrix: matrix, /** матрица с фигурой */
        row: row, /** текущая строка (фигуры стартуют за видимой областью холста) */
        col: col          /** текущий столбец */
      };
    }

    /** поворачиваем матрицу на 90 градусов */
    /** https://codereview.stackexchange.com/a/186834 */
    function rotate(matrix) {
      const N = matrix.length - 1;
      /** на входе матрица, и на выходе тоже отдаём матрицу */
      return matrix.map((row, i) =>
        row.map((val, j) => matrix[N - j][i])
      );
    }

    /** проверяем после появления или вращения, может ли матрица (фигура) быть в этом месте поля или она вылезет за его границы */
    function isValidMove(matrix, cellRow, cellCol) {
      /** проверяем все строки и столбцы */
      for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
          if (matrix[row][col] && (
            /** если выходит за границы поля… */
            cellCol + col < 0 ||
            cellCol + col >= playfield[0].length ||
            cellRow + row >= playfield.length ||
            /** …или пересекается с другими фигурами */
            playfield[cellRow + row][cellCol + col])
          ) {
            /** то возвращаем, что нет, так не пойдёт */
            return false;
          }
        }
      }
      /** а если мы дошли до этого момента и не закончили раньше — то всё в порядке */
      return true;
    }

    /** когда фигура окончательна встала на своё место */
    function placeTetromino() {
      /** обрабатываем все строки и столбцы в игровом поле */
      for (let row = 0; row < tetromino.matrix.length; row++) {
        for (let col = 0; col < tetromino.matrix[row].length; col++) {
          if (tetromino.matrix[row][col]) {

            /** если край фигуры после установки вылезает за границы поля, то игра закончилась */
            if (tetromino.row + row < 0) {
              return showGameOver();
            }
            /** если всё в порядке, то записываем в массив игрового поля нашу фигуру */
            playfield[tetromino.row + row][tetromino.col + col] = tetromino.name;
          }
        }
      }

      /** проверяем, чтобы заполненные ряды очистились снизу вверх */
      for (let row = playfield.length - 1; row >= 0;) {
        /** если ряд заполнен */
        if (playfield[row].every(cell => !!cell)) {

          score += 10;
          /** считаем уровень */
          level = Math.floor(score / 100) + 1;
          /** если игрок побил прошлый рекорд */
          if (score > record) {
            /** ставим его очки как рекорд */
            record = score;
            /** заносим в хранилище значение рекорда */
            localStorage.record = record;
            /** меняем имя чемпиона */
            recordName = name;
            /** заносим в хранилище его имя */
            localStorage.recordName = recordName;
          }

          /** очищаем его и опускаем всё вниз на одну клетку */
          for (let r = row; r >= 0; r--) {
            for (let c = 0; c < playfield[r].length; c++) {
              playfield[r][c] = playfield[r - 1][c];
            }
          }
        } else {
          /** переходим к следующему ряду */
          row--;
        }
      }
      /** получаем следующую фигуру */
      tetromino = getNextTetromino();
    }

    /** показываем надпись Game Over */
    function showGameOver() {
      /** прекращаем всю анимацию игры */
      cancelAnimationFrame(rAF);
      /** ставим флаг окончания */
      gameOver = true;
      /** рисуем чёрный прямоугольник посередине поля */
      context.fillStyle = 'black';
      context.globalAlpha = 0.75;
      context.fillRect(0, canvas.height / 2 - 30, canvas.width, 60);
      /** пишем надпись белым моноширинным шрифтом по центру */
      context.globalAlpha = 1;
      context.fillStyle = 'white';
      context.font = '36px TT Norms Pro';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText('GAME OVER!', canvas.width / 2, canvas.height / 2);
      startbtn.disabled = false;
      startbtn.style.display = "block";

    }

    function showScore() {
      contextScore.clearRect(0, 0, canvasScore.width, canvasScore.height);
      contextScore.globalAlpha = 1;
      contextScore.fillStyle = '#1F2B3A';
      contextScore.font = '18px TT Norms Pro';
      contextScore.fillText('Уровень: ' + level, 15, 20);
      contextScore.fillText('Очков:   ' + score, 15, 50);
      contextScore.fillText('Чемпион: ' + recordName, 160, 20);
      contextScore.fillText('Рекорд:  ' + record, 160, 50);

    }

    /** главный цикл игры */
    function loop() {
      /** начинаем анимацию */
      rAF = requestAnimationFrame(loop);
      /** очищаем холст */
      context.clearRect(0, 0, canvas.width, canvas.height);

      /** рисуем игровое поле с учётом заполненных фигур */
      for (let row = 0; row < 20; row++) {
        for (let col = 0; col < 10; col++) {
          if (playfield[row][col]) {
            const name = playfield[row][col];
            context.fillStyle = colors[name];

            /** рисуем всё на один пиксель меньше, чтобы получился эффект «в клетку» */
            context.fillRect(col * grid, row * grid, grid - 1, grid - 1);
          }
        }
      }

      /** выводим статистику */
      showScore();

      /** рисуем текущую фигуру */
      if (tetromino) {

        /** фигура сдвигается вниз каждые 36 кадров минус значение текущего уровня. Чем больше уровень, тем быстрее падает. */
        if (++count > (36 - level)) {
          tetromino.row++;
          count = 0;

          /** если движение закончилось — рисуем фигуру в поле и проверяем, можно ли удалить строки */
          if (!isValidMove(tetromino.matrix, tetromino.row, tetromino.col)) {
            tetromino.row--;
            placeTetromino();
          }
        }

        /** не забываем про цвет текущей фигуры */
        context.fillStyle = colors[tetromino.name];

        /** отрисовываем её */
        for (let row = 0; row < tetromino.matrix.length; row++) {
          for (let col = 0; col < tetromino.matrix[row].length; col++) {
            if (tetromino.matrix[row][col]) {

              /** и снова рисуем на один пиксель меньше */
              context.fillRect((tetromino.col + col) * grid, (tetromino.row + row) * grid, grid - 1, grid - 1);
            }
          }
        }
      }
    }

    /** следим за нажатиями на клавиши */
    document.addEventListener('keydown', function (e) {
      /** если игра закончилась — сразу выходим */
      if (gameOver) return;

      /** стрелки влево и вправо */
      if (e.which === 37 || e.which === 39) {
        const col = e.which === 37
          /** если влево, то уменьшаем индекс в столбце, если вправо — увеличиваем */
          ? tetromino.col - 1
          : tetromino.col + 1;

        /** если так ходить можно, то запоминаем текущее положение */
        if (isValidMove(tetromino.matrix, tetromino.row, col)) {
          tetromino.col = col;
        }
      }

      /** стрелка вверх — поворот */
      if (e.which === 38) {
        /** поворачиваем фигуру на 90 градусов */
        const matrix = rotate(tetromino.matrix);
        /** если так ходить можно — запоминаем */
        if (isValidMove(matrix, tetromino.row, tetromino.col)) {
          tetromino.matrix = matrix;
        }
      }

      /** стрелка вниз — ускорить падение */
      if (e.which === 40) {
        /** смещаем фигуру на строку вниз */
        const row = tetromino.row + 1;
        /** если опускаться больше некуда — запоминаем новое положение */
        if (!isValidMove(tetromino.matrix, row, tetromino.col)) {
          tetromino.row = row - 1;
          /** ставим на место и смотрим на заполненные ряды */
          placeTetromino();
          return;
        }
        /** запоминаем строку, куда стала фигура */
        tetromino.row = row;
      }
    });

    canvas.onblur = function () {
      const me = this;
      setTimeout(function () {
        me.focus();
      }, 500);
    }

    rAF = requestAnimationFrame(loop);

  }

  /** старт игры */
  startbtn.addEventListener('click', () => {
    start();
    startbtn.style.display = "none";
    startbtn.focus = false;
    canvas.focus();
  })
}

// Chart JS
// Apex Charts

const themeColors = [COLORS.theme['primary'], COLORS.theme['warning'], COLORS.theme['danger'], COLORS.theme['success'], COLORS.theme['info']];
const apexChartList = document.querySelectorAll('.apexchart');

const apexChartOptions = (chartname) => {

  const safpeopleChart = {
    series: [{
      name: 'Население г. Сафоново',
      data: [43500, 46100, 45273, 44444, 43845, 43477, 43145, 42707, 42147, 41510, 41138, 40537]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [colors.theme['secondary']],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['secondary'], colors.theme['secondary']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const smolOblpeopleChart = {
    series: [{
      name: 'Население Смоленской области',
      data: [993018, 982887, 980482, 975188, 967896, 964791, 958630, 953201, 949348, 942363, 934889, 921127]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [colors.theme['secondary']],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['secondary'], colors.theme['secondary']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const smolOblworkpeopleChart = {
    series: [{
      name: 'Трудоспособное население Смоленской области',
      data: [633809, 596862, 627128, 625958, 593611, 615842, 607983, 586273, 598980, 587725, 587237,]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [colors.theme['secondary']],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['secondary'], colors.theme['secondary']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const smolOblnoworkChart = {
    series: [{
      name: 'Количество безработных в Смоленской области, тыс. человек',
      data: [40.8, 41.5, 30.9, 28.1, 26.9, 32.8, 31.4, 29.8, 26.2, 25.3, 25.3,]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [colors.theme['secondary']],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['secondary'], colors.theme['secondary']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const inflationChart = {
    /* https://уровень-инфляции.рф/%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8B-%D0%B8%D0%BD%D1%84%D0%BB%D1%8F%D1%86%D0%B8%D0%B8 */
    series: [{
      name: 'Уровень инфляции в России',
      data: [8.78, 6.10, 6.58, 6.45, 11.36, 12.91, 5.38, 2.52, 4.27, 3.05, 4.91, 8.39]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    annotations: {
      yaxis: [{
        y: 4,
        borderColor: '#00B795',
        label: {
          borderColor: '#00B795',
          style: {
            color: '#FFFFFF',
            background: '#00B795',
          },
          text: 'Оптимальный уровень',
        }
      }],
      xaxis: [{
        x: 2014,
        x2: 2015,
        fillColor: '#f6bc9a',
        opacity: 0.4,
        label: {
          borderColor: '#f6bc9a',
          style: {
            color: '#fff',
            background: '#ef630a',
          },
          offsetY: -10,
          text: 'Валютный кризис',
        }
      },
        {
          x: 2020,
          label: {
            borderColor: '#ef630a',
            style: {
              color: '#FFFFFF',
              background: '#ef630a',
            },
            text: 'Рецессия COVID-19',
          }
        }
      ],
    },
    colors: [colors.theme['primary']],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['primary'], colors.theme['primary']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const postoutboxChart = {
    series: [{
      name: 'Исходящая почта',
      data: [11610, 29513, 28845, 30240, 23662, 36230, 41202, 37862, 36211, 36859, 34827, 38381]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [colors.theme['primary']],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['primary'], colors.theme['primary']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const emailoutboxChart = {
    series: [{
      name: 'Исходящая эл. почта',
      data: [1810, 3170, 3959]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [colors.theme['primary']],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['primary'], colors.theme['primary']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      categories: [2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const postinboxChart = {
    series: [{
      name: 'Входящая почта',
      data: [4147, 9372, 12395, 12226, 11378, 11481, 11418, 12372, 11721, 11917, 12308, 15209]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [colors.theme['green']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['green'], colors.theme['green']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const emailinboxChart = {
    series: [{
      name: 'Входящая эл. почта',
      data: [6489, 8384, 10450]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [colors.theme['green']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['green'], colors.theme['green']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const gcaseChart = {
    series: [{
      name: 'Гражданские дела',
      data: [1777, 1935, 2108, 2892, 2784, 2593, 2454, 2145, 1785, 1388, 1587, 1893]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [colors.theme['red']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['red'], colors.theme['red']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const gcaseOblChart = {
    series: [{
      name: 'Гражданские дела (область)',
      data: [30095, 28470, 31392, 32393, 34753, 33232, 31409, 21203, 24391, 18543, 23220,]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [colors.theme['red']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['red'], colors.theme['red']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const g1caseChart = {
    series: [{
      name: 'Гражданские дела ап. инстанции',
      data: [45, 62, 43, 60, 58, 57, 42, 35, 51, 68, 58, 49]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [colors.theme['orange']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['orange'], colors.theme['orange']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const admcaseChart = {
    series: [{
      name: 'Дела об адм. правонарушениях',
      data: [30, 25, 33, 1096, 1044, 844, 817, 882, 695, 467, 382, 1157]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [colors.theme['blue']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['blue'], colors.theme['blue']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const admcaseOblChart = {
    series: [{
      name: 'Дела об адм. правонарушениях (область)',
      data: [1487, 1334, 1315, 6150, 5856, 5316, 5080, 5352, 5232, 4805, 6768,]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [colors.theme['blue']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['blue'], colors.theme['blue']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const adm1caseChart = {
    series: [{
      name: 'Жалобы по адм. делам',
      data: [0, 0, 0, 0, 166, 204, 205, 198, 145, 138, 123, 96]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [colors.theme['teal']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['teal'], colors.theme['teal']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const ucaseChart = {
    series: [{
      name: 'Уголовные дела',
      data: [275, 366, 364, 294, 360, 373, 254, 214, 282, 251, 240, 297]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [colors.theme['yellow']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['yellow'], colors.theme['yellow']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const ucaseOblChart = {
    series: [{
      name: 'Уголовные дела (область)',
      data: [4124, 4038, 3696, 3257, 3799, 3563, 3210, 2217, 3061, 3626, 3713,]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [colors.theme['yellow']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['yellow'], colors.theme['yellow']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const u1caseChart = {
    series: [{
      name: 'Уголовные дела ап. инстанции',
      data: [15, 30, 17, 17, 13, 8, 14, 9, 9, 6, 13, 9]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [colors.theme['azure']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['azure'], colors.theme['azure']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const mucaseChart = {
    series: [{
      name: 'Материалы в порядке уг. производства, всего',
      data: [545, 3440, 2634, 1662, 1232, 1852, 1926, 1604, 2216, 1564, 1494, 1157]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [colors.theme['cyan']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['cyan'], colors.theme['cyan']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const eosChart = {
    series: [{
      name: 'Обращения, без исковых',
      data: [87, 230, 423, 624]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [colors.theme['primary']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['primary'], colors.theme['primary']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const eosgcaseChart = {
    series: [{
      name: 'Исковые заявления',
      data: [21, 43, 35, 128]
    }],
    chart: {
      height: 350,
      type: 'area',
    },
    colors: [colors.theme['green']],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        gradientToColors: [colors.themeLighter['green'], colors.theme['green']],
        opacityFrom: 0.7,
        opacityTo: 0.55,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2018, 2019, 2020, 2021]
    },
    tooltip: {
      x: {show: false}
    },
  }
// Рефералы
  const successLineChart = {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: true
      }
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false
    },
    colors: [colors.theme['success']],
    stroke: {
      width: 3,
      curve: 'smooth'
    },
    series: [],
    noData: {
      text: 'Loading...'
    },
    /*
        xaxis: {
          categories: array.value.day
        },*/
    yaxis: {
      show: false,
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
  };

  switch (chartname) {
    case 'safpeopleChart':
      return safpeopleChart;
    case 'postinboxChart':
      return postinboxChart;
    case 'postoutboxChart':
      return postoutboxChart;
    case 'gcaseChart':
      return gcaseChart;
    case 'g1caseChart':
      return g1caseChart;
    case 'admcaseChart':
      return admcaseChart;
    case 'adm1caseChart':
      return adm1caseChart;
    case 'ucaseChart':
      return ucaseChart;
    case 'u1caseChart':
      return u1caseChart;
    case 'mucaseChart':
      return mucaseChart;
    case 'eosChart':
      return eosChart;
    case 'eosgcaseChart':
      return eosgcaseChart;
    case 'successLineChart':
      return successLineChart;
    case 'inflationChart':
      return inflationChart;
    case 'gcaseOblChart':
      return gcaseOblChart;
    case 'ucaseOblChart':
      return ucaseOblChart;
    case 'smolOblpeopleChart':
      return smolOblpeopleChart;
    case 'smolOblnoworkChart':
      return smolOblnoworkChart;
    case 'admcaseOblChart':
      return admcaseOblChart;
    case 'smolOblworkpeopleChart':
      return smolOblworkpeopleChart;
    case 'emailoutboxChart':
      return emailoutboxChart;
    case 'emailinboxChart':
      return emailinboxChart;
  }
}

const apexChartInit = (chart, chartName) => {
  let apexChart = new ApexCharts(chart, apexChartOptions(chartName));
  apexChart.render();
  apexChart.updateSeries(apexChartOptions(chartName).series);
}

// Меню сайдбара
const sidebarnavmenu = document.querySelector('.navigation-menu');

// Спиннер
const spinnerloader = document.querySelector('.spinner-wrapper');

// Все элементы, для к-рых нужна прокрутка
const overlayscrollbar = OverlayScrollbars(document.querySelectorAll(".overlayscrollbar"), {
  //className            : "os-theme-light",
  resize: "none",
  sizeAutoCapable: true,
  clipAlways: true,
  normalizeRTL: true,
  paddingAbsolute: false,
  autoUpdate: null,
  autoUpdateInterval: 33,
  updateOnLoad: ["img"],
  nativeScrollbarsOverlaid: {
    showNativeScrollbars: false,
    initialize: true
  },
  overflowBehavior: {
    x: "scroll",
    y: "scroll"
  },
  scrollbars: {
    visibility: "auto",
    autoHide: "never",
    autoHideDelay: 800,
    dragScrolling: true,
    clickScrolling: false,
    touchSupport: true,
    snapHandle: false
  },
  textarea: {
    dynWidth: false,
    dynHeight: false,
    inheritedAttrs: ["style", "class"]
  },
  callbacks: {
    onInitialized: null,
    onInitializationWithdrawn: null,
    onDestroyed: null,
    onScrollStart: null,
    onScroll: null,
    onScrollStop: null,
    onOverflowChanged: null,
    onOverflowAmountChanged: null,
    onDirectionChanged: null,
    onContentSizeChanged: null,
    onHostSizeChanged: null,
    onUpdated: null
  }
});

// ГЛОБАЛЬНЫЕ ФУНКЦИИ

// Выбранные чекбоксы в группе, возвращает массив
// Принимает группу элементов - allInputs
function selectedCheckboxes(allInputs, mode) {
  const filterInput = allInputs;
  const checkboxes = [];
  switch (mode) {
    case "selected":
      for (let j = 0; j < filterInput.length; j++) {
        if (filterInput[j].checked) {
          checkboxes.push(filterInput[j].value.toLowerCase());
        }
      }
      return checkboxes;
    case "all":
      for (let j = 0; j < filterInput.length; j++) {
        checkboxes.push(filterInput[j].value.toLowerCase());
      }
      return checkboxes;
  }

}

// Toast. Большие всплывашки с заголовком и временем
// Всплывашка. Принимает заголовок header, текст text, время time в виде строки
function showToast(header, text, time) {
  const toastcontainer = document.querySelector('.toasts-container');
  // Удаляем скрытые всплывашки
  const hiddentoasts = toastcontainer.querySelectorAll('.hide');
  if (hiddentoasts) {
    hiddentoasts.forEach((hiddentoast) => {
      toastcontainer.removeChild(hiddentoast);
    });
  }

  const toastElement = '<div class="toast fade" role="alert" aria-live="assertive" aria-atomic="true"><div class="toast-header"><i class="mdi mdi-message-alert-outline"></i><strong class="me-auto">' + header + '</strong><small class="text-muted">' + time + '</small><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button></div><div class="toast-body">' + text + '</div></div>';
  toastcontainer.insertAdjacentHTML('beforeend', toastElement);
  const toastElList = [].slice.call(document.querySelectorAll('.toast'));
  const toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl)
  });
  toastList.forEach(toast => toast.show());
}

// Ошибки Toast. Большие всплывашки с заголовком и временем
// Всплывашка. Принимает заголовок header, текст text, время time в виде строки
function showErrorToast(header, text, time) {
  const toastcontainer = document.querySelector('.toasts-container');
  // Удаляем скрытые всплывашки
  const hiddentoasts = toastcontainer.querySelectorAll('.hide');
  if (hiddentoasts) {
    hiddentoasts.forEach((hiddentoast) => {
      toastcontainer.removeChild(hiddentoast);
    });
  }

  const toastElement = '<div class="toast fade" role="alert" aria-live="assertive" aria-atomic="true"><div class="toast-header"><i class="mdi mdi-alert text-danger"></i><strong class="me-auto text-danger">' + header + '</strong><small class="text-muted">' + time + '</small><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button></div><div class="toast-body">' + text + '</div></div>';
  toastcontainer.insertAdjacentHTML('beforeend', toastElement);
  const toastElList = [].slice.call(document.querySelectorAll('.toast'));
  const toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl, {
      autohide: false
    })
  });
  toastList.forEach(toast => toast.show());
}

// Toast mini. Маленькие цветные всплывашки без заголовка и времени
function showMiniToast(text, color) {
  const toastcontainer = document.querySelector('.toasts-container');
  // Удаляем скрытые всплывашки
  const hiddentoasts = toastcontainer.querySelectorAll('.hide');
  if (hiddentoasts) {
    hiddentoasts.forEach((hiddentoast) => {
      toastcontainer.removeChild(hiddentoast);
    });
  }

  const toastElement = '<div class="toast align-items-center bg-' + color + '-lighter" role="alert" aria-live="assertive" aria-atomic="true"><div class="d-flex"><div class="toast-body">' + text + '</div><button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Закрыть"></button></div></div>';
  toastcontainer.insertAdjacentHTML('beforeend', toastElement);

  const toastElList = [].slice.call(document.querySelectorAll('.toast'));
  const toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl)
  });
  toastList.forEach(toast => toast.show());
}

// Получение Cookie
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Права супер-пользователя
const cookieSudo = getCookie('aut[sudo]');

// ID пользователя
const cookieID = getCookie('aut[id]');

// Ajax. Передача GET и POST запросов
//method - POST или GET, url - адрес, parameters - параметры get запроса или отсылаемое тело POST, callback - в какую
// функцию передать результат
const ajax_send = (method, url, parameters, datatype, callback) => {
  //Создаём новый XMLHttpRequest-объект
  let xhr = new XMLHttpRequest();

  switch (method) {
    // Настраиваем его: GET или POST, URL
    case "GET":
      let queryString;
      if (parameters !== null) {
        if (typeof parameters === 'object' &&
          !Array.isArray(parameters)) {
          queryString = Object.keys(parameters).map(key => key + '=' + parameters[key]).join('&');
        } else {
          queryString = parameters;
        }
      } else {
        queryString = null;
      }
      xhr.open(method, url + "?" + queryString, true);
      xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
      xhr.send(null);
      break;

    case "POST":
      xhr.open(method, url, true);
      xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
      xhr.send(parameters);
      break;
  }

  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) {
      return;
    }

    let header = '';

    if (xhr.status === 200) {
      let result;

      if (method === "GET") {
        if (datatype === "json") {
          result = typeof xhr.response !== "string"
            ? JSON.stringify(xhr.response)
            : xhr.response;
          try {
            JSON.parse(xhr.response);
            result = JSON.parse(xhr.response);
            callback(result);
          } catch (e) {
            //result = xhr.response;
            showErrorToast("Ошибка", xhr.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'))
          }
        } else if (datatype === "text") {
          callback(xhr.responseText);
        }
      }
      if (method === "POST") {
        if (!xhr.response) {
          callback('null');
        } else {
          showErrorToast("Ошибка", xhr.response, moment().tz('Europe/Moscow').format('YYYY-MM-DD'))
        }
      }

    } else if (xhr.status === 0) {
      header = "Не подключено. Проверьте сеть";
      showErrorToast(header, xhr.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'))
    } else if (xhr.status === 404) {
      header = "404. Not Found. Запрашиваемая страница не найдена ";
      showErrorToast(header, xhr.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'))
    } else if (xhr.status === 500) {
      header = "Внутренняя ошибка сервера [500]";
      showErrorToast(header, xhr.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'))
    }
  }

}
// Общие

// При прокручивании вниз на 20px от верхнего края элемента с классом main-content, показывает кнопку Назад наверх
// Кнопка Назад Наверх, класс .back-to-top
const backtotopbutton = document.querySelector('.back-to-top');
// Прокручиваемое содержимое, класс .main-content, если его прокручивать, появляется кнопка Назад наверх
const maincontent = document.querySelector('.main-content');

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

// Переключает класс disabled у .page-body, сайдбар
// Кнопка, переключающая сайдбар, класс .sidebar-toggle-button
const sidebartogglbutton = document.querySelector('.sidebar-toggle-button');
// Тело страницы, класс .main-sidebar
const sidebarwrapper = document.querySelector('.page-body');

const buttonsidebartoggleHandler = (evt) => {
  evt.preventDefault();

  let formData = new FormData();
  formData.append("module", "sidebar");

  if (sidebarwrapper.dataset.sidebarWidth === "narrow") {
    sidebarwrapper.dataset.sidebarWidth = "wide";
    sidebartogglbutton.querySelector('i').classList.add('mdi-crosshairs-gps');
    sidebartogglbutton.querySelector('i').classList.remove('mdi-crosshairs');
    formData.append("sidebarWidth", "wide");
  } else if (sidebarwrapper.dataset.sidebarWidth === "wide") {
    sidebarwrapper.dataset.sidebarWidth = "narrow";
    sidebartogglbutton.querySelector('i').classList.remove('mdi-crosshairs-gps');
    sidebartogglbutton.querySelector('i').classList.add('mdi-crosshairs');
    formData.append("sidebarWidth", "narrow");
  }

  ajax_send("POST", "pages/admin/ajax.php", formData, "json", result => result);
};

// Разворачивает сайдбар, не отодвигая контент. Переключает класс expanded у сайдбара
// Кнопка, переключающая сайдбар, класс .sidebar-expand-button
const sidebarexpbutton = document.querySelector('.sidebar-expand-button');
// Сайдбар
const mainsidebar = document.querySelector('.main-sidebar');

const buttonsidebarexpHandler = () => {
  if (mainsidebar.classList.contains('expanded')) {
    mainsidebar.classList.remove('expanded');
  } else {
    mainsidebar.classList.add('expanded');
  }
};

// Сворачивает сайдбар, не отодвигая контент. Отключает класс expanded у сайдбара
// Кнопка, сворачивающая сайдбар, класс .sidebar-close-button
const sidebarclosebutton = document.querySelector('.sidebar-close-button');

const buttonsidebarcloseHandler = () => {
  mainsidebar.classList.remove('expanded');
};

const sidebarexpandHandler = () => {
  mainsidebar.classList.add('expanded');
};

// Переключатель светлого/темного режима
const darkmodetogglbutton = document.querySelector('.tumbler__wrapper');

const darkmodetoggleHandler = () => {
  let formData = new FormData();
  formData.append("module", "theme");

  if (sidebarwrapper.dataset.themeName === "main-dark") {
    sidebarwrapper.dataset.themeName = "main-light";
    formData.append("theme", "main-light");
  } else if (sidebarwrapper.dataset.themeName === "main-light") {
    sidebarwrapper.dataset.themeName = "main-dark";
    formData.append("theme", "main-dark");
  }
  ajax_send("POST", "pages/admin/ajax.php", formData, "json", result => result);
  darkmodetogglbutton.classList.toggle('tumbler--night-mode');
};

if (darkmodetogglbutton) {
  darkmodetogglbutton.addEventListener('click', darkmodetoggleHandler);
}

// Добавляет класс open у .top-search
// Кнопка вкл/выкл верхнего поиска, класс .top-search-button-toggle
const searchbutton = document.querySelector('.top-search-button-toggle');
// Верхний поиск, класс .top-search
const searchinput = document.querySelector('.top-search');
// Кнопка закрытия верхнего поиска, класс .top-search-close
const searchclosebtn = document.querySelector('.top-search-close');

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
// Селект Профессия
const profselect = document.getElementById('profession');
// Селект Принадлежность
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

// Если не в штате, то блокирует и сбрасывает кабинет
// Селект В штате
const activeselect = document.getElementById('active');
// Селект Кабинет
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

// Переключает класс .active у ближайшего .list-group-item нажатой ссылки списка ссылок
// Список групп ссылок
const listgroupmenu = document.querySelector('.list-tab-group .list-group');
// Список ссылок
const tablistgroupmenu = document.querySelector('.tab-content');

if (listgroupmenu && tablistgroupmenu) {
  const listgroup = listgroupmenu.querySelectorAll('.list-group-item');
  const tablistgroup = tablistgroupmenu.querySelectorAll('.tab-list-group');

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
  if (listgroup[0] && tablistgroup[0]) {
    listgroup[0].classList.add("active");
    tablistgroup[0].classList.add("active");
  }

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

// Показать / скрыть пароль
// Кнопка показать / скрыть пароль
const showhidepass = document.querySelector('.passcode-switch');
// Поле ввода пароля
const passinplist = document.querySelectorAll('.passinput');

const showhidepassHandler = () => {
  // Меняем тип поля ввода пароля с password на text
  if (passinplist[0].type === "password") {
    passinplist.forEach(passinp => passinp.type = "text");
    showhidepass.classList.toggle('is-hidden');
  } else {
    passinplist.forEach(passinp => passinp.type = "password");
    showhidepass.classList.toggle('is-hidden');
  }
};

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

// Отключаем спиннер загрузки при загрузке содержимого
const spinnerloaderHandler = () => {
  spinnerloader.style.display = "none";
};

// Получает имя файла текущей открытой страницы и ищет такое же в ссылках бокового меню, устанавливает класс active открытому пункту или субпункту и его родителю
const sidebarnavmenuHandler = () => {
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
};

// Отключаем спиннер загрузки при загрузке содержимого
const maincontentscrollHandler = () => {
  const winScroll = maincontent.scrollTop;
  const height = maincontent.scrollHeight - maincontent.clientHeight;
  const scrolled = (winScroll / height) * 100;
  const topprogress = document.querySelector('.topprogressbar');
  if (topprogress) {
    topprogress.style.width = scrolled + "%";
  }

};

// Календарь

// Цвета для Fullcalendar
// Цвета событий, названия менять в разметке, в js менять не надо

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

// Для использования в Fullcalendar
const calendarsColor = araycal();

// Мини календарь на главной

// Контейнер для календаря
const minicalendar = document.querySelector('.today-calendar-widget');

const minicalendarhandler = () => {
  function fetchevents(info, successCallback) {
    // Получение событий AJAX

    let data = {
      startParam: moment(info.start).tz('Europe/Moscow').format('YYYY-MM-DD'),
      endParam: moment(info.end).tz('Europe/Moscow').format('YYYY-MM-DD'),
      calendars: Object.keys(calendarsColor),
      private: '0',
    };

    ajax_send("GET", "components/fullcalendar/events.php", data, "json", result => successCallback(result));
  }

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


  let calendar = new FullCalendar.Calendar(minicalendar, {
    locale: 'ru',
    timeZone: settings.timezone,
    initialView: 'dayGridMonth',
    height: 300,
    editable: false,
    selectable: true,
    businessHours: false,
    dayMaxEvents: false, //

    eventClassNames: function ({event: calendarEvent}) {
      const colorName = calendarsColor[calendarEvent._def.extendedProps.calendar];
      return [
        // Фоновый цвет событий
        'fc-event-' + colorName
      ];
    },
    headerToolbar: {
      right: 'prev,title,next',
      left: 'today',
    },
    eventSources: [fetchevents],
    eventMouseEnter: function (event,) {
      if (event.event.display !== "background") {
        showPopover(event);
      }
    },
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

/**
 * Настройки для модуля календаря
 * @type {{addEventTitle: string, addEventFormSubmit: string, cancelBtn: string, addDelEventModal: string, closeAddEventModalCrossButton: string, daysForRepeatEvents: string[], eventLabel: string, addEventButton: string}}
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
  datepickerformat: "Y-m-d H:i"
}

/**
 *
 * @param settings {Object} объект настроек и параметров
 */
function calendmodulehandler(settings) {

  /** Кнопка Добавить событие @type {HTMLButtonElement} */
  const addEventButton = document.querySelector(settings.addEventButton);

  /** Модал добавления/удаления события @type {HTMLElement} */
  const addDelEventModal = document.querySelector(settings.addDelEventModal);

  /** Кнопка Добавить/Сохранить событие в модале добавления/редактирования. Отправка формы @type {HTMLButtonElement} */
  const addEventFormSubmit = document.querySelector(settings.addEventFormSubmit);

  /** Заголовок в модале добавления/редактирования @type {HTMLElement} */
  const addEventTitle = document.querySelector(settings.addEventTitle);

  /** Кнопка Закрыть (крестик) модал добавления/редактирования @type {HTMLButtonElement} */
  const closeAddEventModalCrossButton = addDelEventModal.querySelector(settings.closeAddEventModalCrossButton);

  /** Кнопка Отмена/Удалить событие в модале добавления/редактирования @type {HTMLButtonElement} */
  const cancelBtn = document.querySelector(settings.cancelBtn);

  /** Предупреждение об удалении события */
  const deleteWarningMessage = document.querySelector(settings.deleteWarningMessage);

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
  const calEventFilter = document.querySelector(settings.calEventFilter);

  /** Чекбоксы в фильтре */
  const filterInput = document.querySelectorAll(settings.filterInput);

  /** Чекбокс Все в фильтре */
  const selectAll = document.querySelector(settings.selectAll);

  /** Чекбокс Только мои события */
  const privateinp = document.getElementById(settings.privateinp);

  /**  Колонки с параметрами повторения */
  const repeatparams = document.querySelector(settings.repeatparams);

  // Переключатели повторения
  const repparamSwitch = document.getElementById("dayrepopt");
  // Секции с параметрами повторения по неделям, месяцам, годам
  const weeklysection = document.getElementById("weekly-section");
  const monthlysection = document.getElementById("monthly-section");
  // Секция с интервалом
  const intervalsection = document.getElementById("interval-section");
  // Метка "день" в интервале
  const daynumlabel1 = document.getElementById("daynum-label");
  // Метка "Каждый" в интервале
  const daynumlabel2 = document.getElementById("intervallabel1");

  // поле ввода начала повторения
  const startrepDate = document.getElementById("startrep-date");
  // поле ввода окончания повторения
  const endrepDate = document.getElementById("endrep-date");
  // Вкладка Повторение на модале
  const reppane = document.getElementById("nav-rep");
  // Все чекбоксы дней недель
  const wdayscheck = document.querySelectorAll('.wdays-check');
  // Радио Закончить после даты
  const repdate = document.getElementById("Radio5");
  // Радио Закончить после повторений
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

  // Событие для просмотра
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
      startDate.value > endDate.value ? endDate.value = startDate.value : false;
    }

    function checkEndDate() {
      startDate.value > endDate.value ? startDate.value = endDate.value : false;
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
        addEventFormSubmit.addEventListener('click', addEvent);
        cancelBtn.addEventListener('click', closeAddEvModal);
        deleteWarningMessage.classList.add('d-none');
        break
      case 'update':
        addEventFormSubmit.textContent = "Обновить";
        cancelBtn.textContent = "Удалить";
        addEventTitle.textContent = "Редактировать событие";
        cancelBtn.addEventListener('click', delEvent);
        addEventFormSubmit.addEventListener('click', updateEvent);
        break
    }

    addDelEventModal.classList.add('show');
    addDelEventModal.style.display = "block";
    const modalBackdrop = document.createElement("div");
    modalBackdrop.setAttribute('class', 'modal-backdrop fade show')
    document.body.appendChild(modalBackdrop);
    setInputEvtListeners(eventForm);
  }

  /**
   * Отметить чекбоксы дней недели по массиву
   * @param array массив дней
   */
  function checkweekdays(array) {
    array.map((currElement, index) => {
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
    /*repparamSwitch.addEventListener('input', () => {
      validateInput(eventForm, repparamSwitch);
    });*/
    setInputEvtListeners(eventForm);
  }

  /**
   * Обновление события
   */
  const updateEvent = () => {
    function updSucces(result, title) {
      closeAddEvModal();
      if (result === "null") {
        showMiniToast('Событие ' + title + ' обновлено', "info");
      }
      calendar.refetchEvents();
    }

      let Event = new FormData();
      Event.append("operation", "upd");
      Event.append("id", eventToUpdate.id);
      Event.append("title", $(addDelEventModal).find(eventTitle).val());
      let title = $(addDelEventModal).find(eventTitle).val();
      Event.append("start", $(addDelEventModal).find(startDate).val());
      Event.append("end", $(addDelEventModal).find(endDate).val());
      Event.append("calendar", $(eventLabel).val());
      Event.append("private", $(privateSwitch).prop('checked') ? '1' : '0');
      Event.append("description", $(calendarEditor).val());
      Event.append("tzid", settings.timezone);
      Event.append("allDay", $(allDaySwitch).prop('checked') ? '1' : '0');
      // Параметры повторения. Если галочка включена
      if ($(repeatSwitch).prop('checked')) {
        if (Event.interval !== '') {
          Event.append("interval", $(daynum).val());
        } else {
          Event.append("interval", '0');
        }
        if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'daily-section') {
          // Ежедневно
          Event.append("freq", 'DAILY');
        } else if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'weekly-section') {
          // Еженедельно
          Event.append("freq", 'WEEKLY');
          // Получаем отмеченные чекбоксы
          if (getweekdaycheck() !== "" || null) {
            Event.append("byweekday", getweekdaycheck());
          } else {
            Event.append("byweekday", '0');
          }
        } else if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'monthly-section') {
          // Ежемесячно
          Event.append("freq", 'MONTHLY');
          // Проверяем чекбоксы
          // Последний день
          if ($(lastdmonth).prop('checked')) {
            Event.append("byweekday", 'MO, TU, WE, TH, FR, SA, SU');
            Event.append("bysetpos", '-1');
          } else
            // Предпоследний день
          if ($(prelastdmonth).prop('checked')) {
            Event.append("byweekday", 'MO, TU, WE, TH, FR, SA, SU');
            Event.append("bysetpos", '-2');
          } else
            // Первый день
          if ($(firstdmonth).prop('checked')) {
            Event.append("byweekday", 'MO, TU, WE, TH, FR, SA, SU');
            Event.append("bysetpos", '1');
          } else
            // Первый рабочий день
          if ($(firstworkdmonth).prop('checked')) {
            Event.append("byweekday", 'MO, TU, WE, TH, FR');
            Event.append("bysetpos", '1');
          } else
            // Последний рабочий день
          if ($(lastworkdmonth).prop('checked')) {
            Event.append("byweekday", 'MO, TU, WE, TH, FR');
            Event.append("bysetpos", '-1');
          }
        } else if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'yearly-section') {
          // Ежегодно
          Event.append("freq", 'YEARLY');
        } else if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'none') {
          // Без повторения
          Event.append("freq", '0');
          Event.append("byweekday", '0');
          Event.append("bysetpos", '0');
        }

        // Начало повторения
        Event.append("dtstart", moment($(startrepDate).val()).format(settings.datetimeformat));
        // Диапазон повторения
        if ($(repdate).prop('checked')) {
          Event.append("until", moment($(endrepDate).val()).format(settings.datetimeformat));
        } else {
          Event.append("until", '0');
        }
        // Кол-во повторений
        if ($(repcount).prop('checked')) {
          Event.append("count", $(repcountinp).val());
        } else {
          Event.append("count", '0');
        }

        // Начало повторения
        Event.append("dtstart", moment($(startrepDate).val()).format(settings.datetimeformat));

        // Диапазон повторения
        if ($(repdate).prop('checked')) {
          Event.append("until", moment($(endrepDate).val()).format(settings.datetimeformat));
        }
        // Кол-во повторений
        if ($(repcount).prop('checked')) {
          Event.append("count", $(repcountinp).val());
        }

      } else {
        Event.append("interval", '0');
      }

      if (eventToUpdate.extendedProps.user_id === cookieID || JSON.stringify(eventToUpdate.extendedProps.user_id) === cookieID) {
        ajax_send("POST", "components/fullcalendar/ajax.php", Event, "json", result => updSucces(result, title));
      } else {
        showMiniToast('Вы не имеете прав на правку события ' + title, "danger");
      }

  }

  /** Удалить событие */
  const delEvent = () => {

    /**
     * Скрыть модал. Сбросить инпуты. Показать всплывашку что удалено. Обновить события
     * @param result результат отправки запроса на сервер
     * @param title название удаляемого события
     */
    function delSucces(result, title) {
      closeAddEvModal();
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
  const closeAddEvModal = () => {
    hideModal();
    resetValues();
    addEventFormSubmit.removeEventListener('click', updateEvent);
    addEventFormSubmit.removeEventListener('click', addEvent);
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
    dateFormat: settings.datepickerformat,
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
    dateFormat: settings.datepickerformat,
    onReady: function (selectedDates, dateStr, instance) {
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
    dateFormat: settings.datepickerformat,
  });

  /**
   * Получение событий. Эта функция будет вызываться fullCalendar для получения и обновления событий.
   * @param info
   * @param successCallback ф-я коллбек для передачи
   */
  function fetchEvents(info, successCallback) {
    const filterInput2 = document.querySelectorAll('.input-filter:not(.select-all)');
    let data = {
      /** С не фиксированной датой не работают повторяющиеся собыия */
      startParam: moment(info.start).tz(settings.timezone).format('YYYY-MM-DD'),
      endParam: moment(info.end).tz(settings.timezone).format('YYYY-MM-DD'),
      calendars: selectedCheckboxes(filterInput2, 'selected'),
      private: privateinp.checked === true ? 1 : 0
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
    dayMaxEvents: true, // добавляет ссылку "еще", когда очень много событий
    navLinks: true, // можно нажимть на названия дней/недель для переключения между видами
    eventClassNames: function ({event: calendarEvent}) {
      const colorName = calendarsColor[calendarEvent._def.extendedProps.calendar];
      return [
        // Фоновый цвет событий
        'fc-event-' + colorName
      ];
    },
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
    eventMouseEnter: function (event,) {
      if (event.event.display !== "background") {
        showPopover(event);
      }
    },
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
    resetValues();
    showModal('add');

    // Разные даты начала и конца события для создаваемых событий при нажатии на кнопку создания и на день
    if (info == null) {
      $(startDate).val("");
      $(endDate).val("");
    } else {
      const date = moment(info.date).format(settings.datetimeformat);
      startDatepicker.setDate(date, true, settings.datetimeformat);
      endDatepicker.setDate(date, true, settings.datetimeformat);
    }
  }


  /** Добавление нового события */
  function addEvent() {

    function addSucces(result, title) {
      closeAddEvModal();
      if (result === "null") {
        showMiniToast('Событие ' + title + ' добавлено', "success");
      }
      calendar.refetchEvents();
    }

      let Event = new FormData();
      Event.append("operation", "add");
      Event.append("title", eventTitle.value);
      let title = eventTitle.value;
      Event.append("start", moment(startDate.value).format(settings.datetimeformat));
      Event.append("end", moment(endDate.value).format(settings.datetimeformat));
      Event.append("calendar", eventLabel.value);
      Event.append("description", calendarEditor.value);
      Event.append("private", privateSwitch.checked === true ? '1' : '0');
      Event.append("user_id", cookieID);
      Event.append("tzid", settings.timezone);
      if (allDaySwitch.checked === true) {
        /** Если Весь день, то меняем переменную */
        Event.append("allDay", "1");
      }
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
      }

      ajax_send("POST", "components/fullcalendar/ajax.php", Event, "json", result => addSucces(result, title));
  }

  // Сброс значений модала
  function resetValues() {
    eventForm.reset();
    repeatparams.style.display = "none";
    $(addDelEventModal).find(eventLabel).val('').trigger('change');
    // Скрыть параметры повторения
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


// Datatables
const datatablesHandler = () => {
  const colspan = $('td[colspan]').not('[colspan=1]');
  /* colspan.prop("colSpan")  получает кол-во colspan */
  colspan.after('<td style="display: none;"></td>');
  // Для таблиц с сортировкой
  $('.dataTable.sort').DataTable({
    "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Все"]],
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
    "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Все"]],
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
  $('.dataTable.userstable').DataTable({
    "ajax": "api/phonebook/getphonebook.php",
    "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Все"]],
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


// Содержимое страницы FAQ
const faqcard = document.querySelector('.faq-categories-doc');
const cont = document.querySelector('.faq-body');
// Индикатор загрузки для страницы FAQ
const loading = document.querySelector('.loading-spinner-faq');
// Ссылки FAQ
const faqlinks = document.querySelectorAll('.faq-category-subitem a');

// FAQ акордеон в группе
const faqaccordeon = document.querySelector('.faq-categories-list');


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


// Мульти модал для каталога ссылок
// Модалы для списка ссылок
const multimodal = document.querySelector('.modal-multiaction');
const multimodalbtns = document.querySelectorAll('.btnmodal-multiaction');

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
    // 2 действие. Удалить группу
    header1.style.display = "none";
    text1.style.display = "none";
    header2.style.display = "block";
    text2.style.display = "block";
  }

  delbtn.href = datalink;
  showModal()
}

if (multimodal && multimodalbtns) {
  multimodalbtns.forEach((multimodalbtn) => {
    multimodalbtn.addEventListener('click', (evt) => {
      multimodalhandler(evt);
    });
  });
}


// Фильтр в телефонной книге

//Фильтр в телефонном справочнике
// Ищем группу фильтров с селектором button-group
const filterGroup = document.querySelector('.phonebook-filter');

// Куда будет выводиться результат
const result = document.getElementById('filter');

//ajax_send("GET", "pages/admin/ajax.php", test, result => $.fn.zTree.init($("#workplace-tree"), settingWorktree, result));
/*const filterClickHandler = () => {
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

*/

// Начальная строка без фильтров
//const string = '/components/phonebook/ajax.php/?';

/* Слушаем клик по каждому из фильтров телефонной книги */
/*if (filterGroup && result) {
  // Ищем в filter-group элементы фильтров checkbox
  let filterItems = filterGroup.querySelectorAll('input[type=checkbox]');

  filterItems.forEach(function (filter) {
    filter.addEventListener('click', () => {
      filterClickHandler();
    });
  });
}
*/

const filterClickHandler = () => {
  //Обнуление строк фильтров - выбранного и пустого
  let filterItems = filterGroup.querySelectorAll('input[type=checkbox]');

  let selected = selectedCheckboxes(filterItems, 'selected');

  if (selected.length === 0) {
    let data = {
      filter: selectedCheckboxes(filterItems, 'all'),
    };
    ajax_send("GET", "components/phonebook/ajax.php", data, "text", response => {
      result.innerHTML = "";
      result.innerHTML = response
    });

  } else {
    let data = {
      filter: selected,
    };

    ajax_send("GET", "components/phonebook/ajax.php", data, "text", response => {
      result.innerHTML = "";
      result.innerHTML = response
    });
  }
};

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

// Tasks list
// Tasks задачи. Контейнер
const todowrapper = document.querySelector('.todo-wrapper');

// Поля: id, title, duedate (дата),
const tasksHandler = () => {
  // Заголовок задачи
  let taskTitle;
  // Кнопка Добавить задачу
  const addTaskBtn = document.querySelector('.add-task');

  // Модал
  const newTaskModal = document.getElementById('new-task-modal');
  // Форма в модале
  const newTaskForm = document.getElementById('task-form');
  // Заголовок модала статус задачи
  const modalTitle = document.querySelector('.task-title-status');
  // Заголовок модала Добавить
  const addmodalTitle = document.querySelector('.add-task-title');
  // Заголовок модала Редактировать
  const editmodalTitle = document.querySelector('.edit-task-title');
  // Кнопка закрыть на модале
  const span = document.querySelector('.btn-close');

  // Кнопка Добавить на модале
  const addBtn = document.querySelector('.add-task-btn');
  // Кнопка Сохранить на модале
  const updateTodoItem = document.querySelector('.edit-task');
  // Кнопка Удалить на модале
  const updateBtns = document.querySelector('.btn-delete-task');
  // Кнопка Отмена на модале
  const cancelBtn = document.querySelector('.btn-dismiss');

  // Сайдбар с фильтрами и метками
  const sidebarLeft = document.querySelector('.sidebar-left');
  // Меню сайдбара
  const sidebarMenuList = document.querySelector('.sidebar-menu-list');
  // Меню фильтров в сайдбаре
  const listItemFilter = document.querySelector('.list-group-filters');
  // Меню меток в сайдбаре
  const listItemLabel = document.querySelector('.list-group-labels');

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
  const flatPickr = document.querySelector('.due-date');
  // Описание события
  const taskDesc = document.getElementById('ask-description');
  // Метки
  const taskTag = document.getElementById('cat-select');
  // Переключатель Вижу только я (приватное событие)
  const privateSwitch = document.querySelector(".private-switch");
  const checkboxId = 100;

  //Массив задач. Заменить на обращение к базе
  let tasksList = [
    {
      id: 1,
      title: 'Задача',
      created: "2021-08-13 09:00:00",
      deadline: "2021-08-31 09:00:00",
      tag: 'primary',
      user_id: '1',
      completed: 'false',
      deleted: 'false',
      description: 'описание'
    },
    {
      id: 2,
      title: 'Задача 2',
      created: "2021-08-12 09:00:00",
      deadline: "2021-08-18 09:00:00",
      tag: 'danger',
      user_id: '1',
      completed: 'true',
      deleted: 'true',
      description: ''
    },
    {
      id: 3,
      title: 'Задача с большим описанием, которое надо обрезать в ращметке, чтобы не разывало контейнер',
      created: "2021-08-12 09:00:00",
      deadline: "2021-08-10 09:00:00",
      tag: 'warning',
      user_id: '1',
      completed: 'false',
      deleted: 'false',
      description: ''
    },
    {
      id: 4,
      title: 'Просто задача без названия',
      created: "2021-08-14 09:00:00",
      deadline: "2021-08-23 09:00:00",
      tag: 'success',
      user_id: '1',
      completed: 'false',
      deleted: 'false',
      description: ''
    },
    {
      id: 5,
      title: 'Задача с "кавычками"',
      created: "2021-08-01 09:00:00",
      deadline: "2021-09-18 09:00:00",
      tag: 'info',
      user_id: '1',
      completed: 'true',
      deleted: 'true',
      description: ''
    },
    {
      id: 6,
      title: 'Задача 2',
      created: "2021-08-12 09:00:00",
      deadline: "2021-08-18 09:00:00",
      tag: 'primary',
      user_id: '1',
      completed: 'true',
      deleted: 'true',
      description: ''
    }
  ];


  // Функции

  const createTaskItemString = ({id, deadline, tag, title}) =>
    `<li class="todo-item">
              <div class="todo-title-wrapper">
                <div class="todo-title-area">
                  <div class="title-wrapper">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="form-check-input" id="task-${id}">
                      <label class="custom-control-label" for="task-${id}"></label>
                    </div>
                    <span class="todo-title">${title}</span>
                  </div>
                </div>
                <div class="todo-item-action">
                <div class="tag-container">
                <span class="bullet bullet-sm bullet-${tag} me-2" id="tag-${id}"></span>
</div>
                  <small class="text-nowrap text-muted me-1">${moment(deadline).tz('Europe/Moscow').format('LLL')}</small>
                </div>
              </div>
            </li>`;


  // Рендеринг задач
  const tasksRender = () => {
    todoTaskList.innerHTML = '';
    const taskElementsString = tasksList.map((title) => createTaskItemString(title)).join('');
    todoTaskList.insertAdjacentHTML('beforeend', taskElementsString);

    /*
    // Множественный массив
    контейнер тегов
    const tagscontainers = todoTaskList.querySelectorAll('.tag-container');
    tagscontainers.forEach((tagscontainer) => {
      tagscontainer.innerHTML = '';
      for (let key in tasksList) {
        // если products[key]['category'] не равно 'vegetable', то тогда переходим к следующей итерации
        if (tasksList[key]['tags']) {
          console.log(tasksList[key]['tags']);
        }
        continue;
      }
      // тут нужен сброщик тегов
    });*/
  }

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

  // Добавляет класс active при клике на список меток сайдбара
  if (listItemLabel) {
    $(listItemLabel).find('a').on('click', function () {
      if ($(listItemLabel).find('a').hasClass('active')) {
        $(listItemLabel).find('a').removeClass('active');
      }
      $(this).addClass('active');
    });
  }

  // Метки задач
  if (taskTag) {
    $(taskTag).wrap('<div class="position-relative"></div>');
    $(taskTag).select2({
      placeholder: 'Выберите метку'
    });
  }

  // Датапикер даты исполнения
  if (flatPickr) {
    $(flatPickr).flatpickr({
      locale: "ru",
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      defaultDate: 'today'
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
      const isValid = $(newTaskForm).valid();
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

        // HTML Вывод
        if (todoTitle !== '') {
          $(todoTaskList).prepend(
            '<li class="todo-item">' +
            '<div class="todo-title-wrapper">' +
            '<div class="todo-title-area">' +
            '<i class="mdi mdi-dots-vertical"></i>' +
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
        showToast('Задача сохранена', 'Сохранено 💾', "Сейчас");
        hideModal();
      }
    });
  }

  // Чекбокс завершения задачи
  $(todoTaskListWrapper).on('change', '.custom-checkbox', function () {
    const $this = $(this).find('input');
    if ($this.prop('checked')) {
      $this.closest('.todo-item').addClass('completed');
      showToast('Задача завершена', 'Поздравляем 🎉', "Сейчас");
    } else {
      $this.closest('.todo-item').removeClass('completed');
    }
  });
  $(todoTaskListWrapper).on('click', '.custom-checkbox', function (event) {
    event.stopPropagation();
  });

  // To open todo list item modal on click of item
  $(document).on('click', '.todo-task-list-wrapper .todo-item', function () {
    showModal();
    addBtn.style.display = "none";
    cancelBtn.style.display = "none";
    updateTodoItem.style.display = "block";
    updateBtns.style.display = "block";
    addmodalTitle.style.display = "none";
    editmodalTitle.style.display = "block";
    if ($(this).hasClass('completed')) {
      $(modalTitle).html(
        '<button type="button" class="btn btn-sm btn-outline-success complete-todo-item waves-effect waves-float waves-light" data-dismiss="modal">Завершена</button>'
      );
    } else {
      $(modalTitle).html(
        '<button type="button" class="btn btn-sm btn-outline-secondary complete-todo-item waves-effect waves-float waves-light" data-dismiss="modal">Не завершена</button>'
      );
    }
    $(taskTag).val('').trigger('change');
    taskTitle = $(this).find('.todo-title');
    const title = $(this).find('.todo-title').html();

    // apply all variable values to fields
    $(newTaskForm).find('.new-todo-item-title').val(title);
  });

  // Updating Data Values to Fields
  if (updateTodoItem) {
    $(updateTodoItem).on('click', function (e) {
      const isValid = $(newTaskForm).valid();
      e.preventDefault();
      if (isValid) {
        const $edit_title = newTaskForm.find('.new-todo-item-title').val();
        $(taskTitle).text($edit_title);
        showToast('Задача сохранена', 'Сохранено 💾', "Сейчас");
        hideModal();
      }
    });
  }

  // Сортировка по возрастанию А-Я. Работает
  if (sortAsc) {
    $(sortAsc).on('click', function () {
      $(todoTaskListWrapper)
        .find('li')
        .sort(function (a, b) {
          return $(b).find('.todo-title').text().toUpperCase() < $(a).find('.todo-title').text().toUpperCase() ? 1 : -1;
        })
        .appendTo(todoTaskList);
    });
  }
  // Сортировка по убыванию Я-А. Работает
  if (sortDesc) {
    $(sortDesc).on('click', function () {
      $(todoTaskListWrapper)
        .find('li')
        .sort(function (a, b) {
          return $(b).find('.todo-title').text().toUpperCase() > $(a).find('.todo-title').text().toUpperCase() ? 1 : -1;
        })
        .appendTo(todoTaskList);
    });
  }

  // Фильтр задач. Поиск. Работает
  if (todoFilter) {
    $(todoFilter).on('keyup', function () {
      const value = $(this).val().toLowerCase();
      if (value !== '') {
        $('.todo-item').filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
        const tbl_row = $('.todo-item:visible').length; // тут tbl_test название таблицы

        //Проверка имеет ли таблица строку или нет
        if (tbl_row === 0) {
          if (!$(noResults).hasClass('show')) {
            $(noResults).addClass('show');
          }
        } else {
          $(noResults).removeClass('show');
        }
      } else {
        // Если поле поиска пустое
        $('.todo-item').show();
        if ($(noResults).hasClass('show')) {
          $(noResults).removeClass('show');
        }
      }
    });
  }

  $(addTaskBtn).on('click', function () {
    showModal(newTaskModal);
    $(addBtn).style.display = "block";
    $(cancelBtn).style.display = "none";
    $(updateTodoItem).style.display = "block";
    $(updateBtns).style.display = "none";
    $(addmodalTitle).style.display = "block";
    $(editmodalTitle).style.display = "none";

  });

  // Сброс значений модала
  function resetValues() {
    $(flatPickr).val('');
    $(taskDesc).val('');
    $(taskTag).val('');
    $(privateSwitch).prop('checked', false);
  }

  tasksRender();
}


// Погодный виджет
const weatherHandler = () => {
  // ID города искать в файле http://bulk.openweathermap.org/sample/current.city.list.json.gz
  const city = "Safonovo";
  const cityId = 499452;
  const cityrus = "Сафоново";
  const apikey = "0590d73840a4e5980796c90f4f20e0a4";
  const data = null;
  const xhr = new XMLHttpRequest();
  const states = {
    200: {"desc": "гроза с небольшим дождем", "day": "wi-day-thunderstorm", "night": "wi-night-alt-thunderstorm",},
    201: {"desc": "гроза с дождем", "day": "wi-day-thunderstorm", "night": "wi-night-alt-thunderstorm",},
    202: {"desc": "гроза с сильным дождем", "day": "wi-day-thunderstorm", "night": "wi-night-alt-thunderstorm",},
    210: {"desc": "небольшая гроза", "day": "wi-day-lightning", "night": "wi-night-alt-lightning",},
    212: {"desc": "сильная гроза", "day": "wi-day-lightning", "night": "wi-night-alt-lightning",},
    221: {"desc": "очень сильная гроза", "day": "wi-day-lightning", "night": "wi-night-alt-lightning",},
    230: {"desc": "гроза с мелким дождем", "day": "wi-day-thunderstorm", "night": "wi-night-alt-thunderstorm",},
    231: {"desc": "гроза с средним дождем", "day": "wi-day-thunderstorm", "night": "wi-night-alt-thunderstorm",},
    232: {"desc": "гроза с сильным дождем", "day": "wi-day-thunderstorm", "night": "wi-night-alt-thunderstorm",},
    300: {"desc": "слабая морось", "day": "wi-day-hail", "night": "wi-night-alt-hail",},
    301: {"desc": "морось", "day": "wi-day-hail", "night": "wi-night-alt-hail",},
    302: {"desc": "сильная морось", "day": "wi-day-hail", "night": "wi-night-alt-hail",},
    310: {"desc": "слабый моросящий дождь", "day": "wi-day-hail", "night": "wi-night-alt-hail",},
    311: {"desc": "моросящий дождь", "day": "wi-day-hail", "night": "wi-night-alt-hail",},
    312: {"desc": "сильный моросящий дождь", "day": "wi-day-hail", "night": "wi-night-alt-hail",},
    313: {"desc": "ливневый дождь и морось", "day": "wi-day-hail", "night": "wi-night-alt-hail",},
    314: {"desc": "ливневый дождь и изморось", "day": "wi-day-hail", "night": "wi-night-alt-hail",},
    321: {"desc": "ливень", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
    500: {"desc": "небольшой дождь", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
    501: {"desc": "умеренный дождь", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
    502: {"desc": "сильный дождь", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
    503: {"desc": "очень сильный дождь", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
    504: {"desc": "сильный дождь", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
    511: {"desc": "ледяной дождь", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
    520: {"desc": "слабый ливневый дождь", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
    521: {"desc": "ливень", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
    522: {"desc": "сильный ливневый дождь", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
    531: {"desc": "частично ливневый дождь", "day": "wi-day-rain", "night": "wi-night-alt-rain",},
    600: {"desc": "легкий снег", "day": "wi-day-snow", "night": "wi-night-alt-snow",},
    601: {"desc": "снег", "day": "wi-day-snow", "night": "wi-night-alt-snow",},
    602: {"desc": "сильный снегопад", "day": "wi-day-snow", "night": "wi-night-alt-snow",},
    611: {"desc": "мокрый снег", "day": "wi-day-rain-mix", "night": "wi-night-alt-rain-mix",},
    612: {"desc": "слабый мокрый снег", "day": "wi-day-rain-mix", "night": "wi-night-alt-rain-mix",},
    613: {"desc": "ливень с мокрым снегом", "day": "wi-day-rain-mix", "night": "wi-night-alt-rain-mix",},
    615: {"desc": "небольшой дождь и снег", "day": "wi-day-rain-mix", "night": "wi-night-alt-rain-mix",},
    616: {"desc": "дождь со снегом", "day": "wi-day-rain-mix", "night": "wi-night-alt-rain-mix",},
    620: {"desc": "небольшой снегопад", "day": "wi-day-snow", "night": "wi-night-alt-snow",},
    621: {"desc": "снегопад", "day": "wi-day-snow", "night": "wi-night-alt-snow",},
    622: {"desc": "сильный снегопад", "day": "wi-day-snow", "night": "wi-night-alt-snow",},
    701: {"desc": "туман", "day": "wi-day-fog", "night": "wi-night-fog",},
    711: {"desc": "дым", "day": "wi-smoke", "night": "wi-smoke",},
    721: {"desc": "дымка", "day": "wi-smoke", "night": "wi-smoke",},
    731: {"desc": "песчано-пыльные вихри", "day": "wi-sandstorm", "night": "wi-sandstorm",},
    741: {"desc": "туман", "day": "wi-smog", "night": "wi-smog",},
    751: {"desc": "песок", "day": "wi-sandstorm", "night": "wi-sandstorm",},
    761: {"desc": "пыль", "day": "wi-dust", "night": "wi-dust",},
    762: {"desc": "вулканический пепел", "day": "wi-volcano", "night": "wi-volcano",},
    771: {"desc": "шквал", "day": "wi-strong-wind", "night": "wi-strong-wind",},
    781: {"desc": "смерч", "day": "wi-tornado", "night": "wi-tornado",},
    800: {"desc": "безоблачно", "day": "wi-day-sunny", "night": "wi-night-clear",},
    801: {"desc": "небольшая облачность: 11-25%", "day": "wi-day-cloudy", "night": "wi-night-alt-cloudy",},
    802: {"desc": "средняя облачность: 25-50%", "day": "wi-cloudy", "night": "wi-cloudy",},
    803: {"desc": "высокая облачность: 51-84%", "day": "wi-cloudy", "night": "wi-cloudy",},
    804: {"desc": "очень высокая облачность: 85-100%", "day": "wi-cloudy", "night": "wi-cloudy",},
  }

  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.response);
        if (response.cod === 404) {
          document.querySelector('.weather-info').innerHTML = "";
        } else {
          let weather = {
            state: "",
            icon: "",
            temp_max: "",
          };
          let letter = "";
          if ((moment().hour() >= 7 && moment().hour() <= 21)) {
            letter = "day";
          }
          if ((moment().hour() <= 6 && moment().hour() >= 0) || (moment().hour() >= 22 && moment().hour() <= 23)) {
            letter = "night";
          }
          weather.state = states[response.weather[0].id]["desc"];
          weather.icon = states[response.weather[0].id][letter];
          weather.temp_max = Math.round(response.main.temp_max - 273.15);

          if (weather.temp_max > 0) {
            weather.temp_max = "+" + weather.temp_max + '°';
          } else {
            weather.temp_max = weather.temp_max + '°';
          }

          const weatherInner =
            `<a class="d-flex align-items-center justify-content-center" style="text-decoration: none;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="` + weather.state + `" data-bs-original-title="` + weather.state + `">
              <p class="m-0 p-0" style="font-size: 23px; color: #5552d9; font-weight: 700; line-height: normal;">` + weather.temp_max + `</p>
              <i class="ms-2 d-flex align-items-center justify-content-center wi ` + weather.icon + `" style="width=35px; height: 35px;"></i>
            </a>`;
          document.querySelector('.weather-info').innerHTML = '';
          document.querySelector('.weather-info').insertAdjacentHTML('beforeend', weatherInner);

        }
      }
    }
  });

  let url = "https://api.openweathermap.org/data/2.5/weather?id=" + cityId + "&appid=" + apikey;
  xhr.open("GET", url);
  xhr.send(data);
}

// Рабочие места. Древья
const workPlaceTree = document.getElementById('workplace-tree');
const placeitemsTree = document.getElementById('placeitems-tree');

let zTreeObj;

const zTreeHandler = () => {

  function myOnClick(event, treeId, treeNode) {
    alert(treeNode.id + ", " + treeNode.name);
  }

  // zTree конфигурация, изучите API документацию (детали настройки)
  const settingWorktree = {
    callback: {
      onClick: myOnClick
    },
    data: {
      key: {
        title: "id"
      },
      render: function (title, treeNode) {
        return title + treeNode.id;
      }
    }
  };

  const settingPlaceitems = {};

  let workplacesdata = {
    module: "workplaces",
    tree: "workplaces"
  };

  let placeitemsdata = {
    module: "workplaces",
    tree: "placeitems"
  };

  let test = {module: "workplaces"};

// zTree data attributes, refer to the API documentation (treeNode data details)

  /*const workPlaceStructure = [
    {
      id: "01_00",
      name: "Сафоново",
      open: true,
      icon: "../../assets/img/icons/building.png",
      children: [
        {
          id: "01_01",
          name: "1 этаж",
          icon: "../../assets/img/icons/floor.png",
          children: [
            {
              id: "01_03",
              name: "Каб. №8",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
              children: [
                {
                  id: "02_01",
                  name: "Проход каб. 8",
                  icon: "../../assets/img/icons/door.png",
                  isParent: true,
                  children: [
                    {
                      id: "02_01",
                      name: "АРМ 1",
                      icon: "../../assets/img/icons/desktop.png",
                      isParent: false,
                    },
                    {
                      id: "02_01",
                      name: "АРМ 2",
                      icon: "../../assets/img/icons/desktop.png",
                      isParent: false,
                    }
                  ]
                },
                {
                  id: "02_01",
                  name: "АРМ 1",
                  icon: "../../assets/img/icons/desktop.png",
                  isParent: false,
                },
                {
                  id: "02_01",
                  name: "АРМ 1",
                  icon: "../../assets/img/icons/desktop.png",
                  isParent: false,
                }
              ]
            },
            {
              id: "01_04",
              name: "Каб. №9",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "01_05",
              name: "Каб. №10",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "01_06",
              name: "Каб. №11",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "01_07",
              name: "Каб. №12",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "01_08",
              name: "Каб. №13",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "01_09",
              name: "Каб. №14",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "01_10",
              name: "Каб. №15",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "01_11",
              name: "Каб. №16",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "01_12",
              name: "Зал с/з. №4",
              icon: "../../assets/img/icons/balance.png",
              isParent: true,
              children: [
                {
                  id: "01_14",
                  name: "Совещ. комн. зала № 4",
                  icon: "../../assets/img/icons/door.png",
                  isParent: true,
                }
              ]
            },
            {
              id: "01_13",
              name: "Зал с/з. №5",
              icon: "../../assets/img/icons/balance.png",
              isParent: true,
              children: [
                {
                  id: "01_15",
                  name: "Совещ. комн. зала № 5",
                  icon: "../../assets/img/icons/door.png",
                  isParent: true,
                }
              ]
            },
            {
              id: "01_17",
              name: "Серверная",
              icon: "../../assets/img/icons/servers.png",
              isParent: true,
            },
            {
              id: "01_18",
              name: "Коридор 1 этаж",
              icon: "../../assets/img/icons/node.png",
              isParent: true,
            }
          ]
        },
        {
          id: "01_02",
          name: "2 этаж",
          icon: "../../assets/img/icons/floor.png",
          isParent: true,
          children: [
            {
              id: "02_03",
              name: "Каб. №1",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "02_04",
              name: "Каб. №2",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "02_05",
              name: "Каб. №3",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "02_06",
              name: "Каб. №4",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "02_07",
              name: "Каб. №5",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "02_08",
              name: "Каб. №6",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "02_09",
              name: "Каб. №7",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "02_10",
              name: "Зал с/з. №1",
              icon: "../../assets/img/icons/balance.png",
              isParent: true,
            },
            {
              id: "02_11",
              name: "Зал с/з. №2",
              icon: "../../assets/img/icons/balance.png",
              isParent: true,
              children: [
                {
                  id: "02_15",
                  name: "Совещ. комн. зала № 2",
                  icon: "../../assets/img/icons/door.png",
                  isParent: true,
                }
              ]
            },
            {
              id: "02_12",
              name: "Зал с/з. №3",
              icon: "../../assets/img/icons/balance.png",
              isParent: true,
              children: [
                {
                  id: "02_15",
                  name: "Совещ. комн. зала № 3",
                  icon: "../../assets/img/icons/door.png",
                  isParent: true,
                }
              ]
            },
            {
              id: "02_18",
              name: "Коридор 2 этаж",
              icon: "../../assets/img/icons/node.png",
              isParent: true,
            },
            {
              id: "02_19",
              name: "Лестничная площадка 2 этаж",
              icon: "../../assets/img/icons/node.png",
              isParent: true,
            }
          ]

        },
        {
          id: "01_03",
          name: "Подвал",
          icon: "../../assets/img/icons/floor.png",
          isParent: true,
        }
      ]
    },
    {
      id: "02_00",
      name: "Холм-Жирки",
      open: true,
      icon: "../../assets/img/icons/building-small.png",
      isParent: true,
      children: [
        {
          id: "02_01",
          name: "1 этаж",
          icon: "../../assets/img/icons/floor.png",
          isParent: true,
        },
        {
          id: "02_02",
          name: "2 этаж",
          icon: "../../assets/img/icons/floor.png",
          isParent: true,
        }
      ]
    }
  ];*/

  const placeitemsStructure = [
    {
      id: "01",
      name: "Устройства",
      open: true,
      icon: "../../assets/img/icons/computer.png",
      isParent: true,
      children: [
        {
          id: "01_01",
          name: "Комплект рабочей станции",
          icon: "../../assets/img/icons/computer.png",
          open: true,
          isParent: true,
          children: [
            {
              id: "01_01",
              name: "Системный блок OLDI",
              icon: "../../assets/img/icons/compcase.png",
              isParent: true,
              children: [
                {
                  id: "01_01",
                  name: "Корпус InWin",
                  icon: "../../assets/img/icons/compcase.png",
                  isParent: false,
                },
                {
                  id: "01_01",
                  name: "Блок питания InWin",
                  icon: "../../assets/img/icons/computer.png",
                  isParent: false,
                },
                {
                  id: "01_01",
                  name: "Материнская плата Gigbyte",
                  icon: "../../assets/img/icons/motherboard.png",
                  isParent: false,
                },
                {
                  id: "01_01",
                  name: "Процессор Intel Core2Duo 2800",
                  icon: "../../assets/img/icons/processor.png",
                  isParent: false,
                },
                {
                  id: "01_01",
                  name: "Кулер для процессора Cooler Master",
                  icon: "../../assets/img/icons/computer.png",
                  isParent: false,
                },
                {
                  id: "01_01",
                  name: "Модуль памяти Kingston DDR2 1Gb",
                  icon: "../../assets/img/icons/memory.png",
                  isParent: false,
                },
                {
                  id: "01_01",
                  name: "Модуль памяти Kingston DDR2 1Gb",
                  icon: "../../assets/img/icons/memory.png",
                  isParent: false,
                },
                {
                  id: "01_01",
                  name: "Жесткий диск Western Digital 160Gb",
                  icon: "../../assets/img/icons/hdd.png",
                  isParent: false,
                },
                {
                  id: "01_01",
                  name: "DVD-RAM Pioneer DRW-2200 BK",
                  icon: "../../assets/img/icons/drive-disc.png",
                  isParent: false,
                },
              ]
            },
            {
              id: "01_01",
              name: "Монитор Acer L1620",
              icon: "../../assets/img/icons/monitor.png",
              isParent: false,
            },
            {
              id: "01_01",
              name: "Звуковые колонки Genius G-200",
              icon: "../../assets/img/icons/speaker.png",
              isParent: false,
            },
            {
              id: "01_01",
              name: "Клавиатура Genius BX-200",
              icon: "../../assets/img/icons/keyboard-full.png",
              isParent: false,
            },
            {
              id: "01_01",
              name: "Мышь Genius N-100",
              icon: "../../assets/img/icons/mouse.png",
              isParent: false,
            },
            {
              id: "01_01",
              name: "Принтер Samsung ML-2160",
              icon: "../../assets/img/icons/printer.png",
              isParent: true,
              children: [
                {
                  id: "01_01",
                  name: "Картридж DT-101",
                  icon: "../../assets/img/icons/computer.png",
                  isParent: false,
                },
              ]
            },
          ]
        },
      ]
    },
    {
      id: "02",
      name: "Программное обеспечение",
      open: true,
      icon: "../../assets/img/icons/windows.png",
      isParent: true,
      children: [
        {
          id: "01_01",
          name: "ОС Windows 10 Professional x64",
          icon: "../../assets/img/icons/windows.png",
          isParent: false,
        },
      ]
    },
  ];

  const workPlaceStructure = () => {
    ajax_send("GET", "pages/admin/ajax.php", test, "json", result => {
      $.fn.zTree.init($("#workplace-tree"), settingWorktree, result);
    });
  }

  workPlaceStructure();

  //zTreeObj = $.fn.zTree.init($("#workplace-tree"), setting, workPlaceStructure);
  zTreeObj = $.fn.zTree.init($("#placeitems-tree"), settingPlaceitems, placeitemsStructure);

}

/* Статистика - Графики */
const statCards = document.querySelectorAll('.stat-card');
const statFilters = document.querySelectorAll('.stat-filters .input-filter');

// Определение функции, запускающейся при полной загрузке страницы
const init = () => {
  /* Фильтры в стат графиках */
  if (statCards && statFilters) {

    statFilters.forEach((statFilter) => {
      statFilter.addEventListener('click', () => {
        if (statFilter.checked) {
          for (let i = 0; i < statCards.length; i++) {
            if (statCards[i].classList.contains(statFilter.dataset.value)) {
              statCards[i].classList.remove('d-none');

              const chart = statCards[i].querySelector('.apexchart');
              apexChartInit(chart, chart.dataset.chartName);
            }
          }
        } else {
          for (let i = 0; i < statCards.length; i++) {
            if (statCards[i].classList.contains(statFilter.dataset.value)) {
              statCards[i].classList.add('d-none');
            }
          }
        }
      });
    });
  }

  /* Возвращает текущий день, месяц и день недели в элементы с классами today-group-day,
*  today-group-month, today-group-dayw */
  if (document.querySelector('.today-group')) {
    document.querySelector(".today-group-dayw").innerHTML = moment().tz('Europe/Moscow').format('dddd');
    document.querySelector(".today-group-day").innerHTML = moment().tz('Europe/Moscow').format('D');
    document.querySelector(".today-group-month").innerHTML = moment().tz('Europe/Moscow').format('MMMM');

  }

  // Обновление каждые 5 минут
  setInterval(() => {

    // Погода
    if (document.querySelector('.weather-info')) {
      weatherHandler();
    }

    /* Возвращает текущий день, месяц и день недели в элементы с классами today-group-day,
*  today-group-month, today-group-dayw */
    if (document.querySelector('.today-group')) {
      document.querySelector(".today-group-dayw").innerHTML = moment().tz('Europe/Moscow').format('dddd');
      document.querySelector(".today-group-day").innerHTML = moment().tz('Europe/Moscow').format('D');
      document.querySelector(".today-group-month").innerHTML = moment().tz('Europe/Moscow').format('MMMM');

    }

  }, 300000);

  if (sidebarwrapper.dataset.sidebarWidth === "wide") {
    sidebartogglbutton.querySelector('i').classList.add('mdi-crosshairs-gps');
  }
  if (sidebarwrapper.dataset.sidebarWidth === "narrow") {
    sidebartogglbutton.querySelector('i').classList.add('mdi-crosshairs');
  }

  // Прослушивание прокручивания .main-content
  if (backtotopbutton) {
    maincontent.addEventListener('scroll', maincontentscroll);
    // Прослушивание нажатия кнопки .back-to-top
    backtotopbutton.addEventListener('click', buttonscrolltotopHandler);
  }

  // Прослушивание нажатия кнопки .sidebar-toggle-button
  if (sidebartogglbutton && sidebarwrapper) {
    sidebartogglbutton.addEventListener('click', (evt) => {
      buttonsidebartoggleHandler(evt);
    });
  }

  // Прослушивание нажатия кнопки .sidebar-expand-button
  if (sidebarexpbutton) {
    sidebarexpbutton.addEventListener('click', buttonsidebarexpHandler);
  }

  // Прослушивание нажатия кнопки .sidebar-close-button
  if (sidebarclosebutton) {
    sidebarclosebutton.addEventListener('click', buttonsidebarcloseHandler);
  }

  // Разворачивалка сайдбара. Только для ширины экрана 1080 или если установлена настройка
  if (($(window).width() > 1080) || (sidebarwrapper.dataset.sidebarWidth === "narrow")) {
    if (mainsidebar) {
      mainsidebar.addEventListener('mouseenter', sidebarexpandHandler);
      mainsidebar.addEventListener('mouseleave', buttonsidebarcloseHandler);
    }
  }

  // Прослушивание нажатия кнопки .top-search-button-toggle
  if (searchbutton && searchinput && searchclosebtn) {
    searchbutton.addEventListener('click', buttonsearchHandler);
    // Прослушивание нажатия кнопки .top-search-close
    searchclosebtn.addEventListener('click', buttonsearchcloseHandler);
  }

  // Получает имя файла текущей открытой страницы и ищет такое же в ссылках бокового меню,
  // устанавливает класс active открытому пункту или субпункту и его родителю
  if (sidebarnavmenu) {
    sidebarnavmenuHandler();
  }

  // Прогресс бар над хедером
  maincontent.addEventListener('scroll', maincontentscrollHandler);

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

  // Отрисовка модуля календаря
  if (calendarEl) {
    calendmodulehandler(calendarModuleSettings);
  }

  // Отрисовка виджета календаря
  if (minicalendar) {
    minicalendarhandler();
  }

  // Задачи
  if (todowrapper) {
    tasksHandler()
  }

  // Показать/скрыть пароль
  if (showhidepass && passinplist) {
    showhidepass.addEventListener('click', showhidepassHandler);
  }

  // Принадлежность судье
  if (profselect && affselect) {
    profselect.addEventListener('change', profselectHandler);
  }

  // В штате
  if (activeselect && roomselect) {
    activeselect.addEventListener('change', activeselectHandler);
  }

  datatablesHandler();

  // Подсказки
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });

  // Всплывашка с временем отработки php
  if (cookieID === "1") {
    const toastcontainer = document.querySelector('.toasts-container');
    // Удаляем скрытые всплывашки
    const hiddentoasts = toastcontainer.querySelectorAll('.hide');
    if (hiddentoasts) {
      hiddentoasts.forEach((hiddentoast) => {
        toastcontainer.removeChild(hiddentoast);
      });
    }

    const toastscripttime = new bootstrap.Toast(document.querySelector('.toast-script-time'));
    toastscripttime.show();

  }

  // Загрузка телефонной книги
  if (filterGroup && result) {
    filterClickHandler();
  }

  // Инициализация графиков Apex JS
  /*if (apexChartList) {
    apexChartList.forEach((chart) => {
      const chartName = chart.dataset.chartName;
      apexChartInit(chart, chartName);
    });
  }*/

  if (document.querySelector(".apexchart1")) {
    let apexchartVisits = new ApexCharts(document.querySelector(".apexchart1"), apexChartOptions("successLineChart"));
    apexchartVisits.render();
    $.getJSON('api/visits/getVisits.php', function (response) {
      apexchartVisits.updateSeries([{
        name: 'Посещения',
        data: response
      }])
    });
  }

  if (workPlaceTree) {
    zTreeHandler();
  }

  if (tetrwrapper) {
    tetrgame();
  }
};

// Ждем полной загрузки дерева
document.addEventListener("DOMContentLoaded", () => {
  //Отключаем спиннер
  if (spinnerloader) {
    spinnerloaderHandler();
  }
});

// Будет запущено все, что внутри const init
init();

