<?php
	namespace Core\Model;
	use Core\Config\DB;
	use PDO;
	class User
	{

		protected $db;

	    public function __construct(DB $db) {
	        $this->db = $db;
	    }
	    
	    public function getUser($id) {
	    	$sql = "SELECT * FROM `sdc_users` WHERE `id`= $id";
	    	return $this->db->run($sql)->fetchAll(PDO::FETCH_CLASS);
	    }

	    public function getSirebar($id) {
	    	$sidebar = $this->getUser($id)[0]->sidebar;
	    	if ($sidebar == 0) {
	    		return "narrow";
	    	} else {
	    		return "wide";
	    	}
	 	}

	    
		


	}