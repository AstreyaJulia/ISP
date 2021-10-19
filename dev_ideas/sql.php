<?php

// Кол-во всех посещений за текущий день. current_date - сегодняшняя дата
select count (*)
from sdc_visits
where date_format(dtime,'%m-%d')  like  date_format(current_date,'%m-%d')

// Уникальные пользователи за тек. день
select COUNT(DISTINCT UserID)
from sdc_visits
where date_format(dtime,'%m-%d')  like  date_format(current_date,'%m-%d')

