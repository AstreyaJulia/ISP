<div class="ps-3 pe-3">
  <header class="main-content-header">
    <div class="header-left">
      <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title=""
         data-bs-original-title="Назад" aria-label="Назад"><i class="mdi mdi-24px mdi-arrow-left"></i></a>
      <p class="h5 main-content-title">Панель управления</p>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/" data-bs-toggle="tooltip" data-bs-placement="top"
                                         title="Главная страница"><i class="mdi mdi-home-outline"></i></a></li>
        </ol>
      </nav>
    </div>
    <div class="header-right">
      <button class="btn btn-primary" type="button" id="contentmenu" data-bs-toggle="dropdown" data-bs-placement="top"
              title="Меню">
        <i class="mdi mdi-cog-outline"></i>
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="contentmenu">
        <li><a href="#" class="dropdown-item btn-print"><i class="mdi mdi-sync me-2"></i>Обновить</a></li>
      </ul>
    </div>
  </header>
  <div class="row">
    <div class="col-4">
      <div class="widget widget-card-four mb-3 p-3">
        <div class="widget-content">
          <div class="w-content d-flex justify-content-between">
            <div class="w-info">
              <p>Пользователи</p>
            </div>
            <div>
              <a class="dropdown-toggle no-carret text-secondary" id="menu1" data-bs-toggle="dropdown" aria-expanded="false"><i class="mdi mdi-dots-vertical"></i></a>
              <ul class="dropdown-menu" aria-labelledby="menu1" style="">
                <li class="dropdown-item">
                  <a><i class="mdi mdi-sync me-2"></i>Обновить данные</a>
                </li>
                <li class="dropdown-item">
                  <a href=""><i class="mdi mdi-list-status me-2"></i>Управление пользователями</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row mt-2 mb-0 text-secondary">
            <div class="col-2">
              <span class="h6 value me-3 text-secondary"><?= $staffCount->allUsers ?></span>
            </div>
            <div class="col-5">
              <span>зарегистрировано</span>
            </div>
          </div>
          <div class="row mt-2 mb-0 text-secondary">
            <div class="col-2">
              <span class="h6 value me-3 text-success"><?= $staffCount->activeUsers ?></span>
            </div>
            <div class="col-8">
              <span>активно</span>
            </div>
            <div class="col-2">
              <p class="text-success m-0"><?= $staffCount->activeUsersPercent ?>%</p>
            </div>
          </div>
          <div class="row mt-2 mb-0 text-secondary">
            <div class="col-2">
              <span class="h6 value me-3 text-danger"><?= $staffCount->disableUsers ?></span>
            </div>
            <div class="col-8">
              <span>заблокировано</span>
            </div>
            <div class="col-2">
              <p class="text-danger m-0"><?= $staffCount->disableUsersPercent ?>%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">

    </div>
    <div class="col-4">

    </div>
  </div>
</div>
