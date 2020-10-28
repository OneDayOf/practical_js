//парный тег
//document.querySelector('p').innerHTML = 'Привет <span>Hi</span>!';
//document.querySelector('p').innerText += ' Привет <span>Hi</span>!';
// ------------------------------------------
//document.querySelector('h1').outerHTML = '<h2>jjjjjj</h2>';
//document.querySelector('h2').outerText = '<h2>jjjjjj</h2>';
// ------------------------------------------

document.querySelector('div').insertAdjacentHTML('beforebegin', 222);
document.querySelector('div').insertAdjacentHTML('afterbegin', 333);
document.querySelector('div').insertAdjacentHTML('beforeend', 444);
document.querySelector('div').insertAdjacentHTML('afterend', 555);

// -------------------------------------------

document.querySelector('span').innerHTML = 9999;
document.querySelector('.one span').innerHTML = 7777;
//  ------------------------------------------
document.querySelector('img').alt = 'my moto';

console.log(document.querySelector('img').src)

document.querySelector('img').src = 'https://i.pinimg.com/236x/3b/a4/a9/3ba4a9d60135c462581c3c621fa240df--high-resolution-wallpapers-wallpaper-for.jpg'

document.querySelector('title').innerText = "Документ"

document.querySelector('link');
console.log(document.querySelector('link').href)
document.querySelector('link').href = 'style1.css'