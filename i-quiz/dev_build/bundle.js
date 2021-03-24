/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Dosis:wght@700&family=Nunito&family=Open+Sans+Condensed:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: white;\\n}\\n\\nh1 {\\n  width: 60%;\\n  font-size: 3rem;\\n  font-weight: bold;\\n  font-family: \\\"Dosis\\\", sans-serif;\\n  color: #000;\\n}\\n\\nspan {\\n  width: 60%;\\n  font-size: 1.5rem;\\n  font-weight: 500;\\n  font-family: \\\"Open Sans Condensed\\\", sans-serif;\\n  color: #000;\\n}\\n\\nbutton {\\n  background-color: #0868e6;\\n  font-size: 1rem;\\n  font-weight: 500;\\n  cursor: pointer;\\n  padding: 1% 2%;\\n  color: white;\\n}\\n\\n.home-cont,\\n.level-cont,\\n.quiz-cont,\\n.result-cont {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n}\\n\\n.home-cont p {\\n  font-size: 1rem;\\n  font-weight: bold;\\n  font-family: \\\"Nunito\\\", sans-serif;\\n  background-color: #888484;\\n  color: #000;\\n  border-radius: 1rem;\\n  padding: 2% 1%;\\n}\\n\\n.level-cont .level-cont-cards {\\n  width: 60%;\\n  margin: 2% 0%;\\n  color: #000;\\n  font-size: 1rem;\\n  font-weight: bold;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\n.level-cont .level-cont-cards div {\\n  width: 25%;\\n}\\n.level-cont button {\\n  width: 60%;\\n}\\n\\n.quiz-cont .quiz-cont-details {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.quiz-cont .quiz-cont-details h1 {\\n  margin: 1% 0%;\\n}\\n.quiz-cont .quiz-cont-details .quiz-cont .quiz-cont-details-level span:nth-child(2) {\\n  margin-bottom: 1%;\\n}\\n.quiz-cont .questioncard {\\n  width: 80%;\\n}\\n.quiz-cont .questioncard .question-cont {\\n  padding: 2% 1%;\\n  background-color: #4e4e4e;\\n  color: #000;\\n  font-size: 1.5rem;\\n  font-weight: bold;\\n}\\n.quiz-cont .questioncard .choices-div {\\n  padding: 2% 1%;\\n  background-color: #888484;\\n  color: #000;\\n  font-size: 1rem;\\n  font-weight: 500;\\n}\\n.quiz-cont .actions-div {\\n  width: 80%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\n.quiz-cont .actions-div button {\\n  width: 10%;\\n}\\n\\n.results-div {\\n  margin: 1% 0%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.result-cont .score-cont {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.result-cont .graphic-cont span {\\n  font-size: 3rem;\\n  font-weight: bold;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://i-quiz/./src/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://i-quiz/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://i-quiz/./src/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://i-quiz/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/containers/ResultContainer/Result.js":
/*!**************************************************!*\
  !*** ./src/containers/ResultContainer/Result.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Result)\n/* harmony export */ });\n/* harmony import */ var _levelContainer_Level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../levelContainer/Level */ \"./src/containers/levelContainer/Level.js\");\n\r\n\r\nclass Result {\r\n  constructor(answeredQuestions) {\r\n this.bodyDom = document.querySelector(\"body\");\r\n this.finalScore=this.getFinalScore(answeredQuestions);\r\n this.percentage=this.getPercentage(answeredQuestions);\r\n\r\n this.bodyDom.innerHTML = `<div class=\"result-cont\">\r\n <div class=\"score-cont\">\r\n  <img width=\"10%\" src=\"./images/logo-img.png\">\r\n   <h1> I-Quiz </h1>\r\n   <span>test result</span>\r\n   <span> ${this.finalScore} out of ${answeredQuestions.length}<span>\r\n </div>\r\n <div class=\"percentage-cont\">\r\n    <div class=\"graphic-cont\">\r\n      <span> ${this.percentage}%</span>\r\n    <div>\r\n </div>\r\n <div class=\"button-container\">\r\n <button class=\"new-btn\">\r\n  take new quiz\r\n </button>\r\n </div>\r\n </div>\r\n `; \r\n document.querySelector(\"button\").addEventListener(\"click\",()=>{\r\n   new _levelContainer_Level__WEBPACK_IMPORTED_MODULE_0__.default();\r\n })\r\n  }\r\n  \r\n\r\n\r\n  getFinalScore(answers){\r\n   let score= answers.reduce((accumalator, currentvalue) => {\r\n     if (currentvalue.correct === currentvalue.answer) {\r\n       return accumalator += 1;\r\n     }\r\n     else{\r\n       return accumalator;\r\n     }\r\n   }, 0);\r\n   return score; \r\n  }\r\n  getPercentage(answers){\r\n    return (this.finalScore/answers.length)*100;\r\n  }\r\n  \r\n  \r\n}\n\n//# sourceURL=webpack://i-quiz/./src/containers/ResultContainer/Result.js?");

