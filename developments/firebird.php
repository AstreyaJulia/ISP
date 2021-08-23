
<html lang="ru">
	<head>
    	<meta charset="utf-8">
    </head>
<?php
	$start = microtime(true);
/* Запрос для категорий гражданских дел

select c.name, c.prefix, c.parent_va_code, 
  (select cc.name from catalogcontent cc where cc.contentid = c.addinteger_10) as f1 
from uni_show_category323_tree(:on_date) c

*/

	error_reporting(E_ALL);
	ini_set("display_errors", "on");

	try {
            $fire = new PDO('firebird:dbname=192.168.0.254:C:\Data\Justice\UNI_WORK2003.GDB;dialect=1', 'SYSDBA', 'm');
            $fire->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        } catch (PDOException $e) {
            print "Error!: " . $e->getMessage();
			die();
        }

        $row = $fire->query("SELECT c.prefix, c.name, (SELECT cc.name FROM catalogcontent cc WHERE cc.contentid = c.addinteger_1 AND catalogid = 5400) AS F1
							FROM catalogcontent c
							WHERE catalogid = 5401")->fetchAll(PDO::FETCH_ASSOC);
        $ourDataPHP = serialize(mb_convert_encoding($row, "utf8", "windows-1251"));
        file_put_contents('../data/categories-material.php', $ourDataPHP);
        


        $ourDataJson = json_encode(mb_convert_encoding($row, "utf8", "windows-1251"));
        file_put_contents('../data/categories-material.json', $ourDataJson);

        //$row->closeCursor(); // Закрываем курсор
        
        //var_dump(mb_convert_encoding($row, "utf8", "windows-1251"));

	//var_dump(pdo_drivers());
	//$dsn = 'firebird:dbname=192.168.0.254:C:\Data\Justice\UNI_WORK2003.GDB;charset=utf8;';
	
	/*$dsn = 'firebird:dbname=192.168.0.254:C:\Data\Justice\UNI_WORK2003.GDB;';
	$username = 'SYSDBA';
	$password = 'm';
	try {
	  // Подключение к БД
	  $dbh = new \PDO($dsn, $username, $password, [\PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION]);
	  $dat = date("d.m.Y");

	  $sql = "SELECT c.prefix, c.name FROM catalogcontent c WHERE catalogid = 5401";

	
	  
	  // Выполняем запрос
	  $query = $dbh->query($sql);
	  // Получаем результат построчно в виде объекта
	  echo '<table>
	  				<tr>
	  					<th>PREFIX</th>
	  					<th>NAME</th>
	  				</tr>';
	  while ($row = $query->fetch(\PDO::FETCH_OBJ)) {
	  	echo '<tr>
				  		<td>'.mb_convert_encoding($row->PREFIX, "utf8", "windows-1251").'</td>
				  		<td>'.mb_convert_encoding($row->NAME, "utf8", "windows-1251").'</td>
				  	</tr>';
				  	
	  }
	  echo '</table>';*/


	  /*while ($row = $query->fetch(\PDO::FETCH_OBJ)) {
	  	echo "<pre>";
	  	var_dump($row);

	  }*/





/*

	  $query->closeCursor(); // Закрываем курсор
	} catch (\PDOException $e) {
	  echo $e->getMessage();
	}*/




	/*try {
		$link = new PDO('firebird:dbname=192.168.0.254:C:\Data\Justice\UNI_WORK2003.GDB;charset=utf8;', 'SYSDBA', 'm');
		$link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    		$link->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
	} catch (PDOException $e) {
		print "Error!: " . $e->getMessage();
		die();
	}*/



echo '<div style="text-align:right;">Время выполнения скрипта: '.(microtime(true) - $start).' сек.</div>';