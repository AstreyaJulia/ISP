<main class="main-content scroll-y">
  <div class="ps-3 pe-3">
    <header class="main-content-header d-flex align-items-center justify-content-between flex-wrap">
      <div class="header-left d-flex align-items-center justify-content-between p-2">
        <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Назад"><i
            class="mdi mdi-24px mdi-arrow-left"></i></a>
        <p class="h5 main-content-title mb-0"><?= $faq->getItem($_GET) ?></p>
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
            <li class="breadcrumb-item p-2" aria-current="page">
              <a class="p-2" data-bs-toggle="tooltip" data-bs-placement="top"
                 title="<?= $faq->getItem($_GET) ?>"><?= $faq->getItem($_GET) ?>
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
    <div class="faq-categories boxed-content">
      <div class="row">
        <div class="col-3">
          <div class="card">
            <ul class="faq-categories-list">
              <?php foreach ($section as $key => $value): ?>
                <li class="faq-category">
                  <a class="faq-category-link"><?= $value['itemmenu'] ?></a>
                  <ul class="faq-category-sublist">
                    <?php foreach ($value['section'] as $key_2 => $value_2): ?>
                      <li class="faq-category-subitem">
                        <a data-link="<?= $value_2['link'] ?>"><?= $value_2['itemmenu_2'] ?></a>
                      </li>
                    <?php endforeach ?>
                  </ul>
                </li>
              <?php endforeach ?>
            </ul>
          </div>
        </div>
        <div class="col-9">
          <div class="faq-categories-doc " style="display: none">
            <div class="card faq">
              <div class="card-body h-100">
                <div class="faq-body">
                  <div class="loading-spinner-faq  d-flex align-items-center justify-content-center text-center w-100 h-100" style="display: none">
                    <div class="spinner-bubble text-primary" role="status""></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
