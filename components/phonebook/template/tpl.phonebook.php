<header class="main-content-header">
  <div class="header-left">
    <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title=""
       data-bs-original-title="Назад" aria-label="Назад"><i class="mdi mdi-24px mdi-arrow-left"></i></a>
    <p class="h5 main-content-title"><?= $title; ?></p>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/" data-bs-toggle="tooltip" data-bs-placement="top"
                                       title="Главная страница"><i class="mdi mdi-home-outline"></i></a></li>
      </ol>
    </nav>
  </div>
  <div class="header-right">
    <button class="btn btn-primary" type="button" id="contentmenu" data-bs-toggle="dropdown" data-bs-placement="top"
            title="Меню">
      <i class="mdi mdi-cog-outline"></i>
    </button>
    <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="contentmenu">
      <a href="#" class="dropdown-item btn-print">Печать</a>
    </ul>
  </div>
</header>
<div class="card mb-3">
  <div class="card-body">
    <div class="filter-group phonebook-filter">
      <p class="group-title">Фильтр:</p>
      <?php foreach (getGroupReplace() as $key => $value): ?>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="<?= $key; ?>" name="<?= $key; ?>"
                 value="<?= getGroupReplace() [$key]["id"]; ?>">
          <label class="form-check-label" for="<?= $key; ?>"><?= getGroupReplace() [$key]["name"]; ?></label>
        </div>
      <?php endforeach ?>
    </div>
  </div>
</div>
<div class="card phonebook">
  <table class="table dataTable sort table-users">
    <thead>
    <tr>
      <th>Кабинет</th>
      <th>Ф.И.О.</th>
      <th>Должность</th>
      <th>Служебный тел.</th>
    </tr>
    </thead>
    <tbody id="<?= $id; ?>">
    <?php foreach ($phonebook as $row): ?>
      <tr>
        <td><?= $phonebookClass->getPosition($row->position); ?></td>
        <td><?= $row->fullname; ?></td>
        <td><?= $phonebookClass->getProfession($row->profession); ?></td>
        <td><?= $row->phone_worck; ?></td>
      </tr>
    <?php endforeach ?>
    </tbody>
  </table>
</div>
