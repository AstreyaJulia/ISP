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
    <div class="boxed-content">
      <div class="card">
        <form class="form userinfo-form" action="" method="post">
          <div class="card-body">
            <div class="row mb-4">
              <p class="text-secondary font-small-1 text-uppercase fw-bold">Аккаунт в ИСП</p>
              <div class="col-12 col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label class="form-label" for="login">Логин</label>

                  <div class="input-group">
                    <input class="form-control" type="text" name="username" value="<?= $row->username; ?>"
                           placeholder="Введите логин"
                           id="login" required disabled>
                    <div class="input-group-prepend">
                      <a class="btn btn-primary btn-block" href="?page=user-profile&DropPass">Сброс пароля</a>
                    </div>
                  </div>


                </div>
              </div>
              <div class="col-12 col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-xs-12">
                <div class="row">
                  <div class="col-12 col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-xs-12">
                  </div>
                  <div class="col-12 col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-xs-12">
                  </div>
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <p class="text-secondary font-small-1 text-uppercase fw-bold">Персональная информация</p>
              <div class="col-12 col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label class="form-label" for="name">Фамилия, имя, отчество</label>
                  <input class="form-control" type="text" name="fullname" value="<?= $row->fullname; ?>"
                         placeholder="Введите фамилию, имя, отчество" id="name" required>
                </div>
              </div>
              <div class="col-12 col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-xs-12">
                <div class="row">
                  <div class="col-12 col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label class="form-label" for="gender">Пол</label>
                      <select class="form-select" id="gender" name="gender">
                        <?php foreach (gender_array() as $key => $value): ?>
                          <?php if ($key == $row->gender): ?>
                            <option value="<?= $key; ?>" selected><?= $value; ?></option>
                          <?php else: ?>
                            <option value="<?= $key; ?>"><?= $value; ?></option>
                          <?php endif; ?>
                        <?php endforeach ?>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label class="form-label" for="dob">Дата рождения</label>
                      <input class="form-control" type="date" id="dob" name="dob" value="<?= $row->dob; ?>" required>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <p class="text-secondary font-small-1 text-uppercase fw-bold">Контакты</p>
              <div class="col-12 col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label class="form-label" for="mobile">Мобильный телефон</label>
                  <input class="form-control" type="tel" id="mobile" name="mobilephone" value="<?= $row->mobilephone; ?>">
                </div>
                <div class="form-group">
                  <label class="form-label" for="email">Адрес электронной почты</label>
                  <input class="form-control" type="email" name="email" value="<?= $row->email; ?>" id="email"
                         placeholder="Введите адрес электронной почты">
                </div>

              </div>
              <div class="col-12 col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-xs-12">
                <div class="row">
                  <div class="form-group">
                    <label class="form-label" for="region">Область</label>
                    <select class="form-select" id="region" name="state">
                      <?php foreach (region_array() as $key => $value): ?>
                        <?php if ($key == $row->state): ?>
                          <option value="<?= $key; ?>" selected><?= $value; ?></option>
                        <?php else: ?>
                          <option value="<?= $key; ?>"><?= $value; ?></option>
                        <?php endif; ?>
                      <?php endforeach ?>
                    </select>
                  </div>
                  <div class="col-12 col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label class="form-label" for="index">Индекс</label>
                      <input class="form-control" type="number" id="index" name="zip" value="<?= $row->zip; ?>">
                    </div>
                  </div>
                  <div class="col-12 col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label class="form-label" for="town">Город</label>
                      <input class="form-control" type="text" id="town" name="city" value="<?= $row->city; ?>">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="address">Улица, дом, квартира</label>
                    <input class="form-control" type="text" id="address" name="address" value="<?= $row->address; ?>">
                  </div>
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <p class="text-secondary font-small-1 text-uppercase fw-bold">Социальные сети</p>
              <div class="col-12 col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label class="form-label" for="website">Другое</label>
                  <input class="form-control" type="text" name="website" value="<?= $row->website; ?>" id="website">
                </div>
              </div>
              <div class="col-12 col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-xs-12">
                <div class="row">
                  <div class="col-12 col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-xs-12">

                  </div>
                  <div class="col-12 col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-xs-12">

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="button-group d-flex align-items-center justify-content-end">
              <button type="submit" name="editUser" class="btn btn-primary">Сохранить</button>
              <button type="button" class="btn btn-outline-danger btn-back">Отмена</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</main>
