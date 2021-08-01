<?php
	$start = microtime(true); 
	spl_autoload_register(); // включаем автозагрузку классов
	error_reporting(E_ALL);
	ini_set("display_errors", "on");
	include "pages/categories-civil-cases.php";
	include "layout.php";

	echo '<div style="text-align:right;">Время выполнения скрипта: '.(microtime(true) - $start).' сек.</div>';
