'use strict';

// Цвета
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
    'dark': '#1F2B3A',
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
    'teal': '#58ddda',
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
    'teal': '#96e7e6',
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
    'teal': '#069898',
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
    'teal': '#0a6a70',
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
    'gray-dark': 'rgba(52, 67, 87, 0.2)',
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
    'azure': 'rgba(28, 154, 238, 0.5)',
  },
  black: '#1F2B3A',
  white: '#faf7fa',
  transparent: 'transparent',
};

// Chart JS
// Apex Charts

const themeColors = [colors.theme['primary'], colors.theme['warning'], colors.theme['danger'], colors.theme['success'], colors.theme['info']];
const apexChartList = document.querySelectorAll('.apexchart');

const apexChartOptions = (chartname) => {

  const postoutboxChart = {
    series: [{
      name: 'Исходящая почта',
      data: [11610, 29513, 28845, 30240, 23662, 36230, 41202, 37862, 36211, 36859, 34827]
    }],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
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
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const postinboxChart = {
    series: [{
      name: 'Входящая почта',
      data: [4147, 9372, 12395, 12226, 11378, 11481, 11418, 12372, 11721, 11917, 12308]
    }],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const gcaseChart = {
    series: [{
      name: 'Гражданские дела',
      data: [1777, 1935, 2108, 2892, 2784, 2593, 2454, 2145, 1785, 1388, 1587]
    }],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const g1caseChart = {
    series: [{
      name: 'Гражданские дела ап. инстанции',
      data: [45, 62, 43, 60, 58, 57, 42, 35, 51, 68, 58]
    }],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const admcaseChart = {
    series: [{
      name: 'Дела об адм. правонарушениях',
      data: [30, 25, 33, 1096, 1044, 844, 817, 882, 695, 467, 382]
    }],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const adm1caseChart = {
    series: [{
      name: 'Жалобы по адм. делам',
      data: [0, 0, 0, 0, 166, 204, 205, 198, 145, 138, 123]
    }],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const ucaseChart = {
    series: [{
      name: 'Уголовные дела',
      data: [275, 366, 364, 294, 360, 373, 254, 214, 282, 251, 240]
    }],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const u1caseChart = {
    series: [{
      name: 'Уголовные дела ап. инстанции',
      data: [15, 30, 17, 17, 13, 8, 14, 9, 9, 6, 13]
    }],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
    },
    tooltip: {
      x: {show: false}
    },
  }
  const mucaseChart = {
    series: [{
      name: 'Материалы в порядке уг. производства, всего',
      data: [545, 3440, 2634, 1662, 1232, 1852, 1926, 1604, 2216, 1564, 1494]
    }],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
    },
    tooltip: {
      x: {show: false}
    },
  }

  switch (chartname) {
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
  }
}

const apexChartInit = (chart, chartName) => {
  let apexChart = new ApexCharts(chart, apexChartOptions(chartName));
  apexChart.render();
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
      let queryString = Object.keys(parameters).map(key => key + '=' + parameters[key]).join('&');
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
          callback("null");
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

  ajax_send("POST", "pages/admin/ajax.php", formData, "json", result => console.log(result));
  window.location.reload();
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
  ajax_send("POST", "pages/admin/ajax.php", formData, "json", result => console.log(result));
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

/* Возвращает текущий день, месяц и день недели в элементы с классами today-group-day,
*  today-group-month, today-group-dayw */
if (document.querySelector('.today-group')) {
  document.querySelector(".today-group-dayw").innerHTML = moment().tz('Europe/Moscow').format('dddd');
  document.querySelector(".today-group-day").innerHTML = moment().tz('Europe/Moscow').format('D');
  document.querySelector(".today-group-month").innerHTML = moment().tz('Europe/Moscow').format('MMMM');

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

let calendCat = [
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

// Извлекает из объекта цвет-категория названия цветов для событий и всплывашек
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
    timeZone: 'Europe/Moscow',
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
      right: 'prev,next,today',
      left: 'title',
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
}

// Календарь. Модуль
// Контейнер для календаря
const calendarEl = document.getElementById('calendar');

const calendmodulehandler = () => {
  //Элементы
  const neweventbtn = document.getElementById("myBtn");
  //Модал и его элементы
  // Модал добавления события
  const modal = document.getElementById("addEventsModal");

  // Кнопка "Добавить событие" в модале добавления события. Сохраняет событие
  const addEventBtn = document.getElementById("add-event-btn");
  // Кпока "Сохранить" событие на модале
  const updateEventBtn = document.getElementById("edit-event");

  // Заголовок модала Добавить событие. Для переключения в заголовке слов редактировать / создать
  const addEventTitle = document.querySelector(".add-event-title");
  // Заголовок модала Редактировать событие. Для переключения в заголовке слов редактировать / создать
  const editEventTitle = document.querySelector(".edit-event-title");

  // Кнопка закрыть на модале (крестик)
  const span = modal.querySelector(".btn-close");
  // Кнопка отмены на модале
  const cancelBtn = document.getElementById("discard");
  // Кнопка удалить событие на модале
  const btnDeleteEvent = document.getElementById("delete");

  // Форма в модале
  const eventForm = modal.querySelector(".event-form");

  // Название события в модале
  const eventTitle = document.getElementById("title");
  // Селект категории события
  const eventLabel = document.getElementById("select-label");
  // Дата начала
  const startDate = document.getElementById("start-date");
  // Дата окончания
  const endDate = document.getElementById("end-date");
  // URL события
  const eventUrl = document.getElementById("event-url");
  // Кнопка открыть ссылку
  const urlopen = document.getElementById("urlopen");
  // Переключатель Весь день
  const allDaySwitch = document.querySelector(".allDay-switch");
  // Переключатель Вижу только я (приватное событие)
  const privateSwitch = document.querySelector(".private-switch");

  // Все элементы <textarea> в модале
  const calendarEditor = document.getElementById('event-description-editor');

  // Фильтр событий
  const calEventFilter = document.querySelector(".calendar-events-filter");
  // Чекбоксы в фильтре
  const filterInput = document.querySelectorAll('.input-filter');
  // Чекбокс Все в фильтре
  const selectAll = document.querySelector(".select-all");
  // Чекбокс Только мои события
  const privateinp = document.getElementById('Private');

  // Чекбокс повторяющееся событие
  const repeatSwitch = document.querySelector(".repeat-switch");
  // Колонки с параметрами повторения
  const repeatparams = document.querySelector(".repeat-col");

  // Переключатели повторения
  const repparamSwitch = document.getElementById("dayrepopt");
  // Секции с параметрами повторения по неделям, месяцам, годам
  //const dailysection = document.getElementById("daily-section");
  const weeklysection = document.getElementById("weekly-section");
  const monthlysection = document.getElementById("monthly-section");
  //const yearlysection = document.getElementById("yearly-section");
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
  // Таб Основное на модале
  const maintab = document.getElementById("nav-main-tab");
  // Таб Повторение на модале
  const reptab = document.getElementById("nav-rep-tab");
  // Вкладка Основное на модале
  const mainpane = document.getElementById("nav-main");
  // Вкладка Повторение на модале
  const reppane = document.getElementById("nav-rep");
  // Все чекбоксы дней недель
  const wdayscheck = document.querySelectorAll('.wdays-check');
  // Чекбокс Пн
  const monday = document.getElementById("monday");
  // Чекбокс Вт
  const tuesday = document.getElementById("tuesday");
  // Чекбокс Ср
  const wednesday = document.getElementById("wednesday");
  // Чекбокс Чт
  const thursday = document.getElementById("thursday");
  // Чекбокс Пт
  const friday = document.getElementById("friday");
  // Чекбокс Сб
  const saturday = document.getElementById("saturday");
  // Чекбокс Вс
  const sunday = document.getElementById("sunday");
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

  // Функции

  // Скрыть модал
  function hideModal() {
    modal.style.display = "none";
    modal.classList.remove('show');
    const btn = document.querySelector('.modal-backdrop');
    if (btn) {
      document.body.removeChild(btn);
    }
  }

  // Показать модал
  function showModal() {
    modal.classList.add('show');
    modal.style.display = "block";
    const btn = document.createElement("div");
    btn.setAttribute('class', 'modal-backdrop fade show')
    document.body.appendChild(btn);
  }

  // Отметить чекбоксы дней недели по массиву
  function checkweekdays(array) {
    for (let j = 0; j < array.length; j++) {
      $(wdayscheck[array[j]]).prop('checked', true);
    }
  }

  // Сформировать строку дней недели по чекбоксам
  function getweekdaycheck() {
    const days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    let array = '';
    let count = 1;
    for (let j = 0; j < wdayscheck.length; j++) {
      if ($(wdayscheck[j]).prop('checked')) {
        if (count === 1) {
          array = array + days[j];
        } else {
          array = array + ', ' + days[j];
        }
        count++;
      }
    }
    return array;
  }

  // Выбор повторения
  function repswitch(info) {
    if ($(repeatSwitch).prop('checked')) {
      if (info == null) {
        const date = moment().tz('Europe/Moscow').format('YYYY-MM-DD HH:mm');
        $(startrepDate).val(date);
        const enddate = moment(date).tz('Europe/Moscow').add(9, 'years').format('YYYY-MM-DD HH:mm');
        $(endrepDate).val(enddate);
      } else {
        const date = moment(info).tz('Europe/Moscow').format('YYYY-MM-DD HH:mm');
        $(startrepDate).val(date);
        const enddate = moment(date).tz('Europe/Moscow').add(9, 'years').format('YYYY-MM-DD HH:mm');
        $(endrepDate).val(enddate);
      }
      repeatparams.style.display = "block";
      $(repparamSwitch).prop('required', true);
    } else {
      repeatparams.style.display = "none";
      $(startrepDate).val('');
      $(endrepDate).val('');
      $(repparamSwitch).val('none');
      $(repparamSwitch).prop('required', false);
    }
  }

  // Обновление события
  const addEvent = () => {
    function updSucces(result, title) {
      hideModal();
      resetValues();
      if (result === "null") {
        showMiniToast('Событие ' + title + ' обновлено', "info");
      }
      calendar.refetchEvents();
    }

    if ($(eventForm).valid()) {
      let Event = new FormData();
      Event.append("operation", "upd");
      Event.append("id", eventToUpdate.id);
      Event.append("title", $(modal).find(eventTitle).val());
      let title = $(modal).find(eventTitle).val();
      Event.append("start", $(modal).find(startDate).val());
      Event.append("end", $(modal).find(endDate).val());
      Event.append("url", $(eventUrl).val());
      Event.append("calendar", $(eventLabel).val());
      Event.append("private", $(privateSwitch).prop('checked') ? '1' : '0');
      Event.append("description", $(calendarEditor).val());
      Event.append("tzid", "Europe/Moscow");
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
        Event.append("dtstart", moment($(startrepDate).val()).format('YYYY-MM-DD HH:mm:ss'));
        // Диапазон повторения
        if ($(repdate).prop('checked')) {
          Event.append("until", moment($(endrepDate).val()).format('YYYY-MM-DD HH:mm:ss'));
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
        Event.append("dtstart", moment($(startrepDate).val()).format('YYYY-MM-DD HH:mm:ss'));

        // Диапазон повторения
        if ($(repdate).prop('checked')) {
          Event.append("until", moment($(endrepDate).val()).format('YYYY-MM-DD HH:mm:ss'));
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
  }

  // Удаление события
  const delEvent = () => {
    function delSucces(result, title) {
      hideModal();
      resetValues();
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

  // Закрытие модала и сброс инпутов
  const closeAddEvModal = () => {
    hideModal();
    resetValues();
  }

  // Событие при нажатии на событие
  function eventClick(info) {
    eventToUpdate = info.event;

    // Прослушка кликов по кнопке закрыть
    span.addEventListener('click', () => closeAddEvModal());

    // Открывает ссылку в новом окне
    if ((eventToUpdate).url) {
      info.jsEvent.preventDefault();
    }
    // Открывашка ссылки
    $(urlopen).on('click', function () {
      window.open((eventToUpdate).url, '_blank');
    });

    console.log(eventToUpdate);
    // Запрет на редактирование событий без id и фоновых
    if (info.event.id !== "" && info.event.display !== "background") {
      showModal();
      // Проверяем права пользователя и его ID и включаем возможность редактирования
      if (eventToUpdate.extendedProps.user_id === cookieID || JSON.stringify(eventToUpdate.extendedProps.user_id) === cookieID) {
        // Добавляем прослушку кликов по кнопкам Добавить и Обновить
        updateEventBtn.style.display = "block";
        btnDeleteEvent.style.display = "block";
        updateEventBtn.disabled = false;
        btnDeleteEvent.disabled = false;
      } else {
        updateEventBtn.style.display = "block";
        btnDeleteEvent.style.display = "block";
        updateEventBtn.disabled = true;
        btnDeleteEvent.disabled = true;
      }
      editEventTitle.style.display = "block";
      $(eventTitle).val(eventToUpdate.title);
      // Приватное событие
      if (eventToUpdate.extendedProps.private === 0 || eventToUpdate.extendedProps.private === "0") {
        $(privateSwitch).prop('checked', false)
      } else {
        $(privateSwitch).prop('checked', true)
      }
      // Разные даты начала и конца события для создаваемых событий при нажатии на кнопку создания и на день
      const date = moment(info.date).format('YYYY-MM-DD HH:mm');
      $(startDate).val(date);
      $(endDate).val(date);

      // Если включили повторение, то дата начала повторения берется из даты начала события
      repeatSwitch.addEventListener('click', () => repswitch(moment($(startDate).val()).format('YYYY-MM-DD HH:mm')));

      // Выбор повторения для дня
      $(repparamSwitch).on('change', function () {
        if (
          repparamSwitch.options[repparamSwitch.selectedIndex].value === 'none') {
          intervalsection.style.display = "none";
          weeklysection.style.display = "none";
          monthlysection.style.display = "none";
          $(evdmonth).prop("checked", false);
        }
        if (
          repparamSwitch.options[repparamSwitch.selectedIndex].value === 'daily-section') {
          intervalsection.style.display = "block";
          weeklysection.style.display = "none";
          monthlysection.style.display = "none";
          $(evdmonth).prop("checked", false);
          daynumlabel2.innerHTML = 'Каждый';
          daynumlabel1.innerHTML = 'день';
          daynum.setAttribute('max', '31');
        }
        if (
          repparamSwitch.options[repparamSwitch.selectedIndex].value === 'weekly-section') {
          intervalsection.style.display = "block";
          weeklysection.style.display = "block";
          monthlysection.style.display = "none";
          // Получаем текущий день недели, ставим галочку в параметрах
          if (!(eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.byweekday)) {
            checkweekdays([moment($(startDate).val()).weekday()]);
          }
          $(evdmonth).prop("checked", false);
          daynumlabel2.innerHTML = 'Каждую';
          daynumlabel1.innerHTML = 'неделю';
          daynum.setAttribute('max', '53');
        }
        if (
          repparamSwitch.options[repparamSwitch.selectedIndex].value === 'monthly-section') {
          intervalsection.style.display = "block";
          weeklysection.style.display = "none";
          monthlysection.style.display = "block";
          // Переключаем на дефолтное радио
          $(evdmonth).prop("checked", true);
          $(dayofmonth).val(moment($(startDate).val()).date());
          daynumlabel2.innerHTML = 'Каждый';
          daynumlabel1.innerHTML = 'месяц';
          daynum.setAttribute('max', '12');
        }
        if (
          repparamSwitch.options[repparamSwitch.selectedIndex].value === 'yearly-section') {
          intervalsection.style.display = "block";
          weeklysection.style.display = "none";
          monthlysection.style.display = "none";
          $(evdmonth).prop("checked", false);
          daynumlabel2.innerHTML = 'Каждый';
          daynumlabel1.innerHTML = 'год';
          daynum.setAttribute('max', '100');
        }
      })

      // Если в конце повторения включена дата, то блокируется ввоб кол-ва повторений и наоборот
      $(repdate).on('click', function () {
        if ($(repdate).is(':checked')) {
          $(repdateinp).prop("disabled", false);
          $(repcount).prop("checked", false);
        } else {
          $(repdateinp).prop("disabled", true);
        }
      })
      $(repcount).on('click', function () {
        if ($(repcount).is(':checked')) {
          $(repcountinp).prop("disabled", false);
          $(repdate).prop("checked", false);
        } else {
          $(repcountinp).prop("disabled", true);
        }
      })

      // Если переключают на весь день, то меняется диапазон времени на весь день, и наоборот, на текущее время, не меняя введенной даты
      $(allDaySwitch).on('click', function () {
        if ($(allDaySwitch).prop('checked')) {
          $(startDate).val(moment($(startDate).val()).hour(0).minutes(0).format('YYYY-MM-DD HH:mm'));
          $(endDate).val(moment($(endDate).val()).hour(23).minutes(59).format('YYYY-MM-DD HH:mm'));
        } else {
          $(startDate).val(moment($(startDate).val()).hour(moment().hour()).minutes(moment().minutes()).format('YYYY-MM-DD HH:mm'));
          $(endDate).val(moment($(endDate).val()).hour(moment().hour()).minutes(moment().minutes()).format('YYYY-MM-DD HH:mm'));
        }
      })

      // Проверка дат начала и конца, при изменении даты, меняет неправильную
      $(startDate).on('change', function () {
        if ($(startDate).val() > $(endDate).val()) {
          $(endDate).val($(startDate).val());
        }
      })
      $(endDate).on('change', function () {
        if ($(startDate).val() > $(endDate).val()) {
          $(startDate).val($(endDate).val());
        }
      })

      // Повторять до даты
      if (eventToUpdate._def.recurringDef !== null) {
        // Для еженедельного
        if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.freq === 2) {
          intervalsection.style.display = "block";
          // Чекбоксы дней недель
          let array = eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.byweekday;
          for (let i = 0; i < array.length; i++) {
            if (array[i] === 0) {
              $(monday).prop('checked', true)
            }
            if (array[i] === 1) {
              $(tuesday).prop('checked', true)
            }
            if (array[i] === 2) {
              $(wednesday).prop('checked', true)
            }
            if (array[i] === 3) {
              $(thursday).prop('checked', true)
            }
            if (array[i] === 4) {
              $(friday).prop('checked', true)
            }
            if (array[i] === 5) {
              $(saturday).prop('checked', true)
            }
            if (array[i] === 6) {
              $(sunday).prop('checked', true)
            }
          }
        }

        $(repeatSwitch).prop('checked', true);
        repeatparams.style.display = "block";
        $(repparamSwitch).prop('required', true);
        $(startrepDate).val(moment(eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.dtstart).utc().format('YYYY-MM-DD HH:mm'));
        if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.until) {
          $(endrepDate).val(moment(eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.until).utc().format('YYYY-MM-DD HH:mm'));
          $(repdate).prop('checked', true);
          $(endrepDate).prop("disabled", false);
        } else {
          $(endrepDate).val("");
          $(repdate).prop('checked', false);
          $(endrepDate).prop("disabled", true);
        }
        // Кол-во повторений
        if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.count) {
          $(repcountinp).val(eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.count);
          $(repcount).prop('checked', true);
        } else {
          $(repcountinp).val("");
          $(repcount).prop('checked', false);
        }

        if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.freq === 3) {
          $(repparamSwitch).val('daily-section');
          weeklysection.style.display = "none";
          monthlysection.style.display = "none";
          intervalsection.style.display = "block";
          daynumlabel2.innerHTML = 'Каждый';
          daynumlabel1.innerHTML = 'день';
          daynum.setAttribute('max', '31');
        } else if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.freq === 2) {
          $(repparamSwitch).val('weekly-section');
          weeklysection.style.display = "block";
          monthlysection.style.display = "none";
          intervalsection.style.display = "block";
          daynumlabel2.innerHTML = 'Каждую';
          daynumlabel1.innerHTML = 'неделю';
          daynum.setAttribute('max', '53');
        } else if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.freq === 1) {
          $(repparamSwitch).val('monthly-section');
          monthlysection.style.display = "block";
          weeklysection.style.display = "none";
          intervalsection.style.display = "block";
          daynumlabel2.innerHTML = 'Каждый';
          daynumlabel1.innerHTML = 'месяц';
          daynum.setAttribute('max', '12');
          // Чекбоксы повторения для месяца
          if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.bysetpos === null) {
            $(evdmonth).prop("checked", true);
            $(dayofmonth).val(eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.bymonthday[0]);
          }
          if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.bysetpos === -1 &&
            JSON.stringify(eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.byweekday) === '[0,1,2,3,4]') {
            $(lastworkdmonth).prop("checked", true);
          }
          if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.bysetpos === 1 &&
            JSON.stringify(eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.byweekday) === '[0,1,2,3,4]') {
            $(firstworkdmonth).prop("checked", true);
          }
          if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.bysetpos === 1 &&
            JSON.stringify(eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.byweekday) === '[0,1,2,3,4,5,6]') {
            $(firstdmonth).prop("checked", true);
          }
          if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.bysetpos === -1 &&
            JSON.stringify(eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.byweekday) === '[0,1,2,3,4,5,6]') {
            $(lastdmonth).prop("checked", true);
          }
        } else if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.freq === 0) {
          $(repparamSwitch).val('yearly-section');
          weeklysection.style.display = "none";
          monthlysection.style.display = "none";
          intervalsection.style.display = "block";
          daynumlabel2.innerHTML = 'Каждый';
          daynumlabel1.innerHTML = 'год';
          daynum.setAttribute('max', '100');
        } else if (eventToUpdate._def.recurringDef.typeData.rruleSet._rrule[0].options.freq === null) {
          return;
        }
      } else {
        $(repeatSwitch).prop('checked', false);
      }

      start.setDate(eventToUpdate.start, true, 'YYYY-MM-DD HH:mm');
      if (eventToUpdate.allDay === true) {
        $(allDaySwitch).prop('checked', true)
      } else if (eventToUpdate.allDay === false) {
        $(allDaySwitch).prop('checked', false)
      }
      eventToUpdate.end !== null
        ? end.setDate(eventToUpdate.end, true, 'YYYY-MM-DD HH:mm')
        : end.setDate(eventToUpdate.start, true, 'YYYY-MM-DD HH:mm');
      $(modal).find(eventLabel).val(eventToUpdate.extendedProps.calendar).trigger('change');
      $(modal).find(calendarEditor).val(eventToUpdate.extendedProps.description);
      $(modal).find(eventUrl).val(eventToUpdate.url);

      $(repdate).on('click', function () {
        if ($(repdate).is(':checked')) {
          $(repdateinp).prop("disabled", false);
          $(repcount).prop("checked", false);
        } else {
          $(repdateinp).prop("disabled", true);
        }
      })
      $(repcount).on('click', function () {
        if ($(repcount).is(':checked')) {
          $(repcountinp).prop("disabled", false);
          $(repdate).prop("checked", false);
        } else {
          $(repcountinp).prop("disabled", true);
        }
      })
    }
  }

  // Селект для меток в модале
  function renderCheckboxes() {
    const parent = document.getElementById('calEventFilter');
    parent.innerHTML = '';

    const header = `<p class="group-title mb-2">Календарь:</p>`;

    const selAll = `<div class="form-check d-flex align-items-center mb-3">
                  <input class="form-check-input input-filter bg-dark select-all me-1" type="checkbox" id="select-all"
                         name="select-all" checked>
                  <label class="form-check-label" for="select-all">Все</label>
                </div>`;

    parent.insertAdjacentHTML('beforeend', header);
    parent.insertAdjacentHTML('beforeend', selAll);

    const createItem = ({id, color, name}) =>
      `<div class="form-check d-flex align-items-center mb-2">
                  <input class="form-check-input input-filter bg-${color} me-1" type="checkbox" id="${color}" name="${color}"
                         data-value="${color}" value="${color}" checked>
                  <label class="form-check-label" for="${color}">${name}</label>
                </div>`;

    const ElementsString = calendCat.map((color) => createItem(color)).join('');
    parent.insertAdjacentHTML('beforeend', ElementsString);
  }

  renderCheckboxes();

  // Селект для меток в модале
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

  // Селект для меток в модале
  function renderOptions() {
    const parent = document.getElementById('select-label');
    parent.innerHTML = '';

    const placeholderItem = `<option></option>`;

    parent.insertAdjacentHTML('beforeend', placeholderItem);

    const createItem = ({id, color, name}) =>
      `<option data-label="${color}" value="${color}">${name}</option>`;

    const ElementsString = calendCat.map((color) => createItem(color)).join('');
    parent.insertAdjacentHTML('beforeend', ElementsString);
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

  // Датапикер начало события
  const start = startDate.flatpickr({
    locale: "ru",
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
  });

  // Датапикер конец события
  const end = endDate.flatpickr({
    locale: "ru",
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
    onReady: function (selectedDates, dateStr, instance) {
    }
  });

  // Датапикер начало повторения
  const startrep = startrepDate.flatpickr({
    locale: "ru",
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
  });

  // Датапикер конца повторения
  const endrep = endrepDate.flatpickr({
    locale: "ru",
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
  });

  // Выбранные чекбоксы
/*  function selectedCalendars() {
    const filterInput2 = document.querySelectorAll('.input-filter:not(.select-all)');
    const selected = [];
    for (let j = 0; j < filterInput2.length; j++) {
      if ($(filterInput2[j]).prop('checked')) {
        selected.push(filterInput2[j].dataset.value.toLowerCase());
      }
    }
    return selected;
  }
*/

  function privatecheck() {
    if ($(privateinp).prop('checked')) {
      return 1;
    } else {
      return 0;
    }
  }

  // Получение событий. Эта функция будет вызываться fullCalendar для получения и обновления событий.
  function fetchEvents(info, successCallback) {
    // Получение событий AJAX
    const filterInput2 = document.querySelectorAll('.input-filter:not(.select-all)');

    let data = {
      // С не фиксированной датой не работают повторяющиеся собыия
      startParam: moment(info.start).tz('Europe/Moscow').format('YYYY-MM-DD'),
      endParam: moment(info.end).tz('Europe/Moscow').format('YYYY-MM-DD'),
      //calendars: selectedCalendars(),
      calendars: selectedCheckboxes(filterInput2, 'selected'),
      private: privatecheck(),
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

  const calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'ru',
    timeZone: 'Europe/Moscow',
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
    headerToolbar: {
      left: 'title',
      center: '',
      right: 'prev,next,today dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    eventMouseEnter: function (event,) {
      if (event.event.display !== "background") {
        showPopover(event);
      }
    },
    eventMouseLeave: function () {
      hidePopover();
    },
    dateClick: function (info) {
      neweventmodal(info);
    },
    eventClick: function (info) {
      eventClick(info);
    }
  });
  // Рендеринг календаря

  calendar.render();

  // Валидация для jquery validate
  if ($(eventForm).length) {
    $(eventForm).validate({
      submitHandler: function (form, event) {
        event.preventDefault();
        if ($(eventForm).valid()) {
          $(modal)('hide');
        }
      },
      'title': {
        required: true
      },
      'start-date': {
        required: true
      },
      'end-date': {
        required: true
      },
      'select-label': {
        required: true
      }
    });
  }

  function neweventmodal(info) {
    resetValues();
    showModal();

    // Прослушка кликов по кнопкам отмена и закрыть
    span.addEventListener('click', () => closeAddEvModal());
    cancelBtn.addEventListener('click', () => closeAddEvModal());

    // Показываем кнопку Добавить
    addEventBtn.style.display = "block";
    // Показываем кнопку Отмена
    cancelBtn.style.display = "block";
    addEventTitle.style.display = "block";

    // Разные даты начала и конца события для создаваемых событий при нажатии на кнопку создания и на день
    if (info == null) {
      //const date = moment().format('YYYY-MM-DD HH:mm');
      $(startDate).val("");
      $(endDate).val("");
    } else {
      const date = moment(info.date).format('YYYY-MM-DD HH:mm');
      $(startDate).val(date);
      $(endDate).val(date);
    }

    // Если включили повторение, то дата начала повторения берется из даты начала события
    $(repeatSwitch).on('click', function () {
      if (info == null) {
        const date = moment().format('YYYY-MM-DD HH:mm');
        repswitch(date);
      } else {
        const date = moment(info.date).format('YYYY-MM-DD HH:mm');
        repswitch(date);
      }
    })

    // Выбор повторения для дня
    $(repparamSwitch).on('change', function () {
      if (
        repparamSwitch.options[repparamSwitch.selectedIndex].value === 'none') {
        intervalsection.style.display = "none";
        weeklysection.style.display = "none";
        monthlysection.style.display = "none";
        $(evdmonth).prop("checked", false);
      }
      if (
        repparamSwitch.options[repparamSwitch.selectedIndex].value === 'daily-section') {
        intervalsection.style.display = "block";
        weeklysection.style.display = "none";
        monthlysection.style.display = "none";
        $(evdmonth).prop("checked", false);
        daynumlabel2.innerHTML = 'Каждый';
        daynumlabel1.innerHTML = 'день';
        daynum.setAttribute('max', '31');
      }
      if (
        repparamSwitch.options[repparamSwitch.selectedIndex].value === 'weekly-section') {
        intervalsection.style.display = "block";
        weeklysection.style.display = "block";
        monthlysection.style.display = "none";
        // Получаем текущий день недели, ставим галочку в параметрах
        checkweekdays([moment($(startDate).val()).weekday()]);
        $(evdmonth).prop("checked", false);
        daynumlabel2.innerHTML = 'Каждую';
        daynumlabel1.innerHTML = 'неделю';
        daynum.setAttribute('max', '53');
      }
      if (
        repparamSwitch.options[repparamSwitch.selectedIndex].value === 'monthly-section') {
        intervalsection.style.display = "block";
        weeklysection.style.display = "none";
        monthlysection.style.display = "block";
        // Переключаем на дефолтное радио
        $(evdmonth).prop("checked", true);
        $(dayofmonth).val(moment($(startDate).val()).date());
        daynumlabel2.innerHTML = 'Каждый';
        daynumlabel1.innerHTML = 'месяц';
        daynum.setAttribute('max', '12');
      }
      if (
        repparamSwitch.options[repparamSwitch.selectedIndex].value === 'yearly-section') {
        intervalsection.style.display = "block";
        weeklysection.style.display = "none";
        monthlysection.style.display = "none";
        $(evdmonth).prop("checked", false);
        daynumlabel2.innerHTML = 'Каждый';
        daynumlabel1.innerHTML = 'год';
        daynum.setAttribute('max', '100');
      }
    })

    // Если в конце повторения включена дата, то блокируется ввоб кол-ва повторений и наоборот
    $(repdate).on('click', function () {
      if ($(repdate).is(':checked')) {
        $(repdateinp).prop("disabled", false);
        $(repcount).prop("checked", false);
      } else {
        $(repdateinp).prop("disabled", true);
      }
    })
    $(repcount).on('click', function () {
      if ($(repcount).is(':checked')) {
        $(repcountinp).prop("disabled", false);
        $(repdate).prop("checked", false);
      } else {
        $(repcountinp).prop("disabled", true);
      }
    })

    // Если переключают на весь день, то меняется диапазон времени на весь день, и наоборот, на текущее время, не меняя введенной даты
    $(allDaySwitch).on('click', function () {
      if ($(allDaySwitch).prop('checked')) {
        $(startDate).val(moment($(startDate).val()).hour(0).minutes(0).format('YYYY-MM-DD HH:mm'));
        $(endDate).val(moment($(endDate).val()).hour(23).minutes(59).format('YYYY-MM-DD HH:mm'));
      } else {
        $(startDate).val(moment($(startDate).val()).hour(moment().hour()).minutes(moment().minutes()).format('YYYY-MM-DD HH:mm'));
        $(endDate).val(moment($(endDate).val()).hour(moment().hour()).minutes(moment().minutes()).format('YYYY-MM-DD HH:mm'));
      }
    })

    // Проверка дат начала и конца, при изменении даты, меняет неправильную
    $(startDate).on('change', function () {
      if ($(startDate).val() > $(endDate).val()) {
        $(endDate).val($(startDate).val());
      }
    })
    $(endDate).on('change', function () {
      if ($(startDate).val() > $(endDate).val()) {
        $(startDate).val($(endDate).val());
      }
    })
  }

  $(neweventbtn).on('click', function () {
    neweventmodal(null);
  });

  // Кнопка - Добавление нового события
  $(addEventBtn).on('click', function () {

    function addSucces(result, title) {
      hideModal();
      resetValues();
      if (result === "null") {
        showMiniToast('Событие ' + title + ' добавлено', "success");
      }
      calendar.refetchEvents();
    }

    if ($(eventForm).valid()) {

      let Event = new FormData();
      Event.append("operation", "add");
      Event.append("title", $(eventTitle).val());
      let title = $(eventTitle).val();
      Event.append("start", moment($(startDate).val()).format('YYYY-MM-DD HH:mm:ss'));
      Event.append("end", moment($(endDate).val()).format('YYYY-MM-DD HH:mm:ss'));
      Event.append("calendar", $(eventLabel).val());
      Event.append("description", $(calendarEditor).val());
      Event.append("url", $(eventUrl).val());
      Event.append("private", $(privateSwitch).prop('checked') ? 1 : 0);
      Event.append("user_id", cookieID);
      Event.append("tzid", "Europe/Moscow");
      if ($(allDaySwitch).prop('checked')) {
        // Если Весь день, то меняем переменную
        Event.append("allDay", "1");
      }
      // Параметры повторения. Если галочка включена
      if ($(repeatSwitch).prop('checked')) {
        Event.append("interval", $(daynum).val());
        if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'daily-section') {
          // Ежедневно.
          Event.append("freq", "DAILY");
        } else if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'weekly-section') {
          // Еженедельно.
          Event.append("freq", "WEEKLY");
          // Получаем отмеченные чекбоксы
          Event.append("byweekday", getweekdaycheck());
        } else if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'monthly-section') {
          // Ежемесячно
          Event.append("freq", "MONTHLY");
          // Проверяем чекбоксы
          // Последний день
          if ($(lastdmonth).prop('checked')) {
            Event.append("byweekday", "MO, TU, WE, TH, FR, SA, SU");
            Event.append("bysetpos", "-1");
          } else
            // Первый день
          if ($(firstdmonth).prop('checked')) {
            Event.append("byweekday", "MO, TU, WE, TH, FR, SA, SU");
            Event.append("bysetpos", "1");
          } else
            // Первый рабочий день
          if ($(firstworkdmonth).prop('checked')) {
            Event.append("byweekday", "MO, TU, WE, TH, FR");
            Event.append("bysetpos", "1");
          } else
            // Последний рабочий день
          if ($(lastworkdmonth).prop('checked')) {
            Event.append("byweekday", "MO, TU, WE, TH, FR");
            Event.append("bysetpos", "-1");
          }
        } else if (repparamSwitch.options[repparamSwitch.selectedIndex].value === 'yearly-section') {
          // Ежегодно
          Event.append("freq", "YEARLY");
        }

        // Начало повторения
        Event.append("dtstart", moment($(startrepDate).val()).format('YYYY-MM-DD HH:mm:ss'));
        // Диапазон повторения
        if ($(repdate).prop('checked')) {
          Event.append("until", moment($(endrepDate).val()).format('YYYY-MM-DD HH:mm:ss'));
        }
        // Кол-во повторений
        if ($(repcount).prop('checked')) {
          Event.append("count", $(repcountinp).val());
        }
      }

      ajax_send("POST", "components/fullcalendar/ajax.php", Event, "json", result => addSucces(result, title));
    }
  });

  updateEventBtn.addEventListener('click', () => addEvent());
  btnDeleteEvent.addEventListener('click', () => delEvent());

  // Сброс значений модала
  function resetValues() {
    $(endDate).val('');
    $(eventUrl).val('');
    $(startDate).val('');
    $(eventTitle).val('');
    $(allDaySwitch).prop('checked', false);
    $(privateSwitch).prop('checked', false);
    $(repeatSwitch).prop('checked', false);
    $(calendarEditor).val('');
    repeatparams.style.display = "none";
    $(repparamSwitch).val('none');
    $(modal).find(eventLabel).val('').trigger('change');
    $(repdate).prop('checked', false);
    $(repdateinp).val('');
    $(repcount).prop('checked', false);
    $(repcountinp).val('');
    // Параметры повторений
    $(startrepDate).val('');
    $(endrepDate).val('');
    $(monday).prop('checked', false);
    $(tuesday).prop('checked', false);
    $(wednesday).prop('checked', false);
    $(thursday).prop('checked', false);
    $(friday).prop('checked', false);
    $(saturday).prop('checked', false);
    $(sunday).prop('checked', false);
    // Скрытие заголовков и кнопок
    updateEventBtn.style.display = "none";
    btnDeleteEvent.style.display = "none";
    addEventBtn.style.display = "none";
    cancelBtn.style.display = "none";
    addEventTitle.style.display = "none";
    editEventTitle.style.display = "none";
    // Переключить вкладку на Основное
    maintab.classList.add('active');
    mainpane.classList.add('show');
    mainpane.classList.add('active');
    reptab.classList.remove('active');
    reppane.classList.remove('show');
    reppane.classList.remove('active');
    // Скрыть параметры повторения
    intervalsection.style.display = "none";
    weeklysection.style.display = "none";
    monthlysection.style.display = "none";
  }

  // Когда модал закрыт, сбросить значения
  $(modal).on('hidden.bs.modal', function () {
    resetValues();
  });


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
    ajax_send("GET", "components/phonebook/ajax.php", data, "text", response => {result.innerHTML = ""; result.innerHTML = response});

  } else  {
    let data = {
      filter: selected,
    };

    ajax_send("GET", "components/phonebook/ajax.php", data, "text", response => {result.innerHTML = ""; result.innerHTML = response});
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

// Слайдер
// Массив слайдера
let slides_arr = [
  {
    id: 0,
    image:
      "assets/img/slider/cosmonaut.jpg",
    header: "Поехали!",
    text: "тут ссылка скрыта",
    hideLink: "visually-hidden",
    link: "?page=to-do"
  },
  {
    id: 1,
    image:
      "assets/img/slider/hello.jpg",
    header: "Приветствуем на внутреннем сайте суда!",
    text: "",
    hideLink: "",
    link: "?page=to-do"
  },
  {
    id: 2,
    image:
      "assets/img/slider/wear_masks.jpg",
    header: "Пожалуйста, не забывайте носить маску.",
    text: "это описание не помещается в контейнер слайдера полностью, оно должно быть обрезано, чтобы контейнер не переполнился и верстка не развалилась, поэтому он обрезается точками",
    hideLink: "",
    link: "?page=to-do"
  },
];

const sliderCarousel = document.getElementById("carouselNews");


const CarouselIndicators =
  `<div class="row g-0 position-absolute" style="left: 0; bottom: 0; right: 0;">
<div class="col-xxl-8 col-xl-8 col-lg-8 col-md-7 col-sm-6 col-12 position-relative">
<div class="carousel-indicators">
            </div>
</div>
</div>
`;

const CarouselInner =
  `<div class="carousel-inner" style="border-radius: 0.25rem;">
            </div>`;

const CarouselControls =
  `<div class="row g-0 position-absolute" style="top: 0; left: 0; bottom: 0; right: 0;">
<div class="col-xxl-8 col-xl-8 col-lg-8 col-md-7 col-sm-6 col-12 position-relative">
<button class="carousel-control-prev h-100" type="button" data-bs-target="#carouselNews"
                    data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span> <span
                class="visually-hidden">Предыдущий</span></button>

                <button class="carousel-control-next h-100" type="button" data-bs-target="#carouselNews"
                    data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span> <span
                class="visually-hidden">Следующий</span></button>
</div>
</div>

            `;

const createSliderItemString = ({image, header, text, hideLink, link}) =>

  `<div class="carousel-item" data-bs-interval="10000">
  <div class="row g-0">
  <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-7 col-sm-6 col-12">
      <img src="${image}" alt="${header}" aria-label="${header}" style="object-fit: cover; width: 100%;">
</div>
<div class="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-6 col-12">
    <div class="carousel-caption d-flex flex-column w-100 p-3" style="min-width: 0; flex-basis: 50%; position: revert; text-align: left">
                <h6 style="max-height: 40px;">${header}</h6>
        <p class="d-xxl-flex d-xl-flex d-lg-flex d-md-none d-sm-none d-none">${text}</p>
      <a href="${link}" class="mt-auto mb-0 ${hideLink}" style="max-height: 25px;">Подробнее</a>
    </div>

</div>
  </div>
</div>`;

const createDotsItemString = ({id, header}) =>
  `<button type="button" data-bs-target="#carouselNews" data-bs-slide-to="${id}" aria-label="${header}" style="width: 10px; height: 10px; border-radius: 50%;"></button>`;

// Рендеринг слайдера
const sliderRender = (slideArray) => {
  sliderCarousel.insertAdjacentHTML('beforeend', CarouselIndicators);
  sliderCarousel.insertAdjacentHTML('beforeend', CarouselInner);
  sliderCarousel.insertAdjacentHTML('beforeend', CarouselControls);
  const sliderContainer = document.querySelector('.carousel-inner');
  const sliderDotsContainer = document.querySelector('.carousel-indicators');

  sliderContainer.innerHTML = '';
  sliderDotsContainer.innerHTML = '';
  const sliderElementsString = slideArray.map((image) => createSliderItemString(image)).join('');
  const dotsElementsString = slideArray.map((image) => createDotsItemString(image)).join('');
  sliderContainer.insertAdjacentHTML('beforeend', sliderElementsString);
  sliderDotsContainer.insertAdjacentHTML('beforeend', dotsElementsString);

  // Показывает 1 слайд
  let slide1 = sliderContainer.firstChild;
  let dot1 = sliderDotsContainer.firstChild;
  slide1.classList.add('active');
  dot1.classList.add('active');
}

// Рабочие места. Древья
const workPlaceTree = document.getElementById('workplace-tree');
const placeitemsTree = document.getElementById('placeitems-tree');

let zTreeObj;

const zTreeHandler = () => {
  // Показать popover
  function showPopover(treeNode) {
    let tooltip = new bootstrap.Popover(event.el, {
      template: '<div class="popover popover-info" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      title: treeNode.name,
      content: treeNode.id,
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

  function myOnClick(event, treeId, treeNode) {
    alert(treeNode.id + ", " + treeNode.name);
  }

  function myOnMouseUp(event, treeId, treeNode) {
    showPopover(treeNode);
    alert(treeNode ? treeNode.tId + ", " + treeNode.name : "isRoot");
  }

  function myOnMouseDown(event, treeId, treeNode) {
    hidePopover();
  }

  // zTree конфигурация, изучите API документацию (детали настройки)
  const settingWorktree = {
    callback: {
      onClick: myOnClick,
      onMouseUp: myOnMouseUp,
      onMouseDown: myOnMouseDown,
    },
    data: {
      key: {
        title: "id"
      },
      render: function(title,treeNode){
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
    ajax_send("GET", "pages/admin/ajax.php", test, result => $.fn.zTree.init($("#workplace-tree"), settingWorktree, result));
  }

  workPlaceStructure();

  //zTreeObj = $.fn.zTree.init($("#workplace-tree"), setting, workPlaceStructure);
  zTreeObj = $.fn.zTree.init($("#placeitems-tree"), settingPlaceitems, placeitemsStructure);

}

// Определение функции, запускающейся при полной загрузке страницы
const init = () => {

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
    calendmodulehandler();
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
  if (apexChartList) {
    apexChartList.forEach((chart) => {
      const chartName = chart.dataset.chartName;
      apexChartInit(chart, chartName);
    });
  }


  // Отрисовка слайдера на дашбоарде
  if (sliderCarousel) {
    sliderRender(slides_arr);
  }

  if (workPlaceTree) {
    zTreeHandler();
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

