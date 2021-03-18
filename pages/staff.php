<?php

	$title = "Список сотрудников";
	$desc = "Описание чего-то коротко";
	//получаем пользователей
	$staff = $link->query("SELECT fullname, phone, position, room FROM sdc_user_attributes")->fetchAll(PDO::FETCH_ASSOC);

	$content_4 = '<div class="row">
					<div class="col-lg-12">
						<div class="card">
							<div class="card-header text-uppercase text-primary">Судьи</div>
							<div class="card-body">
								<div class="table-responsive">
									<table class="table">
										<thead class="thead-primary">
											<tr>
												<th scope="col">#</th>
												<th scope="col">ФИО</th>
												<th scope="col">Телефон</th>
												<th scope="col">Кабинет</th>
											</tr>
										</thead>
										<tbody>';
	$i = 1;
	foreach ($staff as $key => $value) {
		if ($value["position"] == 1 or $value["position"] == 2 or $value["position"] == 3 or $value["position"] == 4 ) {
			$content_4 .= '<tr>
							<th scope="row">'.$i++.'</th>
							<td>'.$value["fullname"].'</td>
							<td>'.$value["phone"].'</td>
							<td>'.$value["room"].'</td>
						</tr>';
		}
	}
	$content_4 .= "</tbody></table></div></div></div></div></div>";
	
	$content_5 = '<div class="row">
					<div class="col-lg-12">
						<div class="card">
							<div class="card-header text-uppercase text-primary">Помощники</div>
							<div class="card-body">
								<div class="table-responsive">
									<table class="table">
										<thead class="thead-primary">
											<tr>
												<th scope="col">#</th>
												<th scope="col">ФИО</th>
												<th scope="col">Телефон</th>
												<th scope="col">Кабинет</th>
											</tr>
										</thead>
										<tbody>';
	$i = 1;
	foreach ($staff as $key => $value) {
		if ($value["position"] == 5 ) {
			$content_5 .= '<tr>
							<th scope="row">'.$i++.'</th>
							<td>'.$value["fullname"].'</td>
							<td>'.$value["phone"].'</td>
							<td>'.$value["room"].'</td>
						</tr>';
		}
	}
	$content_5 .= "</tbody></table></div></div></div></div></div>";
	
	$content_6 = '<div class="row">
					<div class="col-lg-12">
						<div class="card">
							<div class="card-header text-uppercase text-primary">Секретари судебного заседания</div>
							<div class="card-body">
								<div class="table-responsive">
									<table class="table">
										<thead class="thead-primary">
											<tr>
												<th scope="col">#</th>
												<th scope="col">ФИО</th>
												<th scope="col">Телефон</th>
												<th scope="col">Кабинет</th>
											</tr>
										</thead>
										<tbody>';
	$i = 1;
	foreach ($staff as $key => $value) {
		if ($value["position"] == 6 ) {
			$content_6 .= '<tr>
							<th scope="row">'.$i++.'</th>
							<td>'.$value["fullname"].'</td>
							<td>'.$value["phone"].'</td>
							<td>'.$value["room"].'</td>
						</tr>';
		}
	}
	$content_6 .= "</tbody></table></div></div></div></div></div>";

	$content_7 = '<div class="row">
					<div class="col-lg-12">
						<div class="card">
							<div class="card-header text-uppercase text-primary">Отдел обеспечения судопроизводства</div>
							<div class="card-body">
								<div class="table-responsive">
									<table class="table">
										<thead class="thead-primary">
											<tr>
												<th scope="col">#</th>
												<th scope="col">ФИО</th>
												<th scope="col">Телефон</th>
												<th scope="col">Кабинет</th>
											</tr>
										</thead>
										<tbody>';
	$i = 1;
	foreach ($staff as $key => $value) {
		if ($value["position"] == 7 or $value["position"] == 8 or $value["position"] == 9 or $value["position"] == 10 or $value["position"] == 11 or $value["position"] == 12 or $value["position"] == 13 or $value["position"] == 14 or $value["position"] == 15 or $value["position"] == 16 or $value["position"] == 17 or $value["position"] == 18 or $value["position"] == 19) {
			$content_7 .= '<tr>
							<th scope="row">'.$i++.'</th>
							<td>'.$value["fullname"].'</td>
							<td>'.$value["phone"].'</td>
							<td>'.$value["room"].'</td>
						</tr>';
		}
	}
	$content_7 .= "</tbody></table></div></div></div></div></div>";
	
	$content = $content_4.$content_5.$content_6.$content_7;
?>