/***/ }),

/***/ "./src/containers/homeContainer/Component/homeComponent.js":
/*!*****************************************************************!*\
  !*** ./src/containers/homeContainer/Component/homeComponent.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getHomeDom)\n/* harmony export */ });\nfunction getHomeDom() {\r\n  return `<div class=\"home-cont\">\r\n        <img width=\"30%\" src=\"./images/logo-img.png\">\r\n        <h1> I-Quiz </h1>\r\n        <span>WHAT IS I-QUIZ</span>\r\n        <p>I-Quiz is a multi-leveled IQ assesment which helps you to improve your IQ capabilities</p>\r\n        <button class=\"start-btn\">Get Started</button>\r\n    </div>`;\r\n}\r\n\n\n//# sourceURL=webpack://i-quiz/./src/containers/homeContainer/Component/homeComponent.js?");

/***/ }),

/***/ "./src/containers/homeContainer/Home.js":
/*!**********************************************!*\
  !*** ./src/containers/homeContainer/Home.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _Component_homeComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component/homeComponent */ \"./src/containers/homeContainer/Component/homeComponent.js\");\n/* harmony import */ var _levelContainer_Level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../levelContainer/Level */ \"./src/containers/levelContainer/Level.js\");\n\r\n\r\n\r\nclass Home {\r\n\r\n    constructor(switchfunction){\r\n        console.log(\"home component\")\r\n       this.bodyDom=document.querySelector(\"body\");\r\n       this.bodyDom.innerHTML=(0,_Component_homeComponent__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n       this.startbtn=document.querySelector(\".start-btn\");\r\n       this.startbtn.addEventListener(\"click\",()=>{\r\n           this.bodyDom=new _levelContainer_Level__WEBPACK_IMPORTED_MODULE_1__.default();\r\n       })\r\n    }\r\n\r\n \r\n}\n\n//# sourceURL=webpack://i-quiz/./src/containers/homeContainer/Home.js?");

/***/ }),

