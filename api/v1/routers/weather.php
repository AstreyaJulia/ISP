<?php

$weather = new \Api\Objects\Weather($helpers);
$params = array(
    "lat" => $CITY_LAT,
    "lon" => $CITY_LON,
    "appid" => $OPEN_WEATHER_API_KEY,
    "units" => 'metric',
    "lang" => 'ru'
);

$weather->weatherForecast($params, $OPEN_WEATHER_API_CURRENT);

// Роутинг, основная функция
function route($helpers) {}