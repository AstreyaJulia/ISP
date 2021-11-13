<?php
	namespace Core\Model;
	use Core\Config\DB;
	class Phonebook extends UserAttributes {

		protected $db;

	    public function __construct(DB $db) {
	        $this->db = $db;
	    }
	    
	    public function getSelect($in) {
	    	$prepare = str_repeat('?,', count($in) - 1) . '?';
	        $sql = "SELECT fullname, sdc_room.name, profession, phone_worck, sdc_users.id, DATE_FORMAT(dob, '%d.%m.%Y') as dob FROM sdc_users
			LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
				LEFT JOIN sdc_room ON sdc_room.id=sdc_user_attributes.room WHERE sdc_users.active = 1 and sdc_user_attributes.profession != '' and sdc_users.primary_group in ($prepare)";
	        return $this->db->run($sql, $in)->fetchAll(\PDO::FETCH_CLASS);
	    }

	}