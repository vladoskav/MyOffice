import "normalize.css";
import "src/scss/rates.scss";

const lkButton = document.querySelector('.header__lk-button');
const burgerButton = document.querySelector('.burger-menu__button');
const burgerMenu = document.querySelector('.burger-menu');
const main = document.querySelector('.main');
const modal = document.querySelector('.modal');
const popupClose = document.querySelector('.popup__close');
const lkLink = document.querySelector('.nav-bar__link_lk');

const minusUp = document.querySelector('.calculate-block__minus_up');
const plusUp = document.querySelector('.calculate-block__minus_plus-up');
const numberUp = document.querySelector('.calculate-block__number');
const countBlock = document.querySelector('.calculate-block__count-block');
const numberDown = document.querySelector('.calculate-block__number_down');
const minusDown = document.querySelector('.calculate-block__minus_down');
const plusDown = document.querySelector('.calculate-block__minus_plus-down');
const countBlockDown = document.querySelector('.calculate-block__count-block-down')

const countUp = (event, number, plus, minus) => {
    if (event.target === minus && number.textContent > 0) {
            number.textContent--
    } else if (event.target === plus) {
        number.textContent++
    }
};

countBlock.addEventListener('click', (event) => {
    countUp(event, numberUp, plusUp, minusUp)
});

countBlockDown.addEventListener('click', (event) => {
    countUp(event, numberDown, plusDown, minusDown)
});



const openModal = () => {
    modal.classList.add('modal_is-opened');
};

popupClose.addEventListener('click', () => {

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


