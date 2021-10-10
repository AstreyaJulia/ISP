    <div class="row">
      <!-- Левая половина дашбоарда-->
      <div class="col-8">
        <!-- Первая линия левой части дашбоарда-->
          <div class="card widget mb-3">
            <div id="carouselNews" class="carousel slide" data-bs-ride="carousel">
            </div>
          </div>
        <div class="card widget news-list">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="widget-title">Последние новости</h5>
              <a href="#" class="btn btn-outline-primary btn-sm mb-3">Все новости</a>
            </div>
            <ul class="list-group d-flex flex-column">
              <li class="list-group-item d-flex w-100">
                <div class="news-body flex-grow-1">
                  <div class="news-header d-flex justify-content-between">
                    <span class="badge bg-primary mb-2">Обновления</span>
                    <small class="opacity-50 text-nowrap">сейчас</small>
                  </div>
                  <h6 class="news-header mb-1 text-gray-dark"style="text-overflow: ellipsis; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">Обновление ПИ СДП, ПИ БСР, ПИ Судимость, ПИ Право, ПИ ПОЭСО, ПИ АУ, ПИ ОО, ПИ Присяжные, ПИ ИСП, ПИ ИК, ПИ Фемида, ПИ СТАКС, ПИ Недвижимость, ПИ Кадры-П</h6>
                  <p class="news-text text-gray-dark mb-0"style="text-overflow: ellipsis; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">ПИ СДП обновилось до версии 33.0.456. О всех изменениях в ПИ СДП после обновления можно почитать по ссылке</p>
                  <div class="news-footer d-flex justify-content-between">
                    <a href="#">Подробнее</a>
                    <div class="news-toolbuttons">
                      <a role="button" class="p-1" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="В избранное"><i class="mdi mdi-heart-outline text-secondary opacity-50"></i></a>
                      <a role="button" class="p-1" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Скопировать ссылку"><i class="mdi mdi-share-variant-outline text-secondary opacity-50"></i></a>
                      <a class="ms-3 p-1" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Просмотры"><i class="mdi mdi-eye-outline text-secondary opacity-50"></i><small class="ms-1 text-secondary opacity-50">10</small></a>
                    </div>
                  </div>
                </div>
              </li>
              <li class="list-group-item d-flex w-100">
                <div class="news-body flex-grow-1">
                  <div class="news-header d-flex justify-content-between">
                    <span class="badge bg-info mb-2">Литература</span>
                    <small class="opacity-50 text-nowrap">31.09.2021</small>
                  </div>
                  <h6 class="news-header mb-1 text-gray-dark">Вестник фемиды</h6>
                  <p class="news-text text-gray-dark mb-0">Вестник фемиды №9 2021 год</p>
                  <div class="news-footer d-flex justify-content-between">
                    <a href="#">Подробнее</a>
                    <div class="news-toolbuttons">
                      <a role="button" class="p-1" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="В избранное"><i class="mdi mdi-heart-outline text-secondary opacity-50"></i></a>
                      <a role="button" class="p-1" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Скопировать ссылку"><i class="mdi mdi-share-variant-outline text-secondary opacity-50"></i></a>
                      <a class="ms-3 p-1" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Просмотры"><i class="mdi mdi-eye-outline text-secondary opacity-50"></i><small class="ms-1 text-secondary opacity-50">10</small></a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Правая половина дашбоарда-->
      <div class="col-4">
        <div class="card mb-3 widget">
          <div class="card-body">
            <div class="today-calendar">
              <div class="today-calendar-widget"></div>
            </div>
          </div>
        </div>
        <div class="card widget today-events mb-3 visually-hidden"><!-- Пока нет календаря-->
          <div class="card-body">
            <h5 class="widget-title">События сегодня</h5>
            <ul class="today-events-list">
              <li class="today-events-item">
                <p class="event-time">Весь день</p>
                <div class="event-group info">
                  <p class="event-title">Событие</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="card widget today-birthdays <?php visuallyHidden($birthday); ?>">
          <div class="card-body">
            <h5 class="widget-title">Дни рождения сегодня</h5>
            <ul class="today-birthdays-list">
              <?php foreach ($birthday as $row): ?>
                <li class="today-birthdays-item">
                  <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 512 512" xml:space="preserve">
