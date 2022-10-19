<?php
	namespace Api\Objects;

	class Home {

    protected Helpers $helpers;

    private $sudo;
    private $profession;
    private $membership;

    public function __construct(
      Helpers $helpers = new \Api\Objects\Helpers()
      ) {
      $this->helpers = $helpers;
      $this->sudo = $helpers->getSudo();
      $this->profession = $helpers->professionID;
      $this->membership = $helpers->getMembership();
    }

    /**
     * Получаем все доступные ссылки для домашней страницы
     * 
     * @return array
     */
    public function getHome() {
      switch ($this->sudo) {
        case 1:
          $sql = "SELECT * FROM sdc_site_content WHERE parent = 1 AND class_key = 'Route'";
          break;
        default:
          $sql = "SELECT
                  *
                  FROM
                    sdc_site_content
                  WHERE
                    parent = 1 AND
                    (FIND_IN_SET(0, job_access) OR FIND_IN_SET($this->profession, job_access)) AND
                    (FIND_IN_SET(0, group_access) OR FIND_IN_SET($this->membership, group_access)) AND
                    class_key = 'Route'";
      }
        return $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
    }

	}
