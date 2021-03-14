<script src="assets/js/jquery.min.js"></script>
<script src="assets/bootstrap/js/bootstrap.bundle.min.js"></script>

<!-- sidebar-menu js -->
<script src="assets/plugins/sidebar-menu/js/sidebar-menu.js"></script>
<!-- Пользовательские скрипты -->
<script src="assets/js/app-script.js"></script>

<?php

	if (isset($_GET["page"]) and $_GET["page"] == "proxylist") {
		echo "<script>
				var someListItemEl = document.querySelector('#tab-1')
				var tab = new bootstrap.Tab(someListItemEl)
				tab.show()
			</script>";
	}
	if (!isset($_GET["page"]) and !isset($_GET["faq"])) {
		echo "<script>
				let trurl = 'https://www.pochta.ru/tracking#';
				let trbutton = document.getElementById('track_btn');
				trbutton.onclick = function() {
					let trinput = document.getElementById('track_txt').value;
					window.open(trurl + trinput);
				};
			</script>";
	}
?>
