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
                 title="Информация">Информация
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
    <div class="container align-items-center justify-content-end d-flex mb-3">
      <button class="btn btn-primary" type="button" id="contentmenu" data-bs-toggle="dropdown" data-bs-placement="top"
              title="Меню">
        <i class="mdi mdi-cog-outline"></i>
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="contentmenu">
        <a href="#" class="dropdown-item btn-print">Печать</a>
      </ul>
    </div>

    <div class="boxed-content">
      <div class="card mb-3">
        <div class="card-body">
          <div class="filter-group phonebook-filter d-flex align-items-center">
            <p class="group-title p-0">Фильтр:</p>
            <?php foreach ($phonebookClass->getGroup() as $key => $value): ?>
              <div class="form-check me-2">
                <input class="form-check-input" checked type="checkbox" id="<?= $value->id ?>" name="<?= $value->id ?>"
                       value="<?= $value->id ?>">
                <label class="form-check-label" for="<?= $value->id ?>"><?=  $value->groupName ?></label>
              </div>
            <?php endforeach ?>
          </div>
        </div>
      </div>
      <div class="card phonebook">
        <table class="table dataTable sort table-users">
          <thead>
          <tr>
            <th>Кабинет</th>
            <th>Ф.И.О.</th>
            <th>Должность</th>
            <th>Служебный тел.</th>
          </tr>
          </thead>
          <tbody id="<?= $id; ?>">
          <?php foreach ($phonebook as $row): ?>
            <tr>
              <td><?= $row->room; ?></td>
              <td><?= $row->fullname; ?></td>
              <td><?= $row->profession; ?></td>
              <td><?= $row->phone_worck; ?></td>
            </tr>
          <?php endforeach ?>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</main>
