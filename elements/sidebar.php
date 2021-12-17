<!-- Сайдбар -->
<aside class="main-sidebar d-flex position-absolute flex-column">
  <div class="d-flex align-items-center justify-content-between p-3 border-bottom">
    <a class="d-flex align-items-center justify-content-center text-decoration-none logo">
      <img src="assets/img/logo/isp-logo.svg" alt="Лого" width="512" height="408"
           style="width: auto; height: 36px;">
    </a>
    <a class="d-flex align-items-center justify-content-center px-3 text-decoration-none sidebar-toggle-button"
       >
      <i class="mdi fs-4"></i>
    </a>
    <a class="d-flex align-items-center justify-content-center px-3 text-decoration-none sidebar-close-button">
      <i class="mdi fs-4 mdi-close"></i>
    </a>
  </div>
  <ul class="navigation-menu overlayscrollbar os-host-flexbox py-3 px-2 m-0 h-100">
    <li class="menu-item">
      <a
        class="menu-link position-relative rounded-2 d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
        href="/">
        <i class="mdi fs-4 mdi-apps"></i>
        <span class="ms-2">Главная</span>
      </a>
    </li>
    <li class="menu-item">
      <a
        class="menu-link position-relative rounded-2 d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
        href="?page=proxylist">
        <i class="mdi fs-4 mdi mdi-folder-table-outline"></i>
        <span class="ms-2">Каталог ссылок</span>
      </a>
    </li>
    <li class="menu-item">
      <a
        class="menu-link position-relative rounded-2 d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
        href="?page=fullcalendar">
        <i class="mdi fs-4 mdi-calendar"></i>
        <span class="ms-2">Календарь</span>
      </a>
    </li>
    <li class="menu-item with-sub">
      <a
        class="menu-link position-relative rounded-2 d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
        >
        <i class="mdi fs-4 mdi-information-outline"></i>
        <span class="ms-2">Информация</span>
        <i class="menu-arrow position-absolute mdi mdi-chevron-right"></i>
      </a>
      <ul class="sub-menu mt-2 mx-0 mb-0 ps-0">
        <li class="submenu-item mb-2 p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            href="?page=phonebook">
            <i class="mdi fs-4 mdi-phone-classic"></i>
            <span class="ms-2">Телефонный справочник</span></a></li>
      </ul>
    </li>
    <li class="menu-item with-sub">
      <a
        class="menu-link position-relative rounded-2 d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
      >
        <i class="mdi fs-4 mdi-chart-arc"></i>
        <span class="ms-2">Статистика</span>
        <i class="menu-arrow position-absolute mdi mdi-chevron-right"></i>
      </a>
      <ul class="sub-menu mt-2 mx-0 mb-0 ps-0">
        <li class="submenu-item mb-2 p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            href="?page=stats">
            <i class="mdi fs-4 mdi-chart-arc"></i>
            <span class="ms-2">Графики</span></a></li>
      </ul>
    </li>

    <li class="menu-item with-sub">
      <a
        class="menu-link position-relative rounded-2 d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
        >
        <i class="mdi fs-4 mdi-help-circle-outline"></i>
        <span class="ms-2">Помощь</span>
        <i class="menu-arrow position-absolute mdi mdi-chevron-right"></i>
      </a>
      <ul class="sub-menu mt-2 mx-0 mb-0 ps-0">
        <li class="submenu-item mb-2 p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            href="?page=faq">
            <i class="mdi fs-4 mdi-lightbulb-on-outline"></i>
            <span class="ms-2">База знаний</span></a></li>
      </ul>
    </li>
    <?php if ($_COOKIE['aut']['sudo'] == 1): ?>
    <!-- Панель администратора -->
    <li class="menu-item with-sub">
      <a
        class="menu-link position-relative rounded-2 d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
        >
        <i class="mdi fs-4 mdi-wrench-outline"></i>
        <span class="ms-2">Администрирование</span>
        <i class="menu-arrow position-absolute mdi mdi-chevron-right"></i>
      </a>
      <ul class="sub-menu mt-2 mx-0 mb-0 ps-0">
        <li class="submenu-item mb-2 p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            href="?page=admin">
            <i class="mdi fs-4 mdi-view-dashboard-outline"></i>
            <span class="ms-2">Панель управления</span></a></li>
        <li class="submenu-item mb-2 p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            href="?page=workplaces">
            <i class="mdi fs-4 mdi-wan"></i>
            <span class="ms-2">Рабочие места</span></a></li>
        <li class="submenu-item mb-2 p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            href="?page=documentation">
            <i class="mdi fs-4 mdi-book-open-variant"></i>
            <span class="ms-2">Документация</span></a></li>
      </ul>
  </li>
  <!-- Неиспользуемые функции и в разработке -->
        <li class="menu-item with-sub">
      <a
        class="menu-link position-relative rounded-2 d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
        >
        <i class="mdi fs-4 mdi-xml"></i>
        <span class="ms-2">Разработка</span>
        <i class="menu-arrow position-absolute mdi mdi-chevron-right"></i>
      </a>
      <ul class="sub-menu mt-2 mx-0 mb-0 ps-0">
        <li class="submenu-item mb-2 p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            href="?page=to-do">
            <i class="mdi fs-4 mdi-checkbox-marked-outline"></i>
            <span class="ms-2">Задачи</span></a></li>
        <li class="submenu-item mb-2 p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            href="?page=tetris">
            <i class="mdi fs-4 mdi-gamepad-variant-outline"></i>
            <span class="ms-2">Тетрис</span></a></li>
        <li class="submenu-item mb-2 p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            href="?page=uikit">
            <i class="mdi fs-4 mdi-flower-outline"></i>
            <span class="ms-2">UI Kit</span></a></li>
        <li class="submenu-item mb-2 p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            href="?page=test">
            <i class="mdi fs-4 mdi-file-outline"></i>
            <span class="ms-2">Тестовая страница</span></a></li>
      </ul>
  </li>
  <?php endif ?>
  </ul>
  <div class="sidebar-footer mb-0 mt-auto">
    <p class="footer-text">Сделано с <span><i class="mdi mdi-cards-heart"></i></span></p>
    <p class="footer-text">Сафоновский районный суд © <span><?= date('Y'); ?></span></p>
  </div>
</aside>
