<main class="main-content scroll-y">
  <div class="ps-3 pe-3">
    <header class="main-content-header d-flex align-items-center justify-content-between flex-wrap">
      <div class="header-left d-flex align-items-center justify-content-between p-2">
        <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Назад"><i
            class="mdi mdi-24px mdi-arrow-left"></i></a>
        <p class="h5 main-content-title mb-0">Документация</p>
      </div>
      <div class="header-right d-flex align-items-center justify-content-between p-2">
        <nav aria-label="breadcrumb" class="align-items-center d-xxl-flex d-xl-flex d-md-flex d-sm-none d-none">
          <ol class="breadcrumb d-flex align-items-center mb-0">
            <li class="breadcrumb-item p-2">
              <a class="p-2 me-2" href="/" data-bs-toggle="tooltip" data-bs-placement="top"
                 title="Главная страница">
                <i class="mdi mdi-home-outline"></i>
              </a>
            </li>
            <li class="breadcrumb-item p-2">
              <a class="p-2" data-bs-toggle="tooltip" data-bs-placement="top"
                 title="Статистика">Документация
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
    <div class=" boxed-content">
      <div class="card mb-3">
        <div class="card-body">
          <p class="overline-title">О проекте</p>
          <div class="row p-2 flex-wrap">
            <p class="mb-3">
              Проект - продолжение программного продукта ПИ ИСП (информационно-справочная подсистема) комплекса ГАС
              "Правосудие".</p>
            <img src="assets/img/doc/isp_original.png" class="img-thumbnail" width="300" alt="">
            <p>Основной функцией ИСП было создание внутреннего справочно-информационного портала для суда, на котором
              будут размещаться новости, внутренние документы суда, образцы заявлений, документы для ознакомления,
              телефонный справочник, а так же общедоступная статистика по публикации судебных актов (из БСР), по
              внесению статкарточек в Судимость, рассмотрению дел.
            </p>
            <p>Так как обснвные системы ГАС Правосудие регулярно обновлялись, а ИСП - нет, связь между ними стала
              невозможна, статистика в ИСП перестала работать, а остальные функции были реализованы слабо.
            </p>
            <p>Такая организация обмена общими документами, которая используется в суде на данный момент, использовалась
              в начале 2000-х годов - общая папка на компьютер/сервере, в которую пользователи собирали нужную
              информацию и документы. Неудобство поиска, невозможность отслеживания актуальности файлов и документов,
              стали основной причиной, из-за которой стали появляться интранет-порталы, с функциями, подобными ИСП.
            </p>
            <p>Такие внутренние порталы, часто используются в крупных компаниях, таких как Mail.ru, и представляют собой
              комплекс продуктов - менеджера задач, ежедневника, мессенджера, системы кадрового учета, а так же
              новостного портала.
            </p>
            <p>Довольно часто специалисты по информатизации судов пишут собственные программы и модули для ГАС
              Правосудие. Например, модуль отправки СМС написан Ульяновским областным судом, Контроль публикации решений
              районных судов - Липецким областным судом, Справочная система приемной суда (EasySDP) - Иркутским
              областным судом, Список дел, назначенных на... (CaseList) - Собинским городским судом.
            </p>
          </div>

        </div>
      </div>
      <div class="card mb-3">
        <div class="card-body">
          <p class="overline-title">Технические требования</p>
          <div class="p-2 flex-wrap d-flex flex-row">
            <div class="me-4">
              <h6>Веб-сервер:</h6>
              <ul class="list-inline mb-0">
                <li><span class="bullet bullet-xs bg-primary me-3"></span>PHP > 7.4</li>
                <li><span class="bullet bullet-xs bg-primary me-3"></span>Maria BD > 10.12.4</li>
                <li><span class="bullet bullet-xs bg-primary me-3"></span>Apache 2.4</li>
              </ul>
            </div>
            <div class="me-4">
              <h6>Для сборки CSS/JS:</h6>
              <ul class="list-inline mb-0">
                <li><span class="bullet bullet-xs bg-danger me-3"></span>NPM 6.14.15</li>
              </ul>
            </div>
            <div class="me-4">
              <h6>NPM-модули для сборки CSS/JS:</h6>
              <ul class="list-inline mb-0">
                <li><span class="bullet bullet-xs bg-success me-3"></span>gulp</li>
                <li><span class="bullet bullet-xs bg-success me-3"></span>babel</li>
                <li><span class="bullet bullet-xs bg-success me-3"></span>sass</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3">
        <div class="card-body">
          <p class="overline-title">Структура</p>
          <div class="row p-2 flex-wrap">

          </div>

        </div>
      </div>
      <div class="card mb-3">
        <div class="card-body">
          <p class="overline-title">Переменные PHP</p>
          <div class="row p-2 flex-wrap">
            <p class="h6">Зарезервированные переменные</p>
            <p><code>$link</code> = подключение к базе данных;</p>
            <p class="h6">Обязательные переменные</p>
            <p><code>$title</code> = Название страницы;</p>
            <p><code>$content</code> = В переменную выводится HTML-код работы PHP-скрипта. Будет обернут в
              <span><<span>main </span></span>class="main-content">;</p>
            <p class="h6">Каркас страницы</p>
            <p>Каркас страницы состоит из файла <code>layout.php</code> к которому подключаются файы из папки elements:</p>
              <p><code>head.php</code> - содержит информацию о документе</p>
            <p><code>header.php</code> - определяет блок сверху от контента для размещения поиска, профиля пользователя...</p>
            <p><code>sidebar.php</code> - определяет блок сбоку от контента для размещения рубрик, ссылок, меток и другой
              информации</p>
            <p><code>content.php</code> - содержимое web-страницы</p>
            <p><code>javascript.php</code> - содержит скрипты подключаемые внизу страницы</p>
            </p>

          </div>
        </div>
      </div>
      <div class="card mb-3">
        <div class="card-body">
          <p class="overline-title">История изменений</p>
          <div class="card-content">
            <div class="card-body">
              <ul class="widget-timeline mb-0">
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Создан репозиторий на GitHub. Первая версия на HTML/CSS</h6>
                  <p class="timeline-text">5 декабря 2019 года</p>
                  <div class="timeline-content">
                    <img src="assets/img/doc/ISP_13_02_2020.png" class="img-thumbnail" width="300" alt="">
                  </div>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Первый вариант на Bootstrap</h6>
                  <p class="timeline-text">7 января 2021 года</p>
                  <div class="timeline-content">
                    <img src="assets/img/doc/ISP_07_01_2021.png" class="img-thumbnail" width="300" alt="">
                  </div>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Второй вариант на Bootstrap</h6>
                  <p class="timeline-text">16 января 2021 года</p>
                  <div class="timeline-content">
                    <img src="assets/img/doc/ISP_16_01_2021.png" class="img-thumbnail" width="300" alt="">
                  </div>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP-Backend</h6>
                  <p class="timeline-text">23 января 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: заготовки для раздела FAQ и раздела Каталог ссылок</h6>
                  <p class="timeline-text">17 февраля 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Третий вариант на Bootstrap</h6>
                  <p class="timeline-text">22 февраля 2021 года</p>
                  <div class="timeline-content">
                    <img src="assets/img/doc/ISP_22_02_2021.png" class="img-thumbnail" width="300" alt="">
                  </div>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: переход на PDO</h6>
                  <p class="timeline-text">18 марта 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: профиль пользователя</h6>
                  <p class="timeline-text">24 марта 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: редактирование и добавление пользователя</h6>
                  <p class="timeline-text">20 апреля 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: телефонный справочник</h6>
                  <p class="timeline-text">5 мая 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Попытки подключить Fullcalendar</h6>
                  <p class="timeline-text">23 мая 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: сортировка в телефонном справочнике</h6>
                  <p class="timeline-text">25 мая 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Версия на CSS-grid без Bootstrap</h6>
                  <p class="timeline-text">28 мая 2021 года</p>
                  <div class="timeline-content">
                    <img src="assets/img/doc/ISP_28_05_2021_grid.png" class="img-thumbnail" width="300" alt="">
                  </div>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Версия на CSS-grid без Bootstrap</h6>
                  <p class="timeline-text">03 июня 2021 года</p>
                  <div class="timeline-content">
                    <img src="assets/img/doc/ISP_03_06_2021.png" class="img-thumbnail" width="300" alt="">
                  </div>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: попытка подключить PHP Word</h6>
                  <p class="timeline-text">8 июня 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: категории гражданских дел из JSON</h6>
                  <p class="timeline-text">28 июня 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: поиск</h6>
                  <p class="timeline-text">12 июля 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Версия на CSS-grid без Bootstrap</h6>
                  <p class="timeline-text">21 июля 2021 года</p>
                  <div class="timeline-content">
                    <img src="assets/img/doc/ISP_21_07_2021.png" class="img-thumbnail" width="300" alt="">
                  </div>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: сложный поиск</h6>
                  <p class="timeline-text">29 июля 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Возврат на Bootstrap</h6>
                  <p class="timeline-text">31 июля 2021 года</p>
                  <div class="timeline-content">
                    <img src="assets/img/doc/ISP_31_07_2021.png" class="img-thumbnail" width="300" alt="">
                  </div>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Очень сырой Fullcalendar</h6>
                  <p class="timeline-text">2 августа 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Первые Gulp-задачи</h6>
                  <p class="timeline-text">5 августа 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Приватные события</h6>
                  <p class="timeline-text">7 августа 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: плавный переход к ООП</h6>
                  <p class="timeline-text">8 августа 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: редактирование и удаление событий в календаре</h6>
                  <p class="timeline-text">10 августа 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: обновление событий календаря</h6>
                  <p class="timeline-text">11 августа 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Всплывающие подсказки в календаре для событий</h6>
                  <p class="timeline-text">11 августа 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: дни рождения в календаре. Сырые задачи.</h6>
                  <p class="timeline-text">12 августа 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: добавление сотрудников. В календаре для дней рождений показывает
                    возраст.</h6>
                  <p class="timeline-text">16 августа 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Оптимизация даты в заголовке. События в календраре без ID (дни рождения) нельзя редактировать.</h6>
                  <p class="timeline-text">17 августа 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Макет повторяющихся событий в календаре.</h6>
                  <p class="timeline-text">18 августа 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: сброс пароля для входа.</h6>
                  <p class="timeline-text">19 августа 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Завершена разработка повторения событий.</h6>
                  <p class="timeline-text">26 августа 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: добавление, обновление и удаление событий в базу.</h6>
                  <p class="timeline-text">30 августа 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: добавлены выходные и праздничные дни в календарь.</h6>
                  <p class="timeline-text">6 сентября 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: старт разработки рабочих мест пользователей.</h6>
                  <p class="timeline-text">8 сентября 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Кпока показать/скрыть пароль в форме входа.</h6>
                  <p class="timeline-text">10 сентября 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Закончен мини-календарь на главной.</h6>
                  <p class="timeline-text">14 сентября 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: статистика посещения сайта.</h6>
                  <p class="timeline-text">22 сентября 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Добавлена кнопка "Назад" в заголовке страницы.</h6>
                  <p class="timeline-text">11 октября 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Погодный виджет openweather.</h6>
                  <p class="timeline-text">17 октября 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Добавлена темная тема.</h6>
                  <p class="timeline-text">30 октября 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Добавлена админка для сайта.</h6>
                  <p class="timeline-text">31 октября 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: рабочие места.</h6>
                  <p class="timeline-text">12 ноября 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Раздел статистики (графики). Черновик.</h6>
                  <p class="timeline-text">3 декабря 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Добавлен тетрис (готовый, чужой код).</h6>
                  <p class="timeline-text">5 декабря 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: категории дел и материалов из базы СДП.</h6>
                  <p class="timeline-text">13 декабря 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: боковое меню формируется из базы.</h6>
                  <p class="timeline-text">19 декабря 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: добавлена справка о работе судей.</h6>
                  <p class="timeline-text">21 декабря 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Виджет дней рождения на главной.</h6>
                  <p class="timeline-text">22 декабря 2021 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: список неопубликованных в БСР дел.</h6>
                  <p class="timeline-text">19 января 2022 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">PHP: авторизация по токену.</h6>
                  <p class="timeline-text">20 января 2022 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">GIT: мёрж ветки разработки в main.</h6>
                  <p class="timeline-text">21 января 2022 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Анимация виджета приветствия пользователя.</h6>
                  <p class="timeline-text">22 января 2022 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Рефакторинг JS: модули.</h6>
                  <p class="timeline-text">7 февраля 2022 года</p>
                </li>
                <li class="timeline-items timeline-icon-primary active">
                  <h6 class="timeline-title">Рефакторинг JS: сборка через Webpack.</h6>
                  <p class="timeline-text">12 февраля 2022 года</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</main>
