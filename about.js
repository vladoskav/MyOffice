!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="./",t(t.s=79)}({0:function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.d(n,"a",(function(){return o}));var o=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=n,this.closeButton=t,this._setEventListeners()}var n,t,o;return n=e,(t=[{key:"open",value:function(){this.container.classList.add("modal_is-opened")}},{key:"close",value:function(){this.container.classList.remove("modal_is-opened")}},{key:"_setEventListeners",value:function(){var e=this;this.closeButton.addEventListener("click",(function(){e.close()}))}}])&&r(n.prototype,t),o&&r(n,o),e}()},2:function(e,n,t){},79:function(e,n,t){"use strict";t.r(n);t(2),t(80);var r=t(0),o=document.querySelector(".header__lk-button"),u=document.querySelector(".burger-menu__button"),c=document.querySelector(".burger-menu"),i=document.querySelector(".main"),l=document.querySelector(".modal_lk"),a=document.querySelector(".popup__close_lk"),s=document.querySelector(".nav-bar__link_lk"),d=document.querySelector(".header__start-button"),f=document.querySelector(".modal_reg"),p=document.querySelector(".popup__close_reg"),v=document.querySelector(".popup__button_reg"),_=document.querySelector(".modal_thanks"),m=document.querySelector(".popup__link"),y=document.querySelector(".modal_recovery"),b=document.querySelector(".popup__button_recovery"),S=document.querySelector(".modal_reset"),k=new r.a(l,a);o.addEventListener("click",(function(){k.open()})),s.addEventListener("click",(function(){k.open(),c.classList.remove("burger-menu_opened")}));var g=new r.a(f,p);d.addEventListener("click",(function(){g.open()})),u.addEventListener("click",(function(){c.classList.toggle("burger-menu_opened")})),i.addEventListener("click",(function(){c.classList.remove("burger-menu_opened")}));var q=new r.a(_,p);v.addEventListener("click",(function(e){e.preventDefault(),q.open(),g.close()}));var L=new r.a(y,p);m.addEventListener("click",(function(){k.close(),L.open()}));var h=new r.a(S,p);b.addEventListener("click",(function(e){e.preventDefault(),h.open(),L.close()}))},80:function(e,n,t){}});