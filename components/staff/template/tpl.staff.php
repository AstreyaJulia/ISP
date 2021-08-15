<header class="main-content-header">
  <div class="header-left">
    <p class="h5 main-content-title"><?= $title; ?></p>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="Главная страница">
            <i class="mdi mdi-home-outline"></i>
          </a>
        </li>
      </ol>
    </nav>
  </div>
  <div class="header-right">
    <form method="POST">
      <button type="submit" class="btn btn-primary" name="editStaff" value="add">Добавить сотрудника</button>
    </form>
    <button class="btn btn-primary ms-2" type="button" id="contentmenu" data-bs-toggle="dropdown" data-bs-placement="top" title="Меню">
      <i class="mdi mdi-cog-outline"></i>
    </button>
    <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="contentmenu">
      <a href="#" class="dropdown-item btn-print">Печать</a>
    </ul>
  </div>
</header>
<div class="card">
  <table class="table dataTable sort table-users">
    <thead>
    <tr>
      <th>№</th>
      <th>Логин</th>
      <th>Ф.И.О.</th>
      <th>Д. р.</th>
      <th>Должность</th>
      <th>IP</th>
      <th>Юпитер</th>
    </tr>
    </thead>
    <tbody>
    <?php foreach ($staff as $row): ?>
    <tr>
      <td><?= $i++; ?></td>
      <td>
        <span class="badge-status <?= $staffClass->getStatus($row->active) ?>"></span>
        <a href="?page=staff&editStaff=<?= $row->id; ?>"><?= $row->username; ?></a><?= $staffClass->getSudo($row->sudo); ?>
        <div class="table-toolbar">
          <a class="table-toolbutton" href="?page=staff&editStaff=<?= $row->id; ?>">
            <i class="mdi mdi-pencil-outline"></i>
          </a>
          <a class="table-toolbutton" data-bs-toggle="modal" data-bs-target="#delusermodal">
            <i class="mdi mdi-delete-outline"></i>
          </a>
        </div>
      </td>
      <td><?= $staffClass->getShortFIO($row->fullname)/*доделать как в дизайне*/; ?></td>
      <td><?= $row->dob; ?></td>
      <td><?= $staffClass->getProfession($row->profession)/*доделать как в дизайне*/; ?></td>
      <td><?= $row->ip; ?></td>
      <td><?= $row->jupiter_tab_num; ?></td>
    </tr>
    <?php endforeach ?>
    </tbody>
  </table>
</div>
