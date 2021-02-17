<?php
	$get = $_GET;
	$title = "FAQ по Картотеке";
	$content = '<div class="row"><div class="col-4">';
	$path = "components/faq/{$get['faq']}/";
	$dir = scandir($path);
	foreach($dir as $value) {
		//исключаем из показа системные папки и файл index.php
		if (strpos($value, ".") !== 0 and strpos($value, "index") !== 0) {
			//подсчитываем количество файлов в папке
			$count = count(scandir("$path$value")) - 2;
			//разбиваем строку по нижнему подчеркиванию
			$keywords = preg_split("/[_]+/", $value);
			//$keywords["0"] для сортировки  
			$itemmenu = replaceBash($keywords["1"]);//$keywords["1"] Наименование пункта меню.
			//проверяем существование описания (иначе при отсутсвии выдает ошибки)
			if (isset($keywords["2"])) {
				$description = replaceBash($keywords["2"]);//$keywords["2"] описание
				$content .= "<p>$itemmenu <sup>$count</sup></p><p>$description</p>";
			} else {
				$content .= "<p>$itemmenu <sup>$count</sup></p>";
			}
			//Форимруем имя и путь к файлу
			foreach(scandir("$path$value") as $value_2) {
				if (strpos($value_2, ".") !== 0) {
					//разбиваем строку по нижнему подчеркиванию
					$keywords_2 = preg_split("/[_]+/", $value_2);
					//$keywords["0"] для сортировки  
					$itemmenu_2 = replaceBash($keywords_2["1"]);//$keywords_2["1"] Наименование файла.
					//проверяем существование описания (иначе при отсутсвии выдает ошибки)
					if (isset($keywords_2["2"])) {
						$description_2 = replaceBash($keywords_2["2"]);//$keywords_2["2"] описание файла
						$content .= "<a href=\"javascript:void(0);\" onclick=\"showContent('components/faq/{$get['faq']}/$value/$value_2')\">$itemmenu_2</a><p>$description_2</p>";
					} else {
						$content .= "<a href=\"javascript:void(0);\" onclick=\"showContent('components/faq/{$get['faq']}/$value/$value_2')\">$itemmenu_2</a></br>";
					}
				}
			}
		}
	}
	$content .= '</div>
	<div class="col-8">
		<div id="contentBody"></div>
		<div id="loading" style="display: none">Идет загрузка...</div>
	</div>
</div>';

//меняет '-' на ' '
function replaceBash($string) {
		if (isset($string)) {
			return str_replace("-", " ", $string);
		} else {
			echo "false";
		}
		
	}