//let result = document.getElementById('result');
let form = document.getElementById('exampleModal-form');

form.addEventListener('submit', function(event) {
	let promise = fetch('/components/proxylist/ajax.php', {
		method: 'POST',
		body: new FormData(this),
	});
	
	promise.then(
		response => {
			return response.text();
		}
	).then(
		text => {
			// результат
			// result.innerHTML = text;
					alert(text);
				}
	);
	// отменим отправку формы
	event.preventDefault();
});






	



