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
    $param = count($this->helpers->urlData) ? "=" . $this->idBuildingObject : " IS NULL";

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
  private function cabinetListInfo(): array
  {
      $sql = "SELECT
                *
              FROM sdc_room
              WHERE id = $this->idBuildingObject";
      return $this->helpers->db->run($sql)->fetch(\PDO::FETCH_ASSOC);
  }

  /**
   * Проверяем параметры из GET-запроса
   */
  private function extraParam(): array
  {
    return match($this->helpers->urlData[1]){
      "info" => $this->cabinetListInfo(),
      "affiliation" => $this->selectAffiliation($this->helpers->urlData[0])
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
    return $this->helpers->wrap($this->updContent(), "data");
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
    var_dump(empty($this->helpers->formData["alarm_button"])? $this->helpers->formData["alarm_button"] : NULL);
    $param = array(
      "id" => $this->id(),
      "name" => $this->validateName(),
      "icon" => $this->validateIcon(),
      "affiliation" => $this->validateAffiliation(),
      "ip" => $this->helpers->formData["ip"] ?? NULL,
      "alarm_button" => $this->helpers->formData["alarm_button"] ?? NULL,
      "phone_worck" => $this->helpers->formData["phone_worck"] ?? NULL,
    );

    $sql = "UPDATE dev.sdc_room
    SET ip = :ip, name = :name, icon = :icon, affiliation = :affiliation, alarm_button = :alarm_button, phone_worck = :phone_worck WHERE id= :id";
    $this->helpers->db->run($sql, $param);

    http_response_code(200);
    return $this->helpers->wrap(["info" => "запись изменена", "id"=> $param["id"], "name"=> $param["name"], "icon"=> $param["icon"], ], "data");
  }
}
