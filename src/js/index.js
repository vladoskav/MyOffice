import "normalize.css";
import "src/scss/index.scss";
import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: "auto",
    slidesPerColumn: 1,
    centeredSlides: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

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

lkLink.addEventListener('click', () => {
    openModal();
    burgerMenu.classList.remove('burger-menu_opened');

});

lkButton.addEventListener('click', openModal);


burgerButton.addEventListener('click', () => {
        burgerMenu.classList.toggle('burger-menu_opened');

});
main.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu_opened')
});
