<?php
	namespace Core\Model;
	use Core\Config\DB;
	class ProxyList {

		protected $db;

	    public function __construct(DB $db) {
	        $this->db = $db;
	    }


	    public function getInsertCURL($params, $host_api) {
	    	unset($params['editLink']);
		    $data = $params;
		    $data_string = json_encode ($data, JSON_UNESCAPED_UNICODE);
		    $curl = curl_init($host_api.'/api/proxylist/insertLink.php');
		    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
		    curl_setopt($curl, CURLOPT_POSTFIELDS, $data_string);
		    // Принимаем в виде массива. (false - в виде объекта)
		    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		    curl_setopt($curl, CURLOPT_HTTPHEADER, array(
		       'Content-Type: application/json',
		       'Content-Length: ' . strlen($data_string))
		    );
		    $result = curl_exec($curl);
		    curl_close($curl);
		    header("Location: /?page=proxylist");
		    $message = json_decode($result);
		    return $message->message;
	    }






/*
Старые записи.
До переезда на api.
*/
	    //Получаем все записи
	    public function getSelectAll() {
	        $sql = "SELECT * FROM sdc_proxy_list";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
	    }

	    //Получаем записи без гуппы blacklist
	    public function getSelectUser() {
	        $sql = "SELECT * FROM sdc_proxy_list WHERE id != 6";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
	    }

	    //Получаем все группы
	    public function getSelectGroup() {
	        $sql = "SELECT id, name_href FROM sdc_proxy_list WHERE id_group=0";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
	    }

	    //Получаем запись по ID
	    public function getSelectId($id) {
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

	    //Удаляем ссылку
	    public function setDelLink($params) {
	        $sql = "DELETE FROM `sdc_proxy_list` WHERE `id` = ?";
	        return $this->db->run($sql, $params);
	    }

	    //Вносим изменения в группу
	    public function setUpdateGroup($params) {
	        $sql = "UPDATE sdc_proxy_list SET `menuindex`=:menuindex, `name_href`=:name_href, `proxy_href`=:proxy_href WHERE `id` = :id";
	        return $this->db->run($sql, $params);
	    }

	    //Добавляем группу
	    public function setInsertGroup($params) {
	        $sql = "INSERT INTO `sdc_proxy_list` (`menuindex`, `name_href`, `proxy_href`) VALUES (:menuindex, :name_href, :proxy_href)";
	        return $this->db->run($sql, $params);
	    }

	    //Удаляем группу и все принадлежащие ей ссылки
	    public function setDelGroup($params) {
	        $sql = "DELETE FROM `sdc_proxy_list` WHERE `id` = :id or `id_group` = :id_group";
	        return $this->db->run($sql, $params);
	    }




	}