/***/ "./src/containers/levelContainer/Component/levelComponent.js":
/*!*******************************************************************!*\
  !*** ./src/containers/levelContainer/Component/levelComponent.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getLevelDom)\n/* harmony export */ });\nfunction getLevelDom(showstart) {\r\n  if(showstart){\r\n  return (`<div class=\"level-cont\">\r\n        <img width=\"30%\" src=\"./images/logo-img.png\">\r\n        <h1> I-Quiz </h1>\r\n        <span>WHAT please Select your test level</span>\r\n        <div class=\"level-cont-cards\">\r\n        <div class=\"level-card\">\r\n          <input type=\"radio\" id=\"easy\" name=\"choices\"  >\r\n          \r\n            <label for=\"easy\">easy</label>\r\n        </div>\r\n        <div class=\"level-card\">\r\n          <input type=\"radio\" id=\"medium\" name=\"choices\"  >\r\n          <label for=\"medium\">medium</label>\r\n        </div>\r\n        <div class=\"level-card\">\r\n          <input type=\"radio\" id=\"advanced\" name=\"choices\">\r\n          <label for=\"advanced\">advanced</label>\r\n        </div>\r\n        </div>\r\n        <button class=\"quiz-btn\">Take the quiz</button>\r\n        </div>\r\n\r\n        `);}\r\n    else{\r\n        return (`<div class=\"level-cont\">\r\n        <img width=\"30%\" src=\"./images/logo-img.png\">\r\n        <h1> I-Quiz </h1>\r\n        <span>WHAT please Select your test level</span>\r\n        <div class=\"level-cont-cards\">\r\n        <div class=\"level-card\">\r\n          <input type=\"radio\" id=\"easy\" name=\"choices\"  >\r\n          \r\n            <label for=\"easy\">easy</label>\r\n        </div>\r\n        <div class=\"level-card\">\r\n          <input type=\"radio\" id=\"medium\" name=\"choices\"  >\r\n          <label for=\"medium\">medium</label>\r\n        </div>\r\n        <div class=\"level-card\">\r\n          <input type=\"radio\" id=\"advanced\" name=\"choices\">\r\n          <label for=\"advanced\">advanced</label>\r\n        </div>\r\n        </div>\r\n        <button class=\"quiz-btn\" disbled=\"true>Take the quiz</button>\r\n        \r\n        </div>\r\n\r\n        \r\n    `);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://i-quiz/./src/containers/levelContainer/Component/levelComponent.js?");

/***/ }),

/***/ "./src/containers/levelContainer/Level.js":
/*!************************************************!*\
  !*** ./src/containers/levelContainer/Level.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Level)\n/* harmony export */ });\n/* harmony import */ var _Component_levelComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component/levelComponent */ \"./src/containers/levelContainer/Component/levelComponent.js\");\n/* harmony import */ var _quizContainer_Quiz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quizContainer/Quiz */ \"./src/containers/quizContainer/Quiz.js\");\n\r\n\r\n\r\nclass Level {\r\n  constructor() {\r\n    this.level=\"\",\r\n    this.showstart=false;\r\n    this.bodyDom = document.querySelector(\"body\");\r\n    this.addLevelsToDom(this.showstart)\r\n  }\r\n\r\n  addLevelsToDom (showstart){\r\n        this.bodyDom = document.querySelector(\"body\");\r\n    this.bodyDom.innerHTML = (0,_Component_levelComponent__WEBPACK_IMPORTED_MODULE_0__.default)(showstart);\r\n    this.quizBtn = document.querySelector(\".quiz-btn\");\r\n    let inputs = document.getElementsByTagName(\"input\");\r\n    console.log(inputs);\r\n    for (let i = 0; i < inputs.length; i++) {\r\n      inputs[i].addEventListener(\"click\", () => {\r\n        inputs[i].checked=\"checked\";\r\n        this.addLevel(inputs[i].attributes[1].nodeValue);\r\n      });\r\n    }\r\n\r\n    this.quizBtn.addEventListener(\"click\", () => (this.bodyDom = new _quizContainer_Quiz__WEBPACK_IMPORTED_MODULE_1__.default(this.level)));\r\n  }\r\n\r\n  addLevel(id) {\r\n    this.level=id;\r\n    this.showstart=true;\r\n    this.addLevelsToDom(this.showstart)\r\n\r\n    \r\n  \r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://i-quiz/./src/containers/levelContainer/Level.js?");

/***/ }),

/***/ "./src/containers/mainContainer.js":
/*!*****************************************!*\
  !*** ./src/containers/mainContainer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainContainer)\n/* harmony export */ });\n/* harmony import */ var _homeContainer_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeContainer/Home */ \"./src/containers/homeContainer/Home.js\");\n/* harmony import */ var _levelContainer_Level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levelContainer/Level */ \"./src/containers/levelContainer/Level.js\");\n\r\n\r\nclass MainContainer{\r\n\r\n    constructor(){\r\n        console.log(\"from main\")\r\n        this.currentscreen=new _homeContainer_Home__WEBPACK_IMPORTED_MODULE_0__.default();\r\n    }\r\n    getcontainer(){\r\n        return this.currentscreen;\r\n    }\r\n    \r\n\r\n\r\n}\n\n//# sourceURL=webpack://i-quiz/./src/containers/mainContainer.js?");

