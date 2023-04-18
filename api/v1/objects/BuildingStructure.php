<?php

namespace Api\Objects;

use InvalidArgumentException;

/**
 * Здания, кабинеты рабочие места
 */
class BuildingStructure
{
  use Objects, BuildingStructureValidate {
    BuildingStructureValidate::__construct insteadof Objects;
  }

  /**
   * 
   * Структура здания
   * 
   * @return array
   * 
   */
  public function cabinetList(): array
  {
    $param = count($this->helpers->urlData) ? "=" . $this->helpers->urlData[0] : " IS NULL";

    $sql = "SELECT
              mother.id,
              mother.icon,
              mother.name,
              IF(ISNULL(children.id),'false', 'true') AS childNodes
            FROM sdc_room AS mother
            LEFT JOIN sdc_room AS children ON children.affiliation = mother.id
            WHERE mother.affiliation $param GROUP BY mother.id";
    return $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
  }

  /**
   * Информация о здании, объекте здания
   */
  private function cabinetListInfo()
  {
    $sql = "SELECT
              *
            FROM sdc_room
            WHERE id = $this->idBuildingObject";
    return $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
  }

  /**
   * Обрабатываем приходящие GET-запросы. 
   */
  private function metodGET(): array
  {
    return match (count($this->helpers->urlData)) {
      0, 1 => $this->cabinetList(),
      2 =>  $this->cabinetListInfo(),
      default => $this->helpers->isErrorInfo(400, "Ошибка в GET-запросе", "Неверные параметры")
    };
  }

  /**
   * Обрабатываем приходящие GET-запросы. 
   */
  private function metodPOST(): array
  {
    return $this->helpers->wrap($this->addContent(), "data");
  }

  /**
   * Добавление сущности структуры здания 
   * 
   * @return array
   */
  public function addContent(): array
  {
    $param = $this->validateContent();

    $sql = "INSERT INTO sdc_room (name, icon, affiliation) VALUES(:name, :icon, :affiliation)";
    $this->helpers->db->run($sql, $param);

    $LAST_ID = $this->helpers->db->pdo->lastInsertId() ?? $this->helpers::isErrorInfo(400, "Произошла ошибка", "Запись не добавлена");


    $sql = "SELECT name, icon FROM sdc_room WHERE id = ?";
    $row = $this->helpers->db->run($sql, [$LAST_ID])->fetch(\PDO::FETCH_ASSOC);

    if ($row["name"] !== $param["name"]) {
      $this->helpers::isErrorInfo(400, "Произошла ошибка", "Што-то пошло не так");
    }
    http_response_code(201);
    return $row;
  }
}
