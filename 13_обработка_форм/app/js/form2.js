let form = document.querySelector('#form')

let sendForm = document.querySelector('#send-form');

sendForm.onclick = function(event) {
	event.preventDefault();
	console.log(serialize(form));
}