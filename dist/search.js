!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=20)}({0:function(e,t,n){"use strict";var c=function(e,t){return!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},o=function(e,t){c(e,t)||(e.className+=" "+t)},i=function(e,t){if(c(e,t)){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}},u=function(e,t){document.getElementById(e).setAttribute("aria-hidden",t)},d=function(e,t){for(var n=0;n<e.length;n++){e[n].setAttribute("tabindex",t)}},s=function(){var e=document.getElementsByTagName("body")[0],t=document.getElementById("primary").getElementsByTagName("a");c(e,"menu-open")?(i(e,"menu-open"),u("primary","true"),d(t,"-1")):(o(e,"menu-open"),u("primary","false"),d(t,"0"))},a=function(){var e=document.getElementsByTagName("body")[0],t=document.querySelector("form.search-form input");console.log(t),c(e,"search-open")?(i(e,"search-open"),u("search-form-container","true"),d(t,"-1"),t.blur()):(o(e,"search-open"),u("search-form-container","false"),d(t,"0"),t.focus())};document.addEventListener("readystatechange",function(){"complete"===document.readyState&&(function(){var n=document.getElementsByTagName("body")[0],o=document.getElementById("menu-toggle"),r=document.getElementById("primary");if(null!==r){var a=document.getElementById("primary").getElementsByTagName("a");c(n,"nav-is-visible")?d(a,"0"):d(a,"-1"),o.addEventListener("click",s),document.addEventListener("keydown",function(e){c(n,"menu-open")&&"Escape"===e.key&&s()}),document.addEventListener("click",function(e){var t=!r.contains(e.target)&&!o.contains(e.target);c(n,"menu-open")&&t&&s()}),window.addEventListener("resize",function(e){var t=window.innerWidth;c(n,"nav-is-visible")&&1024<t&&(i(n,"menu-open"),u("primary","true"),d(a,"-1"))})}}(),function(){var n=document.getElementById("search-toggle");if(null!==n){var o=document.getElementsByTagName("body")[0],r=document.getElementById("search-form-container");n.addEventListener("click",a),document.addEventListener("keydown",function(e){c(o,"search-open")&&"Escape"===e.key&&a()}),document.addEventListener("click",function(e){var t=!r.contains(e.target)&&!n.contains(e.target);c(o,"search-open")&&t&&a()})}}())});var r=document.getElementsByTagName("body")[0];c(r,"home blog")?document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".sig-line"),t=document.querySelector(".sig-dot");setTimeout(function(){e.classList.add("loaded"),t.classList.add("loaded")},2500)}):document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".sig-line"),t=document.querySelector(".sig-dot");e.classList.add("loaded"),t.classList.add("loaded")})},20:function(e,t,n){n(21),e.exports=n(22)},21:function(e,t,n){"use strict";n.r(t);n(0)},22:function(e,t,n){}});