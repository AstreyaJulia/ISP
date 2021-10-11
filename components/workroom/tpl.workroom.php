<header class="main-content-header">
  <div class="header-left">
    <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title=""
       data-bs-original-title="Назад" aria-label="Назад"><i class="mdi mdi-24px mdi-arrow-left"></i></a>
    <p class="h5 main-content-title"><?= $title; ?></p>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/" data-bs-toggle="tooltip" data-bs-placement="top"
                                       title="Главная страница">
            <i class="mdi mdi-home-outline"></i>
          </a>
        </li>
      </ol>
    </nav>
  </div>
  <div class="header-right">
    <a class="btn btn-primary" href="">Добавить рабочее место</a>
    <button class="btn btn-primary ms-2" type="button" id="contentmenu" data-bs-toggle="dropdown"
            data-bs-placement="top" title="Меню">
      <i class="mdi mdi-cog-outline"></i>
    </button>
    <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="contentmenu">
      <a href="#" class="dropdown-item btn-print">Печать</a>
    </ul>
  </div>
</header>
<div class="card">
  <table class="table dataTable sort table-users">
    <thead>
    <tr>
      <th>№</th>
      <th>Место нахождения</th>
      <th>Телефон</th>
      <th>IP-адрес</th>
      <th>Юпитер</th>
      <th>Тревожная кнопка</th>
      <th>Сотрудник</th>
    </tr>
    </thead>
    <tbody>
    <?php foreach ($room as $row): ?>
      <tr>
        <td><?= $i++; ?></td>
        <td><?= $roomClass->getPosition($row->position); ?></td>
        <td><?= $row->phone_worck; ?></td>
        <td><?= $row->ip; ?></td>
        <td><?= $row->jupiter_tab_num; ?></td>
        <td><?= $row->alarm_button; ?></td>
        <td><?= $row->fullname; ?></td>
      </tr>
    <?php endforeach ?>
    </tbody>
  </table>
</div>
