<?php
	namespace Api\Objects;
	use Core\Config\DB;

	class Visits {

		protected $db;

	    public function __construct(DB $db) {
	        $this->db = $db;
	    }

	    public function visits() {
	        $sql = "SELECT
	        			count(id) AS count,
					    date_format(DATE_ADD((CAST(dtime AS DATE)), INTERVAL 1 DAY),'%d-%m-%Y') AS day
					FROM
					    sdc_visits
					GROUP BY
					    day
					ORDER BY
					    dtime";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
	    }

	    // Групируем статистику посещений
	    	    	/*
			для графиков нужен формат json:
			[
			  {
			    "count": [21, 215, 5, 115, 1],
			    "day": ["2021-10-20", "2021-10-22", "2021-10-27", "2021-10-28", "2021-10-30"],
			  }
			]
	    	*/
	    public function getVisits() {
	        foreach ($this->visits() as $key => $value) {
	        	$data["count"][] = $value->count;
	        	$data["day"][] = $value->day;
	        }
	        return $data;
	    }

	}
