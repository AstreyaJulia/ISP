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

/*
$opts = array(
    'socket' => array(
        'bindto' => '10.67.254.42:3128',
    ),
);


// create the context...
$context = stream_context_create($opts);

// ...and use it to fetch the data
echo file_get_contents('https://api.openweathermap.org/data/2.5/weather?lat=55.1066&lon=33.2425&appid=0590d73840a4e5980796c90f4f20e0a4&units=metric&lang=ru', false, $context);
*/