<path style="fill:#E1E1E3;" d="M255.99,90.042c-4.807,0-8.705-3.897-8.705-8.705V46.624c0-4.807,3.897-8.705,8.705-8.705
	c4.807,0,8.705,3.897,8.705,8.705v34.713C264.694,86.145,260.797,90.042,255.99,90.042z"/>
                    <path style="fill:#D9D9DB;" d="M463.879,509.904H48.121C21.545,509.904,0,488.359,0,461.783l0,0h512l0,0
	C512,488.359,490.455,509.904,463.879,509.904z"/>
                    <path style="fill:#E1E1E3;" d="M33.658,461.783H0c0,26.576,21.545,48.121,48.121,48.121h33.658
	C55.203,509.904,33.658,488.359,33.658,461.783z"/>
                    <g>
                      <path style="fill:#C8C6CD;" d="M458.611,461.783c0,26.576-21.545,48.121-48.121,48.121h53.389
		c26.576,0,48.121-21.545,48.121-48.121H458.611z"/>
                      <path style="fill:#C8C6CD;" d="M396.483,461.783c0,26.576-13.851,48.121-30.936,48.121h34.322
		c17.086,0,30.936-21.545,30.936-48.121H396.483z"/>
                    </g>
                    <path style="fill:#EDA156;" d="M275.872,32.412c0,10.975-8.896,19.871-19.871,19.871c-10.975,0-19.871-8.896-19.871-19.871
	c0-8.152,10.963-22.141,16.604-28.799c1.714-2.023,4.821-2.023,6.536,0C264.909,10.271,275.872,24.26,275.872,32.412z"/>
                    <path style="fill:#D9D9DB;" d="M279.687,175.406h-47.371V77.973c0-5.198,4.214-9.412,9.412-9.412h28.547
	c5.198,0,9.412,4.214,9.412,9.412v97.433H279.687z"/>
                    <g>
                      <path style="fill:#F9DE8F;" d="M441.295,318.594H70.704c-18.026,0-32.638,14.612-32.638,32.638v110.55h435.868v-110.55
		C473.934,333.207,459.321,318.594,441.295,318.594z"/>
                      <path style="fill:#F9DE8F;" d="M392.016,175.406H120.927c-15.629,0-28.3,12.671-28.3,28.3v114.889h327.689V203.705
		C420.316,188.075,407.645,175.406,392.016,175.406z"/>
                    </g>
                    <g>
                      <path style="fill:#F7CF6D;" d="M441.295,318.594h-28.639c18.026,0,32.638,14.612,32.638,32.638v110.55h28.639v-110.55
		C473.934,333.207,459.321,318.594,441.295,318.594z"/>
                      <path style="fill:#F7CF6D;" d="M392.016,175.406h-28.629c15.629,0,28.817,12.573,28.817,28.202v114.889l28.111,0.098V203.705
		C420.316,188.075,407.645,175.406,392.016,175.406z"/>
                    </g>
                    <path style="fill:#F09EA0;" d="M392.016,175.406H120.927c-15.629,0-28.3,12.671-28.3,28.3v36.719h0.48
	c18.194-0.427,17.913-23.188,35.247-23.286c17.394-0.097,23.907,27.057,41.713,27.107c17.919,0.05,24.792-27.413,43.394-27.572
	c18.148-0.156,24.944,25.871,43.685,25.854c18.572-0.016,26.262-25.589,43.407-25.087c16.801,0.491,20.939,25.392,37.747,25.887
	c17.264,0.507,25.571-25.402,43.407-25.087c17.548,0.309,21.033,26.804,38.129,27.061l0.48-0.033v-41.562
	C420.316,188.075,407.645,175.406,392.016,175.406z"/>
                    <path style="fill:#EF8990;" d="M392.016,175.406h-28.629c15.629,0,28.817,12.573,28.817,28.202v18.598
	c9.471,7.468,14.6,22.898,27.63,23.094l0.48-0.032v-41.562C420.316,188.075,407.645,175.406,392.016,175.406z"/>
                    <path style="fill:#F09EA0;" d="M441.286,318.594H70.694c-18.026,0-32.638,14.612-32.638,32.638v34.05
	c17.709-0.814,17.598-23.159,34.777-23.256c17.394-0.098,23.908,27.057,41.713,27.107c17.919,0.05,24.792-27.413,43.394-27.572
	c18.148-0.156,24.944,25.871,43.685,25.854c18.572-0.016,26.262-25.589,43.407-25.087c16.801,0.491,20.939,25.392,37.747,25.887
	c17.264,0.507,25.571-25.402,43.407-25.087c17.548,0.309,21.707,24.03,38.802,24.287c18.572-0.016,26.262-25.589,43.407-25.087
	c16.801,0.491,20.939,25.392,37.747,25.887c11.187,0.328,18.613-10.434,27.307-17.967l0.472-0.245v-18.77
	C473.924,333.207,459.312,318.594,441.286,318.594z"/>
                    <path style="fill:#EF8990;" d="M441.295,318.594h-28.639c18.026,0,32.638,14.612,32.638,32.638v36.929
	c0.283,0.023,0.568,0.045,0.859,0.053c11.187,0.328,18.613-10.434,27.307-17.967l0.472-0.245v-18.77
	C473.934,333.207,459.321,318.594,441.295,318.594z"/>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
</svg>
                  <div class="bday-group primary">
                    <p class="today-birthdays-username"><?= $UserAttributes->getShortFIO($row->fullname) ?></p>
                    <p class="today-birthdays-date">День рождения. Исполняется <span><?= $row->age ?></span></p>
                  </div>
                </li>
              <?php endforeach ?>
            </ul>
          </div>
        </div>
      </div>
    </div>


