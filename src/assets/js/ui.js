import {cookieID} from "./globalfunc"

// Меню сайдбара
const sidebarnavmenu = document.querySelector('.navigation-menu');

// Спиннер
const spinnerloader = document.querySelector('.spinner-wrapper');



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

// Подсказки
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

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

// Ждем полной загрузки дерева
document.addEventListener("DOMContentLoaded", () => {
  //Отключаем спиннер
  if (spinnerloader) {
    spinnerloaderHandler();
  }
  /* Возвращает текущий день, месяц и день недели в элементы с классами today-group-day,
*  today-group-month, today-group-dayw */
  if (document.querySelector('.today-group')) {
    document.querySelector(".today-group-dayw").innerHTML = moment().tz('Europe/Moscow').format('dddd');
    document.querySelector(".today-group-day").innerHTML = moment().tz('Europe/Moscow').format('D');
    document.querySelector(".today-group-month").innerHTML = moment().tz('Europe/Moscow').format('MMMM');

  }

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

  // Показать/скрыть пароль
  if (showhidepass && passinplist) {
    showhidepass.addEventListener('click', showhidepassHandler);
  }

  // Обновление каждые 5 минут
  setInterval(() => {
    /* Возвращает текущий день, месяц и день недели в элементы с классами today-group-day,
*  today-group-month, today-group-dayw */
    if (document.querySelector('.today-group')) {
      document.querySelector(".today-group-dayw").innerHTML = moment().tz('Europe/Moscow').format('dddd');
      document.querySelector(".today-group-day").innerHTML = moment().tz('Europe/Moscow').format('D');
      document.querySelector(".today-group-month").innerHTML = moment().tz('Europe/Moscow').format('MMMM');

    }
  }, 300000);

});
