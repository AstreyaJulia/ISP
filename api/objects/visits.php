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
	        			count(id) AS y,
					    date_format(DATE_ADD((CAST(dtime AS DATE)), INTERVAL 1 DAY),'%d-%m-%Y') AS x
					FROM
					    sdc_visits
					GROUP BY
					    x
					ORDER BY
					    dtime";
	        return $this->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
	    }
	}