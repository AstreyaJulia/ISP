<?php
	$title = "Редактировать запись";
	$desc = "Описание чего-то коротко";

	function WriteProxyList ($link) {
		//Получаем все name_href
		$query_name_href = "SELECT id, id_group, proxy_href FROM sdc_proxy_list WHERE name_href IS NOT NULL";
		$result_name_href = mysqli_query($link, $query_name_href) or die (mysqli_error($link));
		//получаем массив с записью
		for ($all_name_href = []; $row = mysqli_fetch_assoc($result_name_href); $all_name_href[] = $row);
		$id = 6; //Группа blacklist 
		$id_group = 6; //Ссылки из группы blacklist
		$output_whitelist = "";
		$output_blacklist = "";
		
		$whitelist = array_filter($all_name_href, function ($value) use ($id, $id_group) {
			return ($value["id"] != $id and $value["id_group"] != $id_group);
		}, ARRAY_FILTER_USE_BOTH);
		foreach ($whitelist as $resourse) {
			$output_whitelist .= $resourse["proxy_href"];
		}
		file_put_contents('components/proxylist/data/whitelist.txt', $output_whitelist);

		$blacklist = array_filter($all_name_href, function ($value) use ($id, $id_group) {
			return ($value["id"] == $id or $value["id_group"] == $id_group);
		}, ARRAY_FILTER_USE_BOTH);
		foreach ($blacklist as $resourse) {
			$output_blacklist .= $resourse["proxy_href"];
		}
		file_put_contents('components/proxylist/data/blacklist.txt', $output_blacklist);
	}

//Редактируем ссылку
	if (!empty($_GET["editLink"])) {
		//Получаем все группы
		$query_group = "SELECT id, name_href FROM sdc_proxy_list WHERE id_group=0";
		$result_group = mysqli_query($link, $query_group) or die (mysqli_error($link));
		//получаем массив с записью
		for ($group[] =[]; $row = mysqli_fetch_array($result_group); $group[] = $row);
		//редактируем ссылку
		if ($_GET["editLink"] !== "add"){
			$id = $_GET["editLink"];
			//получаем запись для редактирования
			$query = "SELECT * FROM sdc_proxy_list WHERE id='$id'";
			$result = mysqli_query($link, $query) or die (mysqli_error($link));
			//получаем массив с записью
			for ($editLink =[]; $row = mysqli_fetch_assoc($result); $editLink[] = $row);

			foreach ($editLink as $key => $value) {
				include "elements/form-editLink.php";
	        }

			if (!empty($_POST["name_href"]) and !empty($_POST["href"]) and $_GET["editLink"] !== "add") {
				$menuindex = $_POST["menuindex"];
				$id_group = $_POST["id_group"];
				$href = $_POST["href"];
				$name_href = $_POST["name_href"];
				$proxy_href = $_POST["proxy_href"];

				$query_update = "UPDATE sdc_proxy_list SET menuindex='$menuindex', id_group='$id_group', href='$href', name_href='$name_href', proxy_href='$proxy_href' WHERE id='$id'";
				mysqli_query($link, $query_update);
				//переходим в раздел
				WriteProxyList ($link);
				header("Location: /?page=proxylist");
			}
		} else {//добавляем ссылку
			$group["name_href"] = "";
			$value['name_href'] = "";
			$value['id_group'] = "1";//хорошо бы придумать универсальное решение
			$value['menuindex'] = "";
			$value['href'] = "";
			$value['proxy_href'] = "";
			include "elements/form-editLink.php";
			if (!empty($_POST["name_href"]) and !empty($_POST["href"]) and $_GET["editLink"] == "add") {
				$menuindex = $_POST["menuindex"];
				$id_group = $_POST["id_group"];
				$href = $_POST["href"];
				$name_href = $_POST["name_href"];
				$proxy_href = $_POST["proxy_href"];
				$query_insert = "INSERT INTO sdc_proxy_list (menuindex, id_group, href, name_href, proxy_href) VALUES ('$menuindex', '$id_group', '$href', '$name_href', '$proxy_href')";
				mysqli_query($link, $query_insert);
				//переписываем файлы для CCProxy
				WriteProxyList ($link);
				//переходим в раздел
				header("Location: /?page=proxylist");
			}
		}
	}

//Редактируем группу
	if (!empty($_GET["editGroup"])) {
		//редактируем группу
		if ($_GET["editGroup"] !== "add"){
			$id = $_GET["editGroup"];
			//получаем запись для редактирования
			$query = "SELECT menuindex, name_href, proxy_href FROM sdc_proxy_list WHERE id='$id'";
			$result = mysqli_query($link, $query) or die (mysqli_error($link));
			//получаем массив с записью
			for ($editGroup =[]; $row = mysqli_fetch_assoc($result); $editGroup[] = $row);

			foreach ($editGroup as $key => $value) {
				include "elements/form-editGroup.php";
	        }

			if (!empty($_POST["name_href"]) and $_GET["editGroup"] !== "add") {
				$menuindex = $_POST["menuindex"];
				$name_href = $_POST["name_href"];
				$proxy_href = $_POST["proxy_href"];
				$query_update = "UPDATE sdc_proxy_list SET menuindex='$menuindex', name_href='$name_href', proxy_href='$proxy_href' WHERE id='$id'";
				mysqli_query($link, $query_update);
				//переписываем файлы для CCProxy
				WriteProxyList ($link);
				//переходим в раздел
				header("Location: /?page=proxylist");
			}
		} else {//добавляем ссылку
			$value['name_href'] = "";
			$value['menuindex'] = "";
			$value['proxy_href'] = "";
			include "elements/form-editGroup.php";
			if (!empty($_POST["name_href"]) and $_GET["editGroup"] == "add") {
				$menuindex = $_POST["menuindex"];
				$name_href = $_POST["name_href"];
				$proxy_href = $_POST["proxy_href"];
				$query_insert = "INSERT INTO sdc_proxy_list (menuindex, name_href, proxy_href) VALUES ('$menuindex', '$name_href', '$proxy_href')";
				mysqli_query($link, $query_insert);
				//переписываем файлы для CCProxy
				WriteProxyList ($link);
				//переходим в раздел
				header("Location: /?page=proxylist");
			}
		}
	}
