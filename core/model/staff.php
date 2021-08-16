<?php
	namespace Core\Model;
	//use Core\Config\DB;
	class Staff extends User {
		//Получаем список сотрудников
	    public function getStaff() {
	        $sql = "SELECT sdc_user_attributes.fullname, sdc_user_attributes.dob, sdc_user_attributes.profession, sdc_room.ip, sdc_room.jupiter_tab_num, sdc_users.username, sdc_users.sudo, sdc_users.active, sdc_users.id, DATE_FORMAT(dob, '%d.%m.%Y') as dob FROM sdc_users
			LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
				LEFT JOIN sdc_room ON sdc_room.id=sdc_user_attributes.room";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
	    }

	    //Получаем действующих судей
	    public function getJudge() {
	    	$sql = "SELECT sdc_user_attributes.internalKey , sdc_user_attributes.fullname FROM sdc_users
						LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
							WHERE sdc_user_attributes.profession in(1,2,3) and sdc_users.active = 1";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
		}

	    //Получаем запись по ID
	    public function getSelectId($id) {
	        $sql = "SELECT *, sdc_users.id FROM sdc_users
				      LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
				        LEFT JOIN sdc_room ON sdc_room.id=sdc_user_attributes.room WHERE sdc_users.id = ?";
	        return $this->db->run($sql, $id)->fetchAll(\PDO::FETCH_CLASS);
	    }

	    //Вносим изменения в таблицу sdc_users
	    public function setUpdateUser($params) {
	    	unset($params[':internalKey'],$params[':fullname'],$params[':gender'],$params[':dob'],$params[':email'],
	    		  $params[':mobilephone'],$params[':zip'],$params[':state'],$params[':city'],$params[':address'],$params[':photo'],
	    		  $params[':comment'],$params[':website'],$params[':profession'],$params[':affiliation'],$params[':room']);
	        $sql = "UPDATE sdc_users SET `username`=:username, `active`=:active, `primary_group`=:primary_group, `sudo`=:sudo WHERE `id` = :id";
	        return $this->db->run($sql, $params);
	    }

	    //Вносим изменения в таблицу sdc_user_attributes
	    public function setUpdateUserAtr($params) {
	    	
		    unset($params[':id'],$params[':username'],$params[':active'],$params[':primary_group'],$params[':sudo']);
		    

	        $sql = "UPDATE sdc_user_attributes SET `fullname`=:fullname, `gender`=:gender, `dob`=:dob, `email`=:email, `mobilephone`=:mobilephone, `zip`=:zip, `state`=:state, `city`=:city, `address`=:address, `photo`=:photo, `comment`=:comment, `website`=:website, `profession`=:profession, `affiliation`=:affiliation, `room`=:room WHERE `internalKey` = :internalKey";
	        return $this->db->run($sql, $params);
	    }

	    //Добавляем запись в таблицу sdc_users
	    public function setInsertUser($params) {
	        $sql = "INSERT INTO `sdc_users` (`username`, `active`, `primary_group`, `sudo`) VALUES (:username, :active, :primary_group, :sudo)";
	        return $this->db->run($sql, $params);
	    }

	    //Добавляем запись в таблицу sdc_user_attributes
	    public function setInsertUserAtr($params) {
	        $sql = "INSERT INTO `sdc_user_attributes` (`internalKey`, `fullname`, `gender`, `dob`, `email`, `mobilephone`, `zip`, `state`, `city`, `address`, `photo`, `comment`, `website`, `profession`, `affiliation`, `room`) VALUES (:internalKey, :fullname, :gender, :dob, :email, :mobilephone, :zip, :state, :city, :address, :photo, :comment, :website, :profession, :affiliation, :room)";
	        return $this->db->run($sql, $params);
	    }

	}