// inputs
const colorbg1 = document.querySelector("#color-1"),
		colorbg2 = document.querySelector("#color-2"),
		colorText = document.querySelector("#color-text"),
		fontSize = document.querySelector("#font-size"),
		rgb = document.querySelectorAll('.rgb');

// buttons
const apply = document.querySelectorAll('.apply'),
		reset = document.querySelector('#reset');

// elements
let bg = document.body;
	 bg = window.getComputedStyle(bg, null).getPropertyValue('background-color')

