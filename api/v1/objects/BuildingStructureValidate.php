<?php

namespace Api\Objects;

use InvalidArgumentException;

/**
 * Проверки для класса BuildingStructure
 */
trait BuildingStructureValidate
{
  /**
   * Иконки для здания
   */
  private array $iconBilding = ["building", "buildingMedium", "buildingSmall", "subbuilding"];

  /**
   * Иконки для этажей, лестниц
   */
  private array $iconFloor = ["floor", "stairs"];

  /**
   * Иконки для кабинетов, залов с.з., совещательных комнат и т.д.
   */
  private array $iconDoor = ["door", "hammer", "balance", "toilet"];

  /**
   * Иконки для рабочего места
   */
  private array $iconDesktop = ["desktop"];

  /**
   * id элемента из структуры здания
   */
  private int|NULL $idBuildingObject;

  /**
   * реализованные параметры для отображения дополнительной
   * информации выбранного элемента здания
   */
  private array $paramBuildingObjectArray = ["info", "affiliation"];

  public function __construct(
    protected Helpers $helpers = new \Api\Objects\Helpers()
  ) {
    $this->helpers = $helpers;
    try {
      $this->idBuildingObject = $this->helpers->urlData[0] ?? NULL;
    } catch (\Error $e) {
      $this->helpers::isErrorInfo(400, "Неверные параметры", $e);
    }

    if(count($this->helpers->urlData) === 2){
      try {
        (in_array($this->helpers->urlData[1], $this->paramBuildingObjectArray)) ? "" : throw new \InvalidArgumentException("Ожидаю одно из значений: ".implode(",", $this->paramBuildingObjectArray));
      } catch (\InvalidArgumentException $e) {
        $this->helpers::isErrorInfo(400, "Неверное значение в GET-запросе", $e);
      }
    }
    
  }

  /**
   * Проверяем id
   */
  private function id(){

    $param = $this->helpers->formData["id"] ?? "";

    $this->helpers->validateINT($param, "id");

    $sql = "SELECT
              COUNT(id)
            FROM sdc_room
            WHERE id = ?";
    $row = $this->helpers->db->run($sql, [$param])->fetchColumn();
    if($row !== 1){
        $this->helpers->isErrorInfo(400, "Неверные параметы", "Запись с id $param отсутствует в базе");
    }
    return $param;
  }

  /**
   * Проверяем приходящий POST-запрос
   * на добавление записи
   */
  private function validateContent(): array
  {
    return array(
      "name" => $this->validateName(),
      "icon" => $this->validateIcon(),
      "affiliation" => $this->validateAffiliation()
    );
  }

  /**
   * Праверка наименования структуры здания 
   */
  private function validateName(): string
  {
    try {
      if (empty($this->helpers->formData["name"])) {
        throw new InvalidArgumentException('name должен быть заполнен');
      }
    } catch (\InvalidArgumentException $e) {
      $this->helpers->isErrorInfo(400, "Ошибка в переданных параметрах", $e);
    }

    return $this->helpers->formData["name"];
  }

  /**
   * Праверка иконки 
   */
  private function validateIcon(): string
  {
    $icon = array_merge($this->iconBilding, $this->iconFloor, $this->iconDoor, $this->iconDesktop);
    return match (true) {
      in_array($this->helpers->formData["icon"], $icon) => $this->helpers->formData["icon"],
      default => $this->helpers->isErrorInfo(401, "Неверные параметры", "icon должен принимать одно из значений:".implode(', ', $icon))
    };
  }

  /**
   * Праверка принадлежности 
   */
  private function validateAffiliation(): mixed
  {
    $param = $this->helpers->formData["affiliation"] ?? $this->helpers->isErrorInfo(400, "Неверные параметры", "не передан параметр affiliation");
    if (in_array($this->helpers->formData["icon"], $this->iconBilding) and $param != NULL) {
      $this->helpers->isErrorInfo(400,  "Неверные параметры", "При добавлении здания affiliation должен быть пустым");
    }

    return match (true) {
      in_array($this->helpers->formData["icon"], $this->iconBilding) => null,
      in_array($this->helpers->formData["icon"], $this->iconFloor) => $this->selectAffiliationValue($param, $this->iconBilding),
      in_array($this->helpers->formData["icon"], $this->iconDoor) => $this->selectAffiliationValue($param, $this->iconFloor),
      in_array($this->helpers->formData["icon"], $this->iconDesktop) => $this->selectAffiliationValue($param, $this->iconDoor),
      default => $this->helpers->isErrorInfo(401, "Неверные параметры", "affiliation принимает значение которое не получается проверить")
    };
  }

  /**
   * Список принадлежности
   * 
   * @param int $params id раздела
   * 
   * @return array список объектов которым может принадлежать $params
   */
  private function selectAffiliation(int $param): array
  {
    
    $sql = "SELECT
              icon
            FROM sdc_room
            WHERE id = ?";
    $value = $this->helpers->db->run($sql, [$param])->fetch(\PDO::FETCH_COLUMN);

    $affiliation = match (true) {
      in_array($value, $this->iconBilding) =>  $this->iconBilding,
      in_array($value, $this->iconFloor) =>  $this->iconFloor,
      in_array($value, $this->iconDoor) =>  $this->iconDoor,
      in_array($value, $this->iconDesktop) =>  $this->iconDesktop,
      default => $this->helpers->isErrorInfo(401, "Неверные параметры", "affiliation принимает значение которое не получается проверить")
    };
    array_walk($affiliation, fn(&$x) => $x = "'$x'");
    $icon = implode(",", $affiliation);
    $sql = "SELECT
              id,
              icon,
              name
            FROM sdc_room
            WHERE icon IN ($icon)";

    return $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
  }

  /**
   * Проверяем значение на принадлежность к разделу
   * 
   * @param int $params id раздела в который добавляем запись
   * @param array $array массив с иконками раздела в который добавляем запись
   * 
   * @return int id раздела в который добавляем запись
   */
  private function selectAffiliationValue(int $param, array $array): int
  {
    array_walk($array, fn(&$x) => $x = "'$x'");

    $icon = implode(",", $array);
    $sql = "SELECT
              id
            FROM sdc_room
            WHERE icon IN($icon)";
    $value = $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_COLUMN);

    return in_array($param, $value) ? $param : $this->helpers->isErrorInfo(401, "Неверные параметры", "affiliation принимает недопустимое значение");
  }

  /**
   * Проверка перед удалением записи
   * 
   * @return array id удаляемых записей
   */
  private function delContentValidate(): array
  {
    $param = $this->helpers->formData["id"];

    $sql = "SELECT 
              building.id AS id1,
              floor.id AS id2,
              door.id AS id3,
              desktop.id AS id4
            FROM sdc_room AS building
            LEFT JOIN sdc_room AS floor ON floor.affiliation=building.id
            LEFT JOIN sdc_room AS door ON door.affiliation=floor.id
            LEFT JOIN sdc_room AS desktop ON desktop.affiliation=door.id
            WHERE building.id = ?";

    $result = "";
    foreach ($this->helpers->db->run($sql, [$param])->fetchAll(\PDO::FETCH_ASSOC) as $row) {
      $row = array_filter($row, fn($value) => !is_null($value) && $value !== '');
      $result .= implode(",", $row).",";
    }
    $result = explode(",", rtrim($result, ","));
    $result = array_unique($result, SORT_NUMERIC);

    return !empty($result[0]) ? $result: $this->helpers->isErrorInfo(400, "Ошибка в DELETE-запросе", "Записи не существует");
  }
}
