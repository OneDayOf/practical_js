const popupOpen = document.querySelector('.popup-open'),
		popupClose = document.querySelector('.popup-close'),
		popup = document.querySelector('.popup');


popupOpen.onclick = showPopup;
popupClose.onclick = showPopup;

function showPopup() {
	popup.classList.toggle('hidden');
}