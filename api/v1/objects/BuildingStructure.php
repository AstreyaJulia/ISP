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
    $param = count($this->helpers->urlData) ? "=" . $this->helpers->validateINT($this->idBuildingObject, 'GET-запросе') : " IS NULL";

    $sql = "SELECT
              mother.id,
              mother.icon,
              mother.name,
              mother.affiliation,
              IF(ISNULL(children.id),'false', 'true') AS childNodes
            FROM sdc_room AS mother
            LEFT JOIN sdc_room AS children ON children.affiliation = mother.id
            WHERE mother.affiliation ? GROUP BY mother.id";
    return $this->helpers->db->run($sql, [$param])->fetchAll(\PDO::FETCH_ASSOC);
  }

  /**
   * Информация о здании, объекте здания
   */
  private function cabinetListInfo(): array
  {
    $param = $this->helpers->validateINT($this->idBuildingObject, 'GET-запросе');
    $sql = "SELECT
              *
            FROM sdc_room
            WHERE id = ?";
    return $this->helpers->db->run($sql, [$param])->fetch(\PDO::FETCH_ASSOC);
  }

  /**
   * Проверяем параметры из GET-запроса
   */
  private function extraParam(): array
  {
    return match($this->helpers->urlData[1]){
      "info" => $this->cabinetListInfo(),
      "affiliation" => $this->selectAffiliation($this->helpers->validateINT($this->helpers->urlData[0], 'GET-запросе'))
    };
  }

  /**
   * Обрабатываем приходящие GET-запросы. 
   */
  private function metodGET(): array
  {
    return match (count($this->helpers->urlData)) {
      0, 1 => $this->helpers->wrap($this->cabinetList(), "data"),
      2 => $this->helpers->wrap($this->extraParam(), "data"),
      default => $this->helpers->isErrorInfo(400, "Ошибка в GET-запросе", "Неверные параметры")
    };
  }

  /**
   * Обрабатываем приходящие POST-запросы. 
   */
  private function metodPOST(): array
  {
    return $this->helpers->wrap($this->addContent(), "data");
  }

  /**
   * Обрабатываем приходящие PATCH-запросы. 
   */
  private function metodPATCH(): array
  {
    return $this->helpers->wrap("Я метод PATCH", "data");
    //return $this->helpers->wrap($this->updContent(), "data");
  }

  /**
   * Обрабатываем приходящие DELETE-запросы.
   * 
   * @return array
   */
  private function metodDELETE(): array
  {
    return $this->helpers->wrap($this->delContent(), "data");
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

  /**
   * Изменение сущности структуры здания
   */
  private function updContent(): array
  {
    $param = array(
      "id" => $this->id(),
      "name" => $this->validateName(),
      "icon" => $this->validateIcon(),
      "affiliation" => $this->validateAffiliation(),
    );

    $sql = "UPDATE dev.sdc_room
            SET name = :name, icon = :icon, affiliation = :affiliation
            WHERE id= :id";
    $this->helpers->db->run($sql, $param);

    http_response_code(200);
    return ["info" => "запись изменена", "id"=> $param["id"], "name"=> $param["name"], "icon"=> $param["icon"]];
  }

  /**
   * Удаление записи
   * 
   * @return array
   */
  private function delContent(): array
  {
    $param = implode(",",$this->delContentValidate());

    $sql = "DELETE FROM sdc_room WHERE id IN ($param)";

    $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);

    return ["info" => "запись с id: $param удалена"];
  }


}
