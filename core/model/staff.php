<?php
	namespace Core\Model;
	//use Core\Config\DB;
	class Staff extends UserAttributes {

		//Получаем список сотрудников
	    public function getStaff() {
	        $sql = "SELECT sdc_user_attributes.fullname, sdc_user_attributes.dob, sdc_user_attributes.profession, sdc_room.ip, sdc_room.jupiter_tab_num, sdc_users.username, sdc_users.sudo, sdc_users.active, sdc_users.id, DATE_FORMAT(dob, '%d.%m.%Y') as dob FROM sdc_users
			LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
				LEFT JOIN sdc_room ON sdc_room.id=sdc_user_attributes.room WHERE sdc_users.id != 1";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
	    }

	    //Получаем действующих судей
	    public function getJudge() {
	    	$sql = "SELECT sdc_user_attributes.internalKey , sdc_user_attributes.fullname FROM sdc_users
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
				"0" => "доступ запрещён",
                "1" => "доступ разрешён");
		}

	    // выводит статус пользователя (доступ разрешен - success; доступ запрещён - error)
	    public function getStatus ($active){
			if ($active == 1){
				return "success";
			} else {
				return "error";
			}
		}

	    // выводит роль пользователя
	    public function getSudo ($sudo){
			if ($sudo == 1){
				return '<span class="badge-big secondary">Админ</span>';
			}
		}

		// Количество активных, заблокированных пользователей
		public function getStaffCount() {
			 // Всего зарегистрированно пользователей
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
       if ($allUsers === 0) {
         $allUsers = 0.1;
       }
			 $countUsers = [
			 	'allUsers' => $allUsers,
			 	'activeUsers' => $activeUsers,
			 	'activeUsersPercent' => round($activeUsers/$allUsers*100),
			 	'disableUsers' => $disableUsers,
			 	'disableUsersPercent' => round($disableUsers/$allUsers*100),
			 ];
			 return (object) $countUsers;
		}

	}
