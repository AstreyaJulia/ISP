<?php

	$start = microtime(true); 
	error_reporting(E_ALL);
	ini_set("display_errors", "on");

	require_once "db_config.php";

	//Получаем все name_href
	$query_name_href = "SELECT id, id_group, proxy_href FROM sdc_proxy_list WHERE name_href IS NOT NULL";
	$result_name_href = mysqli_query($link, $query_name_href) or die (mysqli_error($link));
	//получаем массив с записью
	for ($all_name_href = []; $row = mysqli_fetch_assoc($result_name_href); $all_name_href[] = $row);
	
	

	$id = 6; //Группа blacklist 
	$id_group = 6; //Ссылки из группы blacklist
	$output = "";

	function whitelist ($id, $id_group, $output, $all_name_href) {
		$whitelist = array_filter($all_name_href, function ($value) use ($id, $id_group) {
			return ($value["id"] != $id and $value["id_group"] != $id_group);
		}, ARRAY_FILTER_USE_BOTH);
		foreach ($whitelist as $resourse) {
			$output .= $resourse["proxy_href"];
		}
		file_put_contents('components/proxylist/data/whitelist.txt', $output);
	}

	function blacklist ($id, $id_group, $output, $all_name_href) {
		$blacklist = array_filter($all_name_href, function ($value) use ($id, $id_group) {
			return ($value["id"] == $id or $value["id_group"] == $id_group);
		}, ARRAY_FILTER_USE_BOTH);
		foreach ($blacklist as $resourse) {
			$output .= $resourse["proxy_href"];
		}
		file_put_contents('components/proxylist/data/blacklist.txt', $output);
	}
	
	whitelist ($id, $id_group, $output, $all_name_href);
	blacklist ($id, $id_group, $output, $all_name_href);
	
	
	echo '<div style="text-align:right;">Время выполнения скрипта: '.(microtime(true) - $start).' сек.</div>';



