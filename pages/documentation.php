<?php
$title = "Документация";

$content = '
  <!-- ID всего аккордеона как у data-bs-parent="#ID" в элементах <div id="collapse1" class="accordion-collapse collapse"> -->

  <div class="accordion" id="documentation">
    <div class="accordion-item">
      <!-- ID заголовка как aria-labelledby="" <div id="collapse1" class="accordion-collapse">-->
      <h4 class="accordion-header" id="heading1">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1"
                aria-expanded="false" aria-controls="collapse1">
          О проекте
        </button>
      </h4>
      <div id="collapse1" class="accordion-collapse collapse" aria-labelledby="heading1"
           data-bs-parent="#documentation">
        <div class="accordion-body">
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h4 class="accordion-header" id="heading2">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2"
                aria-expanded="false" aria-controls="collapse2">
          Структура
        </button>
      </h4>
      <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2"
           data-bs-parent="#documentation">
        <div class="accordion-body">
          <ul>
            <li>dist - папка в которую gulp компилирует css, js, копирует файлы, оптимизированные изображения. Готовая к
              использованию версия.
              <ul>
                <li>assets - папка статичного содержимого готового проекта
                  <ul>
                    <li>css - папка стилевых файлов, собираемых из файлов SCSS через gulp</li>
                    <li>fonts - папка шрифтов</li>
                    <li>img - папка изображений</li>
                    <li>js - папка скриптов Java Script</li>
                    <li>modules - папка файлов библиотек, с разбивкой по подпапкам, обновляется bat-файлом
                      modules_updater.bat
                    </li>
                  </ul>
                </li>

              </ul>
            </li>
            <li>node_modules - папка js библиотек менеджера пакетов npm</li>
            <li>src - папка исходников, рабочая папка, из которой собирается готовый проект gulp</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h4 class="accordion-header" id="heading3">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3"
                aria-expanded="false" aria-controls="collapse3">
          Переменные
        </button>
      </h4>
      <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3"
           data-bs-parent="#documentation">
        <div class="accordion-body">
          <p class="h6">Зарезервированные переменные</p>
          <p>$link = "подключение к базе данных";</p>
          <p class="h6">Обязательные переменные</p>
          <p>$title = "Название страницы";</p>
          <p>$content = "В переменную выводится HTML-код работы PHP-скрипта. Будет обернут в
            <span><<span>main </span></span>class="main-content">;</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h4 class="accordion-header" id="heading4">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4"
                aria-expanded="false" aria-controls="collapse4">
          Каркас страницы
        </button>
      </h4>
      <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4"
           data-bs-parent="#documentation">
        <div class="accordion-body">
          <p>Каркас страницы состоит из файла layout.php к которому подключаются файы из папки <code>elements</code>:</p>
          <p>head.php - содержит информацию о документе</p>
          <p>header.php - определяет блок сверху от контента для размещения поиска, профиля пользователя...</p>
          <p>sidebar.php - определяет блок сбоку от контента для размещения рубрик, ссылок, меток и другой информации</p>
          <p>content.php - содержимое web-страницы</p>
          <p>javascript.php - содержит скрипты подключаемые внизу страницы</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h4 class="accordion-header" id="heading5">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5"
                aria-expanded="false" aria-controls="collapse5">
          Профиль пользователя
        </button>
      </h4>
      <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5"
           data-bs-parent="#documentation">
        <div class="accordion-body">
          <p class="h6">Состоит из таблиц:</p>
          <p><code>sdc_users</code> - авторизация пользователя</p>
          <p><code>sdc_user_attributes</code> - профиль пользователя</p>
          <p><code>sdc_room</code> - расположение</p>
          <p class="h6">Таблица sdc_users</p>
          <table class="table table-sm table-bordered">
            <thead>
            <tr>
              <th>Имя</th>
              <th>Тип</th>
              <th>Описание</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>id</td>
              <td>int(10)</td>
              <td>связывается с таблицей <code>sdc_user_attributes</code> по полю <code>internalKey</code>
              </td>
            </tr>
            <tr>
              <td>username</td>
              <td>varchar(100)</td>
              <td>создаётся ответственным лицом в формате <code>Фамилия_ИО</code> на латинице</td>
            </tr>
            <tr>
              <td>password</td>
              <td>varchar(255)</td>
              <td>задается пользователем при регистрации, храниться в зашифрованном виде</td>
            </tr>
            <tr>
              <td>active</td>
              <td>tinyint(1)</td>
              <td>1 - доступ разрешён<br>0 - доступ запрещён</td>
            </tr>
            <tr>
              <td>primary_group</td>
              <td>int(10)</td>
              <td>группы для разгрничения доступа пользователей</td>
            </tr>
            <tr>
              <td>sudo</td>
              <td>tinyint(1)</td>
              <td>1 - обладает правами всех пользователей и групп<br>0 - обычный пользователь</td>
            </tr>
            </tbody>
          </table>
          <p class="h6">Таблица sdc_user_attributes</p>
          <table class="table table-sm table-bordered">
            <thead>
            <tr>
              <th>Имя</th>
              <th>Тип</th>
              <th>Описание</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>id</td>
              <td>int(10)</td>
              <td>PRIMARY</td>
            </tr>
            <tr>
              <td>internalKey</td>
              <td>int(10)</td>
              <td>связывается с таблицей <code>sdc_users</code> по полю <code>sdc_users.id</code></td>
            </tr>
            <tr>
              <td>fullname</td>
              <td>varchar(100)</td>
              <td>ФИО в формате <code>Фамилия Имя Отчество</code></td>
            </tr>
            <tr>
              <td>gender</td>
              <td>int(1)</td>
              <td>0 - нет<br>1 - мужской<br>2 - женский</td>
            </tr>
            <tr>
              <td>dob</td>
              <td>date</td>
              <td>дата рождения в фоормате YYYY-MM-DD</td>
            </tr>
            <tr>
              <td>email</td>
              <td>varchar(100)</td>
              <td>электронная почта</td>
            </tr>
            <tr>
              <td>mobilephone</td>
              <td>varchar(100)</td>
              <td>мобильный телефон</td>
            </tr>
            <tr>
              <td>zip</td>
              <td>varchar(25)</td>
              <td>почтовый индекс</td>
            </tr>
            <tr>
              <td>state</td>
              <td>varchar(25)</td>
              <td>содержит код региона</td>
            </tr>
            <tr>
              <td>city</td>
              <td>varchar(191)</td>
              <td>город</td>
            </tr>
            <tr>
              <td>address</td>
              <td>text</td>
              <td>улица дом квартира</td>
            </tr>
            <tr>
              <td>photo</td>
              <td>varchar(191)</td>
              <td>путь к фотографии пользователя</td>
            </tr>
            <tr>
              <td>comment</td>
              <td>text</td>
              <td>комментарий к профилю</td>
            </tr>
            <tr>
              <td>website</td>
              <td>varchar(191)</td>
              <td>странички в социальных сетях</td>
            </tr>
            <tr>
              <td>profession</td>
              <td>varchar(2)</td>
              <td>кодовое значение занимаемой должности</td>
            </tr>
            <tr>
              <td>affiliation</td>
              <td>varchar(2)</td>
              <td>привязка помощников и секретарей к судье по полю <code>internalKey</code></td>
            </tr>
            <tr>
              <td>room</td>
              <td>int(3)</td>
              <td>кодовое значение привязки к рабочему месту из таблицы <code>sdc_room</code></td>
            </tr>
            </tbody>
          </table>
          <p class="h6">Таблица sdc_room</p>
          <table class="table table-sm table-bordered">
            <thead>
            <tr>
              <th>Имя</th>
              <th>Тип</th>
              <th>Описание</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>id</td>
              <td>int(10)</td>
              <td>PRIMARY</td>
            </tr>
            <tr>
              <td>jupiter_tab_num</td>
              <td>varchar(2)</td>
              <td>кодовое значение <code>Юпитера</code></td>
            </tr>
            <tr>
              <td>ip</td>
              <td>varchar(15)</td>
              <td>IP-адрес</td>
            </tr>
            <tr>
              <td>position</td>
              <td>varchar(5)</td>
              <td>кодовое значение рабочего места: string(1)num()_num()<br>пример <code>к14_3</code> - кабинет №14 место
                3 (порядковый номер рабочего места отсчитывается от первого рабочего места слева при входе в кабинет
                далее по часовой стрелке)<br><code>к</code> - кабинет<br><code>п</code> - проход в
                кабинет<br><code>з</code> - зал судебного заседания<br><code>серв</code> - серверная<br><code>с</code> -
                совещательная комната
              </td>
            </tr>
            <tr>
              <td>alarm_button</td>
              <td>int(2)</td>
              <td>тревожная кнопка судьи</td>
            </tr>
            <tr>
              <td>phone_worck</td>
              <td>varchar(7)</td>
              <td>рабочий телефон</td>
            </tr>
            <tr>
              <td>building_number</td>
              <td>int(1)</td>
              <td>номер здания</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>


  </div>


';
