<?php
$title = "FAQ";
$content = '<header class="main-content-header">
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
    <p class="h5">Навигация</p>';
$dir = scandir("components/faq/");
foreach($dir as $value) {
  if (strpos($value, ".") !== 0 and strpos($value, "index") !== 0) {
    //разбиваем строку по нижнему подчеркиванию
    $keywords = preg_split("/[_]+/", $value);
    //$keywords["0"] для сортировки
    $itemmenu = replaceBash($keywords["1"]);//$keywords["1"] Наименование пункта меню.
    //проверяем существование описания (иначе при отсутсвии выдает ошибки)
    if (isset($keywords["2"])) {
      $description = replaceBash($keywords["2"]);//$keywords["2"] описание
      //$content .= '</br><a class="" href="?faq='.$value.'">'.$itemmenu.'</a><p>'.$description.'</p>';
      $content .= '<div class="col">
      <a class="card faq-card" href="?faq='.$value.'">
        <div class="row">
          <div class="col">
            <div class="card-body">
              <i class="mdi mdi-book-open-variant d-flex align-items-center justify-content-center"></i>
              <p class="h6 text-center">'.$itemmenu.'</p>
              <p class="text-center">'.$description.'</p>
            </div>
          </div>
        </div>
      </a>
    </div>';
    } else {
      $content .= '<div class="col">
      <a class="card faq-card" href="?faq='.$value.'">
        <div class="row">
          <div class="col">
            <div class="card-body">
              <i class="mdi mdi-book-open-variant d-flex align-items-center justify-content-center"></i>
              <p class="h6 text-center">'.$itemmenu.'</p>
              <p class="text-center"></p>
            </div>
          </div>
        </div>
      </a>
    </div>';
    }
  }
}
$content .= '</div>';
//меняет '-' на ' '
function replaceBash($string) {
  if (isset($string)) {
    return str_replace("-", " ", $string);
  } else {
    return "false";
  }
}
