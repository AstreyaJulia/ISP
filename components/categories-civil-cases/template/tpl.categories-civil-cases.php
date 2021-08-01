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
  </div>
</header>
<div class="card">
  <table class="table dataTable nosort">
    <thead>
    <tr>
      <th>PREFIX</th>
      <th>NAME</th>
    </tr>
    </thead>
    <tbody>
    <?php foreach ($row as $key => $value): ?>
      <tr>
        <td><?= $value->PREFIX; ?></td>
        <td><?= $value->NAME; ?></td>
      </tr>
    <?php endforeach ?>
    </tbody>
  </table>
</div>
