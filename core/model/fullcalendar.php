<?php
	namespace Core\Model;
	use Core\Config\DB;
  use PDO;

  class Fullcalendar {

    protected DB $db;

	    public function __construct(DB $db) {
	        $this->db = $db;
	    }

	    //Получаем все записи
	    public function getEvents($params, $calendars) {
	    	if (is_array($calendars)) {
					//Подготавливаем массив для оператора IN SQL
          $i=0;
          $in='';
					foreach ($calendars as $item)
					{
					    $key = ":id".$i++;
					    $in .= "$key,";
					    $paramsCalendars[$key] = $item; // collecting values into key-value array
					}
					$inCalendars = rtrim($in,","); // удаляем запятую в конце строки, получаем :id0,:id1,:id2 и тд.
					$params = array_merge($params, $paramsCalendars);
				} else {
					$inCalendars = 'null';
				}
				if ($params['private'] != 0) {
					$params = array_replace($params, ['private' => null]);
				}


/*
 select * from sdc_calendar
    where
        (((`freq` IS NOT NULL) or (`freq` IS NULL and start >= :start AND end <= :end)) AND
            calendar in($inCalendars)) AND
          IF (:private = 0, ((private = 0 and user_id IS NOT NULL) OR (private = 1 and user_id = :user)), (private = 1 and user_id = :user))
 */
         /*$sql = "SELECT * from sdc_calendar
    where
        (((`freq` IS NOT NULL) or (`freq` IS NULL and start >= :start AND end <= :end)) AND
            calendar in($inCalendars)) AND
          IF (:private = 0, ((private = 0 and user_id IS NOT NULL) OR (private = 1 and user_id = :user)), (private = 1 and user_id = :user))";*/
        $sql = "SELECT * FROM sdc_calendar where (`private` in (:private) or `user_id` = :user) and `calendar` in ($inCalendars) and (`freq` IS NOT NULL or (`freq` IS NULL and `start` >= :start AND `end` <= :end))";
        return $this->db->run($sql, $params)->fetchAll(PDO::FETCH_ASSOC);
	    }

	    //Получаем дни рождения
	    public function getBirthday($startParam, $endParam) {
	        $sql = "SELECT fullname, dob FROM `sdc_user_attributes`
						WHERE room IS NOT NULL and
						 (
						(date_format('$startParam','%m-%d') < date_format('$endParam','%m-%d'))
						 AND
						(date_format(dob,'%m-%d') between date_format('$startParam','%m-%d') AND date_format('$endParam','%m-%d'))
						)
						OR
						(

						 (date_format('$startParam','%m-%d') > date_format('$endParam','%m-%d'))
						  AND
						   (
						       (date_format(dob,'%m-%d') between date_format('$startParam','%m-%d') AND date_format('2021-12-31','%m-%d'))
						OR
						       (date_format(dob,'%m-%d') between date_format('2021-01-01','%m-%d') AND date_format('$endParam','%m-%d'))
						   )
						    )";
	        return $this->db->run($sql)->fetchAll(PDO::FETCH_CLASS);
	    }

	    //Добавляем событие из $_POST
	    public function setInsertEvents($params, $tableName = 'sdc_calendar') {
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

	    //Вносим изменения в событие

	    public function setUpdateEvents($params, $tableName = 'sdc_calendar', $index = 'id') {
	       if (!empty($params)) {
			    $keys = "";
			    $i = 1;
			    foreach ($params as $key => $value ) {
			      if ($index !== $key and count($params) !== $i) {
			        $keys .= "`".$key."`=:".$key.", ";
			      }
			      if ($index !== $key and count($params) == $i) {
			        $keys .= "`".$key."`=:".$key;
			      }
			      if ($index == $key ) {
			        $where = "`".$key."` = :".$key;
			      }
			      $i++;
			    }

		      $sql = "UPDATE `$tableName` SET $keys WHERE $where";
		    }
		    return $this->db->run($sql, $params);
	    }

	    //Удаляем событие
	    public function setDelEvents($params) {
	        $sql = "DELETE FROM `sdc_calendar` WHERE `id` = ?";
	        return $this->db->run($sql, $params);
	    }
	}
