<?php
$title = "UI Kit";

$content = '
<header class="main-content-header">
      <div class="header-left">
      <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Назад" aria-label="Назад"><i class="mdi mdi-24px mdi-arrow-left"></i></a>
        <p class="h5 main-content-title">UI Kit</p>
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
      </div>
    </header>
<div class="uikit">
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Цвета</h5>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <p class="h5">Primary. Первичный цвет</p>
            <div>
              <span class="badge rounded-pill bg-primary">Primary</span>
              <span class="badge rounded-pill bg-primary-dark">Primary dark</span>
              <span class="badge rounded-pill bg-primary-light">Primary light</span>
              <span class="badge rounded-pill bg-primary-50">Primary 50%</span>
              <span class="badge rounded-pill bg-primary-20">Primary 20%</span>
            </div>
          </div>
          <div class="row">
            <p class="h5">Secondary. Вторичный цвет</p>
            <div>
              <span class="badge rounded-pill bg-secondary">Secondary</span>
              <span class="badge rounded-pill bg-secondary-dark">Secondary dark</span>
              <span class="badge rounded-pill bg-secondary-light">Secondary light</span>
              <span class="badge rounded-pill bg-secondary-50">Secondary 50%</span>
              <span class="badge rounded-pill bg-secondary-20">Secondary 20%</span>
            </div>
          </div>
          <div class="row">
            <p class="h5">Success</p>
            <div>
              <span class="badge rounded-pill bg-success">Success</span>
              <span class="badge rounded-pill bg-success-dark">Success dark</span>
              <span class="badge rounded-pill bg-success-light">Success light</span>
              <span class="badge rounded-pill bg-success-50">Success 50%</span>
              <span class="badge rounded-pill bg-success-20">Success 20%</span>
            </div>
          </div>
          <div class="row">
            <p class="h5">danger</p>
            <div>
              <span class="badge rounded-pill bg-danger">danger</span>
              <span class="badge rounded-pill bg-danger-dark">danger dark</span>
              <span class="badge rounded-pill bg-danger-light">danger light</span>
              <span class="badge rounded-pill bg-danger-50">danger 50%</span>
              <span class="badge rounded-pill bg-danger-20">danger 20%</span>
            </div>
          </div>
          <div class="row">
            <p class="h5">Warning</p>
            <div>
              <span class="badge rounded-pill bg-warning">Warning</span>
              <span class="badge rounded-pill bg-warning-dark">Warning dark</span>
              <span class="badge rounded-pill bg-warning-light">Warning light</span>
              <span class="badge rounded-pill bg-warning-50">Warning 50%</span>
              <span class="badge rounded-pill bg-warning-20">Warning 20%</span>
            </div>
          </div>
          <div class="row">
            <p class="h5">Info</p>
            <div>
              <span class="badge rounded-pill bg-info">Info</span>
              <span class="badge rounded-pill bg-info-dark">Info dark</span>
              <span class="badge rounded-pill bg-info-light">Info light</span>
              <span class="badge rounded-pill bg-info-50">Info 50%</span>
              <span class="badge rounded-pill bg-info-20">Info 20%</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Градиенты</h5>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <span class="badge rounded-pill bg-gradient-primary p-3">gradient-primary</span>
            <span class="badge rounded-pill bg-gradient-success p-3">gradient-success</span>
            <span class="badge rounded-pill bg-gradient-danger p-3">gradient-danger</span>
            <span class="badge rounded-pill bg-gradient-info p-3">gradient-info</span>
            <span class="badge rounded-pill bg-gradient-warning p-3">gradient-warning</span>
            <span class="badge rounded-pill bg-gradient-progress p-3">gradient-progress</span>
            <span class="badge rounded-pill bg-gradient-menu p-3">gradient-menu</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Типография</h5>
        <a class="d-flex align-items-center"
           href="https://getbootstrap.com/docs/5.1/content/typography/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div>
            <div class="bd-example">
              <p class="display-1">Отображение 1</p>
              <p class="display-2">Отображение 2</p>
              <p class="display-3">Отображение 3</p>
              <p class="display-4">Отображение 4</p>
              <p class="display-5">Отображение 5</p>
              <p class="display-6">Отображение 6</p>
            </div>

            <div class="bd-example">
              <p class="h1">Заголовок 1</p>
              <p class="h2">Заголовок 2</p>
              <p class="h3">Заголовок 3</p>
              <p class="h4">Заголовок 4</p>
              <p class="h5">Заголовок 5</p>
              <p class="h6">Заголовок 6</p>
            </div>

            <div class="bd-example">
              <p class="lead">
                Это ведущий абзац. Он выделяется из обычных абзацев.
              </p>
            </div>

            <div class="bd-example">
              <p>Вы можете использовать тег mark, чтобы
                <mark>выделить</mark>
                текст.
              </p>
              <p>
                <del>Эта строка текста должна рассматриваться как удаленный текст.</del>
              </p>
              <p><s>Эта строка текста считается неточной.</s></p>
              <p>
                <ins>Эта строка текста должна рассматриваться как дополнение к документу.</ins>
              </p>
              <p><u>Эта строка текста будет подчеркнута.</u></p>
              <p><small>Эта строка текста предназначена для работы с мелким шрифтом.</small></p>
              <p><strong>Эта строка выделена жирным шрифтом.</strong></p>
              <p><em>Эта строка выделена курсивом.</em></p>
            </div>

            <div class="bd-example">
              <blockquote class="blockquote">
                <p>Известная цитата, содержащаяся в теге blockquote.</p>
                <footer class="blockquote-footer">Кто-то известный в <cite title="Заголовке Источника">Заголовке
                  Источника</cite>
                </footer>
              </blockquote>
            </div>

            <div class="bd-example">
              <ul class="list-unstyled">
                <li>This is a list.</li>
                <li>It appears completely unstyled.</li>
                <li>Structurally, it`s still a list.</li>
                <li>However, this style only applies to immediate child elements.</li>
                <li>Nested lists:
                  <ul>
                    <li>are unaffected by this style</li>
                    <li>will still show a bullet</li>
                    <li>and have appropriate left margin</li>
                  </ul>
                </li>
                <li>This may still come in handy in some situations.</li>
              </ul>
            </div>

            <div class="bd-example">
              <ul class="list-inline">
                <li class="list-inline-item">This is a list item.</li>
                <li class="list-inline-item">And another one.</li>
                <li class="list-inline-item">But they`re displayed inline.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Images</h5>
        <a class="d-flex align-items-center" href="https://getbootstrap.com/docs/5.1/content/images/">Документация</a>
      </div>

    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div>
            <div class="bd-example">
              <svg class="bd-placeholder-img bd-placeholder-img-lg img-fluid" width="100%" height="250"
                   xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Responsive image"
                   preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Responsive image</text>
              </svg>

            </div>

            <div class="bd-example">
              <svg class="bd-placeholder-img img-thumbnail" width="200" height="200" xmlns="http://www.w3.org/2000/svg"
                   role="img"
                   aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200"
                   preserveAspectRatio="xMidYMid slice" focusable="false"><title>A generic square placeholder image with
                a white border around it, making it resemble a photograph taken with an old instant camera</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">200x200</text>
              </svg>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Tables</h5>
        <a class="d-flex align-items-center" href="https://getbootstrap.com/docs/5.1/content/tables/">Документация</a>
      </div>

    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div>
            <div class="bd-example">
              <table class="table table-striped">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div class="bd-example">
              <table class="table table-dark table-borderless">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div class="bd-example">
              <table class="table table-hover">
                <thead>
                <tr>
                  <th scope="col">Class</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">Default</th>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>

                <tr class="table-primary">
                  <th scope="row">Primary</th>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr class="table-secondary">
                  <th scope="row">Secondary</th>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr class="table-success">
                  <th scope="row">Success</th>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr class="table-danger">
                  <th scope="row">Danger</th>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr class="table-warning">
                  <th scope="row">Warning</th>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr class="table-info">
                  <th scope="row">Info</th>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr class="table-light">
                  <th scope="row">Light</th>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr class="table-dark">
                  <th scope="row">Dark</th>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div class="bd-example">
              <table class="table table-sm table-bordered">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Figures</h5>
        <a class="d-flex align-items-center" href="https://getbootstrap.com/docs/5.1/content/figures/">Документация</a>
      </div>

    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div>
            <div class="bd-example">
              <figure class="figure">
                <svg class="bd-placeholder-img figure-img img-fluid rounded" width="400" height="300"
                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 400x300"
                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">400x300</text>
                </svg>

                <figcaption class="figure-caption">A caption for the above image.</figcaption>
              </figure>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <h4 class="fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3">Forms</h4>
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Overview</h5>
        <a class="d-flex align-items-center" href="https://getbootstrap.com/docs/5.1/forms/overview/">Документация</a>
      </div>

    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div>
            <div class="bd-example">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                         autocomplete="off"
                         style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
                  <div id="emailHelp" class="form-text">We`ll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" autocomplete="off"
                         style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <fieldset class="mb-3">
                  <legend>Radios buttons</legend>
                  <div class="form-check">
                    <input type="radio" name="radios" class="form-check-input" id="exampleRadio1">
                    <label class="form-check-label" for="exampleRadio1">Default radio</label>
                  </div>
                  <div class="mb-3 form-check">
                    <input type="radio" name="radios" class="form-check-input" id="exampleRadio2">
                    <label class="form-check-label" for="exampleRadio2">Another radio</label>
                  </div>
                </fieldset>
                <div class="mb-3">
                  <label class="form-label" for="customFile">Upload</label>
                  <input type="file" class="form-control" id="customFile">
                </div>
                <div class="mb-3 form-check form-switch">
                  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="">
                  <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                </div>
                <div class="mb-3">
                  <label for="customRange3" class="form-label">Example range</label>
                  <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Disabled forms</h5>
        <a class="d-flex align-items-center" href="https://getbootstrap.com/docs/5.1/forms/overview/#disabled-forms">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div>
            <div class="bd-example">
              <form>
                <fieldset disabled="" aria-label="Disabled fieldset example">
                  <div class="mb-3">
                    <label for="disabledTextInput" class="form-label">Disabled input</label>
                    <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input"
                           autocomplete="off"
                           style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
                  </div>
                  <div class="mb-3">
                    <label for="disabledSelect" class="form-label">Disabled select menu</label>
                    <select id="disabledSelect" class="form-select">
                      <option>Disabled select</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled="">
                      <label class="form-check-label" for="disabledFieldsetCheck">
                        Can`t check this
                      </label>
                    </div>
                  </div>
                  <fieldset class="mb-3">
                    <legend>Disabled radios buttons</legend>
                    <div class="form-check">
                      <input type="radio" name="radios" class="form-check-input" id="disabledRadio1" disabled="">
                      <label class="form-check-label" for="disabledRadio1">Disabled radio</label>
                    </div>
                    <div class="mb-3 form-check">
                      <input type="radio" name="radios" class="form-check-input" id="disabledRadio2" disabled="">
                      <label class="form-check-label" for="disabledRadio2">Another radio</label>
                    </div>
                  </fieldset>
                  <div class="mb-3">
                    <label class="form-label" for="disabledCustomFile">Upload</label>
                    <input type="file" class="form-control" id="disabledCustomFile" disabled="">
                  </div>
                  <div class="mb-3 form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="disabledSwitchCheckChecked" checked=""
                           disabled="">
                    <label class="form-check-label" for="disabledSwitchCheckChecked">Disabled checked switch checkbox
                      input</label>
                  </div>
                  <div class="mb-3">
                    <label for="disabledRange" class="form-label">Disabled range</label>
                    <input type="range" class="form-range" min="0" max="5" step="0.5" id="disabledRange">
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Sizing</h5>
        <a class="d-flex align-items-center" href="https://getbootstrap.com/docs/5.1/forms/form-control/#sizing">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div>
            <div class="bd-example">
              <div class="mb-3">
                <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg"
                       aria-label=".form-control-lg example">
              </div>
              <div class="mb-3">
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option selected="">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="mb-3">
                <input type="file" class="form-control form-control-lg" aria-label="Large file input example">
              </div>
            </div>

            <div class="bd-example">
              <div class="mb-3">
                <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm"
                       aria-label=".form-control-sm example">
              </div>
              <div class="mb-3">
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                  <option selected="">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="mb-3">
                <input type="file" class="form-control form-control-sm" aria-label="Small file input example">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Input group</h5>
        <a class="d-flex align-items-center"
           href="https://getbootstrap.com/docs/5.1/forms/input-group/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div>
            <div class="bd-example">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                       aria-describedby="basic-addon1">
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient`s username"
                       aria-label="Recipient`s username" aria-describedby="basic-addon2">
                <span class="input-group-text" id="basic-addon2">@example.com</span>
              </div>
              <label for="basic-url" class="form-label">Your vanity URL</label>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text">$</span>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                <span class="input-group-text">.00</span>
              </div>
              <div class="input-group">
                <span class="input-group-text">With textarea</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Floating labels</h5>
        <a class="d-flex align-items-center" href="https://getbootstrap.com/docs/5.1/forms/floating-labels/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div>
            <div class="bd-example">
              <form _lpchecked="1">
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                         autocomplete="off"
                         style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                         autocomplete="off"
                         style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
                  <label for="floatingPassword">Password</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Validation</h5>
        <a class="d-flex align-items-center" href="https://getbootstrap.com/docs/5.1/forms/validation/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div>
            <div class="bd-example">
              <form class="row g-3" _lpchecked="1">
                <div class="col-md-4">
                  <label for="validationServer01" class="form-label">First name</label>
                  <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required=""
                         style="cursor: auto;">
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div class="col-md-4">
                  <label for="validationServer02" class="form-label">Last name</label>
                  <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required="">
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div class="col-md-4">
                  <label for="validationServerUsername" class="form-label">Username</label>
                  <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend3">@</span>
                    <input type="text" class="form-control is-invalid" id="validationServerUsername"
                           aria-describedby="inputGroupPrepend3" required="">
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="validationServer03" class="form-label">City</label>
                  <input type="text" class="form-control is-invalid" id="validationServer03" required="">
                  <div class="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div class="col-md-3">
                  <label for="validationServer04" class="form-label">State</label>
                  <select class="form-select is-invalid" id="validationServer04" required="">
                    <option selected="" disabled="" value="">Choose...</option>
                    <option>...</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-3">
                  <label for="validationServer05" class="form-label">Zip</label>
                  <input type="text" class="form-control is-invalid" id="validationServer05" required="">
                  <div class="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required="">
                    <label class="form-check-label" for="invalidCheck3">
                      Agree to terms and conditions
                    </label>
                    <div class="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <h4 class="fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3">Components</h4>
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Accordion</h5>
        <a class="d-flex align-items-center"
           href="https://getbootstrap.com/docs/5.1/components/accordion/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div id="accordion">
            <div class="bd-example">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h4 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Accordion Item #1
                    </button>
                  </h4>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                       data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>This is the first item`s accordion body.</strong> It is hidden by default, until the
                      collapse plugin adds the appropriate classes that we use to style each element. These classes
                      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                      modify any of this with custom CSS or overriding our default variables. It`s also worth noting
                      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                      does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h4 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Accordion Item #2
                    </button>
                  </h4>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                       data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>This is the second item`s accordion body.</strong> It is hidden by default, until the
                      collapse plugin adds the appropriate classes that we use to style each element. These classes
                      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                      modify any of this with custom CSS or overriding our default variables. It`s also worth noting
                      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                      does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h4 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Accordion Item #3
                    </button>
                  </h4>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                       data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>This is the third item`s accordion body.</strong> It is hidden by default, until the
                      collapse plugin adds the appropriate classes that we use to style each element. These classes
                      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                      modify any of this with custom CSS or overriding our default variables. It`s also worth noting
                      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                      does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Alerts</h5>
        <a class="d-flex align-items-center"
           href="https://getbootstrap.com/docs/5.1/components/alerts/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div id="alerts">
            <div class="bd-example">

              <div class="alert alert-primary alert-dismissible fade show" role="alert">
                A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you
                like.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
              <div class="alert alert-secondary alert-dismissible fade show" role="alert">
                A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you
                like.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
              <div class="alert alert-success alert-dismissible fade show" role="alert">
                A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you
                like.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
              <div class="alert alert-danger alert-dismissible fade show" role="alert">
                A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you
                like.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
              <div class="alert alert-warning alert-dismissible fade show" role="alert">
                A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you
                like.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
              <div class="alert alert-info alert-dismissible fade show" role="alert">
                A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you
                like.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
              <div class="alert alert-light alert-dismissible fade show" role="alert">
                A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you
                like.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
              <div class="alert alert-dark alert-dismissible fade show" role="alert">
                A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you
                like.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            </div>

            <div class="bd-example">
              <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Well done!</h4>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit
                  longer so that you can see how spacing within an alert works with this kind of content.</p>
                <hr>
                <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Badge</h5>
        <a class="d-flex align-items-center" href="https://getbootstrap.com/docs/5.1/components/badge/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div id="badge">
            <div class="bd-example">
              <p class="h1">Example heading <span class="badge bg-primary">New</span></p>
              <p class="h2">Example heading <span class="badge bg-secondary">New</span></p>
              <p class="h3">Example heading <span class="badge bg-success">New</span></p>
              <p class="h4">Example heading <span class="badge bg-danger">New</span></p>
              <p class="h5">Example heading <span class="badge bg-warning text-dark">New</span></p>
              <p class="h6">Example heading <span class="badge bg-info text-dark">New</span></p>
              <p class="h6">Example heading <span class="badge bg-light text-dark">New</span></p>
              <p class="h6">Example heading <span class="badge bg-dark">New</span></p>
            </div>

            <div class="bd-example">

              <span class="badge rounded-pill bg-primary">Primary</span>
              <span class="badge rounded-pill bg-secondary">Secondary</span>
              <span class="badge rounded-pill bg-success">Success</span>
              <span class="badge rounded-pill bg-danger">Danger</span>
              <span class="badge rounded-pill bg-warning text-dark">Warning</span>
              <span class="badge rounded-pill bg-info text-dark">Info</span>
              <span class="badge rounded-pill bg-light text-dark">Light</span>
              <span class="badge rounded-pill bg-dark">Dark</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Breadcrumb</h5>
        <a class="d-flex align-items-center" href="https://getbootstrap.com/docs/5.1/components/breadcrumb/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div id="breadcrumb">
            <div class="bd-example">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item"><a href="#">Library</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Buttons</h5>
        <a class="d-flex align-items-center"
           href="https://getbootstrap.com/docs/5.1/components/buttons/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div id="buttons">
            <div class="bd-example">

              <button type="button" class="btn btn-primary">Primary</button>
              <button type="button" class="btn btn-secondary">Secondary</button>
              <button type="button" class="btn btn-success">Success</button>
              <button type="button" class="btn btn-danger">Danger</button>
              <button type="button" class="btn btn-warning">Warning</button>
              <button type="button" class="btn btn-info">Info</button>
              <button type="button" class="btn btn-light">Light</button>
              <button type="button" class="btn btn-dark">Dark</button>

              <button type="button" class="btn btn-link">Link</button>
            </div>

            <div class="bd-example">

              <button type="button" class="btn btn-outline-primary">Primary</button>
              <button type="button" class="btn btn-outline-secondary">Secondary</button>
              <button type="button" class="btn btn-outline-success">Success</button>
              <button type="button" class="btn btn-outline-danger">Danger</button>
              <button type="button" class="btn btn-outline-warning">Warning</button>
              <button type="button" class="btn btn-outline-info">Info</button>
              <button type="button" class="btn btn-outline-light">Light</button>
              <button type="button" class="btn btn-outline-dark">Dark</button>
            </div>

            <div class="bd-example">
              <button type="button" class="btn btn-primary btn-sm">Small button</button>
              <button type="button" class="btn btn-primary">Standard button</button>
              <button type="button" class="btn btn-primary btn-lg">Large button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Button group</h5>
        <a class="d-flex align-items-center" href="https://getbootstrap.com/docs/5.1/components/button-group/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div id="button-group">
            <div class="bd-example">
              <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group me-2" role="group" aria-label="First group">
                  <button type="button" class="btn btn-secondary">1</button>
                  <button type="button" class="btn btn-secondary">2</button>
                  <button type="button" class="btn btn-secondary">3</button>
                  <button type="button" class="btn btn-secondary">4</button>
                </div>
                <div class="btn-group me-2" role="group" aria-label="Second group">
                  <button type="button" class="btn btn-secondary">5</button>
                  <button type="button" class="btn btn-secondary">6</button>
                  <button type="button" class="btn btn-secondary">7</button>
                </div>
                <div class="btn-group" role="group" aria-label="Third group">
                  <button type="button" class="btn btn-secondary">8</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Card</h5>
        <a class="d-flex align-items-center" href="https://getbootstrap.com/docs/5.1/components/card/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div id="card">
            <div class="bd-example">
              <div class="row  row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                  <div class="card">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="180"
                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap"
                         preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#868e96"></rect>
                      <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                    </svg>

                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card`s content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <div class="card-header">
                      Featured
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card`s content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div class="card-footer text-muted">
                      2 days ago
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card`s content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">An item</li>
                      <li class="list-group-item">A second item</li>
                      <li class="list-group-item">A third item</li>
                    </ul>
                    <div class="card-body">
                      <a href="#" class="card-link">Card link</a>
                      <a href="#" class="card-link">Another link</a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <svg class="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg"
                             role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice"
                             focusable="false"><title>Placeholder</title>
                          <rect width="100%" height="100%" fill="#868e96"></rect>
                          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                        </svg>

                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Carousel</h5>
        <a class="d-flex align-items-center"
           href="https://getbootstrap.com/docs/5.1/components/carousel/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div id="carousel">
            <div class="bd-example">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class=""
                          aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                          aria-label="Slide 2" class="active" aria-current="true"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                          aria-label="Slide 3" class=""></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide"
                         preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#777"></rect>
                      <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
                    </svg>

                    <div class="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                    </div>
                  </div>
                  <div class="carousel-item active">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide"
                         preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#666"></rect>
                      <text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text>
                    </svg>

                    <div class="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide"
                         preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#555"></rect>
                      <text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text>
                    </svg>

                    <div class="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Dropdowns</h5>
        <a class="d-flex align-items-center"
           href="https://getbootstrap.com/docs/5.1/components/dropdowns/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div id="dropdowns">
            <div class="bd-example">
              <div class="btn-group w-100 align-items-center justify-content-between flex-wrap">
                <div class="dropdown">
                  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM"
                          data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                    <li><h6 class="dropdown-header">Dropdown header</h6></li>
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                  </ul>
                </div>
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                          data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><h6 class="dropdown-header">Dropdown header</h6></li>
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                  </ul>
                </div>
                <div class="dropdown">
                  <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenuButtonLG"
                          data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonLG">
                    <li><h6 class="dropdown-header">Dropdown header</h6></li>
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bd-example">
              <div class="btn-group">
                <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div><!-- /btn-group -->
              <div class="btn-group">
                <button type="button" class="btn btn-secondary">Secondary</button>
                <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div><!-- /btn-group -->
              <div class="btn-group">
                <button type="button" class="btn btn-success">Success</button>
                <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div><!-- /btn-group -->
              <div class="btn-group">
                <button type="button" class="btn btn-info">Info</button>
                <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div><!-- /btn-group -->
              <div class="btn-group">
                <button type="button" class="btn btn-warning">Warning</button>
                <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div><!-- /btn-group -->
              <div class="btn-group">
                <button type="button" class="btn btn-danger">Danger</button>
                <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div><!-- /btn-group -->
            </div>

            <div class="bd-example">
              <div class="btn-group w-100 align-items-center justify-content-between flex-wrap">
                <div class="dropend">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropendMenuButton"
                          data-bs-toggle="dropdown" aria-expanded="false">
                    Dropend button
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropendMenuButton">
                    <li><h6 class="dropdown-header">Dropdown header</h6></li>
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                  </ul>
                </div>
                <div class="dropup">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropupMenuButton"
                          data-bs-toggle="dropdown" aria-expanded="false">
                    Dropup button
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropupMenuButton">
                    <li><h6 class="dropdown-header">Dropdown header</h6></li>
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                  </ul>
                </div>
                <div class="dropstart">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropstartMenuButton"
                          data-bs-toggle="dropdown" aria-expanded="false">
                    Dropstart button
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropstartMenuButton">
                    <li><h6 class="dropdown-header">Dropdown header</h6></li>
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bd-example">
              <div class="btn-group">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownRightMenuButton"
                          data-bs-toggle="dropdown" aria-expanded="false">
                    End-aligned menu
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownRightMenuButton">
                    <li><h6 class="dropdown-header">Dropdown header</h6></li>
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>List group</h5>
        <a class="d-flex align-items-center" href="https://getbootstrap.com/docs/5.1/components/list-group/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div id="list-group">
            <div class="bd-example">
              <ul class="list-group">
                <li class="list-group-item disabled" aria-disabled="true">A disabled item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
              </ul>
            </div>

            <div class="bd-example">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
              </ul>
            </div>

            <div class="bd-example">
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">A simple default list group item</a>

                <a href="#" class="list-group-item list-group-item-action list-group-item-primary">A simple primary list
                  group item</a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">A simple secondary
                  list group item</a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-success">A simple success list
                  group item</a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-danger">A simple danger list
                  group item</a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-warning">A simple warning list
                  group item</a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-info">A simple info list group
                  item</a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-light">A simple light list
                  group item</a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-dark">A simple dark list group
                  item</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Modal</h5>
        <a class="d-flex align-items-center" href="https://getbootstrap.com/docs/5.1/components/modal/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div id="modal">
            <div class="bd-example">
              <div class="d-flex justify-content-between flex-wrap">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModalDefault">
                  Launch demo modal
                </button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#staticBackdropLive">
                  Launch static backdrop modal
                </button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenteredScrollable">
                  Vertically centered scrollable modal
                </button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModalFullscreen">
                  Full screen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Navs</h5>
        <a class="d-flex align-items-center"
           href="https://getbootstrap.com/docs/5.1/components/navs-tabs/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div id="navs">
            <div class="bd-example">
              <nav class="nav">
                <a class="nav-link active" aria-current="page" href="#">Active</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </nav>
            </div>

            <div class="bd-example">
              <nav>
                <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                  <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                          type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home
                  </button>
                  <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                          type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile
                  </button>
                  <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                          type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact
                  </button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <p><strong>This is some placeholder content the Home tab`s associated content.</strong> Clicking
                    another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered
                    navigation.</p>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <p><strong>This is some placeholder content the Profile tab`s associated content.</strong> Clicking
                    another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered
                    navigation.</p>
                </div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                  <p><strong>This is some placeholder content the Contact tab`s associated content.</strong> Clicking
                    another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered
                    navigation.</p>
                </div>
              </div>
            </div>

            <div class="bd-example">
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Navbar</h5>
        <a class="d-flex align-items-center"
           href="https://getbootstrap.com/docs/5.1/components/navbar/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div id="navbar">
            <div class="bd-example">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                    <img src="assets/img/logo/bootstrap-logo-white.svg" width="38" height="30"
                         class="d-inline-block align-top" alt="Bootstrap" loading="lazy"
                         style="filter: invert(1) grayscale(100%) brightness(200%);">
                  </a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                      </li>
                    </ul>
                    <form class="d-flex">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-outline-dark" type="submit">Search</button>
                    </form>
                  </div>
                </div>
              </nav>

              <nav class="navbar navbar-expand-lg navbar-dark bg-primary mt-5">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                    <img src="assets/img/logo/bootstrap-logo-white.svg" width="38" height="30"
                         class="d-inline-block align-top" alt="Bootstrap" loading="lazy">
                  </a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2"
                          aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent2">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                      </li>
                    </ul>
                    <form class="d-flex">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-outline-light" type="submit">Search</button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Pagination</h5>
        <a class="d-flex align-items-center" href="https://getbootstrap.com/docs/5.1/components/pagination/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div id="pagination">
            <div class="bd-example">
              <nav aria-label="Pagination example">
                <ul class="pagination pagination-sm">
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item active" aria-current="page">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                </ul>
              </nav>
            </div>

            <div class="bd-example">
              <nav aria-label="Standard pagination example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="bd-example">
              <nav aria-label="Another pagination example">
                <ul class="pagination pagination-lg flex-wrap">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item active" aria-current="page">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Popovers</h5>
        <a class="d-flex align-items-center"
           href="https://getbootstrap.com/docs/5.1/components/popovers/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div id="popovers">
            <div class="bd-example">
              <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title=""
                      data-bs-content="And here`s some amazing content. It`s very engaging. Right?"
                      data-bs-original-title="Popover title">Click to toggle popover
              </button>
            </div>

            <div class="bd-example">
              <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover"
                      data-bs-placement="top"
                      data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                      data-bs-original-title="" title="">
                Popover on top
              </button>
              <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover"
                      data-bs-placement="right"
                      data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                      data-bs-original-title="" title="">
                Popover on end
              </button>
              <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover"
                      data-bs-placement="bottom"
                      data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                      data-bs-original-title="" title="">
                Popover on bottom
              </button>
              <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover"
                      data-bs-placement="left"
                      data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                      data-bs-original-title="" title="">
                Popover on start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Progress</h5>
        <a class="d-flex align-items-center"
           href="https://getbootstrap.com/docs/5.1/components/progress/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div id="progress">
            <div class="bd-example">
              <div class="progress mb-3">
                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                  0%
                </div>
              </div>
              <div class="progress mb-3">
                <div class="progress-bar bg-success w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0"
                     aria-valuemax="100">25%
                </div>
              </div>
              <div class="progress mb-3">
                <div class="progress-bar bg-info text-dark w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0"
                     aria-valuemax="100">50%
                </div>
              </div>
              <div class="progress mb-3">
                <div class="progress-bar bg-warning text-dark w-75" role="progressbar" aria-valuenow="75"
                     aria-valuemin="0" aria-valuemax="100">75%
                </div>
              </div>
              <div class="progress">
                <div class="progress-bar bg-danger w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                     aria-valuemax="100">100%
                </div>
              </div>
            </div>

            <div class="bd-example">
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0"
                     aria-valuemax="100"></div>
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar"
                     style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Scrollspy</h5>
        <a class="d-flex align-items-center"
           href="https://getbootstrap.com/docs/5.1/components/scrollspy/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div id="scrollspy">
            <div class="bd-example">
              <nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
                <a class="navbar-brand" href="#">Navbar</a>
                <ul class="nav nav-pills">
                  <li class="nav-item">
                    <a class="nav-link active" href="#scrollspyHeading1">First</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#scrollspyHeading2">Second</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                       aria-expanded="false">Dropdown</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                      <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example"
                   tabindex="0">
                <h4 id="scrollspyHeading1">First heading</h4>
                <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                  appropriate navigation link is highlighted. It`s repeated throughout the component example. We keep
                  adding some more example copy here to emphasize the scrolling and highlighting.</p>
                <h4 id="scrollspyHeading2">Second heading</h4>
                <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                  appropriate navigation link is highlighted. It`s repeated throughout the component example. We keep
                  adding some more example copy here to emphasize the scrolling and highlighting.</p>
                <h4 id="scrollspyHeading3">Third heading</h4>
                <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                  appropriate navigation link is highlighted. It`s repeated throughout the component example. We keep
                  adding some more example copy here to emphasize the scrolling and highlighting.</p>
                <h4 id="scrollspyHeading4">Fourth heading</h4>
                <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                  appropriate navigation link is highlighted. It`s repeated throughout the component example. We keep
                  adding some more example copy here to emphasize the scrolling and highlighting.</p>
                <h4 id="scrollspyHeading5">Fifth heading</h4>
                <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                  appropriate navigation link is highlighted. It`s repeated throughout the component example. We keep
                  adding some more example copy here to emphasize the scrolling and highlighting.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Spinners</h5>
        <a class="d-flex align-items-center"
           href="https://getbootstrap.com/docs/5.1/components/spinners/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div id="spinners">
            <div class="bd-example">

              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-light" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>

            <div class="bd-example">

              <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-info" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-light" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Toasts</h5>
        <a class="d-flex align-items-center"
           href="https://getbootstrap.com/docs/5.1/components/toasts/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div id="toasts">
            <div class="bd-example bg-dark p-5 align-items-center">
              <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                  <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                       aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <rect width="100%" height="100%" fill="#007aff"></rect>
                  </svg>

                  <strong class="me-auto">Bootstrap</strong>
                  <small class="text-muted">11 mins ago</small>
                  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                  Hello, world! This is a toast message.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="bd-heading align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
        <h5>Tooltips</h5>
        <a class="d-flex align-items-center"
           href="https://getbootstrap.com/docs/5.1/components/tooltips/">Документация</a>
      </div>
    </div>
    <div class="col-10">
      <div class="card">
        <div class="card-body">
          <div id="tooltips">
            <div class="bd-example bs-tooltip">
              <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top"
                      title="Tooltip on top">Tooltip on top
              </button>
              <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right"
                      title="Tooltip on end">Tooltip on end
              </button>
              <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom"
                      title="Tooltip on bottom">Tooltip on bottom
              </button>
              <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left"
                      title="Tooltip on start">Tooltip on start
              </button>
              <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true"
                      title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Tooltip with HTML
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="exampleModalDefault" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="staticBackdropLive" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="staticBackdropLiveLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLiveLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>I will not close if you click outside me. Don`t even try to press escape key.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="exampleModalCenteredScrollable" tabindex="-1"
       aria-labelledby="exampleModalCenteredScrollableTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenteredScrollableTitle">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to
            demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content
            becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the
            modal.</p>
          <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
          <p>This content should appear at the bottom after you scroll.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="exampleModalFullscreen" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel"
       aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title h4" id="exampleModalFullscreenLabel">Full screen modal</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

</div>
';
