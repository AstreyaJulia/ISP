<?php

namespace Api\Objects;

use InvalidArgumentException;
use DateTime;

/**
 * Календарь
 */
class Calendar
{
  use Objects, CalendarValidate {
    CalendarValidate::__construct insteadof Objects;
  }

  private function events()
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
        'calendar' => 'red',
        'description' => 'Поздравляем!!! Исполняется '. $row['age'],
        'display' => 'birthday',
        'users' => '',
        'creator' => ''
      ];
    }

    $userEvents[] = $this->weekendHolidayArray($this->weekendHoliday($startDate, $endDate));







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
              id,
              title,
              startDate AS start,
              endDate AS end,
              IF(allDay = 1, 'true', 'false') AS allDay,
              calendar,
              description,
              display,
              users,
              creator
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
   * Получаем данные о праздничных днях
   * и выходных через Proxy-сервер
   * судебного департамента Смол. обл.
   * 
   * @param string $startDate (YYYY-MM-DD)
   * @param string $endDate (YYYY-MM-DD)
   * 
   * @return string
   */
  private function weekendHoliday($startDate, $endDate): string
  {
    if (in_array(DateTime::createFromFormat('Y-m-d', $startDate)->format('m'), ['12']) && in_array(DateTime::createFromFormat('Y-m-d', $endDate)->format('m'), ['01', '02'])) {
      $year = DateTime::createFromFormat('Y-m-d', $endDate)->format('Y');
    }
    else {
      $year = DateTime::createFromFormat('Y-m-d', $startDate)->format('Y');
    }
    $path = 'http://xmlcalendar.ru/data/ru/'.$year.'/calendar.json';
    $file = "../../data/weekend/$year.json";

    $date = (file_exists($file))? time() - filemtime($file) : 900000;

    if ($date > 864000) {
      $current = $this->helpers->sendGETtoProxy(array(), $path);
      if (isset(json_decode($current)->year)) {
        file_put_contents($file, $current, LOCK_EX);
        return $current;
      } else {
        return file_get_contents($file, true);
      }
    } else {
      return file_get_contents($file, true);
    }
  }

  /**
   * Преобразуем полученную строку JSON с выходными днями в массив
   * 
   * @param string $json 
   * 
   * @return array
   */
  private function weekendHolidayArray(string $json):array {

      $row = json_decode($json);
      if (isset($row->year)) {
        foreach ($row->months as $value) {
          $days = explode(',', $value->days);
          foreach ($days as $day) {
            if ($day == rtrim($day, "*")){
                    $title = "";
                    $calendar = "dayoff";
            } else {
                    $title = "Сокращенный рабочий день";
                    $calendar = "short";
            }
  
            $date = $row->year."-".$this->addNol($value->month)."-".$this->addNol(rtrim($day, "*"));
            $array[] = [
              'id' => '',
              'title' => $title,
              'start' => $date." 00:00:00",
              'end' => $date." 23:59:59",
              'allDay' => "true",
              'calendar' => $calendar,
              'description' => '',
              'display' => 'background',
              'users' => '',
              'creator' => ''
            ];
          }
        }
      } else {
        $array = array();
      }

      return $array;
  }

  /**
   * Добавляем к месяцу и дню 0
   * 
   * 
   */
  private function addNol($str) {
    if (strlen($str) == 1) {
      return '0'.$str;
    } else {
      return $str;
    }
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
