<?php
 	//создаем массив только с детьми
	function children($id_group, $ProxyList) {
	    $children = [];
	    foreach ($ProxyList as $p) {
	        if (!empty($p["id_group"]) && $p["id_group"] == $id_group["id"]) {
	            $children[] = $p;
	        }
	    }
	    return $children;
	}

	//приводим таблицу room к человечному виду
	function position($row) {
		//Получаем номер комнаты
		$num_room = mb_substr($row, 1, strpos($row, '_') -2);
		//Получаем номер рабочего места
		$num_position = mb_substr($row, strpos($row, '_') , strlen($row));
		//Кабинеты
		if (mb_substr($row, - strlen($row), 1) == "к") {
			return "Кабинет № $num_room место $num_position";
		}
		//Проход в кабинеты
		if (mb_substr($row, - strlen($row), 1) == "п") {
			return "Проход в кабинет № $num_room место $num_position";
		}
		//Залы судебных заседаний
		if (mb_substr($row, - strlen($row), 1) == "з") {
			return "Зал судебного заседания № $num_room место $num_position";
		}
		//Серверная
		if (mb_substr($row, - strlen($row), 2) == "се") {
			return "Серверная";
		}
		//Совещательные комнаты
		if (mb_substr($row, - strlen($row), 1) == "с") {
			return "Совещательная комната № $num_room место $num_position";
		}
	}

	//приводит Фамилию Имя Отчество к виду Фамилия И.О.
	function shortFIO($fullname) {
		$shortFIO = preg_replace('#(.*)\s+(.).*\s+(.).*#usi', '$1 $2.$3.', $fullname);
		return $shortFIO;
	}

	// выводит статус
	function status($active, $metod) {
		// для страницы ?page=staff
		if ($metod == "staff") {
			if ($active == 1){
				return "success";
			} else {
				return "error";
			}
		}
		// для страниц ?editStaff
		if (array_key_exists("editStaff",$_GET)) {
			return array (
			    "0" => "доступ запрещён",
		        "1" => "доступ разрешён"
		    );
		}
	}

	// выводит статус суперпользователя
	function statusSudo($sudo, $metod) {
		// для страницы ?page=staff
		if ($sudo == 1 and $metod == "staff"){
			return '<span class="badge-big secondary">Админ</span>';
		}
		// для страниц ?editStaff
		if (array_key_exists("editStaff",$_GET)) {
			return array (
			    "0" => "Пользователь",
		        "1" => "Админ"
		    );
		}
	}

	//Список профессий
	function profession($profession, $metod) {
        if ($metod == "staff") {
	        foreach (prof_array() as $key => $value) {
	            if ($key == $profession){
	               return $value;
	            }
	        }
	    }
	    if (array_key_exists("editStaff", $_GET)) {
	    	return prof_array();
	    }
    }

	//Устанавливает в выпадающем списке значение из базы данных
	function selectOption($array, $selected){
		$content = "";
		foreach ($array as $key => $value) {
			if ($key == $selected){
				$content .= '<option value="'.$key.'" selected>'.$value.'</option>';
			} else {
				$content .= '<option value="'.$key.'">'.$value.'</option>';
			}
		}
		return $content;
	}

	function selectOptionPrimaryGroup($array, $selected){
		$content = "";
		foreach ($array as $key => $value) {
			if ($array[$key]["id"] == $selected){
				$content .= '<option value="'.$array [$key]["id"].'" selected>'.$array [$key]["name"].'</option>';
			} else {
				$content .= '<option value="'.$array [$key]["id"].'">'.$array [$key]["name"].'</option>';
			}
		}
		return $content;
	}

	//Заменим значения справочника primary_group_array на сокращённые
	function getGroupReplace() {
			$array_rep = array (
				"assistants" => array("id" => 2, "name" => "Помощники"),
				"secretary" => array("id" => 3, "name" => "Секретари с/з")
			);
			return array_replace(primary_group_array(), $array_rep);
		}

	//Выбирает действующих судей, устанавливает в выпадающем списке значение из базы данных
	function selectOptionJudge($link, $selected){
		$judge = $link->query("SELECT sdc_user_attributes.internalKey , sdc_user_attributes.fullname FROM sdc_users
									LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
										WHERE sdc_user_attributes.profession in(1,2,3) and sdc_users.active = 1")->fetchAll(PDO::FETCH_ASSOC);
		$content = '<option value="">Заполнить при необходимости</option>';
		foreach ($judge as $key => $value) {
			if ($value["internalKey"] == $selected){
				$content .= '<option value="'.$value["internalKey"].'" selected>'.$value["fullname"].'</option>';
			} else {
				$content .= '<option value="'.$value["internalKey"].'">'.$value["fullname"].'</option>';
			}
		}
		return $content;
	}

	//Выбирает незанятые рабочие места
	function selectOptionRoom($link){
		$judge = $link->query("SELECT sdc_room.id, sdc_room.position, sdc_room.jupiter_tab_num, sdc_room.ip, sdc_room.phone_worck, sdc_room.alarm_button, sdc_room.building_number FROM sdc_room
									LEFT JOIN sdc_user_attributes ON sdc_user_attributes.room=sdc_room.id
										WHERE sdc_user_attributes.room IS NULL ORDER BY sdc_room.position ASC")->fetchAll(PDO::FETCH_ASSOC);
		$content = "";
		foreach ($judge as $key => $value) {
			$content .= '<option value="'.$value["id"].'">'.position($value["position"]).'</option>';
		}
		return $content;
	}

	//Если переменной не существует записываем в class="" значение visually-hidden
	function visuallyHidden($param){
		if (empty($param)) {
			echo "visually-hidden";
		}
	}