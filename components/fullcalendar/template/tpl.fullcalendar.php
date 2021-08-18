<header class="main-content-header">
  <div class="header-left">
    <p class="h5 main-content-title">Календарь</p>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/" data-bs-toggle="tooltip" data-bs-placement="top"
                                       title="Главная страница"><i class="mdi mdi-home-outline"></i></a></li>
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
<div class="card mb-3">
  <div class="card-body">
            <div class="filter-group calendar-private-filter">
                  <p class="group-title">События:</p>
        <div class="form-check">
          <input class="form-check-input input-filter bg-primary" type="checkbox" id="Private" name="Private">
          <label class="form-check-label" for="Private">Только мои</label>
        </div>

      </div>

      <div class="filter-group calendar-events-filter">
        <p class="group-title">Календарь:</p>
        <div class="form-check">
          <input class="form-check-input input-filter bg-dark select-all" type="checkbox" id="select-all"
                 name="select-all" checked>
          <label class="form-check-label" for="select-all">Все</label>
        </div>
        <div class="form-check">
          <input class="form-check-input input-filter bg-primary" type="checkbox" id="Primary" name="Primary" checked>
          <label class="form-check-label" for="Primary">События</label>
        </div>
        <div class="form-check">
          <input class="form-check-input input-filter bg-danger" type="checkbox" id="Danger" name="Danger" checked>
          <label class="form-check-label" for="Danger">Праздники</label>
        </div>
        <div class="form-check">
          <input class="form-check-input input-filter bg-warning" type="checkbox" id="Warning" name="Warning" checked>
          <label class="form-check-label" for="Warning">Важно</label>
        </div>
        <div class="form-check">
          <input class="form-check-input input-filter bg-success" type="checkbox" id="Success" name="Success" checked>
          <label class="form-check-label" for="Success">Личное</label>
        </div>
        <div class="form-check">
          <input class="form-check-input input-filter bg-info" type="checkbox" id="Info" name="Info" checked>
          <label class="form-check-label" for="Info">Разное</label>
        </div>
        <button type="button" class="btn btn-primary ms-auto me-3" id="myBtn">Добавить событие</button>
      </div>


      <!-- Модал добавления/редактирования события -->
      <div id="addEventsModal" class="modal" aria-labelledby="addEventsModal" style="display: none;">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content add-edit-event-content">
            <div class="modal-header">
              <h5 class="add-event-title modal-title" style="display: block;">Добавить событие</h5>
              <h5 class="edit-event-title modal-title" style="display: none;">Редактировать событие</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
            </div>
            <div class="modal-body">
              <div class="add-edit-event-box">
                <div class="add-edit-event-content">
                  <form class="event-form">
                    <div class="row">
                      <div class="form-group">
                        <label for="start-date" class="">Название события:</label>
                        <div class="event-title">
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
                      <div class="form-group">
                      <label for="select-label" class="">Категория события:</label>
                      <div class="cat-select position-relative ">
                                                                            <select class="select2 select-label form-control w-100" id="select-label" name="select-label">
                          <option data-label="primary" value="Primary" selected>События
                          </option>
                          <option data-label="danger" value="Danger">Праздники</option>
                          <option data-label="warning" value="Warning">Важно</option>
                          <option data-label="success" value="Success">Личное</option>
                          <option data-label="info" value="Info">Разное</option>
                        </select>

</div>

