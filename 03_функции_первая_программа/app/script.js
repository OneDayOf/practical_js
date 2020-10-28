function hello() {
	console.log('hello');
	hello2();
};

function hello2() {
	console.log('hello-2-2-2-22');
}

let btn = document.querySelector('#btn'); //кнопка
btn.onclick = hello;

let showModal = document.querySelector('#show-modal'); //кнопка show modal
let hideModal = document.querySelector('#hide-modal');
let modal = document.querySelector('.modal');

function show() {
	modal.style.display = 'block'
}

function hide() {
	modal.style.display = 'none'
}

showModal.onclick = show;
hideModal.onclick = hide;