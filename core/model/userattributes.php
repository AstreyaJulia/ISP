<?php
	namespace Core\Model;
	//use Core\Config\DB;
	class UserAttributes extends User {

		//Получаем запись по ID
	    public function getSelectId($id) {
	        $sql = "SELECT *, Users.id, CONCAT (ParentUserType.name, ' ' , ChildUserType.name) AS name
					FROM `sdc_room` AS ChildUserType
					         LEFT JOIN `sdc_room` AS ParentUserType ON ChildUserType.affiliation = ParentUserType.id
					         LEFT JOIN `sdc_user_attributes` AS UserAttributes on ChildUserType.id = UserAttributes.room
					         LEFT JOIN `sdc_users` AS Users ON UserAttributes.internalKey=Users.id
					WHERE Users.id = ?";
	        return $this->db->run($sql, $id)->fetchAll(\PDO::FETCH_CLASS);
	    }

		// Получаем дни рождения, возраст сегодня
	    public function getBirthday() {
	        $sql = "SELECT sdc_user_attributes.fullname, (YEAR(CURRENT_DATE()) - YEAR(sdc_user_attributes.dob)) AS age FROM sdc_users
            LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
				    WHERE sdc_users.active = 1 and sdc_user_attributes.profession != '' and DAY(CURRENT_DATE()) = DAY(sdc_user_attributes.dob) and MONTH(CURRENT_DATE()) = MONTH(sdc_user_attributes.dob)";
			return $this->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
	    }

	    //Удаляем пароль
	    public function setDropPass($params) {
	        $sql = "UPDATE sdc_users SET `password`='' WHERE `id` = ?";
	        return $this->db->run($sql, $params);
	    }

	    //Вносим изменения в таблицу sdc_users
	    public function setUpdateUser($params) {
	    	unset($params[':internalKey'],$params[':fullname'],$params[':gender'],$params[':dob'],$params[':email'],
	    		  $params[':mobilephone'],$params[':zip'],$params[':state'],$params[':city'],$params[':address'],
	    		  $params[':comment'],$params[':website'],$params[':profession'],$params[':affiliation'],$params[':room']);
	        $sql = "UPDATE sdc_users SET `username`=:username, `active`=:active, `primary_group`=:primary_group, `sudo`=:sudo WHERE `id` = :id";
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
	    	
		    unset($params[':id'],$params[':username'],$params[':active'],$params[':primary_group'],$params[':sudo']);
		    

	        $sql = "UPDATE sdc_user_attributes SET `fullname`=:fullname, `gender`=:gender, `dob`=:dob, `email`=:email, `mobilephone`=:mobilephone, `zip`=:zip, `state`=:state, `city`=:city, `address`=:address, `comment`=:comment, `website`=:website, `profession`=:profession, `affiliation`=:affiliation, `room`=:room WHERE `internalKey` = :internalKey";
	        return $this->db->run($sql, $params);
	    }
/*--------------------------------------------------
*/
	    //Добавляем запись в таблицу sdc_users
	    public function setInsertUser($params) {
	        $sql = "INSERT INTO `sdc_users` (`username`, `active`, `primary_group`, `sudo`) VALUES (:username, :active, :primary_group, :sudo)";
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
