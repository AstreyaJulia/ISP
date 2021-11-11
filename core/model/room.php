<?php
	namespace Core\Model;
	use Core\Config\DB;
	class Room  {
		protected $db;

	    public function __construct(DB $db) {
	        $this->db = $db;
	    }

	    //Получаем рабочие места с фамилиями сотрудников
	    public function getRoom() {
	        $sql = "SELECT sdc_room.id, sdc_user_attributes.fullname, jupiter_tab_num, ip, position, alarm_button, phone_worck, building_number FROM sdc_room 
					LEFT JOIN sdc_user_attributes ON sdc_user_attributes.room=sdc_room.id";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
	    }

	    public function getBuilding() {
	    	return (object) array(1 => 'Сафоново', 2 => 'Холм-Жирки');
	    }

	    public function getRoomNew() {
	    	$sql = "SELECT sdc_room_test.id, sdc_user_attributes.fullname, jupiter_tab_num, ip, name, sdc_room_test.affiliation, alarm_button, phone_worck FROM sdc_room_test 
					LEFT JOIN sdc_user_attributes ON sdc_user_attributes.room=sdc_room_test.id";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
	    }

	    /*public function getRoomNew() {
	    	$sql = "SELECT sdc_room.id, sdc_user_attributes.fullname, jupiter_tab_num, ip, floor, position, alarm_button, phone_worck, building_number FROM sdc_room 
					LEFT JOIN sdc_user_attributes ON sdc_user_attributes.room=sdc_room.id";
	        $workplaces = $this->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
	        foreach ($this->getBuilding() as $BuildingKey => $value) {
	        	// собираем этажи
	        	$temp_array = array();
			    $i = 0;
			    $key_array = array();
	        	foreach ($workplaces as $value) {
	        		if ($value->building_number == $BuildingKey) {
				        if (!in_array($value->floor, $key_array)) {
				            $key_array[$i] = $value->floor;
				            $temp_array[$i] = (object) [
				            	'id' => '0'.$BuildingKey.'_0'.$value->floor, //для получения данных по клику, уникальное
						        'name' => $value->floor." этаж",
						        'icon' => "../../assets/img/icons/floor.png",
						        'isParent' => 'true',
						        'children' => 'рабочие места'
				            ];
				        }
				        $i++;
				        $floor[$BuildingKey] = $temp_array;
		        	}
		        }

	        	$output[] = (object) [
	        		'id' => '0'.$BuildingKey.'_00', //для получения данных по клику, уникальное
	        		'open' => 'true', // развернут по-умолчанию
	        		'icon' => "../../assets/img/icons/building.png", // путь к значку, в базе можно хранить только имя без пути и расширения - building
	        		'isParent' => 'true', // является родителем, для рабочих мест только false
					'name' => $this->getBuilding()->{$BuildingKey},
					'children' => (object) $floor[$BuildingKey],
				];
	        }
	        //return json_encode($output, JSON_UNESCAPED_UNICODE);
	        return $output;
	    }*/

	    /*
	    	 Получили номера зданий и рабочих мест.
	    	 Осталось разнести этот бардак по этажам и кабинетам.
	    */
	    /*public function getRoomNew() {
	    	$sql = "SELECT sdc_room.id, sdc_user_attributes.fullname, jupiter_tab_num, ip, floor, position, alarm_button, phone_worck, building_number FROM sdc_room 
					LEFT JOIN sdc_user_attributes ON sdc_user_attributes.room=sdc_room.id";
	        $workplaces = $this->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
	        foreach ($this->getBuilding() as $BuildingKey => $value) {

	        	foreach ($workplaces as $key => $value) {
	        		// Соаоставляем комнаты со зданием
	        		if ($value->building_number == $BuildingKey) {
	        			$room[$BuildingKey][] = ['id' => $value->id, //для получения данных по клику, уникальное
	        					    'floor' => $value->floor.' вывести в массив', // вывести в массив
	        					    'name' => $value->position.' вывести в массив', // вывести в массив
	        					    'icon' => '../../assets/img/icons/floor.png',
          							'isParent' => 'false',
						];

	        		}

	        	}

	        	$output[] = (object) [
	        		'id' => '0'.$BuildingKey.'_00', //для получения данных по клику, уникальное
	        		'open' => 'true', // развернут по-умолчанию
	        		'icon' => "../../assets/img/icons/building.png", // путь к значку, в базе можно хранить только имя без пути и расширения - building
	        		'isParent' => 'true', // является родителем, для рабочих мест только false
					'name' => $this->getBuilding()->{$BuildingKey},
					'children' => (object) $room[$BuildingKey],
				];
	        }
	        return $output;
	    }*/

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

		/*
			Удаляем дубликаты из многомерного массива, по любому ключу индекса.
			https://www.php.net/manual/ru/function.array-unique.php

		*/
		public function unique_multidim_array($array, $key, $BuildingKey) {
		    $temp_array = array();
		    $i = 0;
		    $key_array = array();
		    foreach ($array as $key => $value) {
		   
			    foreach($value[$BuildingKey] as $val) {
			        if (!in_array($val[$key], $key_array)) {
			            $key_array[$i] = $val[$key];
			            $temp_array[$i] = $val;
			        }
			        $i++;
			    }
			}
		    return $temp_array;
		} 

	}