document.querySelector('.read-rules').onclick = function(){
	document.querySelector('.form-slider').style.marginLeft = '-250px';
}

document.querySelectorAll('.read-rules-back').forEach((e) =>{
	e.onclick = () => {document.querySelector('.form-slider').style.marginLeft = '0px';}
});