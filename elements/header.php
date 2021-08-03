<!-- Прогресс бар вверху страницы -->
<div class="progress-container">
  <div class="topprogressbar" style="width: 0;">
  </div>
</div>
<!-- Спиннер-индикатор загрузки -->
<div class="spinner-wrapper">
  <div class="spinner-border text-primary spinner-lg spinner-fixed">
  </div>
</div>
<!-- Кнопка назад наверх -->
<a class="back-to-top waves-effect" style="display: none;" data-bs-toggle="tooltip" data-bs-placement="top"
   title="Наверх страницы">
  <i class="mdi mdi-arrow-up"></i>
</a>
<!-- Верхний топбар -->
<header class="main-header">
  <!-- Пока что отключено. Окно поиска-->
  <!--
    <div class="search-input top-search">
      <input class="input" type="text" placeholder="Поиск..." id="top-search">
      <label for="top-search" style="display: none;">Поиск</label>
      <div class="search-close">
        <a href="#" class="top-search-close" data-bs-toggle="tooltip" data-bs-placement="top" title="Закрыть поиск">
          <i class="mdi mdi-close-box"></i>
        </a></div>
    </div>
    -->
  <nav class="navbar">
    <div class="left-header">
      <ul class="nav">
        <li class="btn-group nav-item">
          <a href="#" class="waves-effect waves-light nav-link sidebar-toggle-button" data-bs-toggle="tooltip"
             data-bs-placement="top" title="Свернуть / развернуть меню">
            <i class="nav-link-icon mdi mdi-menu"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="right-header">
      <ul class="nav">
        <li class="today-group">
          <p class="today-group-day"></p>
          <div>
            <p class="today-group-month"></p>
            <p class="today-group-dayw"></p>
          </div>
        </li>
        <!-- Виджет погоды -->
        <li>
          <a class="weather-info" id="meteonova_inf_88_31_2_26686" href="//www.meteonova.ru/weather/26686-Saphonovo.htm"
             title="Погода в Сафоново"></a>
        </li> <!-- Виджет погоды. Конец -->
        <li class="dropdown nav-item">
          <a class="nav-link dropdown-toggle usermenu waves-effect waves-light no-carret" id="usermenu"
             data-bs-toggle="dropdown">
            <i class="mdi mdi-apps"></i>
          </a>
          <div class="dropdown-menu usermenu dropdown-menu-lg-end" aria-labelledby="usermenu">
            <div class="usermenu-header">
              <a class="user-avatar">
                <img src="assets/img/avatars/default.svg" width="300" alt="Администратор">
              </a>
              <div class="header-group">
                <p class="user-name"><span>Привет, </span><!-- PHP: Фамилия И.О. пользователя -->Супер А.И.</p>
                <p class="user-login"><a><span>@</span><!-- PHP: Логин пользователя -->chainik</a></p>
              </div>
            </div>
            <p class="usermenu-category">Мой профиль</p>
            <a class="dropdown-item" href="?page=user-profile">Личная информация</a>
            <!-- Пока что отключено.
            <a class="dropdown-item" href="#">Уведомления<span class="highlighted">10</span></a>
            <a class="dropdown-item" href="#">Сообщения<span class="highlighted ">5</span></a>
            -->
            <a class="dropdown-item btn btn-primary" href="?page=user-profile&logOut" name="logOut">Выход</a>
          </div>
        </li>
        <!-- Пока что отключено. Кнопка открытия поиска -->
        <!--
                <li class="nav-item">
                  <a class="nav-link waves-effect waves-light top-search-button-toggle" data-bs-toggle="tooltip"
                     data-bs-placement="top" title="Открыть окно поиска">
                    <i class="mdi mdi-magnify"></i>
                  </a>
                </li>
                              -->
      </ul>
    </div>
  </nav>
</header>
