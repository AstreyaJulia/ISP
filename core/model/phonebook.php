<?php
	namespace Core\Model;
	use Core\Config\DB;
	class Phonebook  {
		protected $db;

	    public function __construct(DB $db) {
	        $this->db = $db;
	    }
	    
	    public function getSelect($in) {
	    	$prepare = str_repeat('?,', count($in) - 1) . '?';
	        $sql = "SELECT fullname, position, profession, phone_worck, sdc_users.id, DATE_FORMAT(dob, '%d.%m.%Y') as dob FROM sdc_users
			LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
				LEFT JOIN sdc_room ON sdc_room.id=sdc_user_attributes.room WHERE sdc_users.active = 1 and sdc_user_attributes.profession != '' and sdc_users.primary_group in ($prepare)";
	        return $this->db->run($sql, $in)->fetchAll(\PDO::FETCH_CLASS);
	    }
		
		//Номера комнат для телефонного справочника
		public function getPositionPhonebook($position){
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
		public function getProfessionPhonebook($profession) {
			foreach (prof_array() as $key => $value) {
	            if ($key == $profession){
	               return $value;
	            }
	        }
		}

	}