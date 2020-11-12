document.querySelectorAll('.modal-show').forEach((e) => {
	e.onclick = showModal;
});

document.querySelectorAll('.modal-close').forEach((e) => {
	e.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach((e) => {
	e.onclick = closeModalWrap;
});



function showModal() {
	//let modalId = this.getAttribute('data-modal');//неудобный вариант
	let modalId = this.dataset.modal; //более короткий и удобный вариант
	document.querySelector(modalId).parentElement.classList.remove('hide')
	document.querySelector(modalId).classList.remove('hide');
	document.onkeydown = function(event) {
		if(event.keyCode == 27) {
			document.querySelectorAll('.modal-wrap').forEach(function(element) {
				console.log(element)
				element.classList.add('hide');
				element.children[0].classList.add('hide');
				document.onkeydown = null;
			})
		}
	};
}

function closeModal() {
	let modalId = this.dataset.modal; //более короткий и удобный вариант
	document.querySelector(modalId).parentElement.classList.add('hide');
	document.querySelector(modalId).classList.add('hide');
}

function closeModalWrap() {
	this.classList.add('hide');
	this.children[0].classList.add('hide');
	document.onkeydown = null;
}