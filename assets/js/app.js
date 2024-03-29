/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/const.js":
/*!********************************!*\
  !*** ./src/assets/js/const.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLORS": function() { return /* binding */ COLORS; }
/* harmony export */ });
/** Цвета */
const colors = {
  theme: {
    'primary': '#6C5CE8',
    'secondary': '#566577',
    'info': '#1CC8EE',
    'success': '#00B795',
    'danger': '#ea1548',
    'warning': '#F4B740',
    'blue': '#3c64f4',
    'indigo': '#2C3782',
    'pink': '#ff63a5',
    'red': '#ea1548',
    'orange': '#ef630a',
    'yellow': '#F4B740',
    'green': '#00B795',
    'teal': '#01CFC9',
    'cyan': '#1CC8EE',
    'azure': '#1c9aee',
    'gray': '#566577',
    'gray-dark': '#293545',
    'light': '#E5E9F2',
    'lighter': '#eff0f6',
    'dark': '#1F2B3A'
  },
  themeLight: {
    'primary': '#9e92ee',
    'secondary': '#8f98a5',
    'success': '#58cdb8',
    'info': '#6ad8f2',
    'warning': '#f6cd81',
    'danger': '#f06486',
    'dark': '#6c727d',
    'pink': '#fd97c3',
    'blue': '#7f97f6',
    'azure': '#6abbf2',
    'gray-dark': '#798290',
    'indigo': '#747aac',
    'orange': '#f3975e',
    'teal': '#58ddda'
  },
  themeLighter: {
    'primary': '#c1b9f3',
    'secondary': '#b8bdc6',
    'success': '#96ddd2',
    'info': '#a1e4f5',
    'warning': '#f8ddb0',
    'danger': '#f49db3',
    'dark': '#a2a5ad',
    'pink': '#fcbcd8',
    'blue': '#aebcf8',
    'gray-dark': '#abafb9',
    'indigo': '#a8aaca',
    'azure': '#a1d2f5',
    'orange': '#f6bc9a',
    'teal': '#96e7e6'
  },
  themeDark: {
    'primary': '#5148ae',
    'secondary': '#414e5f',
    'success': '#058774',
    'info': '#1993b2',
    'warning': '#b08739',
    'danger': '#a9163e',
    'pink': '#b84d7f',
    'blue': '#2f4db7',
    'indigo': '#242e67',
    'azure': '#1973b2',
    'orange': '#ac4d13',
    'teal': '#069898'
  },
  themeDarker: {
    'primary': '#3a377e',
    'secondary': '#303b4b',
    'success': '#096059',
    'info': '#166781',
    'warning': '#776032',
    'danger': '#731736',
    'pink': '#7c3a60',
    'blue': '#243a83',
    'azure': '#165381',
    'indigo': '#1d2650',
    'orange': '#753a1a',
    'teal': '#0a6a70'
  },
  theme20: {
    'primary': 'rgba(108, 92, 232, 0.2)',
    'secondary': 'rgba(86, 101, 119, 0.2)',
    'success': 'rgba(0, 183, 149, 0.2)',
    'info': 'rgba(28, 200, 238, 0.2)',
    'warning': 'rgba(244, 183, 64, 0.2)',
    'danger': 'rgba(234, 21, 72, 0.2)',
    'dark': 'rgba(31, 43, 58, 0.2)',
    'pink': 'rgba(255, 99, 165, 0.2)',
    'blue': 'rgba(60, 100, 244, 0.2)',
    'cyan': 'rgba(28, 200, 238, 0.2)',
    'gray-dark': 'rgba(52, 67, 87, 0.2)'
  },
  theme50: {
    'primary': 'rgba(108, 92, 232, 0.5)',
    'secondary': 'rgba(86, 101, 119, 0.5)',
    'success': 'rgba(0, 183, 149, 0.5)',
    'info': 'rgba(28, 200, 238, 0.5)',
    'warning': 'rgba(244, 183, 64, 0.5)',
    'danger': 'rgba(234, 21, 72, 0.5)',
    'dark': 'rgba(31, 43, 58, 0.5)',
    'pink': 'rgba(255, 99, 165, 0.5)',
    'blue': 'rgba(60, 100, 244, 0.5)',
    'white': 'rgba(250, 247, 250, 0.5)',
    'gray-dark': 'rgba(52, 67, 87, 0.5)',
    'azure': 'rgba(28, 154, 238, 0.5)'
  },
  black: '#1F2B3A',
  white: '#faf7fa',
  transparent: 'transparent'
};
const COLORS = colors;

/***/ }),

/***/ "./src/assets/js/globalfunc.js":
/*!*************************************!*\
  !*** ./src/assets/js/globalfunc.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toast": function() { return /* binding */ Toast; },
/* harmony export */   "ajax_send": function() { return /* binding */ ajax_send; },
/* harmony export */   "cookieID": function() { return /* binding */ cookieID; },
/* harmony export */   "getCookie": function() { return /* binding */ getCookie; },
/* harmony export */   "selectedCheckboxes": function() { return /* binding */ selectedCheckboxes; },
/* harmony export */   "showBsToast": function() { return /* binding */ showBsToast; },
/* harmony export */   "toastContainer": function() { return /* binding */ toastContainer; }
/* harmony export */ });
/** ГЛОБАЛЬНЫЕ ФУНКЦИИ */
const toastContainer = document.querySelector('.toasts-container');
/**
 * Сформировать массив из значений чекбоксов в группе
 * @param allInputs - группа элементов
 * @param mode - режим: "selected" - выбранные, "all" - все
 * @returns {*[]} - массив из value чекбоксов
 */

function selectedCheckboxes(allInputs, mode) {
  switch (mode) {
    case "selected":
      return Array.from(allInputs).filter(input => input.checked).map(c => c.value.toLowerCase());

    case "all":
      return Array.from(allInputs).map(c => c.value.toLowerCase());
  }
}
/**
 * Добавить всплывашку в разметку, скрыть показанные всплывашки, показать всплывашку
 * @param toast - HTML-разметка всплывашки для вставки в контейнер, если в разметке уже есть, то пустое
 * @param container - контейнер для всплывашек
 * @param toastClass - класс всплывашки, по которому ее будем выводить, в кавычках и с точкой
 * @param toastParams - параметры для всплывашки
 */


function showBsToast(toast, container, toastClass, toastParams) {
  /** Удаляем скрытые всплывашки */
  const hiddenToasts = container.querySelectorAll('.hide');

  if (hiddenToasts) {
    hiddenToasts.forEach(hiddenToast => {
      container.removeChild(hiddenToast);
    });
  }

  container.insertAdjacentHTML('beforeend', toast);
  const toastElList = [].slice.call(document.querySelectorAll('.toast' + toastClass));
  toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl, toastParams).show();
  });
}
/**
 * Всплывашки
 */


class Toast {
  /**
   * @param header - текст заголовка всплывашки
   * @param text - текст
   * @param time - время в виде строки
   * @param type - тип: toast - обычные, errorToast - ошибки, не закрываются автоматически, miniToast - мини, цветные, без заголовка
   * @param color - цвет
   */
  constructor(header, text, time, type, color) {
    this.header = header;
    this.text = text;
    this.time = time;
    this.color = color;
    this.toastParam = {
      autohide: true
    };

    switch (type) {
      case "toast":
        this.class = "toast-info";
        this.toastElement = '<div class="toast ' + this.class + ' fade" role="alert" aria-live="assertive" aria-atomic="true"><div class="toast-header"><i class="mdi mdi-message-alert-outline"></i><strong class="me-auto">' + this.header + '</strong><small class="text-muted">' + this.time + '</small><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button></div><div class="toast-body">' + this.text + '</div></div>';
        break;

      case "errorToast":
        this.class = "toast-error";
        this.toastElement = '<div class="toast ' + this.class + ' fade" role="alert" aria-live="assertive" aria-atomic="true"><div class="toast-header"><i class="mdi mdi-alert text-danger"></i><strong class="me-auto text-danger">' + this.header + '</strong><small class="text-muted">' + this.time + '</small><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button></div><div class="toast-body">' + this.text + '</div></div>';
        this.toastParam = {
          autohide: false
        };
        break;

      case "miniToast":
        this.class = "toast-info";
        this.toastElement = '<div class="toast ' + this.class + ' align-items-center bg-' + this.color + '-lighter" role="alert" aria-live="assertive" aria-atomic="true"><div class="d-flex"><div class="toast-body">' + this.text + '</div><button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Закрыть"></button></div></div>';
        break;
    }
  }
  /**
   * Показывает всплывашки
   */


  show() {
    showBsToast(this.toastElement, toastContainer, "." + this.class, this.toastParam);
  }

}
/**
 * Получение Cookie
 * @param name
 * @returns {string|null}
 */


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
/**
 * ID пользователя
 * @type {string|null}
 */


const cookieID = getCookie('aut[id]');
const jwtKey = getCookie('aut[jwt]');
/**
 * Ajax. Передача GET и POST запросов
 * @param method - POST или GET
 * @param url - адрес
 * @param parameters - параметры get запроса или отсылаемое тело POST
 * @param datatype
 * @param callback - в какую функцию передать результат
 * @param auth - bool авторизация да / нет
 */
// FIXME переделать на fetch

const ajax_send = (method, url, parameters, datatype, callback, auth) => {
  let xhr = new XMLHttpRequest();
  const httpStatus = {
    0: "Не подключено. Проверьте сеть",
    404: "[404] Запрашиваемая страница не найдена",
    500: "[500] Внутренняя ошибка сервера",
    504: "[504] Тайм-аут соединения с сервером"
  };

  switch (method) {
    case "GET":
      let queryString;

      if (parameters !== null) {
        if (typeof parameters === 'object' && !Array.isArray(parameters)) {
          queryString = Object.keys(parameters).map(key => key + '=' + parameters[key]).join('&');
        } else {
          queryString = parameters;
        }
      } else {
        queryString = null;
      }

      xhr.open(method, url + "?" + queryString, true);
      xhr.setRequestHeader('Accept', 'application/json');
      auth === true ? xhr.setRequestHeader('Authorization', `Bearer ${jwtKey}`) : null;
      xhr.send(null);
      break;

    case "POST":
      xhr.open(method, url, true);
      xhr.setRequestHeader('Accept', 'application/json');
      auth =  true ? xhr.setRequestHeader('Authorization', `Bearer ${jwtKey}`) : 0;
      xhr.send(parameters);
      break;
  }

  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) {
      return;
    }

    if (xhr.status === 200) {
      let result;

      if (method === "GET") {
        if (datatype === "json") {
          result = typeof xhr.response !== "string" ? JSON.stringify(xhr.response) : xhr.response;

          try {
            JSON.parse(xhr.response);
            result = JSON.parse(xhr.response);
            callback(result);
          } catch (e) {
            new Toast("Ошибка", 'Ошибка обработки данных: ' + e + 'Полученные данные: ' + xhr.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'), "errorToast", "").show();
          }
        } else if (datatype === "text") {
          callback(xhr.responseText);
        }
      }

      if (method === "POST") {
        if (!xhr.response) {
          callback('null');
        } else {
          new Toast("Ошибка", xhr.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'), "errorToast", "").show();
        }
      }
    } else if (xhr.status === 0 || xhr.status === 404 || xhr.status === 500 || xhr.status === 504) {
      new Toast(httpStatus[xhr.status], xhr.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'), "errorToast", "").show();
    }
  };
};



/***/ }),

/***/ "./src/assets/js/modules/apexchart.js":
/*!********************************************!*\
  !*** ./src/assets/js/modules/apexchart.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/assets/js/const.js");
/**
 * Apex Charts
 */


function LineChartBasic(name, data, color, categories) {
  this.series = [{
    name: name,
    data: data
  }];
  this.chart = {
    height: 350,
    type: 'area'
  };
  this.colors = [_const__WEBPACK_IMPORTED_MODULE_0__.COLORS.theme[color]];
  this.dataLabels = {
    enabled: false
  };
  this.stroke = {
    curve: 'smooth'
  };
  this.fill = {
    type: 'gradient',
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      gradientToColors: [_const__WEBPACK_IMPORTED_MODULE_0__.COLORS.themeLighter[color], _const__WEBPACK_IMPORTED_MODULE_0__.COLORS.theme[color]],
      opacityFrom: 0.7,
      opacityTo: 0.55,
      stops: [0, 80, 100]
    }
  };
  this.xaxis = {
    categories: categories
  };
  this.tooltip = {
    x: {
      show: false
    }
  };
}

function LineChartWithMarkers(name, data, color, categories, annotations) {
  this.series = [{
    name: name,
    data: data
  }];
  this.chart = {
    height: 350,
    type: 'area'
  };
  this.annotations = annotations;
  this.colors = [_const__WEBPACK_IMPORTED_MODULE_0__.COLORS.theme[color]];
  this.dataLabels = {
    enabled: false
  };
  this.stroke = {
    curve: 'smooth'
  };
  this.fill = {
    type: 'gradient',
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      gradientToColors: [_const__WEBPACK_IMPORTED_MODULE_0__.COLORS.themeLighter[color], _const__WEBPACK_IMPORTED_MODULE_0__.COLORS.theme[color]],
      opacityFrom: 0.7,
      opacityTo: 0.55,
      stops: [0, 80, 100]
    }
  };
  this.xaxis = {
    categories: categories
  };
  this.tooltip = {
    x: {
      show: false
    }
  };
}

