import "normalize.css";
import "src/scss/lk.scss";
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

// Аккордион
const panel = document.querySelectorAll('.accordion__panel');
const nextPanel = document.querySelectorAll('.accordion__panel_text');

const accordion = (panel, mix) => {
    for (let i = 0; i < panel.length; i++) {
        panel[i].addEventListener('click', () => {
            panel[i].nextElementSibling
                .classList.toggle(`accordion__text-block_${mix}`);

            panel[i].classList.toggle('accordion__panel_active-program')
        })
    }};
accordion(panel, "active");
accordion(nextPanel, "price-active");

// Попапы в ЛК
 const techLink = document.querySelector('.lk__link');
 const modalTech = document.querySelector('.modal_tech-support');
 const closeSupport = document.querySelector('.popup__close_tech-support');

 const popupTech = new Popup(modalTech, closeSupport);

 techLink.addEventListener('click', () => {
     popupTech.open();
 });

 const editEmployee = document.querySelectorAll('.employees__icon_edit');
 const modalEdit = document.querySelector('.modal_edit-employee');
 const closeEdit = document.querySelector('.popup__close_edit-employee');
 const modalSuccessEdit = document.querySelector('.modal_success');
 const popupEditEmployee = new Popup(modalEdit, closeEdit);
 const saveEdit = document.querySelector('.popup__button_edit-employee');

 editEmployee.forEach((item) => {
     item.addEventListener('click', () => {
         popupEditEmployee.open();
     })
 });

 const popupEditSuccess = new Popup(modalSuccessEdit, closeEdit);

 saveEdit.addEventListener('click', (event) => {
     event.preventDefault();
     popupEditSuccess.open();
     popupEditEmployee.close();
 }
);

 const addEmployee = document.querySelector('.employees__add-button');
 const modalNewEmployee = document.querySelector('.modal_new-employee');
 const closeNew = document.querySelector('.popup__close_new-employee');

 const popupNewEmployee = new Popup(modalNewEmployee, closeNew);

 addEmployee.addEventListener('click', () => {
     popupNewEmployee.open();
 });

 const saveNew = document.querySelector('.popup__button_new-employee');
 const modalSuccessNew = document.querySelector('.modal_new-success');

 const popupNewSuccess = new Popup(modalSuccessNew, closeNew);

 saveNew.addEventListener('click', (event) => {
     event.preventDefault();
     popupNewSuccess.open();
     popupNewEmployee.close();
 });

 const deleteEmployee = document.querySelectorAll('.employees__icon_delete');
 const modalDeleteEmployee = document.querySelector('.modal_delete-employee');
 const closeDelete = document.querySelector('.popup__close_delete-employee');

 const popupDeleteEmployee = new Popup(modalDeleteEmployee, closeDelete);

 deleteEmployee.forEach((item) => {
     item.addEventListener('click', () => {
         popupDeleteEmployee.open();
     });
 });

 const confirmDelete = document.querySelector('.popup__button_delete-employee');
 const modalSuccessDelete = document.querySelector('.modal_delete-success');

 const popupSuccessDelete = new Popup(modalSuccessDelete, closeDelete);

 confirmDelete.addEventListener('click', (event) => {
     event.preventDefault();
     popupSuccessDelete.open();
     popupDeleteEmployee.close();
 });