/***/ }),

/***/ "./src/containers/quizContainer/Component/quizComponent.js":
/*!*****************************************************************!*\
  !*** ./src/containers/quizContainer/Component/quizComponent.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getQuizDom)\n/* harmony export */ });\nfunction getQuizDom(question,isFirst,isLast,allAnswered,level) {\r\n  let headerQuizDom;\r\n  let questionDom;\r\n  let inputsDom;\r\n  let prevButtonDom;\r\n  let nextButtonDom;\r\n  let checkAnswersDom;\r\n\r\n \r\n \r\n    headerQuizDom=  ` <div class=\"quiz-cont-details\">\r\n                 <img width=\"20%\" src=\"./images/logo-img.png\">\r\n                 <h1> I-Quiz </h1>\r\n                 <div class=\"quiz-cont-details-level\">\r\n                 <span> Quiz level: </span>\r\n                 <span> ${level} </span>\r\n                 </div>\r\n            </div>`\r\n    questionDom=`<div class=\"question-cont\"><span>${question.question}</span></div>`\r\n  \r\n    if (question.answer){\r\n        if (question.answer === \"a\") {\r\n          inputsDom= ` \r\n            <div class=\"choices-div\">\r\n            <input type=\"radio\" id=\"a\" name=\"choices\" value=\"${question.choices.a} checked\">\r\n            <label for=\"a\">${question.choices.a}</label>\r\n            <input type=\"radio\" id=\"b\" name=\"choices\" value=\"${question.choices.b}\">\r\n            <label for=\"b\">${question.choices.b}</label>\r\n            <input type=\"radio\" id=\"c\" name=\"choices\" value=\"${question.choices.c}\">\r\n            <label for=\"c\">${question.choices.c}</label>\r\n            <input type=\"radio\" id=\"d\" name=\"choices\" value=\"${question.choices.d}\">\r\n            <label for=\"a\">${question.choices.d}</label>    \r\n            </div>\r\n            </div>\r\n            `;\r\n        } \r\n\r\n        else if (question.answer === \"b\") {\r\n          inputsDom=` \r\n            <div class=\"choices-div\">\r\n            <input type=\"radio\" id=\"a\" name=\"choices\" value=\"${question.choices.a} \">\r\n            <label for=\"a\">${question.choices.a}</label>\r\n            <input type=\"radio\" id=\"b\" name=\"choices\" value=\"${question.choices.b}\" checked>\r\n            <label for=\"b\">${question.choices.b}</label>\r\n            <input type=\"radio\" id=\"c\" name=\"choices\" value=\"${question.choices.c}\">\r\n            <label for=\"c\">${question.choices.c}</label>\r\n            <input type=\"radio\" id=\"d\" name=\"choices\" value=\"${question.choices.d}\">\r\n            <label for=\"a\">${question.choices.d}</label>    \r\n            </div>\r\n            </div>\r\n            `;\r\n        }\r\n\r\n         else if (question.answer === \"c\") {\r\n         inputsDom= ` \r\n            <div class=\"choices-div\">\r\n            <input type=\"radio\" id=\"a\" name=\"choices\" value=\"${question.choices.a} \">\r\n            <label for=\"a\">${question.choices.a}</label>\r\n            <input type=\"radio\" id=\"b\" name=\"choices\" value=\"${question.choices.b}\">\r\n            <label for=\"b\">${question.choices.b}</label>\r\n            <input type=\"radio\" id=\"c\" name=\"choices\" value=\"${question.choices.c}\" checked>\r\n            <label for=\"c\">${question.choices.c}</label>\r\n            <input type=\"radio\" id=\"d\" name=\"choices\" value=\"${question.choices.d}\">\r\n            <label for=\"a\">${question.choices.d}</label>    \r\n            </div>\r\n            </div>\r\n            `;\r\n        }\r\n    \r\n        else  {\r\n          inputsDom=` \r\n            <div class=\"choices-div\">\r\n            <input type=\"radio\" id=\"a\" name=\"choices\" value=\"${question.choices.a} \">\r\n            <label for=\"a\">${question.choices.a}</label>\r\n            <input type=\"radio\" id=\"b\" name=\"choices\" value=\"${question.choices.b}\">\r\n            <label for=\"b\">${question.choices.b}</label>\r\n            <input type=\"radio\" id=\"c\" name=\"choices\" value=\"${question.choices.c}\" >\r\n            <label for=\"c\">${question.choices.c}</label>\r\n            <input type=\"radio\" id=\"d\" name=\"choices\" value=\"${question.choices.d}\" checked>\r\n            <label for=\"a\">${question.choices.d}</label>    \r\n            </div>\r\n            </div>\r\n            `;\r\n        }\r\n    }\r\n    \r\n    else{\r\n\r\n        inputsDom=     \r\n         ` \r\n            <div class=\"choices-div\">\r\n            <input type=\"radio\" id=\"a\" name=\"choices\" value=\"${question.choices.a} \">\r\n            <label for=\"a\">${question.choices.a}</label>\r\n            <input type=\"radio\" id=\"b\" name=\"choices\" value=\"${question.choices.b}\">\r\n            <label for=\"b\">${question.choices.b}</label>\r\n            <input type=\"radio\" id=\"c\" name=\"choices\" value=\"${question.choices.c}\" >\r\n            <label for=\"c\">${question.choices.c}</label>\r\n            <input type=\"radio\" id=\"d\" name=\"choices\" value=\"${question.choices.d}\">\r\n            <label for=\"a\">${question.choices.d}</label>    \r\n            </div>\r\n            </div>\r\n            `;\r\n        }\r\n\r\n     if(isFirst){\r\n       prevButtonDom=`<button class=\"prev-btn\" disabled=\"true\">Prev</button>`\r\n     }\r\n     else{\r\n          prevButtonDom=`<button class=\"prev-btn\">prev</button>`\r\n     }   \r\n\r\n\r\n     if(isLast){\r\n       nextButtonDom=`<button class=\"next-btn\" disabled=\"true\">next</button>` \r\n     }\r\n     else{\r\n        nextButtonDom=`<button class=\"next-btn\">next</button>`  \r\n     }\r\n\r\n\r\n     if(allAnswered){\r\n         checkAnswersDom=`<button class=\"check-btn\">check answers</button>`\r\n     }\r\n     else{\r\n          checkAnswersDom=`<button class=\"check-btn\" disabled=\"true\">check answers</button>`\r\n     }\r\n    \r\n\r\n return `<div class=\"quiz-cont\">\r\n         ${headerQuizDom}\r\n         <div class=\"questioncard\">\r\n            ${questionDom}\r\n            ${inputsDom} \r\n            <div class=\"actions-div\">\r\n            ${prevButtonDom}\r\n            ${nextButtonDom}      \r\n            </div>\r\n        </div>\r\n        <div class=\"results-div\">\r\n           ${checkAnswersDom}\r\n        </div>    \r\n    </div>`;\r\n\r\n\r\n\r\n\r\n    }\r\n\r\n\r\n\r\n  \r\n \r\n\r\n\n\n//# sourceURL=webpack://i-quiz/./src/containers/quizContainer/Component/quizComponent.js?");

/***/ }),

