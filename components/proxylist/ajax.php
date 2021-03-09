<?php
	$title = "Редактировать запись";
	$desc = "Описание чего-то коротко";
//проверим заполнены ли поля
	if (!empty($_POST["name_href"]) and !empty($_POST["menuindex"]) and !empty($_POST["proxy_href"]) and empty($_GET["editLink"])) {
		$menuindex = $_POST["menuindex"];
		$name_href = $_POST["name_href"];
		$proxy_href = $_POST["proxy_href"];

		// если заполнены поля добавляем новую запись
		$query = "INSERT INTO sdc_proxy_list SET menuindex = '$menuindex', name_href = '$name_href', proxy_href = '$proxy_href'";
		mysqli_query($link, $query);
		echo "я добавил запись";
	}
//Редактируем ссылку
	if (!empty($_GET["editLink"])) {
		$id = $_GET["editLink"];
		//получаем запись для редактирования
		$query = "SELECT * FROM sdc_proxy_list WHERE id='$id'";
		$result = mysqli_query($link, $query) or die (mysqli_error($link));
		//получаем массив с записью
		for ($editLink =[]; $row = mysqli_fetch_assoc($result); $editLink[] = $row);
		
		
		//Получаем все группы
		$query_group = "SELECT id, name_href FROM sdc_proxy_list WHERE id_group=0";
		$result_group = mysqli_query($link, $query_group) or die (mysqli_error($link));



		//получаем массив с записью
		for ($group[] =[]; $row = mysqli_fetch_array($result_group); $group[] = $row);

		foreach ($editLink as $key => $value) {
			$content = "<form action=\"\" method=\"post\">
					<div class=\"form-group\">
						<label for=\"name_href\" class=\"col control-label\">Наименование ссылки</label>
						<div class=\"col\">
							<input type=\"text\" value=\"{$value['name_href']}\" class=\"form-control\" placeholder=\"Наименование ссылки\" name=\"name_href\" autocomplete=\"off\" />
						</div>
					</div>
					<div class=\"form-group\">
						<label for=\"id_group\" class=\"col control-label\">Категория</label>";
			$content .= "<div><select class=\"form-control\" name=\"id_group\">
							<option value=\"{$value['id_group']}\">{$group[$value['id_group']]['name_href']}</option>";
						foreach ($group as $group_key => $group_value) {
						//выводим все группы
							if (!empty($group_value)){
							$content .= "<option value=\"{$group_value['id']}\">{$group_value['name_href']}</option>";
							}
						}
			$content .= "</select></div></div>
					<div class=\"form-group\">
						<label for=\"menuindex\" class=\"col control-label\">Положение в меню</label>
						<div class=\"col\">
							<input type=\"text\" value=\"{$value['menuindex']}\" class=\"form-control\" placeholder=\"Положение в меню\" name=\"menuindex\" autocomplete=\"off\" />
						</div>
					</div>
					<div class=\"form-group\">
						<label for=\"href\" class=\"col control-label\">Ссылка</label>
						<div class=\"col\">
							<input type=\"text\" value=\"{$value['href']}\" class=\"form-control\" placeholder=\"Ссылка\" name=\"href\" autocomplete=\"off\" />
						</div>
					</div>
					<div class=\"form-group\">
						<label for=\"proxy_href\" class=\"col control-label\">Запись для CCProxy</label>
						<div class=\"col\">
							<textarea class=\"form-control\" placeholder=\"Запись для CCProxy\" name=\"proxy_href\"  rows=\"3\">{$value['proxy_href']}</textarea>
						</div>
					</div>
					<div class=\"modal-footer\">
						<button type=\"button\" class=\"btn btn-secondary\">Удалить</button>
						<button type=\"submit\" class=\"btn btn-primary\">Сохранить изменения</button>
					</div>
				</form>";
        }
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
header( "refresh:1;url=/?page=proxylist" );
	}

