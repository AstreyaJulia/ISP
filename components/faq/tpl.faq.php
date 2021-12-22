<main class="main-content scroll-y">
  <div class="ps-3 pe-3">
    <header class="main-content-header d-flex align-items-center justify-content-between flex-wrap">
      <div class="header-left d-flex align-items-center justify-content-between p-2">
        <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Назад"><i
            class="mdi mdi-24px mdi-arrow-left"></i></a>
        <p class="h5 main-content-title mb-0">База знаний</p>
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
                 title="Помощь">Помощь
              </a>
            </li>
            <li class="breadcrumb-item p-2" aria-current="page">
              <a class="p-2" data-bs-toggle="tooltip" data-bs-placement="top"
                 title="База знаний">База знаний
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
    <div class="boxed-content">
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label for="search" class="form-label"></label>
            <input class="form-control" type="search" placeholder="Введите слова для поиска" id="search">
          </div>
        </div>
      </div>
      <div class="row faq-cards">
        <p class="h5">Навигация</p>
        <?php foreach ($dir as $key => $value): ?>
          <div class="col-4">
            <a class="card faq-card" href="?page=faq&<?= $value['link'] ?>">
              <div class="row">
                <div class="col">
                  <div class="card-body">
                    <p class="h5 text-center"><?= $value['itemmenu'] ?></p>
                    <p class="text-center"><?= $value['description'] ?></p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        <?php endforeach ?>
      </div>

    </div>
  </div>
</main>
