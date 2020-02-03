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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Amatic+SC);\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Monoton);\"]);\n// Module\nexports.push([module.i, \"html\\n{\\n  height:100vh;\\n  -webkit-appearance: none;\\n  overflow: scroll;\\n}\\nbody {\\n  box-sizing: border-box;\\n  overflow: scroll;\\n  -webkit-appearance: none;\\n  font-family: 'Amatic SC', sans-serif;\\n  display:flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-between;\\n  background-attachment: fixed;\\n  background-position: center;\\n  background: url(\\\"https://images.alphacoders.com/711/711150.png\\\") no-repeat fixed;\\n  background-size: cover;\\n  height: 100vh;\\n}\\nheader\\n{\\n  display: block;\\n  box-sizing: border-box;\\n  background-color: rgba(0,0,0,0.5);\\n  text-align: center;\\n  height: 80%;\\n  overflow: hidden;\\n}\\nheader p\\n{\\n  box-sizing: border-box;\\n  line-height: 2;\\n  color:#FFF;\\n  margin: 3% 3% 0% 3%;\\n  font-size: 1rem;\\n  text-align: left;\\n}\\nheader h1 {\\n  box-sizing: border-box;\\n  margin: 5%;\\n  font-family: 'Monoton', cursive;\\n  font-weight: 400;\\n  font-size: 4rem;\\n  text-align: center;\\n}\\n\\nheader h2\\n{\\n  box-sizing: border-box;\\n  text-transform: uppercase;\\n  font-size: 3rem;\\n  letter-spacing: 0.5em;\\n  color: white;\\n  font-family: monospace;\\n  animation: neon3 1.5s ease-in-out infinite alternate;\\n}\\n\\nheader p:hover\\n{\\n  -webkit-animation: neon3 0.2s ease-in-out infinite alternate;\\n  -moz-animation: neon3 0.2s ease-in-out infinite alternate;\\n  animation: neon3 0.2s ease-in-out infinite alternate;\\n}\\n\\n#linkDiv\\n{\\n  margin: 5%;\\n  height: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  text-align: center;\\n}\\n\\n#linkDiv a\\n{\\n  text-decoration: none;\\n  color:rgba(0,0,0,1);\\n  font-weight: bold;\\n  transition: text-shadow .3s;\\n}\\n#linkDiv a:hover, #linkDiv a:focus {\\n  text-shadow: 2px 2px rgba(0,0,0,0.5);\\n}\\nul\\n{\\n  list-style-type: none;\\n  height:100%;\\n  padding: 0;\\n  margin: 0;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\nli\\n{\\n  margin-bottom: 2%;\\n}\\nli:hover\\n{\\n  -webkit-animation: icon3d 200ms infinite;\\n          animation: icon3d 200ms infinite;\\n}\\nli img\\n{\\n  width:20vh;\\n  height:20vh;\\n  border-radius: 50%;\\n  display: block;\\n  object-fit: cover;\\n  margin: 0 auto 5% auto;\\n  background-position: center center;\\n  background-repeat: no-repeat;\\n}\\n\\nlabel\\n{\\n  box-sizing: border-box;\\n  font-size:1.5rem;\\n  font-weight: bold;\\n  width: 33%;\\n  padding: 2px 2% 2px 2%;\\n  text-align: center;\\n  vertical-align: middle;\\n  display : block;\\n  cursor : pointer;\\n  color:white;\\n  background-color : rgba(0,0,0,0.8);\\n  transition: background ease 0.2s;\\n}\\n\\n.tab\\n{\\n  display: none;\\n  background-color: rgba(255,255,255, 0.8);\\n  width: 100%;\\n  order: 99;\\n  height: 100%;\\n  max-height: 100%;\\n}\\n#content\\n{\\n  box-sizing: border-box;\\n  height: 100%;\\n  padding: 2% 2% 0 2%;\\n  font-size:1.5rem;\\n  width: 50%;\\n  text-align: center;\\n}\\n#content > div\\n{\\n  height: 90%;\\n}\\n\\n@media (max-width: 700px ) {\\n  header h1\\n  {\\n    font-size: 3rem\\n  }\\n  header h2\\n  {\\n    font-size: 2rem;\\n    letter-spacing: 0.1em;\\n  }\\n  body\\n  {\\n    height: auto;\\n    overflow-y: scroll;\\n    background-image: url(\\\"https://vignette.wikia.nocookie.net/amaama-to-inazuma/images/3/38/Tsumugis_mr_galigali_costume.jpeg\\\");\\n    background-size: auto 100vh;\\n    flex-direction: column-reverse !important;\\n    background-attachment: fixed;\\n    background-position: 50% 0;\\n    background-size: auto 100vh;\\n    background-repeat: repeat;\\n    flex-shrink: 0;\\n    display: flex;\\n  }\\n  #content\\n  {\\n    flex-wrap: nowrap!important;\\n    padding: 2% 0 0 0;\\n    justify-content: flex-end;\\n    width: 100%;\\n\\n  }\\n  .tab{\\n    order: initial!important;\\n    display: block!important;\\n  }\\n  label {\\n    text-align: center;\\n    order: initial;\\n    width: 100%;\\n    margin-right: 0rem;\\n    margin-top: 0.2rem;\\n    margin-bottom: 0.2rem;\\n    background-color: rgba(0,0,0, 0.8)!important;\\n    color: rgba(255,255,255,1)!important;\\n  }\\n}\\n\\n\\n\\n/* ----------------------------------------------\\n * Generated by Animista on 2017-3-23 18:48:41\\n * http://animista.net\\n * T: @cssanimista\\n * ---------------------------------------------- */\\n\\n\\n\\n\\n@-webkit-keyframes neon3 {\\n  from {\\n    text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 8px #FFDD1B, 0 0 10px #FFDD1B, 0 0 12px #FFDD1B, 0 0 14px #FFDD1B, 0 0 16px #FFDD1B;\\n  }\\n  to {\\n    text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 4px #FFDD1B, 0 0 5px #FFDD1B, 0 0 6px #FFDD1B, 0 0 7px #FFDD1B, 0 0 8px #FFDD1B;\\n  }\\n}\\n\\n@-moz-keyframes neon3 {\\n  from {\\n    text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 8px #FFDD1B, 0 0 10px #FFDD1B, 0 0 12px #FFDD1B, 0 0 14px #FFDD1B, 0 0 16px #FFDD1B;\\n  }\\n  to {\\n    text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 4px #FFDD1B, 0 0 5px #FFDD1B, 0 0 6px #FFDD1B, 0 0 7px #FFDD1B, 0 0 8px #FFDD1B;\\n  }\\n}\\n@keyframes neon3 {\\n  from {\\n    text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 8px #FFDD1B, 0 0 10px #FFDD1B, 0 0 12px #FFDD1B, 0 0 14px #FFDD1B, 0 0 16px #FFDD1B;\\n  }\\n  to {\\n    text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 4px #FFDD1B, 0 0 5px #FFDD1B, 0 0 6px #FFDD1B, 0 0 7px #FFDD1B, 0 0 8px #FFDD1B;\\n  }\\n}\\n@keyframes icon3d {\\n  0% {\\n    text-shadow: 2px 2px #FFCAF2, -3px -2px #A2EDFF;\\n  }\\n  25% {\\n    text-shadow: -2px -2px #FFCAF2, 2px 1px #A2EDFF;\\n  }\\n  50% {\\n    text-shadow: 2px -3px #FFCAF2, -2px 2px #A2EDFF;\\n  }\\n  75% {\\n    text-shadow: -2px -1px #FFCAF2, -1px -1px #A2EDFF;\\n  }\\n  100% {\\n    text-shadow: -2px 0 #FFCAF2, 2px -1px #A2EDFF;\\n  }\\n}\\n\\n\\n@-webkit-keyframes text-flicker-in-glow{0%{opacity:0}10%{opacity:0;text-shadow:none}10.1%{opacity:1;text-shadow:none}10.2%{opacity:0;text-shadow:none}20%{opacity:0;text-shadow:none}20.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.25)}20.6%{opacity:0;text-shadow:none}30%{opacity:0;text-shadow:none}30.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}30.5%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}30.6%{opacity:0;text-shadow:none}45%{opacity:0;text-shadow:none}45.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}50%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}55%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}55.1%{opacity:0;text-shadow:none}57%{opacity:0;text-shadow:none}57.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35)}60%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35)}60.1%{opacity:0;text-shadow:none}65%{opacity:0;text-shadow:none}65.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35),0 0 100px rgba(255,255,255,.1)}75%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35),0 0 100px rgba(255,255,255,.1)}75.1%{opacity:0;text-shadow:none}77%{opacity:0;text-shadow:none}77.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.4),0 0 110px rgba(255,255,255,.2),0 0 100px rgba(255,255,255,.1)}85%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.4),0 0 110px rgba(255,255,255,.2),0 0 100px rgba(255,255,255,.1)}85.1%{opacity:0;text-shadow:none}86%{opacity:0;text-shadow:none}86.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.45),0 0 110px rgba(255,255,255,.25),0 0 100px rgba(255,255,255,.1)}100%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.45),0 0 110px rgba(255,255,255,.25),0 0 100px rgba(255,255,255,.1)}}@keyframes text-flicker-in-glow{0%{opacity:0}10%{opacity:0;text-shadow:none}10.1%{opacity:1;text-shadow:none}10.2%{opacity:0;text-shadow:none}20%{opacity:0;text-shadow:none}20.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.25)}20.6%{opacity:0;text-shadow:none}30%{opacity:0;text-shadow:none}30.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}30.5%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}30.6%{opacity:0;text-shadow:none}45%{opacity:0;text-shadow:none}45.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}50%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}55%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}55.1%{opacity:0;text-shadow:none}57%{opacity:0;text-shadow:none}57.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35)}60%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35)}60.1%{opacity:0;text-shadow:none}65%{opacity:0;text-shadow:none}65.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35),0 0 100px rgba(255,255,255,.1)}75%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35),0 0 100px rgba(255,255,255,.1)}75.1%{opacity:0;text-shadow:none}77%{opacity:0;text-shadow:none}77.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.4),0 0 110px rgba(255,255,255,.2),0 0 100px rgba(255,255,255,.1)}85%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.4),0 0 110px rgba(255,255,255,.2),0 0 100px rgba(255,255,255,.1)}85.1%{opacity:0;text-shadow:none}86%{opacity:0;text-shadow:none}86.1%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.45),0 0 110px rgba(255,255,255,.25),0 0 100px rgba(255,255,255,.1)}100%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.45),0 0 110px rgba(255,255,255,.25),0 0 100px rgba(255,255,255,.1)}}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.js */ \"./src/tabs.js\");\n\n\n__webpack_require__(/*! ./text.js */ \"./src/text.js\")\nlet mainContent = document.getElementById(\"content\");\nlet tabs = Object(_tabs_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nmainContent.appendChild(tabs[\"tabsDiv\"]);\ntabs.addTab(\"Our Chef\");\ntabs.addTab(\"Our Menu\");\ntabs.addTab(\"Contact Us\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/tab.js":
/*!********************!*\
  !*** ./src/tab.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst menuList = [\"Pot Rice\", \"Pork Soup\", \"Hamburger Steak\", \"Veggie Gratin\", \"Special Doughnuts\", \"Gyoza\", \"Gohei Mochi\", \"Squid and Taro Stew\", \"Curry\", \"Namero and Sangayaki\", \"Sweet Potato Crêpe\", \"Okonomiyaki\"];\nconst chefList = {\"Kohei Inuzuka\":\"https://vignette.wikia.nocookie.net/amaama-to-inazuma/images/6/63/Kouheiprofilesize.jpg\",\n \"Tsumugi Inuzuka\":\"https://vignette.wikia.nocookie.net/amaama-to-inazuma/images/1/14/Tsumugiprofilesize.jpg\",\n \"Kotori Iida\": \"https://vignette.wikia.nocookie.net/amaama-to-inazuma/images/c/c3/Kotoriprofilesize.png\"};\n\nfunction makeTab(tabTitle)\n{\n  let tabContentDiv = document.createElement(\"div\");\n  tabContentDiv.classList.add(\"tab\");\n  switch(tabTitle)\n  {\n    case 'Our Chef':\n      generateChefTab(tabContentDiv);\n      tabContentDiv.style.display = \"block\";\n      break;\n    case 'Our Menu':\n      generateMenuTab(tabContentDiv);\n      break;\n    case 'Contact Us':\n      generateContactTab(tabContentDiv);\n      break;\n  }\n  return tabContentDiv;\n};\n\nfunction generateImgListFromDict(arr)\n{\n  const list = document.createElement(\"ul\");\n  list.style.textAlign = \"center\";\n  for( let i in arr)\n  {\n    let image = document.createElement(\"img\");\n    let item = document.createElement(\"li\");\n    image.src=arr[i];\n    item.style.display = \"inline\";\n    item.innerText = i;\n\n    item.appendChild(image);\n    list.appendChild(item);\n  }\n  return list;\n}\n\nfunction generateListFromArr(arr)\n{\n  const list = document.createElement(\"ul\");\n  list.style.textAlign = \"center\";\n  for( let i of arr)\n  {\n    let item = document.createElement(\"li\");\n    item.innerText = i;\n    list.appendChild(item);\n  }\n  return list;\n}\n\n\nfunction generateChefTab(tabContentDiv)\n{\n\n  //const header = document.createElement(\"h3\");\n  //header.innerText = \"Our Chef\";\n  //tabContentDiv.appendChild(header);\n  tabContentDiv.appendChild(generateImgListFromDict(chefList));\n}\n\nfunction generateMenuTab(tabContentDiv)\n{\n  tabContentDiv.appendChild(generateListFromArr(menuList));\n}\n\nfunction generateContactTab(tabContentDiv)\n{\n  const linkDiv = document.createElement(\"div\");\n  linkDiv.id = \"linkDiv\";\n  const link = document.createElement(\"a\");\n  link.setAttribute(\"href\", \"https://amaama-to-inazuma.fandom.com/wiki/Amaama_to_Inazuma_Wikia\");\n  link.innerText = \"Check us out on our fandom wiki\";\n  linkDiv.appendChild(link);\n  tabContentDiv.appendChild(linkDiv);\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeTab);\n\n\n//# sourceURL=webpack:///./src/tab.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.js */ \"./src/tab.js\");\n\nfunction makeTabs()\n{\n  let counter = 0;\n  let tabsDiv = document.createElement(\"div\");\n  tabsDiv.style.display=\"flex\";\n  tabsDiv.style.flexWrap=\"wrap\";\n  tabsDiv.style.justifyContent = \"space-between\";\n\n  function changeLabel(e)\n  {\n    const radios = document.querySelectorAll(\"input[type=\\\"radio\\\"]\");\n    radios.forEach((r)=>{\n      if(r != e.target)\n      {\n        r.nextSibling.style.backgroundColor = \"rgba(0,0,0,0.8)\";\n        r.nextSibling.style.color = \"rgba(255,255,255,1)\"\n        r.nextSibling.nextSibling.style.display = \"None\";\n      }\n      else {\n        r.nextSibling.style.backgroundColor = \"rgba(255,255,255, 0.8)\";\n        r.nextSibling.style.color = \"rgba(0,0,0,1)\"\n        r.nextSibling.nextSibling.style.display = \"block\";\n      }\n    });\n  }\n\n  let addLabelInputStyle = function(labelElement, inputElement)\n  {\n    inputElement.style.display = \"none\";\n    if(counter == 1)\n    {\n      labelElement.style.color = \"rgba(0, 0, 0, 1)\"\n      labelElement.style.backgroundColor = \"rgba(255,255,255, 0.8)\";\n    }\n  };\n  let addTabLabel = function(tabTitle)\n  {\n    let inputElement = document.createElement(\"input\");\n    inputElement.setAttribute(\"type\", \"radio\");\n    inputElement.setAttribute(\"id\", `tab${counter}`);\n    inputElement.setAttribute(\"name\", \"radioFam\");\n    inputElement.addEventListener(\"click\", (e)=>\n    {\n      changeLabel(e);\n    });\n    let labelElement = document.createElement(\"label\");\n    labelElement.setAttribute(\"for\", `tab${counter}`);\n    labelElement.innerText = tabTitle;\n    addLabelInputStyle(labelElement, inputElement);\n    tabsDiv.appendChild(inputElement);\n    tabsDiv.appendChild(labelElement);\n\n  };\n\n  let addTab = function(tabTitle)\n  {\n    counter++;\n    addTabLabel(tabTitle);\n    tabsDiv.appendChild(Object(_tab_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tabTitle));\n  };\n\n  return {\n      \"tabsDiv\": tabsDiv,\n      \"addTab\": addTab\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeTabs);\n\n\n//# sourceURL=webpack:///./src/tabs.js?");

/***/ }),

/***/ "./src/text.js":
/*!*********************!*\
  !*** ./src/text.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const target = window.document.getElementsByTagName('h1')[0]\n\nconst flickerLetter = letter => `<span style=\"animation: text-flicker-in-glow ${Math.random()*4}s linear both \">${letter}</span>`\nconst colorLetter = letter => `<span style=\"color: hsla(${Math.random()*360}, 100%, 80%, 1);\">${letter}</span>`;\nconst flickerAndColorText = text =>\n  text\n    .split('')\n    .map(flickerLetter)\n    .map(colorLetter)\n    .join('');\nconst neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);\n\n\nneonGlory(target);\ntarget.onclick = ({ target }) =>  neonGlory(target);\n\n\n//# sourceURL=webpack:///./src/text.js?");

/***/ })

/******/ });