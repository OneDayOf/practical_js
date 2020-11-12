document.querySelectorAll('.modal-show').forEach((e) => {
	e.onclick = showModal;
});

document.querySelectorAll('.modal-close').forEach((e) => {
	e.onclick = closeModal;
});

// document.querySelectorAll('.modal-wrap').forEach((e) => {
// 	e.onclick = function(e){
// 		closeModal();
// 	e.stopPropagation();
// 	};
// }, true);


document.querySelectorAll('.modal-wrap').forEach((e) => {
	e.onclick = (event) => {
		let target = event.target; 
		console.log(target.classList)
		if(target.classList.contains('modal-wrap') === false){
			event.cancleBuble = true;
		} else {
			closeModal();
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