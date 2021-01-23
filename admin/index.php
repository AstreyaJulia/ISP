<?php
	error_reporting(E_ALL);
	ini_set("display_errors", "on");

	$host = "localhost";
	$user = "chainik";
	$password = "qwer";
	$dbName = "isp";

	$link = mysqli_connect($host, $user, $password, $dbName);
	mysqli_query($link, "SET NAMES 'utf8'");

	function showPageTable($link, $info) {
		$query = "SELECT id, title, url FROM sdc_pages WHERE url !='404'";
		$result = mysqli_query($link, $query) or die(mysqli_error($link));
		for ($data =[]; $row = mysqli_fetch_assoc($result); $data[] = $row);
		$content = "<table>
						<tr>
							<th>title</th>
							<th>url</th>
							<th>edit</th>
							<th>delete</th>
						</tr>";
		foreach ($data as $page) {
			$content .= "<tr>
							<td>{$page['title']}</td>
							<td>{$page['url']}</td>
							<td><a href=\"\">edit</a></td>
							<td><a href=\"?delete={$page['id']}\">delete</a></td>
						</tr>";
		}
		$content .= "</table>";
		$title = "Страница админа";


		include "layout.php";
	}

	function deletePage($link) {
		if (isset($_GET["delete"])){
			$id = $_GET["delete"];
			$query = "DELETE FROM sdc_pages WHERE id = $id";
			$result = mysqli_query($link, $query) or die (mysqli_error($link));
			return true;
		} else {
			return false;
		}
		
	}

	$info = "";
	if (deletePage($link)){
		$info = "Страница удалена успешно";
	}

	showPageTable($link, $info);
	



