<script src="assets/modules/jquery/jquery.min.js"></script>
<script src="assets/modules/datatables/jquery.dataTables.js"></script>
<script src="assets/modules/bootstrap/bootstrap.bundle.js"></script>
<script src="assets/modules/flatpickr/flatpickr.js"></script>
<script src="assets/modules/select2/select2.full.js"></script>
<script src="assets/modules/flatpickr/ru.js"></script>
<script src="assets/modules/fullcalendar/main.js"></script>
<script src="assets/modules/fullcalendar/locales/ru.js"></script>
<script src="assets/modules/moment/moment.js"></script>
<script src="assets/modules/moment/ru.js"></script>
<script src="assets/modules/rrule/rrule-tz.js"></script>
<script src="assets/js/app.js"></script>
<?php
	$path = "assets/js/$page.js";
	if (file_exists($path)){
		echo '<script src="'.$path.'"></script>';
	}
?>