function LineChartSimple(name, data, color) {
  this.series = [{
    name: name,
    data: data
  }];
  this.chart = {
    height: 150,
    type: 'line',
    toolbar: {
      show: false
    }
  };
  this.grid = {
    show: false
  };
  this.legend = {
    show: false
  };
  this.colors = [_const__WEBPACK_IMPORTED_MODULE_0__.COLORS.theme[color]];
  this.dataLabels = {
    enabled: false
  };
  this.stroke = {
    width: 3,
    curve: 'smooth'
  };
  this.noData = {
    text: 'Загрузка...'
  };
  this.yaxis = {
    show: false,
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    }
  };
  this.xaxis = {
    show: false,
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    }
  };
}
/**
 *
 * @param chartname
 * @returns {{dataLabels: {enabled: boolean}, xaxis: {categories: number[]}, series: [{data: number[], name: string}], tooltip: {x: {show: boolean}}, fill: {gradient: {inverseColors: boolean, gradientToColors: (string)[], shade: string, stops: number[], type: string, opacityTo: number, opacityFrom: number}, type: string}, chart: {type: string, height: number}, stroke: {curve: string}, colors: string[]}|{dataLabels: {enabled: boolean}, xaxis: {categories: number[]}, series: [{data: number[], name: string}], tooltip: {x: {show: boolean}}, annotations: {xaxis: [{fillColor: string, x: number, x2: number, label: {borderColor: string, offsetY: number, style: {color: string, background: string}, text: string}, opacity: number},{x: number, label: {borderColor: string, style: {color: string, background: string}, text: string}}], yaxis: [{borderColor: string, y: number, label: {borderColor: string, style: {color: string, background: string}, text: string}}]}, fill: {gradient: {inverseColors: boolean, gradientToColors: (string)[], shade: string, stops: number[], type: string, opacityTo: number, opacityFrom: number}, type: string}, chart: {type: string, height: number}, stroke: {curve: string}, colors: string[]}|{dataLabels: {enabled: boolean}, xaxis: {categories: number[]}, series: [{data: number[], name: string}], tooltip: {x: {show: boolean}}, fill: {gradient: {inverseColors: boolean, gradientToColors: (*|string)[], shade: string, stops: number[], type: string, opacityTo: number, opacityFrom: number}, type: string}, chart: {type: string, height: number}, stroke: {curve: string}, colors: string[]}|{dataLabels: {enabled: boolean}, grid: {show: boolean}, legend: {show: boolean}, series: *[], noData: {text: string}, chart: {toolbar: {show: boolean}, type: string, height: number}, stroke: {curve: string, width: number}, yaxis: {show: boolean, axisBorder: {show: boolean}, labels: {show: boolean}}, colors: string[]}}
 */


const apexChartOptions = {
  safpeopleChart: new LineChartBasic('Население г. Сафоново', [43500, 46100, 45273, 44444, 43845, 43477, 43145, 42707, 42147, 41510, 41138, 40537], 'secondary', [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]),
  smolOblpeopleChart: new LineChartBasic('Население Смоленской области', [993018, 982887, 980482, 975188, 967896, 964791, 958630, 953201, 949348, 942363, 934889, 921127], 'secondary', [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]),
  smolOblworkpeopleChart: new LineChartBasic('Трудоспособное население Смоленской области', [633809, 596862, 627128, 625958, 593611, 615842, 607983, 586273, 598980, 587725, 587237], 'secondary', [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]),
  smolOblnoworkChart: new LineChartBasic('Количество безработных в Смоленской области, тыс. человек', [40.8, 41.5, 30.9, 28.1, 26.9, 32.8, 31.4, 29.8, 26.2, 25.3, 25.3], 'secondary', [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]),
  postoutboxChart: new LineChartBasic('Исходящая почта', [11610, 29513, 28845, 30240, 23662, 36230, 41202, 37862, 36211, 36859, 34827, 38381], 'primary', [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]),
  emailoutboxChart: new LineChartBasic('Исходящая эл. почта', [1810, 3170, 3959], 'primary', [2019, 2020, 2021]),
  postinboxChart: new LineChartBasic('Входящая почта', [4147, 9372, 12395, 12226, 11378, 11481, 11418, 12372, 11721, 11917, 12308, 15209], 'green', [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]),
  emailinboxChart: new LineChartBasic('Входящая эл. почта', [6489, 8384, 10450], 'green', [2019, 2020, 2021]),
  gcaseChart: new LineChartBasic('Гражданские дела', [1777, 1935, 2108, 2892, 2784, 2593, 2454, 2145, 1785, 1388, 1587, 1893], 'red', [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]),
  gcaseOblChart: new LineChartBasic('Гражданские дела (область)', [30095, 28470, 31392, 32393, 34753, 33232, 31409, 21203, 24391, 18543, 23220, 24205], 'red', [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]),
  g1caseChart: new LineChartBasic('Гражданские дела ап. инстанции', [45, 62, 43, 60, 58, 57, 42, 35, 51, 68, 58, 49], 'orange', [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]),
  admcaseChart: new LineChartBasic('Дела об адм. правонарушениях', [30, 25, 33, 1096, 1044, 844, 817, 882, 695, 467, 382, 1157], 'blue', [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]),
  admcaseOblChart: new LineChartBasic('Дела об адм. правонарушениях (область)', [1487, 1334, 1315, 6150, 5856, 5316, 5080, 5352, 5232, 4805, 6768, 12829], 'blue', [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]),
  adm1caseChart: new LineChartBasic('Жалобы по адм. делам', [0, 0, 0, 0, 166, 204, 205, 198, 145, 138, 123, 96], 'teal', [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]),
  ucaseChart: new LineChartBasic('Уголовные дела', [275, 366, 364, 294, 360, 373, 254, 214, 282, 251, 240, 297], 'yellow', [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]),
  ucaseOblChart: new LineChartBasic('Уголовные дела (область)', [4124, 4038, 3696, 3257, 3799, 3563, 3210, 2217, 3061, 3626, 3713, 3636], 'yellow', [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]),
  u1caseChart: new LineChartBasic('Уголовные дела ап. инстанции', [15, 30, 17, 17, 13, 8, 14, 9, 9, 6, 13, 9], 'azure', [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]),
  mucaseChart: new LineChartBasic('Материалы в порядке уг. производства, всего', [545, 3440, 2634, 1662, 1232, 1852, 1926, 1604, 2216, 1564, 1494, 1157], 'cyan', [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]),
  eosChart: new LineChartBasic('Обращения, без исковых', [87, 230, 423, 624], 'primary', [2018, 2019, 2020, 2021]),
  eosgcaseChart: new LineChartBasic('Исковые заявления', [21, 43, 35, 128], 'green', [2018, 2019, 2020, 2021]),
  inflationChart: new LineChartWithMarkers(
  /** https://уровень-инфляции.рф/%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8B-%D0%B8%D0%BD%D1%84%D0%BB%D1%8F%D1%86%D0%B8%D0%B8 */
  'Уровень инфляции в России', [8.78, 6.10, 6.58, 6.45, 11.36, 12.91, 5.38, 2.52, 4.27, 3.05, 4.91, 8.39], 'primary', [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021], {
    yaxis: [{
      y: 4,
      borderColor: '#00B795',
      label: {
        borderColor: '#00B795',
        style: {
          color: '#FFFFFF',
          background: '#00B795'
        },
        text: 'Оптимальный уровень'
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
          background: '#ef630a'
        },
        offsetY: -10,
        text: 'Валютный кризис'
      }
    }, {
      x: 2020,
      label: {
        borderColor: '#ef630a',
        style: {
          color: '#FFFFFF',
          background: '#ef630a'
        },
        text: 'Рецессия COVID-19'
      }
    }]
  }),

  /** Рефералы */
  successLineChart: new LineChartSimple('Посещения', [], 'success')
};

const apexChartInit = (chart, chartName) => {
  const apexChart = new ApexCharts(chart, apexChartOptions[chartName]);
  apexChart.render();
  apexChart.updateSeries(apexChartOptions[chartName].series);
};
/** Статистика - Графики */


const statCards = document.querySelectorAll('.stat-card');
const statFilters = document.querySelectorAll('.stat-filters .input-filter');
/** Ждем полной загрузки дерева */

document.addEventListener("DOMContentLoaded", () => {
  /** Фильтры в стат графиках */
  if (statCards && statFilters) {
    statFilters.forEach(statFilter => {
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

  if (document.querySelector(".apexchart1")) {
    let apexchartVisits = new ApexCharts(document.querySelector(".apexchart1"), apexChartOptions['successLineChart']);
    apexchartVisits.render();
    fetch('pages/admin/visits.php').then(r => r);
    fetch('api/visits/getVisits.php').then(response => response.json()).then(res => apexchartVisits.updateSeries([{
      data: res
    }]));
  }
});

/***/ }),

/***/ "./src/assets/js/modules/certificatework.js":
/*!**************************************************!*\
  !*** ./src/assets/js/modules/certificatework.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globalfunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalfunc */ "./src/assets/js/globalfunc.js");

/** Справка по судьям */

/** @type {HTMLButtonElement} Кнопка Сформировать */

const certBtn = document.querySelector('.cert-get');
/** Получить квартал и год из селекта */

