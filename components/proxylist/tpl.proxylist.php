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
    <?php if ($verification == 1): ?>
    <div class="container align-items-center justify-content-end d-flex mb-3">
      <form method="get" action="" class="me-3">
        <button type="submit" class="btn btn-primary me-2" name="editGroup" value="">Группу</button>
        <a class="btn btn-primary" href="?page=proxylist&editLink">Ссылку</a>
      </form>
    </div>
    <?php endif ?>
    <div class="boxed-content">
      <div class="row">
        <div class="col-12">
          <div class="card list-tab-group flex-fill">
            <?php if ($verification == 1): ?>
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
            <?php endif ?>
            <div class="card-body">
              <div class="row vh-75">
                <div class="col-5 m-0 p-0">
                  <ul class="list-group d-flex">
                    <?php foreach ($row->data->father as $key => $value): ?>
                      <li class="list-group-item" id="<?= $value->id ?>" style="height: 100%;">
                        <?php if ($verification == 1): ?>
                        <div class="list-group-number">
                          <p><?= $value->menuindex ?></p>
                        </div>
                        <?php endif ?>
                        <div class="list-group-body">
                          <a class="list-group-link"><?= $value->name_href ?></a>
                          <i class="menu-arrow mdi mdi-chevron-right"></i>
                        </div>
                        <?php if ($verification == 1): ?>
                        <div class="list-group-toolbar">
                          <a class="list-group-toolbutton btnmodal-multiaction"
                             href="?page=proxylist&editGroup=<?= $value->id ?>">
                            <i class="mdi mdi-pencil-outline"></i>
                          </a>
                          <a class="list-group-toolbutton btnmodal-multiaction" data-modaction="1"
                             data-link="?page=proxylist&delGroup=<?= $value->id ?>">
                            <i class="mdi mdi-delete-outline"></i>
                          </a>
                        </div>
                        <?php endif ?>
                      </li>
                    <?php endforeach ?>
                  </ul>
                </div>
                <div class="tab-content col-7 p-0">
                  <?php foreach ($row->data->children as $row => $children): ?>
                    <ul class="tab-list-group" id="<?= $row ?>-list">
                      <?php foreach ($children as $key => $value): ?>
                            <li class="list-group-item">
                              <?php if ($verification == 1): ?>
                              <div class="list-group-number">
                                <p><?= $value->menuindex; ?></p>
                              </div>
                              <?php endif ?>
                              <div class="list-group-body">
                                <a class="list-group-link" href="<?= $value->href ?>"
                                   target="_blank"><?= $value->name_href ?></a>
                              </div>
                              <?php if ($verification == 1): ?>
                              <div class="list-group-toolbar">
                                <a class="list-group-toolbutton btnmodal-multiaction"
                                   href="?page=proxylist&editLink=<?= $value->id; ?>">
                                  <i class="mdi mdi-pencil-outline"></i>
                                </a>
                                <a class="list-group-toolbutton btnmodal-multiaction" data-modaction="2"
                                   data-link="?page=proxylist&delLink=<?= $value->id; ?>">
                                  <i class="mdi mdi-delete-outline"></i>
                                </a>
                              </div>
                            <?php endif ?>
                            </li>
                      <?php endforeach ?>
                    </ul>
                  <?php endforeach ?>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
