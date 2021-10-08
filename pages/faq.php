<?php
$title = "FAQ";
$faq = new \Core\Model\FAQ();
$dir = $faq->getCategory('components/faq/');

ob_start();
  include "components/faq/tpl.faq.php";
  $content = ob_get_contents();
ob_end_clean();
