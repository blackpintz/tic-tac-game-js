/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".t-height {\\n  height: 300px;\\n  margin-top: 10px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tic-tac-game/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://tic-tac-game/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://tic-tac-game/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tic-tac-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/clickevent.js":
/*!**********************************!*\
  !*** ./src/assets/clickevent.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/assets/storage.js\");\n/* eslint-disable-next-line import/extensions */\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const restartGame = document.getElementById('restart');\n  const submitBtn = document.getElementById('submit');\n  const disableRestartBtn = () => (_storage_js__WEBPACK_IMPORTED_MODULE_0__.gamePlayers.length === 0 ? restartGame.disabled = true : restartGame.disabled = false);\n\n  const disableForm = () => (_storage_js__WEBPACK_IMPORTED_MODULE_0__.gamePlayers.length === 0 ? submitBtn.disabled = false : submitBtn.disabled = true);\n\n  return { disableRestartBtn, disableForm };\n});\n\n//# sourceURL=webpack://tic-tac-game/./src/assets/clickevent.js?");

/***/ }),

/***/ "./src/assets/flash.js":
/*!*****************************!*\
  !*** ./src/assets/flash.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/assets/storage.js\");\n/* eslint-disable-next-line import/extensions */\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const alertNoPlayers = () => {\n    const content = document.getElementById('alert');\n    const alertMsg = document.createElement('div');\n    alertMsg.innerHTML = '<h3>Please enter players</h3>';\n    alertMsg.className = 'alert alert-warning alert-dismissible fade show';\n    const dismissBtn = document.createElement('button');\n    dismissBtn.innerHTML = '<span>&times;</span>';\n    dismissBtn.setAttribute('data-dismiss', 'alert');\n    dismissBtn.setAttribute('type', 'button');\n    dismissBtn.className = 'close';\n    alertMsg.appendChild(dismissBtn);\n    return content.appendChild(alertMsg);\n  };\n\n  const showPlayers = () => {\n    const playerDiv = document.getElementById('player');\n    const previousPlayers = document.getElementById('allplayers');\n    if (previousPlayers !== null) previousPlayers.remove();\n    const player = document.createElement('p');\n    player.className = 'font-weight-bold';\n    player.id = 'allplayers';\n    if (_storage_js__WEBPACK_IMPORTED_MODULE_0__.gamePlayers.length !== 0) {\n      player.innerText = `${_storage_js__WEBPACK_IMPORTED_MODULE_0__.gamePlayers[0].name} (${_storage_js__WEBPACK_IMPORTED_MODULE_0__.gamePlayers[0].sign}) and ${_storage_js__WEBPACK_IMPORTED_MODULE_0__.gamePlayers[1].name} (${_storage_js__WEBPACK_IMPORTED_MODULE_0__.gamePlayers[1].sign}) are playing the game.`;\n    } else {\n      player.innerText = 'Players, add your names before you play.';\n    }\n    return playerDiv.appendChild(player);\n  };\n\n  const showWinner = (player) => {\n    const winningPlayer = document.getElementById('name');\n    winningPlayer.innerText = `Congratulations ${player}, you won the game.`;\n    return winningPlayer;\n  };\n\n  const showCurrentPlayer = (player) => {\n    const playerDiv = document.getElementById('player');\n    const previousPlayer = document.getElementById('name');\n    if (previousPlayer !== null) previousPlayer.remove();\n    const name = document.createElement('h4');\n    name.id = 'name';\n    name.innerText = `${player}, your turn`;\n    return playerDiv.appendChild(name);\n  };\n\n  return {\n    alertNoPlayers, showCurrentPlayer, showPlayers, showWinner,\n  };\n});\n\n//# sourceURL=webpack://tic-tac-game/./src/assets/flash.js?");

/***/ }),

