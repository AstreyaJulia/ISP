<header class="main-content-header">
  <div class="header-left"><p class="h5 main-content-title">База знаний</p>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="Главная страница">
            <i class="mdi mdi-home-outline"></i>
          </a>
        </li>
      </ol>
    </nav>
  </div>
  <div class="header-right"></div>
</header>
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
  <?php foreach($dir as $key => $value): ?>
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