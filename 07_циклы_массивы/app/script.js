document.querySelector('.push').onclick = function() {

	//данные из type = radio
	// console.log(document.querySelector('.radio-input[checked="checked"]').value);

	let radio = document.querySelectorAll('.radio-input');
	//radio[2].hidden = true;
	for (let i = 0; i < radio.length; i++) {
		if(radio[i].checked) {
			console.log(radio[i].value)
		}
	}
}