document.querySelector('.push').onclick = function() {
	//данные из инпут type = text
	console.log(document.querySelector('.text-input').value);
	//данные из type = password
	console.log(document.querySelector('.pass-input').value);
//данные из type = range
	console.log(document.querySelector('.range-input').value);
//данные из type = date
	console.log(document.querySelector('.calendar-input').value);
//данные из type = color
console.log(document.querySelector('.color-input').value);
//данные из type = checkbox
console.log(document.querySelector('.checkbox-input').checked);
	if(document.querySelector('.checkbox-input').checked) {
		console.log('Дааа!');
	} else {
		console.log('Нееет!');
	}

	console.log('--------------Radio--------------')
	//данные из type = radio
	// console.log(document.querySelector('.radio-input[checked="checked"]').value);
}