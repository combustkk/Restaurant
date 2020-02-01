/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.js */ \"./src/tabs.js\");\n\nlet body = document.querySelector(\"body\");\nbody.style.backgroundImage = \"url(\\\"https://images.alphacoders.com/711/711150.png\\\")\";\nbody.style.backgroundSize = \"100% auto\";\nlet mainContent = document.getElementById(\"content\");\nlet tabs = Object(_tabs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nmainContent.appendChild(tabs[\"tabsDiv\"]);\ntabs.addTab(\"Our Chef\");\ntabs.addTab(\"Our Menu\");\ntabs.addTab(\"Contact Us\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/tab.js":
/*!********************!*\
  !*** ./src/tab.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction makeTab(tabTitle)\n{\n  let tabContentDiv = document.createElement(\"div\");\n  tabContentDiv.style.backgroundColor = \"rgba(255,255,255, 0.8)\";\n  tabContentDiv.style.width = \"100%\";\n  tabContentDiv.style.display = \"None\";\n  tabContentDiv.style.order = \"99\";\n  switch(tabTitle)\n  {\n    case 'Our Chef':\n      generateChefTab(tabContentDiv);\n      break;\n    case 'Our Menu':\n      generateMenuTab(tabContentDiv);\n      break;\n    case 'Contact Us':\n      generateContactTab(tabContentDiv);\n      break;\n  }\n  return tabContentDiv;\n};\n\nfunction generateListFromArray(arr)\n{\n  const list = document.createElement(\"ul\");\n  list.style.textAlign = \"center\";\n  for( let i in arr)\n  {\n    let image = document.createElement(\"img\");\n    let item = document.createElement(\"li\");\n    image.style.borderRadius = \"50%\";\n    image.src=arr[i];\n    image.style.width = \"25vh\";\n    image.style.height = \"25vh\";\n    image.style.display = \"block\";\n    image.style.objectFit = \"cover\";\n    image.style.margin = \"0 auto 0 auto\";\n    image.style.backgroundPosition = \"center center\";\n    image.style.backgroundRepeat = \"no-repeat\";\n    item.style.display = \"inline\";\n    item.style.width = \"33%\";\n    item.innerText = i;\n\n    item.appendChild(image);\n    list.appendChild(item);\n  }\n  return list;\n}\n\nfunction generateChefTab(tabContentDiv)\n{\n  const chefList = {\"Kohei Inuzuka\":\"https://vignette.wikia.nocookie.net/amaama-to-inazuma/images/6/63/Kouheiprofilesize.jpg\",\n   \"Tsumugi Inuzuka\":\"https://vignette.wikia.nocookie.net/amaama-to-inazuma/images/1/14/Tsumugiprofilesize.jpg\",\n   \"Kotori Iida\": \"https://vignette.wikia.nocookie.net/amaama-to-inazuma/images/c/c3/Kotoriprofilesize.png\"};\n  //const header = document.createElement(\"h3\");\n  //header.innerText = \"Our Chef\";\n  //tabContentDiv.appendChild(header);\n  tabContentDiv.appendChild(generateListFromArray(chefList));\n}\n\nfunction generateMenuTab()\n{\n\n}\n\nfunction generateContactTab()\n{\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeTab);\n\n\n//# sourceURL=webpack:///./src/tab.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.js */ \"./src/tab.js\");\n\nfunction makeTabs()\n{\n  let counter = 0;\n  let tabsDiv = document.createElement(\"div\");\n  tabsDiv.style.display=\"flex\";\n  tabsDiv.style.flexWrap=\"wrap\";\n  tabsDiv.style.justifyContent = \"flex-end\";\n  let addLabelInputStyle = function(labelElement, inputElement)\n  {\n    labelElement.style.display = \"block\";\n    labelElement.style.padding = \"1rem 2rem\";\n    labelElement.style.cursor = \"pointer\";\n    labelElement.style.marginRight = \"0.2rem\";\n    labelElement.style.backgroundColor=\"#90CAF9\";\n    inputElement.style.display = \"none\";\n  };\n  let addTabLabel = function(tabTitle)\n  {\n    let inputElement = document.createElement(\"input\");\n    inputElement.setAttribute(\"type\", \"radio\");\n    inputElement.setAttribute(\"id\", `tab${counter}`);\n    inputElement.setAttribute(\"name\", \"radioFam\");\n    inputElement.addEventListener(\"click\", (e)=>\n    {\n      const radios = document.querySelectorAll(\"input[type=\\\"radio\\\"]\");\n      radios.forEach((r)=>{\n        if(r != e.target)\n        {\n          r.nextSibling.style.backgroundColor = \"#90CAF9\";\n        }\n        else {\n          r.nextSibling.style.backgroundColor = \"#FFF\";\n          r.nextSibling.nextSibling.style.display = \"block\";\n        }\n      });\n    });\n    let labelElement = document.createElement(\"label\");\n    labelElement.setAttribute(\"for\", `tab${counter}`);\n    labelElement.innerText = tabTitle;\n    addLabelInputStyle(labelElement, inputElement);\n    tabsDiv.appendChild(inputElement);\n    tabsDiv.appendChild(labelElement);\n\n  };\n\n  let addTab = function(tabTitle)\n  {\n    counter++;\n    addTabLabel(tabTitle);\n    tabsDiv.appendChild(Object(_tab_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tabTitle));\n  };\n\n  return {\n      \"tabsDiv\": tabsDiv,\n      \"addTab\": addTab\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeTabs);\n\n\n//# sourceURL=webpack:///./src/tabs.js?");

/***/ })

/******/ });