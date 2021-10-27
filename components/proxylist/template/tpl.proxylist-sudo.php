<div class="ps-3 pe-3">
  <header class="main-content-header d-flex align-items-center justify-content-between flex-wrap p-2">
    <div class="header-left d-flex align-items-center justify-content-between p-2">
      <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Назад"><i
          class="mdi mdi-24px mdi-arrow-left"></i></a>
      <p class="h5 main-content-title mb-0"><?= $title; ?></p>
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
               title="<?= $title; ?>"><?= $title; ?>
            </a>
          </li>
        </ol>
      </nav>
    </div>
  </header>
  <div class="container align-items-center justify-content-end d-flex mb-3">
    <form method="post" class="me-3">
      <button type="submit" class="btn btn-primary me-2" name="editGroup" value="add">Группу</button>
      <button type="submit" class="btn btn-primary" name="editLink" value="add">Ссылку</button>
    </form>
  </div>

  <div class="boxed-content">
    <div class="card list-tab-group">

      <!-- Модал-->
      <div class="modal modal-multiaction" id="delmodal" aria-labelledby="delmodal" style="display: none">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title header-1" style="display: none">Удалить группу?</h5>
              <h5 class="modal-title header-2" style="display: block">Удалить ссылку?</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
            </div>
            <form>
              <div class="modal-body">
                <p class="text-1" style="display: none">Вы уверены, что хотите удалить группу?</p>
                <p class="text-2" style="display: block">Вы уверены, что хотите удалить ссылку?</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary btn-discard me-3" data-bs-dismiss="modal">Нет</button>
                <a class="btn btn-outline-danger btn-del">Да</a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="card-body">
        <div class="row vh-75">
          <div class="col-5 m-0 p-0">
            <ul class="list-group d-flex">
              <?php foreach ($family as $goodname => $properties): ?>
                <li class="list-group-item" id="<?= $properties['id']; ?>" style="height: 100%;">
                  <div class="list-group-number">
                    <p><?= $properties['menuindex']; ?></p>
                  </div>
                  <div class="list-group-body">
                    <a class="list-group-link"><?= $properties['name_href']; ?></a>
                    <i class="menu-arrow mdi mdi-chevron-right"></i>
                  </div>
                  <div class="list-group-toolbar">
                    <a class="list-group-toolbutton btnmodal-multiaction"
                       href="?page=proxylist&editGroup=<?= $properties['id']; ?>">
                      <i class="mdi mdi-pencil-outline"></i>
                    </a>
                    <a class="list-group-toolbutton btnmodal-multiaction" data-modaction="1"
                       data-link="?page=proxylist&delGroup=<?= $properties['id']; ?>">
                      <i class="mdi mdi-delete-outline"></i>
                    </a>
                  </div>
                </li>
              <?php endforeach ?>
            </ul>
          </div>
          <div class="tab-content col-7 p-0">
            <?php foreach ($family as $goodname => $properties): ?>
              <ul class="tab-list-group" id="<?= $properties['id']; ?>-list">
                <?php foreach ($properties as $property => $value): ?>
                  <?php if (is_array($value)): ?>
                    <?php //Сортируем ссылки по полю $menuindex
                    $menuindexLink = array_column($value, 'menuindex');
                    array_multisort($menuindexLink, SORT_ASC, $value);
                    foreach ($value as $property_list_array => $value_list_array): ?>

                      <li class="list-group-item">
                        <div class="list-group-number">
                          <p><?= $value_list_array['menuindex']; ?></p>
                        </div>
                        <div class="list-group-body">
                          <a class="list-group-link" href="<?= $value_list_array['href'] ?>"
                             target="_blank"><?= $value_list_array['name_href']; ?></a>
                        </div>
                        <div class="list-group-toolbar">
                          <a class="list-group-toolbutton btnmodal-multiaction"
                             href="?page=proxylist&editLink=<?= $value_list_array['id']; ?>">
                            <i class="mdi mdi-pencil-outline"></i>
                          </a>
                          <a class="list-group-toolbutton btnmodal-multiaction" data-modaction="2"
                             data-link="?page=proxylist&delLink=<?= $value_list_array['id']; ?>">
                            <i class="mdi mdi-delete-outline"></i>
                          </a>
                        </div>
                      </li>
                    <?php endforeach ?>
                  <?php endif; ?>
                <?php endforeach ?>
              </ul>
            <?php endforeach ?>
          </div>
        </div>
      </div>

    </div>

</div>
</div>
