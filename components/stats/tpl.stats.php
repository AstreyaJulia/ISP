<main class="main-content h-100 scroll-y">
  <div class="ps-3 pe-3 d-flex flex-column h-100">
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
    <div class="row h-100 d-flex">
      <div class="col-xxl-3 col-4 stat-filters-col" style="height: 95%">
        <div class="card" style="height: 90%">
          <div class="card-body d-flex flex-column">
            <h5 class="mb-4">Выберите графики в списке:</h5>

            <div class="filter-group flex-column align-items-start stat-filters ps-4 h-100 overlayscrollbar os-host-flexbox ">
              <p class="group-title mb-2">Общее:</p>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-secondary me-2" type="checkbox" id="stat-population"
                       name="stat-population" data-value="stat-population" value="stat-population">
                <label class="form-check-label" for="stat-population">Население г. Сафоново</label>
              </div>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-secondary me-2" type="checkbox" id="stat-smolOblpopulation"
                       name="stat-smolOblpopulation" data-value="stat-smolOblpopulation" value="stat-population">
                <label class="form-check-label" for="stat-smolOblpopulation">Население Смоленской области</label>
              </div>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-secondary me-2" type="checkbox" id="stat-smolOblworkpeople"
                       name="stat-smolOblworkpeople" data-value="stat-smolOblworkpeople" value="stat-smolOblworkpeople">
                <label class="form-check-label" for="stat-smolOblworkpeople">Трудоспособное население Смоленской области</label>
              </div>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-secondary me-2" type="checkbox" id="stat-smolOblnowork"
                       name="stat-smolOblnowork" data-value="stat-smolOblnowork" value="stat-smolOblnowork">
                <label class="form-check-label" for="stat-smolOblnowork">Количество безработных в Смоленской области, тыс. человек</label>
              </div>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-primary me-2" type="checkbox" id="stat-inflation"
                       name="stat-inflation" data-value="stat-inflation" value="stat-inflation">
                <label class="form-check-label" for="stat-inflation">Уровень инфляции в России</label>
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
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-primary me-2" type="checkbox" id="stat-emailoutbox" name="stat-emailoutboxx"
                       data-value="stat-emailoutbox" value="stat-emailoutbox">
                <label class="form-check-label" for=stat-emailoutbox">Исходящая электронная почта</label>
              </div>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-success me-2" type="checkbox" id="stat-emailoutbox" name="stat-emailinbox"
                       data-value="stat-emailinbox" value="stat-emailoutbox">
                <label class="form-check-label" for="stat-emailinbox">Входящая электронная почта</label>
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
              <p class="group-title mb-2 mt-3">Рассмотрение дел 1 инстанции районными (городскими) судами Смоленской области (по 29 судам в 2010 г., по 21 судам с 2011 г.):</p>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-danger me-2" type="checkbox" id="stat-g1oblcases" name="stat-g1oblcases"
                       data-value="stat-g1oblcases" value="stat-g1oblcases">
                <label class="form-check-label" for="stat-g1oblcases">Гражданские дела</label>
              </div>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-warning me-2" type="checkbox" id="stat-u1oblcases" name="stat-u1oblcases"
                       data-value="stat-u1oblcases" value="stat-u1oblcases">
                <label class="form-check-label" for="stat-u1oblcases">Уголовные дела</label>
              </div>
              <div class="form-check d-flex align-items-center mb-2 flex-shrink-0">
                <input class="form-check-input input-filter flex-shrink-0 bg-blue me-2" type="checkbox" id="stat-adm1oblcases" name="stat-adm1oblcases"
                       data-value="stat-adm1oblcases" value="stat-u1oblcases">
                <label class="form-check-label" for="stat-adm1oblcases">Дела об адм. правонарушениях</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-9 col-8 stat-cards-col h-100">
        <div class="row flex-wrap stats-cards scroll-y" style="height: 90%">
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-population">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Общее</h6>
                  <h5 class="mb-0">Население г. Сафоново</h5>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="safpeopleChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-smolOblpopulation">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Общее</h6>
                  <h5 class="mb-0">Население Смоленской области</h5>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="smolOblpeopleChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-smolOblworkpeople">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Общее</h6>
                  <h5 class="mb-0">Трудоспособное население Смоленской области</h5>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="smolOblworkpeopleChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-smolOblnowork">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Общее</h6>
                  <h5 class="mb-0">Количество безработных в Смоленской области, тыс. чел.</h5>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="smolOblnoworkChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-inflation">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Общее</h6>
                  <h5 class="mb-0" title="см. уголовные дела 1 инст.">Уровень инфляции в России</h5>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="inflationChart" style="min-height: 315px;">
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
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="postoutboxChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-emailoutbox">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Электронная почта</h6>
                  <h5 class="mb-0">Исходящая</h5>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="emailoutboxChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-emailinbox">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Электронная почта</h6>
                  <h5 class="mb-0">Входящая</h5>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="emailinboxChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-outbox">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Корреспонденция</h6>
                  <h5 class="mb-0">Входящая, включая обращения, эл. почту</h5>
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
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="gcaseChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-a1cases">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Рассмотрение дел 1 инстанции (с 2012 г.)</h6>
                  <h5 class="mb-0">Дела об адм. правонарушениях</h5>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="admcaseChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-u1cases">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Рассмотрение дел 1 инстанции</h6>
                  <h5 class="mb-0">Уголовные дела</h5>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="ucaseChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-mcases">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Рассмотрение материалов</h6>
                  <h5 class="mb-0">Материалы в порядке уг. производства, всего</h5>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="mucaseChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-g2cases">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Рассмотрение дел апелляционной инстанции</h6>
                  <h5 class="mb-0">Гражданские дела</h5>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="g1caseChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-a2cases">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Рассмотрение дел апелляционной инстанции (с 2013 г.)</h6>
                  <h5 class="mb-0">Жалобы по адм. делам</h5>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="adm1caseChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-u2cases">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Рассмотрение дел апелляционной инстанции</h6>
                  <h5 class="mb-0">Уголовные дела</h5>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="u1caseChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-g1oblcases">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Рассмотрение дел 1 инстанции (по области)</h6>
                  <h5 class="mb-0">Гражданские дела</h5>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="gcaseOblChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-u1oblcases">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Рассмотрение дел 1 инстанции (по области)</h6>
                  <h5 class="mb-0">Уголовные дела</h5>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="ucaseOblChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6 col-md-6 col-12 stat-card d-none stat-adm1oblcases">
            <div class="card mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column p-3">
                  <h6 class="surtitle">Рассмотрение дел 1 инстанции (по области)</h6>
                  <h5 class="mb-0">Дела об адм. правонарушениях</h5>
                </div>
              </div>
              <div class="card-body pe-md-0 p-0" style="position: relative;">
                <div class="apexchart" data-chart-name="admcaseOblChart" style="min-height: 315px;">
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</main>
