<?php
	$title = "Редактировать запись";
	$desc = "Описание чего-то коротко";

	function WriteProxyList ($link) {
		//Получаем все name_href
		$all_name_href = $link->query("SELECT id, id_group, proxy_href FROM sdc_proxy_list WHERE name_href IS NOT NULL")->fetchAll(PDO::FETCH_ASSOC);
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
		$group = $link->query("SELECT id, name_href FROM sdc_proxy_list WHERE id_group=0")->fetchAll(PDO::FETCH_ASSOC);
		//редактируем ссылку
		if ($_GET["editLink"] !== "add"){
			$id = $_GET["editLink"];
			//получаем запись для редактирования
			$editLink = $link->prepare("SELECT * FROM sdc_proxy_list WHERE `id` = ?");
			$editLink->execute([$id]);
			while ($row = $editLink->fetch(PDO::FETCH_LAZY)) {
				include "components/proxylist/elements/form-editLink.php";
			}

			if (!empty($_POST["name_href"]) and !empty($_POST["href"]) and $_GET["editLink"] !== "add") {
				$menuindex = $_POST["menuindex"];
				$id_group = $_POST["id_group"];
				$href = $_POST["href"];
				$name_href = $_POST["name_href"];
				$proxy_href = $_POST["proxy_href"];
			    $query_update = "UPDATE sdc_proxy_list SET `menuindex`=:menuindex, `id_group`=:id_group, `href`=:href, `name_href`=:name_href, `proxy_href`=:proxy_href WHERE `id` = :id";
			    $params = [
			        ':id' => $id,
			        ':menuindex' => $menuindex,
			        ':id_group' => $id_group,
			        ':href' => $href,
			        ':name_href' => $name_href,
			        ':proxy_href' => $proxy_href
			    ];
			    $stmt = $link->prepare($query_update);
			    $stmt->execute($params);
				//переписываем файлы для CCProxy
				WriteProxyList ($link);
				//переходим в раздел
				header("Location: /?page=proxylist");
			}
		} else {//добавляем ссылку
		
		// устанавливаем значения по умолчанию
			$row = new class {
				public $name_href = false;
				public $menuindex = false;
				public $href = false;
				public $proxy_href = false;
				public $id_group = 1; //хорошо бы придумать универсальное решение
			};

			include "elements/form-editLink.php";
			
			if (!empty($_POST["name_href"]) and !empty($_POST["href"]) and $_GET["editLink"] == "add") {
				$menuindex = $_POST["menuindex"];
				$id_group = $_POST["id_group"];
				$href = $_POST["href"];
				$name_href = $_POST["name_href"];
				$proxy_href = $_POST["proxy_href"];
				//добавляем запись
				$query = "INSERT INTO `sdc_proxy_list` (`menuindex`, `id_group`, `href`, `name_href`, `proxy_href`) VALUES (:menuindex, :id_group, :href, :name_href, :proxy_href)";
				$params = [
				    ':menuindex' => $menuindex,
			        ':id_group' => $id_group,
			        ':href' => $href,
			        ':name_href' => $name_href,
			        ':proxy_href' => $proxy_href
				];
				$stmt = $link->prepare($query);
				$stmt->execute($params);
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
			$editGroup = $link->prepare("SELECT menuindex, name_href, proxy_href FROM sdc_proxy_list WHERE `id` = ?");
			$editGroup->execute([$id]);
			while ($row = $editGroup->fetch(PDO::FETCH_LAZY)) {
				include "elements/form-editGroup.php";
			}
			if (!empty($_POST["name_href"]) and $_GET["editGroup"] !== "add") {
				$menuindex = $_POST["menuindex"];
				$name_href = $_POST["name_href"];
				$proxy_href = $_POST["proxy_href"];
				$query_update = "UPDATE sdc_proxy_list SET `menuindex`=:menuindex, `name_href`=:name_href, `proxy_href`=:proxy_href WHERE `id` = :id";
			    $params = [
			        ':id' => $id,
			        ':menuindex' => $menuindex,
			        ':name_href' => $name_href,
			        ':proxy_href' => $proxy_href
			    ];
			    $stmt = $link->prepare($query_update);
			    $stmt->execute($params);
				//переписываем файлы для CCProxy
				WriteProxyList ($link);
				//переходим в раздел
				header("Location: /?page=proxylist");
			}
		} else {//добавляем ссылку

			// устанавливаем значения по умолчанию
			$row = new class {
				public $name_href = false;
				public $menuindex = false;
				public $proxy_href = false;
			};
			include "elements/form-editGroup.php";
			if (!empty($_POST["name_href"]) and $_GET["editGroup"] == "add") {
				$menuindex = $_POST["menuindex"];
				$name_href = $_POST["name_href"];
				$proxy_href = $_POST["proxy_href"];
				//добавляем запись
				$query = "INSERT INTO `sdc_proxy_list` (`menuindex`, `name_href`, `proxy_href`) VALUES (:menuindex, :name_href, :proxy_href)";
				$params = [
				    ':menuindex' => $menuindex,
			        ':name_href' => $name_href,
			        ':proxy_href' => $proxy_href
				];
				$stmt = $link->prepare($query);
				$stmt->execute($params);
				//переписываем файлы для CCProxy
				WriteProxyList ($link);
				//переходим в раздел
				header("Location: /?page=proxylist");
			}
		}
	}