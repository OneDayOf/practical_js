// document.querySelectorAll('.block').onclick = function() {
// 	console.log('work');
// }

console.log(document.querySelectorAll('.block'));


let blocks = document.querySelectorAll('.block');
let blocks2 = document.getElementsByClassName('block');

console.log(blocks2)
//Первый способ повесить событие на каждый элемент
for (let i = 0; i < blocks.length; i++) {
	blocks[i].onclick = one;
}

//Второй способ повесить событие на каждый элемент
// blocks.forEach(function (e){
// 	e.onclick = function() {
// 		console.log(e.data_value);
// 	}
// })

//this
function one(){
	console.log(111);
	//console.log(this);
	this.style.backgroundColor = 'tomato'
}