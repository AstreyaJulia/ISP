<?php
	$title = "FAQ";
	$content = "";
	$dir = scandir("components/faq/");
	foreach($dir as $value) {
		if (strpos($value, ".") !== 0 and strpos($value, "img") !== 0) {
			//разбиваем строку по нижнему подчеркиванию
			$keywords = preg_split("/[_]+/", $value);
			//$keywords["0"] для сортировки
			$itemmenu = replaceBash($keywords["1"]);//$keywords["1"] Наименование пункта меню.
			//проверяем существование описания (иначе при отсутсвии выдает ошибки)
			if (isset($keywords["2"])) {
				$description = replaceBash($keywords["2"]);//$keywords["2"] описание
				$content .= "</br><a class=\"\" href=\"?faq=$value\">$itemmenu</a><p>$description</p>";
			} else {
				$content .= "</br><a class=\"\" href=\"?faq=$value\">$itemmenu</a>";
			}
		}
	}

//меняет '-' на ' '
	function replaceBash($string) {
		if (isset($string)) {
			return str_replace("-", " ", $string);
		} else {
			echo "false";
		}
	}
