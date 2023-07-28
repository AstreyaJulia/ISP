<?php

namespace Api\Objects;

use InvalidArgumentException;

/**
 * Календарь
 */
class Calendar
{
  use Objects, CalendarValidate {
    CalendarValidate::__construct insteadof Objects;
  }

  private function events():array
  {
    $userEvents = array();
    $startDate = $this->validateStartDate();
    $endDate = $this->validateEndDate();

    $userEvents = $this->userEvents($startDate, $endDate);


    foreach ($this->userBirthday($startDate, $endDate) as $row) {
      $userEvents[] = [
        'id' => '',
        'title' => 'День рождения '. $row['fullname'],
        'start' => $row['dob'],
        'end' => $row['dob'],
        'allDay' => 'true',
        'calendar' => '',
        'description' => 'Поздравляем!!! Исполняется '. $row['age'],
        'display' => 'birthday',
        'users' => '',
        'creator' => ''
      ];
    }
    return $userEvents;

    //return $userBirthday;

  }

  /**
   * События пользователя
   * 
   * @param string $startDate (YYYY-MM-DD)
   * @param string $endDate (YYYY-MM-DD)
   * 
   * @return array 
   */
  private function userEvents($startDate, $endDate):array
  {
    $param = ($this->helpers->sudo == 1)? '' : "AND (creator = {$this->helpers->id} or FIND_IN_SET({$this->helpers->id}, users) != 0)";
    $sql = "SELECT
              *,
              IF(allDay = 1, 'true', 'false') AS allDay
            FROM sdc_calendar
            WHERE 
              (
                (DATE(startDate) BETWEEN '$startDate' AND '$endDate')
                OR
                (DATE(endDate) BETWEEN '$startDate' AND '$endDate')
              )
              $param";
    return $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
  }

  /**
   * Дни рождения рабтающих сотрудников
   * 
   * @param string $startDate (YYYY-MM-DD)
   * @param string $endDate (YYYY-MM-DD)
   * 
   * @return array 
   */
  private function userBirthday($startDate, $endDate):array {
    $sql = "SELECT
              fullname,
              dob,
              YEAR(CURRENT_DATE()) - YEAR(dob) as age 
            FROM `sdc_user_attributes`
            WHERE room IS NOT NULL AND 
            (
              (
                (date_format('$startDate','%m-%d') < date_format('$endDate','%m-%d'))
                AND
                (date_format(dob,'%m-%d') between date_format('$startDate','%m-%d') AND date_format('$endDate','%m-%d'))
              )
              OR
              (
                (date_format('$startDate','%m-%d') > date_format('$endDate','%m-%d'))
                AND
                (
                  (date_format(dob,'%m-%d') between date_format('$startDate','%m-%d') AND date_format('2021-12-31','%m-%d'))
                  OR
                  (date_format(dob,'%m-%d') between date_format('2021-01-01','%m-%d') AND date_format('$endDate','%m-%d'))
                )
              )
            )";
    return $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
  }

  /**
   * Обрабатываем приходящие GET-запросы. 
   */
  private function metodGET(): array
  {
    return match (count($this->helpers->urlData)) {
      0 => $this->helpers->wrap($this->events(), "data"),
      default => $this->helpers->isErrorInfo(400, "Ошибка в GET-запросе", "Неверные параметры")
    };
  }
}
