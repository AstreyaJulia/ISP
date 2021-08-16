<?php
	namespace Core\Model;
	use Core\Config\DB;
	class User
	{
		/*public $id; // id AUTO_INCREMENT
		public $username; // varchar(100)
		public $password; // varchar(255)
		public $active; // принимает значения 1 либо 0
		public $primary_group; // справочник prof_array
		public $sudo; // принимает значения 1 либо 0
		public $internalKey;
		public $fullname;
		public $gender;
		public $dob;
		public $email;
		public $mobilephone;
		public $zip;
		public $state;
		public $city;
		public $address;
		public $photo;
		public $comment;
		public $website;
		public $profession;
		public $affiliation;
		public $room;
		public $jupiter_tab_num;
		public $ip;
		public $position;
		public $alarm_button;
		public $phone_worck;
		public $building_number;
		//public $new_dob;
		public function __set($name, $value) {
			$this->$property = $value; // устанавливаем значение
		}*/

		protected $db;

	    public function __construct(DB $db) {
	        $this->db = $db;
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

	    //Выводит дни рождения сегодня
	    public function getBirthday() {
	        $sql = "SELECT sdc_user_attributes.fullname, DATE_FORMAT(dob, '%d.%m.%Y') as dob FROM sdc_users
            LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
                LEFT JOIN sdc_room ON sdc_room.id=sdc_user_attributes.room
    WHERE sdc_users.active = 1 and sdc_user_attributes.profession != '' and DAY(CURRENT_DATE()) = DAY(sdc_user_attributes.dob) and MONTH(CURRENT_DATE()) = MONTH(sdc_user_attributes.dob)";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
	    }

	    //приводит Фамилию Имя Отчество к виду Фамилия И.О.
	    public function getShortFIO($fullname) {
        	return preg_replace('#(.*)\s+(.).*\s+(.).*#usi', '$1 $2.$3.', $fullname);
		}

		//Номера комнат сокращённо
		public function getPosition($position){
			//Получаем номер комнаты
			$num_room = mb_substr($position, 1, strpos($position, '_') -2);
			//Кабинеты
			if (mb_substr($position, - strlen($position), 1) == "к") {
				return "Каб.$num_room";
			}
			//Проход в кабинеты
			if (mb_substr($position, - strlen($position), 1) == "п") {
				return "Каб.$num_room";
			}
			//Серверная
			if (mb_substr($position, - strlen($position), 2) == "се") {
				return "Серверная";
			}
			//Совещательные комнаты
			if (mb_substr($position, - strlen($position), 1) == "с") {
				return "Сов. ком.$num_room";
			}
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