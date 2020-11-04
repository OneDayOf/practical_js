// inputs
const colorbg1 = document.querySelector("#color-1"),
		colorbg2 = document.querySelector("#color-2"),
		colorText = document.querySelector("#color-text"),
		textSize = document.querySelector("#font-size"),
		rgb = document.querySelectorAll('.rgb');

// buttons
const apply1 = document.querySelectorAll('.apply')[0],
		apply2 = document.querySelectorAll('.apply')[1],
		reset = document.querySelector('#reset');

// elements
let body= document.body,
	 textSizeP =  document.querySelector(".half-r p"),
	 textSizeOut = document.querySelector("#font span"),
	 circleText = document.querySelector(".circle span"),
	 circleBg = document.querySelector(".circle");

// Apply buttons
apply1.onclick = () => {
	console.log(colorbg1.value)
	body.style.backgroundColor = colorbg1.value;

}

apply2.onclick = () => {
	body.style.backgroundColor = colorbg2.value;
	body.style.color = colorText.value;
}

reset.onclick = () => {
	body.style.color = '';
	body.style.backgroundColor = '';
	colorText.value = '';
	colorbg1.value = '';
	colorbg2.value = '';
};

textSize.onchange = () => {
	textSizeP.style.fontSize = textSize.value + 'px';
	textSizeOut.innerText = textSize.value;
}

let rgbColor = [0, 0, 0];

rgb.forEach((e, index) => {
	e.onchange = () => {
		rgbColor[index] = parseInt(e.value);
		let string = rgbColor.join(', ')
		circleText.innerText = string;
		circleBg.style.backgroundColor = 'rgb(' + string + ')';
	};
});