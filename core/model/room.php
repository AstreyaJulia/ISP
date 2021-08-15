<?php
	namespace Core\Model;
	use Core\Config\DB;
	class Room  {
		protected $db;

	    public function __construct(DB $db) {
	        $this->db = $db;
	    }

		public function getFreeRoom(){
			$sql = "SELECT sdc_room.id, sdc_room.position FROM sdc_room
						LEFT JOIN sdc_user_attributes ON sdc_user_attributes.room=sdc_room.id
							WHERE sdc_user_attributes.room IS NULL ORDER BY sdc_room.position ASC";
	        $FreeRoom = $this->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
	        $content = "";
			foreach ($FreeRoom as $key => $value) {
				$keyArr = array_keys($value);
				$content .= '<option value="'.$value[$keyArr["0"]].'">'.$this->getPosition($value[$keyArr["1"]]).'</option>';
			}
			return $content;
		}



		//Номера комнат подробно
		public function getPosition($position) {
			//Получаем номер комнаты
			$num_room = mb_substr($position, 1, strpos($position, '_') -2);
			//Получаем номер рабочего места
			$num_position = mb_substr($position, strpos($position, '_') , strlen($position));
			//Кабинеты
			if (mb_substr($position, - strlen($position), 1) == "к") {
				return "Кабинет № $num_room место $num_position";
			}
			//Проход в кабинеты
			if (mb_substr($position, - strlen($position), 1) == "п") {
				return "Проход в кабинет № $num_room место $num_position";
			}
			//Залы судебных заседаний
			if (mb_substr($position, - strlen($position), 1) == "з") {
				return "Зал судебного заседания № $num_room место $num_position";
			}
			//Серверная
			if (mb_substr($position, - strlen($position), 2) == "се") {
				return "Серверная";
			}
			//Совещательные комнаты
			if (mb_substr($position, - strlen($position), 1) == "с") {
				return "Совещательная комната № $num_room место $num_position";
			}
		}

	}