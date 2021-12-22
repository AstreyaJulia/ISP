<?php
// Подключаем класс для работы с разделом FAQ
$faq = new \Core\Model\FAQ();

if (isset(array_keys($_GET)['1']) ? $_GET[array_keys($_GET)['1']] : "true") {
  $title = "FAQ";
  $dir = $faq->getCategory('components/faq/');
  ob_start();
    include "components/faq/tpl.faq.php";
    $content = ob_get_contents();
  ob_end_clean();
} else {
  $title = "FAQ по " . $faq->getItem($_GET);
  $section = $faq->getSection($_GET);
  ob_start();
    include "components/faq/tpl.faq.section.php";
    $content = ob_get_contents();
  ob_end_clean();
}