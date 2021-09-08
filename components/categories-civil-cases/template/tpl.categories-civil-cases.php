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
    <button class="btn btn-primary" type="button" id="contentmenu" data-bs-toggle="dropdown" data-bs-placement="top"
            title="Меню">
      <i class="mdi mdi-cog-outline"></i>
    </button>
    <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="contentmenu">
      <a href="#" class="dropdown-item btn-print">Печать</a>
    </ul>
  </div>
</header>
<div class="card max">
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
