<!DOCTYPE html>
<html>
<head>
	<meta charset='utf-8' />
	<link href='../components/fullcalendar/lib/main.min.css' rel='stylesheet' />
	<script src='../components/fullcalendar/lib/main.min.js'></script>
	<script src='../components/fullcalendar/lib/locales/ru.js'></script>
	<script src="../components/fullcalendar/lib/rrule/rrule-tz.min.js"></script>

	<script>
		function addZero(num) {
			if (num >= 0 && num <= 9) {
				return '0' + num;
			} else {
				return num;
			}
		}

		document.addEventListener('DOMContentLoaded', function() {
			var calendarEl = document.getElementById('calendar');
			let editEvent = document.querySelector('div[data-modal="editEvent"'), //modal
				overlay = document.querySelector('.js-overlay-modal'), //modal
				form = document.querySelector('form[name="editEvent"'),
				saveButton = document.querySelector('.js-modal-save'), // кнопка
				title = document.querySelector('input[name="title"'), //заголовок
				startDate = document.querySelector('input[name="start-date"'),
				startTime = document.querySelector('input[name="start-time"'),
				endDate = document.querySelector('input[name="end-date"'),
				endTime = document.querySelector('input[name="end-time"'),
				allDay = document.querySelector('input[name="all-day"');
			var calendar = new FullCalendar.Calendar(calendarEl, {
				height: 650,
				headerToolbar: {
					left: 'prev,next today',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay'
				},
				locale: 'ru',
				initialDate: '2020-09-12',
				navLinks: true, // can click day/week names to navigate views
				selectable: true,
				selectMirror: true,
				select: function(arg) {
					
					overlay.classList.add('active'); //ставим темный фон
					editEvent.classList.add('active'); //открываем модальное окно
					startDate.value = arg.start.getFullYear() + '-' + addZero((arg.start.getMonth() + 1)) + '-' + addZero(arg.start.getDate());				
					startTime.value = addZero(arg.start.getHours()) + ':' + addZero(arg.start.getMinutes());
					endDate.value = arg.end.getFullYear() + '-' + addZero((arg.end.getMonth() + 1)) + '-' + addZero(arg.end.getDate());
					endTime.value = addZero(arg.end.getHours()) + ':' + addZero(arg.end.getMinutes());

					//console.log(arg.start);

					form.addEventListener('submit', function(event) {
						let promise = fetch('components/fullcalendar/ajax.php/', {
							method: 'POST',
							body: new FormData(this),
						});
						
						/*promise.then(
							response => {
								return response.text();
							}
						).then(
							text => {
								return text.lastId;
								//result.innerHTML = text;
							}
						);*/
						
						event.preventDefault();
						//console.log(promise);

						//собираем дату для fullcalendar
						let	start = startDate.value + 'T' + startTime.value,
							end = endDate.value + 'T' + endTime.value;
							//всегда повторяет записи нужно где-то править
						console.log ('title: ' + title.value);
						console.log ('start: ' + start + 'end: ' + end);
						calendar.addEvent({
							title: title.value,
							start: start,
							end: end
							//end: arg.end,
							//allDay: true
						});
						calendar.unselect();
						document.querySelector('form[name="editEvent"').reset();

						
					});
						
					
				},


				eventClick: function(arg) {
					//overlay.classList.add('active'); //ставим темный фон
					//editEvent.classList.add('active'); //открываем модальное окно
					alert('id: ' + arg.event.id);
					/*alert('Event: ' + arg.event.title);
					alert('start: ' + arg.event.start);
					alert('end: '	+ arg.event.end);
					alert('groupId: '	+ arg.event.groupId);*/
				//alert('Coordinates: ' + arg.jsEvent.pageX + ',' + arg.jsEvent.pageY);
				//alert('View: ' + arg.view.type);

				// change the border color just for fun
				arg.el.style.borderColor = 'red';


				},
				//editable: true, //перетаскивание событий
				dayMaxEvents: true, // allow "more" link when too many events
	  events: [
	  {
	  	"id": "2",
	  	"groupId": "2",
	  	"title": "Long Event",
	  	"start": "2020-09-07",
	  	"end": "2020-09-10"
	  },
	  {
	  	"id": "2",
	  	"groupId": "2",
	  	"title": "Long Event",
	  	"start": "2020-09-14",
	  	"end": "2020-09-17"
	  },
	  {
	  	"id": "999",
	  	"groupId": "",
	  	"title": "Repeating Event",
	  	"start": "2020-09-09T16:00:00-05:00"
	  },
	  {
	  	"id": "999",
	  	"title": "Repeating Event",
	  	"start": "2020-09-16T16:00:00-05:00"
	  },
	  {
	  	"title": "Conference",
	  	"start": "2020-09-11",
	  	"end": "2020-09-13"
	  },
	  {
	  	"title": "Meeting",
	  	"start": "2020-09-12",
	  	"end": "2020-09-12"
	  },
	  {
	  	"title": "Lunch",
	  	"start": "2020-09-12T12:00:00-05:00"
	  },
	  {
	  	"title": "Meeting",
	  	"start": "2020-09-12T14:30:00-05:00"
	  },
	  {
	  	"title": "Happy Hour",
	  	"start": "2020-09-12T17:30:00-05:00"
	  },
	  {
	  	"title": "Dinner",
	  	"start": "2020-09-12T20:00:00"
	  },
	  {
	  	"title": "Birthday Party",
	  	"start": "2020-09-13T07:00:00-05:00"
	  },
	  {
	  	"title": "Click for Google",
	  	"url": "http://google.com/",
	  	"start": "2020-09-28"
	  }
	  ]
  });

			calendar.render();
		});

	</script>
	<style>

		body {
			margin: 40px 10px;
			padding: 0;
			font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
			font-size: 14px;
		}

		#calendar {
			max-width: 1100px;
			margin: 0 auto;
		}

