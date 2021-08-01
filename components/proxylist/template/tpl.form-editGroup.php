<header class="main-content-header">
  <div class="header-left"><p class="h5 main-content-title">Редактировать / создать группу ссылок</p>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/" data-bs-toggle="tooltip" data-bs-placement="top"
                                       title="Главная страница">
            <i class="mdi mdi-home-outline"></i>
          </a>
        </li>
        <li class="breadcrumb-item"><a href="?page=proxylist">Каталог ссылок</a></li>
        <li class="breadcrumb-item" aria-current="page">Добавить / Редактировать группу</li>
      </ol>
    </nav>
  </div>
  <div class="header-right"></div>
</header>
<div class="card">
  <form action="" method="post" class="form form-editlink">
    <div class="card-body">
      <div class="form-group">
        <label class="form-label" for="group-title">Заголовок (название) группы</label>
        <input class="form-control" type="text" value="<?= $row->name_href; ?>" name="name_href" autocomplete="off"
               placeholder="Введите название группы" id="group-title" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="ccproxy">Запись для Ccproxy</label>
        <textarea class="form-control" name="proxy_href" id="ccproxy"
                  placeholder="Введите адреса или домены сайтов для списка разрешенных сайтов Ccproxy, разделяя записи точкой с запятой - ; без разделения записи пробелами. Например: *google.com;*google.com;"><?= $row->proxy_href; ?></textarea>
      </div>
    </div>
    <div class="card-footer">
      <button type="submit" class="btn btn-primary" name="editGroup" value="add">Сохранить</button>
      <button type="button" class="btn btn-danger btn-back">Отмена</button>
    </div>
  </form>
</div>
