<?php

namespace Api\Objects;

/**
 * Здания, кабинеты рабочие места
 */
class BuildingStructure
{
  use Objects;

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

    try {
      $param = match (count($this->helpers->urlData)) {
        0 => " IS NULL",
        1 => "=" . $this->helpers->urlData[0]
      };
    } catch (\Error | \Exception | \UnhandledMatchError $e) {
      $this->helpers->isErrorInfo(400, "Ошибка в переданных параметрах", $e->getMessage());
    }

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
   * Обрабатываем приходящие GET-запросы. 
   */
  private function metodGET(): array
  {
    return $this->helpers->wrap($this->cabinetList(), "data");
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
    return $this->helpers->wrap($row, "data");
  }

  /**
   * Проверяем приходящий POST-запрос
   * на добавление записи
   */
  private function validateContent(): array
  {
    return array (
      "name" => "",
      "icon" => $this->validateIcon(),
      "affiliation" => $this->validateAffiliation()
    );
  }

  /**
   * Праверка принадлежности 
   */
  private function validateIcon(): string
  {
    return match ($this->helpers->formData["icon"]) {
      "building", "floor", "door", "balance", "desktop" => $this->helpers->formData["icon"],
      default => $this->helpers->isErrorInfo(401, "Неверные параметры", "icon должен принимать одно из значений: building, floor, door, balance, desktop")
    };
  }

  /**
   * Праверка принадлежности 
   */
  private function validateAffiliation(): mixed
  {
    $param = $this->helpers->formData["affiliation"];

    return match ($this->helpers->formData["icon"]) {
      "building" => null,
      default => $this->helpers->isErrorInfo(401, "Неверные параметры", "affiliation должен принимать значение которое не получается проверить")
    };

  }
}
