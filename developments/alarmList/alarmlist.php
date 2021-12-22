<?php
	namespace Core\Model;
	$start = microtime(true);
	// включаем автозагрузку классов
	spl_autoload_register(function($class) {
	$filename = $_SERVER['DOCUMENT_ROOT'] . '/' . str_replace('\\', '/', mb_strtolower($class)) . '.php';
		require ($filename);
	});
	error_reporting(E_ALL);
	ini_set("display_errors", "on");


	//подключаемся к базе
	require_once $_SERVER["DOCUMENT_ROOT"] ."/core/config/db_config.php";
	//подключаем функции
	require_once $_SERVER["DOCUMENT_ROOT"] ."/core/extension/custom_functions.php";
	//подключаем справочники
	require_once $_SERVER["DOCUMENT_ROOT"] ."/core/extension/reference_book.php";

	$alarmList = $link->query("SELECT *, sdc_users.id, DATE_FORMAT(dob, '%d.%m.%Y') as dob FROM sdc_users
			LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
				LEFT JOIN sdc_room ON sdc_room.id=sdc_user_attributes.room WHERE sdc_users.active = 1 and sdc_user_attributes.profession in (1,2,3,6,7,9)
				ORDER BY sdc_user_attributes.profession + 0")->fetchAll(\PDO::FETCH_CLASS, __NAMESPACE__ .'\\Alarmbutton');

	$family = [];

	// Объединяем каждого ребенка с соответствующим родителем
	foreach ($alarmList as $p => $pp) {
	    $children = $pp->getChildren($pp, $alarmList);
	    if ($children != []) {
	        $family[] = array_merge((array) $pp, ["Подгруппа" => $children]);
	    }
	}

	ob_start();

		include "tpl.alarmlist.php";

	$content = ob_get_contents();
	ob_end_flush();


	echo '<div style="text-align:right;">Время выполнения скрипта: '.(microtime(true) - $start).' сек.</div>';