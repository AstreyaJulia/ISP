<?php
$title = "Тетрис";
$content = '
  <main class="main-content scroll-y">
  <div class="ps-3 pe-3">
    <header class="main-content-header d-flex align-items-center justify-content-between flex-wrap">
      <div class="header-left d-flex align-items-center justify-content-between p-2">
        <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Назад"><i
            class="mdi mdi-24px mdi-arrow-left"></i></a>
        <p class="h5 main-content-title mb-0">Тетрис</p>
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
                 title="Статистика">Тетрис
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
        <div class="row tetris-wrapper">
        <div class="col-12">
        <div class="row" style="height: 54px;">
        <div class="col-12">
               <button class="tetr-start-game btn btn-primary mb-3" style="width: 320px;">Начать игру</button>
</div>
</div>
<div class="row">
<div class="col-12">
<canvas width="320" height="640" id="game" class="tetris-canvas"></canvas>
<canvas style="border: 0" width="450" height="100" id="score"></canvas>
</div>
</div>

</div>
        </div>

      </div>
</main>
';