</div>
                      <div class="col-md-6 col-sm-6 col-12">
                        <div class="form-group start-date ">
                          <label for="start-date" class="">От:</label>
                          <div>
                            <input id="start-date" placeholder="Дата начала" class="form-control flatpickr-input position-relative"
                                   type="text" required>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-12">
                        <div class="form-group end-date ">
                          <label for="end-date" class="">До:</label>
                          <div>
                            <input id="end-date" placeholder="Дата окончания" type="text"
                                   class="form-control flatpickr-input position-relative" required>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="form-check form-switch">
                          <input type="checkbox" class="form-check-input allDay-switch" id="customSwitch3">
                          <label class="form-check-label" for="customSwitch3">Весь день</label>
                        </div>

                      </div>
                    </div>

                    <div class="row">
                      <div class="form-group">
                        <label for="event-url" class="form-label">URL</label>
                        <input type="url" class="form-control" id="event-url" placeholder="">
                      </div>
                      <div class="col-md-12">
                        <label for="start-date" class="">Описание события:</label>
                        <div class="event-description">
                          <textarea id="event-description-editor" placeholder="Введите описание" rows="3"
                                    class="form-control" name="event-description-editor"></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="form-group">
                        <div class="form-check form-switch">
                          <input type="checkbox" class="form-check-input repeat-switch" id="customSwitch4">
                          <label class="form-check-label" for="customSwitch4">Это событие повторяется</label>
                        </div>
                      </div>

                      <div class="col-4 repeat-col pe-0" style="display: none">
                        <div class="form-group repeat-options">
                          <div class="form-check mb-2">
                            <input type="radio" name="radios" class="form-check-input" id="daily">
                            <label class="form-check-label" for="daily">Ежедневно</label>
                          </div>
                          <div class="form-check mb-2">
                            <input type="radio" name="radios" class="form-check-input" id="weekly">
                            <label class="form-check-label" for="weekly">Еженедельно</label>
                          </div>
                          <div class="form-check mb-2">
                            <input type="radio" name="radios" class="form-check-input" id="monthly">
                            <label class="form-check-label" for="monthly">Ежемесячно</label>
                          </div>
                          <div class="form-check mb-2">
                            <input type="radio" name="radios" class="form-check-input" id="yearly">
                            <label class="form-check-label" for="yearly">Ежегодно</label>
                          </div>
                        </div>

                      </div>
                      <div class="col-8 repeat-col ps-0" style="display: none">

                        <div class="daily" style="display: block">
                          <div class="form-group d-flex align-items-end position-relative">
                            <div class="form-group mb-0 me-2">
                              <label for="dayrepopt">Выберите:</label>
                              <select class="form-control" id="dayrepopt">
                                <option value="1">Каждый(е)</option>
                                <option value="2">Каждый рабоч. день</option>
                                <option value="3">Каждый выход. день</option>
                              </select>
                            </div>
                            <input type="number" id="daynum" class="form-control me-2" style="width: 75px; display: inline-flex" max="365" min="1" value="1">
                            <label for="daynum" class="form-label mb-0" id="daynum-label" style="display: inline-flex">день(дней)</label>
                        </div>
                      </div>

                        <div class="weekly" style="display: none">
                          <div class="form-group">

                            <label for="weeknum" class="form-label">Повторять кажд. неделю</label>
                            <input id="weeknum" class="form-control">

                            <div class="mb-3 form-check">
                              <input type="checkbox" class="form-check-input" id="monday">
                              <label class="form-check-label" for="monday">Пн</label>
                            </div>
                            <div class="mb-3 form-check">
                              <input type="checkbox" class="form-check-input" id="tuesday">
                              <label class="form-check-label" for="tuesday">Вт</label>
                            </div>
                            <div class="mb-3 form-check">
                              <input type="checkbox" class="form-check-input" id="wednesday">
                              <label class="form-check-label" for="wednesday">Ср</label>
                            </div>
                            <div class="mb-3 form-check">
                              <input type="checkbox" class="form-check-input" id="thursday">
                              <label class="form-check-label" for="thursday">Чт</label>
                            </div>
                            <div class="mb-3 form-check">
                              <input type="checkbox" class="form-check-input" id="friday">
                              <label class="form-check-label" for="friday">Пт</label>
                            </div>
                            <div class="mb-3 form-check">
                              <input type="checkbox" class="form-check-input" id="saturday">
                              <label class="form-check-label" for="saturday">Сб</label>
                            </div>
                            <div class="mb-3 form-check">
                              <input type="checkbox" class="form-check-input" id="sunday">
                              <label class="form-check-label" for="sunday">Вс</label>
                            </div>

                          </div>
                        </div>

                        <div class="monthly" style="display: none">

                        </div>

                        <div class="yearly" style="display: none">

                        </div>

                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button id="add-event-btn" class="btn btn-primary add-event-btn" style="display: block;">Добавить
                событие
              </button>
              <button id="edit-event" class="btn btn-primary edit-event" style="display: none;">Сохранить</button>
              <button id="discard" class="btn btn-danger" data-dismiss="modal" style="display: block;">Отмена
              </button>
              <button id="delete" class="btn btn-danger btn-delete-event" data-dismiss="modal"
                      style="display: none;">Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
<div class="calendar-module card">
  <div class="card-body">
    <div id="calendar" class="calendar"></div>
  </div>
</div>