/***/ "./src/assets/game_logic.js":
/*!**********************************!*\
  !*** ./src/assets/game_logic.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/assets/storage.js\");\n/* harmony import */ var _flash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flash */ \"./src/assets/flash.js\");\n/* harmony import */ var _clickevent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clickevent */ \"./src/assets/clickevent.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const gameCells = document.getElementsByTagName('td');\n  const form = document.getElementById('form');\n  const submitData = () => {\n    const firstplayer = document.getElementById('playerone').value;\n    const secondplayer = document.getElementById('playertwo').value;\n    return _storage__WEBPACK_IMPORTED_MODULE_0__.default.addPlayer(firstplayer, secondplayer);\n  };\n\n  const eventActions = () => {\n    (0,_flash__WEBPACK_IMPORTED_MODULE_1__.default)().showPlayers();\n    (0,_clickevent__WEBPACK_IMPORTED_MODULE_2__.default)().disableRestartBtn();\n    (0,_clickevent__WEBPACK_IMPORTED_MODULE_2__.default)().disableForm();\n  };\n\n  const restartGame = document.getElementById('restart');\n  restartGame.onclick = () => {\n    const cells = [...gameCells];\n    const playerDisplay = document.getElementById('name');\n    if (playerDisplay !== null) playerDisplay.remove();\n    cells.forEach(cell => cell.innerText = '');\n    _storage__WEBPACK_IMPORTED_MODULE_0__.default.emptyMovesPlayed();\n  };\n\n  const resetGame = document.getElementById('reset');\n  resetGame.onclick = () => {\n    const cells = [...gameCells];\n    const playerDisplay = document.getElementById('name');\n    if (playerDisplay !== null) playerDisplay.remove();\n    cells.forEach(cell => cell.innerText = '');\n    _storage__WEBPACK_IMPORTED_MODULE_0__.default.deletePlayers();\n    eventActions();\n  };\n\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    submitData();\n    form.reset();\n    eventActions();\n  });\n  const cellsArr = [...gameCells];\n\n  const playGame = (player, cell, index) => {\n    cell.innerText = player.sign;\n    player.playMoves.push(index + 1);\n    _storage__WEBPACK_IMPORTED_MODULE_0__.default.togglePlayer();\n  };\n\n  const winGame = (player) => {\n    const winMoves = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];\n    let i = 0;\n    let tracker = [];\n    while (i < winMoves.length) {\n      if (player.playMoves.includes(winMoves[i][0]) && tracker.length < 3) {\n        tracker.push(winMoves[i][0]);\n      }\n      if (player.playMoves.includes(winMoves[i][1]) && tracker.length < 3) {\n        tracker.push(winMoves[i][1]);\n      }\n      if (player.playMoves.includes(winMoves[i][2]) && tracker.length < 3) {\n        tracker.push(winMoves[i][2]);\n      }\n      if (tracker.length < 3) {\n        tracker = [];\n      } else {\n        break;\n      }\n      i++;\n    }\n    return tracker.length === 3;\n  };\n\n  cellsArr.forEach((cell, idx) => {\n    cell.addEventListener('click', () => {\n      if (_storage__WEBPACK_IMPORTED_MODULE_0__.gamePlayers.length === 0) {\n        (0,_flash__WEBPACK_IMPORTED_MODULE_1__.default)().alertNoPlayers();\n      } else if (_storage__WEBPACK_IMPORTED_MODULE_0__.gamePlayers[0].status === true && cell.innerText === '' && winGame(_storage__WEBPACK_IMPORTED_MODULE_0__.gamePlayers[0]) === false && winGame(_storage__WEBPACK_IMPORTED_MODULE_0__.gamePlayers[1]) === false) {\n        playGame(_storage__WEBPACK_IMPORTED_MODULE_0__.gamePlayers[0], cell, idx);\n        (0,_flash__WEBPACK_IMPORTED_MODULE_1__.default)().showCurrentPlayer(_storage__WEBPACK_IMPORTED_MODULE_0__.gamePlayers[1].name);\n      } else if (_storage__WEBPACK_IMPORTED_MODULE_0__.gamePlayers[1].status === true && cell.innerText === '' && winGame(_storage__WEBPACK_IMPORTED_MODULE_0__.gamePlayers[0]) === false && winGame(_storage__WEBPACK_IMPORTED_MODULE_0__.gamePlayers[1]) === false) {\n        playGame(_storage__WEBPACK_IMPORTED_MODULE_0__.gamePlayers[1], cell, idx);\n        (0,_flash__WEBPACK_IMPORTED_MODULE_1__.default)().showCurrentPlayer(_storage__WEBPACK_IMPORTED_MODULE_0__.gamePlayers[0].name);\n      }\n\n      if (winGame(_storage__WEBPACK_IMPORTED_MODULE_0__.gamePlayers[0]) === true) {\n        (0,_flash__WEBPACK_IMPORTED_MODULE_1__.default)().showWinner(_storage__WEBPACK_IMPORTED_MODULE_0__.gamePlayers[0].name);\n      }\n\n      if (winGame(_storage__WEBPACK_IMPORTED_MODULE_0__.gamePlayers[1]) === true) {\n        (0,_flash__WEBPACK_IMPORTED_MODULE_1__.default)().showWinner(_storage__WEBPACK_IMPORTED_MODULE_0__.gamePlayers[1].name);\n      }\n      const noEmptyCell = (val) => val.innerText === 'X' || val.innerText === 'O';\n      if (cellsArr.every(noEmptyCell) && winGame(_storage__WEBPACK_IMPORTED_MODULE_0__.gamePlayers[0]) === false && winGame(_storage__WEBPACK_IMPORTED_MODULE_0__.gamePlayers[1]) === false) {\n        const previousPlayer = document.getElementById('name');\n        previousPlayer.innerText = 'Game over with a draw. Play again.';\n      }\n    });\n  });\n\n  return { cellsArr, winGame, playGame };\n});\n\n\n//# sourceURL=webpack://tic-tac-game/./src/assets/game_logic.js?");

/***/ }),

