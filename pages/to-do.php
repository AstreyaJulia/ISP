<?php
$title = "Список задач";


$content = '
<div class="ps-3 pe-3">
<header class="main-content-header">
    <div class="header-left">
    <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Назад" aria-label="Назад"><i class="mdi mdi-24px mdi-arrow-left"></i></a>
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

    <!-- Модал -->
  <div id="new-task-modal" class="modal sidebar-todo-modal" style="display: none;">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content add-edit-task-content">
        <div class="modal-header">
          <h5 class="add-task-title modal-title me-4" style="display: block;">Добавить задачу</h5>
          <h5 class="edit-task-title modal-title me-4" style="display: none;">Редактировать задачу</h5>
          <div class="task-title-status"></div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        </div>
        <div class="modal-body">
          <div class="add-edit-task-box">
            <div class="add-edit-task-content">
              <form class="task-form">
                <div class="row">
                  <div class="form-group">
                    <label for="due-date" class="">Название события:</label>
                    <div class="task-title">
                      <input id="title" type="text" placeholder="Введите название" class="form-control"
                             name="task" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-check form-switch">
                      <input type="checkbox" class="form-check-input private-switch" id="customSwitch4">
                      <label class="form-check-label" for="customSwitch4">Вижу только я (приватное событие)</label>
                    </div>
                  </div>
                    <div class="form-group due-date">
                      <label for="due-date" class="">Срок исполнения:</label>
                      <div>
                        <input id="due-date" placeholder="Срок исполнения" class="form-control flatpickr-input position-relative"
                               type="text" required>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="select-label" class="">Метка задачи:</label>
                      <div class="cat-select position-relative" id="cat-select">
                        <select class="select2 select-label form-control w-100" id="select-label" name="select-label">
                          <option data-label="primary" value="Primary" selected>Обычная</option>
                          <option data-label="danger" value="Danger">Высокая</option>
                          <option data-label="warning" value="Warning">Средняя</option>
                          <option data-label="success" value="Success">Низкая</option>
                          <option data-label="info" value="Info">Нет</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <label for="task-description">Описание задачи:</label>
                      <div class="task-description">
                          <textarea id="task-description" placeholder="Введите описание" rows="3"
                                    class="form-control" name="task-description-editor"></textarea>
                      </div>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button id="add-task-btn" class="btn btn-primary add-task-btn" style="display: block;">Добавить
            задачу
          </button>
          <button id="edit-task" class="btn btn-primary edit-task" style="display: none;">Сохранить</button>
          <button id="discard" class="btn btn-danger btn-dismiss" data-dismiss="modal" style="display: block;">Отмена
          </button>
          <button id="delete" class="btn btn-danger btn-delete-task" data-dismiss="modal"
                  style="display: none;">Удалить
          </button>
        </div>
      </div>
    </div>
  </div>


    <div class="col-3 g-0">
      <div class="card">
        <div class="card-header">
          <button class="btn btn-primary btn-block mt-1 mb-1 add-task">Добавить задачу</button>
        </div>

        <div class="sidebar-left">
                <div class="sidebar-menu-list">
          <div class="list-group list-group-filters">
            <a class="list-group-item list-group-item-action" href="javascript:void(0)"><i
              class="mdi mdi-shape-outline me-2"></i> Все задачи</a>
            <a class="list-group-item list-group-item-action" href="javascript:void(0)"><i
              class="mdi mdi-account-details-outline me-2"></i> Мои
              задачи</a>
            <a class="list-group-item list-group-item-action" href="javascript:void(0)"><i
              class="mdi mdi-alert-decagram-outline me-2"></i>Важные</a>
            <a class="list-group-item list-group-item-action" href="javascript:void(0)"><i
              class="mdi mdi-check-box-outline me-2"></i> Завершенные</a>
            <a class="list-group-item list-group-item-action" href="javascript:void(0)"><i
              class="mdi mdi-trash-can-outline me-2"></i>
              Удаленные</a>
          </div>
          <div class="mt-3 px-2 d-flex justify-content-between align-items-center">
            <h6 class="section-label mb-1">Важность</h6>
          </div>
          <div class="list-group list-group-labels">
             <a class="list-group-item list-group-item-action d-flex align-items-center" href="javascript:void(0)">
              <span class="bullet bullet-sm bullet-secondary me-2"></span>Все
            </a>
            <a class="list-group-item list-group-item-action d-flex align-items-center" href="javascript:void(0)">
              <span class="bullet bullet-sm bullet-primary me-2"></span>Обычная
            </a>
            <a class="list-group-item list-group-item-action d-flex align-items-center" href="javascript:void(0)">
              <span class="bullet bullet-sm bullet-danger me-2"></span>Высокая
            </a>
            <a class="list-group-item list-group-item-action d-flex align-items-center" href="javascript:void(0)">
              <span class="bullet bullet-sm bullet-warning me-2"></span>Средняя
            </a>
            <a class="list-group-item list-group-item-action d-flex align-items-center" href="javascript:void(0)">
              <span class="bullet bullet-sm bullet-success me-2"></span>Низкая
            </a>
            <a class="list-group-item list-group-item-action d-flex align-items-center" href="javascript:void(0)">
              <span class="bullet bullet-sm bullet-info me-2"></span>Нет
            </a>
          </div>
        </div>

</div>


      </div>
    </div>
    <div class="col-9 g-0">
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
            <a class="dropdown-toggle p-2 no-carret me-1 waves-effect waves-light" id="todoActions"
               data-bs-toggle="dropdown"
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
          <div class="no-results">
                                    <p class="fw-bold">Ничего не найдено</p>
                                </div>
        </div>
      </div>
    </div>
  </div>
    </div>

';
