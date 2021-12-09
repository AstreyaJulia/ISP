<?php
    // необходимые HTTP-заголовки
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    // показывать сообщения об ошибках
    //ini_set('display_errors', 1);
    //error_reporting(E_ALL);


    require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/core.php";


    $phonebookClass = new \Api\Objects\Phonebook($db);
    $padingClass = new \Api\Utilites\Paging();
    foreach ($phonebookClass->getGroup() as $key => $value) {
        $group[] = $value->id;
    }

    $primary_group = $_GET['group'] ?? $group;

    $phonebook["data"] = $phonebookClass->getSelect($primary_group, $from_record_num, $records_per_page);

    // подключим пагинацию
    $total_rows=44;
    $page_url="getPhonebook.php?";
    $paging=$padingClass->getPaging($page, $total_rows, $records_per_page, $page_url);
    $phonebook["paging"]=$paging;

    // установим код ответа - 200 OK
    http_response_code(200);

    //время выполнения скрипта
    $phonebook["time"] = (microtime(true) - $start);

    // вывод в json-формате
    echo json_encode($phonebook);