<?php
	namespace Api\Objects;
	use Core\Config\DB;

	class Phonebook {

		protected $db;

	    public function __construct(DB $db) {
	        $this->db = $db;
	    }
	    
	    public function getSelect($in, $which_record, $number_records) {
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
					WHERE Users.active = 1 and UserAttributes.profession != '' and Vocation.parent_id in ($prepare)
					LIMIT ?, ?";
					$in[] = $which_record;
					$in[] = $number_records;
	        return $this->db->run($sql, $in)->fetchAll(\PDO::FETCH_CLASS);
	    }

	    // Группы пользователей
	    public function getGroup() {
	        $sql = "SELECT
	        			Vocation.id,
	        			Vocation.name AS groupName
					FROM `sdc_vocation` AS Vocation
					WHERE Vocation.parent_id IS NULL";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
	    }

	    // количество активных пользователей при использовании пагинации
	    public function count($group) {
	    	$prepare = str_repeat('?,', count($group) - 1) . '?';
	    	$sql = "SELECT
	    				COUNT(*) as `total_rows`
	    			FROM `sdc_users` AS Users
	    				LEFT JOIN `sdc_user_attributes` AS UserAttributes on Users.id = UserAttributes.internalKey
                        LEFT JOIN `sdc_vocation` AS Vocation ON Vocation.id=UserAttributes.profession
	    			WHERE Users.active=1 and Users.id !=1 AND Vocation.parent_id IN($prepare)";
	        return $this->db->run($sql, $group)->fetchColumn();
	    }

	}