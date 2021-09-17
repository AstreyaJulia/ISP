<?php
$title = "title Тестовой страницы";
$info = "Блок info для тестовой страницы";
$content = "";

//phpinfo();

//$dbh = ibase_connect($host, $username, $password, 'WIN1251');


/*$host = 'localhost:/path/to/your.gdb';

$dbh = ibase_connect($host, $username, $password);
$stmt = 'SELECT * FROM tblname';
$sth = ibase_query($dbh, $stmt);
while ($row = ibase_fetch_object($sth)) {
    echo $row->email, "\n";
}
ibase_free_result($sth);
ibase_close($dbh);*/

$host = 'local-192.168.0.254:C:\Data\Justice\UNI_WORK2003.GDB';
$username = 'SYSDBA';
$password = 'm';

$dbh = ibase_connect($host, $username, $password);
//Выбираем категории материалов
$stmt = 'SELECT c.prefix, c.name, (SELECT cc.name FROM catalogcontent cc WHERE cc.contentid = c.addinteger_1 AND catalogid = 5400) AS F1
				FROM catalogcontent c
				WHERE catalogid = 5401';
$sth = ibase_query($dbh, $stmt);
//Подготавливаем данные
/*echo '<table>';
while ($row = ibase_fetch_object($stm)) {
	echo '<tr><td>'.$row->PREFIX.'</td>
    <td>'.$row->NAME.'</td></tr>';
}
echo '</table>';*/


$ourDataJson = json_encode(mb_convert_encoding(ibase_fetch_object($sth), "utf8", "windows-1251"), JSON_UNESCAPED_UNICODE);
//Записываем в файл
file_put_contents('data/categories-material.json', $ourDataJson);

ibase_free_result($sth);
ibase_close($dbh);