function certBtnHandler() {
  const value = document.querySelector('.cert-select');
  const year = $(value).find(':selected').parent().attr('label');
  let data = {
    quarter: value.value,
    year: year
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
    }) => `<tr>
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


  (0,_globalfunc__WEBPACK_IMPORTED_MODULE_0__.ajax_send)("GET", "api/certificatework/getCertificateWork.php", data, "json", response => {
    createTable(response);
  }, true);
}
/** Прослушиватель нажатия кнопки Сформировать справки по судьям */


if (certBtn) {
  certBtn.addEventListener('click', function () {
    certBtnHandler();
  });
}

/***/ }),

/***/ "./src/assets/js/modules/datatables.js":
/*!*********************************************!*\
  !*** ./src/assets/js/modules/datatables.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "datatablesHandler": function() { return /* binding */ datatablesHandler; }
/* harmony export */ });
/** Datatables */
const datatablesHandler = () => {
  const colspan = $('td[colspan]').not('[colspan=1]');
  /** colspan.prop("colSpan")  получает кол-во colspan */

  colspan.after('<td style="display: none;"></td>');
  /** Для таблиц с сортировкой */

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
        "amPm": ["AM", "PM"]
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
  /** Для таблиц без сортировки */

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
        "amPm": ["AM", "PM"]
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
        "amPm": ["AM", "PM"]
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
};
/** Ждем полной загрузки дерева */


document.addEventListener("DOMContentLoaded", datatablesHandler);


/***/ }),

/***/ "./src/assets/js/modules/faq.js":
/*!**************************************!*\
  !*** ./src/assets/js/modules/faq.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datatables */ "./src/assets/js/modules/datatables.js");

/** Содержимое страницы FAQ */

const faqcard = document.querySelector('.faq-categories-doc');
const cont = document.querySelector('.faq-body');
/** Индикатор загрузки для страницы FAQ */

const loading = document.querySelector('.loading-spinner-faq');
/** Ссылки FAQ */

const faqlinks = document.querySelectorAll('.faq-category-subitem a');
/** FAQ акордеон в группе */

const faqaccordeon = document.querySelector('.faq-categories-list');

const faqlinkClickHandler = evt => {
  const link = evt.target.closest('a');

  if (!link) {
    return;
  }

  const datalink = link.dataset.link;
  /** Отображает тело карточки */

  faqcard.style.display = 'block';
  /** В странице FAQ, показывает индикатор загрузки, пока не прогрузится содержимое страницы */

  loading.style.display = 'inline-block';
  /** создание ajax объекта */

  let Http = new XMLHttpRequest();
  /** Перебираем запросы HTTP */

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
    Http.open('GET', datalink, true);

    Http.onreadystatechange = () => {
      if (Http.readyState === 4 && Http.status === 200) {
        cont.innerHTML = "";
        cont.insertAdjacentHTML('beforeend', Http.responseText);
        (0,_datatables__WEBPACK_IMPORTED_MODULE_0__.datatablesHandler)();
      }
    };

    Http.send(null);
  } else {
    document.location = datalink;
  }
};
/** FAQ аккродеон в группе */


const faqcategoryClickHandler = evt => {
  /** Переключает класс родительского элемента события клик */
  evt.target.parentElement.classList.toggle("active");
};
/** FAQ */


if (faqcard && cont && loading && faqlinks) {
  faqlinks.forEach(faqlink => {
    faqlink.addEventListener('click', evt => {
      faqlinkClickHandler(evt);
    });
  });
}

if (faqaccordeon) {
  const faqcategorys = faqaccordeon.querySelectorAll('.faq-category');
  faqcategorys.forEach(faqcategory => {
    faqcategory.addEventListener('click', evt => {
      faqcategoryClickHandler(evt);
    });
  });
}

/***/ }),

/***/ "./src/assets/js/modules/forms.js":
/*!****************************************!*\
  !*** ./src/assets/js/modules/forms.js ***!
  \****************************************/
/***/ (function() {

/** Селект Профессия */
const profselect = document.getElementById('profession');
/** Селект Принадлежность */

const affselect = document.getElementById('affiliation');
/** Ищет в форме селект с id profession, проверяет, если судья или председатель, то отображает принадлежность судье, если нет, то блокирует и сбрасывает значение */

const profselectHandler = () => {
  if (profselect.options[profselect.selectedIndex].value === '6' || profselect.options[profselect.selectedIndex].value === '7' || profselect.options[profselect.selectedIndex].value === '9') {
    affselect.disabled = false;
  } else {
    affselect.disabled = true;
    affselect.selectedIndex = 0;
  }
};
/** Селект В штате */


const activeselect = document.getElementById('active');
/** Селект Кабинет */

const roomselect = document.getElementById('room');
/** Если не в штате, то блокирует и сбрасывает кабинет */

const activeselectHandler = () => {
  if (activeselect.options[activeselect.selectedIndex].value === '1') {
    roomselect.disabled = false;
  } else {
    roomselect.disabled = true;
    roomselect.selectedIndex = 0;
  }
};
/** Ждем полной загрузки дерева */


document.addEventListener("DOMContentLoaded", () => {
  /** Форма добавления сотрудника. Профессия и активность*/
  profselect && affselect ? profselectHandler() : false;
  activeselect && roomselect ? activeselectHandler() : false;
  /** Принадлежность судье */

  profselect && affselect ? profselect.addEventListener('change', profselectHandler) : false;
  /** В штате */

  activeselect && roomselect ? activeselect.addEventListener('change', activeselectHandler) : false;
});

/***/ }),

/***/ "./src/assets/js/modules/fullcalendar.js":
/*!***********************************************!*\
  !*** ./src/assets/js/modules/fullcalendar.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globalfunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalfunc */ "./src/assets/js/globalfunc.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation */ "./src/assets/js/modules/validation.js");
/** Календарь */


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
  eventClassNames: function ({
    event: calendarEvent
  }) {
    const colorName = calendarsColor[calendarEvent._def.extendedProps.calendar];
    return [
    /** Фоновый цвет событий */
    'fc-event-' + colorName];
  },
  eventMouseEnter: function (event) {
    if (event.event.display !== "background") {
      showPopover(event);
    }
  }
};
/** Цвета для Fullcalendar */

/** Цвета событий, названия менять в разметке, в js менять не надо */

const calendCat = [{
  color: "primary",
  name: "События"
}, {
  color: "success",
  name: "Отпуск"
}, {
  color: "info",
  name: "Дежурство"
}, {
  color: "warning",
  name: "Важно"
}, {
  color: "danger",
  name: "Праздники"
}, {
  color: "pink",
  name: "Категория 1"
}, {
  color: "blue",
  name: "Категория 2"
}, {
  color: "orange",
  name: "Категория 3"
}, {
  color: "teal",
  name: "Категория 4"
}, {
  color: "azure",
  name: "Категория 5"
}];

function araycal() {
  let array = new Map();

  for (let i = 0; i < calendCat.length; i++) {
    array.set(calendCat[i].color, calendCat[i].color);
  }

  return Object.fromEntries(array);
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
  const privCheck = privateinp ? privateinp.checked === true ? 1 : 0 : 0;
  let data = {
    /** С не фиксированной датой не работают повторяющиеся собыия */
    startParam: moment(info.start).tz(calendarModuleSettings.timezone).format('YYYY-MM-DD'),
    endParam: moment(info.end).tz(calendarModuleSettings.timezone).format('YYYY-MM-DD'),
    calendars: filterInput2.length > 0 ? (0,_globalfunc__WEBPACK_IMPORTED_MODULE_0__.selectedCheckboxes)(filterInput2, 'selected') : Object.keys(calendarsColor),
    private: privCheck
  };
  (0,_globalfunc__WEBPACK_IMPORTED_MODULE_0__.ajax_send)("GET", "components/fullcalendar/events.php", data, "json", result => successCallback(result), true);
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
    placement: 'top'
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
      left: 'today'
    },
    eventSources: [fetchEvents],
    eventMouseEnter: settings.eventMouseEnter,
    eventMouseLeave: function () {
      hidePopover();
    }
  });
  calendar.render();
  setInterval(() => {
    calendar.refetchEvents();
  }, 5000);
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
  /** Радио Каждое число месяца */

  const evdmonth = document.getElementById("Radio1");
  /** Радио Последний день месяца */

  const lastdmonth = document.getElementById("month1");
  /** Радио Предоследний рабочий день месяца */

  const prelastdmonth = document.getElementById("month2");
  /** Радио Первый день месяца */

  const firstdmonth = document.getElementById("month3");
  /** Радио Первый рабочий день месяца */

  const firstworkdmonth = document.getElementById("month4");
  /** Радио Последний рабочий день месяца */

  const lastworkdmonth = document.getElementById("month5");
  /** Инпут Закончить после даты */

  const repdateinp = document.getElementById("endrep-date");
  /** Инпут Закончить после повторений */

  const repcountinp = document.getElementById("repcount");
  /** Интервал повторений */

  const daynum = document.getElementById("daynum");
  /** Поле ввода дня для ежемесячного */

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

    repeatSwitch.addEventListener('click', () => repswitch(moment(startDate.value).format(settings.datetimeformat)));
    /** Выбор повторения для дня */

    repparamSwitch.addEventListener('change', () => repparamSwitchHandler(repparamSwitch.options[repparamSwitch.selectedIndex].value));
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
    });

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
        endRepeatDatepicker.setDate('', true);
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

    repdate.addEventListener('click', repDateCheck);
    repcount.addEventListener('click', repCountCheck);
    /** Меняем названия кнопок и заголовка */

    switch (mode) {
      case 'add':
        addEventFormSubmit.textContent = "Добавить";
        cancelBtn.textContent = "Отмена";
        addEventTitle.textContent = "Добавить событие";
        eventForm.addEventListener('submit', addEvent);
        cancelBtn.addEventListener('click', closeAddEvModal);
        deleteWarningMessage.classList.add('d-none');
        break;

      case 'update':
        addEventFormSubmit.textContent = "Обновить";
        cancelBtn.textContent = "Удалить";
        addEventTitle.textContent = "Редактировать событие";
        cancelBtn.addEventListener('click', delEvent);
        eventForm.addEventListener('submit', updateEvent);
        break;
    }

    addDelEventModal.classList.add('show');
    addDelEventModal.style.display = "block";
    const modalBackdrop = document.createElement("div");
    modalBackdrop.setAttribute('class', 'modal-backdrop fade show');
    document.body.appendChild(modalBackdrop);
    (0,_validation__WEBPACK_IMPORTED_MODULE_1__.setValidationListeners)(eventForm, addEventFormSubmit);
    (0,_validation__WEBPACK_IMPORTED_MODULE_1__.validateForm)(eventForm, addEventFormSubmit);
  }
  /**
   * Отметить чекбоксы дней недели по массиву
   * @param array массив дней
   */


  function checkweekdays(array) {
    array.map(currElement => {
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
        array.push(settings.daysForRepeatEvents[index]);
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
    mode === "upd" ? Event.append("id", eventToUpdate.id) : false;
    Event.append("operation", mode);
    Event.append("title", eventTitle.value);
    Event.append("start", moment(startDate.value).format(settings.datetimeformat));
    Event.append("end", moment(endDate.value).format(settings.datetimeformat));
    Event.append("calendar", eventLabel.value);
    Event.append("description", calendarEditor.value);
    Event.append("private", privateSwitch.checked === true ? '1' : '0');
    mode === "add" ? Event.append("user_id", _globalfunc__WEBPACK_IMPORTED_MODULE_0__.cookieID) : false; // только для создания

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

    return Event;
  }
  /** Добавление нового события */


  function addEvent(evt) {
    evt.preventDefault();

    function addSucces(result, title) {
      closeAddEvModal(evt);

      if (result === "null") {
        new _globalfunc__WEBPACK_IMPORTED_MODULE_0__.Toast("", 'Событие ' + title + ' добавлено', "", "miniToast", "success").show();
      }

      calendar.refetchEvents();
    }

    if ((0,_validation__WEBPACK_IMPORTED_MODULE_1__.validateForm)(eventForm, addEventFormSubmit) === true) {
      (0,_globalfunc__WEBPACK_IMPORTED_MODULE_0__.ajax_send)("POST", "components/fullcalendar/ajax.php", getEventFormData("add"), "json", result => addSucces(result, title), true);
    }

    let title = eventTitle.value;
  }
  /**
   * Обновление события
   */


  const updateEvent = evt => {
    let title = eventTitle.value;
    evt.preventDefault();

    function updSucces(result, title) {
      closeAddEvModal(evt);

      if (result === "null") {
        new _globalfunc__WEBPACK_IMPORTED_MODULE_0__.Toast("", 'Событие ' + title + ' обновлено', "", "miniToast", "info").show();
      }

      calendar.refetchEvents();
    }

    if ((0,_validation__WEBPACK_IMPORTED_MODULE_1__.validateForm)(eventForm, addEventFormSubmit) === true) {
      if (eventToUpdate.extendedProps.user_id === _globalfunc__WEBPACK_IMPORTED_MODULE_0__.cookieID || JSON.stringify(eventToUpdate.extendedProps.user_id) === _globalfunc__WEBPACK_IMPORTED_MODULE_0__.cookieID) {
        (0,_globalfunc__WEBPACK_IMPORTED_MODULE_0__.ajax_send)("POST", "components/fullcalendar/ajax.php", getEventFormData("upd"), "json", result => updSucces(result, title), true);
      } else {
        new _globalfunc__WEBPACK_IMPORTED_MODULE_0__.Toast("", 'Вы не имеете прав на правку события ' + title, "", "miniToast", "danger").show();
      }
    }
  };
  /** Удалить событие */


  const delEvent = evt => {
    evt.preventDefault();
    /**
     * Скрыть модал. Сбросить инпуты. Показать всплывашку что удалено. Обновить события
     * @param result результат отправки запроса на сервер
     * @param title название удаляемого события
     */

    function delSucces(result, title) {
      closeAddEvModal(evt);

      if (result === "null") {
        new _globalfunc__WEBPACK_IMPORTED_MODULE_0__.Toast("", 'Событие ' + title + ' удалено', "", "miniToast", "danger").show();
      }

      calendar.refetchEvents();
    }

    let Event = new FormData();
    Event.append("operation", "del");
    Event.append("id", eventToUpdate.id);
    let title = eventToUpdate.title;

    if (eventToUpdate.extendedProps.user_id === _globalfunc__WEBPACK_IMPORTED_MODULE_0__.cookieID || JSON.stringify(eventToUpdate.extendedProps.user_id) === _globalfunc__WEBPACK_IMPORTED_MODULE_0__.cookieID) {
      (0,_globalfunc__WEBPACK_IMPORTED_MODULE_0__.ajax_send)("POST", "components/fullcalendar/ajax.php", Event, "json", result => delSucces(result, title), true);
    } else {
      new _globalfunc__WEBPACK_IMPORTED_MODULE_0__.Toast("", 'Вы не имеете прав на удаление события ' + title, "", "miniToast", "danger").show();
    }
  };
  /** Закрытие модала и сброс инпутов */


  const closeAddEvModal = evt => {
    evt.preventDefault();
    hideModal();
    resetValues();
    eventForm.removeEventListener('submit', updateEvent);
    eventForm.removeEventListener('submit', addEvent);
    cancelBtn.removeEventListener('click', delEvent);
    cancelBtn.removeEventListener('click', closeAddEvModal);
    deleteWarningMessage.classList.add('d-none');
  };
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
        break;

      case 'daily-section':
        intervalsection.style.display = "block";
        weeklysection.style.display = "none";
        monthlysection.style.display = "none";
        evdmonth.checked = false;
        daynumlabel2.textContent = 'Каждый';
        daynumlabel1.textContent = 'день';
        daynum.setAttribute('max', '31');
        break;

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
        break;

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
        break;

      case 'yearly-section':
        intervalsection.style.display = "block";
        weeklysection.style.display = "none";
        monthlysection.style.display = "none";
        evdmonth.checked = false;
        daynumlabel2.textContent = 'Каждый';
        daynumlabel1.textContent = 'год';
        daynum.setAttribute('max', '100');
        break;
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
    startDatepicker.setDate(date, true, settings.datetimeformat);
    endDatepicker.setDate(date, true, settings.datetimeformat);
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
          break;

        case '1':
          break;

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

          break;
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
          break;

        case 2:
          repparamSwitch.value = 'weekly-section';
          weeklysection.style.display = "block";
          monthlysection.style.display = "none";
          intervalsection.style.display = "block";
          daynumlabel2.innerHTML = 'Каждую';
          daynumlabel1.innerHTML = 'неделю';
          daynum.setAttribute('max', '53');
          break;

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
          break;

        case 0:
          repparamSwitch.value = 'yearly-section';
          weeklysection.style.display = "none";
          monthlysection.style.display = "none";
          intervalsection.style.display = "block";
          daynumlabel2.innerHTML = 'Каждый';
          daynumlabel1.innerHTML = 'год';
          daynum.setAttribute('max', '100');
          break;

        case null:
          repparamSwitch.value = '';
          break;
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
    event.end !== null ? endDatepicker.setDate(event.end, true, settings.datetimeformat) : endDatepicker.setDate(event.start, true, settings.datetimeformat);
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

      if (eventToUpdate.extendedProps.user_id === _globalfunc__WEBPACK_IMPORTED_MODULE_0__.cookieID || JSON.stringify(eventToUpdate.extendedProps.user_id) === _globalfunc__WEBPACK_IMPORTED_MODULE_0__.cookieID) {
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

    const createItem = ({
      color,
      name
    }) => `<div class="form-check d-flex align-items-center mb-2">
                  <input class="form-check-input input-filter bg-${color} me-1" type="checkbox" id="${color}" name="${color}"
                         data-value="${color}" value="${color}" checked>
                  <label class="form-check-label" for="${color}">${name}</label>
                </div>`;

    const ElementsString = calendCat.map(color => createItem(color)).join('');
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

    return "<span class='bullet bg-" + $(option.element).data('label') + " bullet-sm me-2 ms-2'> " + '</span>' + option.text;
  }
  /**
   * Селект для меток в модале
   */


  function renderOptions() {
    eventLabel.textContent = '';
    const placeholderItem = `<option></option>`;
    eventLabel.insertAdjacentHTML('beforeend', placeholderItem);

    const createItem = ({
      color,
      name
    }) => `<option data-label="${color}" value="${color}">${name}</option>`;

    const ElementsString = calendCat.map(color => createItem(color)).join('');
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
    dateFormat: settings.datepickerformat
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
    dateFormat: settings.datepickerformat
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
    dayMaxEvents: true,

    /** добавляет ссылку "еще", когда очень много событий */
    navLinks: true,

    /** можно нажимть на названия дней/недель для переключения между видами */
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
  }, 5000);

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


    $('[name=dateStart]').next('input').attr("name", "dateStart");
    $('[name=dateEnd]').next('input').attr("name", "dateEnd");
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


  addDelEventModal.addEventListener('hidden.bs.modal', resetValues); // Выбрать все и другие фильтры

  if (document.querySelector(".select-all")) {
    // Фильтр событий
    const calEventFilter = document.querySelector(".calendar-events-filter"); // Чекбокс Все в фильтре

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
    filterInput2.forEach(filterInput => {
      filterInput.addEventListener('click', () => {
        '.input-filter:checked'.length < $(calEventFilter).find('input').length ? $(selectAll).prop('checked', false) : $(selectAll).prop('checked', true);
        calendar.refetchEvents();
      });
    });
  } // Фильтр Только мои


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

/***/ }),

/***/ "./src/assets/js/modules/overlayscrollbar.js":
/*!***************************************************!*\
  !*** ./src/assets/js/modules/overlayscrollbar.js ***!
  \***************************************************/
/***/ (function() {

/** Все элементы, для к-рых нужна прокрутка */
const overlayscrollbar = OverlayScrollbars(document.querySelectorAll(".overlayscrollbar"), {
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

/***/ }),

/***/ "./src/assets/js/modules/phonebook.js":
/*!********************************************!*\
  !*** ./src/assets/js/modules/phonebook.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globalfunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalfunc */ "./src/assets/js/globalfunc.js");


/** Ищем группу фильтров с селектором button-group */

/** Фильтр в телефонном справочнике */

const filterGroup = document.querySelector('.phonebook-filter');
/** Куда будет выводиться результат */

const result = document.getElementById('filter');

const filterClickHandler = () => {
  /** Обнуление строк фильтров - выбранного и пустого */
  let filterItems = filterGroup.querySelectorAll('input[type=checkbox]');
  let selected = (0,_globalfunc__WEBPACK_IMPORTED_MODULE_0__.selectedCheckboxes)(filterItems, 'selected');

  if (selected.length === 0) {
    let data = {
      filter: (0,_globalfunc__WEBPACK_IMPORTED_MODULE_0__.selectedCheckboxes)(filterItems, 'all')
    };
    (0,_globalfunc__WEBPACK_IMPORTED_MODULE_0__.ajax_send)("GET", "components/phonebook/ajax.php", data, "text", response => {
      result.innerHTML = "";
      result.innerHTML = response;
    }, true);
  } else {
    let data = {
      filter: selected
    };
    (0,_globalfunc__WEBPACK_IMPORTED_MODULE_0__.ajax_send)("GET", "components/phonebook/ajax.php", data, "text", response => {
      result.innerHTML = "";
      result.innerHTML = response;
    }, true);
  }
};
/** Слушаем клик по каждому из фильтров телефонной книги */


if (filterGroup && result) {
  /** Ищем в filter-group элементы фильтров checkbox */
  let filterItems = filterGroup.querySelectorAll('input[type=checkbox]');
  filterItems.forEach(function (filter) {
    filter.addEventListener('click', () => {
      filterClickHandler();
    });
  });
}
/** Ждем полной загрузки дерева */


document.addEventListener("DOMContentLoaded", () => {
  /** Загрузка телефонной книги */
  if (filterGroup && result) {
    filterClickHandler();
  }
});

/***/ }),

/***/ "./src/assets/js/modules/proxylist.js":
/*!********************************************!*\
  !*** ./src/assets/js/modules/proxylist.js ***!
  \********************************************/
/***/ (function() {

/** Список групп ссылок */
const listgroupmenu = document.querySelector('.list-tab-group .list-group'); //

/** Список ссылок */

const tablistgroupmenu = document.querySelector('.tab-content');
/** Переключает класс .active у ближайшего .list-group-item нажатой ссылки списка ссылок */

if (listgroupmenu && tablistgroupmenu) {
  const listgroup = listgroupmenu.querySelectorAll('.list-group-item');
  const tablistgroup = tablistgroupmenu.querySelectorAll('.tab-list-group');

  const listgroupitemClickHandler = evt => {
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
  /** Устанавливает класс active первой из найденных ссылок и табов */


  if (listgroup[0] && tablistgroup[0]) {
    listgroup[0].classList.add("active");
    tablistgroup[0].classList.add("active");
  }
  /** Прослушивание нажатия нажатия на ссылки списка ссылок .list-group */


  listgroupmenu.addEventListener('click', evt => {
    listgroupitemClickHandler(evt);
  });
}
/** Мульти модал для каталога ссылок */

/** Модалы для списка ссылок */


const multimodal = document.querySelector('.modal-multiaction');
const multimodalbtns = document.querySelectorAll('.btnmodal-multiaction');

const multimodalhandler = evt => {
  const link = evt.target.closest('a');
  const delbtn = multimodal.querySelector('.btn-del');
  const header1 = multimodal.querySelector('.header-1');
  const header2 = multimodal.querySelector('.header-2');
  const text1 = multimodal.querySelector('.text-1');
  const text2 = multimodal.querySelector('.text-2');
  const cancelBtn = multimodal.querySelector('.btn-discard');
  const span = multimodal.querySelector('.btn-close');
  /** Скрыть модал */

  function hideModal() {
    multimodal.style.display = "none";
    multimodal.classList.remove('show');
    const btn = document.querySelector('.modal-backdrop');

    if (btn) {
      document.body.removeChild(btn);
    }
  }
  /** Показать модал */


  function showModal() {
    multimodal.classList.add('show');
    multimodal.style.display = "block";
    const btn = document.createElement("div");
    btn.setAttribute('class', 'modal-backdrop fade show');
    document.body.appendChild(btn);
  }
  /** Кнопка закрыть */


  $(span).on('click', function () {
    hideModal();
    delbtn.href = '';
  });
  /** Кнопка отмены */

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
    /** 1 действие. Удалить группу */
    header2.style.display = "none";
    text2.style.display = "none";
    header1.style.display = "block";
    text1.style.display = "block";
  }

  if (dataaction === "2") {
    /** 2 действие. Удалить группу */
    header1.style.display = "none";
    text1.style.display = "none";
    header2.style.display = "block";
    text2.style.display = "block";
  }

  delbtn.href = datalink;
  showModal();
};

if (multimodal && multimodalbtns) {
  multimodalbtns.forEach(multimodalbtn => {
    multimodalbtn.addEventListener('click', evt => {
      multimodalhandler(evt);
    });
  });
}

/***/ }),

/***/ "./src/assets/js/modules/search.js":
/*!*****************************************!*\
  !*** ./src/assets/js/modules/search.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globalfunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalfunc */ "./src/assets/js/globalfunc.js");

/** Поиск.
 * http://isp/API-URL/search.php?type=users&query=56456
 * search: тип поиска users - Сотрудники, cases - Дела, inbox - Входящая почта,
 * outbox - Исходящая почта, bsr - БСР
 * */

/** Форма поиска */

const topSearchForm = document.querySelector('.top-search-form');
/** Инпут ввода строки поиска */

const topSearchInput = document.querySelector('#top-search');
/** Селект выбора поиска */

const topSearchSelect = document.querySelector('#topSearchSelect');
/** Выпадающее поле с результатами быстрого поиска */

const searchResultsWindow = document.querySelector('.search-results-window');
/** Таблица с результатами быстрого поиска */

const searchResults = searchResultsWindow.querySelector('.search-results-container');
/** Футер с ссылками в таблице с результатами быстрого поиска */
//const searchResultsFooter = searchResultsWindow.querySelector('.search-results-footer');

/** Счетчик найденного */

const searchResultsCounter = searchResultsWindow.querySelector('.search-results-counter');
/** Контейнер для параметров запроса */

const searchResultsGetParams = searchResultsWindow.querySelector('.search-results-get-params');
/** Кнопка закрытия результатов */

const searchResultsCloseButton = searchResultsWindow.querySelector('.btn-close');
/** Таймеры для устранения дребежжания */

let typingTimer; //идентификатор таймера

let doneTypingInterval = 300; //время в мс (5 сек)

/** Закрыть окно поиска */

function closeSearchResults() {
  searchResultsWindow.classList.remove('d-flex');
  searchResultsWindow.classList.add('d-none');
  searchResults.textContent = '';
}
/** Открыть окно поиска, вставить результаты
 * @param results - отрендеренные результаты
 */


function openSearchResults(results) {
  searchResults.textContent = '';
  searchResults.insertAdjacentHTML('beforeend', results);
  searchResultsWindow.classList.remove('d-none');
  searchResultsWindow.classList.add('d-flex');
}
/** Подсветка выделенного текста
 * @param text - строка, в которой нужно подсветить строку поиска
 * @param highlight - строка поиска
 * @returns {string} - текст с выделеной тегом <mark> строкой поиска
 */


function textHighlight(text, highlight) {
  const index = text.toUpperCase().indexOf(highlight.toUpperCase());

  if (index >= 0) {
    return `${text.substring(0, index)}<mark>${text.substring(index, index + highlight.length)}</mark>${text.substring(index + highlight.length)}`;
  } else {
    return `${text}`;
  }
}
/** Рендер поиска сотрудников
 * @param fullname
 * @param room
 * @param phone_worck
 * @param profession
 * @param highlight
 * @returns {string}
 */


const createUsersSearchItem = ({
  fullname,
  room,
  phone_worck,
  profession
}, highlight) => `
<div class="d-flex align-items-center py-3 border-bottom border-light">
<div class="flex-shrink-0 user-avatar rounded-circle avatar-sm bg-primary-20 m-0 me-3 d-flex align-items-center justify-content-center">
<span class="flex-shrink-0 font-size-base fw-bold text-primary">
${fullname.split(" ").slice(1).map(n => n[0]).join("").toUpperCase()}
</span>
</div>
<div class="d-flex flex-column me-5" style="min-width: 320px">
<span class="font-size-base">${textHighlight(fullname, highlight)}</span>
<span class="font-size-base text-secondary">${profession}</span>
</div>
<div class="d-flex flex-column">
<span class="font-size-base"><i class="mdi mdi-phone-classic me-2"></i>${textHighlight(phone_worck, highlight)}</span>
<span class="font-size-base text-secondary"><i class="mdi mdi-office-building-marker-outline me-2"></i>${room}</span>
</div>
</div>
`;
/** Рендер поиска входящих писем
 * @param DELO_CORRESP_NUM
 * @param INSERT_DATE
 * @param CORRESP_MSG_ANNOTATION
 * @param SENDER_NAME
 * @param CORRESP_FIO
 * @param MESSAGE_TYPE
 * @param highlight
 * @returns {string}
 */


const createInboxSearchItem = ({
  DELO_CORRESP_NUM,
  INSERT_DATE,
  CORRESP_MSG_ANNOTATION,
  SENDER_NAME,
  CORRESP_FIO,
  MESSAGE_TYPE
}, highlight) => `
<div class="d-flex py-3 border-bottom border-light">
<div class="flex-shrink-0 user-avatar rounded-circle avatar-xs bg-danger-20 m-0 me-3 d-flex align-items-center justify-content-center">
<span class="flex-shrink-0 font-size-base fw-bold text-danger" title=${MESSAGE_TYPE !== "" ? MESSAGE_TYPE : "Входящая"}>
<i class="mdi ${MESSAGE_TYPE === "Разноска" ? 'mdi-briefcase-outline' : MESSAGE_TYPE === "Электронная почта" ? "mdi-email-outline" : MESSAGE_TYPE === "Обращения" ? "mdi-file-document-multiple-outline" : "mdi-email-mark-as-unread"}"></i>
</span>
</div>
<div class="d-flex flex-column me-3" style="min-width: 100px">
<span class="search-results-counter badge-pill bg-primary-20 text-primary font-small-2"><span>№:</span> ${textHighlight(DELO_CORRESP_NUM, highlight)}</span>
<span class="font-small-2 ms-3"><span>От:</span> ${INSERT_DATE}</span>
</div>
<div class="d-flex flex-column me-3 flex-wrap" style="min-width: 400px; max-width: 400px;">
<span class="me-3 font-small-1" title="${CORRESP_MSG_ANNOTATION}">${textHighlight(CORRESP_MSG_ANNOTATION, highlight)}</span>
</div>
<div class="d-flex flex-column me-3" style="min-width: 100px">
<span class="font-small-1">От: ${textHighlight(SENDER_NAME, highlight)}</span>
<span class="font-small-1">Кому: ${CORRESP_FIO}</span>
</div>
</div>
`;
/** Рендер поиска БСР
 */

/*const createBsrSearchItem = ({}, highlight) =>
  `
