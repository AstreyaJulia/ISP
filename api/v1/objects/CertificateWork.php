<?php
	namespace Api\Objects;

	class CertificateWork {

	    public function __construct(
			protected DB $db = new \Api\Objects\DB(DB_NAME, DB_USER, DB_PASS, DB_HOST)
		) {}

	    //Получаем всех действующих судей
	    public function getJudge() {
	        $sql = "SELECT
						Users.id AS id,
						UserAttributes.idGAS AS idGAS,
						REGEXP_REPLACE(UserAttributes.fullname,'^(.*)\\\s+(.).*\\\s+(.).*$','\\\\1 \\\\2. \\\\3.') AS fullname
					FROM sdc_users AS Users
						LEFT JOIN `sdc_user_attributes` AS UserAttributes ON Users.id = UserAttributes.internalKey
					WHERE Users.active = 1 AND UserAttributes.profession IN(1,2,3)
					ORDER BY UserAttributes.fullname";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
	    }

	    //Получаем статистику по году и кварталу
	    public function getSelect($quarter, $year) {
	    	$prepare = str_repeat('?,', count($quarter) - 1) . '?';
	        $sql = "SELECT
	        			ROW_NUMBER() OVER (PARTITION BY year ORDER BY fullname) AS row_num,
	        			REGEXP_REPLACE(UserAttributes.fullname,'^(.*)\\\s+(.).*\\\s+(.).*$','\\\\1 \\\\2. \\\\3.') AS fullname,
	        	  		/*(select UserAttributes.fullname from sdc_user_attributes order by UserAttributes.fullname limit 1) AS fullname,*/
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

	    // Получаем все сохранившиеся отчетные периоды в сгруппированном виде
	    public function getPeriod() {
			$sql = "SELECT
						year AS year,
						quarter AS quarter
					FROM sdc_certificate_work
					GROUP BY year, quarter
					ORDER BY year DESC";
			return $this->db->run($sql)->fetchAll(\PDO::FETCH_GROUP);
	    }

	    // Формируем необходимый массив из отчетных периодов
	    public function optgroup() {
	    	$output = array();
	    	$option = array();
	    	foreach ($this->getPeriod() as $year => $arrQuarter) {
	    		foreach ($arrQuarter as $key => $value) {
	    			switch ($value["quarter"]) {
		    			case "1":
		    				$option[] = [
			    				["value" => "1", "description" => "1 квартал"],
			    			];
		    			case "2":
		    				$option[] = [
			    				["value" => "1", "description" => "1 квартал"],
			    				["value" => "2", "description" => "2 квартал"],
			    				["value" => "1,2", "description" => "1 полугодие"],
			    			];
		    			case "3":
		    				$option[] = [
			    				["value" => "1", "description" => "1 квартал"],
			    				["value" => "2", "description" => "2 квартал"],
			    				["value" => "1,2", "description" => "1 полугодие"],
			    				["value" => "3", "description" => "3 квартал"],
			    				["value" => "1,2,3", "description" => "9 месяцев"],
			    			];
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
		    		}
		    		$output[$year] = $option[$key];
	    		}
	    	}
	    	return $output;
	    }
	}
