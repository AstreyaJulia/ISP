<?php
	namespace Core\Model;
	use Core\Config\DB;
  use PDO;

  class Visits {

  	protected DB $db;

    public function __construct(DB $db) {
        $this->db = $db;
    }

  // Записываем статистику посещения
	public function startVizits($server, $cookie) {
		// Собираем поля для статистики
		$uri = rawurldecode($server['REQUEST_URI']);
		$userId = $cookie['aut']['id'];
		$login = $cookie['aut']['login'];
		$ip = $server['REMOTE_ADDR'];
		$ref = rawurldecode($server['HTTP_REFERER'] ?? "Нет");
		$dtime = date('Y-m-d H:i:s');
		// Формируем строку
		$entry_line = "$dtime;$login;$ip;$uri;$ref;$userId".PHP_EOL;
		// Записываем в файл
		$fp = fopen("data/logs.csv", "a");
		fputs($fp, $entry_line);
		fclose($fp);
	}


  // Формируем массив из файла data/logs.csv для записи в б.д.
	public function arrVizits($file = "data/logs.csv") {
		if (($handle = fopen($file, "r")) !== FALSE) {
	    while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
	    	//Удаляем Username
	    	unset($data[1]);
	      $content[] = array_values($data);
	    }
	    fclose($handle);
		}
		//Получаем имена ключей
		$key = $content[0];
		//Отделяем ключи от значений
		unset($content[0]);
		$values = $content;
		//формируем ассоциативный массив 
		foreach ($values as $value) {
		    $array[] = array_combine($key, $value);
		}
		return $array;
	}
 
	// 
	public function insert($params, $tableName = 'sdc_visits') {
  	if (!empty($params)) {
      for ($i=0; $i < count($params); $i++) {
        if ($i == 0) {
          $key = "(`".array_keys($params)[$i]."`, ";
        }
        if ( $i !== 0 and count($params)-1 > $i) {
          $key .= "`".array_keys($params)[$i]."`, ";
        }
        if (count($params)-1 == $i) {
          $key .= "`".array_keys($params)[$i]."`)";
        }
      }
      return $sql = "INSERT INTO `$tableName` $key VALUES (?,?,?,?,?)";
    }

    //return $this->db->run($sql, $params);
  }





}