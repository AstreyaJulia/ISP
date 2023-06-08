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
              mother.menuindex,
              mother.icon,
              mother.name,
              mother.affiliation,
              IF(ISNULL(children.id),'false', 'true') AS childNodes
            FROM sdc_room AS mother
            LEFT JOIN sdc_room AS children ON children.affiliation = mother.id
            WHERE mother.affiliation $param GROUP BY mother.id ORDER BY mother.menuindex ASC";
    return $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
  }

  /**
   * Информация о здании, объекте здания
   */
  private function cabinetListInfo(): array
  {
    $param = $this->helpers->validateINT($this->idBuildingObject, 'GET-запросе');
    $sql = "SELECT
              room.id AS id,
              room.menuindex,
              room.ip,
              room.name,
              room.icon,
              room.affiliation,
              room.alarm_button,
              room.phone_worck,
              userAttributes.fullname AS workplace_user
            FROM sdc_room AS room
            LEFT JOIN sdc_user_attributes AS userAttributes ON room.id = userAttributes.room
            WHERE room.id = ?";
    return $this->helpers->db->run($sql, [$param])->fetch(\PDO::NULL_TO_STRING);
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
    $param = $this->helpers->urlData[0] ?? 0;
    return match ($param) {
      "up", "down" => $this->helpers->wrap($this->sorting(), 'data'),
      0 => $this->helpers->wrap($this->updContent(), "data"),
      default => $this->helpers->isErrorInfo(400, "Неверный маршрут", "Задан несуществующий маршрут")
    };
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

    $paramLastRecord = empty($this->helpers->formData["affiliation"]) ? " IS NULL": "=" . $this->helpers->formData["affiliation"];

    $lastRecord = "SELECT
                    menuindex
                  FROM sdc_room
                  WHERE affiliation $paramLastRecord ORDER BY menuindex DESC LIMIT 1";
    $param = array_merge($param, ["menuindex" => $this->helpers->db->run($lastRecord)->fetch(\PDO::FETCH_COLUMN) + 1]);

    $sql = "INSERT INTO sdc_room (menuindex, name, icon, affiliation) VALUES(:menuindex, :name, :icon, :affiliation)";
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

    $sql = "UPDATE sdc_room
            SET name = :name, icon = :icon, affiliation = :affiliation
            WHERE id= :id";
    $this->helpers->db->run($sql, $param);

    http_response_code(200);
    return ["info" => "запись изменена", "id"=> $param["id"], "name"=> $param["name"], "icon"=> $param["icon"]];
  }

  
  /**
   * Сортировка структуры здания
   */
  private function sorting()
  {

    $id = $this->id();
    $sql = "SELECT
              affiliation
            FROM sdc_room
            WHERE id = ?";
    $affiliation = $this->helpers->db->run($sql, [$id])->fetch(\PDO::FETCH_COLUMN);

    $param = isset($affiliation) ? "=" . $affiliation : " IS NULL";

    $sql = "SELECT
              id,
              name,
              menuindex
            FROM sdc_room
            WHERE affiliation $param GROUP BY id ORDER BY menuindex ASC";
    $result = $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);

    $key = $this->helpers->searchAssociativeArray($id, $result, 'id');

    match ($this->helpers->urlData[0]) {
      'up' => $positionCalculation = ($result[0] == $result[$key]) ? $this->helpers->isErrorInfo(400, 'ошибка в запросе', 'Запись не может быть перемещена вверх') : 1,
      'down' => $positionCalculation = (end($result) == $result[$key]) ? $this->helpers->isErrorInfo(400, 'ошибка в запросе', 'Запись не может быть перемещена вниз') : -1,
      default => $this->helpers->isErrorInfo(400, "Ошибка в запросе", "Пререданы неверные параметры для сортировки")
    };

    $param = [
      ['id' => $result[$key]['id'], 'menuindex' => $result[$key]['menuindex'] - $positionCalculation],
      ['id' => $result[$key - $positionCalculation]['id'], 'menuindex' => $result[$key - $positionCalculation]['menuindex'] + $positionCalculation]
    ];

    $sql = "UPDATE sdc_room
            SET menuindex = :menuindex
            WHERE id= :id";

    $this->helpers->db->runMultiple($sql, $param);

    http_response_code(200);
    return ["info" => "запись перемещена", "id"=> $result[$key]['id'], "name"=> $result[$key]["name"]];

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
