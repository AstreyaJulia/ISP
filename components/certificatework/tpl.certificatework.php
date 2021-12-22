<main class="main-content scroll-y">
  <div class="ps-3 pe-3 ">
    <header class="main-content-header d-flex align-items-center justify-content-between flex-wrap">
      <div class="header-left d-flex align-items-center justify-content-between p-2">
        <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Назад"><i
            class="mdi mdi-24px mdi-arrow-left"></i></a>
        <p class="h5 main-content-title mb-0">Справка о работе судей</p>
      </div>
      <div class="header-right d-flex align-items-center justify-content-between p-2">
        <nav aria-label="breadcrumb" class="align-items-center d-xxl-flex d-xl-flex d-md-flex d-sm-none d-none">
          <ol class="breadcrumb d-flex align-items-center mb-0">
            <li class="breadcrumb-item p-2">
              <a class="p-2 me-2" href="/" data-bs-toggle="tooltip" data-bs-placement="top"
                 title="Главная страница">
                <i class="mdi mdi-home-outline"></i>
              </a>
            </li>
            <li class="breadcrumb-item p-2">
              <a class="p-2" data-bs-toggle="tooltip" data-bs-placement="top"
                 title="Справка о работе судей">Справка о работе судей
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
    <div class="row flex-wrap">
        <table class="table dataTable sort table-users">
		  <thead>
		  <tr>
		    <th rowspan="2">№ п/п</th>
		    <th rowspan="2">СУДЬЯ (фамилия, инициалы)</th>
		    <th colspan="3">Окончено дел</th>
		    <th colspan="3">Рассмотрено дел в апелляционном порядке</th>
		    <th colspan="6">Рассмотрено материалов</th>
		    <th rowspan="2">всего дел и материалов (сумма граф 3-14,17)</th>
		    <th rowspan="2">Рассмотрено материалов по которым отказано в принятии заявлений, которые оставлены без движения</th>
		    <th rowspan="2">Рассмотрено администра-тивных материалов по жалобам на постановле-ния по делам об адм. правонаруш.</th>
		</tr>
		<tr>
		    <th>уголовных</th>
		    <th>гражданских</th>
		    <th>административных</th>
		    <th>уголовных</th>
		    <th>гражданских</th>
		    <th>административных</th>
		    <th>В порядке ст. 108 УПК РФ</th>
		    <th>В порядке ст. 109 УПК РФ</th>
		    <th>В порядке ст. 125 УПК РФ</th>
		    <th>В порядке ст. 165 УПК РФ</th>
		    <th>В порядке ст. 397 УПК РФ</th>
		    <th>В порядке ст. 398 УПК РФ</th>
		</tr>
		<tr>
			<th></th>
			<th>2</th>
			<th>3</th>
			<th>4</th>
			<th>5</th>
			<th>6</th>
			<th>7</th>
			<th>8</th>
			<th>9</th>
			<th>10</th>
			<th>11</th>
			<th>12</th>
			<th>13</th>
			<th>14</th>
			<th>15</th>
			<th>16</th>
			<th>17</th>
		</tr>
		</thead>
		<tbody>
		  <?php foreach ($row->data as $value => $key): ?>
		  	<tr>
			  	<td><?= $i++ ?></td>
			  	<td><?= $key->fullname ?></td>
			  	<td><?= $key->col_3 ?></td>
			  	<td><?= $key->col_4 ?></td>
			  	<td><?= $key->col_5 ?></td>
			  	<td><?= $key->col_6 ?></td>
			  	<td><?= $key->col_7 ?></td>
			  	<td><?= $key->col_8 ?></td>
			  	<td><?= $key->col_9 ?></td>
			  	<td><?= $key->col_10 ?></td>
			  	<td><?= $key->col_11 ?></td>
			  	<td><?= $key->col_12 ?></td>
			  	<td><?= $key->col_13 ?></td>
			  	<td><?= $key->col_14 ?></td>
			  	<td><?= $key->col_15 ?></td>
			  	<td><?= $key->col_16 ?></td>
			  	<td><?= $key->col_17 ?></td>
		  	</tr>
		  <?php endforeach ?>
		</tbody>
		</table>
    </div>
  </div>
</main>