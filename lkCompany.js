!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s=99)}({0:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.d(t,"a",(function(){return r}));var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.closeButton=n,this._setEventListeners()}var t,n,r;return t=e,(n=[{key:"open",value:function(){this.container.classList.add("modal_is-opened")}},{key:"close",value:function(){this.container.classList.remove("modal_is-opened")}},{key:"_setEventListeners",value:function(){var e=this;this.closeButton.addEventListener("click",(function(){e.close()}))}}])&&o(t.prototype,n),r&&o(t,r),e}()},100:function(e,t,n){},2:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);n(2),n(100);var o=n(0),r=document.querySelector(".burger-menu__button"),u=document.querySelector(".burger-menu"),c=document.querySelector(".main"),i=document.querySelector(".popup__button_reg"),l=document.querySelector(".modal_thanks"),a=document.querySelector(".popup__link"),s=document.querySelector(".modal_recovery"),p=document.querySelector(".popup__button_recovery"),d=document.querySelector(".modal_reset"),f=document.querySelector(".popup__close_thanks"),v=document.querySelector(".popup__close_reset"),y=document.querySelector(".popup__close_recovery");r.addEventListener("click",(function(){u.classList.toggle("burger-menu_opened")})),c.addEventListener("click",(function(){u.classList.remove("burger-menu_opened")}));var _=new o.a(l,f);i.addEventListener("click",(function(e){e.preventDefault(),_.open(),popupReg.close()}));var m=new o.a(s,y);a.addEventListener("click",(function(){popupLk.close(),m.open()}));var b=new o.a(d,v);p.addEventListener("click",(function(e){e.preventDefault(),b.open(),m.close()}))}});