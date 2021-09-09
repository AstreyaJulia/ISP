<?php
	$start = microtime(true);

	error_reporting(E_ALL);
	ini_set("display_errors", "on");

	try {
        $fire = new PDO('firebird:dbname=192.168.0.254:C:\Data\Justice\UNI_WORK2003.GDB;dialect=1', 'SYSDBA', 'm');
        $fire->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
      print "Error!: " . $e->getMessage();
			die();
  }
    //Выбираем категории материалов
    $row = $fire->query("SELECT c.prefix, c.name, (SELECT cc.name FROM catalogcontent cc WHERE cc.contentid = c.addinteger_1 AND catalogid = 5400) AS F1
					FROM catalogcontent c
					WHERE catalogid = 5401")->fetchAll(PDO::FETCH_ASSOC);
    //Подготавливаем данные
    $ourDataJson = json_encode(mb_convert_encoding($row, "utf8", "windows-1251"), JSON_UNESCAPED_UNICODE);
    //Записываем в файл
    file_put_contents('../data/categories-material.json', $ourDataJson);

    //Выбираем категории Гр.+Адм.
    $dat = date("d.m.Y");
    $row = $fire->query("SELECT c.prefix, c.name, c.parent_va_code, C.va_code FROM UNI_SHOW_CATEGORY323_TREE(CAST('$dat' AS DATE)) C")->fetchAll(PDO::FETCH_ASSOC);
		//Подготавливаем данные
    $ourDataJson = json_encode(mb_convert_encoding($row, "utf8", "windows-1251"), JSON_UNESCAPED_UNICODE);
    //Записываем в файл
    file_put_contents('../data/categories-civil-cases.json', $ourDataJson);

    //$row->closeCursor(); // Закрываем курсор
    
    //var_dump(mb_convert_encoding($row, "utf8", "windows-1251"));




echo '<div style="text-align:right;">Время выполнения скрипта: '.(microtime(true) - $start).' сек.</div>';