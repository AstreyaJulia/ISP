<?php
	namespace Core\Model;
	use Core\Config\DB;
	class Staff extends User
	{

		protected $db;

	    public function __construct(DB $db) {
	        $this->db = $db;
	    }
	    //Выводит дни рождения сегодня
	    public function getStaff() {
	        $sql = "SELECT sdc_user_attributes.fullname, sdc_user_attributes.dob, sdc_user_attributes.profession, sdc_room.ip, sdc_room.jupiter_tab_num, sdc_users.username, sdc_users.sudo, sdc_users.active, sdc_users.id, DATE_FORMAT(dob, '%d.%m.%Y') as dob FROM sdc_users
			LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
				LEFT JOIN sdc_room ON sdc_room.id=sdc_user_attributes.room";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
	    }
	}
