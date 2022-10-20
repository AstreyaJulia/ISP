<?php
	namespace Api\Objects;

	class Sidebar {

    protected Helpers $helpers;

    public function __construct(
        Helpers $helpers = new \Api\Objects\Helpers()
    ) {
        $this->helpers = $helpers;
    }

    /**
     * Получаем меню сайдбара
     */
    public function getSidebar():array {
      switch ($this->helpers->sudo) {
        case 1:
          $sql = "SELECT * FROM sdc_site_content WHERE class_key != 'Route'";
          break;
        default:
          $sql = "SELECT
                  *
                  FROM
                    `sdc_site_content`
                  WHERE
                    `id` NOT IN (10,11) AND `parent` NOT IN (10,11) AND
                    (FIND_IN_SET(0, job_access) OR FIND_IN_SET({$this->helpers->sudo}, job_access)) AND
                    (FIND_IN_SET(0, group_access) OR FIND_IN_SET({$this->helpers->membership}, group_access)) AND class_key != 'Route'";
      }
        return $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
    }

    /**
     * Получаем запись из меню сайдбара
     */
    public function readOne():array {
      try {
        if ($this->helpers->sudo === 1){
          $id = (int)$this->helpers->getUrlData()[1];
          $sql = "SELECT * FROM sdc_site_content WHERE id = ?";
          return $this->helpers->db->run($sql, [$id])->fetchAll(\PDO::FETCH_ASSOC);
        } else {
          throw new \Exception("Недостаточно прав");
        }
      } catch (\Exception $e) {
        $this->helpers::isErrorInfo(200, "Доступ закрыт.", $e);
      }
      
    }
	}
