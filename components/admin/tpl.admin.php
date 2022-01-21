<main class="main-content scroll-y">
  <div class="ps-3 pe-3">
    <header class="main-content-header d-flex align-items-center justify-content-between flex-wrap">
      <div class="header-left d-flex align-items-center justify-content-between p-2">
        <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Назад"><i
            class="mdi mdi-24px mdi-arrow-left"></i></a>
        <p class="h5 main-content-title mb-0">Панель управления</p>
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
            <li class="breadcrumb-item p-2" aria-current="page">
              <a class="p-2" data-bs-toggle="tooltip" data-bs-placement="top"
                 title="Панель управления">Панель управления
              </a>
            </li>
          </ol>
        </nav>
        <div>
          <button class="btn btn-primary" type="button" id="contentmenu" data-bs-toggle="dropdown"
                  data-bs-placement="top"
                  title="Меню">
            <i class="mdi mdi-cog-outline"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="contentmenu">
            <li><a href="#" class="dropdown-item btn-print"><i class="mdi mdi-sync me-2"></i>Обновить</a></li>
          </ul>
        </div>
      </div>
    </header>
    <div class="row">
      <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
        <div class="card mb-3 p-3">
          <div class="widget-content">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <h6 class="surtitle">Пользователи</h6>
            </div>
            <div class="widget-content">
              <div class="pt-1">
                <div class="d-flex align-items-center mb-2">
                  <div class="card-icon small bg-primary-lighter text-primary me-3 grey-shadow-2">
                    <i class="mdi mdi-account-group-outline"></i>
                  </div>
                  <div class="activity-progress flex-grow-1 align-items-center">
                    <small class="text-muted d-inline-block my-3">Зарегистрировано</small>
                    <small class="float-end my-3"><?= $staffCount->allUsers ?></small>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <div class="card-icon small bg-success-lighter text-success me-3 grey-shadow-2">
                    <i class="mdi mdi-account-eye-outline"></i>
                  </div>
                  <div class="activity-progress flex-grow-1 align-items-center">
                    <small class="text-muted d-inline-block mb-2">Активно</small>
                    <small class="float-end"><?= $staffCount->activeUsers ?></small>
                    <div class="progress progress-sm mb-3">
                      <div class="progress-bar bg-gradient-success" role="progressbar"
                           style="width: <?= $staffCount->activeUsersPercent ?>%"
                           aria-valuenow="<?= $staffCount->activeUsersPercent ?>" aria-valuemin="0" aria-valuemax="100"
                           data-bs-toggle="tooltip" data-bs-placement="top"
                           data-bs-original-title="<?= $staffCount->activeUsers ?>"></div>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <div class="card-icon small bg-danger-lighter text-danger me-3 grey-shadow-2">
                    <i class="mdi mdi-account-cancel"></i>
                  </div>
                  <div class="activity-progress flex-grow-1 align-items-center">
                    <small class="text-muted d-inline-block mb-2">Заблокировано</small>
                    <small class="float-end"><?= $staffCount->disableUsers ?></small>
                    <div class="progress progress-sm mb-3">
                      <div class="progress-bar bg-gradient-danger" role="progressbar"
                           style="width: <?= $staffCount->disableUsersPercent ?>%"
                           aria-valuenow="<?= $staffCount->disableUsersPercent ?>" aria-valuemin="0" aria-valuemax="100"
                           data-bs-toggle="tooltip" data-bs-placement="top"
                           data-bs-original-title="<?= $staffCount->disableUsers ?>"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <a class="btn btn-primary btn-block mb-3 text-decoration-none" href="?page=staff&editStaff=add"
             target="_blank"><i class="mdi mdi-account-plus-outline me-2"></i><span>Добавить</span></a>
          <a class="btn btn-primary btn-block text-decoration-none" href="?page=staff" target="_blank"><i
              class="mdi mdi-account-wrench-outline me-2"></i><span>Управление</span></a>
        </div>
      </div>
      <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
        <div class="card card mb-3 p-3">
          <div class="widget-content">
            <h6 class="surtitle">Посещения</h6>
            <div class="apexchart1" data-chart-name="successLineChart"></div>
          </div>
        </div>
      </div>

      <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
        <!-- Разработка и тестирование -->
        <div class="card mb-3 p-3">
          <div class="widget-content">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <h6 class="surtitle">Разработка и тестирование</h6>
            </div>
          </div>
          <!-- Кнопки -->
          <a class="btn btn-primary btn-block text-decoration-none mb-3" href="?page=test" target="_blank"><span>Тестовая страница</span></a>
          <a class="btn btn-primary btn-block text-decoration-none mb-3" href="?page=to-do" target="_blank"><span>Задачи</span></a>
          <a class="btn btn-primary btn-block text-decoration-none mb-3" href="?page=tetris" target="_blank"><span>Тетрис</span></a>
          <a class="btn btn-primary btn-block text-decoration-none mb-3" href="?page=workplaces" target="_blank"><span>Рабочие места</span></a>
        </div>

        <div class="card mb-3 p-3">
          <div class="widget-content">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <h6 class="surtitle">Дизайн и UI-kit</h6>
            </div>
          </div>
          <!-- Кнопки -->
          <a class="btn btn-primary btn-block text-decoration-none" href="?page=uikit" target="_blank"><span>UI-Kit</span></a>
        </div>
        <div class="card mb-3 p-3">
          <div class="widget-content">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <h6 class="surtitle">Документация</h6>
            </div>
          </div>
          <a class="btn btn-primary btn-block text-decoration-none" href="?page=documentation" target="_blank"><span>Документация</span></a>
        </div>
      </div>

    </div>
  </div>
</main>
