!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=77)}([function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,"a",(function(){return o}));var o=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e,this.closeButton=n,this._setEventListeners()}var e,n,o;return e=t,(n=[{key:"open",value:function(){this.container.classList.add("modal_is-opened")}},{key:"close",value:function(){this.container.classList.remove("modal_is-opened")}},{key:"_setEventListeners",value:function(){var t=this;this.closeButton.addEventListener("click",(function(){t.close()}))}}])&&r(e.prototype,n),o&&r(e,o),t}()},function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(28))},function(t,e,n){},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(7),o=n(18),u=n(12);t.exports=r?function(t,e,n){return o.f(t,e,u(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(3);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(32),o=n(33);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.4.1",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(13),o=n(15);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(1),o=n(6);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(7),o=n(29),u=n(12),c=n(9),i=n(16),a=n(5),f=n(17),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=c(t),e=i(e,!0),f)try{return s(t,e)}catch(t){}if(a(t,e))return u(!o.f.call(t,e),t[e])}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(3),o=n(14),u="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?u.call(t,""):Object(t)}:Object},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(7),o=n(3),u=n(30);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(7),o=n(17),u=n(19),c=n(16),i=Object.defineProperty;e.f=r?i:function(t,e,n){if(u(t),e=c(e,!0),u(n),o)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(8);t.exports=r("native-function-to-string",Function.toString)},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e){t.exports={}},function(t,e,n){var r=n(24),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r=n(48).forEach,o=n(56);t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,e,n){"use strict";var r=n(27),o=n(25);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e,n){var r=n(1),o=n(11).f,u=n(6),c=n(31),i=n(10),a=n(37),f=n(47);t.exports=function(t,e){var n,s,l,p,v,d=t.target,y=t.global,m=t.stat;if(n=y?r:m?r[d]||i(d,{}):(r[d]||{}).prototype)for(s in e){if(p=e[s],l=t.noTargetGet?(v=o(n,s))&&v.value:n[s],!f(y?s:d+(m?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&u(p,"sham",!0),c(n,s,p,t)}}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,u=o&&!r.call({1:2},1);e.f=u?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(1),o=n(4),u=r.document,c=o(u)&&o(u.createElement);t.exports=function(t){return c?u.createElement(t):{}}},function(t,e,n){var r=n(1),o=n(8),u=n(6),c=n(5),i=n(10),a=n(20),f=n(34),s=f.get,l=f.enforce,p=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,e,n,o){var a=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof e||c(n,"name")||u(n,"name",e),l(n).source=p.join("string"==typeof e?e:"")),t!==r?(a?!s&&t[e]&&(f=!0):delete t[e],f?t[e]=n:u(t,e,n)):f?t[e]=n:i(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a.call(this)}))},function(t,e){t.exports=!1},function(t,e,n){var r=n(1),o=n(10),u=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=u},function(t,e,n){var r,o,u,c=n(35),i=n(1),a=n(4),f=n(6),s=n(5),l=n(36),p=n(22),v=i.WeakMap;if(c){var d=new v,y=d.get,m=d.has,h=d.set;r=function(t,e){return h.call(d,t,e),e},o=function(t){return y.call(d,t)||{}},u=function(t){return m.call(d,t)}}else{var b=l("state");p[b]=!0,r=function(t,e){return f(t,b,e),e},o=function(t){return s(t,b)?t[b]:{}},u=function(t){return s(t,b)}}t.exports={set:r,get:o,has:u,enforce:function(t){return u(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(1),o=n(20),u=r.WeakMap;t.exports="function"==typeof u&&/native code/.test(o.call(u))},function(t,e,n){var r=n(8),o=n(21),u=r("keys");t.exports=function(t){return u[t]||(u[t]=o(t))}},function(t,e,n){var r=n(5),o=n(38),u=n(11),c=n(18);t.exports=function(t,e){for(var n=o(e),i=c.f,a=u.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||i(t,s,a(e,s))}}},function(t,e,n){var r=n(39),o=n(41),u=n(46),c=n(19);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=u.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(40),o=n(1),u=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?u(r[t])||u(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){t.exports=n(1)},function(t,e,n){var r=n(42),o=n(45).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(5),o=n(9),u=n(43).indexOf,c=n(22);t.exports=function(t,e){var n,i=o(t),a=0,f=[];for(n in i)!r(c,n)&&r(i,n)&&f.push(n);for(;e.length>a;)r(i,n=e[a++])&&(~u(f,n)||f.push(n));return f}},function(t,e,n){var r=n(9),o=n(23),u=n(44),c=function(t){return function(e,n,c){var i,a=r(e),f=o(a.length),s=u(c,f);if(t&&n!=n){for(;f>s;)if((i=a[s++])!=i)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(24),o=Math.max,u=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):u(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(3),o=/#|\.prototype\./,u=function(t,e){var n=i[c(t)];return n==f||n!=a&&("function"==typeof e?r(e):!!e)},c=u.normalize=function(t){return String(t).replace(o,".").toLowerCase()},i=u.data={},a=u.NATIVE="N",f=u.POLYFILL="P";t.exports=u},function(t,e,n){var r=n(49),o=n(13),u=n(51),c=n(23),i=n(52),a=[].push,f=function(t){var e=1==t,n=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,d,y,m){for(var h,b,g=u(v),S=o(g),_=r(d,y,3),x=c(S.length),L=0,w=m||i,E=e?w(v,x):n?w(v,0):void 0;x>L;L++)if((p||L in S)&&(b=_(h=S[L],L,g),t))if(e)E[L]=b;else if(b)switch(t){case 3:return!0;case 5:return h;case 6:return L;case 2:a.call(E,h)}else if(s)return!1;return l?-1:f||s?s:E}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,e,n){var r=n(50);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(15);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(4),o=n(53),u=n(54)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[u])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(14);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(1),o=n(8),u=n(21),c=n(55),i=r.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=c&&i[t]||(c?i:u)("Symbol."+t))}},function(t,e,n){var r=n(3);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){"use strict";var r=n(3);t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){var r=n(1),o=n(58),u=n(25),c=n(6);for(var i in o){var a=r[i],f=a&&a.prototype;if(f&&f.forEach!==u)try{c(f,"forEach",u)}catch(t){f.forEach=u}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(26),n(57),n(2),n(78);var r=n(0),o=document.querySelector(".header__lk-button"),u=document.querySelector(".burger-menu__button"),c=document.querySelector(".burger-menu"),i=document.querySelector(".main"),a=document.querySelector(".modal_lk"),f=document.querySelector(".popup__close_lk"),s=document.querySelector(".nav-bar__link_lk"),l=document.querySelector(".header__start-button"),p=document.querySelector(".modal_reg"),v=document.querySelector(".popup__close_reg"),d=document.querySelector(".popup__button_reg"),y=document.querySelector(".modal_thanks"),m=document.querySelector(".popup__link"),h=document.querySelector(".modal_recovery"),b=document.querySelector(".popup__button_recovery"),g=document.querySelector(".modal_reset"),S=document.querySelector(".modal_begin"),_=document.querySelector(".popup__close_thanks"),x=document.querySelector(".popup__close_reset"),L=document.querySelector(".popup__close_recovery"),w=document.querySelectorAll(".ac-block__button"),E=document.querySelector(".modal_start"),O=document.querySelector(".popup__close_start"),k=document.querySelector(".additional__button"),j=new r.a(a,f);o.addEventListener("click",(function(){j.open()})),s.addEventListener("click",(function(){j.open(),c.classList.remove("burger-menu_opened")}));var q=new r.a(p,v);l.addEventListener("click",(function(){q.open()})),u.addEventListener("click",(function(){c.classList.toggle("burger-menu_opened")})),i.addEventListener("click",(function(){c.classList.remove("burger-menu_opened")}));var T=new r.a(y,_);d.addEventListener("click",(function(t){t.preventDefault(),T.open(),q.close()}));var P=new r.a(h,L);m.addEventListener("click",(function(){j.close(),P.open()}));var M=new r.a(g,x);b.addEventListener("click",(function(t){t.preventDefault(),M.open(),P.close()}));var A=new r.a(E,O);w.forEach((function(t){t.addEventListener("click",(function(t){A.open()}))}));var C=document.querySelector(".popup__close_begin"),D=new r.a(S,C);k.addEventListener("click",(function(){D.open()}))},function(t,e,n){}]);