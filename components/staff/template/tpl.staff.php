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
                 title="Администрирование">Администрирование
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
      <button class="btn btn-primary ms-2" type="button" id="contentmenu" data-bs-toggle="dropdown"
              data-bs-placement="top" title="Меню">
        <i class="mdi mdi-cog-outline"></i>
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="contentmenu">
        <a href="#" class="dropdown-item btn-print">Печать</a>
      </ul>
    </div>
    <div class="boxed-content row">
      <div class="col-lg-3 col-sm-6">
        <div class="card mb-3">
          <div class="card-body">
            <div class="d-flex align-items-start">
              <div class="d-flex flex-grow-1 flex-shrink-1 flex-column">
                <p class="text-muted mb-2">Зарегистрировано</p>
                <h5 class="mb-0">51</h5>
              </div>
              <div class="card-icon bg-primary-lighter text-primary grey-shadow-2">
                <i class="mdi mdi-account-group-outline"></i>
              </div>            </div>
          </div>
        </div>      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="card mb-3">
          <div class="card-body">
            <div class="d-flex align-items-start">
              <div class="d-flex flex-grow-1 flex-shrink-1 flex-column">
                <p class="text-muted mb-2">Активно</p>
                <h5 class="mb-0">45</h5>
              </div>
              <div class="card-icon bg-success-lighter text-success grey-shadow-2">
                <i class="mdi mdi-account-eye-outline"></i>
              </div>          </div>
        </div>      </div>
    </div>
      <div class="col-lg-3 col-sm-6">
        <div class="card mb-3">
          <div class="card-body">
            <div class="d-flex align-items-start">
              <div class="d-flex flex-grow-1 flex-shrink-1 flex-column">
                <p class="text-muted mb-2">Заблокировано</p>
                <h5 class="mb-0">6</h5>
              </div>
              <div class="card-icon bg-danger-lighter text-danger grey-shadow-2">
                <i class="mdi mdi-account-cancel"></i>
              </div>
            </div>      </div>
      </div>
    </div>
      <div class="col-lg-3 col-sm-6 align-items-center d-flex">
        <a class="btn btn-primary btn-block mb-3" href="?page=staff&editStaff=add">Добавить сотрудника</a>
      </div>
    </div>
    <div class="boxed-content">
      <div class="card">
        <table class="table dataTable sort table-users">
          <thead>
          <tr>
            <th>№</th>
            <th>Логин</th>
            <th>Ф.И.О.</th>
            <th>Д. р.</th>
            <th>Должность</th>
            <th>IP</th>
            <th>Юпитер</th>
          </tr>
          </thead>
          <tbody>
          <?php foreach ($staff as $row): ?>
            <tr>
              <td><?= $i++; ?></td>
              <td>
                <span class="badge-status <?= $staffClass->getStatus($row->active) ?>"></span>
                <a
                  href="?page=staff&editStaff=<?= $row->id; ?>"><?= $row->username; ?></a><?= $staffClass->getSudo($row->sudo); ?>
                <div class="table-toolbar">
                  <a class="table-toolbutton" href="?page=staff&editStaff=<?= $row->id; ?>">
                    <i class="mdi mdi-pencil-outline"></i>
                  </a>
                  <a class="table-toolbutton" data-bs-toggle="modal" data-bs-target="#delusermodal">
                    <i class="mdi mdi-delete-outline"></i>
                  </a>
                </div>
              </td>
              <td><?= $staffClass->getShortFIO($row->fullname)/*доделать как в дизайне*/
                ; ?></td>
              <td><?= $row->dob; ?></td>
              <td><?= $row->profession/*доделать как в дизайне*/
                ; ?></td>
              <td><?= $row->ip; ?></td>
              <td><?= $row->jupiter_tab_num; ?></td>
            </tr>
          <?php endforeach ?>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</main>
