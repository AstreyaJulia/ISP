<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title><?= $title ?></title>
    <!--Значок для браузера-->
    <link rel="icon" href="../../assets/images/fav/favicon.ico" type="image/x-icon">
    <!-- Bootstrap ядро CSS-->
    <link href="../../assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Пользовательские стили-->
    <link href="../../assets/css/style.css" rel="stylesheet">
</head>

<body class="gradient-ibiza">
    <div id="wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="text-center error-pages">
                        <h1 class="error-title text-white">404</h1>
                        <h2 class="error-sub-title text-white">404 не найдено</h2>

                        <p class="error-message text-white text-uppercase"><?= $content ?></p>

                        <div class="mt-4">
                            <a href="/" class="btn btn-info btn-round shadow-info m-1">На Главную </a>
                            <a onclick="javascript:history.back(); return false;" class="btn btn-info btn-round m-1">Предыдущая Страница </a>
                        </div>

                        <div class="mt-4">
                            <p class="text-white">© 2021 Сафоновский районный суд.</p>
                        </div>
                        <hr class="border-light-2">

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- JavaScript ядра Bootstrap -->
    <script src="../../assets/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>
</html>

