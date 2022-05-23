<?php
	namespace Api\Objects;

	class Sidebar extends Helpers {

    protected $db;
    protected $helpers;

    private $sudo;
    private $profession;
    private $membership;

    public function __construct(DB $db, helpers $helpers) {
      $this->db = $db;
      $this->helpers = $helpers;
      $this->sudo = $helpers->getSudo();
      $this->profession = $helpers->getProfession();
      $this->membership = $helpers->getMembership();
    }

    //Получаем меню сайдбара
    public function getSidebar() {
      switch ($this->sudo) {
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
                    `job_access` in(0,$this->profession) and `group_access` in(0,$this->membership)";
      }
        return $this->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
    }

    //Получаем меню сайдбара
    public function readOne() {
      try {
        if ($this->sudo === 1){
          $id = (int)$this->helpers->getUrlData()[1];
          $sql = "SELECT * FROM sdc_site_content WHERE id = ?";
          return $this->db->run($sql, [$id])->fetchAll(\PDO::FETCH_ASSOC);
        } else {
          throw new \Exception("Недостаточно прав");
        }
      } catch (\Exception $e) {
        $this->helpers::isErrorInfo(200, "Доступ закрыт.", $e);
      }
      
    }
	}
