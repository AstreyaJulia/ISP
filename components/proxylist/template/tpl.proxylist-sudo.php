<header class="main-content-header">
  <div class="header-left">
    <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title=""
       data-bs-original-title="Назад" aria-label="Назад"><i class="mdi mdi-24px mdi-arrow-left"></i></a>
    <p class="h5 main-content-title"><?= $title; ?></p>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="Главная страница">
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
    <form method="post" class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="contentmenu">
      <button type="submit" class="btn btn-primary" name="editGroup" value="add">Группу</button>
      <button type="submit" class="btn btn-primary" name="editLink" value="add">Ссылку</button>
    </form>
  </div>
</header>
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
            <button type="button" class="btn btn-primary btn-discard" data-bs-dismiss="modal">Нет</button>
            <a class="btn btn-danger btn-del">Да</a>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="card-body">
    <div class="row">
      <ul class="list-group col-5">
        <?php foreach ($family as $goodname => $properties): ?>
          <li class="list-group-item" id="<?= $properties['id']; ?>">
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
      <div class="tab-content col-7">
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
