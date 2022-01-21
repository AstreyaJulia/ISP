<main class="main-content scroll-y">
  <div class="ps-3 pe-3">
    <header class="main-content-header d-flex align-items-center justify-content-between flex-wrap">
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
    <div class="card list-tab-group boxed-content">
      <div class="card-body">
        <div class="row">
          <ul class="list-group col-5 m-0 p-0">
            <?php foreach ($family as $goodname => $properties): ?>
              <li class="list-group-item" id="<?= $properties['id']; ?>">
                <div class="list-group-body">
                  <a class="list-group-link"><?= $properties['name_href']; ?></a>
                  <i class="menu-arrow mdi mdi-chevron-right"></i>
                </div>
              </li>
            <?php endforeach ?>
          </ul>
          <div class="tab-content col-7">
            <?php foreach ($family as $goodname => $properties): ?>
              <ul class="tab-list-group overlayscrollbar" id="<?= $properties['id']; ?>-list">
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
</main>
