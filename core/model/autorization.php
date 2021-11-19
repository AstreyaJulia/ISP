<?php
	namespace Core\Model;
	use Core\Config\DB;
	use PDO;
	class Autorization
	{

		protected $db;

	    public function __construct(DB $db) {
	        $this->db = $db;
	    }
	    
	    // Получаем пароль активного пользователя
	    public function getPassword($login) {
	    	$sql = "SELECT
                      sdc_users.password
                    FROM sdc_users 
                    WHERE `username` = ? AND `active` = 1";
	    	return $this->db->run($sql,[$login])->fetch(PDO::FETCH_LAZY);
	    }

	    // Получаем не зарегистрированного пользователя
	    public function getUserActive($login) {
	    	$sql = "SELECT
                      sdc_users.username
                    FROM sdc_users
                    WHERE `username` = ? AND password = '' AND `active` = 1";
	    	return $this->db->run($sql,[$login])->fetch(PDO::FETCH_LAZY);
	    }

	    // Получаем свойства активного пользователя
	    protected function getUserAttributes($login) {
	    	$sql = "SELECT
	                	sdc_user_attributes.fullname,
	                	sdc_users.id,
	                	sdc_users.username,
	                	sdc_users.sudo,
	                	sdc_users.active,
	                	sdc_vocation.parent_id AS primary_group
		            FROM sdc_users
		            LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
		            LEFT JOIN sdc_vocation ON sdc_vocation.id = sdc_user_attributes.profession
		            WHERE sdc_users.username = ?";
	    	return $this->db->run($sql,[$login])->fetch(PDO::FETCH_LAZY);
	    }

	    // Запишем куку из метода getUserAttributes()
	    public function setCookie($login) {
	    	setcookie("aut[id]", $this->getUserAttributes($login)->id, time() + 3600 * 24 * 30);
		    setcookie("aut[login]", $this->getUserAttributes($login)->username, time() + 3600 * 24 * 30);
		    setcookie("aut[fullname]", $this->getUserAttributes($login)->fullname, time() + 3600 * 24 * 30);
		    setcookie("aut[active]", $this->getUserAttributes($login)->active, time() + 3600 * 24 * 30);
		    setcookie("aut[primary_group]", $this->getUserAttributes($login)->primary_group, time() + 3600 * 24 * 30);
		    setcookie("aut[sudo]", $this->getUserAttributes($login)->sudo, time() + 3600 * 24 * 30);
		    //переходим на главную страницу
		    header("refresh:1;url=/");
	    }

	    // Запишем пароль пользователя
	    public function setUserPassword($params) {
	    	$sql = "UPDATE
	    				sdc_users
	    			SET `password`=:password
	    			WHERE `username` = :login";
	    	return $this->db->run($sql, $params);
	    }


	}