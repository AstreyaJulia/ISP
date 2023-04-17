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

  public function __construct(
    protected Helpers $helpers = new \Api\Objects\Helpers()
  ) {
    $this->helpers = $helpers;
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
    //$this->helpers->validateINT($param, "affiliation");

    return match (true) {
      in_array($this->helpers->formData["icon"], $this->iconBilding) => null,
      in_array($this->helpers->formData["icon"], $this->iconFloor) => $this->selectAffiliationValue($param, $this->iconBilding),
      in_array($this->helpers->formData["icon"], $this->iconDoor) => $this->selectAffiliationValue($param, $this->iconFloor),
      in_array($this->helpers->formData["icon"], $this->iconDesktop) => $this->selectAffiliationValue($param, $this->iconDoor),
      default => $this->helpers->isErrorInfo(401, "Неверные параметры", "affiliation принимает значение которое не получается проверить")
    };
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
}
