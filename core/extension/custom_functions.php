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

	//приводит Фамилию Имя Отчество к виду Фамилия И.О.
	function shortFIO($fullname) {
    	return preg_replace('#(.*)\s+(.).*\s+(.).*#usi', '$1 $2.$3.', $fullname);
	}

	/*Устанавливает в выпадающем списке построенном из одномерного массива значение из базы данных
	при условии что в массиве присутствуют 2 значения:
	ключ записывается в value=""
	наименование в <option></option>
	*/
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
	/*
	Устанавливает в выпадающем списке построенном из двумерногомассива значение из базы данных
	при условии что в массиве присутствуют 2 значения:
	ключ записывается в value=""
	наименование в <option></option>
	*/
	function selectOptionArr($array, $selected){
		$content = "";
		foreach ($array as $key => $value) {
			$keyArr = array_keys($value);
			if ($value[$keyArr["0"]] == $selected){
				$content .= '<option value="'.$value[$keyArr["0"]].'" selected>'.$value[$keyArr["1"]].'</option>';
			} else {
				$content .= '<option value="'.$value[$keyArr["0"]].'">'.$value[$keyArr["1"]].'</option>';
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

	//Если переменной не существует записываем в class="" значение visually-hidden
	function visuallyHidden($param){
		if (empty($param)) {
			echo "visually-hidden";
		}
	}
