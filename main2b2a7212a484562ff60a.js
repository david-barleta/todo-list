/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/css-reset.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/css-reset.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html,
body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

#root,
#__next {
  isolation: isolate;
}`, "",{"version":3,"sources":["webpack://./src/styles/css-reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;;AAEA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;;EAEE,kBAAkB;AACpB","sourcesContent":["/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Montserrat:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* * {
  border: 1px solid black;
} */

:root {
  --main-bg-color: #191919;
  --new-todo-bg-color: #202020;
  --text-color: #f0ebe2;
  --accent-color: #2383e2;
  --bg-color-red: #6e3630;
  --bg-color-yellow: #89632a;
  --bg-color-blue: #28456c;
  --bg-color-orange: #854c1d;
  --bg-color-green: #2b593f;
  --bg-color-purple: #89632a;
  --bg-color-lightgray: #373737;
  --bg-color-gray: #5a5a5a;
  --bg-color-brown: #603b2c;
  --bg-color-pink: #69314c;
}

html {
  overflow-y: scroll;
}

body {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 50px;
  background-color: var(--main-bg-color);
  color: var(--text-color);
}

#header {
  display: grid;
  font-family: "Libre Baskerville", serif;
}

#nav-bar {
  display: flex;
  column-gap: 20px;
  align-items: center;
  padding-bottom: 7px;
  margin-bottom: 15px;
  border-bottom: 1px solid #b4b1aa;
}

#categories {
  display: flex;
  column-gap: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: var(--text-color-white);
}

#categories button {
  border: none;
  padding: 0;
  background: none;
  font-weight: bold;
  color: var(--text-color-white);
  cursor: pointer;
}

#categories select {
  background-color: var(--main-bg-color);
  border: none;
  color: var(--text-color);
}

#new-todo-btn {
  margin-left: auto;
  background-color: var(--accent-color);
  border: none;
  border-radius: 5px;
  padding: 7px 10px 3px 10px;
  font-size: 0.90rem;
  font-family: "Montserrat", sans-serif;
  color: var(--text-color);
  cursor: pointer;
}

#todos-view {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-bottom: 50px;
}

.todo-item {
  display: flex;
  column-gap: 10px;
  border-radius: 5px;
  padding: 5px 0px 5px 5px;
  font-size: 0.90rem;
  font-family: "Montserrat", sans-serif;
  align-items: center;
}

.todo-item:hover {
  background-color: var(--new-todo-bg-color);
  cursor: pointer;
}

.todo-item div:first-child {
  margin-right: auto;
}

.todo-item .property {
  padding: 0px 10px;
  border-radius: 5px;
}

.todo-item .title {
  border-bottom: 1px solid #b4b1aa54;
}

.todo-item .not-started, 
.todo-item .urgent {
  background-color: var(--bg-color-red);
}

.todo-item .in-progress,
.todo-item .important {
  background-color: var(--bg-color-yellow);
}

.todo-item .done,
.todo-item .no-priority {
  background-color: var(--bg-color-green);
}

#overlay {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4)
}

.todo-modal {
  background-color: var(--new-todo-bg-color);
  border-radius: 5px;
  padding: 60px 50px 50px 50px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min-content;
  height: min-content;
}

.todo-modal > form {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.todo-modal form input[type=text] {
  border: none;
  background: none;
  padding: 0px;
  color: var(--text-color);
  width: 100%;
  font-size: 2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}

.todo-modal form input[type=text]::placeholder {
  color: var(--text-color);
  font-size: 2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}

input:focus,
select:focus {
  outline: none;
}

.todo-modal > form > #properties {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.todo-modal > form > #properties div {
  display: flex;
}

.todo-modal form label {
  font-family: "Libre Baskerville", serif;
  font-size: 1rem;
  font-weight: bold;
  width: 125px;
}

.todo-modal form select,
.todo-modal form input[type=date] {
  background-color: var(--new-todo-bg-color);
  border: none;
  font-family: "Montserrat", sans-serif;
  font-size: .90rem;
  color: var(--text-color);
  width: fit-content;
}

::-webkit-calendar-picker-indicator {
  filter: invert(1);
  margin-left: -20px;
}

.submit-btn {
  width: 45px;
  position: absolute;
  right: 3%;
  top: 4%;
  margin-left: auto;
  background-color: var(--bg-color-green);
  border: none;
  border-radius: 5px;
  padding: 3px 0px 3px 0px;
  font-family: "Montserrat", sans-serif;
  font-size: 0.75rem;
  color: var(--text-color);
  cursor: pointer;
}

#new-todo-modal > form > #cancel-btn {
  width: 25px;
  position: absolute;
  left: 2.50%;
  top: 3%;
  margin-left: auto;
  background-color: transparent;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  /* font-weight: bold; */
  color: var(--text-color);
  cursor: pointer;
}

#edit-todo-modal > form > #delete-btn {
  width: 50px;
  position: absolute;
  left: 3.50%;
  top: 4%;
  margin-left: auto;
  background-color: var(--bg-color-red);
  border: none;
  border-radius: 5px;
  padding: 3px 0px 3px 0px;
  font-family: "Montserrat", sans-serif;
  font-size: 0.75rem;
  color: var(--text-color);
  cursor: pointer;
}

#edit-categories-modal {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  font-family: "Montserrat", sans-serif;
}

#edit-categories-modal > #custom-categories {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

#edit-categories-modal #custom-categories div,
#add-category-div {
  display: flex;
  column-gap: 50px;
}

#edit-categories-modal > #custom-categories div button {
  width: 50px;
  margin-left: auto;
  border: none;
  background-color: var(--bg-color-red);
  border: none;
  border-radius: 5px;
  padding: 3px 0px 3px 0px;
  font-size: 0.75rem;
  color: var(--text-color);
  cursor: pointer;
}

#add-category-div > input[type=text] {
  border: none;
  background: none;
  padding: 0px;
  color: var(--text-color);
  width: 150px;
  font-size: 1rem;
}

#edit-categories-modal div input[type=text]::placeholder {
  color: var(--text-color);
}

#edit-categories-modal div #add-category-btn {
  width: 50px;
  margin-left: auto;
  border: none;
  background-color: var(--bg-color-green);
  border: none;
  border-radius: 5px;
  padding: 3px 0px 3px 0px;
  font-size: 0.75rem;
  color: var(--text-color);
  cursor: pointer;
}

#edit-categories-modal > #cancel-btn {
  width: 25px;
  position: absolute;
  left: 2%;
  top: 3%;
  margin-left: auto;
  background-color: transparent;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  /* font-weight: bold; */
  color: var(--text-color);
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Montserrat:wght@400;700&display=swap');\n\n/* * {\n  border: 1px solid black;\n} */\n\n:root {\n  --main-bg-color: #191919;\n  --new-todo-bg-color: #202020;\n  --text-color: #f0ebe2;\n  --accent-color: #2383e2;\n  --bg-color-red: #6e3630;\n  --bg-color-yellow: #89632a;\n  --bg-color-blue: #28456c;\n  --bg-color-orange: #854c1d;\n  --bg-color-green: #2b593f;\n  --bg-color-purple: #89632a;\n  --bg-color-lightgray: #373737;\n  --bg-color-gray: #5a5a5a;\n  --bg-color-brown: #603b2c;\n  --bg-color-pink: #69314c;\n}\n\nhtml {\n  overflow-y: scroll;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  padding: 50px;\n  background-color: var(--main-bg-color);\n  color: var(--text-color);\n}\n\n#header {\n  display: grid;\n  font-family: \"Libre Baskerville\", serif;\n}\n\n#nav-bar {\n  display: flex;\n  column-gap: 20px;\n  align-items: center;\n  padding-bottom: 7px;\n  margin-bottom: 15px;\n  border-bottom: 1px solid #b4b1aa;\n}\n\n#categories {\n  display: flex;\n  column-gap: 20px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: bold;\n  color: var(--text-color-white);\n}\n\n#categories button {\n  border: none;\n  padding: 0;\n  background: none;\n  font-weight: bold;\n  color: var(--text-color-white);\n  cursor: pointer;\n}\n\n#categories select {\n  background-color: var(--main-bg-color);\n  border: none;\n  color: var(--text-color);\n}\n\n#new-todo-btn {\n  margin-left: auto;\n  background-color: var(--accent-color);\n  border: none;\n  border-radius: 5px;\n  padding: 7px 10px 3px 10px;\n  font-size: 0.90rem;\n  font-family: \"Montserrat\", sans-serif;\n  color: var(--text-color);\n  cursor: pointer;\n}\n\n#todos-view {\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  padding-bottom: 50px;\n}\n\n.todo-item {\n  display: flex;\n  column-gap: 10px;\n  border-radius: 5px;\n  padding: 5px 0px 5px 5px;\n  font-size: 0.90rem;\n  font-family: \"Montserrat\", sans-serif;\n  align-items: center;\n}\n\n.todo-item:hover {\n  background-color: var(--new-todo-bg-color);\n  cursor: pointer;\n}\n\n.todo-item div:first-child {\n  margin-right: auto;\n}\n\n.todo-item .property {\n  padding: 0px 10px;\n  border-radius: 5px;\n}\n\n.todo-item .title {\n  border-bottom: 1px solid #b4b1aa54;\n}\n\n.todo-item .not-started, \n.todo-item .urgent {\n  background-color: var(--bg-color-red);\n}\n\n.todo-item .in-progress,\n.todo-item .important {\n  background-color: var(--bg-color-yellow);\n}\n\n.todo-item .done,\n.todo-item .no-priority {\n  background-color: var(--bg-color-green);\n}\n\n#overlay {\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4)\n}\n\n.todo-modal {\n  background-color: var(--new-todo-bg-color);\n  border-radius: 5px;\n  padding: 60px 50px 50px 50px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: min-content;\n  height: min-content;\n}\n\n.todo-modal > form {\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n}\n\n.todo-modal form input[type=text] {\n  border: none;\n  background: none;\n  padding: 0px;\n  color: var(--text-color);\n  width: 100%;\n  font-size: 2rem;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: bold;\n}\n\n.todo-modal form input[type=text]::placeholder {\n  color: var(--text-color);\n  font-size: 2rem;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: bold;\n}\n\ninput:focus,\nselect:focus {\n  outline: none;\n}\n\n.todo-modal > form > #properties {\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n}\n\n.todo-modal > form > #properties div {\n  display: flex;\n}\n\n.todo-modal form label {\n  font-family: \"Libre Baskerville\", serif;\n  font-size: 1rem;\n  font-weight: bold;\n  width: 125px;\n}\n\n.todo-modal form select,\n.todo-modal form input[type=date] {\n  background-color: var(--new-todo-bg-color);\n  border: none;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: .90rem;\n  color: var(--text-color);\n  width: fit-content;\n}\n\n::-webkit-calendar-picker-indicator {\n  filter: invert(1);\n  margin-left: -20px;\n}\n\n.submit-btn {\n  width: 45px;\n  position: absolute;\n  right: 3%;\n  top: 4%;\n  margin-left: auto;\n  background-color: var(--bg-color-green);\n  border: none;\n  border-radius: 5px;\n  padding: 3px 0px 3px 0px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 0.75rem;\n  color: var(--text-color);\n  cursor: pointer;\n}\n\n#new-todo-modal > form > #cancel-btn {\n  width: 25px;\n  position: absolute;\n  left: 2.50%;\n  top: 3%;\n  margin-left: auto;\n  background-color: transparent;\n  border: none;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1rem;\n  /* font-weight: bold; */\n  color: var(--text-color);\n  cursor: pointer;\n}\n\n#edit-todo-modal > form > #delete-btn {\n  width: 50px;\n  position: absolute;\n  left: 3.50%;\n  top: 4%;\n  margin-left: auto;\n  background-color: var(--bg-color-red);\n  border: none;\n  border-radius: 5px;\n  padding: 3px 0px 3px 0px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 0.75rem;\n  color: var(--text-color);\n  cursor: pointer;\n}\n\n#edit-categories-modal {\n  display: flex;\n  flex-direction: column;\n  row-gap: 15px;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n#edit-categories-modal > #custom-categories {\n  display: flex;\n  flex-direction: column;\n  row-gap: 15px;\n}\n\n#edit-categories-modal #custom-categories div,\n#add-category-div {\n  display: flex;\n  column-gap: 50px;\n}\n\n#edit-categories-modal > #custom-categories div button {\n  width: 50px;\n  margin-left: auto;\n  border: none;\n  background-color: var(--bg-color-red);\n  border: none;\n  border-radius: 5px;\n  padding: 3px 0px 3px 0px;\n  font-size: 0.75rem;\n  color: var(--text-color);\n  cursor: pointer;\n}\n\n#add-category-div > input[type=text] {\n  border: none;\n  background: none;\n  padding: 0px;\n  color: var(--text-color);\n  width: 150px;\n  font-size: 1rem;\n}\n\n#edit-categories-modal div input[type=text]::placeholder {\n  color: var(--text-color);\n}\n\n#edit-categories-modal div #add-category-btn {\n  width: 50px;\n  margin-left: auto;\n  border: none;\n  background-color: var(--bg-color-green);\n  border: none;\n  border-radius: 5px;\n  padding: 3px 0px 3px 0px;\n  font-size: 0.75rem;\n  color: var(--text-color);\n  cursor: pointer;\n}\n\n#edit-categories-modal > #cancel-btn {\n  width: 25px;\n  position: absolute;\n  left: 2%;\n  top: 3%;\n  margin-left: auto;\n  background-color: transparent;\n  border: none;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1rem;\n  /* font-weight: bold; */\n  color: var(--text-color);\n  cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/css-reset.css":
/*!**********************************!*\
  !*** ./src/styles/css-reset.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./css-reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/css-reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_css_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_css_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_css_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_css_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/categoriesHandler.js":
/*!**********************************!*\
  !*** ./src/categoriesHandler.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleAddCategoryOptions)
/* harmony export */ });
/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItems */ "./src/todoItems.js");
/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorageHandler */ "./src/localStorageHandler.js");



const categoriesFilter = document.querySelector("#categories-filter");

function handleCancel() {
  const todoModal = document.querySelector("#overlay");
  todoModal.remove();
}

function clearCategories() {
  const customCategoriesDiv = document.querySelector("#custom-categories");
  customCategoriesDiv.replaceChildren();
}

function deleteCategory(event) {
  const categoryToDelete = event.target.previousElementSibling;

  const propertyName = categoryToDelete.dataset.category;

  delete _todoItems__WEBPACK_IMPORTED_MODULE_0__.customCategories[propertyName];

  (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_1__.saveCustomCategories)();

  const displayEvent = new Event("displayCategories");
  categoriesFilter.dispatchEvent(displayEvent);
}

function displayCategories() {
  const customCategoriesArray = Object.keys(_todoItems__WEBPACK_IMPORTED_MODULE_0__.customCategories);

  for (let i = 1; i < customCategoriesArray.length; i += 1) {
    const categoryDiv = document.createElement("div");

    if (customCategoriesArray[i] !== "default") {
      const categoryLabel = document.createElement("div");
      categoryLabel.classList.add("category");
      categoryLabel.textContent = `${_todoItems__WEBPACK_IMPORTED_MODULE_0__.customCategories[customCategoriesArray[i]]}`
      categoryLabel.setAttribute("data-category", `${customCategoriesArray[i]}`);

      categoryDiv.appendChild(categoryLabel);
    }

    if (customCategoriesArray[i] !== "uncategorized" && customCategoriesArray[i] !== "default") {
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.type = "button";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", deleteCategory);

      categoryDiv.appendChild(deleteBtn);
    }

    document.querySelector("#custom-categories").appendChild(categoryDiv);
  }
}

function handleAddCategory() {
  const newCategoryLabel = document.querySelector("#add-category-input");

  if (newCategoryLabel.value !== "") {
    const propertyName = `${newCategoryLabel.value}`;

    _todoItems__WEBPACK_IMPORTED_MODULE_0__.customCategories[propertyName] = `${newCategoryLabel.value}`;

    (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_1__.saveCustomCategories)();

    newCategoryLabel.value = "";

    const displayEvent = new Event("displayCategories");

    categoriesFilter.dispatchEvent(displayEvent);

    categoriesFilter.replaceChildren();

    const customCategoriesArray = Object.keys(_todoItems__WEBPACK_IMPORTED_MODULE_0__.customCategories);

    for (let i = 0; i < customCategoriesArray.length; i += 1) {

      const option = document.createElement("option");
      option.textContent = `${_todoItems__WEBPACK_IMPORTED_MODULE_0__.customCategories[customCategoriesArray[i]]}`;
      option.setAttribute("value", customCategoriesArray[i]);


      categoriesFilter.appendChild(option);
    }
  }
}

function handleAddCategoryOptions() {
  const categorySelect = document.querySelector("#category");

  const customCategoriesArray = Object.keys(_todoItems__WEBPACK_IMPORTED_MODULE_0__.customCategories);

  for (let i = 0; i < customCategoriesArray.length; i += 1) {

    if (customCategoriesArray[i] !== "default") {
      const option = document.createElement("option");
      option.textContent = `${_todoItems__WEBPACK_IMPORTED_MODULE_0__.customCategories[customCategoriesArray[i]]}`;
      option.setAttribute("value", customCategoriesArray[i]);

      categorySelect.appendChild(option);
    }
  }
}

function handleEditCategories() {
  const editCategoriesTemplate = document.querySelector("#edit-categories-template");
  const editCategoriesModal = editCategoriesTemplate.content.cloneNode(true);
  document.body.appendChild(editCategoriesModal);

  document.querySelector("#add-category-btn").addEventListener("click", handleAddCategory);
  document.querySelector("#cancel-btn").addEventListener("click", handleCancel);
}

document.querySelector("#add-category").addEventListener("click", () => {
  handleEditCategories();

  const displayEvent = new Event("displayCategories");
  categoriesFilter.dispatchEvent(displayEvent);
})

categoriesFilter.addEventListener("displayCategories", () => {
  clearCategories();
  displayCategories();
}, false);

/***/ }),

/***/ "./src/editTodoHandler.js":
/*!********************************!*\
  !*** ./src/editTodoHandler.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItems */ "./src/todoItems.js");
/* harmony import */ var _categoriesHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categoriesHandler */ "./src/categoriesHandler.js");
/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorageHandler */ "./src/localStorageHandler.js");




function handleEdit(event) {
  const editTodoTemplate = document.querySelector("#edit-todo-template");
  const editTodoModal = editTodoTemplate.content.cloneNode(true);
  document.body.appendChild(editTodoModal);

  (0,_categoriesHandler__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const { index } = event.target.dataset;

  const todoItem = _todoItems__WEBPACK_IMPORTED_MODULE_0__.todos[index];

  const editTodoModalForm = document.querySelector("#edit-todo-modal").querySelector("form");

  editTodoModalForm.querySelector("#title").value = todoItem.title;
  editTodoModalForm.querySelector("#category").value = todoItem.category;
  editTodoModalForm.querySelector("#priority").value = todoItem.priority;
  editTodoModalForm.querySelector("#status").value = todoItem.status;
  editTodoModalForm.querySelector("#dueDate").value = todoItem.dueDate;

  // Refactor the above piece of code in the future

  document.querySelector("form").addEventListener("submit", (e) => {

    e.preventDefault();

    const editedTodoData = new FormData(e.target); // Get data from edit to-do form

    const editedTodoProperties = Object.fromEntries(editedTodoData.entries());

    (0,_todoItems__WEBPACK_IMPORTED_MODULE_0__.handleEditTodo)(editedTodoProperties, index);
    (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_2__.saveTodos)();

    const todoWindow = document.querySelector("#overlay");
    todoWindow.remove();

    const submitEvent = new Event("displayTodos");

    const todoList = document.querySelector("#todos-view");

    todoList.dispatchEvent(submitEvent);

  });

  document.querySelector("#delete-btn").addEventListener("click", () => {

    _todoItems__WEBPACK_IMPORTED_MODULE_0__.todos.splice(index, 1);

    (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_2__.saveTodos)();

    const todoWindow = document.querySelector("#overlay");
    todoWindow.remove();

    const submitEvent = new Event("displayTodos");

    const todoList = document.querySelector("#todos-view");

    todoList.dispatchEvent(submitEvent);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleEdit);

/***/ }),

/***/ "./src/filterHandler.js":
/*!******************************!*\
  !*** ./src/filterHandler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const activeFilter = {
  "selectedFilter": "none",
  "selectedOption": "default"
}

document.querySelector("#default-filter").addEventListener("click", () => {
  activeFilter.selectedOption = "default";

  const submitEvent = new Event("displayTodos");

  const todoList = document.querySelector("#todos-view");

  todoList.dispatchEvent(submitEvent);
})

const customFilters = document.querySelectorAll(".custom-filter");

customFilters.forEach((filter) => {
  filter.addEventListener("change", () => {
    activeFilter.selectedFilter = filter.dataset.filter;
    activeFilter.selectedOption = filter.value;

    const submitEvent = new Event("displayTodos");

    const todoList = document.querySelector("#todos-view");

    todoList.dispatchEvent(submitEvent);
  })
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activeFilter);

/***/ }),

/***/ "./src/localStorageHandler.js":
/*!************************************!*\
  !*** ./src/localStorageHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   saveCustomCategories: () => (/* binding */ saveCustomCategories),
/* harmony export */   saveTodos: () => (/* binding */ saveTodos)
/* harmony export */ });
/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItems */ "./src/todoItems.js");


function saveTodos() {
  const dataToSave = JSON.stringify(_todoItems__WEBPACK_IMPORTED_MODULE_0__.todos);

  localStorage.setItem("todosStorage", dataToSave);

  console.log(`saved: ${dataToSave}`);
}

function saveCustomCategories() {
  const dataToSave = JSON.stringify(_todoItems__WEBPACK_IMPORTED_MODULE_0__.customCategories);

  localStorage.setItem("categoriesStorage", dataToSave);

  console.log(`saved: ${dataToSave}`);
}

if (!localStorage.getItem("todosStorage") && !localStorage.getItem("categoriesStorage")) {
  saveTodos();
  saveCustomCategories();
} else {
  const retrievedTodos = localStorage.getItem("todosStorage");
  const todosData = JSON.parse(retrievedTodos);
  _todoItems__WEBPACK_IMPORTED_MODULE_0__.todos.length = 0;
  _todoItems__WEBPACK_IMPORTED_MODULE_0__.todos.splice(0, _todoItems__WEBPACK_IMPORTED_MODULE_0__.todos.length, ...todosData);

  console.log(todosData);

  const retrievedCustomCategories = localStorage.getItem("categoriesStorage");
  const customCategoriesData = JSON.parse(retrievedCustomCategories);
  const customCategoriesArray = Object.keys(customCategoriesData);

  for (let i = 0; i < customCategoriesArray; i += 1) {
    delete _todoItems__WEBPACK_IMPORTED_MODULE_0__.customCategories[customCategoriesArray[i]];
  }

  Object.assign(_todoItems__WEBPACK_IMPORTED_MODULE_0__.customCategories, customCategoriesData);

  console.log(customCategoriesData);
}



/***/ }),

/***/ "./src/newTodoHandler.js":
/*!*******************************!*\
  !*** ./src/newTodoHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItems */ "./src/todoItems.js");
/* harmony import */ var _categoriesHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categoriesHandler */ "./src/categoriesHandler.js");
/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorageHandler */ "./src/localStorageHandler.js");





function handleCancel() {
  const todoModal = document.querySelector("#overlay");
  todoModal.remove();
}

function handleSubmit(event) {
  event.preventDefault();

  const newTodoData = new FormData(event.target); // Get data from new to-do form

  const newTodoProperties = Object.fromEntries(newTodoData.entries());

  (0,_todoItems__WEBPACK_IMPORTED_MODULE_0__.handleCreateNewTodo)(newTodoProperties);
  (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_2__.saveTodos)();

  const todoWindow = document.querySelector("#overlay");
  todoWindow.remove();

  const submitEvent = new Event("displayTodos");

  const todoList = document.querySelector("#todos-view");

  todoList.dispatchEvent(submitEvent);
}

document.querySelector("#new-todo-btn").addEventListener("click", () => {
  const newTodoTemplate = document.querySelector("#new-todo-template");
  const newTodoModal = newTodoTemplate.content.cloneNode(true);
  document.body.appendChild(newTodoModal);

  (0,_categoriesHandler__WEBPACK_IMPORTED_MODULE_1__["default"])();

  document.querySelector("form").addEventListener("submit", handleSubmit);
  document.querySelector("#cancel-btn").addEventListener("click", handleCancel);
});



/***/ }),

/***/ "./src/todoItems.js":
/*!**************************!*\
  !*** ./src/todoItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customCategories: () => (/* binding */ customCategories),
/* harmony export */   handleCreateNewTodo: () => (/* binding */ handleCreateNewTodo),
/* harmony export */   handleEditTodo: () => (/* binding */ handleEditTodo),
/* harmony export */   priorityList: () => (/* binding */ priorityList),
/* harmony export */   statusList: () => (/* binding */ statusList),
/* harmony export */   todos: () => (/* binding */ todos)
/* harmony export */ });
// 1, 3, 5 important
// 2, 4, 6 urgent
// 1, 2, 3 in-progress
// 4, 5, 6 done

const todos = [
  {
    "title": "Uncategorized task",
    "category": "uncategorized",
    "priority": "important",
    "status": "in-progress",
    "dueDate": "2021-12-06"
  },
  {
    "title": "School task",
    "category": "uncategorized",
    "priority": "urgent",
    "status": "in-progress",
    "dueDate": "2021-12-06"
  },
  {
    "title": "Work task",
    "category": "uncategorized",
    "priority": "important",
    "status": "in-progress",
    "dueDate": "2021-12-06"
  },
  {
    "title": "Hobby task",
    "category": "uncategorized",
    "priority": "urgent",
    "status": "done",
    "dueDate": "2021-12-06"
  }
];

const customCategories = {
  "default": "Category",
  "uncategorized": "Uncategorized",
};

const priorityList = {
  "no-priority": "No Priority",
  "important": "Important",
  "urgent": "Urgent"
};

const statusList = {
  "not-started": "Not Started",
  "in-progress": "In Progress",
  "done": "Done"
};

class TodoItem {
  constructor(title, category, priority, status, dueDate) {
    this.title = title;
    this.category = category;
    this.priority = priority;
    this.status = status;
    this.dueDate = dueDate;
  }
}

function handleCreateNewTodo({
  title,
  category,
  priority,
  status,
  dueDate,
}) {
  const todoItem = new TodoItem(title, category, priority, status, dueDate);
  todos.push(todoItem);
}

function handleEditTodo({
  title,
  category,
  priority,
  status,
  dueDate,
}, index) {
  const todoItem = todos[index];

  todoItem.title = title;
  todoItem.category = category;
  todoItem.priority = priority;
  todoItem.status = status;
  todoItem.dueDate = dueDate;
}




/***/ }),

/***/ "./src/todoListHandler.js":
/*!********************************!*\
  !*** ./src/todoListHandler.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItems */ "./src/todoItems.js");
/* harmony import */ var _editTodoHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editTodoHandler */ "./src/editTodoHandler.js");
/* harmony import */ var _filterHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filterHandler */ "./src/filterHandler.js");




function clearTodos() {
  const todosView = document.querySelector("#todos-view");
  todosView.replaceChildren();
}

function displayTodos(todosArray) {
  todosArray.forEach((todo) => {
    const todoItemTemplate = document.querySelector("#todo-item-template");
    const newTodoItem = todoItemTemplate.content.cloneNode(true);

    const newTodoDiv = newTodoItem.querySelector("div");
    const newTodoProperties = newTodoDiv.querySelectorAll("div");

    const index = todosArray.indexOf(todo); // ???
    newTodoDiv.setAttribute("data-index", `${index}`);

    newTodoProperties[0].innerHTML = todo.title;

    newTodoProperties[1].innerHTML = _todoItems__WEBPACK_IMPORTED_MODULE_0__.customCategories[todo.category];
    newTodoProperties[1].classList.add(todo.category);

    newTodoProperties[2].innerHTML = _todoItems__WEBPACK_IMPORTED_MODULE_0__.priorityList[todo.priority];
    newTodoProperties[2].classList.add(todo.priority);

    newTodoProperties[3].innerHTML = _todoItems__WEBPACK_IMPORTED_MODULE_0__.statusList[todo.status];
    newTodoProperties[3].classList.add(todo.status);

    newTodoProperties[4].innerHTML = todo.dueDate;

    document.querySelector("#todos-view").appendChild(newTodoItem);

    newTodoDiv.addEventListener("click", _editTodoHandler__WEBPACK_IMPORTED_MODULE_1__["default"]);
  });
}

function filterTodos() {
  console.log("test");
  if (_filterHandler__WEBPACK_IMPORTED_MODULE_2__["default"].selectedOption === "default") {
    displayTodos(_todoItems__WEBPACK_IMPORTED_MODULE_0__.todos);
  } else {
    const filteredTodos = _todoItems__WEBPACK_IMPORTED_MODULE_0__.todos.filter((todoItem) => todoItem[_filterHandler__WEBPACK_IMPORTED_MODULE_2__["default"].selectedFilter] === `${_filterHandler__WEBPACK_IMPORTED_MODULE_2__["default"].selectedOption}`)
    displayTodos(filteredTodos);
  }
}

const todoList = document.querySelector("#todos-view");

todoList.addEventListener("displayTodos", () => {
  clearTodos();
  filterTodos();
}, false); // Executed during the bubbling phase

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/css-reset.css */ "./src/styles/css-reset.css");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _newTodoHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newTodoHandler */ "./src/newTodoHandler.js");
/* harmony import */ var _todoListHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoListHandler */ "./src/todoListHandler.js");
/* harmony import */ var _categoriesHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categoriesHandler */ "./src/categoriesHandler.js");
/* harmony import */ var _filterHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filterHandler */ "./src/filterHandler.js");
/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localStorageHandler */ "./src/localStorageHandler.js");







})();

/******/ })()
;
//# sourceMappingURL=main2b2a7212a484562ff60a.js.map