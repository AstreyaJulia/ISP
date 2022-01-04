<?php
	namespace Api\Objects;
	use Core\Config\DB;

	class ProxyList {

		private $sudo;
		protected $db;

		// свойства объекта
		protected $id;
		protected $menuindex;
		protected $id_group;
		protected $href;
		protected $name_href;
		protected $proxy_href;


	    public function __construct(DB $db) {
	        $this->db = $db;
	        $this->sudo = $_GET["sudo"] ?? "";
	    }

	    //Добавляем ссылку
	    public function insertLink($params) {
	        $sql = "INSERT INTO `sdc_proxy_list` 
	        			(`menuindex`, `id_group`, `href`, `name_href`, `proxy_href`) 
	        		VALUES 
	        			(:menuindex, :id_group, :href, :name_href, :proxy_href)";

	        // выполняем запрос
	        if ($this->db->run($sql, $params)) {
	            return true;
	        }

	        return false;
	    }
	    
	    //Получаем записи категорий
	    public function getСategory() {
			$sql = "SELECT
						id,
						name_href
					FROM sdc_proxy_list
					WHERE id_group = 0
					ORDER BY menuindex + 0 ASC";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
	    }

	    //Получаем все записи
	    public function getProxyList() {
	    	$where = $this->sudo == 1 ? "" : "WHERE id != 6";
			$sql = "SELECT
						id,
						id_group AS parent_id,
						menuindex,
						name_href,
						href
					FROM sdc_proxy_list $where
					ORDER BY menuindex + 0 ASC";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
	    }

	    // Собираем список с ссылками
	    public function multipleChildren($parent_id = 0) {
	    	$children = [];
	    	foreach ($this->getProxyList() as $key => $value) {
	    		if  ($parent_id != $value["parent_id"]) {
	    			$children[$value["parent_id"]][] = $value;
	    		}
	    	}
		    return $children;
		}

		// Собираем список с группами
	    public function multipleFather($parent_id = 0) {
	    	$father = [];
	    	foreach ($this->getProxyList() as $key => $value) {
	    		if  ($parent_id == $value["parent_id"]) {
	    			unset ($value["href"]);
	    			$father[] = $value;
	    		}
	    	}
		    return $father;
		}
	}
