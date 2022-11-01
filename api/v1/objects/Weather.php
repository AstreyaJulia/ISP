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

  public function weatherForecast($params, $host) {
    $file = "../../data/weather.json";
    $date = time() - filemtime($file);
    if ($date > 600) {
      $current = $this->helpers->sendGETtoProxy($params, $host);
      file_put_contents("../../data/weather.json", $current, LOCK_EX);
      echo $current;
    } else {
      echo "пусто";
      echo file_get_contents($file, true);
    }

  

    
  }
}