<header class="main-content-header">
  <div class="header-left">
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
      <button type="submit" class="btn primary medium" name="editGroup" value="add">Группу</button>
      <button type="submit" class="btn primary medium" name="editLink" value="add">Ссылку</button>
    </form>
  </div>
</header>
<div class="card list-tab-group">
  <div class="card-body">
    <div class="row">
      <ul class="list-group col-5">
        <?php foreach ($family as $goodname => $properties): ?>
          <li class="list-group-item" id="<?= $properties['id']; ?>">
            <div class="list-group-body">
              <a class="list-group-link"><?= $properties['name_href']; ?></a>
              <i class="menu-arrow mdi mdi-chevron-right"></i>
            </div>
            <div class="list-group-toolbar">
              <a class="list-group-toolbutton" href="?page=proxylist&editGroup=<?= $properties['id']; ?>">
                <i class="mdi mdi-pencil-outline"></i>
              </a>
              <a class="list-group-toolbutton" href="?page=proxylist&delGroup=<?= $properties['id']; ?>">
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
                    <div class="list-group-body">
                      <a class="list-group-link" href="<?= $value_list_array['href'] ?>"
                         target="_blank"><?= $value_list_array['name_href']; ?></a>
                    </div>
                    <div class="list-group-toolbar">
                      <a class="list-group-toolbutton" href="?page=proxylist&editLink=<?= $value_list_array['id']; ?>">
                        <i class="mdi mdi-pencil-outline"></i>
                      </a>
                      <a class="list-group-toolbutton" href="?page=proxylist&delLink=<?= $value_list_array['id']; ?>">
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
