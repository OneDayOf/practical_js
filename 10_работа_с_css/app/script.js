let block1 = document.querySelector('.block-1');
//let block1Style  = block1.style;
block1.style.width = '200px';
console.log(block1.style);

block1.classList.add('red');
block1.classList.add('green');

block1.classList.remove('green');

console.log(block1.classList);//Список всех классов
console.log(block1.classList.contains('red'));// Проверка наличия класса у элемента

block1.classList.toggle('red');