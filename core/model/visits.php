<?php
	namespace Core\Model;
	use Core\Config\DB;
  use PDO;

  class Visits {

  	protected DB $db;

    public function __construct(DB $db) {
        $this->db = $db;
    }

    // Выполнение запроса на до
	public function insert($params, $tableName = 'sdc_calendar') {
		if (!empty($params)) {
		  for ($i=0; $i < count($params); $i++) {
		    if ($i == 0) {
		      $key = "(`".array_keys($params)[$i]."`, ";
		      $value = "(:".array_keys($params)[$i].", ";
		    }
		    if ( $i !== 0 and count($params)-1 > $i) {
		      $key .= "`".array_keys($params)[$i]."`, ";
		      $value .= ":".array_keys($params)[$i].", ";
		    }
		    if (count($params)-1 == $i) {
		      $key .= "`".array_keys($params)[$i]."`)";
		      $value .= ":".array_keys($params)[$i].")";
		    }
		  }
		  $sql = "INSERT INTO `$tableName` $key VALUES $value";
		}
	return $this->db->run($sql, $params);
	}
  






}