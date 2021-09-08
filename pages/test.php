<?php
$title = "title Тестовой страницы";
$info = "Блок info для тестовой страницы";
$content = "";


$data = $db->run("SELECT * FROM sdc_calendar where (user_id in (0, 1) and calendar in('Primary', 'Danger', 'Warning', 'Success', 'Info') and `freq` IS NOT NULL) UNION ALL 
                  SELECT * FROM sdc_calendar where (user_id in (0, 1) and calendar in('Primary', 'Danger', 'Warning', 'Success', 'Info') and `freq` IS NULL and start >= '2021-08-30' AND end <= '2021-10-10')")->fetchAll();


var_dump($data);



