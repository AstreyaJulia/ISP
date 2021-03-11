<?php
	$title = "Редактировать запись";
	$desc = "Описание чего-то коротко";
//Добавляем группу
	if (!empty($_POST["name_href"]) and !empty($_POST["menuindex"]) and !empty($_POST["proxy_href"]) and empty($_GET["editLink"])) {
		$menuindex = $_POST["menuindex"];
		$name_href = $_POST["name_href"];
		$proxy_href = $_POST["proxy_href"];

		// если заполнены поля добавляем новую запись
		$query = "INSERT INTO sdc_proxy_list SET menuindex = '$menuindex', name_href = '$name_href', proxy_href = '$proxy_href'";
		mysqli_query($link, $query);
		echo "я добавил запись";
	}

//Добавляем и редактируем ссылку
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

			if (!empty($_POST["name_href"]) and !empty($_POST["href"]) and !empty($_GET["editLink"])) {
				$menuindex = $_POST["menuindex"];
				$id_group = $_POST["id_group"];
				$href = $_POST["href"];
				$name_href = $_POST["name_href"];
				$proxy_href = $_POST["proxy_href"];

				$query_update = "UPDATE sdc_proxy_list SET menuindex='$menuindex', id_group='$id_group', href='$href', name_href='$name_href', proxy_href='$proxy_href' WHERE id='$id'";
				mysqli_query($link, $query_update);
				//переходим в раздел
				//header( "refresh:1;url=/?page=proxylist" );
				header("Location: /?page=proxylist");
			}
		} else {//добавляем ссылку
			$group["name_href"] = "";
			$value['name_href'] = "";
			$value['id_group'] = "1";//хорошо бы придумать универсальное решение
			$value['menuindex'] = "";
			$value['href'] = "";
			$value['proxy_href'] = "";
			
			echo $group[$value["id_group"]]["id"];
			include "elements/form-editLink.php";
		}
	} else {
		$content = "что-то пошло не так";
	}
