<?php
	namespace Api\Objects;
	use Core\Config\DB;
	class Sidebar {

		public $sudo;

		protected $db;

	    public function __construct(DB $db) {
	        $this->db = $db;
	    }
	    
	    //Получаем меню сайдбара
	    public function getSidebar() {
	    	switch ($this->sudo) {
			    case 1:
			        $sql = "SELECT * FROM sdc_site_content";
			        break;
			    default:
			    	$sql = "SELECT 
			       				*
			       			FROM
			       				`sdc_site_content`
			       			WHERE
			       				`id` NOT IN (10,11) AND `parent` NOT IN (10,11)";
			}
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
	    }
	}