<?php
	namespace Core\Model;
	//use Core\Config\DB;
	class Staff extends UserAttributes {

		//Получаем список сотрудников
	    public function getStaff() {
	        $sql = "SELECT
	        			sdc_user_attributes.fullname,
	        			DATE_FORMAT(sdc_user_attributes.dob, '%d.%m.%Y') AS dob,
	        			sdc_vocation.name AS profession,
	        			sdc_room.ip,
	        			sdc_room.jupiter_tab_num,
	        			sdc_users.username,
	        			sdc_users.sudo,
	        			sdc_users.active,
	        			sdc_users.id
	        		FROM sdc_users
					LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
					LEFT JOIN sdc_room ON sdc_room.id=sdc_user_attributes.room
					LEFT JOIN sdc_vocation ON sdc_vocation.id = sdc_user_attributes.profession
					WHERE sdc_users.id != 1";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
	    }

	    //Получаем действующих судей
	    public function getJudge() {
	    	$sql = "SELECT
	    				sdc_user_attributes.internalKey,
	    				sdc_user_attributes.fullname
	    			FROM sdc_users
					LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
					WHERE sdc_user_attributes.profession in(1,2,3) and sdc_users.active = 1";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
		}

	    //Массив статусов поля sudo
		public function getSudoArr() {
			return array (
				"0" => "Пользователь",
                "1" => "Админ");
		}

		//Массив статусов поля active
		public function getActiveArr() {
			return array (
				"0" => "Не активен",
                "1" => "Активен");
		}

	    // выводит статус пользователя (доступ разрешен - success; доступ запрещён - error)
	    public function getStatus ($active){
			if ($active == 1){
				return "bg-success";
			} else {
				return "bg-danger";
			}
		}

	    // выводит роль пользователя
	    public function getSudo ($sudo){
			if ($sudo == 1){
				return '<span class="badge-big bg-danger-lighter ms-2 text-danger">Админ</span>';
			}
		}

		// Количество активных, заблокированных пользователей
		public function getStaffCount() {
			$allUsers = $this->getStaff();
			 // Всего зарегистрированно пользователей
			if (!empty($allUsers)) {
				 $allUsers = count($this->getStaff());
				 $activeUsers = 0;
				 $disableUsers = 0;
				 foreach ($this->getStaff() as $key => $value) {
				 	if ($value->active == 1) {
				 		$activeUsers++;
				 	} else if ($value->active == 0) {
				 		$disableUsers++;
				 	} else {
				 		return "что-то пошло не так";
				 	}
				 }
				 $countUsers = [
				 	'allUsers' => $allUsers,
				 	'activeUsers' => $activeUsers,
				 	'activeUsersPercent' => round($activeUsers/$allUsers*100),
				 	'disableUsers' => $disableUsers,
				 	'disableUsersPercent' => round($disableUsers/$allUsers*100)
				 ];
				 return (object) $countUsers;
			} else {
				$countUsers = [
				 	'allUsers' => 0,
				 	'activeUsers' => 0,
				 	'activeUsersPercent' => 0,
				 	'disableUsers' => 0,
				 	'disableUsersPercent' => 0
				 ];
				 return (object) $countUsers;
			}
		}

	}
