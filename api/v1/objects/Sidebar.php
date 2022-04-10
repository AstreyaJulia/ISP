<?php
	namespace Api\Objects;

	class Sidebar extends Helpers {

    public $sudo;
    public $profession;
    public $membership;


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
                    `id` NOT IN (10,11) AND `parent` NOT IN (10,11) AND
                    `job_access` in(0,$this->profession) and `group_access` in(0,$this->membership)";
      }
        return $this->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
    }

	}
