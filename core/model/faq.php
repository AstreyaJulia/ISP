<?php
	namespace Core\Model;

  class FAQ {

  	// Получаем наименование секции из массива $_GET
  	public function getItem ($array) {
  		return $this->replaceBash(preg_split("/[_]+/", array_keys($array)['1'])["1"]);
  	}

  	public function getCategory($dir) {
  		$dir = scandir($dir);
		foreach($dir as $value) {
		  if (strpos($value, ".") !== 0 and strpos($value, "tpl.faq") !== 0) {
		    //разбиваем строку по нижнему подчеркиванию
		    $keywords = preg_split("/[_]+/", $value);
		    //$keywords["0"] для сортировки
		    $itemmenu = $this->replaceBash($keywords["1"]);//$keywords["1"] Наименование пункта меню.
		    //проверяем существование описания (иначе при отсутсвии выдает ошибки)
		    $description = !empty($keywords["2"]) ? $this->replaceBash($keywords["2"]) : "";// описание
		    // собираем массив для построения списка категорий
		    $category[] = [
		      'link' => $value,
		      'itemmenu' => $itemmenu,
		      'description' => $description,
		    ];
		  }
		}
		return $category;
		/*var_dump($category);
		die();*/
  	}

  	//Получаем список секций на остнове $_GET
  	public function getSection($arr) {

  		$path = "components/faq/".array_keys($arr)['1']."/";

  		foreach (scandir($path) as $key => $value) {
		  //исключаем из показа системные папки
		  if (strpos($value, ".") !== 0) {
		    //разбиваем строку по нижнему подчеркиванию
		    $keywords = preg_split("/[_]+/", $value);
		    //$keywords["0"] для сортировки
		    $itemmenu = $this->replaceBash($keywords["1"]);//$keywords["1"] Наименование пункта меню.
		    //проверяем существование описания (иначе при отсутсвии выдает ошибки)
		    $description = !empty($keywords["2"]) ? $this->replaceBash($keywords["2"]) : "";

		    //Форимруем имя и путь к файлу
		    foreach (scandir("$path$value") as $key_2 => $value_2) {
		      if (strpos($value_2, ".") !== 0) {
		        //разбиваем строку по нижнему подчеркиванию
		        $keywords_2 = preg_split("/[_]+/", $value_2);
		        //$keywords["0"] для сортировки
		        $itemmenu_2 = $this->replaceBash($keywords_2["1"]);//$keywords_2["1"] Наименование файла.
		        //проверяем существование описания (иначе при отсутсвии выдает ошибки)
			    $description_2 = !empty($keywords_2["2"]) ? $this->replaceBash($keywords_2["2"]) : "";//$keywords_2["2"] описание файла
		        $arrSection[$key][] = [
			      	'itemmenu_2' => $itemmenu_2,
			      	'description_2' => $description_2
			    ];
			  }
			}
			$arrCategory[$key] = [
		      	'itemmenu' => $itemmenu,
		      	'description' => $description,
		      	'section' => $arrSection
		    
		    ];
			return $arrCategory;
		}

  	}
  }


  	// Меняем "-" на  " "
  	public function replaceBash($string) {
	  if (isset($string)) {
	    return str_replace("-", " ", $string);
	  } else {
	    return "false";
	  }
	}

  }
