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
    $lat = strlen($this->helpers->lat) === 0 ? $this->helpers->isErrorInfo(400, "Я не знаю где ты находишься!!!",  "Какую погоду ты хочешь?"): $this->helpers->lat;
    $lon = strlen($this->helpers->lon) === 0 ? $this->helpers->isErrorInfo(400, "Я не знаю где ты находишься!!!",  "Какую погоду ты хочешь?"): $this->helpers->lon;

    $params = array(
      "appid" => OPEN_WEATHER_API_KEY,
      "lat" => $lat,
      "lon" => $lon
    );
    $file = "../../data/weather_{$params['lat']}x{$params['lon']}.json";
    $date = file_exists($file)? time() - filemtime($file) : 620;

    if ($date > 600) {
      $current = $this->helpers->sendGETtoProxy($params, OPEN_WEATHER_API_CURRENT);
      if (isset(json_decode($current)->lat)) {
        file_put_contents($file, $current, LOCK_EX);
        return $current;
      } else {
        return file_exists($file);
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
