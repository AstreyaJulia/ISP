<?php
$title = "Список задач";


$content = '
<header class="main-content-header">
      <div class="header-left">
        <p class="h5 main-content-title">Задачи</p>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
            <a href="/" data-bs-toggle="tooltip" data-bs-placement="top"
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

  <div class="row todo-wrapper">
    <div class="col-3">
      <div class="card">
        <div class="card-header">
          <button class="btn btn-primary btn-block mt-1 mb-1">Добавить задачу</button>
        </div>

        <div class="sidebar-menu">
          <div class="list-group list-group-filters">
            <a class="list-group-item list-group-item-action" href="javascript:void(0)"><i class="mdi mdi-shape-outline me-2"></i> Все задачи</a>
            <a class="list-group-item list-group-item-action" href="javascript:void(0)"><i class="mdi mdi-account-details-outline me-2"></i> Мои
              задачи</a>
            <a class="list-group-item list-group-item-action" href="javascript:void(0)"><i class="mdi mdi-alert-decagram-outline me-2"></i>Метка</a>
            <a class="list-group-item list-group-item-action" href="javascript:void(0)"><i class="mdi mdi-check-box-outline me-2"></i> Завершенные</a>
            <a class="list-group-item list-group-item-action" href="javascript:void(0)"><i class="mdi mdi-trash-can-outline me-2"></i>
              Удаленные</a>
          </div>
          <div class="mt-3 px-2 d-flex justify-content-between align-items-center">
          <h6 class="section-label mb-1">Метки</h6>
          <i class="mdi mdi-plus p-1"></i>
</div>
<div class="list-group list-group-labels">
<a class="list-group-item list-group-item-action d-flex align-items-center" href="javascript:void(0)">
                                        <span class="bullet bullet-sm bullet-primary me-2"></span>Метка
                                    </a>
                                    <a class="list-group-item list-group-item-action d-flex align-items-center" href="javascript:void(0)">
                                        <span class="bullet bullet-sm bullet-danger me-2"></span>Метка
                                    </a>
                                    <a class="list-group-item list-group-item-action d-flex align-items-center" href="javascript:void(0)">
                                        <span class="bullet bullet-sm bullet-warning me-2"></span>Метка
                                    </a>
                                    <a class="list-group-item list-group-item-action d-flex align-items-center" href="javascript:void(0)">
                                        <span class="bullet bullet-sm bullet-success me-2"></span>Метка
                                    </a>
                                    <a class="list-group-item list-group-item-action d-flex align-items-center" href="javascript:void(0)">
                                        <span class="bullet bullet-sm bullet-info me-2"></span>Метка
                                    </a>
</div>
        </div>

      </div>
    </div>
    <div class="col-9">
      <div class="card">
        <div class="app-fixed-search d-flex align-items-center">
          <div class="d-flex align-content-center justify-content-between w-100">
            <div class="input-group input-group-merge">
              <div class="input-group-prepend">
                                            <span class="input-group-text">
                                            <i class="mdi mdi-magnify"></i>
                                            </span>
              </div>
              <input type="text" class="form-control" id="todo-search" placeholder="Искать задачи" aria-label="Поиск..."
                     aria-describedby="todo-search">
            </div>
          </div>
          <div class="dropdown">
            <a class="dropdown-toggle p-2 no-carret me-1 waves-effect waves-light" id="todoActions" data-bs-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              <i class="mdi mdi-dots-vertical"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="todoActions" style="">
              <a class="dropdown-item sort-asc" href="javascript:void(0)">Сортировать А - Я</a>
              <a class="dropdown-item sort-desc" href="javascript:void(0)">Сортировать Я - А</a>
              <a class="dropdown-item" href="javascript:void(0)">Сортировать по сроку</a>
              <a class="dropdown-item" href="javascript:void(0)">Показать Задачи на сегодня</a>
              <a class="dropdown-item" href="javascript:void(0)">Показать Задачи на эту неделю</a>
              <a class="dropdown-item" href="javascript:void(0)">Показать Задачи на этот месяц</a>
            </div>
          </div>
        </div>
        <div class="todo-task-list-wrapper list-group">
          <ul class="todo-task-list media-list" id="todo-task-list">
            <li class="todo-item">
              <div class="todo-title-wrapper">
                <div class="todo-title-area">
                  <div class="title-wrapper">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="form-check-input" id="customCheck13">
                      <label class="custom-control-label" for="customCheck13"></label>
                    </div>
                    <span class="todo-title">Задача</span>
                  </div>
                </div>
                <div class="todo-item-action">
                <div class="badge rounded-pill bg-info me-2">Важно</div>
                <small class="text-nowrap text-muted me-1">Август 05</small>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
';
