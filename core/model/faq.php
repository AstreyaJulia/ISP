<?php
	namespace Core\Model;

  class FAQ {

  	public function getCategory($dir) {
  		$dir = scandir($dir);
		foreach($dir as $value) {
		  if (strpos($value, ".") !== 0 and strpos($value, "index") !== 0 and strpos($value, "tpl.faq") !== 0) {
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

  	// Меняем "-" на  " "
  	public function replaceBash($string) {
	  if (isset($string)) {
	    return str_replace("-", " ", $string);
	  } else {
	    return "false";
	  }
	}

  }