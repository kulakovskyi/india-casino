(()=>{var e={769:()=>{const e=document.querySelector(".footer__cookie-btn"),t=document.querySelector(".footer__cookie");e.addEventListener("click",(()=>{t.classList.add("_hidden")}))},602:()=>{const e=document.querySelector(".header__search-btn"),t=document.querySelector(".header__search-input"),s=document.querySelector(".header__search-image"),o=document.querySelector(".search-dd__filled");window.innerWidth>1024&&e.addEventListener("click",(i=>{t.classList.toggle("_active"),e.classList.toggle("_active"),s.classList.toggle("_active"),o.classList.toggle("_active")}))},824:()=>{({el:document.querySelector(".footer__btn-top"),show(){this.el.classList.remove("_hidden")},hide(){this.el.classList.add("_hidden")},addEventListener(){window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>400?this.show():this.hide()})),document.querySelector(".footer__btn-top").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener()},593:()=>{const e=document.querySelector(".blog__tabs-btn-one"),t=document.querySelector(".blog__tabs-btn-two"),s=document.querySelector(".blog__list-one"),o=document.querySelector(".blog__list-two");e.addEventListener("click",(()=>{e.classList.add("_active"),s.classList.remove("_hidden"),t.classList.remove("_active"),o.classList.add("_hidden")})),t.addEventListener("click",(()=>{t.classList.add("_active"),o.classList.remove("_hidden"),e.classList.remove("_active"),s.classList.add("_hidden")}))},811:()=>{const e=document.querySelector(".casino-online__tabs-btn-one"),t=document.querySelector(".casino-online__tabs-btn-two"),s=document.querySelector(".casino-online__list-one"),o=document.querySelector(".casino-online__list-two");e.addEventListener("click",(()=>{e.classList.add("_active"),s.classList.remove("_hidden"),t.classList.remove("_active"),o.classList.add("_hidden")})),t.addEventListener("click",(()=>{t.classList.add("_active"),o.classList.remove("_hidden"),e.classList.remove("_active"),s.classList.add("_hidden")}))},523:()=>{new class{constructor(e,t){this._el="string"==typeof e?document.querySelector(e):e,this._config=Object.assign({alwaysOpen:!0,duration:350},t),this.addEventListener()}addEventListener(){this._el.addEventListener("click",(e=>{const t=e.target.closest(".accordion__header");if(t){if(!this._config.alwaysOpen){const e=this._el.querySelector(".accordion__item_show");e&&e!==t.parentElement&&this.toggle(e)}this.toggle(t.parentElement)}}))}show(e){const t=e.querySelector(".accordion__body");if(t.classList.contains("collapsing")||e.classList.contains("accordion__item_show"))return;t.style.display="block";const s=t.offsetHeight;t.style.height=0,t.style.overflow="hidden",t.style.transition=`height ${this._config.duration}ms ease`,t.classList.add("collapsing"),e.classList.add("accordion__item_slidedown"),t.offsetHeight,t.style.height=`${s}px`,window.setTimeout((()=>{t.classList.remove("collapsing"),e.classList.remove("accordion__item_slidedown"),t.classList.add("collapse"),e.classList.add("accordion__item_show"),t.style.display="",t.style.height="",t.style.transition="",t.style.overflow=""}),this._config.duration)}hide(e){const t=e.querySelector(".accordion__body");!t.classList.contains("collapsing")&&e.classList.contains("accordion__item_show")&&(t.style.height=`${t.offsetHeight}px`,t.offsetHeight,t.style.display="block",t.style.height=0,t.style.overflow="hidden",t.style.transition=`height ${this._config.duration}ms ease`,t.classList.remove("collapse"),e.classList.remove("accordion__item_show"),t.classList.add("collapsing"),window.setTimeout((()=>{t.classList.remove("collapsing"),t.classList.add("collapse"),t.style.display="",t.style.height="",t.style.transition="",t.style.overflow=""}),this._config.duration))}toggle(e){e.classList.contains("accordion__item_show")?this.hide(e):this.show(e)}}(document.querySelector(".accordion"),{alwaysOpen:!1})},524:()=>{const e=document.querySelector(".menu__icon"),t=document.querySelector(".header__menu"),s=document.querySelector("body");e.addEventListener("click",(function(o){e.classList.toggle("_active"),t.classList.toggle("_active"),s.classList.toggle("_lock")}));const o=document.querySelectorAll(".menu__item-sub_list"),i=document.querySelectorAll(".menu__item-sub_list-2"),c=document.querySelectorAll(".menu__item-sub_list-3"),l=document.querySelectorAll(".menu__item-hover-desc"),n=document.querySelectorAll(".menu__item-hover-desc-2"),r=document.querySelectorAll(".menu__item-hover-desc-3");window.innerWidth<=1024&&(l.forEach((e=>{e.classList.remove("menu__item-hover-desc")})),n.forEach((e=>{e.classList.remove("menu__item-hover-desc-2")})),r.forEach((e=>{e.classList.remove("menu__item-hover-desc-3")})),o.forEach((e=>{let t=e.querySelector(".menu__item-list");e.querySelector(".menu__link").addEventListener("click",(()=>{t.classList.toggle("_open")}))})),i.forEach((e=>{let t=e.querySelector(".menu__item-list-2");e.querySelector(".menu__item-link").addEventListener("click",(()=>{t.classList.toggle("_open")}))})),c.forEach((e=>{let t=e.querySelector(".menu__item-list-3");e.querySelector(".menu__item-link").addEventListener("click",(()=>{t.classList.toggle("_open")}))})))}},t={};function s(o){var i=t[o];if(void 0!==i)return i.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,s),c.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";s(524),s(602),s(769),s(824),s(523),s(811),s(593)})()})();