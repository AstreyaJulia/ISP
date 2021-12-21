<?php
	namespace Api\Objects;
	use Core\Config\DB;

	class CertificateWork {

		protected $db;

	    public function __construct(DB $db) {
	        $this->db = $db;
	    }
	    
	    public function getSelect($quarter, $year) {
	    	$prepare = str_repeat('?,', count($quarter) - 1) . '?';
	        $sql = "SELECT 
						SUM(3) AS `3`,
					    SUM(4) AS `4`,
					    SUM(5) AS `5`
					FROM sdc_certificate_work 
					WHERE quarter IN($prepare) AND year = ?
					GROUP BY judges ORDER BY judges";
					$quarter[] = $year;
	        return $this->db->run($sql, $quarter)->fetchAll(\PDO::FETCH_CLASS);
	    }
	}