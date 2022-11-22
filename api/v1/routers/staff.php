<?php
    if ($helpers->sudo === 1) {
        $staff = new \Api\Objects\Staff($helpers);
        $staff->responseStaff();
    } else {
        $helpers->isErrorInfo(401, "Недостаточно прав", "Отказанов доступе");
    }

    // Роутинг, основная функция
    function route($helpers) {}