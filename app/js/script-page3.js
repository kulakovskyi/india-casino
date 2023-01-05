/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/footerCookieComponent.js":
/*!****************************************************!*\
  !*** ./src/js/components/footerCookieComponent.js ***!
  \****************************************************/
/***/ (() => {

const cookieBtn = document.querySelector('.footer__cookie-btn');
const cookieBlock = document.querySelector('.footer__cookie');
cookieBtn.addEventListener('click', () => {
  cookieBlock.classList.add('_hidden');
});

/***/ }),

/***/ "./src/js/components/inputHeaderComponent.js":
/*!***************************************************!*\
  !*** ./src/js/components/inputHeaderComponent.js ***!
  \***************************************************/
/***/ (() => {

const inputButton = document.querySelector('.header__search-btn');
const inputText = document.querySelector('.header__search-input');
const inputSearchImage = document.querySelector('.header__search-image');
if (window.innerWidth > 1024) {
  inputButton.addEventListener('click', event => {
    inputText.classList.toggle('_active');
    inputButton.classList.toggle('_active');
    inputSearchImage.classList.toggle('_active');
  });
}

/***/ }),

/***/ "./src/js/components/page3/progressBarComponent.js":
/*!*********************************************************!*\
  !*** ./src/js/components/page3/progressBarComponent.js ***!
  \*********************************************************/
/***/ (() => {

//progress bar

const progressCircles = document.querySelectorAll('.circle');
const textCircles = document.querySelectorAll('.ratings__item-text');
function circles(one, two, tree, fourth, five) {
  const progressFirstCircle = one * 20;
  const progressSecondCircle = two * 20;
  const progressThirdCircle = tree * 20;
  const progressFourthCircle = fourth * 20;
  const progressFiveCircle = five * 20;
  if (one > 4 || two > 4 || tree > 4 || fourth > 4 || five > 4) {}
  for (let i = 0; i < progressCircles.length; i++) {
    progressCircles[0].setAttribute("stroke-dasharray", progressFirstCircle + ' , 100');
    progressCircles[1].setAttribute("stroke-dasharray", progressSecondCircle + ' , 100');
    progressCircles[2].setAttribute("stroke-dasharray", progressThirdCircle + ' , 100');
    progressCircles[3].setAttribute("stroke-dasharray", progressFourthCircle + ' , 100');
    progressCircles[4].setAttribute("stroke-dasharray", progressFiveCircle + ' , 100');
  }
  for (let i = 0; i < textCircles.length; i++) {
    textCircles[0].innerHTML = one.toFixed(1);
    textCircles[1].innerHTML = two.toFixed(1);
    textCircles[2].innerHTML = tree.toFixed(1);
    textCircles[3].innerHTML = fourth.toFixed(1);
    textCircles[4].innerHTML = five.toFixed(1);
  }
}
circles(4.5, 2.0, 3.5, 5.0, 4.0);

/***/ }),

/***/ "./src/js/components/scrollTopComponent.js":
/*!*************************************************!*\
  !*** ./src/js/components/scrollTopComponent.js ***!
  \*************************************************/
/***/ (() => {

const btnUp = {
  el: document.querySelector('.footer__btn-top'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('_hidden');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('_hidden');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.footer__btn-top').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };
  }
};
btnUp.addEventListener();

/***/ }),

/***/ "./src/js/functions/accorderon.js":
/*!****************************************!*\
  !*** ./src/js/functions/accorderon.js ***!
  \****************************************/
