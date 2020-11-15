document.querySelectorAll('.modal-show').forEach((e) => {
	e.onclick = showModal;
});

document.querySelectorAll('.modal-close').forEach((e) => {
	e.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach((e) => {
	e.onclick = (event) => {
		let target = event.target;
		if(target.classList.contains('modal-wrap')){
			closeModal();
		} else {
			event.cancleBuble = true;
		}
	};
});

function showModal() {
	document.querySelector('.modal-wrap').classList.remove('hide');
	document.onkeydown = function(event) {
		if(event.keyCode == 27) {
			closeModal();
		}
	};
};

function closeModal() {
	document.querySelectorAll('.modal-wrap').forEach((e) => {
		e.classList.add('hide');
	});
	document.onkeydown = null;
}