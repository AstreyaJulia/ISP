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
	        	  (select UserAttributes.fullname from sdc_user_attributes order by UserAttributes.fullname limit 1) AS fullname,
						  IFNULL(SUM(`3`),'') AS col_3,
					    IFNULL(SUM(`4`),'') AS col_4,
					    IFNULL(SUM(`5`),'') AS col_5,
					    IFNULL(SUM(`6`),'') AS col_6,
					    IFNULL(SUM(`7`),'') AS col_7,
					    IFNULL(SUM(`8`),'') AS col_8,
					    IFNULL(SUM(`9`),'') AS col_9,
					    IFNULL(SUM(`10`),'') AS col_10,
					    IFNULL(SUM(`11`),'') AS col_11,
					    IFNULL(SUM(`12`),'') AS col_12,
					    IFNULL(SUM(`13`),'') AS col_13,
					    IFNULL(SUM(`14`),'') AS col_14,
					    (SUM(IFNULL(`3`,0) + IFNULL(`4`,0) + IFNULL(`5`,0) + IFNULL(`6`,0) + IFNULL(`7`,0) + IFNULL(`8`,0) + IFNULL(`9`,0) + IFNULL(`10`,0) + IFNULL(`11`,0) + IFNULL(`12`,0) + IFNULL(`13`,0) + IFNULL(`14`,0) + IFNULL(`17`,0))) AS col_15,
					    IFNULL(SUM(`16`),'') AS col_16,
					    IFNULL(SUM(`17`),'') AS col_17
					FROM sdc_certificate_work AS CertWork
						LEFT JOIN `sdc_users` AS Users ON CertWork.judges = Users.id
						LEFT JOIN `sdc_user_attributes` AS UserAttributes ON Users.id = UserAttributes.internalKey
					WHERE quarter IN($prepare) AND year = ?
					GROUP BY CertWork.judges ORDER BY fullname";
					$quarter[] = $year;
	        return $this->db->run($sql, $quarter)->fetchAll(\PDO::FETCH_CLASS);
	    }

	    public function getPeriod() {
	    	/*$sql = "SELECT 
		    		year AS year,
		    		GROUP_CONCAT(distinct quarter ORDER BY quarter ASC SEPARATOR ', ') AS quarter
					FROM sdc_certificate_work
					GROUP BY year";
			return $this->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);*/
			$sql = "SELECT
						year AS year,
						quarter as quarter
					from sdc_certificate_work
					group by year, quarter";

			return $this->db->run($sql)->fetchAll(\PDO::FETCH_GROUP);


	    }

	    public function optgroup() {
	    	$output = array();
	    	$option = array();
	    	foreach ($this->getPeriod() as $year => $arrQuarter) {
	    		foreach ($arrQuarter as $key => $value) {
	    			//var_dump($value);
	    			switch ($value["quarter"]) {
		    			case "4":
		    				$option[] = [
			    				["value" => "1", "description" => "1 квартал"],
			    				["value" => "2", "description" => "2 квартал"],
			    				["value" => "1,2", "description" => "1 полугодие"],
			    				["value" => "3", "description" => "3 квартал"],
			    				["value" => "1,2,3", "description" => "9 месяцев"],
			    				["value" => "4", "description" => "4 квартал"],
			    				["value" => "1,2,3,4", "description" => "12 месяцев"]
			    			];
		    			break;
		    			case "3":
		    				$option[] = [
			    				["value" => "1", "description" => "1 квартал"],
			    				["value" => "2", "description" => "2 квартал"],
			    				["value" => "1,2", "description" => "1 полугодие"],
			    				["value" => "3", "description" => "3 квартал"],
			    				["value" => "1,2,3", "description" => "9 месяцев"],
			    			];
			    		break;
		    			case "2":
		    				$option[] = [
			    				["value" => "1", "description" => "1 квартал"],
			    				["value" => "2", "description" => "2 квартал"],
			    				["value" => "1,2", "description" => "1 полугодие"],
			    			];
			    		break;
		    			case "1":
		    				$option[] = [
			    				["value" => "1", "description" => "1 квартал"],
			    			];
			    		break;
		    		}
		    		$output[$year] = 
		    			$option[$key]
		    		;
		    		
	    		}
	    		//var_dump($value);
	    		
	    	}
	    	return $output;
	    	//return $output;
	    }
	}
