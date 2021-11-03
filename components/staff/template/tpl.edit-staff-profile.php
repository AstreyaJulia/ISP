<div class="ps-3 pe-3">
  <header class="main-content-header d-flex align-items-center justify-content-between flex-wrap p-2">
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
               title="Администрирование">Администрирование
            </a>
          </li>
          <li class="breadcrumb-item p-2">
            <a class="p-2" data-bs-toggle="tooltip" data-bs-placement="top"
               title="Сотрудники">Сотрудники
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
    <form class="form userinfo-form" action="" method="post">
      <div class="card">
        <div class="card-body">
          <nav>
            <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                      type="button" role="tab" aria-controls="nav-home" aria-selected="false">Аккаунт
              </button>
              <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                      type="button" role="tab" aria-controls="nav-profile" aria-selected="true">Персональная информация
              </button>
              <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                      type="button"
                      role="tab" aria-controls="nav-contact" aria-selected="false">Контакты
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <div class="row">
                <div class="col">
                  <div class="user-photo">
                    <p class="form-label">Аватар:</p>
                    <img src="<?= $row->photo ?>" class="user-avatar" alt="<?= $row->fullname ?>">
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="login">Логин</label>
                    <input class="form-control" type="text" name="username" value="<?= $row->username ?>"
                           placeholder="Введите логин"
                           id="login" required>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="form-group">
                        <label class="form-label" for="sudo">Роль</label>
                        <select class="form-select" id="sudo" name="sudo" required="">
                          <?= selectOption($staffClass->getSudoArr(), $row->sudo); ?>
                        </select>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-group">
                        <label class="form-label" for="active">Активен (в штате)</label>
                        <select class="form-select" id="active" name="active" required>
                          <?= selectOption($staffClass->getActiveArr(), $row->active); ?>
                        </select>
                      </div>
                    </div>
                  </div>
                  <form class="form-group" action="" method="post">
                    <button type="submit" name="DropPass" class="btn btn-primary btn-block">Сброс пароля</button>
                  </form>
                </div>
                <div class="col">
                  <div class="form-group">
                    <label class="form-label" for="primary_group">Группа</label>
                    <select class="form-select" id="primary_group" name="primary_group" required>
                      <option value="0">Не выбрана</option>
                      <?= selectOptionArr(primary_group_array(), $row->primary_group); ?>
                    </select></div>
                  <div class="form-group">
                    <label class="form-label" for="room">Рабочее место</label>
                    <select class="form-select" id="room" name="room" required>
                      <option value="<?= $row->room ?>"
                              selected><?= $roomClass->getPosition($row->position); ?></option><?= $roomClass->getFreeRoom(); ?>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="comment">Коментарий</label>
                    <textarea class="form-control" id="comment" name="comment"
                              placeholder="Введите коментарий"><?= $row->comment ?></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <label class="form-label" for="name">Фамилия, имя, отчество</label>
                    <input class="form-control" type="text" name="fullname" placeholder="Введите фамилию, имя, отчество"
                           id="name" required value="<?= $row->fullname ?>">
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="form-group">
                        <label class="form-label" for="gender">Пол</label>
                        <select class="form-select" id="gender" name="gender">
                          <?= selectOption(gender_array(), $row->gender); ?>
                        </select>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-group">
                        <label class="form-label" for="dob">Дата рождения</label>
                        <input class="form-control" type="date" id="dob" name="dob" value="<?= $row->dob ?>" required>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <label class="form-label" for="profession">Должность</label>
                    <select class="form-select" id="profession" name="profession">
                      <?= selectOption(prof_array(), $row->profession); ?>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="affiliation">Принадлежность судье</label>
                    <select class="form-select" id="affiliation" name="affiliation">
                      <option value="">Заполнить при необходимости</option>
                      <?= selectOptionArr($staffClass->getJudge(), $row->affiliation); ?>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <label class="form-label" for="mobile">Мобильный телефон</label>
                    <input class="form-control" type="tel" id="mobile" name="mobilephone"
                           value="<?= $row->mobilephone ?>">
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="email">Адрес электронной почты</label>
                    <input class="form-control" type="email" name="email" value="<?= $row->email ?>" id="email"
                           placeholder="Введите адрес электронной почты">
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="website">Социальные сети</label>
                    <input class="form-control" type="text" name="website" value="<?= $row->website ?>" id="website">
                  </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <label class="form-label" for="region">Область</label>
                    <select class="form-select" id="region" name="state">
                      <?= selectOption(region_array(), $row->state); ?>
                    </select>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="form-group">
                        <label class="form-label" for="index">Индекс</label>
                        <input class="form-control" type="number" id="index" name="zip" value="<?= $row->zip ?>">
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-group">
                        <label class="form-label" for="town">Город</label>
                        <input class="form-control" type="text" id="town" name="city" value="<?= $row->city ?>">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="address">Улица, дом, квартира</label>
                    <input class="form-control" type="text" id="address" name="address" value="<?= $row->address ?>">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="button-group d-flex align-items-center justify-content-end">
            <button type="submit" class="btn btn-primary me-3">Сохранить</button>
            <button type="button" class="btn btn-outline-danger btn-back">Отмена</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
