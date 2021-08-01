<!DOCTYPE html>
<html lang="ru">
	<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://192.168.2.111/assets/css/main.css">
    <link rel="stylesheet" href="http://192.168.2.111/assets/css/modal.css">
    <title><?= $title ?></title>
</head>
	<body class="page-body">
		<header class="main-header">

		</header>
		<div class="progress-container">
		    <div class="topprogressbar"></div>
		</div>

		<aside class="main-sidebar">

		</aside>
		<main class="main-content">
				<?php if ($info) echo "<p>$info</p>"; ?>
				<?= $content ?>
			<!-- Кнопка Назад наверх -->
		    <a class="back-to-top" style="display: none;">
		        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="bi bi-arrow-up" viewBox="0 0 16 16">
		            <path fill-rule="evenodd"
		                  d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"></path>
		        </svg>
		    </a>
		</main>


		<script src="http://192.168.2.111/assets/js/app.js"></script>
		<script src="http://192.168.2.111/assets/js/modal.js"></script>
	</body>
</html>