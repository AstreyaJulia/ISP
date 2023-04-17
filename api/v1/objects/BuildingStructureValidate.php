<?php

namespace Api\Objects;

use InvalidArgumentException;

/**
 * Проверки для класса BuildingStructure
 */
trait BuildingStructureValidate
{
  private array $iconBilding = ["building", "buildingMedium", "buildingSmall", "subbuilding"];
  private array $iconFloor = ["floor", "stairs"];
  private array $iconDoor = ["door", "hammer", "balance", "toilet"];
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
    return match ($this->helpers->formData["icon"]) {
      implode(',', $this->iconBilding) => $this->helpers->formData["icon"],
      default => $this->helpers->isErrorInfo(401, "Неверные параметры", "icon должен принимать одно из значений: building, buildingMedium, buildingSmall, subbuilding,
      floor, stairs, door, hammer, balance, toilet")
    };
  }

  /**
   * Праверка принадлежности 
   */
  private function validateAffiliation(): mixed
  {
    $param = $this->helpers->formData["affiliation"] ?? $this->helpers->isErrorInfo(400, "Неверные параметры", "не передан параметр affiliation");
    if ($this->helpers->formData["icon"] === "building" and $param != NULL) {
      $this->helpers->isErrorInfo(400,  "Неверные параметры", "При добавлении здания affiliation должен быть пустым");
    }
    //$this->helpers->validateINT($param, "affiliation");

    return match ($this->helpers->formData["icon"]) {
      "building", "buildingMedium", "buildingSmall", "subbuilding" => null,
      "floor", "stairs" => in_array($param, $this->selectBilding()),
      default => $this->helpers->isErrorInfo(401, "Неверные параметры", "affiliation принимает значение которое не получается проверить")
    };
  }

  private function selectBilding(): array
  {
    return array();
  }
}
