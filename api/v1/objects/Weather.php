<?php

namespace Api\Objects;

class Weather
{

  use Objects;

  /**
   * Получаем данные о погоде через
   * Proxy-сервер судебного департамента Смол. обл.
   * 
   * @return string
   */
  private function weatherForecast(): string
  {
    $params = array(
      "appid" => OPEN_WEATHER_API_KEY,
      "lat" => $this->helpers->lat,
      "lon" => $this->helpers->lon
    );
    $file = "../../data/weather_{$params['lat']}x{$params['lon']}.json";
    $date = file_exists($file)? time() - filemtime($file) : 620;

    if ($date > 600) {
      $current = $this->helpers->sendGETtoProxy($params, OPEN_WEATHER_API_CURRENT);
      if (isset(json_decode($current)->lat)) {
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
   * Обрабатываем приходящие GET-запросы.
   * 
   * @return mixed
   */
  private function metodGET(): mixed
  {
    return json_decode($this->weatherForecast());
  }
}
