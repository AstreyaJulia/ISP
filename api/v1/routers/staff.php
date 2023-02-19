<?php

    if ($helpers->sudo === 1) {
        $staff = new \Api\Objects\Staff($helpers);
        $staff->response();
    } else {
        $helpers->isErrorInfo(401, "Недостаточно прав", "Отказанов доступе");
    }