<?php

namespace Api\Objects;

class Weather
{

  protected Helpers $helpers;

  public function __construct(
    Helpers $helpers = new \Api\Objects\Helpers()
  ) {
    $this->helpers = $helpers;
  }

  public function weatherForecast() {
    try {
      echo filemtime("../data/weather.json");
    } catch(\Exception $e) {
      $this->helpers::isErrorInfo(400, "Ошибка в переданных параметрах", $e);
    }
    
  }
}