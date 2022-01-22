<main class="main-content scroll-y">
  <div class="ps-3 pe-3">
    <header class="main-content-header d-flex align-items-center justify-content-between flex-wrap">
      <div class="header-left d-flex align-items-center justify-content-between p-2">
        <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Назад"><i
            class="mdi mdi-24px mdi-arrow-left"></i></a>
        <p class="h5 main-content-title mb-0">Графики</p>
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
                 title="Статистика">Графики
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
    <div class="row">
      <div class="col-xxl-3 col-4 stat-filters-col">
        <div class="card">
          <div class="card-body">
            <h5 class="mb-4">Выберите графики в списке:</h5>

            <div class="filter-group flex-column align-items-start stat-filters ps-4">
              <p class="group-title mb-2">Общее:</p>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-secondary me-2" type="checkbox" id="stat-population"
                       name="stat-population" data-value="stat-population" value="stat-population">
                <label class="form-check-label" for="stat-population">Население г. Сафоново</label>
              </div>
              <p class="group-title mb-2 mt-3">Корреспонденция:</p>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-primary me-2" type="checkbox" id="stat-inbox" name="stat-inbox"
                       data-value="stat-inbox" value="stat-inbox">
                <label class="form-check-label" for="stat-inbox">Исходящая</label>
              </div>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-success me-2" type="checkbox" id="stat-outbox" name="stat-outbox"
                       data-value="stat-outbox" value="stat-outbox">
                <label class="form-check-label" for="stat-outbox">Входящая</label>
              </div>
              <p class="group-title mb-2 mt-3">Портал ГАС Правосудие:</p>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-primary me-2" type="checkbox" id="stat-ineos" name="stat-ineos"
                       data-value="stat-ineos" value="stat-ineos">
                <label class="form-check-label" for="stat-ineos">Поданные обращения (без исковых заявлений)</label>
              </div>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-success me-2" type="checkbox" id="stat-ineoscases" name="stat-ineoscases"
                       data-value="stat-ineoscases" value="stat-ineoscases">
                <label class="form-check-label" for="stat-ineoscases">Поданные исковые заявления</label>
              </div>
              <p class="group-title mb-2 mt-3">Рассмотрение дел 1 инстанции:</p>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-danger me-2" type="checkbox" id="stat-g1cases" name="stat-g1cases"
                       data-value="stat-g1cases" value="stat-g1cases">
                <label class="form-check-label" for="stat-g1cases">Гражданские дела</label>
              </div>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-blue me-2" type="checkbox" id="stat-a1cases" name="stat-a1cases"
                       data-value="stat-a1cases" value="stat-a1cases">
                <label class="form-check-label" for="stat-a1cases">Дела об адм. правонарушениях</label>
              </div>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-warning me-2" type="checkbox" id="stat-u1cases" name="stat-u1cases"
                       data-value="stat-u1cases" value="stat-u1cases">
                <label class="form-check-label" for="stat-u1cases">Уголовные дела</label>
              </div>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-info me-2" type="checkbox" id="stat-mcases" name="stat-mcases"
                       data-value="stat-mcases" value="stat-mcases">
                <label class="form-check-label" for="stat-mcases">Материалы в порядке уг. производства, всего</label>
              </div>
              <p class="group-title mb-2 mt-3">Рассмотрение дел апелляционной инстанции:</p>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-orange me-2" type="checkbox" id="stat-g2cases" name="stat-g2cases"
                       data-value="stat-g2cases" value="stat-g2cases">
                <label class="form-check-label" for="stat-g2cases">Гражданские дела ап. инстанции (рассмотрено)</label>
              </div>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-teal me-2" type="checkbox" id="stat-a2cases" name="stat-a2cases"
                       data-value="stat-a2cases" value="stat-a2cases">
                <label class="form-check-label" for="stat-a2cases">Жалобы по адм. делам</label>
              </div>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-blue me-2" type="checkbox" id="stat-u2cases" name="stat-u2cases"
                       data-value="stat-u2cases" value="stat-u2cases">
                <label class="form-check-label" for="stat-u2cases">Уголовные дела ап. инстанции</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-9 col-8 stat-cards-col">
        <div class="row flex-wrap stats-cards">
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-population">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Общее</h6>
                  <h5 class="mb-0">Население г. Сафоново</h5>
                </div>
                <div class="d-flex me-2 flex-column p-3">
                  <div>
                    <a class="dropdown-toggle no-carret text-secondary" id="menu14" data-bs-toggle="dropdown"><i
                        class="mdi mdi-dots-vertical"></i></a>
                    <ul class="dropdown-menu dropdown-arrow" aria-labelledby="menu14" data-bs-popper="none">
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-sync me-2"></i>Обновить данные</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-list-status me-2"></i>Детализация</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-pulse me-2"></i>Статистика</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-table-off me-2"></i>Очистить данные</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="safpeopleChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-inbox">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Корреспонденция</h6>
                  <h5 class="mb-0">Исходящая</h5>
                </div>
                <div class="d-flex me-2 flex-column p-3">
                  <div>
                    <a class="dropdown-toggle no-carret text-secondary" id="menu14" data-bs-toggle="dropdown"><i
                        class="mdi mdi-dots-vertical"></i></a>
                    <ul class="dropdown-menu dropdown-arrow" aria-labelledby="menu14" data-bs-popper="none">
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-sync me-2"></i>Обновить данные</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-list-status me-2"></i>Детализация</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-pulse me-2"></i>Статистика</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-table-off me-2"></i>Очистить данные</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="postoutboxChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-outbox">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Корреспонденция</h6>
                  <h5 class="mb-0">Входящая</h5>
                </div>
                <div class="d-flex me-2 flex-column p-3">
                  <div>
                    <a class="dropdown-toggle no-carret text-secondary" id="menu14" data-bs-toggle="dropdown"><i
                        class="mdi mdi-dots-vertical"></i></a>
                    <ul class="dropdown-menu dropdown-arrow" aria-labelledby="menu14" data-bs-popper="none">
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-sync me-2"></i>Обновить данные</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-list-status me-2"></i>Детализация</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-pulse me-2"></i>Статистика</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-table-off me-2"></i>Очистить данные</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="postinboxChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-ineos">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Портал ГАС Правосудие</h6>
                  <h5 class="mb-0">Обращения (без исковых заявлений)</h5>
                </div>
                <div class="d-flex me-2 flex-column p-3">
                  <div>
                    <a class="dropdown-toggle no-carret text-secondary" id="menu14" data-bs-toggle="dropdown"><i
                        class="mdi mdi-dots-vertical"></i></a>
                    <ul class="dropdown-menu dropdown-arrow" aria-labelledby="menu14" data-bs-popper="none">
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-sync me-2"></i>Обновить данные</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-list-status me-2"></i>Детализация</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-pulse me-2"></i>Статистика</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-table-off me-2"></i>Очистить данные</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="eosChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-ineoscases">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Портал ГАС Правосудие</h6>
                  <h5 class="mb-0">Поданные исковые заявления</h5>
                </div>
                <div class="d-flex me-2 flex-column p-3">
                  <div>
                    <a class="dropdown-toggle no-carret text-secondary" id="menu14" data-bs-toggle="dropdown"><i
                        class="mdi mdi-dots-vertical"></i></a>
                    <ul class="dropdown-menu dropdown-arrow" aria-labelledby="menu14" data-bs-popper="none">
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-sync me-2"></i>Обновить данные</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-list-status me-2"></i>Детализация</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-pulse me-2"></i>Статистика</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-table-off me-2"></i>Очистить данные</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="eosgcaseChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-g1cases">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Рассмотрение дел 1 инстанции</h6>
                  <h5 class="mb-0">Гражданские дела</h5>
                </div>
                <div class="d-flex me-2 flex-column p-3">
                  <div>
                    <a class="dropdown-toggle no-carret text-secondary" id="menu14" data-bs-toggle="dropdown"><i
                        class="mdi mdi-dots-vertical"></i></a>
                    <ul class="dropdown-menu dropdown-arrow" aria-labelledby="menu14" data-bs-popper="none">
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-sync me-2"></i>Обновить данные</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-list-status me-2"></i>Детализация</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-pulse me-2"></i>Статистика</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-table-off me-2"></i>Очистить данные</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="gcaseChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-u1cases">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Рассмотрение дел 1 инстанции (с 2012 г.)</h6>
                  <h5 class="mb-0">Дела об адм. правонарушениях</h5>
                </div>
                <div class="d-flex me-2 flex-column p-3">
                  <div>
                    <a class="dropdown-toggle no-carret text-secondary" id="menu14" data-bs-toggle="dropdown"><i
                        class="mdi mdi-dots-vertical"></i></a>
                    <ul class="dropdown-menu dropdown-arrow" aria-labelledby="menu14" data-bs-popper="none">
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-sync me-2"></i>Обновить данные</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-list-status me-2"></i>Детализация</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-pulse me-2"></i>Статистика</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-table-off me-2"></i>Очистить данные</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="admcaseChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-g2cases">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Рассмотрение дел 1 инстанции</h6>
                  <h5 class="mb-0">Уголовные дела</h5>
                </div>
                <div class="d-flex me-2 flex-column p-3">
                  <div>
                    <a class="dropdown-toggle no-carret text-secondary" id="menu14" data-bs-toggle="dropdown"><i
                        class="mdi mdi-dots-vertical"></i></a>
                    <ul class="dropdown-menu dropdown-arrow" aria-labelledby="menu14" data-bs-popper="none">
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-sync me-2"></i>Обновить данные</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-list-status me-2"></i>Детализация</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-pulse me-2"></i>Статистика</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-table-off me-2"></i>Очистить данные</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="ucaseChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-u2cases">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Рассмотрение материалов</h6>
                  <h5 class="mb-0">Материалы в порядке уг. производства, всего</h5>
                </div>
                <div class="d-flex me-2 flex-column p-3">
                  <div>
                    <a class="dropdown-toggle no-carret text-secondary" id="menu14" data-bs-toggle="dropdown"><i
                        class="mdi mdi-dots-vertical"></i></a>
                    <ul class="dropdown-menu dropdown-arrow" aria-labelledby="menu14" data-bs-popper="none">
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-sync me-2"></i>Обновить данные</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-list-status me-2"></i>Детализация</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-pulse me-2"></i>Статистика</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-table-off me-2"></i>Очистить данные</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="mucaseChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>

          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-a1cases">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Рассмотрение дел апелляционной инстанции</h6>
                  <h5 class="mb-0">Гражданские дела</h5>
                </div>
                <div class="d-flex me-2 flex-column p-3">
                  <div>
                    <a class="dropdown-toggle no-carret text-secondary" id="menu14" data-bs-toggle="dropdown"><i
                        class="mdi mdi-dots-vertical"></i></a>
                    <ul class="dropdown-menu dropdown-arrow" aria-labelledby="menu14" data-bs-popper="none">
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-sync me-2"></i>Обновить данные</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-list-status me-2"></i>Детализация</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-pulse me-2"></i>Статистика</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-table-off me-2"></i>Очистить данные</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="g1caseChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-mcases">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Рассмотрение дел апелляционной инстанции (с 2013 г.)</h6>
                  <h5 class="mb-0">Жалобы по адм. делам</h5>
                </div>
                <div class="d-flex me-2 flex-column p-3">
                  <div>
                    <a class="dropdown-toggle no-carret text-secondary" id="menu14" data-bs-toggle="dropdown"><i
                        class="mdi mdi-dots-vertical"></i></a>
                    <ul class="dropdown-menu dropdown-arrow" aria-labelledby="menu14" data-bs-popper="none">
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-sync me-2"></i>Обновить данные</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-list-status me-2"></i>Детализация</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-pulse me-2"></i>Статистика</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-table-off me-2"></i>Очистить данные</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="adm1caseChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-a2cases">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Рассмотрение дел апелляционной инстанции</h6>
                  <h5 class="mb-0">Уголовные дела</h5>
                </div>
                <div class="d-flex me-2 flex-column p-3">
                  <div>
                    <a class="dropdown-toggle no-carret text-secondary" id="menu14" data-bs-toggle="dropdown"><i
                        class="mdi mdi-dots-vertical"></i></a>
                    <ul class="dropdown-menu dropdown-arrow" aria-labelledby="menu14" data-bs-popper="none">
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-sync me-2"></i>Обновить данные</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-list-status me-2"></i>Детализация</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-pulse me-2"></i>Статистика</a>
                      </li>
                      <li class="dropdown-item">
                        <a><i class="mdi mdi-table-off me-2"></i>Очистить данные</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="u1caseChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
