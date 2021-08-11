<!-- Сайдбар -->
<aside class="main-sidebar">
  <ul class="navigation-menu">
    <li class="menu-item">
      <a class="menu-link" href="/">
        <i class="mdi mdi-apps"></i>
        <span>Главная</span>
      </a>
    </li>
    <li class="menu-item">
      <a class="menu-link" href="?page=proxylist">
        <i class="mdi mdi-folder-table-outline"></i>
        <span>Каталог ссылок</span></a>
    </li>

    <li class="menu-item with-sub">
      <a class="menu-link">
        <i class="mdi mdi-information-outline"></i>
        <span>Информация</span>
        <i class="menu-arrow mdi mdi-chevron-right"></i>
      </a>
      <ul class="sub-menu">
        <li class="submenu-item"><a class="submenu-link" href="?page=phonebook">
            <i class="mdi mdi-phone-classic"></i>
            <span>Телефонный справочник</span></a></li>
      </ul>
    </li>
    <li class="menu-item with-sub">
      <a class="menu-link">
        <i class="mdi mdi-help-circle-outline"></i>
        <span>Помощь</span>
        <i class="menu-arrow mdi mdi-chevron-right"></i>
      </a>
      <ul class="sub-menu">
        <li class="submenu-item"><a class="submenu-link" href="?page=faq">
            <i class="mdi mdi-lightbulb-on-outline"></i>
            <span>База знаний</span></a></li>
      </ul>
    </li>


    <?php
    if ($_COOKIE['aut']['sudo'] == 1) {
      echo '
    <!-- Панель администратора -->
    <li class="menu-item with-sub adm">
      <a class="menu-link">
        <i class="mdi mdi-wrench-outline"></i>
        <span>Администрирование</span>
        <i class="menu-arrow mdi mdi-chevron-right"></i>
      </a>
      <ul class="sub-menu">
        <li class="submenu-item">
          <a class="submenu-link" href="?page=staff">
            <i class="mdi mdi-account-multiple"></i>
            <span>Сотрудники</span>
          </a>
        </li>
                <li class="submenu-item">
          <a class="submenu-link" href="##">
            <i class="mdi mdi-image-move"></i>
            <span>Новостной слайдер</span>
          </a>
        </li>
        <li class="submenu-item">
          <a class="submenu-link" href="##">
            <i class="mdi mdi-wan"></i>
            <span>Рабочие места</span>
          </a>
        </li>
        <li class="submenu-item">
          <a class="submenu-link" href="?page=documentation">
            <i class="mdi mdi-book-open-variant"></i>
            <span>Документация</span>
          </a>
        </li>
      </ul>
    </li>
    <!-- Неиспользуемые функции и в разработке -->
    <li class="menu-item with-sub dev">
      <a class="menu-link">
        <i class="mdi mdi-xml"></i>
        <span>В разработке</span>
        <i class="menu-arrow mdi mdi-chevron-right"></i>
      </a>
      <ul class="sub-menu">
        <li class="submenu-item">
          <a class="submenu-link" href="?page=fullcalendar">
            <i class="mdi mdi-calendar"></i>
            <span>Календарь</span>
          </a>
        </li>
        <li class="submenu-item">
          <a class="submenu-link" href="?page=to-do">
            <i class="mdi mdi-checkbox-marked-outline"></i>
            <span>Задачи</span>
          </a>
        </li>
        <li class="submenu-item">
          <a class="submenu-link" href="?page=uikit">
            <i class="mdi mdi-flower-outline"></i>
            <span>UI Kit</span>
          </a>
        </li>
        <li class="submenu-item">
          <a class="submenu-link" href="?page=test">
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
