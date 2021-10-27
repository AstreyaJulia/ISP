<!-- Сайдбар -->
<aside class="main-sidebar d-flex position-absolute flex-column justify-content-between">
  <ul class="navigation-menu overlayscrollbar os-host-flexbox py-3 px-2 m-0">
    <li class="menu-item">
      <a
        class="menu-link position-relative rounded-2 d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
        href="/" data-bs-toggle="tooltip" data-bs-placement="right" title="Главная">
        <i class="mdi fs-4 mdi-apps"></i>
        <span class="ms-2">Главная</span>
      </a>
    </li>
    <li class="menu-item">
      <a
        class="menu-link position-relative rounded-2 d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
        href="?page=proxylist" data-bs-toggle="tooltip" data-bs-placement="right" title="Каталог ссылок">
        <i class="mdi fs-4 mdi mdi-folder-table-outline"></i>
        <span class="ms-2">Каталог ссылок</span>
      </a>
    </li>

    <li class="menu-item with-sub">
      <a
        class="menu-link position-relative rounded-2 d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
        data-bs-toggle="tooltip" data-bs-placement="right" title="Информация">
        <i class="mdi fs-4 mdi-information-outline"></i>
        <span class="ms-2">Информация</span>
        <i class="menu-arrow position-absolute mdi mdi-chevron-right"></i>
      </a>
      <ul class="sub-menu mt-2 mx-0 mb-0 ps-0">
        <li class="submenu-item p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            data-bs-toggle="tooltip" data-bs-placement="right" href="?page=phonebook" title="Телефонный справочник">
            <i class="mdi fs-4 mdi-phone-classic"></i>
            <span class="ms-2">Телефонный справочник</span></a></li>
      </ul>

    <li class="menu-item with-sub">
      <a
        class="menu-link position-relative rounded-2 d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
        data-bs-toggle="tooltip" data-bs-placement="right" title="Помощь">
        <i class="mdi fs-4 mdi-help-circle-outline"></i>
        <span class="ms-2">Помощь</span>
        <i class="menu-arrow position-absolute mdi mdi-chevron-right"></i>
      </a>
      <ul class="sub-menu mt-2 mx-0 mb-0 ps-0">
        <li class="submenu-item p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            data-bs-toggle="tooltip" data-bs-placement="right" href="?page=faq" title="База знаний">
            <i class="mdi fs-4 mdi-lightbulb-on-outline"></i>
            <span class="ms-2">База знаний</span></a></li>
      </ul>
    </li>


    <?php
    if ($_COOKIE['aut']['sudo'] == 1) {
      echo '
    <!-- Панель администратора -->
    <li class="menu-item with-sub">
      <a
        class="menu-link position-relative rounded-2 d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
        data-bs-toggle="tooltip" data-bs-placement="right" title="Администрирование">
        <i class="mdi fs-4 mdi-wrench-outline"></i>
        <span class="ms-2">Администрирование</span>
        <i class="menu-arrow position-absolute mdi mdi-chevron-right"></i>
      </a>
      <ul class="sub-menu mt-2 mx-0 mb-0 ps-0">
        <li class="submenu-item p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            data-bs-toggle="tooltip" data-bs-placement="right" href="?page=admin" title="Панель управления">
            <i class="mdi fs-4 mdi-view-dashboard-outline"></i>
            <span class="ms-2">Панель управления</span></a></li>
        <li class="submenu-item p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            data-bs-toggle="tooltip" data-bs-placement="right" href="?page=staff" title="Сотрудники">
            <i class="mdi fs-4 mdi-account-multiple"></i>
            <span class="ms-2">Сотрудники</span></a></li>
        <li class="submenu-item p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            data-bs-toggle="tooltip" data-bs-placement="right" href="?page=workroom" title="Рабочие места">
            <i class="mdi fs-4 mdi-wan"></i>
            <span class="ms-2">Рабочие места</span></a></li>
        <li class="submenu-item p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            data-bs-toggle="tooltip" data-bs-placement="right" href="?page=workplaces" title="Рабочие места">
            <i class="mdi fs-4 mdi-wan"></i>
            <span class="ms-2">Рабочие места</span></a></li>
        <li class="submenu-item p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            data-bs-toggle="tooltip" data-bs-placement="right" href="?page=documentation" title="Документация">
            <i class="mdi fs-4 mdi-book-open-variant"></i>
            <span class="ms-2">Документация</span></a></li>
      </ul>
  </li>
  <!-- Неиспользуемые функции и в разработке -->
        <li class="menu-item with-sub">
      <a
        class="menu-link position-relative rounded-2 d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
        data-bs-toggle="tooltip" data-bs-placement="right" title="Разработка">
        <i class="mdi fs-4 mdi-xml"></i>
        <span class="ms-2">Разработка</span>
        <i class="menu-arrow position-absolute mdi mdi-chevron-right"></i>
      </a>
      <ul class="sub-menu mt-2 mx-0 mb-0 ps-0">
        <li class="submenu-item p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            data-bs-toggle="tooltip" data-bs-placement="right" href="?page=fullcalendar" title="Календарь">
            <i class="mdi fs-4 mdi-calendar"></i>
            <span class="ms-2">Календарь</span></a></li>
        <li class="submenu-item p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            data-bs-toggle="tooltip" data-bs-placement="right" href="?page=to-do" title="Задачи">
            <i class="mdi fs-4 mdi-checkbox-marked-outline"></i>
            <span class="ms-2">Задачи</span></a></li>
        <li class="submenu-item p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            data-bs-toggle="tooltip" data-bs-placement="right" href="?page=uikit" title="UI Kit">
            <i class="mdi fs-4 mdi-flower-outline"></i>
            <span class="ms-2">UI Kit</span></a></li>
        <li class="submenu-item p-0"><a
            class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2"
            data-bs-toggle="tooltip" data-bs-placement="right" href="?page=test" title="Тестовая страница">
            <i class="mdi fs-4 mdi-file-outline"></i>
            <span class="ms-2">Тестовая страница</span></a></li>
      </ul>
  </li>';
    }
    ?>
  </ul>
  <div class="sidebar-footer">
    <p class="footer-text">Сделано с <span><i class="mdi mdi-cards-heart"></i></span></p>
    <p class="footer-text">Сафоновский районный суд © <span><?= date('Y'); ?></span></p>
  </div>
</aside>
