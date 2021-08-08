<div class="row">
  <div class="col-8">
    <div class="card">
      <div id="carouselNews" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
        </div>
        <div class="carousel-inner">
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselNews"
                data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span> <span
            class="visually-hidden">Предыдущий</span></button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselNews"
                data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span> <span
            class="visually-hidden">Следующий</span></button>
      </div>
    </div>
  </div>
  <div class="col-4">
    <div class="card">
      <div class="card-body">
        <div class="today-calendar">
          <div class="today-calendar-widget"></div>
        </div>
        <div class="today-events">
          <h5 class="widget-title">Сегодня</h5>
          <ul class="today-events-list visually-hidden"><!-- Пока нет календаря-->
            <li class="today-events-item">
              <p class="event-time">Весь день</p>
              <div class="event-group info">
                <p class="event-title">Событие</p>
              </div>
            </li>
          </ul>
          <ul class="today-birthdays-list <?php visuallyHidden($birthday); ?>">
            <?php foreach ($birthday as $row): ?>
              <li class="today-birthdays-item">
                <i class="mdi mdi-cake"></i>
                <div class="bday-group primary">
                  <p class="today-birthdays-username"><?= $userClass->getShortFIO($row->fullname) ?></p>
                  <p class="today-birthdays-date"><?= $row->dob ?></p>
                </div>
              </li>
            <?php endforeach ?>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
