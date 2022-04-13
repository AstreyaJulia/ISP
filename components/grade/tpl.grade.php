<main class="main-content scroll-y">
  <div class="ps-3 pe-3">
    <header class="main-content-header d-flex align-items-center justify-content-between flex-wrap">
      <div class="header-left d-flex align-items-center justify-content-between p-2">
        <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Назад"><i
            class="mdi mdi-24px mdi-arrow-left"></i></a>
        <p class="h5 main-content-title mb-0">Качество рассмотрения дел</p>
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
                 title="Статистика">Статистика
              </a>
            </li>
            <li class="breadcrumb-item p-2" aria-current="page">
              <a class="p-2" data-bs-toggle="tooltip" data-bs-placement="top"
                 title="Качество">Качество
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
    <div class="row">
      <div class="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
        <div class="card mb-3 p-3">
          <div class="widget-content">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <h6 class="surtitle">Нарушение сроков рассмотрения</h6>
            </div>
          </div>
          <!-- Кнопки -->
          <a class="btn btn-primary btn-block text-decoration-none mb-3" href="?page=deadlines"><span>Общий список</span></a>
        </div>
        <div class="card mb-3 p-3">
          <div class="widget-content">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <h6 class="surtitle">Актов не опублековано</h6>
            </div>
          </div>
          <!-- Кнопки -->
          <a class="btn btn-primary btn-block text-decoration-none" href="?page=sudact" ><span>Общий список</span></a>
        </div>
      </div>
      <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
        <div class="card mb-3 p-3">
          <div class="widget-content">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <h6 class="surtitle">Не рассмотренные дела (сроки)</h6>
            </div>
          </div>
          <!-- Кнопки -->
          <a class="btn btn-primary btn-block text-decoration-none mb-3" href="?page=suspended"><span>Приостановленные</span></a>
          <a class="btn btn-primary btn-block text-decoration-none mb-3" href="?page=motionless"><span>Без движения</span></a>
          <a class="btn btn-primary btn-block text-decoration-none mb-3" href="?page=not-reviewed"><span>Не окончено</span></a>
        </div>
      </div>
    </div>
  </div>
</main>