`;*/

/** Рендер поиска исходящих писем
 * @param DELO_SEND_NUM
 * @param INSERT_DATE
 * @param SEND_MSG_ANNOTATION
 * @param SENDER_FIO
 * @param SEND_TO
 * @param MESSAGE_TYPE
 * @param highlight
 * @returns {string}
 */


const createOutboxSearchItem = ({
  DELO_SEND_NUM,
  INSERT_DATE,
  SEND_MSG_ANNOTATION,
  SENDER_FIO,
  SEND_TO,
  MESSAGE_TYPE
}, highlight) => `
<div class="d-flex py-3 border-bottom border-light">
<div class="flex-shrink-0 user-avatar rounded-circle avatar-xs bg-success-20 m-0 me-3 d-flex align-items-center justify-content-center">
<span class="flex-shrink-0 font-size-base fw-bold text-success" title=${MESSAGE_TYPE !== "" ? MESSAGE_TYPE : "Исходящая"}>
<i class="mdi ${MESSAGE_TYPE === "Разноска" ? 'mdi-briefcase-outline' : MESSAGE_TYPE === "Электронная почта" ? "mdi-email-outline" : MESSAGE_TYPE === "Обращения" ? "mdi-file-document-multiple-outline" : "mdi-email-mark-as-unread"}"></i>
</span>
</div>
<div class="d-flex flex-column me-3" style="min-width: 100px">
<span class="search-results-counter badge-pill bg-primary-20 text-primary font-small-2"><span>№:</span> ${textHighlight(DELO_SEND_NUM, highlight)}</span>
<span class="font-small-2 ms-3"><span>От:</span> ${INSERT_DATE}</span>
</div>
<div class="d-flex flex-column me-3 flex-wrap" style="min-width: 400px; max-width: 400px;">
<span class="me-3 font-small-1" title="${SEND_MSG_ANNOTATION}">${textHighlight(SEND_MSG_ANNOTATION, highlight)}</span>
</div>
<div class="d-flex flex-column me-3" style="min-width: 100px">
<span class="font-small-1">От: ${SENDER_FIO}</span>
<span class="font-small-1">Кому: ${textHighlight(SEND_TO, highlight)}</span>
</div>
</div>
`;
/** Рендер поиска дел
 */

/*const createCaseSearchItem = ({}, highlight) =>
  `
