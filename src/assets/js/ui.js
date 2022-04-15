import {cookieID} from "./globalfunc"
import {ajax_send, showBsToast, toastContainer} from "./globalfunc"

/** Меню сайдбара */
const sidebarNavigationMenu = document.querySelector('.navigation-menu');

/** Спиннер */
const spinnerLoader = document.querySelector('.spinner-wrapper');

/** Кнопка Назад Наверх, класс .back-to-top */
const backToTopButton = document.querySelector('.back-to-top');
//
/** Прокручиваемое содержимое, класс .main-content, если его прокручивать, появляется кнопка Назад наверх */
const mainContent = document.querySelector('.main-content');

/**
 * При прокручивании вниз на 20px от верхнего края элемента с классом main-content, показывает кнопку Назад наверх
 */
const mainContentScroll = () => {mainContent.scrollTop > 20 ? backToTopButton.classList.remove('d-none') : backToTopButton.classList.add('d-none')};

/** Кнопка, переключающая сайдбар, класс .sidebar-toggle-button */
const sidebarToggleButton = document.querySelector('.sidebar-toggle-button');

/** Тело страницы, класс .main-sidebar */
const sidebarWrapper = document.querySelector('.page-body');

/**
 * Переключает класс disabled у .page-body, сайдбар
 * @param evt
 */
const buttonSidebarToggleHandler = (evt) => {
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

  ajax_send("POST", "pages/admin/ajax.php", formData, "json", result => result);
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
  ajax_send("POST", "pages/admin/ajax.php", formData, "json", result => result);
  darkModeToggleButton.classList.toggle('tumbler--night-mode');
};

if (darkModeToggleButton) {
  darkModeToggleButton.addEventListener('click', darkModeToggleHandler);
}

/** Переключает класс .active у ближайшего .menu-item нажатой ссылки меню сайдбара */
const menuitemClickHandler = (evt) => {
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
      window.print()
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

/** Отключаем спиннер загрузки при загрузке содержимого */
const spinnerLoaderHandler = () => {
  spinnerLoader.style.display = "none";
};

/** Получает имя файла текущей открытой страницы и ищет такое же в ссылках бокового меню, устанавливает класс active открытому пункту или субпункту и его родителю */
const sidebarNavigationMenuHandler = () => {
  let filename = window.location.href.replace(/^.*[\\\/]/, '').replace('#', '');
  let menuLinks = sidebarNavigationMenu.querySelectorAll('.menu-link');
  let submenuLinks = sidebarNavigationMenu.querySelectorAll('.submenu-link');

  Array.from(menuLinks).forEach((menuLink) => {
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
  })

  Array.from(submenuLinks).forEach((submenuLink) => {
    if (filename === submenuLink.href.replace(/^.*[\\\/]/, '').replace('#', '')) {
      submenuLink.closest('.submenu-item').classList.add("active");
      submenuLink.closest('.menu-item').classList.add("active");
    }
  })

  /** Прослушивание нажатия нажатия на ссылки меню .navigation-menu */
  sidebarNavigationMenu.addEventListener('click', menuitemClickHandler);
};

/** Подсказки */
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

/** Отключаем спиннер загрузки при загрузке содержимого */
const topProgressBar = document.querySelector('.topprogressbar');
const mainContentScrollHandler = () => {topProgressBar ? topProgressBar.style.width = ((mainContent.scrollTop / (mainContent.scrollHeight - mainContent.clientHeight)) * 100) + "%" : false};

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
    backToTopButton.addEventListener('click', () => {mainContent.scrollTop = 0});
  }

  /** Прослушивание нажатия кнопки .sidebar-toggle-button */
  if (sidebarToggleButton && sidebarWrapper) {
    sidebarToggleButton.addEventListener('click', (evt) => {
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
  if (($(window).width() > 1080) || (sidebarWrapper.dataset.sidebarWidth === "narrow")) {
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
  if (cookieID === "1") {
    showBsToast("", toastContainer, '.toast-script-time', "")
  }

  /** Показать/скрыть пароль */
  if (showHidePass && passInputList) {
    showHidePass.addEventListener('click', showHidePassHandler);
  }

  /** Установить дату в топбаре. Обновление каждые 5 минут */
  setTopHeaderDate();
  setInterval(() => setTopHeaderDate, 300000);

});
