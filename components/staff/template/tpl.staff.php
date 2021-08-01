<header class="main-content-header">
  <div class="header-left">
    <p class="h5 main-content-title"><?= $title; ?></p>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/" data-bs-toggle="tooltip" data-bs-placement="top"
                                       title="Главная страница">
            <i class="mdi mdi-home-outline"></i>
          </a>
        </li>
      </ol>
    </nav>
  </div>
  <div class="header-right">
    <form method="get">
      <button type="submit" class="btn btn-primary" name="editStaff" value="add">Добавить сотрудника</button>
    </form>
  </div>
</header>
<div class="card">
  <table class="table dataTable table-users">
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
    <?php foreach ($staff as $key => $value): ?>

    <tr>
      <td><?= $i++; ?></td>
      <td>
        <span class="badge-status <?= status($value['active'], $_GET['page']); ?>"></span>
        <a href="?editStaff=<?= $value['id']; ?>"><?= $value['username']; ?></a><?= statusSudo($value['sudo'], $_GET['page']); ?>
        <div class="table-toolbar">
          <a class="table-toolbutton" href="?editStaff=<?= $value['id']; ?>">
            <i class="mdi mdi-pencil-outline"></i>
          </a>
          <a class="table-toolbutton" data-bs-toggle="modal" data-bs-target="#delusermodal">
            <i class="mdi mdi-delete-outline"></i>
          </a>
        </div>
      </td>
      <td><?= shortFIO($value['fullname'])/*доделать как в дизайне*/; ?></td>
      <td><?= $value['dob']; ?></td>
      <td><?= profession($value['profession'], $_GET['page'])/*доделать как в дизайне*/; ?></td>
      <td><?= $value['ip']; ?></td>
      <td><?= $value['jupiter_tab_num']; ?></td>
    </tr>
    <?php endforeach ?>
    </tbody></table>
</div>
