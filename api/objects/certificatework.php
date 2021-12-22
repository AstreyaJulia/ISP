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
	        			UserAttributes.fullname,
						SUM(`3`) AS `col_3`,
					    SUM(`4`) AS `col_4`,
					    SUM(`5`) AS `col_5`
					FROM sdc_certificate_work AS CertWork
						LEFT JOIN `sdc_users` AS Users ON CertWork.judges = Users.id
						LEFT JOIN `sdc_user_attributes` AS UserAttributes ON Users.id = UserAttributes.internalKey
					WHERE quarter IN($prepare) AND year = ?
					GROUP BY judges ORDER BY judges";
					$quarter[] = $year;
	        return $this->db->run($sql, $quarter)->fetchAll(\PDO::FETCH_CLASS);
	    }
	}