<main class="main-content scroll-y">
  <div class="p-3 pt-0">
    <header class="main-content-header d-flex align-items-center justify-content-between flex-wrap">
      <div class="header-left d-flex align-items-center justify-content-between p-2">
        <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title=""
           data-bs-original-title="Назад" aria-label="Назад"><i class="mdi mdi-24px mdi-arrow-left"></i></a>
        <p class="h5 main-content-title mb-0"><?= $title ?></p>
      </div>
      <div class="header-right d-flex align-items-center justify-content-between p-2">
        <nav aria-label="breadcrumb" class="align-items-center d-xxl-flex d-xl-flex d-md-flex d-sm-none d-none">
          <ol class="breadcrumb d-flex align-items-center mb-0">
            <li class="breadcrumb-item p-2">
              <a class="p-2 me-2" href="/" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                 data-bs-original-title="Главная страница">
                <i class="mdi mdi-home-outline"></i>
              </a>
            </li>
            <li class="breadcrumb-item p-2">
              <a class="p-2" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                 data-bs-original-title="Информация"><?= $title ?>
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
    <div class="row boxed-content">
      <div class="card">
        <table class="table-responsive table dataTable sort">
          <thead>
          <tr>
            <th>Номер дела</th>
            <th>Стороны</th>
            <th>Дата</th>
            <th>Дата</th>
            <th>Информация</th>
          </tr>
          </thead>
          <tbody>
          <?php foreach ($row as $key => $value): ?>
            <tr>
              <td><?= $value->CASE_NUM ?></td>
              <td><?= $value->PARTS_NAMES ?></td>
              <td><?= $value->STOP_DATE ?></td>
              <td><?= $value->REASON ?>
              <td><?= $value->INFO ?>
            </tr>
          <?php endforeach ?>
          </tbody>
        </table>
      </div>
    </div>
</main>
