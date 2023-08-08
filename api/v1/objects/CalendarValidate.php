<?php

namespace Api\Objects;

use InvalidArgumentException;
use DateTime;

/**
 * Проверки для класса Calendar
 */
trait CalendarValidate
{


  public function __construct(
    protected Helpers $helpers = new \Api\Objects\Helpers()
  ) {
    $this->helpers = $helpers;
  }

  private function validateStartDate()
  {
    $param = $this->helpers->formData['start'] ?? "";
    $format = "Y-m-d";
    $d = \DateTime::createFromFormat($format, $param);

    if (!($d && $d->format($format) === $param)) {
      $this->helpers::isErrorInfo(400, "Неверные параметры", "Ожидаю start в формате Y-m-d Получаю: $param");
    }

    return $d->format("Y-m-d");
  }

  private function validateEndDate()
  {
    $param = $this->helpers->formData['end'] ?? "";
    $format = "Y-m-d";
    $d = \DateTime::createFromFormat($format, $param);

    if (!($d && $d->format($format) === $param)) {
      $this->helpers::isErrorInfo(400, "Неверные параметры", "Ожидаю end в формате Y-m-d Получаю: $param");
    }

    return $d->format("Y-m-d");
  }

  /**
   * Проверяем параметры для добавления записи в таблицу
   * sdc_calendar
   * 
   * @return array
   */
  private function validateEvent():array
  {
    $startDate = $this->startDate();
    $endDate = $this->endDate();
    $this->validateDate($startDate, $endDate);
    return array(
      "title" => $this->title(),
      "startDate" => $startDate,
      "endDate" => $endDate,
      "allDay" => $this->allDay(),
      "calendar" => $this->calendar(),
      "description" => $this->description(),
      "display" => $this->display(),
      "users" => $this->users(),
      "creator" => $this->helpers->id
    );
  }

  /**
   * Проверяем id
   * 
   * @param string $tableName наименование таблицы
   * 
   * @return int id проверяемой записи
   */
  private function id($tableName):int
  {

    $param = $this->helpers->formData["id"] ?? "";

    $this->helpers->validateINT($param, "id");

    $sql = "SELECT
                COUNT(id)
            FROM $tableName
            WHERE id = ?";
    $row = $this->helpers->db->run($sql, [$param])->fetchColumn();
    if($row !== 1){
        $this->helpers->isErrorInfo(400, "Неверные параметы", "Запись с id $param отсутствует в базе");
    }
    return $param;
  }

  private function title()
  {
    $param = !empty($this->helpers->formData["title"]) ? $this->helpers->formData["title"] : $this->helpers::isErrorInfo(400, "Неверные параметры", "Ожидаю title.");
    return $param;
  }

  /**
   * Проверяем начальную дату
   * 
   * @return string
   */
  private function startDate():string
  {
    $startDate = $this->helpers->formData["start"] ?? "";
    $startDate = $this->helpers->validateDate($startDate, "Y-m-d H:i:s", "start");

    return $startDate;
  }

  /**
   * Проверяем конечную дату
   * 
   * @return string
   */
  private function endDate():string
  {
    $endDate = $this->helpers->formData["end"] ?? "";
    $endDate = $this->helpers->validateDate($endDate, "Y-m-d H:i:s", "end");

    return $endDate;
  }

  /**
   * Начальная дата должна быть меньше конечной
   */
  private function validateDate($start, $end):void
  {
    ($start > $end) ? $this->helpers::isErrorInfo(400, "Неверные параметры", "Начальная дата должна быть меньше конечной"): true;
  }

  private function allDay():int
  {
    $param = $this->helpers->formData["allDay"] ?? "";
    if(!in_array($param, [0,1])){
        $this->helpers->isErrorInfo(400, "Неверные параметы", "Ожидаю в allDay целое число. 0 или 1");
    }
    return $param;
  }

  private function calendar():int
  {
    $param = $this->helpers->formData["calendar"] ?? "";

    $this->helpers->validateINT($param, "calendar");
    $param = ($this->helpers->isExistsById("sdc_calendar_category", $param)) ? $param: $this->helpers->isErrorInfo(400, "Неверные параметы", "Нет такой категории");
    return $param;
  }

  private function description():string
  {
    $param = isset($this->helpers->formData["description"]) ? $this->helpers->formData["description"] : $this->helpers::isErrorInfo(400, "Неверные параметры", "Ожидаю description.");
    return $param;
  }

  private function display():string
  {
    $param = isset($this->helpers->formData["display"]) ? $this->helpers->formData["display"] : $this->helpers::isErrorInfo(400, "Неверные параметры", "Ожидаю display.");
    return $param;
  }


  private function users():string
  {
    $param = isset($this->helpers->formData["users"]) ? $this->helpers->formData["users"] : $this->helpers::isErrorInfo(400, "Неверные параметры", "Ожидаю users.");
    return $param;
  }

  /**
   * Если категория используется в таблице
   * sdc_calendar запрещаем её удалять
   */
  private function validateExistCategory():void
  {
    $sql = "SELECT
                COUNT(id)
            FROM sdc_calendar
            WHERE calendar = ?";
    $row = $this->helpers->db->run($sql, [$this->helpers->formData["id"]])->fetchColumn();
    if($row !== 0){
        $this->helpers->isErrorInfo(400, "Неверные параметы", "Невозможно удалить категорию. Она используется");
    }
  }

}
