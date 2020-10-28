document.querySelector('.push').onclick = function() {
	console.clear();
	//данные из type = radio
	// console.log(document.querySelector('.radio-input[checked="checked"]').value);

	let radio = document.querySelectorAll('.radio-input');
	//radio[2].hidden = true;
	for (let i = 0; i < radio.length; i++) {
		if(radio[i].checked) { //Если у элемента есть атрибут checked, то выводим его значение в консоль
			console.log(radio[i].value)
		}
	}

	let p = document.querySelectorAll('p');

	for (let i = 0; i < p.length; i++) {
			console.log(p[i].innerText);
			p[i].style.color = 'red'
	}

	let option = document.querySelectorAll('#my-select option');
	for (let i = 0; i < option.length; i++) {
		// console.log(option[i].selected);
		if (option[i].selected){//Если у элемента есть атрибут selected, то выводим его значение в консоль
			console.log(option[i].innerHTML);
		}
		
}
}
