// let a = 7;
// b = '5';
// a = 50;
// // Операторы сравнения
// // == ===
// // != !===
// // > < >= <=
// // === сравнение по типу

// if (a > 0 && a <= 20) {
// 	console.log('1');
// } else if(a > 20 && a <= 30){
// 	console.log('2');
// } else if(a > 30 && a <= 40){
// 	console.log('3');
// } else {
// 	console.log('Такой квартиры нет')
// }

//console.log(Math.random() * 10);

// const userNum = document.querySelector('#user-num'),
// 		btn = document.querySelector('#btn'),
// 		body = document.querySelector('body');
// console.log(body)

		

// function randomNum(){
// 	let rand = Math.round(Math.random() * 10);
// 	return rand;
// }

// function checkRand() {
// 	let randNum = randomNum();
// 	if(randNum == userNum.value){
// 		console.log('Вы угадали')
		
// 	} else {
// 		console.log('Вы не угадали, попробуйте еще раз');
// 	}
// }

// btn.onclick = checkRand;

let r = Math.random();
r = r * 10;
r = Math.round(r);

console.log(r);

let userNum = document.querySelector('#user-num');
document.querySelector('#btn').onclick = checkNum;

function checkNum() {
	let num = userNum.value;
	num = parseInt(num);
	console.log(num);
	if (!isNaN(num)){
		if ( num == r){
			alert('Вы угадали');
			location.reload();
		} else {
			alert('Пробуй ещё ');
			userNum.value = '';
		}
	} else {
		alert('Введите корректное число');
	}
};