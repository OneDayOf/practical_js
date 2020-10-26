console.log('Hello'); //Hello
console.log(3 + '2'); //32
let a = 5;
a = 8 + a; // 13 -> a 
//alert(a);
//out.innerHTML = '<i>Hi</i>' //Обращение напрямую по ID - работает, но не во всех браузерах, не используется
//out.innerText = '<i>Hi</i>' // не обрабатывает теги. вставляет как есть
//document.getElementById('out').innerHTML = 777; // правильное обращение к элементу

let p;
p = document.getElementById('out');
p.innerHTML = 555;
console.log(p);

let c = 'hello';
let d = 'world';

console.log(c+d);

//Home work
console.log('HOME WORK');
let year = 1995;
console.log(2020 - year);

p.innerHTML = '<i>' + (2020 - year) + '</i>'