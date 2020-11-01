// function init() {
// 	let tabBody = document.querySelectorAll('.tab-body');
// 	for (let i = 1; i < tabBody.length; i++) {
// 		tabBody[i].style.display = 'none';
// 	}
// }

// init();

// let tab = document.querySelectorAll('.tab');

// tab.forEach(function(e) {
// 	e.onclick = showTabs;
// });

// function showTabs() {
// 	let data = this.getAttribute('data');
// 	let tabBody = document.querySelectorAll('.tab-body');
// 	for (let i = 0; i < tabBody.length; i++) {
// 		tabBody[i].style.display = 'none';
// 	}
// 	// css .tab-body[data='3']
// 	// js  '.tab-body[data="' + data +  '"]'
// 	// document.querySelector('.tab-body[data="' + data + '"]');
// 	document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
// }

// ДЗ - оптимизировать код
let tab = document.querySelectorAll('.tab');
let tabBody = document.querySelectorAll('.tab-body');

init();

tab.forEach((e) => {e.onclick = showTabs;});

function init(a = 1) {
	for(let i = a; i < tabBody.length; i++) {
		tabBody[i].style.display = 'none';
	}
};

function showTabs() {
	let data = this.getAttribute('data');
	init(0);

	document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
};