/***/ "./src/assets/gameboard.js":
/*!*********************************!*\
  !*** ./src/assets/gameboard.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {\n  const cells = ['', '', '', '', '', '', '', '', ''];\n  const content = document.getElementById('tbody');\n  const tableArray = (val1, val2, val3) => {\n    const row = document.createElement('tr');\n    row.className = 'table-success';\n    const column = document.createElement('td');\n    column.innerText = val1;\n    const column2 = document.createElement('td');\n    column2.innerText = val2;\n    const column3 = document.createElement('td');\n    column3.innerText = val3;\n\n    row.appendChild(column);\n    row.appendChild(column2);\n    row.appendChild(column3);\n    return content.appendChild(row);\n  };\n\n  return { cells, tableArray };\n})());\n\n\n//# sourceURL=webpack://tic-tac-game/./src/assets/gameboard.js?");

/***/ }),

/***/ "./src/assets/player.js":
/*!******************************!*\
  !*** ./src/assets/player.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((name, sign, status) => {\n  const playMoves = [];\n  return {\n    name, sign, status, playMoves,\n  };\n});\n\n\n//# sourceURL=webpack://tic-tac-game/./src/assets/player.js?");

/***/ }),

/***/ "./src/assets/storage.js":
/*!*******************************!*\
  !*** ./src/assets/storage.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export gamePlayers [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gamePlayers\": () => /* binding */ gamePlayers,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/assets/player.js\");\n\n\nconst gamePlayers = localStorage.getItem('players')\n  ? JSON.parse(localStorage.getItem('players'))\n  : [];\n\nlocalStorage.setItem('players', JSON.stringify(gamePlayers));\nJSON.parse(localStorage.getItem('players'));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {\n  const addPlayer = (playerone, playertwo) => {\n    const firstPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.default)(playerone, 'X', true);\n    const secondPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.default)(playertwo, 'O', false);\n    gamePlayers.push(firstPlayer);\n    gamePlayers.push(secondPlayer);\n    localStorage.setItem('players', JSON.stringify(gamePlayers));\n  };\n\n  const deletePlayers = () => {\n    gamePlayers.splice(0);\n    localStorage.setItem('players', JSON.stringify(gamePlayers));\n  };\n\n  const togglePlayer = () => {\n    gamePlayers[0].status = !gamePlayers[0].status\n    gamePlayers[1].status = !gamePlayers[1].status;\n    localStorage.setItem('players', JSON.stringify(gamePlayers));\n  };\n\n  const emptyMovesPlayed = () => {\n    gamePlayers[0].playMoves = [];\n    gamePlayers[1].playMoves = [];\n    gamePlayers[0].status = true;\n    gamePlayers[1].status = false;\n    localStorage.setItem('players', JSON.stringify(gamePlayers));\n  };\n\n  return {\n    addPlayer, deletePlayers, togglePlayer, emptyMovesPlayed,\n  };\n})());\n\n\n//# sourceURL=webpack://tic-tac-game/./src/assets/storage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/gameboard */ \"./src/assets/gameboard.js\");\n/* harmony import */ var _assets_game_logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/game_logic */ \"./src/assets/game_logic.js\");\n/* harmony import */ var _assets_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/storage */ \"./src/assets/storage.js\");\n/* harmony import */ var _assets_flash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/flash */ \"./src/assets/flash.js\");\n/* harmony import */ var _assets_clickevent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/clickevent */ \"./src/assets/clickevent.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n_assets_gameboard__WEBPACK_IMPORTED_MODULE_0__.default.tableArray(_assets_gameboard__WEBPACK_IMPORTED_MODULE_0__.default.cells[0], _assets_gameboard__WEBPACK_IMPORTED_MODULE_0__.default.cells[1], _assets_gameboard__WEBPACK_IMPORTED_MODULE_0__.default.cells[2]);\n_assets_gameboard__WEBPACK_IMPORTED_MODULE_0__.default.tableArray(_assets_gameboard__WEBPACK_IMPORTED_MODULE_0__.default.cells[3], _assets_gameboard__WEBPACK_IMPORTED_MODULE_0__.default.cells[4], _assets_gameboard__WEBPACK_IMPORTED_MODULE_0__.default.cells[5]);\n_assets_gameboard__WEBPACK_IMPORTED_MODULE_0__.default.tableArray(_assets_gameboard__WEBPACK_IMPORTED_MODULE_0__.default.cells[6], _assets_gameboard__WEBPACK_IMPORTED_MODULE_0__.default.cells[7], _assets_gameboard__WEBPACK_IMPORTED_MODULE_0__.default.cells[8]);\n\nwindow.onload = () => {\n  if (_assets_storage__WEBPACK_IMPORTED_MODULE_2__.gamePlayers.length !== 0) _assets_storage__WEBPACK_IMPORTED_MODULE_2__.default.emptyMovesPlayed();\n};\n\n(0,_assets_flash__WEBPACK_IMPORTED_MODULE_3__.default)().showPlayers();\n(0,_assets_clickevent__WEBPACK_IMPORTED_MODULE_4__.default)().disableRestartBtn();\n(0,_assets_clickevent__WEBPACK_IMPORTED_MODULE_4__.default)().disableForm();\n(0,_assets_game_logic__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n\n//# sourceURL=webpack://tic-tac-game/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;