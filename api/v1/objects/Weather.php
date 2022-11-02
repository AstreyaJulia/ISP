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
      if(isset(json_decode($current)->cod) and (json_decode($current)->cod === 200)) {
        file_put_contents($file, $current, LOCK_EX);
        echo $current;
      } else {
        echo file_get_contents($file, true);
      }
    } else {
      echo file_get_contents($file, true);
    }
  }
}