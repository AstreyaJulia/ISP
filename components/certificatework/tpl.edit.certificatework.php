<main class="main-content scroll-y">
  <div class="p-3 pt-0">
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
      <div class="col-xxl-12 col-xl-12 col-m-12 col-s-12 col-sm-12 col-12">
        <div class="card">
          <div class="table-responsive">
            <form action="" method="post">

            <table class="table table-bordered">
              <thead>
              <tr>
                <th rowspan="2" class="text-center">№<br>п/п</th>
                <th rowspan="2" class="text-center"><span>Судья</span><br><span>(фамилия, инициалы)</span></th>
                <th colspan="3" class="text-center">Окончено дел</th>
                <th colspan="3" class="text-center"><span>Рассмотрено дел</span><br><span>в ап. порядке</span></th>
                <th colspan="6" class="text-center">Рассмотрено материалов</th>
                <th rowspan="2" class="rotate-90" style="max-width: 100px; min-width: 50px"><span style="max-height: 250px; max-width: 100px; min-width: 100px">всего дел и материалов (сумма граф 3-14,17)</th>
                <th rowspan="2" class="rotate-90" style="max-width: 100px; min-width: 50px"><span style="max-height: 250px; max-width: 100px; min-width: 100px">Рассмотрено материалов по которым отказано в принятии заявлений, которые оставлены без движения</span></th>
                <th rowspan="2" class="rotate-90" style="max-width: 100px; min-width: 50px"><span style="max-height: 250px; max-width: 100px; min-width: 100px">Рассмотрено административных материалов по жалобам на постановления по делам об адм. правонаруш.</span></th>
              </tr>
              <tr>
                <th class="rotate-90 text-center"><span>уголовных</span></th>
                <th class="rotate-90 text-center"><span>гражданских</span></th>
                <th class="rotate-90 text-center"><span>административных</span></th>
                <th class="rotate-90 text-center"><span>уголовных</span></th>
                <th class="rotate-90 text-center"><span>гражданских</span></th>
                <th class="rotate-90 text-center"><span>административных</span></th>
                <th class="rotate-90 text-center"><span>В порядке ст. 108 УПК</span></th>
                <th class="rotate-90 text-center"><span>В порядке ст. 109 УПК</span></th>
                <th class="rotate-90 text-center"><span>В порядке ст. 125 УПК</span></th>
                <th class="rotate-90 text-center"><span>В порядке ст. 165 УПК</span></th>
                <th class="rotate-90 text-center"><span>В порядке ст. 397 УПК</span></th>
                <th class="rotate-90 text-center"><span>В порядке ст. 398 УПК</span></th>
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
                <tbody class="cert-table">
                <?php foreach ($row->data as $key => $value): ?>
                  <tr>
                    <td><?= $i++ ?></td>
                    <td><?= $value->USERNAME ?><input style="display:none" name="judges[<?= $i-2 ?>]" value="<?= $value->idGAS ?>"></td>
                    <td><input class="form-control" name="col_3[<?= $i-2 ?>]" value="<?= $value->col_3 ?>"></td>
                    <td><input class="form-control" name="col_4[<?= $i-2 ?>]" value="<?= $value->col_4 ?>"></td>
                    <td><input class="form-control" name="col_5[<?= $i-2 ?>]" value="<?= $value->col_5 ?>"></td>
                    <td><input class="form-control" name="col_6[<?= $i-2 ?>]" value="<?= $value->col_6 ?>"></td>
                    <td><input class="form-control" name="col_7[<?= $i-2 ?>]" value="<?= $value->col_7 ?>"></td>
                    <td><input class="form-control" name="col_8[<?= $i-2 ?>]" value="<?= $value->col_8 ?>"></td>
                    <td><input class="form-control" name="col_9[<?= $i-2 ?>]" value="<?= $value->col_9 ?>"></td>
                    <td><input class="form-control" name="col_10[<?= $i-2 ?>]" value="<?= $value->col_10 ?>"></td>
                    <td><input class="form-control" name="col_11[<?= $i-2 ?>]" value="<?= $value->col_11 ?>"></td>
                    <td><input class="form-control" name="col_12[<?= $i-2 ?>]" value="<?= $value->col_12 ?>"></td>
                    <td><input class="form-control" name="col_13[<?= $i-2 ?>]" value="<?= $value->col_13 ?>"></td>
                    <td><input class="form-control" name="col_14[<?= $i-2 ?>]" value="<?= $value->col_14 ?>"></td>
                    <td></td>
                    <td><input class="form-control" name="col_16[<?= $i-2 ?>]" value="-"></td>
                    <td><input class="form-control" name="col_17[<?= $i-2 ?>]" value="<?= $value->col_17 ?>"></td>
                  </tr>
                <?php endforeach ?>
                </tbody>
            </table>
            <button class="btn btn-primary" type="submit">Отправить</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</main>
