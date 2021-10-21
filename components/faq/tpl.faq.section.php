<div class="ps-3 pe-3">
  <header class="main-content-header">
    <div class="header-left">
      <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title=""
         data-bs-original-title="Назад" aria-label="Назад"><i class="mdi mdi-24px mdi-arrow-left"></i></a>
      <p class="h5 main-content-title"><?= $faq->getItem($_GET) ?></p>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="Главная страница">
              <i class="mdi mdi-home-outline"></i>
            </a>
          </li>
          <li class="breadcrumb-item">
            <a href="?page=faq" data-bs-toggle="tooltip" data-bs-placement="top" title="База знаний">База знаний</a>
          </li>
        </ol>
      </nav>
    </div>
    <div class="header-right">
    </div>
  </header>
  <div class="faq-categories">
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
</div>
