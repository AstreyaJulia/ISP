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
	        $sql = "SELECT
	        			Users.id,
	        			UserAttributes.fullname,
	        			ParentUserType.name AS room,
	        			Vocation.name AS profession,
	        			ChildUserType.phone_worck
					FROM `sdc_room` AS ChildUserType
					         LEFT JOIN `sdc_room` AS ParentUserType ON ChildUserType.affiliation = ParentUserType.id
					         LEFT JOIN `sdc_user_attributes` AS UserAttributes on ChildUserType.id = UserAttributes.room
					         LEFT JOIN `sdc_users` AS Users ON UserAttributes.internalKey=Users.id
					         LEFT JOIN `sdc_vocation` AS Vocation ON Vocation.id=UserAttributes.profession
					WHERE Users.active = 1 and UserAttributes.profession != '' and Vocation.parent_id in ($prepare)";
	        return $this->db->run($sql, $in)->fetchAll(\PDO::FETCH_CLASS);
	    }

	    // Группы пользователей
	    public function getGroup() {
	        $sql = "SELECT
	        			sdc_vocation.id,
	        			sdc_vocation.name AS groupName
					FROM `sdc_vocation` 
					WHERE sdc_vocation.parent_id IS NULL";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
	    }
	}