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

	    //Добавляем событие
	    public function setInsertEvents($params) {
	        $sql = "INSERT INTO `sdc_calendar` (`title`, `start`, `end`, `calendar`, `description`, `url`, `user_id`, `allDay`)
VALUES (:title, :start, :end, :calendar, :description, :url, :user_id, :allDay)";
	        return $this->db->run($sql, $params);
	    }




	}