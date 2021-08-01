<?php
$title = "FAQ по " . replaceBash(preg_split("/[_]+/", $_GET["faq"])["1"]);
$path = "components/faq/{$_GET['faq']}/";
$dir = scandir($path);
$content = '<header class="main-content-header">
        <h3 class="main-content-title">' . replaceBash(preg_split("/[_]+/", $_GET["faq"])["1"]) . '</h3>
        <div class="main-content-subheader">
            <div class="breadcrumbs">
                <a href="/" class="breadcrumbs-home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                    </svg>
                </a>
                <a class="breadcrumbs-item" href="?page=faq">База знаний</a>
                <a class="breadcrumbs-item active">' . replaceBash(preg_split("/[_]+/", $_GET["faq"])["1"]) . '</a>
            </div>
        </div>
    </header>
    <div class="faq-categories">
    	<ul class="faq-categories-list accordion-group">';
foreach ($dir as $value) {
  $content .= '<li class="faq-category accordion-item">';
  //исключаем из показа системные папки и файл index.php
  if (strpos($value, ".") !== 0 and strpos($value, "index") !== 0) {
    //разбиваем строку по нижнему подчеркиванию
    $keywords = preg_split("/[_]+/", $value);
    //$keywords["0"] для сортировки
    $itemmenu = replaceBash($keywords["1"]);//$keywords["1"] Наименование пункта меню.
    //проверяем существование описания (иначе при отсутсвии выдает ошибки)
    if (isset($keywords["2"])) {
      $description = replaceBash($keywords["2"]);//$keywords["2"] описание
      $content .= '<a class="faq-category-link accordion-header">' . $itemmenu . '<p>' . $description . '</p></a>';
    } else {
      $content .= '<a class="faq-category-link accordion-header">' . $itemmenu . '</a>';
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
	<div class="faq-categories-doc">
		<div id="contentBody"></div>
		  <div class="spinner-border text-primary spinner-lg spinner-fixed" id="loading" style="display: none">
  </div>
	</div>
	</div>';

//меняет '-' на ' '
function replaceBash($string)
{
  if (isset($string)) {
    return str_replace(['-', '.php'], [' ', ''], $string);
  } else {
    echo "false";
  }

}
