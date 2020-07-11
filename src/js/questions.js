import "normalize.css";
import "src/scss/questions.scss";

const panel = document.querySelectorAll('.accordion__panel');
const lkButton = document.querySelector('.header__lk-button');
const burgerButton = document.querySelector('.burger-menu__button');
const burgerMenu = document.querySelector('.burger-menu');
const main = document.querySelector('.main');
const modal = document.querySelector('.modal');
const popupClose = document.querySelector('.popup__close');
const lkLink = document.querySelector('.nav-bar__link_lk');

const openModal = () => {
    modal.classList.add('modal_is-opened');
};

popupClose.addEventListener('click', () => {

    modal.classList.remove('modal_is-opened');
});
modal.addEventListener('click', () => {
    modal.classList.remove('modal_is-opened');

});
lkLink.addEventListener('click', () => {
    openModal();
    burgerMenu.classList.remove('burger-menu_opened');

});

lkButton.addEventListener('click', openModal);


burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-menu_opened');

});
main.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu_opened');

});


for (let i = 0; i < panel.length; i++) {
    panel[i].addEventListener('click', () => {
        panel[i].nextElementSibling
            .classList.toggle('accordion__text-block_active');
        panel[i].classList.toggle('accordion__panel_active')
    })
}