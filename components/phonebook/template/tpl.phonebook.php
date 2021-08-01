<header class="main-content-header">
  <div class="header-left"><p class="h5 main-content-title"><?= $title; ?></p>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/" data-bs-toggle="tooltip" data-bs-placement="top"
                                       title="Главная страница"><i class="mdi mdi-home-outline"></i></a></li>
      </ol>
    </nav>
  </div>
  <div class="header-right"></div>
</header>
<div class="card">
  <div class="filter-group phonebook-filter">
    <p class="group-title">Фильтр:</p>
    <?php foreach (getGroupReplace() as $key => $value): ?>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="<?= $key; ?>" name="<?= $key; ?>" value="<?= getGroupReplace() [$key]["id"]; ?>">
        <label class="form-check-label"  for="<?= $key; ?>"><?= getGroupReplace() [$key]["name"]; ?></label>
      </div>
    <?php endforeach ?>
  </div>
  <table class="table dataTable table-users">
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
        <td><?= $row->getPositionPhonebook(); ?></td>
        <td><?= shortFIO($row->fullname); ?></td>
        <td><?= $row->getProfessionPhonebook(); ?></td>
        <td><?= $row->phone_worck; ?></td>
      </tr>
    <?php endforeach ?>
    </tbody>
  </table>
</div>