`;*/

/** Настройки поиска */

/*const searchParams = {
  cases: {
    placeholder: "Поиск дел и материалов по Ф.И.О. стороны / лицу / номеру дела",
    getParam: "query",
    render: createCaseSearchItem
  },
  inbox: {
    placeholder: "Поиск по входящей корреспонденции по входящему номеру / Ф.И.О. / содержанию",
    getParam: "query",
    render: createInboxSearchItem
  },
  outbox: {
    placeholder: "Поиск исходящей корреспондеции по исходящему номеру / Ф.И.О. / содержанию",
    getParam: "query",
    render: createOutboxSearchItem
  },
  users: {
    placeholder: "Поиск сотрудников по Ф.И.О. / телефонному номеру",
    getParam: "searchUsers",
    render: createUsersSearchItem
  },
  bsr: {
    placeholder: "Поиск текстов судебных актов по номеру дела / материала",
    getParam: "query",
    render: createBsrSearchItem
  }
}
*/

/** Настройки поиска */


const searchParams = {
  users: {
    placeholder: "Поиск сотрудников по Ф.И.О. / телефонному номеру",
    getParam: "searchUsers",
    render: createUsersSearchItem
  },
  inbox: {
    placeholder: "Поиск по входящей корреспонденции по номеру / Ф.И.О. / содержанию",
    getParam: "query",
    getParamsAdd: {
      startDate: moment().subtract(80, 'days').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD')
    },
    getParamsNames: {
      startDate: "Поступило с: ",
      endDate: "по: "
    },
    render: createInboxSearchItem
  },
  outbox: {
    placeholder: "Поиск исходящей корреспондеции по номеру / Ф.И.О. / содержанию",
    getParam: "query",
    getParamsAdd: {
      startDate: moment().subtract(80, 'days').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD')
    },
    getParamsNames: {
      startDate: "Направлено с: ",
      endDate: "по: "
    },
    render: createOutboxSearchItem
  }
};
/** Показывает / скрывает окно быстрого поиска,
 * отрисовывает элементы поиска
 * @param array - массив данных для отрисовки результатов
 * @param render - коллбэк-шаблон элемента поиска
 * @param highlight
 * @param getParamsAdd
 * @param getParamsNames
 */

const makeSearchItems = (array, render, highlight, getParamsAdd, getParamsNames) => {
  let counter;
  let result;
  array.length > 0 ? counter = array.length : counter = "0";
  array.length > 0 ? result = array.map(result => render(result, highlight)).join('') : result = '<span class="font-size-base text-secondary py-3">Ничего не найдено. Попробуйте изменить поисковой запрос.</span>';
  searchResultsGetParams.textContent = Object.keys(getParamsNames).map(key => getParamsNames[key] + moment(getParamsAdd[key]).format('DD MMMM YYYY')).join(" ");
  searchResultsCounter.textContent = counter;
  openSearchResults(result);
};
/** Хендлер быстрого поиска */


const fastSearchHandler = () => {
  let queryObj = {};

  if (topSearchInput.value.length >= 3) {
    const query = searchParams[topSearchSelect.value];
    let data = {
      [query.getParam]: topSearchInput.value
    };
    query.getParamsAdd ? queryObj = Object.assign(queryObj, data, query.getParamsAdd) : queryObj = Object.assign(queryObj, data);
    (0,_globalfunc__WEBPACK_IMPORTED_MODULE_0__.ajax_send)("GET", `api/search/${topSearchSelect.value}.php`, queryObj, "json", result => makeSearchItems(result.data, searchParams[topSearchSelect.value].render, topSearchInput.value, searchParams[topSearchSelect.value].getParamsAdd ? searchParams[topSearchSelect.value].getParamsAdd : "", searchParams[topSearchSelect.value].getParamsNames ? searchParams[topSearchSelect.value].getParamsNames : ""), true);
  } else {
    closeSearchResults();
  }
};
/** Хэндлер очистки результатов поиска при переключении типа поиска
 * и плейсхолдера поиска */


const selectHandler = () => {
  searchResultsWindow.classList.add('d-none');
  searchResults.textContent = '';
  topSearchInput.value = '';
  topSearchInput.placeholder = searchParams[topSearchSelect.value].placeholder;
};
/** Ждем полной загрузки дерева */


document.addEventListener("DOMContentLoaded", () => {
  if (topSearchForm) {
    topSearchInput.placeholder = searchParams[topSearchSelect.value].placeholder;
    let action = true;
    topSearchInput.addEventListener('keydown', function (evt) {
      if (action === true) {
        action = false;
        clearTimeout(typingTimer);
        typingTimer = setTimeout(fastSearchHandler, doneTypingInterval);
      }
    });
    topSearchInput.addEventListener('keyup', function (evt) {
      action = true;
    });
    topSearchSelect.addEventListener('change', selectHandler);
    searchResultsCloseButton.addEventListener('click', closeSearchResults);
  }
});

/***/ }),

/***/ "./src/assets/js/modules/tasks.js":
/*!****************************************!*\
  !*** ./src/assets/js/modules/tasks.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globalfunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalfunc */ "./src/assets/js/globalfunc.js");
 // Tasks list
// Tasks задачи. Контейнер

const todowrapper = document.querySelector('.todo-wrapper'); // Поля: id, title, duedate (дата),

const tasksHandler = () => {
  // Заголовок задачи
  let taskTitle; // Кнопка Добавить задачу

  const addTaskBtn = document.querySelector('.add-task'); // Модал

  const newTaskModal = document.getElementById('new-task-modal'); // Форма в модале

  const newTaskForm = document.getElementById('task-form'); // Заголовок модала статус задачи

  const modalTitle = document.querySelector('.task-title-status'); // Заголовок модала Добавить

  const addmodalTitle = document.querySelector('.add-task-title'); // Заголовок модала Редактировать

  const editmodalTitle = document.querySelector('.edit-task-title'); // Кнопка закрыть на модале

  const span = document.querySelector('.btn-close'); // Кнопка Добавить на модале

  const addBtn = document.querySelector('.add-task-btn'); // Кнопка Сохранить на модале

  const updateTodoItem = document.querySelector('.edit-task'); // Кнопка Удалить на модале

  const updateBtns = document.querySelector('.btn-delete-task'); // Кнопка Отмена на модале

  const cancelBtn = document.querySelector('.btn-dismiss'); // Сайдбар с фильтрами и метками

  const sidebarLeft = document.querySelector('.sidebar-left'); // Меню сайдбара

  const sidebarMenuList = document.querySelector('.sidebar-menu-list'); // Меню фильтров в сайдбаре

  const listItemFilter = document.querySelector('.list-group-filters'); // Меню меток в сайдбаре

  const listItemLabel = document.querySelector('.list-group-labels'); // Поле поиска по задачам

  const todoFilter = document.getElementById('todo-search'); // Надпись Ничего не найдено в поиске

  const noResults = document.querySelector('.no-results'); // Сортировка А - Я

  const sortAsc = document.querySelector('.sort-asc'); // Сортировка Я - А

  const sortDesc = document.querySelector('.sort-desc'); // Список задач

  const todoTaskList = document.querySelector('.todo-task-list'); // Обертка списка задач

  const todoTaskListWrapper = document.querySelector('.todo-task-list-wrapper'); // Поля модала
  // Поле ввода срока исполнения

  const flatPickr = document.querySelector('.due-date'); // Описание события

  const taskDesc = document.getElementById('ask-description'); // Метки

  const taskTag = document.getElementById('cat-select'); // Переключатель Вижу только я (приватное событие)

  const privateSwitch = document.querySelector(".private-switch");
  const checkboxId = 100; //Массив задач. Заменить на обращение к базе

  let tasksList = [{
    id: 1,
    title: 'Задача',
    created: "2021-08-13 09:00:00",
    deadline: "2021-08-31 09:00:00",
    tag: 'primary',
    user_id: '1',
    completed: 'false',
    deleted: 'false',
    description: 'описание'
  }, {
    id: 2,
    title: 'Задача 2',
    created: "2021-08-12 09:00:00",
    deadline: "2021-08-18 09:00:00",
    tag: 'danger',
    user_id: '1',
    completed: 'true',
    deleted: 'true',
    description: ''
  }, {
    id: 3,
    title: 'Задача с большим описанием, которое надо обрезать в ращметке, чтобы не разывало контейнер',
    created: "2021-08-12 09:00:00",
    deadline: "2021-08-10 09:00:00",
    tag: 'warning',
    user_id: '1',
    completed: 'false',
    deleted: 'false',
    description: ''
  }, {
    id: 4,
    title: 'Просто задача без названия',
    created: "2021-08-14 09:00:00",
    deadline: "2021-08-23 09:00:00",
    tag: 'success',
    user_id: '1',
    completed: 'false',
    deleted: 'false',
    description: ''
  }, {
    id: 5,
    title: 'Задача с "кавычками"',
    created: "2021-08-01 09:00:00",
    deadline: "2021-09-18 09:00:00",
    tag: 'info',
    user_id: '1',
    completed: 'true',
    deleted: 'true',
    description: ''
  }, {
    id: 6,
    title: 'Задача 2',
    created: "2021-08-12 09:00:00",
    deadline: "2021-08-18 09:00:00",
    tag: 'primary',
    user_id: '1',
    completed: 'true',
    deleted: 'true',
    description: ''
  }]; // Функции

  const createTaskItemString = ({
    id,
    deadline,
    tag,
    title
  }) => `<li class="todo-item">
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
            </li>`; // Рендеринг задач


  const tasksRender = () => {
    todoTaskList.innerHTML = '';
    const taskElementsString = tasksList.map(title => createTaskItemString(title)).join('');
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
  }; // Скрыть модал


  function hideModal() {
    newTaskModal.style.display = "none";
    newTaskModal.classList.remove('show');
    const btn = document.querySelector('.modal-backdrop');

    if (btn) {
      document.body.removeChild(btn);
    }
  } // Показать модал


  function showModal() {
    newTaskModal.classList.add('show');
    newTaskModal.style.display = "block";
    const btn = document.createElement("div");
    btn.setAttribute('class', 'modal-backdrop fade show');
    document.body.appendChild(btn);
  } // Кнопка закрыть


  $(span).on('click', function () {
    hideModal(); // сбросить модал

    resetValues();
  }); // Кнопка отмены

  $(cancelBtn).on('click', function () {
    hideModal(); // сбросить модал

    resetValues();
  }); // Добавляет класс active при клике на список фильтров сайдбара

  if (listItemFilter) {
    $(listItemFilter).find('a').on('click', function () {
      if ($(listItemFilter).find('a').hasClass('active')) {
        $(listItemFilter).find('a').removeClass('active');
      }

      $(this).addClass('active');
    });
  } // Добавляет класс active при клике на список меток сайдбара


  if (listItemLabel) {
    $(listItemLabel).find('a').on('click', function () {
      if ($(listItemLabel).find('a').hasClass('active')) {
        $(listItemLabel).find('a').removeClass('active');
      }

      $(this).addClass('active');
    });
  } // Метки задач


  if (taskTag) {
    $(taskTag).wrap('<div class="position-relative"></div>');
    $(taskTag).select2({
      placeholder: 'Выберите метку'
    });
  } // Датапикер даты исполнения


  if (flatPickr) {
    $(flatPickr).flatpickr({
      locale: "ru",
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      defaultDate: 'today'
    });
  } // Добавление новой задачи в список
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
              month = new Intl.DateTimeFormat('en', {
          month: 'short'
        }).format(selectedDate),
              day = new Intl.DateTimeFormat('en', {
          day: '2-digit'
        }).format(selectedDate),
              todoDate = month + ' ' + day; // Badge calculation loop

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
        }); // HTML Вывод

        if (todoTitle !== '') {
          $(todoTaskList).prepend('<li class="todo-item">' + '<div class="todo-title-wrapper">' + '<div class="todo-title-area">' + '<i class="mdi mdi-dots-vertical"></i>' + '<div class="title-wrapper">' + '<div class="custom-control custom-checkbox">' + '<input type="checkbox" class="custom-control-input" id="customCheck' + checkboxId + '" />' + '<label class="custom-control-label" for="customCheck' + checkboxId + '"></label>' + '</div>' + '<span class="todo-title">' + todoTitle + '</span>' + '</div>' + '</div>' + '<div class="todo-item-action">' + '<div class="badge-wrapper mr-1">' + todoBadge + '</div>' + '<small class="text-nowrap text-muted mr-1">' + todoDate + '</small>' + '</div>' + '</div>' + '</li>');
        }

        new _globalfunc__WEBPACK_IMPORTED_MODULE_0__.Toast("Задача сохранена", 'Сохранено 💾', "Сейчас", "toast", "").show();
        hideModal();
      }
    });
  } // Чекбокс завершения задачи


  $(todoTaskListWrapper).on('change', '.custom-checkbox', function () {
    const $this = $(this).find('input');

    if ($this.prop('checked')) {
      $this.closest('.todo-item').addClass('completed');
      new _globalfunc__WEBPACK_IMPORTED_MODULE_0__.Toast("Задача завершена", 'Поздравляем 🎉', "Сейчас", "toast", "").show();
    } else {
      $this.closest('.todo-item').removeClass('completed');
    }
  });
  $(todoTaskListWrapper).on('click', '.custom-checkbox', function (event) {
    event.stopPropagation();
  }); // To open todo list item modal on click of item

  $(document).on('click', '.todo-task-list-wrapper .todo-item', function () {
    showModal();
    addBtn.style.display = "none";
    cancelBtn.style.display = "none";
    updateTodoItem.style.display = "block";
    updateBtns.style.display = "block";
    addmodalTitle.style.display = "none";
    editmodalTitle.style.display = "block";

    if ($(this).hasClass('completed')) {
      $(modalTitle).html('<button type="button" class="btn btn-sm btn-outline-success complete-todo-item waves-effect waves-float waves-light" data-dismiss="modal">Завершена</button>');
    } else {
      $(modalTitle).html('<button type="button" class="btn btn-sm btn-outline-secondary complete-todo-item waves-effect waves-float waves-light" data-dismiss="modal">Не завершена</button>');
    }

    $(taskTag).val('').trigger('change');
    taskTitle = $(this).find('.todo-title');
    const title = $(this).find('.todo-title').html(); // apply all variable values to fields

    $(newTaskForm).find('.new-todo-item-title').val(title);
  }); // Updating Data Values to Fields

  if (updateTodoItem) {
    $(updateTodoItem).on('click', function (e) {
      const isValid = $(newTaskForm).valid();
      e.preventDefault();

      if (isValid) {
        const $edit_title = newTaskForm.find('.new-todo-item-title').val();
        $(taskTitle).text($edit_title);
        new _globalfunc__WEBPACK_IMPORTED_MODULE_0__.Toast("Задача сохранена", 'Сохранено 💾', "Сейчас", "toast", "").show();
        hideModal();
      }
    });
  } // Сортировка по возрастанию А-Я. Работает


  if (sortAsc) {
    $(sortAsc).on('click', function () {
      $(todoTaskListWrapper).find('li').sort(function (a, b) {
        return $(b).find('.todo-title').text().toUpperCase() < $(a).find('.todo-title').text().toUpperCase() ? 1 : -1;
      }).appendTo(todoTaskList);
    });
  } // Сортировка по убыванию Я-А. Работает


  if (sortDesc) {
    $(sortDesc).on('click', function () {
      $(todoTaskListWrapper).find('li').sort(function (a, b) {
        return $(b).find('.todo-title').text().toUpperCase() > $(a).find('.todo-title').text().toUpperCase() ? 1 : -1;
      }).appendTo(todoTaskList);
    });
  } // Фильтр задач. Поиск. Работает


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
  }); // Сброс значений модала

  function resetValues() {
    $(flatPickr).val('');
    $(taskDesc).val('');
    $(taskTag).val('');
    $(privateSwitch).prop('checked', false);
  }

  tasksRender();
}; // Ждем полной загрузки дерева


document.addEventListener("DOMContentLoaded", () => {
  // Задачи
  if (todowrapper) {
    tasksHandler();
  }
});

/***/ }),

/***/ "./src/assets/js/modules/tetris.js":
/*!*****************************************!*\
  !*** ./src/assets/js/modules/tetris.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/assets/js/const.js");

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
      'I': [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
      'J': [[1, 0, 0], [1, 1, 1], [0, 0, 0]],
      'L': [[0, 0, 1], [1, 1, 1], [0, 0, 0]],
      'O': [[1, 1], [1, 1]],
      'S': [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
      'Z': [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
      'T': [[0, 1, 0], [1, 1, 1], [0, 0, 0]]
    };
    /** цвет каждой фигуры */

    const colors = {
      'I': _const__WEBPACK_IMPORTED_MODULE_0__.COLORS.theme.info,
      'O': _const__WEBPACK_IMPORTED_MODULE_0__.COLORS.theme.warning,
      'T': _const__WEBPACK_IMPORTED_MODULE_0__.COLORS.theme.primary,
      'S': _const__WEBPACK_IMPORTED_MODULE_0__.COLORS.theme.success,
      'Z': _const__WEBPACK_IMPORTED_MODULE_0__.COLORS.theme.danger,
      'J': _const__WEBPACK_IMPORTED_MODULE_0__.COLORS.theme.blue,
      'L': _const__WEBPACK_IMPORTED_MODULE_0__.COLORS.theme.orange
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
        name: name,

        /** название фигуры (L, O, и т. д.) */
        matrix: matrix,

        /** матрица с фигурой */
        row: row,

        /** текущая строка (фигуры стартуют за видимой областью холста) */
        col: col
        /** текущий столбец */

      };
    }
    /** поворачиваем матрицу на 90 градусов */

    /** https://codereview.stackexchange.com/a/186834 */


    function rotate(matrix) {
      const N = matrix.length - 1;
      /** на входе матрица, и на выходе тоже отдаём матрицу */

      return matrix.map((row, i) => row.map((val, j) => matrix[N - j][i]));
    }
    /** проверяем после появления или вращения, может ли матрица (фигура) быть в этом месте поля или она вылезет за его границы */


    function isValidMove(matrix, cellRow, cellCol) {
      /** проверяем все строки и столбцы */
      for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
          if (matrix[row][col] && (
          /** если выходит за границы поля… */
          cellCol + col < 0 || cellCol + col >= playfield[0].length || cellRow + row >= playfield.length ||
          /** …или пересекается с другими фигурами */
          playfield[cellRow + row][cellCol + col])) {
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
        if (++count > 36 - level) {
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
        ? tetromino.col - 1 : tetromino.col + 1;
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
    };

    rAF = requestAnimationFrame(loop);
  };
  /** старт игры */


  startbtn.addEventListener('click', () => {
    start();
    startbtn.style.display = "none";
    startbtn.focus = false;
    canvas.focus();
  });
}; // Ждем полной загрузки дерева


document.addEventListener("DOMContentLoaded", () => {
  if (tetrwrapper) {
    tetrgame();
  }
});

/***/ }),

/***/ "./src/assets/js/modules/validation.js":
/*!*********************************************!*\
  !*** ./src/assets/js/modules/validation.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setValidationListeners": function() { return /* binding */ setValidationListeners; },
/* harmony export */   "validateForm": function() { return /* binding */ validateForm; }
/* harmony export */ });
function showInputError(input) {
  input.classList.add('is-invalid');
  input.classList.remove('is-valid');

  if (input.classList.contains('flatpickr-input')) {
    input.nextSibling.classList.add('is-invalid');
    input.nextSibling.classList.remove('is-valid');
  }
}

function hideInputError(input) {
  input.classList.add('is-valid');
  input.classList.remove('is-invalid');

  if (input.classList.contains('flatpickr-input')) {
    input.nextSibling.classList.add('is-valid');
    input.nextSibling.classList.remove('is-invalid');
  }
}

function validateInput(form, input) {
  !input.validity.valid ? showInputError(input) : hideInputError(input);
}

function validateForm(form, submitButton) {
  const inputArray = form.querySelectorAll('input:not(.input), textarea, select');
  form.classList.add('was-validated');

  if (Array.from(inputArray).filter(input => !input.validity.valid).length === 0) {
    submitButton.disabled = false;
    return true;
  } else {
    submitButton.disabled = true;
    return false;
  }
}

function setValidationListeners(form, submit) {
  const inputs = form.querySelectorAll('input:not(.input), textarea');
  const selects = form.querySelectorAll('select:not(.select2)');
  selects.forEach(select => {
    select.addEventListener('change', () => validateForm(form, submit));
    validateInput(form, select);
  });
  $('select.select2').on('select2:select', function (e) {
    validateForm(form, submit);
    validateInput(form, this);
  });
  inputs.forEach(input => {
    input.addEventListener('input', () => validateForm(form, submit));
    validateInput(form, input);
  });
}



/***/ }),

/***/ "./src/assets/js/modules/weather.js":
/*!******************************************!*\
  !*** ./src/assets/js/modules/weather.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globalfunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalfunc */ "./src/assets/js/globalfunc.js");

/** Погодный виджет */

const weatherHandler = () => {
  /** ID города искать в файле http://bulk.openweathermap.org/sample/current.city.list.json.gz */
  const weatherSettings = {
    city: "Safonovo",
    cityId: 499452,
    cityrus: "Сафоново",
    apikey: "0590d73840a4e5980796c90f4f20e0a4",
    states: {
      200: {
        "desc": "гроза с небольшим дождем",
        "day": "wi-day-thunderstorm",
        "night": "wi-night-alt-thunderstorm"
      },
      201: {
        "desc": "гроза с дождем",
        "day": "wi-day-thunderstorm",
        "night": "wi-night-alt-thunderstorm"
      },
      202: {
        "desc": "гроза с сильным дождем",
        "day": "wi-day-thunderstorm",
        "night": "wi-night-alt-thunderstorm"
      },
      210: {
        "desc": "небольшая гроза",
        "day": "wi-day-lightning",
        "night": "wi-night-alt-lightning"
      },
      212: {
        "desc": "сильная гроза",
        "day": "wi-day-lightning",
        "night": "wi-night-alt-lightning"
      },
      221: {
        "desc": "очень сильная гроза",
        "day": "wi-day-lightning",
        "night": "wi-night-alt-lightning"
      },
      230: {
        "desc": "гроза с мелким дождем",
        "day": "wi-day-thunderstorm",
        "night": "wi-night-alt-thunderstorm"
      },
      231: {
        "desc": "гроза с средним дождем",
        "day": "wi-day-thunderstorm",
        "night": "wi-night-alt-thunderstorm"
      },
      232: {
        "desc": "гроза с сильным дождем",
        "day": "wi-day-thunderstorm",
        "night": "wi-night-alt-thunderstorm"
      },
      300: {
        "desc": "слабая морось",
        "day": "wi-day-hail",
        "night": "wi-night-alt-hail"
      },
      301: {
        "desc": "морось",
        "day": "wi-day-hail",
        "night": "wi-night-alt-hail"
      },
      302: {
        "desc": "сильная морось",
        "day": "wi-day-hail",
        "night": "wi-night-alt-hail"
      },
      310: {
        "desc": "слабый моросящий дождь",
        "day": "wi-day-hail",
        "night": "wi-night-alt-hail"
      },
      311: {
        "desc": "моросящий дождь",
        "day": "wi-day-hail",
        "night": "wi-night-alt-hail"
      },
      312: {
        "desc": "сильный моросящий дождь",
        "day": "wi-day-hail",
        "night": "wi-night-alt-hail"
      },
      313: {
        "desc": "ливневый дождь и морось",
        "day": "wi-day-hail",
        "night": "wi-night-alt-hail"
      },
      314: {
        "desc": "ливневый дождь и изморось",
        "day": "wi-day-hail",
        "night": "wi-night-alt-hail"
      },
      321: {
        "desc": "ливень",
        "day": "wi-day-rain",
        "night": "wi-night-alt-rain"
      },
      500: {
        "desc": "небольшой дождь",
        "day": "wi-day-rain",
        "night": "wi-night-alt-rain"
      },
      501: {
        "desc": "умеренный дождь",
        "day": "wi-day-rain",
        "night": "wi-night-alt-rain"
      },
      502: {
        "desc": "сильный дождь",
        "day": "wi-day-rain",
        "night": "wi-night-alt-rain"
      },
      503: {
        "desc": "очень сильный дождь",
        "day": "wi-day-rain",
        "night": "wi-night-alt-rain"
      },
      504: {
        "desc": "сильный дождь",
        "day": "wi-day-rain",
        "night": "wi-night-alt-rain"
      },
      511: {
        "desc": "ледяной дождь",
        "day": "wi-day-rain",
        "night": "wi-night-alt-rain"
      },
      520: {
        "desc": "слабый ливневый дождь",
        "day": "wi-day-rain",
        "night": "wi-night-alt-rain"
      },
      521: {
        "desc": "ливень",
        "day": "wi-day-rain",
        "night": "wi-night-alt-rain"
      },
      522: {
        "desc": "сильный ливневый дождь",
        "day": "wi-day-rain",
        "night": "wi-night-alt-rain"
      },
      531: {
        "desc": "частично ливневый дождь",
        "day": "wi-day-rain",
        "night": "wi-night-alt-rain"
      },
      600: {
        "desc": "легкий снег",
        "day": "wi-day-snow",
        "night": "wi-night-alt-snow"
      },
      601: {
        "desc": "снег",
        "day": "wi-day-snow",
        "night": "wi-night-alt-snow"
      },
      602: {
        "desc": "сильный снегопад",
        "day": "wi-day-snow",
        "night": "wi-night-alt-snow"
      },
      611: {
        "desc": "мокрый снег",
        "day": "wi-day-rain-mix",
        "night": "wi-night-alt-rain-mix"
      },
      612: {
        "desc": "слабый мокрый снег",
        "day": "wi-day-rain-mix",
        "night": "wi-night-alt-rain-mix"
      },
      613: {
        "desc": "ливень с мокрым снегом",
        "day": "wi-day-rain-mix",
        "night": "wi-night-alt-rain-mix"
      },
      615: {
        "desc": "небольшой дождь и снег",
        "day": "wi-day-rain-mix",
        "night": "wi-night-alt-rain-mix"
      },
      616: {
        "desc": "дождь со снегом",
        "day": "wi-day-rain-mix",
        "night": "wi-night-alt-rain-mix"
      },
      620: {
        "desc": "небольшой снегопад",
        "day": "wi-day-snow",
        "night": "wi-night-alt-snow"
      },
      621: {
        "desc": "снегопад",
        "day": "wi-day-snow",
        "night": "wi-night-alt-snow"
      },
      622: {
        "desc": "сильный снегопад",
        "day": "wi-day-snow",
        "night": "wi-night-alt-snow"
      },
      701: {
        "desc": "туман",
        "day": "wi-day-fog",
        "night": "wi-night-fog"
      },
      711: {
        "desc": "дым",
        "day": "wi-smoke",
        "night": "wi-smoke"
      },
      721: {
        "desc": "дымка",
        "day": "wi-smoke",
        "night": "wi-smoke"
      },
      731: {
        "desc": "песчано-пыльные вихри",
        "day": "wi-sandstorm",
        "night": "wi-sandstorm"
      },
      741: {
        "desc": "туман",
        "day": "wi-smog",
        "night": "wi-smog"
      },
      751: {
        "desc": "песок",
        "day": "wi-sandstorm",
        "night": "wi-sandstorm"
      },
      761: {
        "desc": "пыль",
        "day": "wi-dust",
        "night": "wi-dust"
      },
      762: {
        "desc": "вулканический пепел",
        "day": "wi-volcano",
        "night": "wi-volcano"
      },
      771: {
        "desc": "шквал",
        "day": "wi-strong-wind",
        "night": "wi-strong-wind"
      },
      781: {
        "desc": "смерч",
        "day": "wi-tornado",
        "night": "wi-tornado"
      },
      800: {
        "desc": "безоблачно",
        "day": "wi-day-sunny",
        "night": "wi-night-clear"
      },
      801: {
        "desc": "небольшая облачность: 11-25%",
        "day": "wi-day-cloudy",
        "night": "wi-night-alt-cloudy"
      },
      802: {
        "desc": "средняя облачность: 25-50%",
        "day": "wi-cloudy",
        "night": "wi-cloudy"
      },
      803: {
        "desc": "высокая облачность: 51-84%",
        "day": "wi-cloudy",
        "night": "wi-cloudy"
      },
      804: {
        "desc": "очень высокая облачность: 85-100%",
        "day": "wi-cloudy",
        "night": "wi-cloudy"
      }
    }
  };
  const data = {
    id: weatherSettings.cityId,
    appid: weatherSettings.apikey
  };
  let weather = {
    state: "",
    icon: "",
    temp_max: ""
  };
  let letter = "";

  if (moment().hour() >= 7 && moment().hour() <= 21) {
    letter = "day";
  }

  if (moment().hour() <= 6 && moment().hour() >= 0 || moment().hour() >= 22 && moment().hour() <= 23) {
    letter = "night";
  }

  let url = "https://api.openweathermap.org/data/2.5/weather";

  function setWeather(response) {
    weather.state = weatherSettings.states[response.weather[0].id]["desc"];
    weather.icon = weatherSettings.states[response.weather[0].id][letter];
    weather.temp_max = Math.round(response.main.temp_max - 273.15);

    if (weather.temp_max > 0) {
      weather.temp_max = "+" + weather.temp_max + '°';
    } else {
      weather.temp_max = weather.temp_max + '°';
    }

    const weatherInner = `<a class="d-flex align-items-center justify-content-center" style="text-decoration: none;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="` + weather.state + `" data-bs-original-title="` + weather.state + `">
              <p class="m-0 p-0" style="font-size: 23px; color: #5552d9; font-weight: 700; line-height: normal;">` + weather.temp_max + `</p>
              <i class="ms-2 d-flex align-items-center justify-content-center wi ` + weather.icon + `" style="width=35px; height: 35px;"></i>
            </a>`;
    document.querySelector('.weather-info').textContent = '';
    document.querySelector('.weather-info').insertAdjacentHTML('beforeend', weatherInner);
  }

  (0,_globalfunc__WEBPACK_IMPORTED_MODULE_0__.ajax_send)("GET", url, data, "json", result => {
    setWeather(result);
  }, false);
};
/** Ждем полной загрузки дерева */


document.addEventListener("DOMContentLoaded", () => {
  /** Погода */
  if (document.querySelector('.weather-info')) {
    weatherHandler();
    /** Обновление каждые 5 минут */

    setInterval(() => {
      if (document.querySelector('.weather-info')) {
        weatherHandler();
      }
    }, 300000);
  }
});

/***/ }),

/***/ "./src/assets/js/modules/workplaces.js":
/*!*********************************************!*\
  !*** ./src/assets/js/modules/workplaces.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globalfunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalfunc */ "./src/assets/js/globalfunc.js");

/** Рабочие места. Древья */

const workPlaceTree = document.getElementById('workplace-tree');
const placeitemsTree = document.getElementById('placeitems-tree');
let zTreeObj;

const zTreeHandler = () => {
  function myOnClick(event, treeId, treeNode) {
    alert(treeNode.id + ", " + treeNode.name);
  }
  /** zTree конфигурация, изучите API документацию (детали настройки) */


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
  let test = {
    module: "workplaces"
  };
  const placeitemsStructure = [{
    id: "01",
    name: "Устройства",
    open: true,
    icon: "../../assets/img/icons/computer.png",
    isParent: true,
    children: [{
      id: "01_01",
      name: "Комплект рабочей станции",
      icon: "../../assets/img/icons/computer.png",
      open: true,
      isParent: true,
      children: [{
        id: "01_01",
        name: "Системный блок OLDI",
        icon: "../../assets/img/icons/compcase.png",
        isParent: true,
        children: [{
          id: "01_01",
          name: "Корпус InWin",
          icon: "../../assets/img/icons/compcase.png",
          isParent: false
        }, {
          id: "01_01",
          name: "Блок питания InWin",
          icon: "../../assets/img/icons/computer.png",
          isParent: false
        }, {
          id: "01_01",
          name: "Материнская плата Gigbyte",
          icon: "../../assets/img/icons/motherboard.png",
          isParent: false
        }, {
          id: "01_01",
          name: "Процессор Intel Core2Duo 2800",
          icon: "../../assets/img/icons/processor.png",
          isParent: false
        }, {
          id: "01_01",
          name: "Кулер для процессора Cooler Master",
          icon: "../../assets/img/icons/computer.png",
          isParent: false
        }, {
          id: "01_01",
          name: "Модуль памяти Kingston DDR2 1Gb",
          icon: "../../assets/img/icons/memory.png",
          isParent: false
        }, {
          id: "01_01",
          name: "Модуль памяти Kingston DDR2 1Gb",
          icon: "../../assets/img/icons/memory.png",
          isParent: false
        }, {
          id: "01_01",
          name: "Жесткий диск Western Digital 160Gb",
          icon: "../../assets/img/icons/hdd.png",
          isParent: false
        }, {
          id: "01_01",
          name: "DVD-RAM Pioneer DRW-2200 BK",
          icon: "../../assets/img/icons/drive-disc.png",
          isParent: false
        }]
      }, {
        id: "01_01",
        name: "Монитор Acer L1620",
        icon: "../../assets/img/icons/monitor.png",
        isParent: false
      }, {
        id: "01_01",
        name: "Звуковые колонки Genius G-200",
        icon: "../../assets/img/icons/speaker.png",
        isParent: false
      }, {
        id: "01_01",
        name: "Клавиатура Genius BX-200",
        icon: "../../assets/img/icons/keyboard-full.png",
        isParent: false
      }, {
        id: "01_01",
        name: "Мышь Genius N-100",
        icon: "../../assets/img/icons/mouse.png",
        isParent: false
      }, {
        id: "01_01",
        name: "Принтер Samsung ML-2160",
        icon: "../../assets/img/icons/printer.png",
        isParent: true,
        children: [{
          id: "01_01",
          name: "Картридж DT-101",
          icon: "../../assets/img/icons/computer.png",
          isParent: false
        }]
      }]
    }]
  }, {
    id: "02",
    name: "Программное обеспечение",
    open: true,
    icon: "../../assets/img/icons/windows.png",
    isParent: true,
    children: [{
      id: "01_01",
      name: "ОС Windows 10 Professional x64",
      icon: "../../assets/img/icons/windows.png",
      isParent: false
    }]
  }];

  const workPlaceStructure = () => {
    (0,_globalfunc__WEBPACK_IMPORTED_MODULE_0__.ajax_send)("GET", "pages/admin/ajax.php", test, "json", result => {
      $.fn.zTree.init($("#workplace-tree"), settingWorktree, result);
    }, true);
  };

  workPlaceStructure();
  zTreeObj = $.fn.zTree.init($("#placeitems-tree"), settingPlaceitems, placeitemsStructure);
};
/** Ждем полной загрузки дерева */


document.addEventListener("DOMContentLoaded", () => {
  if (workPlaceTree) {
    zTreeHandler();
  }
});

/***/ }),

/***/ "./src/assets/js/ui.js":
/*!*****************************!*\
  !*** ./src/assets/js/ui.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globalfunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalfunc */ "./src/assets/js/globalfunc.js");


/** Меню сайдбара */

const sidebarNavigationMenu = document.querySelector('.navigation-menu');
/** Спиннер */

const spinnerLoader = document.querySelector('.spinner-wrapper');
/** Кнопка Назад Наверх, класс .back-to-top */

const backToTopButton = document.querySelector('.back-to-top'); //

/** Прокручиваемое содержимое, класс .main-content, если его прокручивать, появляется кнопка Назад наверх */

const mainContent = document.querySelector('.main-content');
/**
 * При прокручивании вниз на 20px от верхнего края элемента с классом main-content, показывает кнопку Назад наверх
 */

const mainContentScroll = () => {
  mainContent.scrollTop > 20 ? backToTopButton.classList.remove('d-none') : backToTopButton.classList.add('d-none');
};
/** Кнопка, переключающая сайдбар, класс .sidebar-toggle-button */


const sidebarToggleButton = document.querySelector('.sidebar-toggle-button');
/** Тело страницы, класс .main-sidebar */

const sidebarWrapper = document.querySelector('.page-body');
/**
 * Переключает класс disabled у .page-body, сайдбар
 * @param evt
 */

const buttonSidebarToggleHandler = evt => {
  evt.preventDefault();
  let formData = new FormData();
  formData.append("module", "sidebar");

  if (sidebarWrapper.dataset.sidebarWidth === "narrow") {
    sidebarWrapper.dataset.sidebarWidth = "wide";
    sidebarToggleButton.querySelector('i').classList.add('mdi-crosshairs-gps');
    sidebarToggleButton.querySelector('i').classList.remove('mdi-crosshairs');
    formData.append("sidebarWidth", "wide");
  } else if (sidebarWrapper.dataset.sidebarWidth === "wide") {
    sidebarWrapper.dataset.sidebarWidth = "narrow";
    sidebarToggleButton.querySelector('i').classList.remove('mdi-crosshairs-gps');
    sidebarToggleButton.querySelector('i').classList.add('mdi-crosshairs');
    formData.append("sidebarWidth", "narrow");
  }

  (0,_globalfunc__WEBPACK_IMPORTED_MODULE_0__.ajax_send)("POST", "pages/admin/ajax.php", formData, "json", result => result, true);
};
/** Кнопка, переключающая сайдбар, класс .sidebar-expand-button */


const sidebarExpandButton = document.querySelector('.sidebar-expand-button');
/** Сайдбар*/

const mainSidebar = document.querySelector('.main-sidebar');
/** Разворачивает сайдбар, не отодвигая контент. Переключает класс expanded у сайдбара */

const buttonSidebarExpandHandler = () => {
  if (mainSidebar.classList.contains('expanded')) {
    mainSidebar.classList.remove('expanded');
  } else {
    mainSidebar.classList.add('expanded');
  }
};
/** Кнопка, сворачивающая сайдбар, класс .sidebar-close-button */


const sidebarCloseButton = document.querySelector('.sidebar-close-button');
/** Сворачивает сайдбар, не отодвигая контент. Отключает класс expanded у сайдбара */

const buttonSidebarCloseHandler = () => {
  mainSidebar.classList.remove('expanded');
};

const sidebarExpandHandler = () => {
  mainSidebar.classList.add('expanded');
};
/** Переключатель светлого/темного режима */


const darkModeToggleButton = document.querySelector('.tumbler__wrapper');

const darkModeToggleHandler = () => {
  let formData = new FormData();
  formData.append("module", "theme");

  if (sidebarWrapper.dataset.themeName === "main-dark") {
    sidebarWrapper.dataset.themeName = "main-light";
    formData.append("theme", "main-light");
  } else if (sidebarWrapper.dataset.themeName === "main-light") {
    sidebarWrapper.dataset.themeName = "main-dark";
    formData.append("theme", "main-dark");
  }

  (0,_globalfunc__WEBPACK_IMPORTED_MODULE_0__.ajax_send)("POST", "pages/admin/ajax.php", formData, "json", result => result, true);
  darkModeToggleButton.classList.toggle('tumbler--night-mode');
};

if (darkModeToggleButton) {
  darkModeToggleButton.addEventListener('click', darkModeToggleHandler);
}
/** Переключает класс .active у ближайшего .menu-item нажатой ссылки меню сайдбара */


const menuitemClickHandler = evt => {
  evt.target.closest('.menu-item').classList.toggle("active");
};
/** Кнопка Назад. Класс .btn-back. Возвращает на страницу, с которой был переход */


const backButtons = document.querySelectorAll('.btn-back');

if (backButtons) {
  backButtons.forEach(function (backButton) {
    backButton.addEventListener('click', () => {
      window.history.back();
    });
  });
}
/** Кнопка Печати страницы. Класс .btn-print */


const printButtons = document.querySelectorAll('.btn-print');

if (printButtons) {
  printButtons.forEach(function (printButtons) {
    printButtons.addEventListener('click', () => {
      window.print();
    });
  });
}
/** Кнопка показать / скрыть пароль */


const showHidePass = document.querySelector('.passcode-switch');
/** Поле ввода пароля */

const passInputList = document.querySelectorAll('.passinput');
/** Показать/скрыть пароль */

const showHidePassHandler = () => {
  /** Меняем тип поля ввода пароля с password на text*/
  if (passInputList[0].type === "password") {
    passInputList.forEach(passInput => passInput.type = "text");
    showHidePass.classList.toggle('is-hidden');
  } else {
    passInputList.forEach(passInput => passInput.type = "password");
    showHidePass.classList.toggle('is-hidden');
  }
};
/** Tooltip и popover */


document.querySelectorAll('.bs-tooltip').forEach(function (tooltip) {
  new bootstrap.Tooltip(tooltip, {
    selector: '[data-bs-toggle="tooltip"]'
  });
});
document.querySelectorAll('[data-bs-toggle="popover"]').forEach(function (popover) {
  new bootstrap.Popover(popover);
});
/** Отключаем спиннер загрузки при загрузке содержимого */

const spinnerLoaderHandler = () => {
  spinnerLoader.style.display = "none";
};
/** Получает имя файла текущей открытой страницы и ищет такое же в ссылках бокового меню, устанавливает класс active открытому пункту или субпункту и его родителю */


const sidebarNavigationMenuHandler = () => {
  let filename = window.location.href.replace(/^.*[\\\/]/, '').replace('#', '');
  let menuLinks = sidebarNavigationMenu.querySelectorAll('.menu-link');
  let submenuLinks = sidebarNavigationMenu.querySelectorAll('.submenu-link');
  Array.from(menuLinks).forEach(menuLink => {
    /** Поменять в этом условии http://isp/, если будет другой домен */
    if (filename === "" && menuLink.href.replace(/^.*[\\\/]/, '').replace('#', '') === "") {
      filename = "/";
      menuLink.closest('.menu-item').classList.add("active");
    }
    /** Условие для локальной версии, где главная index.html */


    if (filename === "" && menuLink.href.replace(/^.*[\\\/]/, '').replace('#', '') === "index.html") {
      filename = "index.html";
      menuLink.closest('.menu-item').classList.add("active");
    }

    if (filename === menuLink.href.replace(/^.*[\\\/]/, '').replace('#', '')) {
      menuLink.closest('.menu-item').classList.add("active");
    }
  });
  Array.from(submenuLinks).forEach(submenuLink => {
    if (filename === submenuLink.href.replace(/^.*[\\\/]/, '').replace('#', '')) {
      submenuLink.closest('.submenu-item').classList.add("active");
      submenuLink.closest('.menu-item').classList.add("active");
    }
  });
  /** Прослушивание нажатия нажатия на ссылки меню .navigation-menu */

  sidebarNavigationMenu.addEventListener('click', menuitemClickHandler);
};
/** Подсказки */


const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
/** Отключаем спиннер загрузки при загрузке содержимого */

const topProgressBar = document.querySelector('.topprogressbar');

const mainContentScrollHandler = () => {
  topProgressBar ? topProgressBar.style.width = mainContent.scrollTop / (mainContent.scrollHeight - mainContent.clientHeight) * 100 + "%" : false;
};
/** Ждем полной загрузки дерева */


document.addEventListener("DOMContentLoaded", () => {
  /** Отключаем спиннер */
  spinnerLoader ? spinnerLoaderHandler() : false;
  /** Возвращает текущий день, месяц и день недели в элементы с классами today-group-day,
   * today-group-month, today-group-dayw
   * */

  function setTopHeaderDate() {
    if (document.querySelector('.today-group')) {
      document.querySelector(".today-group-dayw").textContent = moment().tz('Europe/Moscow').format('dddd');
      document.querySelector(".today-group-day").textContent = moment().tz('Europe/Moscow').format('D');
      document.querySelector(".today-group-month").textContent = moment().tz('Europe/Moscow').format('MMMM');
    }
  }

  if (sidebarWrapper.dataset.sidebarWidth === "wide") {
    sidebarToggleButton.querySelector('i').classList.add('mdi-crosshairs-gps');
  }

  if (sidebarWrapper.dataset.sidebarWidth === "narrow") {
    sidebarToggleButton.querySelector('i').classList.add('mdi-crosshairs');
  }
  /** Прослушивание прокручивания .main-content */


  if (backToTopButton) {
    mainContent.addEventListener('scroll', mainContentScroll);
    /** Прослушивание нажатия кнопки .back-to-top */

    /** Возвращает наверх при нажатии на кнопку .back-to-top */

    backToTopButton.addEventListener('click', () => {
      mainContent.scrollTop = 0;
    });
  }
  /** Прослушивание нажатия кнопки .sidebar-toggle-button */


  if (sidebarToggleButton && sidebarWrapper) {
    sidebarToggleButton.addEventListener('click', evt => {
      buttonSidebarToggleHandler(evt);
    });
  }
  /** Прослушивание нажатия кнопки .sidebar-expand-button */


  if (sidebarExpandButton) {
    sidebarExpandButton.addEventListener('click', buttonSidebarExpandHandler);
  }
  /** Прослушивание нажатия кнопки .sidebar-close-button */


  if (sidebarCloseButton) {
    sidebarCloseButton.addEventListener('click', buttonSidebarCloseHandler);
  }
  /** Разворачивалка сайдбара. Только для ширины экрана 1080 или если установлена настройка */


  if ($(window).width() > 1080 || sidebarWrapper.dataset.sidebarWidth === "narrow") {
    if (mainSidebar) {
      mainSidebar.addEventListener('mouseenter', sidebarExpandHandler);
      mainSidebar.addEventListener('mouseleave', buttonSidebarCloseHandler);
    }
  }
  /** Получает имя файла текущей открытой страницы и ищет такое же в ссылках бокового меню,
   * устанавливает класс active открытому пункту или субпункту и его родителю
   * */


  if (sidebarNavigationMenu) {
    sidebarNavigationMenuHandler();
  }
  /** Прогресс бар над хедером */


  mainContent.addEventListener('scroll', mainContentScrollHandler);
  /** Всплывашка с временем отработки php */

  if (_globalfunc__WEBPACK_IMPORTED_MODULE_0__.cookieID === "1") {
    (0,_globalfunc__WEBPACK_IMPORTED_MODULE_0__.showBsToast)("", _globalfunc__WEBPACK_IMPORTED_MODULE_0__.toastContainer, '.toast-script-time', "");
  }
  /** Показать/скрыть пароль */


  if (showHidePass && passInputList) {
    showHidePass.addEventListener('click', showHidePassHandler);
  }
  /** Установить дату в топбаре. Обновление каждые 5 минут */


  setTopHeaderDate();
  setInterval(() => setTopHeaderDate, 300000);
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globalfunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalfunc */ "./src/assets/js/globalfunc.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/assets/js/ui.js");
/* harmony import */ var _modules_apexchart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/apexchart */ "./src/assets/js/modules/apexchart.js");
/* harmony import */ var _modules_certificatework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/certificatework */ "./src/assets/js/modules/certificatework.js");
/* harmony import */ var _modules_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/datatables */ "./src/assets/js/modules/datatables.js");
/* harmony import */ var _modules_faq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/faq */ "./src/assets/js/modules/faq.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/forms */ "./src/assets/js/modules/forms.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_forms__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_fullcalendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/fullcalendar */ "./src/assets/js/modules/fullcalendar.js");
/* harmony import */ var _modules_overlayscrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/overlayscrollbar */ "./src/assets/js/modules/overlayscrollbar.js");
/* harmony import */ var _modules_overlayscrollbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_overlayscrollbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_phonebook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/phonebook */ "./src/assets/js/modules/phonebook.js");
/* harmony import */ var _modules_proxylist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/proxylist */ "./src/assets/js/modules/proxylist.js");
/* harmony import */ var _modules_proxylist__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_proxylist__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_tasks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/tasks */ "./src/assets/js/modules/tasks.js");
/* harmony import */ var _modules_tetris__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/tetris */ "./src/assets/js/modules/tetris.js");
/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/validation */ "./src/assets/js/modules/validation.js");
/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/weather */ "./src/assets/js/modules/weather.js");
/* harmony import */ var _modules_workplaces__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/workplaces */ "./src/assets/js/modules/workplaces.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/search */ "./src/assets/js/modules/search.js");



















}();
/******/ })()
;
//# sourceMappingURL=app.js.map