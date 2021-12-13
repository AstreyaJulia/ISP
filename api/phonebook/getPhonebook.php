<?php
    // необходимые HTTP-заголовки
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/core.php";

    $phonebookClass = new \Api\Objects\Phonebook($db);
    $padingClass = new \Api\Utilites\Paging();
    foreach ($phonebookClass->getGroup() as $key => $value) {
        $group[] = $value->id;
    }

    $primary_group = isset($_GET['filter']) ? explode(',', $_GET["filter"]) : $group;

    $phonebook["data"] = $phonebookClass->getSelect($primary_group, $from_record_num, $records_per_page);

    // подключим пагинацию
    $total_rows = $phonebookClass->count($primary_group);
    $page_url="getPhonebook.php?";
    $paging=$padingClass->getPaging($page, $total_rows, $records_per_page, $page_url);
    $phonebook["paging"]=$paging;

    // установим код ответа - 200 OK
    http_response_code(200);

    //время выполнения скрипта
    $phonebook["time"] = (microtime(true) - $start);

    // вывод в json-формате
    echo json_encode($phonebook, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);