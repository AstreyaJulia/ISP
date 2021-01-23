<?php

	function showPageTable($link, $info) {
		$query = "SELECT * FROM sdc_calendar";
		$result = mysqli_query($link, $query) or die(mysqli_error($link));
		for ($data =[]; $row = mysqli_fetch_assoc($result); $data[] = $row);
		$content = "<table>
						<tr>
							<th>id</th>
							<th>title</th>
							<th>description</th>
							<th>start</th>
							<th>end</th>
							<th>allDay</th>
							<th>properties</th>
							<th>freq</th>
							<th>tzid</th>
							<th>count</th>
							<th>interval</th>
							<th>byweekday</th>
							<th>bymonth</th>
							<th>duration</th>
							<th>color</th>
							<th>url</th>
							<th>edit</th>
							<th>delete</th>
						</tr>";
		foreach ($data as $calendar) {
			$content .= "<tr>
							<td>{$calendar['title']}</td>
							<td>{$calendar['description']}</td>
							<td>{$calendar['start']}</td>
							<td>{$calendar['end']}</td>
							<td>{$calendar['allDay']}</td>
							<td>{$calendar['properties']}</td>
							<td>{$calendar['freq']}</td>
							<td>{$calendar['tzid']}</td>
							<td>{$calendar['count']}</td>
							<td>{$calendar['interval']}</td>
							<td>{$calendar['byweekday']}</td>
							<td>{$calendar['bymonth']}</td>
							<td>{$calendar['duration']}</td>
							<td>{$calendar['color']}</td>
							<td>{$calendar['url']}</td>
							<td><a href=\"\">edit</a></td>
							<td><a href=\"?delete={$calendar['id']}\">delete</a></td>
						</tr>";
		}
		$content .= "</table>";
		$title = "Ежедневник";


		include "layout.php";
	}

	function deletePage($link) {
		if (isset($_GET["delete"])){
			$id = $_GET["delete"];
			$query = "DELETE FROM sdc_calendar WHERE id = $id";
			$result = mysqli_query($link, $query) or die (mysqli_error($link));
			return true;
		} else {
			return false;
		}
		
	}

	$info = "";
	if (deletePage($link)){
		$info = "Запись удалена успешно";
	}

	showPageTable($link, $info);
	

?>

