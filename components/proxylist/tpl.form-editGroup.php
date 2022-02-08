<main class="main-content scroll-y">
  <div class="ps-3 pe-3 ">
    <header class="main-content-header d-flex align-items-center justify-content-between flex-wrap">
      <div class="header-left d-flex align-items-center justify-content-between p-2">
        <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Назад"><i
            class="mdi mdi-24px mdi-arrow-left"></i></a>
        <p class="h5 main-content-title mb-0">Редактировать / создать группу ссылок</p>
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
                 title="Каталог ссылок">Каталог ссылок
              </a>
            </li>
            <li class="breadcrumb-item p-2">
              <a class="p-2" data-bs-toggle="tooltip" data-bs-placement="top"
                 title="Редактировать / создать группу ссылок">Редактировать / создать группу ссылок
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
    <div class="boxed-content">
      <div class="card">
        <form action="" method="post" class="form form-editlink">
          <div class="card-body">
            <div class="form-group row">
              <div class="col-10">
                <label class="form-label" for="group-title">Заголовок (название) группы</label>
                <input class="form-control" type="text" value="<?= $name_href; ?>" name="name_href" autocomplete="off"
                       placeholder="Введите название группы" id="group-title" required>
              </div>
              <div class="col-2">
                <label class="form-label" for="menuindex">Позиция в меню</label>
                <input class="form-control" type="number" id="menuindex" value="<?= $menuindex; ?>"
                       placeholder="Например: 12" name="menuindex"
                       autocomplete="off" required>

              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="ccproxy">Запись для Ccproxy</label>
              <textarea class="form-control" name="proxy_href" id="ccproxy"
                        placeholder="Введите адреса или домены сайтов для списка разрешенных сайтов Ccproxy, разделяя записи точкой с запятой - ; без разделения записи пробелами. Например: *google.com;*google.com;"><?= $proxy_href; ?></textarea>
            </div>
          </div>
          <div class="card-footer">
            <div class="button-group d-flex align-items-center justify-content-end">
              <button type="submit" class="btn btn-primary me-3" name="editGroup" value="<?= $editGroupValue ?>">Сохранить</button>
              <button type="button" class="btn btn-outline-danger btn-back">Отмена</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</main>
