<?php

namespace Api\Objects;

use Core\Config\DB;

class Visits
{

  protected $db;

  public function __construct(DB $db)
  {
    $this->db = $db;
  }

  public function visits()
  {
    $sql = "SELECT count(id) AS y,
       (CAST(dtime AS DATE)) AS x
FROM sdc_visits
where dtime > date_sub(now(), interval 30 day )
GROUP BY x ORDER BY x";
    return $this->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
  }
}
