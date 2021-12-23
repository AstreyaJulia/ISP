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
	        			UserAttributes.fullname AS fullname,
						SUM(`3`) AS `col_3`,
					    SUM(`4`) AS `col_4`,
					    SUM(`5`) AS `col_5`,
					    SUM(`6`) AS `col_6`,
					    SUM(`7`) AS `col_7`,
					    SUM(`8`) AS `col_8`,
					    SUM(`9`) AS `col_9`,
					    SUM(`10`) AS `col_10`,
					    SUM(`11`) AS `col_11`,
					    SUM(`12`) AS `col_12`,
					    SUM(`13`) AS `col_13`,
					    SUM(`14`) AS `col_14`,
					    SUM(nvl(`3`,0) + nvl(`4`,0) + nvl(`5`,0) + nvl(`6`,0) + nvl(`7`,0) + nvl(`8`,0) + nvl(`9`,0) + nvl(`10`,0) + nvl(`11`,0) + nvl(`12`,0) + nvl(`13`,0) + nvl(`14`,0) + nvl(`17`,0)) AS `col_15`,
					    SUM(`16`) AS `col_16`,
					    SUM(`17`) AS `col_17`
					FROM sdc_certificate_work AS CertWork
						LEFT JOIN `sdc_users` AS Users ON CertWork.judges = Users.id
						LEFT JOIN `sdc_user_attributes` AS UserAttributes ON Users.id = UserAttributes.internalKey
					WHERE quarter IN($prepare) AND year = ?
					GROUP BY judges ORDER BY fullname";
					$quarter[] = $year;
	        return $this->db->run($sql, $quarter)->fetchAll(\PDO::FETCH_CLASS);
	    }
	}