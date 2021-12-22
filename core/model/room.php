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
	    	$sql = "SELECT sdc_room.id, sdc_user_attributes.fullname, jupiter_tab_num, ip, name, icon, sdc_room.affiliation, alarm_button, phone_worck FROM sdc_room 
					LEFT JOIN sdc_user_attributes ON sdc_user_attributes.room=sdc_room.id";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
	    }

		public function getFreeRoom(){
			$sql = "SELECT ChildUserType.id, CONCAT (ParentUserType.name, ' / ', ChildUserType.name) AS name 
    				FROM `sdc_room` AS ChildUserType
    					LEFT JOIN `sdc_room` AS ParentUserType ON ChildUserType.affiliation = ParentUserType.id
    						LEFT JOIN sdc_user_attributes ON sdc_user_attributes.room=ChildUserType.id
    				WHERE ChildUserType.icon ='desktop' AND sdc_user_attributes.room IS NULL ORDER BY ParentUserType.name ASC";
	        $FreeRoom = $this->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
	        $content = "";
			foreach ($FreeRoom as $key => $value) {
				$keyArr = array_keys($value);
				$content .= '<option value="'.$value[$keyArr["0"]].'">'.$value[$keyArr["1"]].'</option>';
			}
			return $content;
		}
	}