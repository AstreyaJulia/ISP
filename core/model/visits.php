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
		$userId = $cookie['aut']['id'] ?? "";
		$login = $cookie['aut']['login'] ?? "pest";
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
	// Очищаем файл статистики
	public function clearLogs($file) {
		$entry_line = "dtime;Username;REMOTE_ADDR;REQUEST_URI;HTTP_REFERER;UserID".PHP_EOL;
		$fp = fopen($file, "w");
		    fputs($fp, $entry_line);
		fclose($fp);
	}


  // Формируем массив из файла data/logs.csv для записи в б.д.
	public function arrVizits($file) {
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
 
	// Записываем значения из массива в базу
	public function insert($params, $tableName = 'sdc_visits') {
  	foreach ($params as $value) {
	    $key = implode(",", array_keys($value));
	    $values_str  = str_repeat('?,', count($value) - 1) . '?';
	    $values[] = array_values($value);
		}
    $sql = "INSERT INTO `$tableName` ($key) VALUES ($values_str)";
    return $this->db->insertMultiple($sql, $values);
  }

}