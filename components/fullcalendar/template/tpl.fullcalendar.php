<main class="main-content scroll-y">
  <div class="p-3">
    <div class="calendar-wrapper">
      <!-- Модал добавления/редактирования события -->
      <div class="modal add-del-event-modal modal-slide-in" aria-labelledby="addEventsModal" style="display: none;">
        <div class="modal-dialog sidebar-lg h-100">
          <div class="modal-content add-edit-event-content h-100 overflow-hidden">
            <div class="overlayscrollbar h-100">
              <form class="event-form d-flex flex-column justify-content-between h-100" name="eventForm" novalidate>
                <div>
                  <div class="modal-header">
                    <h5 class="add-event-title modal-title">Добавить событие</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                  </div>
                  <div class="modal-body">
                    <div class="add-edit-event-box">
                      <div class="add-edit-event-content">
                        <fieldset>
                          <div class="row mt-3">
                            <div class="form-group">
                              <div class="d-flex flex-column">
                                <label for="eventTitle" class="">Название события:</label>
                                <textarea type="text" placeholder="Введите название" rows="2"
                                          class="form-control"
                                          name="eventTitle" id="eventTitle" required minlength="2"
                                          maxlength="100"></textarea>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="form-check form-switch">
                                <input type="checkbox" class="form-check-input" name="privateCheck" id="customSwitch1">
                                <label class="form-check-label" for="customSwitch1">Вижу только я (приватное
                                  событие)</label>
                              </div>
                            </div>

                            <div class="form-group">
                              <div class="d-flex flex-column">
                                <label for="select-label" class="">Категория события:</label>
                                <div class="cat-select position-relative" id="cat-select">
                                  <select class="select2 select-label form-control w-100" name="selectLabel"
                                          id="select-label" required></select>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 col-sm-6 col-12">
                              <div class="form-group start-date ">
                                <div class="d-flex flex-column">
                                  <label for="start-date" class="">Начало события:</label>
                                  <input name="dateStart" placeholder="Дата начала"
                                         class="form-control flatpickr-input position-relative"
                                         type="text" required id="start-date">
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 col-sm-6 col-12">
                              <div class="form-group end-date ">
                                <div class="d-flex flex-column">
                                  <label for="end-date" class="">Конец события:</label>
                                  <input name="dateEnd" placeholder="Дата окончания" type="text"
                                         class="form-control flatpickr-input position-relative" id="end-date" required>
                                </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="form-check form-switch">
                                <input type="checkbox" class="form-check-input" name="allDaySwitch" id="allDaySwitch">
                                <label class="form-check-label" for="allDaySwitch">Весь день</label>
                              </div>
                            </div>
                            <div class="col-md-12">
                              <label for="eventDescription" class="">Описание события:</label>
                              <div class="event-description">
                          <textarea placeholder="Введите описание" rows="3"
                                    class="form-control scroll-y" name="eventDescription"
                                    id="eventDescription"></textarea>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <div class="row mt-3">
                          <div class="form-group">
                            <div class="form-check form-switch">
                              <input type="checkbox" class="form-check-input" name="repeatSwitch" id="customSwitch2">
                              <label class="form-check-label" for="customSwitch2">Это событие повторяется</label>
                            </div>
                          </div>
                          <div class="col repeat-col" style="display: none">
                            <p class="mb-1">Шаблон повторения:</p>
                            <div class="daily" style="display: block">
                              <div class="form-group">
                                <select class="form-control" id="dayrepopt">
                                  <option value="none" selected>Выберите</option>
                                  <option value="daily-section">Ежедневно</option>
                                  <option value="weekly-section">Еженедельно</option>
                                  <option value="monthly-section">Ежемесячно</option>
                                  <option value="yearly-section">Ежегодно</option>
                                </select>
                              </div>
                              <div id="interval-section" style="display: none">
                                <div class="form-group d-flex align-items-center position-relative">
                                  <p class="mb-0 me-2" id="intervallabel1">Каждый</p>
                                  <input type="number" id="daynum" class="form-control me-2"
                                         style="width: 75px;" max="365" min="1" value="1">
                                  <label for="daynum" class="form-label mb-0" id="daynum-label">день</label>
                                </div>
                              </div>
                              <div id="weekly-section" style="display: none">

                                <div class="d-week-check d-flex">
                                  <div class="mb-3 form-check me-2">
                                    <input type="checkbox" class="form-check-input wdays-check" id="monday">
                                    <label class="form-check-label" for="monday">Пн</label>
                                  </div>
                                  <div class="mb-3 form-check me-2">
                                    <input type="checkbox" class="form-check-input wdays-check" id="tuesday">
                                    <label class="form-check-label" for="tuesday">Вт</label>
                                  </div>
                                  <div class="mb-3 form-check me-2">
                                    <input type="checkbox" class="form-check-input wdays-check" id="wednesday">
                                    <label class="form-check-label" for="wednesday">Ср</label>
                                  </div>
                                  <div class="mb-3 form-check me-2">
                                    <input type="checkbox" class="form-check-input wdays-check" id="thursday">
                                    <label class="form-check-label" for="thursday">Чт</label>
                                  </div>
                                  <div class="mb-3 form-check me-2">
                                    <input type="checkbox" class="form-check-input wdays-check" id="friday">
                                    <label class="form-check-label" for="friday">Пт</label>
                                  </div>
                                  <div class="mb-3 form-check me-2">
                                    <input type="checkbox" class="form-check-input wdays-check" id="saturday">
                                    <label class="form-check-label text-danger" for="saturday">Сб</label>
                                  </div>
                                  <div class="mb-3 form-check me-2">
                                    <input type="checkbox" class="form-check-input wdays-check" id="sunday">
                                    <label class="form-check-label text-danger" for="sunday">Вс</label>
                                  </div>

                                </div>

                              </div>
                              <div id="monthly-section" style="display: none">
                                <div class="form-check mb-3">
                                  <div class="form-group d-flex align-items-end position-relative mb-0">
                                    <input type="radio" name="radios" class="form-check-input me-2" id="Radio1">
                                    <label class="form-check-label me-2" for="Radio1">Каждое</label>
                                    <input class="form-control me-2" type="number" max="31" min="1" id="dayofmonth"
                                           style="width: 75px">
                                    <label for="dayofmonth">число месяца</label>
                                  </div>
                                </div>
                                <div class="form-check mb-3">
                                  <input type="radio" name="radios" class="form-check-input me-2" id="month3">
                                  <label class="form-check-label me-2" for="month3">Первый день месяца</label>
                                </div>
                                <div class="form-check mb-3">
                                  <input type="radio" name="radios" class="form-check-input me-2" id="month1">
                                  <label class="form-check-label me-2" for="month1">Последний день месяца</label>
                                </div>
                                <div class="form-check mb-3">
                                  <input type="radio" name="radios" class="form-check-input me-2" id="month4">
                                  <label class="form-check-label me-2" for="month4">Первый рабочий день месяца</label>
                                </div>
                                <div class="form-check mb-3">
                                  <input type="radio" name="radios" class="form-check-input me-2" id="month5">
                                  <label class="form-check-label me-2" for="month5">Последний рабочий день
                                    месяца</label>
                                </div>
                              </div>
                              <div id="repdiap">
                                <p>Диапазон повторения:</p>
                                <div class="form-group startrep-date">
                                  <label for="startrep-date" class="">Начало повторения:</label>
                                  <div>
                                    <input id="startrep-date" placeholder="Дата начала"
                                           class="form-control flatpickr-input position-relative"
                                           type="text">
                                  </div>
                                  <p class="mt-3">Конец повторения (если не выбрано - бесконечно):</p>
                                  <div class="form-check mt-3">
                                    <div class="form-group d-flex align-items-end position-relative">
                                      <input type="checkbox" name="radios" class="form-check-input me-2 flex-shrink-0"
                                             id="Radio5">
                                      <label class="form-check-label flex-shrink-0 me-2" for="Radio5">Закончить после</label>
                                      <input id="endrep-date" placeholder="Дата окончания"
                                             class="form-control flatpickr-input position-relative"
                                             type="text" disabled>
                                      <label for="endrep-date"></label>
                                    </div>

                                    <div class="form-group d-flex align-items-end position-relative">
                                      <input type="checkbox" name="radios" class="form-check-input me-2 flex-shrink-0" id="Radio6">
                                      <label class="form-check-label me-2 flex-shrink-0" for="Radio6">Закончить после</label>
                                      <input class="form-control me-2" type="number" id="repcount" style="width: 75px"
                                             value="1" disabled>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p class="text-danger delete-warning mt-3">Внимание. Удаляя повторяющееся
                          событие, вы удаляете
                          ВСЕ повторения.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button class="btn btn-primary add-update-event-submit btn-submit" type="submit">Добавить
                    событие
                  </button>
                  <button class="btn btn-outline-danger delete-discard-event-button">Отмена
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="row" style="flex-wrap: nowrap">
        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 pe-0">
          <div class="d-flex align-items-center justify-content-center pt-5">
            <img src="assets/img/cosmonaut-laptop.svg" alt="" style="width: 60%; height: auto"
                 class="align-items-center">
          </div>
          <div class="filter-group calendar-private-filter flex-column align-items-start p-3">
            <p class="group-title mb-2">События:</p>
            <div class="form-check d-flex align-items-center mb-2">
              <input class="form-check-input bg-primary me-2" type="checkbox" id="Private" name="Private">
              <label class="form-check-label" for="Private">Только мои</label>
            </div>
          </div>
          <div class="filter-group calendar-events-filter flex-column align-items-start p-3" id="calEventFilter">
          </div>
        </div>
        <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 ps-0">
          <div class="card-body">
            <div class="calendar-module">
              <div id="calendar" class="calendar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
</main>