/***/ (() => {

class ItcAccordion {
  constructor(target, config) {
    this._el = typeof target === "string" ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true,
      duration: 350
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener("click", e => {
      const elHeader = e.target.closest(".accordion__header");
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector(".accordion__item_show");
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
        }
      }
      this.toggle(elHeader.parentElement);
    });
  }
  show(el) {
    const elBody = el.querySelector(".accordion__body");
    if (elBody.classList.contains("collapsing") || el.classList.contains("accordion__item_show")) {
      return;
    }
    elBody.style["display"] = "block";
    const height = elBody.offsetHeight;
    elBody.style["height"] = 0;
    elBody.style["overflow"] = "hidden";
    elBody.style["transition"] = `height ${this._config.duration}ms ease`;
    elBody.classList.add("collapsing");
    el.classList.add("accordion__item_slidedown");
    elBody.offsetHeight;
    elBody.style["height"] = `${height}px`;
    window.setTimeout(() => {
      elBody.classList.remove("collapsing");
      el.classList.remove("accordion__item_slidedown");
      elBody.classList.add("collapse");
      el.classList.add("accordion__item_show");
      elBody.style["display"] = "";
      elBody.style["height"] = "";
      elBody.style["transition"] = "";
      elBody.style["overflow"] = "";
    }, this._config.duration);
  }
  hide(el) {
    const elBody = el.querySelector(".accordion__body");
    if (elBody.classList.contains("collapsing") || !el.classList.contains("accordion__item_show")) {
      return;
    }
    elBody.style["height"] = `${elBody.offsetHeight}px`;
    elBody.offsetHeight;
    elBody.style["display"] = "block";
    elBody.style["height"] = 0;
    elBody.style["overflow"] = "hidden";
    elBody.style["transition"] = `height ${this._config.duration}ms ease`;
    elBody.classList.remove("collapse");
    el.classList.remove("accordion__item_show");
    elBody.classList.add("collapsing");
    window.setTimeout(() => {
      elBody.classList.remove("collapsing");
      elBody.classList.add("collapse");
      elBody.style["display"] = "";
      elBody.style["height"] = "";
      elBody.style["transition"] = "";
      elBody.style["overflow"] = "";
    }, this._config.duration);
  }
  toggle(el) {
    el.classList.contains("accordion__item_show") ? this.hide(el) : this.show(el);
  }
}
new ItcAccordion(document.querySelector(".accordion"), {
  alwaysOpen: false
});

/***/ }),

/***/ "./src/js/functions/burger.js":
/*!************************************!*\
  !*** ./src/js/functions/burger.js ***!
  \************************************/
/***/ (() => {

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".header__menu");
const body = document.querySelector("body");
iconMenu.addEventListener("click", function (e) {
  iconMenu.classList.toggle("_active");
  menuBody.classList.toggle("_active");
  body.classList.toggle("_lock");
});

//openMenu on mob
const itemMenuSub = document.querySelectorAll('.menu__item-sub_list');
const itemHoverDesc = document.querySelectorAll('.menu__item-hover-desc');
if (window.innerWidth <= 1024) {
  itemHoverDesc.forEach(item => {
    item.classList.remove('menu__item-hover-desc');
  });
  itemMenuSub.forEach(item => {
    let menuSub = item.querySelector('.menu__item-list');
    item.addEventListener('click', () => {
      menuSub.classList.toggle('_open');
      item.classList.toggle('_open');
    });
  });
}

/***/ }),

/***/ "./src/js/functions/scrollAnchors.js":
/*!*******************************************!*\
  !*** ./src/js/functions/scrollAnchors.js ***!
  \*******************************************/
/***/ (() => {

//скролл по якорю

const anchors = document.querySelectorAll('a[href*="#"]');
for (const anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./src/js/script-page3.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/burger */ "./src/js/functions/burger.js");
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_functions_burger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_inputHeaderComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/inputHeaderComponent */ "./src/js/components/inputHeaderComponent.js");
/* harmony import */ var _components_inputHeaderComponent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_inputHeaderComponent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_footerCookieComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footerCookieComponent */ "./src/js/components/footerCookieComponent.js");
/* harmony import */ var _components_footerCookieComponent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_footerCookieComponent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_scrollTopComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/scrollTopComponent */ "./src/js/components/scrollTopComponent.js");
/* harmony import */ var _components_scrollTopComponent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_scrollTopComponent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions_accorderon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/accorderon */ "./src/js/functions/accorderon.js");
/* harmony import */ var _functions_accorderon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_functions_accorderon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_page3_progressBarComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page3/progressBarComponent */ "./src/js/components/page3/progressBarComponent.js");
/* harmony import */ var _components_page3_progressBarComponent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_page3_progressBarComponent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _functions_scrollAnchors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/scrollAnchors */ "./src/js/functions/scrollAnchors.js");
/* harmony import */ var _functions_scrollAnchors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_functions_scrollAnchors__WEBPACK_IMPORTED_MODULE_6__);
//Реализация бургер-меню


//header input


//Footer cookie


//btn scrollTop


//Acordeon


//blocks


// Реализация скрола по якорю

})();

/******/ })()
;
//# sourceMappingURL=script-page3.map