/*для модального окна взято отсюда https://dev-postnov.ru/modal-on-javascript */

	/* Стили для подложки */

		.overlay {
			
			/* Скрываем подложку  */
			opacity: 0;
			visibility: hidden;
			
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, .5);
			z-index: 20;
			transition: .3s all;
		}


		/* Стили для модальных окон */

		.modal {
			
			/* Скрываем окна  */
			opacity: 0;
			visibility: hidden;
			
			
			/*  Установаем ширину окна  */
			width: 100%;
			max-width: 500px;
			
			/*  Центрируем и задаем z-index */
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 30; /* Должен быть выше чем у подложки*/
			
			/*  Побочные стили	*/
			box-shadow: 0 3px 10px -.5px rgba(0, 0, 0, .2); 
			text-align: center;
			padding: 30px;
			border-radius: 3px;
			background-color: #fff;
			transition: 0.3s all;
		}


		/* Стили для активных классов подложки и окна */

		.modal.active,
		.overlay.active{
			opacity: 1;
			visibility: visible;
		}


		/* Стили для кнопки закрытия */

		.modal__cross {
			width: 15px;
			height: 15px;
			position: absolute;
			top: 20px;
			right: 20px;
			fill: #444;
			cursor: pointer;
		}

	</style>
</head>
<body>

	<div id='calendar'></div>

	<!-- Элементы для вызова модальных окон, могут быть любые -->

	<a href="#" class="js-open-modal" data-modal="editEvent">Открыть окно 1</a>


	<!-- Модальное окно -->

	<div class="modal" data-modal="editEvent">
		<!--   Svg иконка для закрытия окна  -->
		<svg class="modal__cross js-modal-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>
		<div class="">
		  <div class="">
				<h5 class="">
					Добавление события в календарь
				</h5>
			  </div>
			  <div class="">
				<form action="/" method="POST" name="editEvent">
					<input class="" type="text" name="last-id" value="" autocomplete="off">
					<input class="" type="text" name="title" title="Введите заготовок" maxlength="40" placeholder="Введите заготовок" value="" autocomplete="off">
					<div class="">
						Начало дата
						<input class="" type="date" name="start-date" title="Дата начала события" value="" autocomplete="off">
						время
						<input class="" type="time" name="start-time" title="Время начала события" value="" autocomplete="off">
					</div>
					<div class="">
						Окончание дата
							<input class="" type="date" name="end-date" title="Дата окончаня события" value="" autocomplete="off">
					время
						<input class="" type="time" name="end-time" title="Время окончаня события" value="" autocomplete="off">
					</div>
				</div>
				<fieldset class="">
					<div class="">
						[[- Если выбран ремя становится ReadOnly ]]
						<input class="" type="checkbox" name="all-day">
						<label class="" for="all-day">Целый день</label>
					</div>
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" name="private" >
						<label class="form-check-label col-form-label-sm" for="private">Личное</label>
					</div>
				</fieldset>
				<div class="">
					<div class="col-12">
						<label class="col-form-label col-form-label-sm" for="description">Описание</label>
						<textarea class="" name="description" title="Описание события" rows="5"></textarea>
					</div>
				</div>
				<div class="">
					<div class="col-3 col-form-label">
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="checkbox"   name="repeated">
							<label class="form-check-label col-form-label-sm" for="repeated">Повторять</label>
						</div>
					</div>
				</div>
				<div class="">
					<div class="col-sm-5 offset-sm-1">
						<select class="" id="repeat_period" data-selected="">
							<option id="repeat_dayly" value="dayly">Каждый день</option>
							<option id="repeat_weekly" value="weekly">Каждую неделю</option>
							<option id="repeat_monthly" value="monthly">Каждый месяц</option>
							<option id="repeat_yearly" value="yearly">Каждый год</option>
						</select>
					</div>
					<label for="repeat_until" class="col-sm-1 col-form-label col-form-label-sm">До</label>
					<div class="col-sm-5">
						<input class="" type="date" name="repeat_until" value="">
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="js-modal-close">Не сохранять</button>
					<button type="submit" class="js-modal-save js-modal-close"  id="js-modal-save" type="submit">Сохранить</button>
				</div>
			</form>
		  </div>
		</div>
	</div>


	<!-- Подложка под модальным окном -->
	<div class="overlay js-overlay-modal"></div>
	<script type="text/javascript">
		!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


			document.addEventListener('DOMContentLoaded', function() {

			   /* Записываем в переменные массив элементов-кнопок и подложку.
				  Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
			   var modalButtons = document.querySelectorAll('.js-open-modal'),
				   overlay	  = document.querySelector('.js-overlay-modal'),
				   closeButtons = document.querySelectorAll('.js-modal-close');


			   /* Перебираем массив кнопок */
			   modalButtons.forEach(function(item){

				  /* Назначаем каждой кнопке обработчик клика */
				  item.addEventListener('click', function(e) {

					 /* Предотвращаем стандартное действие элемента. Так как кнопку разные
						люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
						Нужно подстраховаться. */
					 e.preventDefault();

					 /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
						и будем искать модальное окно с таким же атрибутом. */
					 var modalId = this.getAttribute('data-modal'),
						 modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


					 /* После того как нашли нужное модальное окно, добавим классы
						подложке и окну чтобы показать их. */
					 modalElem.classList.add('active');
					 overlay.classList.add('active');
				  }); // end click

			   }); // end foreach


			   closeButtons.forEach(function(item){

				  item.addEventListener('click', function(e) {
					 var parentModal = this.closest('.modal');

					 parentModal.classList.remove('active');
					 overlay.classList.remove('active');
				  });

			   }); // end foreach


				document.body.addEventListener('keyup', function (e) {
					var key = e.keyCode;

					if (key == 27) {

						document.querySelector('.modal.active').classList.remove('active');
						document.querySelector('.overlay').classList.remove('active');
					};
				}, false);


				overlay.addEventListener('click', function() {
					document.querySelector('.modal.active').classList.remove('active');
					this.classList.remove('active');
				});




			}); // end ready

	</script>

</body>
</html>
