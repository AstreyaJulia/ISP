<main class="main-content scroll-y">
  <div class="p-3 pt-0">
    <header class="main-content-header d-flex align-items-center justify-content-between flex-wrap p-2">
      <div class="header-left d-flex align-items-center justify-content-between p-2">
        <p class="h5 surtitle mb-0"><?= $title; ?></p>
      </div>
      <div class="header-right d-flex align-items-center justify-content-between p-2">
      </div>
    </header>

    <div class="row">
      <!-- Левая половина дашбоарда. Широкая-->
      <div class="col-xxl-9 col-xl-8 col-lg-8 col-md-7 col-sm-6 col-12">
        <!-- Первая строка левой половины -->
        <div class="row">

          <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="card overflow-hidden mb-3">
                <div class="bg-primary">
                  <div class="row">
                    <div class="col-7">
                      <div class="p-3">
                        <p class="text-white text-uppercase  fw-bold font-small-1">С возвращением,</p>
                        <p class="font-size-15 text-truncate text-light"><?= shortFIO($_COOKIE['aut']['fullname']) ?></p>

                      </div>
                    </div>
                    <div class="col-5 align-self-end d-flex align-items-center justify-content-end">
                      <img src="/assets/img/profile-img.png" alt="" class="img-fluid m-3" style="width: 80px">
                    </div>
                  </div>
                </div>
              </div>

            <!-- <div id="carouselNews" class="carousel slide card mb-3" data-bs-ride="carousel"></div> -->

          </div>

          <div class="col-xxl-8 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <!-- Новости
            <div class="news-widget">
              <div class="news-list d-flex flex-wrap">
                <div class="card widget flex-grow-1 mb-3">
                  <div class="card-body">
                    <div class="news-body flex-grow-1">
                      <div class="news-header d-flex justify-content-between">
                        <span class="badge bg-primary-lighter mb-2 text-primary">Обновления</span>
                        <small class="opacity-50 text-nowrap">сейчас</small>
                      </div>
                      <p class="news-header mb-1"
                         style="text-overflow: ellipsis; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">
                        Обновление ПИ СДП, ПИ БСР, ПИ Судимость, ПИ Право, ПИ ПОЭСО, ПИ АУ, ПИ ОО, ПИ Присяжные, ПИ ИСП,
                        ПИ ИК,
                        ПИ Фемида, ПИ СТАКС, ПИ Недвижимость, ПИ Кадры-П</p>
                      <div class="news-footer d-flex justify-content-between">
                        <a href="#">Подробнее</a>
                        <div class="news-toolbuttons">
                          <a role="button" class="p-1" data-bs-toggle="tooltip" data-bs-placement="bottom"
                             data-bs-original-title="В избранное"><i
                              class="mdi mdi-heart-outline text-secondary opacity-50"></i></a>
                          <a role="button" class="p-1" data-bs-toggle="tooltip" data-bs-placement="bottom"
                             data-bs-original-title="Скопировать ссылку"><i
                              class="mdi mdi-share-variant-outline text-secondary opacity-50"></i></a>
                          <a class="ms-3 p-1" data-bs-toggle="tooltip" data-bs-placement="bottom"
                             data-bs-original-title="Просмотры"><i
                              class="mdi mdi-eye-outline text-secondary opacity-50"></i><small
                              class="ms-1 text-secondary opacity-50">10</small></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card widget flex-grow-1 mb-3">
                  <div class="card-body">
                    <div class="news-body flex-grow-1">
                      <div class="news-header d-flex justify-content-between">
                        <span class="badge bg-info-lighter mb-2 text-info">Литература</span>
                        <small class="opacity-50 text-nowrap">31.09.2021</small>
                      </div>
                      <p class="news-header mb-1">Вестник фемиды</p>
                      <div class="news-footer d-flex justify-content-between">
                        <a href="#">Подробнее</a>
                        <div class="news-toolbuttons">
                          <a role="button" class="p-1" data-bs-toggle="tooltip" data-bs-placement="bottom"
                             data-bs-original-title="В избранное"><i
                              class="mdi mdi-heart-outline text-secondary opacity-50"></i></a>
                          <a role="button" class="p-1" data-bs-toggle="tooltip" data-bs-placement="bottom"
                             data-bs-original-title="Скопировать ссылку"><i
                              class="mdi mdi-share-variant-outline text-secondary opacity-50"></i></a>
                          <a class="ms-3 p-1" data-bs-toggle="tooltip" data-bs-placement="bottom"
                             data-bs-original-title="Просмотры"><i
                              class="mdi mdi-eye-outline text-secondary opacity-50"></i><small
                              class="ms-1 text-secondary opacity-50">10</small></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center mb-3">
                <a href="#" class="btn btn-outline-primary btn-sm">Все новости</a>
              </div>
            </div>
            -->
          </div>

        </div>
      </div>

      <!-- Правая половина дашбоарда. Узкая-->
      <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-5 col-sm-6 col-12">

        <div class="card mb-3 container-fluid p-0">
          <div class="card-body">
            <div class="today-calendar">
              <div class="today-calendar-widget"></div>
            </div>
          </div>
        </div>

        <div class="card today-events mb-3 visually-hidden"><!-- Пока нет календаря-->
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
        <div class="card position-relative bg-primary widget-bdays <?php visuallyHidden($birthday); ?>">
          <div>
            <div class="row g-0">
              <div class="col-9">
                <div class="card-body">
                  <p class="text-white text-uppercase fw-bold mb-0 font-small-1">Дни рождения сегодня</p>
                  <ul class="today-birthdays-list list-unstyled px-3 mb-0 mx-auto d-flex align-items-center flex-wrap">
                    <?php foreach ($birthday as $row): ?>
                      <li class="today-birthdays-item d-flex align-items-center mt-3 me-4">
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             x="0px"
                             y="0px"
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
                        <div class="bday-group d-flex flex-column ms-3">
                          <p
                            class="today-birthdays-username m-0 fw-bold"><?= $UserAttributes->getShortFIO($row->fullname) ?></p>
                          <p class="today-birthdays-date m-0">Исполняется <span><?= $row->age ?></span></p>
                        </div>
                      </li>
                    <?php endforeach ?>
                  </ul>
                </div>

              </div>
              <div class="col-3 d-flex flex-column">
                <img src="../../../assets/img/decore-left.png" class="congratulations-img-left" alt="card-img-left" style="height: auto">
                <img src="../../../assets/img/decore-right.png" class="congratulations-img-right" alt="card-img-right" style="height: auto">
              </div>
            </div>
          </div>

        </div>
      </div>
</main>



