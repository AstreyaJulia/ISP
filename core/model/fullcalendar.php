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

	    //Получаем записи без гуппы blacklist
	    public function getSelectUser() {
	        $sql = "SELECT * FROM sdc_proxy_list WHERE id != 6";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
	    }

	    //Получаем записи без гуппы blacklist
	    public function getSelectGroup() {
	        $sql = "SELECT id, name_href FROM sdc_proxy_list WHERE id_group=0";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
	    }

	    //Получаем запись по ID
	    public function getSelectLink($id) {
	        $sql = "SELECT * FROM sdc_proxy_list WHERE `id` = ?";
	        return $this->db->run($sql, [$id])->fetchAll(\PDO::FETCH_CLASS);
	    }

	    //Вносим изменения в ссылку
	    public function setUpdateLink($params) {
	        $sql = "UPDATE sdc_proxy_list SET `menuindex`=:menuindex, `id_group`=:id_group, `href`=:href, `name_href`=:name_href, `proxy_href`=:proxy_href WHERE `id` = :id";
	        return $this->db->run($sql, $params);
	    }

	    //Добавляем ссылку
	    public function setInsertLink($params) {
	        $sql = "INSERT INTO `sdc_proxy_list` (`menuindex`, `id_group`, `href`, `name_href`, `proxy_href`) VALUES (:menuindex, :id_group, :href, :name_href, :proxy_href)";
	        return $this->db->run($sql, $params);
	    }




	}