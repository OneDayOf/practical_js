document.querySelector('.onclick').onclick = function () {
	console.log('click')
}

document.querySelector('.ondblclick').ondblclick = function () {
	console.log('double click')
}

document.querySelector('.onmousemove').onmousemove = function () {
	console.log('mouse move')
}

document.querySelector('.onmouseenter').onmouseenter = function () {
	console.log('mouse enter')
}

document.querySelector('.onmouseleave').onmouseleave = function () {
	console.log('mouse leave')
}

document.querySelector('.onmousewheel').onmousewheel = function () {
	console.log('mouse wheel');
	return false;
}