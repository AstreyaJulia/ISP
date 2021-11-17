<?php
	namespace Core\Model;
	//use Core\Config\DB;
	class UserAttributes extends User {

		//Получаем запись по ID
	    public function getSelectId($id) {
	        $sql = "SELECT
    					Users.id,
    					Users.username,
    					Users.active,
    					Users.sudo,
    					UserAttributes.internalKey,
    					UserAttributes.fullname,
    					UserAttributes.gender,
    					UserAttributes.dob,
    					UserAttributes.email,
    					UserAttributes.mobilephone,
    					UserAttributes.zip,
    					UserAttributes.state,
    					UserAttributes.city,
    					UserAttributes.address,
    					UserAttributes.comment,
    					UserAttributes.website,
    					UserAttributes.profession,
    					UserAttributes.affiliation,
    					UserAttributes.room,
    					CONCAT (ParentUserType.name, ' / ', ChildUserType.name) AS workplace
			        FROM `sdc_users` AS Users
			        LEFT JOIN `sdc_user_attributes` AS UserAttributes on Users.id = UserAttributes.internalKey
			        LEFT JOIN `sdc_room` AS ChildUserType ON UserAttributes.room = ChildUserType.id
			        LEFT JOIN `sdc_room` AS ParentUserType ON ChildUserType.affiliation = ParentUserType.id
			        WHERE Users.id = ?";
	        return $this->db->run($sql, $id)->fetchAll(\PDO::FETCH_CLASS);
	    }

	    //Получаем профессию из кодового значения
		public function getVocation() {
			$sql = "SELECT  `id`, `name`FROM `sdc_vocation` WHERE `parent_id` IS NOT NULL";
			return $this->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
		}

		// Получаем дни рождения, возраст сегодня
	    public function getBirthday() {
	        $sql = "SELECT
	        			sdc_user_attributes.fullname,
	        			(YEAR(CURRENT_DATE()) - YEAR(sdc_user_attributes.dob)) AS age
	        		FROM sdc_users
            		LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
				    WHERE 
				    	sdc_users.active = 1 AND sdc_user_attributes.profession != '' AND
				    	DAY(CURRENT_DATE()) = DAY(sdc_user_attributes.dob) AND
				    	MONTH(CURRENT_DATE()) = MONTH(sdc_user_attributes.dob)";
			return $this->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
	    }

	    //Удаляем пароль
	    public function setDropPass($params) {
	        $sql = "UPDATE sdc_users SET `password`='' WHERE `id` = ?";
	        return $this->db->run($sql, $params);
	    }

	    //Вносим изменения в таблицу sdc_users
	    public function setUpdateUser($params) {
	    	$params = [
				'id' => $params['id'],
				'username' => $params['username'],
				'active' => $params['active'],
				'sudo' => $params['sudo']
	    	];
	        $sql = "UPDATE sdc_users SET `username`=:username, `active`=:active, `sudo`=:sudo WHERE `id` = :id";
	        return $this->db->run($sql, $params);
	    }


/*--------------------------------------------------
Сделать универсальный запрос с ключами из $params
*/
	    //Вносим изменения в таблицу sdc_user_attributes из профиля пользователя
	    public function setUpdUserAtr($params) {
	        $sql = "UPDATE sdc_user_attributes SET `fullname`=:fullname, `email`=:email, `mobilephone`=:mobilephone, `dob`=:dob, `gender`=:gender, `state`=:state, `city`=:city, `address`=:address, `zip`=:zip, `website`=:website WHERE `internalKey`=:internalKey";
	        return $this->db->run($sql, $params);
	    }
	    //Вносим изменения в таблицу sdc_user_attributes
	    public function setUpdateUserAtr($params) {
	    	
		    unset($params['id'],$params['username'],$params['active'],$params['sudo']);
		    

	        $sql = "UPDATE sdc_user_attributes SET `fullname`=:fullname, `gender`=:gender, `dob`=:dob, `email`=:email, `mobilephone`=:mobilephone, `zip`=:zip, `state`=:state, `city`=:city, `address`=:address, `comment`=:comment, `website`=:website, `profession`=:profession, `affiliation`=:affiliation, `room`=:room WHERE `internalKey` = :internalKey";
	        return $this->db->run($sql, $params);
	    }
/*--------------------------------------------------
*/
	    //Добавляем запись в таблицу sdc_users
	    public function setInsertUser($params) {
	        $sql = "INSERT INTO `sdc_users` (`username`, `active`, `sudo`) VALUES (:username, :active, :sudo)";
	        return $this->db->run($sql, $params);
	    }

	    //Добавляем запись в таблицу sdc_user_attributes
	    public function setInsertUserAtr($params) {
	        $sql = "INSERT INTO `sdc_user_attributes` (`internalKey`, `fullname`, `gender`, `dob`, `email`, `mobilephone`, `zip`, `state`, `city`, `address`, `comment`, `website`, `profession`, `affiliation`, `room`) VALUES (:internalKey, :fullname, :gender, :dob, :email, :mobilephone, :zip, :state, :city, :address, :comment, :website, :profession, :affiliation, :room)";
	        return $this->db->run($sql, $params);
	    }


	    //приводит Фамилию Имя Отчество к виду Фамилия И.О.
	    public function getShortFIO($fullname) {
        	return preg_replace('#(.*)\s+(.).*\s+(.).*#usi', '$1 $2.$3.', $fullname);
		}

		//Получаем профессию из кодового значения с помощью справочника prof_array()
		public function getProfession($profession) {
			foreach (prof_array() as $key => $value) {
	            if ($key == $profession){
	               return $value;
	            }
	        }
		}
	}
