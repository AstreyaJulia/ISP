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
      <div class="workplace-search me-3">
        <input class="form-control" type="text" placeholder="Поиск..." id="workplace-search">
      </div>
      <button class="btn btn-outline-success ms-2" type="button" id="reportstmenu" data-bs-toggle="dropdown"
              data-bs-placement="top" title="Отчеты">Отчёты
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="reportstmenu">
        <li class="dropdown-item">
          <a href="#">Паспорт рабочего места (АРМ)</a>
        </li>
        <li class="dropdown-item">
          <a href="#">Печать стикеров</a>
        </li>
        <li class="dropdown-item">
          <a href="#">Расход картриджей</a>
        </li>
        <li class="dropdown-item">
          <a href="#">Наличие картриджей</a>
        </li>
        <li class="dropdown-item">
          <a href="#">История перемещений устройств</a>
        </li>
        <li class="dropdown-item">
          <a href="#">Список инвентарных номеров</a>
        </li>
        <li class="dropdown-item">
          <a href="#">Оборудование на списание</a>
        </li>
      </ul>

      <button class="btn btn-outline-success ms-2" type="button" id="catalogmenu" data-bs-toggle="dropdown"
              data-bs-placement="top" title="Отчеты">Справочники
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="catalogmenu">
        <li class="dropdown-item">
          <a href="#">Устройства</a>
        </li>
        <li class="dropdown-item">
          <a href="#">Программное обеспечение</a>
        </li>
        <li class="dropdown-item">
          <a href="#">Производители</a>
        </li>
        <li class="dropdown-item">
          <a href="#">Каталог устройств</a>
        </li>
        <li class="dropdown-item">
          <a href="#">Тип работ</a>
        </li>
        <li class="dropdown-item">
          <a href="#">Перемещение и списание</a>
        </li>
        <li class="dropdown-item">
          <a href="#">Организации</a>
        </li>
      </ul>

      <button class="btn btn-primary ms-2" type="button" id="contentmenu" data-bs-toggle="dropdown"
              data-bs-placement="top" title="Меню">
        <i class="mdi mdi-cog-outline"></i>
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="contentmenu">
        <li class="dropdown-item">
          <a href="#" class=" btn-print">Печать</a>
        </li>
      </ul>
      </ul>
    </div>

    <div class="row boxed-content">
      <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
        <div class="card">
          <div class="card-header">
            <button class="btn btn-primary ms-2" type="button" id="addplacemenu" data-bs-toggle="dropdown"
                    data-bs-placement="top" title="Меню"><i class="mdi mdi-plus"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="addplacemenu">
              <li class="dropdown-item">
                <a href="#">Здание</a>
              </li>
              <li class="dropdown-item">
                <a href="#">Этаж</a>
              </li>
              <li class="dropdown-item">
                <a href="#">Помещение</a>
              </li>
              <li class="dropdown-item">
                <a href="#">Рабочее место</a>
              </li>
            </ul>
            <button class="btn btn-primary ms-2" type="button" id="placemenu" data-bs-toggle="dropdown"
                    data-bs-placement="top" title="Меню">
              <i class="mdi mdi-cog-outline"></i></button>
            <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="placemenu">
              <li class="dropdown-item">
                <a href="#">Редактировать</a>
              </li>
              <li class="dropdown-item">
                <a href="#">Переместить вверх</a>
              </li>
              <li class="dropdown-item">
                <a href="#">Переместить вниз</a>
              </li>
              <li class="dropdown-item">
                <a href="#" class="text-danger">Удалить</a>
              </li>
            </ul>
          </div>
          <ul class="ztree p-3 border-top" id="workplace-tree">
          </ul>
        </div>
      </div>
      <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-6 col-sm-6 col-12">
        <div class="card">
          <div class="card-header">
            <button class="btn btn-primary ms-2" type="button" id="additemmenu" data-bs-toggle="dropdown"
                    data-bs-placement="top" title="Меню"><i class="mdi mdi-plus"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="additemmenu">
              <li class="dropdown-item">
                <a href="#">Устройство</a>
              </li>
              <li class="dropdown-item">
                <a href="#">Мебель</a>
              </li>
              <li class="dropdown-item">
                <a href="#">ПО</a>
              </li>
            </ul>
            <button class="btn btn-primary ms-2" type="button" id="placemenu" data-bs-toggle="dropdown"
                    data-bs-placement="top" title="Меню">
              <i class="mdi mdi-cog-outline"></i></button>
            <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="placemenu">
              <li class="dropdown-item">
                <a href="#">Редактировать</a>
              </li>
              <li class="dropdown-divider"></li>
              <li class="dropdown-item">
                <a href="#">Переместить вверх</a>
              </li>
              <li class="dropdown-item">
                <a href="#">Переместить вниз</a>
              </li>
              <li class="dropdown-divider"></li>
              <li class="dropdown-item">
                <a href="#">Переместить на другое рабочее место</a>
              </li>
              <li class="dropdown-item">
                <a href="#">Вернуть на предыдущее рабочее место</a>
              </li>
              <li class="dropdown-item">
                <a href="#">Заменить расходный материал</a>
              </li>
              <li class="dropdown-divider"></li>
              <li class="dropdown-item">
                <a href="#" class="text-danger">Удалить</a>
              </li>
            </ul>
          </div>
          <ul class="ztree p-3 border-top" id="placeitems-tree">
        </div>
      </div>
    </div>
  </div>
</main>
