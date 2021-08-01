<?php
$title = "FAQ по " . replaceBash(preg_split("/[_]+/", $_GET["faq"])["1"]);
$path = "components/faq/{$_GET['faq']}/";
$dir = scandir($path);
$content = '
  <header class="main-content-header">
    <div class="header-left">
    <p class="h5 main-content-title">' . replaceBash(preg_split("/[_]+/", $_GET["faq"])["1"]) . '</p>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
          <a href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="Главная страница"><i class="mdi mdi-home-outline"></i></a></li>
          <li class="breadcrumb-item">
          <a href="?page=faq">База знаний</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">' . replaceBash(preg_split("/[_]+/", $_GET["faq"])["1"]) . '</li>
        </ol>
      </nav>
    </div>
    <div class="header-right"></div>
  </header>
      <div class="faq-categories">
<div class="row">
<div class="col-3">
<div class="card">
<ul class="faq-categories-list">';
foreach ($dir as $value) {
  $content .= '<li class="faq-category">';
  //исключаем из показа системные папки и файл index.php
  if (strpos($value, ".") !== 0 and strpos($value, "index") !== 0) {
    //разбиваем строку по нижнему подчеркиванию
    $keywords = preg_split("/[_]+/", $value);
    //$keywords["0"] для сортировки
    $itemmenu = replaceBash($keywords["1"]);//$keywords["1"] Наименование пункта меню.
    //проверяем существование описания (иначе при отсутсвии выдает ошибки)
    if (isset($keywords["2"])) {
      $description = replaceBash($keywords["2"]);//$keywords["2"] описание
      $content .= '<a class="faq-category-link">' . $itemmenu . '<p>' . $description . '</p></a>';
    } else {
      $content .= '<a class="faq-category-link">' . $itemmenu . '</a>';
    }
    $content .= '<ul class="faq-category-sublist">';
    //Форимруем имя и путь к файлу
    foreach (scandir("$path$value") as $value_2) {
      if (strpos($value_2, ".") !== 0) {
        //разбиваем строку по нижнему подчеркиванию
        $keywords_2 = preg_split("/[_]+/", $value_2);
        //$keywords["0"] для сортировки
        $itemmenu_2 = replaceBash($keywords_2["1"]);//$keywords_2["1"] Наименование файла.
        //проверяем существование описания (иначе при отсутсвии выдает ошибки)
        if (isset($keywords_2["2"])) {
          $description_2 = replaceBash($keywords_2["2"]);//$keywords_2["2"] описание файла
          $content .= "<li class=\"faq-category-subitem\"><a data-link='components/faq/{$_GET['faq']}/$value/$value_2'\">$itemmenu_2</a><p>$description_2</p></li>";
        } else {
          $content .= "<li class=\"faq-category-subitem\"><a data-link='components/faq/{$_GET['faq']}/$value/$value_2'\">$itemmenu_2</a></li>";
        }
      }
    }
    $content .= '</ul>';
  }
  $content .= '</li>';
}
$content .= '</ul>
</div>
</div>
<div class="col-9">
	<div class="faq-categories-doc " style="display: none">
	<div class="card">
	<div class="card-body h-100">
			<div class="faq-body">
			<div class="loading-spinner-faq  d-flex align-items-center justify-content-center text-center w-100 h-100" style="display: none">
									<div class="spinner-border text-primary spinner-lg spinner-fixed"></div>

			</div>
			</div>
</div>
</div>

	</div>
</div>
</div>
	</div>';

//меняет '-' на ' '
function replaceBash($string)
{
  if (isset($string)) {
    return str_replace(['-', '.php'], [' ', ''], $string);
  } else {
    return "false";
  }
}
