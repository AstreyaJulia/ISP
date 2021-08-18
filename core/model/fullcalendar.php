<?php
	namespace Core\Model;
	use Core\Config\DB;
	class Fullcalendar {

		protected $db;

	    public function __construct(DB $db) {
	        $this->db = $db;
	    }

	    //Получаем все записи
	    public function getEvents($params) {
	        $sql = "SELECT * FROM sdc_calendar where user_id in (0, :user) and start >= :start AND end <= :end";
	        return $this->db->run($sql, $params)->fetchAll(\PDO::FETCH_ASSOC);
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
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
	    }

	    //Добавляем событие
	    public function setInsertEvents($params) {
	        $sql = "INSERT INTO `sdc_calendar` (`title`, `start`, `end`, `calendar`, `description`, `url`, `user_id`, `allDay`)
VALUES (:title, :start, :end, :calendar, :description, :url, :user_id, :allDay)";
	        return $this->db->run($sql, $params);
	    }

	    //Вносим изменения в событие
	    public function setUpdateEvents($params) {
	        $sql = "UPDATE sdc_calendar SET `title`=:title, `start`=:start, `end`=:end, `calendar`=:calendar, `description`=:description, `url`=:url, `user_id`=:user_id, `allDay`=:allDay WHERE `id` = :id";
	        return $this->db->run($sql, $params);
	    }

	    //Удаляем событие
	    public function setDelEvents($params) {
	        $sql = "DELETE FROM `sdc_calendar` WHERE `id` = ?";
	        return $this->db->run($sql, $params);
	    }
	}