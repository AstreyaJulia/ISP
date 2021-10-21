<div class="ps-3 pe-3 boxed-content">
  <header class="main-content-header">
    <div class="header-left">
      <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title=""
         data-bs-original-title="Назад" aria-label="Назад"><i class="mdi mdi-24px mdi-arrow-left"></i></a>
      <p class="h5 main-content-title">Редактировать / создать ссылку</p>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="Главная страница">
              <i class="mdi mdi-home-outline"></i>
            </a>
          </li>
          <li class="breadcrumb-item"><a href="?page=proxylist">Каталог ссылок</a></li>
          <li class="breadcrumb-item" aria-current="page">Добавить / Редактировать ссылку</li>
        </ol>
      </nav>
    </div>
    <div class="header-right"></div>
  </header>
  <div class="card">
    <form action="" method="post" class="form form-editlink">
      <div class="card-body">
        <div class="form-group">
          <label class="form-label" for="link-title">Заголовок (название) ссылки</label>
          <input class="form-control" type="text" value="<?= $row->name_href; ?>" name="name_href" autocomplete="off"
                 placeholder="Введите название ссылки" id="link-title" required>
        </div>
        <div class="form-group row">
          <div class="col-10">
            <label class="form-label" for="category">Категория (каталог)</label>
            <select class="form-select" id="category" name="id_group" required>
              <option
                value="<?= $row->id_group; ?>"><?= $group[array_search($row->id_group, array_column($group, 'id'))]['name_href']; ?></option>
              <?php foreach ($group as $group_key => $group_value): ?>
                <?php if (!empty($group_value) and $group_value["id"] !== $group[array_search($row->id_group, array_column($group, 'id'))]["id"]): ?>
                  <option value="<?= $group_value['id']; ?>"><?= $group_value['name_href']; ?></option>
                <?php endif; ?>
              <?php endforeach ?>
            </select>
          </div>
          <div class="col-2">
            <label class="form-label" for="menuindex">Позиция в меню</label>
            <input class="form-control" type="number" id="menuindex" value="<?= $row->menuindex; ?>"
                   placeholder="Например: 12" name="menuindex"
                   autocomplete="off" required>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label" for="url">Адрес (URL) ссылки</label>
          <input class="form-control" type="url" id="url" value="<?= $row->href; ?>"
                 placeholder="Например: https://google.com" name="href"
                 autocomplete="off" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="ccproxy">Запись для Ccproxy</label>
          <textarea class="form-control" name="proxy_href" id="ccproxy"
                    placeholder="Введите адреса или домены сайтов для списка разрешенных сайтов Ccproxy, разделяя записи точкой с запятой - ; без разделения записи пробелами. Например: *google.com;*google.com;"><?= $row->proxy_href; ?></textarea>
        </div>
      </div>
      <div class="card-footer">
        <div class="button-group d-flex align-items-center justify-content-end">
          <button type="submit" class="btn btn-primary me-3" name="editLink" value="add">Сохранить</button>
          <button type="button" class="btn btn-outline-danger btn-back">Отмена</button>
        </div>
      </div>
    </form>
  </div>
</div>
