<main class="main-content scroll-y">
  <div class="p-3 pt-0">
    <header class="main-content-header d-flex align-items-center justify-content-between flex-wrap">
      <div class="header-left d-flex align-items-center justify-content-between p-2">
        <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title=""
           data-bs-original-title="Назад" aria-label="Назад"><i class="mdi mdi-24px mdi-arrow-left"></i></a>
        <p class="h5 main-content-title mb-0"><?= $title ?></p>
      </div>
      <div class="header-right d-flex align-items-center justify-content-between p-2">
        <nav aria-label="breadcrumb" class="align-items-center d-xxl-flex d-xl-flex d-md-flex d-sm-none d-none">
          <ol class="breadcrumb d-flex align-items-center mb-0">
            <li class="breadcrumb-item p-2">
              <a class="p-2 me-2" href="/" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                 data-bs-original-title="Главная страница">
                <i class="mdi mdi-home-outline"></i>
              </a>
            </li>
            <li class="breadcrumb-item p-2">
              <a class="p-2" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                 data-bs-original-title="Информация"><?= $title ?>
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
    <div class="row boxed-content">

      <div class="card">
        <div class="accordion my-3" id="accordionExample">
          <div class="accordion-item">
              <div class="accordion-button collapsed bg-danger-20" title="Развернуть" role="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h6 class="accordion-header surtitle text-danger font-small-1">Внимание</h6>
              </div>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p><strong>* Дата, указанная в графе</strong> <code>"Опубликовать до"</code> вычисляется <strong>автоматически</strong>, для приговоров - дата вступления в законную силу + 30 дней, для актов - дата рассмотрения + 30 дней.</p>
                <p>Уголовные дела, находящиеся на <strong>обжаловании</strong>, в списке тоже отображаются, их публикуют после вступления в законную силу после возвращения из суда ап. инстанции (без изменения, измененные).</p>
                <p><strong>Отмененные</strong> приговоры по уголовным делам запрещаются к публикации с указанием причины <code>"Отменено вышестоящей инстанцией"</code></p>
              </div>
            </div>
          </div>
        </div>

        <table class="table-responsive table dataTable sort">
          <thead>
          <tr>
            <th>Номер дела</th>
            <?= $pageReferer == "page=grade" ? "<th>Судья</th>": "" ?>
            <th>Дата рассмотрения</th>
            <th>Дата вступления в законную силу</th>
            <th>Опубликовать до *</th>
            <th>Статус</th>
          </tr>
          </thead>
          <tbody>
          <?php foreach ($row as $key => $value): ?>
            <tr>
              <td><?= $value->FULL_NUMBER ?></td>
              <?= $pageReferer == "page=grade" ? "<td>$value->JUDGE</td>": "" ?>
              <td><?= date("d.m.Y", strtotime($value->VERDICT_DATE)) ?></td>
              <td><?= $value->VALIDITY_DATE ? date("d.m.Y", strtotime($value->VALIDITY_DATE)) : "" ?></td>
              <td><?= $value->DATE_UNTILL ?></td>
              <td><?= $value->STAT ?></td>
            </tr>
          <?php endforeach ?>
          </tbody>
        </table>
      </div>
    </div>
</main>
