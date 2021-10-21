<div class="ps-3 pe-3">
  <header class="main-content-header">
    <div class="header-left">
      <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title=""
         data-bs-original-title="Назад" aria-label="Назад"><i class="mdi mdi-24px mdi-arrow-left"></i></a>
      <p class="h5 main-content-title"><?= $row->fullname; ?></p>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/" data-bs-toggle="tooltip" data-bs-placement="top"
                                         title="Главная страница"><i class="mdi mdi-home-outline"></i></a></li>
        </ol>
      </nav>
    </div>
    <div class="header-right"></div>
  </header>
  <div class="card">
    <form class="form userinfo-form" action="" method="post">
      <div class="card-body">
        <div class="row">
          <div class="col">
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
            <div class="form-group">
              <label class="form-label" for="name">Фамилия, имя, отчество</label>
              <input class="form-control" type="text" name="fullname" value="<?= $row->fullname; ?>"
                     placeholder="Введите фамилию, имя, отчество" id="name" required>
            </div>
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
            <div class="form-group">
              <label class="form-label" for="dob">Дата рождения</label>
              <input class="form-control" type="date" id="dob" name="dob" value="<?= $row->dob; ?>" required>
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label class="form-label" for="mobile">Мобильный телефон</label>
              <input class="form-control" type="tel" id="mobile" name="mobilephone" value="<?= $row->mobilephone; ?>">
            </div>
            <div class="form-group">
              <label class="form-label" for="email">Адрес электронной почты</label>
              <input class="form-control" type="email" name="email" value="<?= $row->email; ?>" id="email"
                     placeholder="Введите адрес электронной почты">
            </div>
            <div class="form-group">
              <label class="form-label" for="website">Социальные сети</label>
              <input class="form-control" type="text" name="website" value="<?= $row->website; ?>" id="website">
            </div>
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
            <div class="form-group">
              <label class="form-label" for="index">Индекс</label>
              <input class="form-control" type="number" id="index" name="zip" value="<?= $row->zip; ?>">
            </div>
            <div class="form-group">
              <label class="form-label" for="town">Город</label>
              <input class="form-control" type="text" id="town" name="city" value="<?= $row->city; ?>">
            </div>
            <div class="form-group">
              <label class="form-label" for="address">Улица, дом, квартира</label>
              <input class="form-control" type="text" id="address" name="address" value="<?= $row->address; ?>">
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="button-group d-flex align-items-center justify-content-end">
          <button type="submit" name="editUser" class="btn btn-primary">Сохранить</button>
          <button type="button" class="btn btn-danger btn-back">Отмена</button>
        </div>
      </div>
    </form>
  </div>
</div>
