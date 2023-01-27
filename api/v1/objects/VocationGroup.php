<?php

namespace Api\Objects;
/**
 * sdfsdf
 */
class VocationGroup
{

  protected Helpers $helpers;

  public function __construct(
    Helpers $helpers = new \Api\Objects\Helpers()
  ) {
    $this->helpers = $helpers;
  }

  /**
   * 
   * Список должностей или групп
   * 
   * @return object
   * 
   */
  public function vocationOrGroup()
  {
    $param = match ($this->helpers->urlData[0]) {
      "vocation" => "IS NOT NULL",
      "group" => "IS NULL"
    };

    $sql = "SELECT
                id,
                name AS label
            FROM sdc_vocation
            WHERE parent_id $param";
    return $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
  }

  /**
   * 
   * Список сотрудников по группам
   * 
   * @return object
   * 
   */
  public function usersGroup()
  {
    
    $param = $this->helpers->urlData[1];

    if ( filter_var($param, FILTER_VALIDATE_INT) === false ) {
      $this->helpers::isErrorInfo(400, "Неверные параметры", "Ожидаю целое число. Получаю: $param");
    }

    $sql = "SELECT
              userAttr.id,
              userAttr.fullname AS label
            FROM sdc_user_attributes AS userAttr
            LEFT JOIN sdc_vocation AS vocation ON vocation.id = userAttr.profession
            LEFT JOIN sdc_users AS users ON users.id = userAttr.internalKey 
            WHERE vocation.parent_id = :param AND users.active = 1";
    return $this->helpers->db->run($sql,[$param])->fetchAll(\PDO::FETCH_CLASS);
  }


}