/***/ "./src/containers/quizContainer/Quiz.js":
/*!**********************************************!*\
  !*** ./src/containers/quizContainer/Quiz.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Quiz)\n/* harmony export */ });\n/* harmony import */ var _Component_quizComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component/quizComponent */ \"./src/containers/quizContainer/Component/quizComponent.js\");\n/* harmony import */ var _ResultContainer_Result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ResultContainer/Result */ \"./src/containers/ResultContainer/Result.js\");\n\r\n\r\n\r\nclass Quiz {\r\n  constructor(level) {\r\n    this.level=level\r\n    this.questions = [\r\n      {\r\n        question: \"5+5=\",\r\n        choices: { a: 6, b: 7, c: 8, d: 10 },\r\n        correct: \"d\",\r\n      },\r\n      {\r\n        question: \"5+7=\",\r\n        choices: { a: 12, b: 7, c: 8, d: 10 },\r\n        correct: \"a\",\r\n      },\r\n    ];\r\n    this.questionindex = 0;\r\n    this.firstQuestion = this.isFirstQuestion();\r\n    this.lastQuestion = this.isLastQuestion();\r\n    this.questionsAnswered = this.allQuestionsAnswered();\r\n\r\n    this.bodyDom = document.querySelector(\"body\");\r\n    this.addQuestionToDom();\r\n  }\r\n  addQuestionToDom() {\r\n    this.bodyDom.innerHTML = (0,_Component_quizComponent__WEBPACK_IMPORTED_MODULE_0__.default)(\r\n      this.questions[this.questionindex],\r\n      this.firstQuestion,\r\n      this.lastQuestion,\r\n      this.questionsAnswered,\r\n      this.level\r\n      \r\n    );\r\n\r\n    document\r\n      .getElementsByClassName(\"prev-btn\")[0]\r\n      .addEventListener(\"click\", () => {\r\n        console.log(this.questions)\r\n        this.moveToPrevQuestion();\r\n      });\r\n    document\r\n      .getElementsByClassName(\"next-btn\")[0]\r\n      .addEventListener(\"click\", () => {\r\n        this.moveToNextQuestion();\r\n      });\r\n\r\n    document.getElementsByClassName(\"check-btn\")[0].addEventListener(\"click\",()=>{\r\n      console.log(\"leave\");\r\n      new _ResultContainer_Result__WEBPACK_IMPORTED_MODULE_1__.default(this.questions);\r\n    })  \r\n      let inputs=document.getElementsByTagName(\"input\")\r\n      console.log(inputs);\r\n     for(let i=0;i<inputs.length;i++){\r\n       inputs[i].addEventListener(\"click\",()=>{\r\n         this.addAnswer(inputs[i].attributes[1].nodeValue)\r\n         this.questionsAnswered=this.allQuestionsAnswered();\r\n         this.addQuestionToDom();\r\n        });\r\n\r\n     }\r\n  }\r\n\r\n  moveToNextQuestion() {\r\n    this.questionindex += 1;\r\n    this.firstQuestion = false;\r\n    this.lastQuestion = this.isLastQuestion();\r\n    this.addQuestionToDom();\r\n  }\r\n  moveToPrevQuestion() {\r\n    this.questionindex = this.questionindex - 1;\r\n    this.firstQuestion = this.isFirstQuestion();\r\n    this.lastQuestion = false;\r\n    this.questionsAnswered = this.allQuestionsAnswered();\r\n\r\n    this.addQuestionToDom();\r\n  }\r\n\r\n  isFirstQuestion() {\r\n    if (this.questionindex === 0) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n  isLastQuestion() {\r\n    if (this.questionindex + 1 == this.questions.length) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n  allQuestionsAnswered() {\r\n \r\n    return this.questions.every((question) => question.answer);\r\n  }\r\n\r\n  addAnswer(id){\r\n    this.questions[this.questionindex].answer=id;\r\n    console.log(this.questions)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://i-quiz/./src/containers/quizContainer/Quiz.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _containers_mainContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/mainContainer */ \"./src/containers/mainContainer.js\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n\r\n\r\nconsole.log(\"from entry\")\r\nconst container=new _containers_mainContainer__WEBPACK_IMPORTED_MODULE_0__.default();\r\ncontainer.getcontainer();\r\n\r\n\r\n\n\n//# sourceURL=webpack://i-quiz/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;