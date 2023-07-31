<?php

namespace Api\Objects;

use InvalidArgumentException;

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

  private function validateStartDate() {
    $param = $this->helpers->formData['start'] ?? "";
    $format = "Y-m-d";
    $d = \DateTime::createFromFormat($format, $param);

    if (!($d && $d->format($format) === $param)) {
        $this->helpers::isErrorInfo(400, "Неверные параметры", "Ожидаю start в формате Y-m-d Получаю: $param");
    }

    return $d->format("Y-m-d");
  }
  
  private function validateEndDate() {
    $param = $this->helpers->formData['end'] ?? "";
    $format = "Y-m-d";
    $d = \DateTime::createFromFormat($format, $param);

    if (!($d && $d->format($format) === $param)) {
        $this->helpers::isErrorInfo(400, "Неверные параметры", "Ожидаю end в формате Y-m-d Получаю: $param");
    }

    return $d->format("Y-m-d");
  }


}
