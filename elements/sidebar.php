<!-- Сайдбар -->
<aside class="main-sidebar d-flex position-absolute flex-column justify-content-between">
  <ul class="navigation-menu overlayscrollbar os-host-flexbox">
    <li class="menu-item">
      <a class="menu-link" href="/" data-bs-toggle="tooltip" data-bs-placement="right" title="Главная">
        <i class="mdi mdi-apps"></i>
        <span>Главная</span>
      </a>
    </li>
    <li class="menu-item">
      <a class="menu-link" href="?page=proxylist" data-bs-toggle="tooltip" data-bs-placement="right"
         title="Каталог ссылок">
        <i class="mdi mdi-folder-table-outline"></i>
        <span>Каталог ссылок</span></a>
    </li>

    <li class="menu-item with-sub">
      <a class="menu-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Информация">
        <i class="mdi mdi-information-outline"></i>
        <span>Информация</span>
        <i class="menu-arrow mdi mdi-chevron-right"></i>
      </a>
      <ul class="sub-menu">
        <li class="submenu-item"><a class="submenu-link" data-bs-toggle="tooltip" data-bs-placement="right"
                                    href="?page=phonebook" title="Телефонный справочник">
            <i class="mdi mdi-phone-classic"></i>
            <span>Телефонный справочник</span></a></li>
      </ul>
    </li>
    <li class="menu-item with-sub">
      <a class="menu-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Помощь">
        <i class="mdi mdi-help-circle-outline"></i>
        <span>Помощь</span>
        <i class="menu-arrow mdi mdi-chevron-right"></i>
      </a>
      <ul class="sub-menu">
        <li class="submenu-item"><a class="submenu-link" href="?page=faq" data-bs-toggle="tooltip"
                                    data-bs-placement="right" title="База знаний">
            <i class="mdi mdi-lightbulb-on-outline"></i>
            <span>База знаний</span></a></li>
      </ul>
    </li>


    <?php
    if ($_COOKIE['aut']['sudo'] == 1) {
      echo '
    <!-- Панель администратора -->
    <li class="menu-item with-sub adm">
      <a class="menu-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Администрирование">
        <i class="mdi mdi-wrench-outline"></i>
        <span>Администрирование</span>
        <i class="menu-arrow mdi mdi-chevron-right"></i>
      </a>
      <ul class="sub-menu">
          <li class="submenu-item">
          <a class="submenu-link" href="?page=admin" data-bs-toggle="tooltip" data-bs-placement="right" title="Панель управления">
            <i class="mdi mdi-view-dashboard-outline"></i>
            <span>Панель управления</span>
          </a>
        </li>
        <li class="submenu-item">
          <a class="submenu-link" href="?page=staff" data-bs-toggle="tooltip" data-bs-placement="right" title="Сотрудники">
            <i class="mdi mdi-account-multiple"></i>
            <span>Сотрудники</span>
          </a>
        </li>
                <li class="submenu-item">
          <a class="submenu-link" href="##" data-bs-toggle="tooltip" data-bs-placement="right" title="Новостной слайдер">
            <i class="mdi mdi-image-move"></i>
            <span>Новостной слайдер</span>
          </a>
        </li>
        <li class="submenu-item">
          <a class="submenu-link" href="?page=workroom" data-bs-toggle="tooltip" data-bs-placement="right" title="Рабочие места">
            <i class="mdi mdi-wan"></i>
            <span>Рабочие места</span>
          </a>
        </li>
        <li class="submenu-item">
          <a class="submenu-link" href="?page=workplaces" data-bs-toggle="tooltip" data-bs-placement="right" title="Рабочие места">
            <i class="mdi mdi-wan"></i>
            <span>Рабочие места*</span>
          </a>
        </li>
        <li class="submenu-item">
          <a class="submenu-link" href="?page=documentation" data-bs-toggle="tooltip" data-bs-placement="right" title="Документация">
            <i class="mdi mdi-book-open-variant"></i>
            <span>Документация</span>
          </a>
        </li>
      </ul>
    </li>
    <!-- Неиспользуемые функции и в разработке -->
    <li class="menu-item with-sub dev">
      <a class="menu-link"  data-bs-toggle="tooltip" data-bs-placement="right"title="Разработка">
        <i class="mdi mdi-xml"></i>
        <span>Разработка</span>
        <i class="menu-arrow mdi mdi-chevron-right"></i>
      </a>
      <ul class="sub-menu">
        <li class="submenu-item">
          <a class="submenu-link" href="?page=fullcalendar" data-bs-toggle="tooltip" data-bs-placement="right" title="Календарь">
            <i class="mdi mdi-calendar"></i>
            <span>Календарь</span>
          </a>
        </li>
        <li class="submenu-item">
          <a class="submenu-link" href="?page=to-do" data-bs-toggle="tooltip" data-bs-placement="right" title="Задачи">
            <i class="mdi mdi-checkbox-marked-outline"></i>
            <span>Задачи</span>
          </a>
        </li>
        <li class="submenu-item">
          <a class="submenu-link" href="?page=uikit" data-bs-toggle="tooltip" data-bs-placement="right" title="UI Kit">
            <i class="mdi mdi-flower-outline"></i>
            <span>UI Kit</span>
          </a>
        </li>
        <li class="submenu-item">
          <a class="submenu-link" href="?page=test" data-bs-toggle="tooltip" data-bs-placement="right" title="Тестовая страница">
            <i class="mdi mdi-file-outline"></i>
            <span>Тестовая страница</span>
          </a>
        </li>
      </ul>
    </li>
  ';
    }
    ?>
  </ul>
  <div class="sidebar-footer">
    <p class="footer-text">Сделано с <span><i class="mdi mdi-cards-heart"></i></span></p>
    <p class="footer-text">Сафоновский районный суд © <span><?= date('Y'); ?></span></p>
  </div>
</aside>
