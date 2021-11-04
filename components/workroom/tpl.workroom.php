<main class="main-content scroll-y">
  <div class="ps-3 pe-3">
    <header class="main-content-header d-flex align-items-center justify-content-between flex-wrap">
      <div class="header-left d-flex align-items-center justify-content-between p-2">
        <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Назад"><i
            class="mdi mdi-24px mdi-arrow-left"></i></a>
        <p class="h5 main-content-title mb-0"><?= $title; ?></p>
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
                 title="<?= $title; ?>"><?= $title; ?>
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
    <div class="boxed-content container align-items-center justify-content-end d-flex mb-3">
      <a class="btn btn-primary" href="">Добавить рабочее место</a>
      <button class="btn btn-primary ms-2" type="button" id="contentmenu" data-bs-toggle="dropdown"
              data-bs-placement="top" title="Меню">
        <i class="mdi mdi-cog-outline"></i>
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="contentmenu">
        <a href="#" class="dropdown-item btn-print">Печать</a>
      </ul>
    </div>
    <div class="boxed-content">
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

    </div>
  </div>
</main>
