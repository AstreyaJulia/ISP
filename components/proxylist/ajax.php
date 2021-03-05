<?php
	$host = "192.168.2.111";
	$user = "root";
	$password = "";
	$dbName = "isp";

	$link = mysqli_connect($host, $user, $password, $dbName);
	mysqli_query($link, "SET NAMES 'utf8'");
//проверим заполнены ли поля
	if (!empty($_POST["name_href"]) and !empty($_POST["menuindex"]) and !empty($_POST["proxy_href"])) {
		$menuindex = $_POST["menuindex"];
		$name_href = $_POST["name_href"];
		$proxy_href = $_POST["proxy_href"];

		// если заполнены поля добавляем новую запись
		$query = "INSERT INTO sdc_proxy_list SET menuindex = '$menuindex', name_href = '$name_href', proxy_href = '$proxy_href'";
		mysqli_query($link, $query);
		echo "я добавил запись";
	}

	if (!empty($_GET[editLink])) {
		$id = $_GET[editLink];
		//получаем запись для редактирования
		$query = "SELECT * FROM sdc_proxy_list WHERE id='$id'";
		$result = mysqli_query($link, $query) or die (mysqli_error($link));
		//получаем массив с записью
		for ($editLink =[]; $row = mysqli_fetch_assoc($result); $editLink[] = $row);
		
		
		//Получаем все группы
		$query_group = "SELECT id, name_href FROM sdc_proxy_list WHERE id_group=0";
		$result_group = mysqli_query($link, $query_group) or die (mysqli_error($link));
		//получаем массив с записью
		for ($group[] =[]; $row = mysqli_fetch_assoc($result_group); $group[] = $row);
		

		foreach ($editLink as $key => $value) {
			echo "<form action=\"\" method=\"post\">
					<div class=\"form-group\">
						<label for=\"name_href\" class=\"col control-label\">Наименование ссылки</label>
						<div class=\"col\">
							<input type=\"text\" value=\"{$value['name_href']}\" class=\"form-control\" placeholder=\"Наименование ссылки\" name=\"name_href\" autocomplete=\"off\" />
						</div>
					</div>
					<div class=\"form-group\">
						<label for=\"id_group\" class=\"col control-label\">Переместить в категорию</label>";
			echo "<div><select class=\"form-control\" name=\"id_group\" id=\"id_group\">";
						foreach ($group as $group_key => $group_value) {
							echo "<option value=\"{$group_value['id']}\">{$group_value['name_href']}</option>";
						}
						echo "</select></div>";	
			echo "
					</div>
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
							<textarea class=\"form-control\" placeholder=\"Запись для CCProxy\" name=\"proxy_href\"  rows=\"3\">{$value['href']}</textarea>
						</div>
					</div>
					<div class=\"modal-footer\">
						<button type=\"button\" class=\"btn btn-secondary\">Закрыть</button>
						<button type=\"submit\" class=\"btn btn-primary\">Сохранить изменения</button>
					</div>
				</form>";
        }
	}
