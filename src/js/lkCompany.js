import "normalize.css";
import "src/scss/lkCompany.scss";
import Popup from "./popup";

// Селекторы


const burgerButton = document.querySelector('.burger-menu__button');
const burgerMenu = document.querySelector('.burger-menu');
const main = document.querySelector('.main');
const popupCloseReg = document.querySelector('.popup__close_reg');
const confirmButton = document.querySelector('.popup__button_reg');
const thanksPopup = document.querySelector('.modal_thanks');
const popupLink = document.querySelector('.popup__link');
const modalRec = document.querySelector('.modal_recovery');
const recButton = document.querySelector('.popup__button_recovery');
const modalReset = document.querySelector('.modal_reset');

// Открытие мобильного меню

burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-menu_opened');

});
main.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu_opened')
});

// Открытие формы спасибо

const popupThanks = new Popup(thanksPopup, popupCloseReg);

confirmButton.addEventListener('click', (event) => {
    event.preventDefault();
    popupThanks.open();
    popupReg.close();
});

// Открытие восстановления пароля

const popupRec = new Popup(modalRec, popupCloseReg);

popupLink.addEventListener('click', () => {
    popupLk.close();
    popupRec.open();

});

// Пароль восстановлен
const popupReset = new Popup(modalReset, popupCloseReg);

recButton.addEventListener('click', (event) => {
    event.preventDefault();
    popupReset.open();
    popupRec.close();
});