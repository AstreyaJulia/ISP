<header class="main-content-header">
    <h3 class="main-content-title"><?= $row["fullname"]; ?></h3>
    <div class="main-content-subheader">
        <div class="breadcrumbs">
            <a href="/" class="breadcrumbs-home">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                </svg>
            </a>
            <a class="breadcrumbs-item active">Редактирование пользователя</a>
        </div>
    </div>
</header>
<div class="card card-form">
    <form class="form userinfo-form" action="?page=user-profile" method="post">
        <div class="form-user">
            <div class="form-user-account">
                <div class="user-account">
                    <label for="login">Логин</label>
                    <input class="login-input" type="text" name="username" value="<?= $row["username"]; ?>" placeholder="Введите логин" id="login" required disabled>
                    <label for="email">Адрес электронной почты</label>
                    <input class="email-input" type="email" name="email" value="<?= $row["email"]; ?>" id="email"
                           placeholder="Введите адрес электронной почты">
                    <label for="name">Ф.И.О.</label>
                    <input class="name-input" type="text" name="fullname" value="<?= $row["fullname"]; ?>" placeholder="Введите Ф.И.О." id="name" required>
                    <div class="form-row">
                        <div>
                            <label for="gender">Пол</label>
                            <select id="gender" name="gender">
                            	<?php foreach (gender_array() as $key => $value): ?>
                            	<?php if ($key == $row["gender"]): ?>
								<option value="<?= $key; ?>" selected><?= $value; ?></option>
								<?php else: ?>
								<option value="<?= $key; ?>"><?= $value; ?></option>
								<?php endif; ?>
								<?php endforeach ?>
			                </select>
                        </div>
                        <div>
                            <label for="bday">День рождения</label>
                            <input class="name-input" type="date" id="bday" name="dob" value="<?= $row["dob"]; ?>">
                        </div>
                        <div>
                            <label for="mobile">Мобильный телефон</label>
                            <input type="tel" id="mobile" name="mobilephone" value="<?= $row["mobilephone"]; ?>">
                        </div>
                    </div>
                    <fieldset>
                        <legend>Адрес</legend>
                        <div class="form-region-row">
                            <div>
                                <label for="zip">Индекс</label>
                                <input type="number" id="zip" name="zip" value="<?= $row["zip"]; ?>">
                            </div>
                            <div>
	                            <label for="region">Область</label>
	                            <select id="region" name="state">
	                            	<?php foreach (region_array() as $key => $value): ?>
	                            	<?php if ($key == $row["state"]): ?>
									<option value="<?= $key; ?>" selected><?= $value; ?></option>
									<?php else: ?>
									<option value="<?= $key; ?>"><?= $value; ?></option>
									<?php endif; ?>
									<?php endforeach ?>
			                    </select>
                            </div>
                        </div>
                        <label for="town">Город</label>
                        <input type="text" id="town" name="city" value="<?= $row["city"]; ?>">
                        <label for="address">Улица, дом, квартира</label>
                        <input type="text" id="address" name="address" value="<?= $row["address"]; ?>">
                    </fieldset>
                	<label for="website">Web</label>
                	<input class="name-input" type="text" id="website" name="website" value="<?= $row["website"]; ?>">
                </div>
            </div>
        </div>
        <div class="form-footer">
            <button type="submit" name="editUser" class="btn primary large">Сохранить</button>
            <button type="button" class="btn error large text btn-back">Отмена</button>
        </div>
    </form>
</div>