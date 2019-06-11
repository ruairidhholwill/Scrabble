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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Bag = __webpack_require__(/*! ./models/bag.js */ \"./client/src/models/bag.js\")\nconst Player = __webpack_require__(/*! ./models/player.js */ \"./client/src/models/player.js\")\nconst Board = __webpack_require__(/*! ./models/board.js */ \"./client/src/models/board.js\")\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n    const dragElement = document.getElementById(\"#dragable_letter\")\n    const board = new Board(dragElement)\n    board.bindEvents();\n\n\n    const player = new Player(name)\n    player.bindEvents();\n\n    const url = 'http://localhost:3000/api/scrabble';\n    const bag = new Bag(url);\n    bag.getData();\n    // bag.bindEvents();\n})\n\n\n\n\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n\n    publish: function(channel, payload) {\n        console.log(`published on ${channel} payload: ${payload}`)\n        const event = new CustomEvent(channel, {\n            detail: payload\n        });\n        document.dispatchEvent(event);\n    }, \n    subscribe: function(channel, callback) {\n        console.log(`subscribed to ${channel}`)\n        document.addEventListener(channel, callback)\n    }\n\n}\n\nmodule.exports = PubSub;\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/helpers/request_helper.js":
/*!**********************************************!*\
  !*** ./client/src/helpers/request_helper.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n  this.url = url;\n};\n\nRequestHelper.prototype.get = function () {\n  return fetch(this.url)\n    .then(response => response.json())\n    .catch(error => console.log(\"Error in get:\", error))\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./client/src/helpers/request_helper.js?");

/***/ }),

/***/ "./client/src/models/bag.js":
/*!**********************************!*\
  !*** ./client/src/models/bag.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\nconst RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./client/src/helpers/request_helper.js\")\n\nconst Bag = function(url) {\n    this.url = url;\n    this.tilesInBag = [];\n}\n\nBag.prototype.getData = function(){\n    const tiles = new RequestHelper(this.url)\n    tiles.get()\n        .then((tileData) => {\n            this.tilesInBag = tileData\n        this.randomTiles();\n        })\n}\n\nBag.prototype.randomTiles = function() {\n    var counter = this.tilesInBag.length, temp, index;\n    while (counter > 0) {\n        index = Math.floor(Math.random() * counter);\n        counter--;\n        temp = this.tilesInBag[counter];\n        this.tilesInBag[counter] = this.tilesInBag[index];\n        this.tilesInBag[index] = temp;\n    }\n    PubSub.publish('Bag:random-tiles', this.tilesInBag)\n    return this.tilesInBag;   \n}\n\n\n\n\nmodule.exports = Bag\n\n//# sourceURL=webpack:///./client/src/models/bag.js?");

/***/ }),

/***/ "./client/src/models/board.js":
/*!************************************!*\
  !*** ./client/src/models/board.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Board = function(element){\n    this.element = element\n}\n\nBoard.prototype.bindEvents = function(){\n//     document.addEventListener(\"drag\", (event) => {\n//     console.log(event)\n// })\n//     document.addEventListener(\"dragend\", (event) => {\n//     console.log(\"bye\")\n// })\n\ndocument.addEventListener(\"drag\", function(event) {\n    event.target.style.visibility = \"hidden\";\n  }, 1);\n\ndocument.addEventListener(\"dragstart\", function(event) {\n  dragged = event.target;\n  console.log(event.target)\n}, false);\n\ndocument.addEventListener(\"dragend\", function(event) {\n    event.target.style.visibility = \"\";\n  }, 1);\n  \n\n/* events fired on the drop targets */\ndocument.addEventListener(\"dragover\", function(event) {\n  // prevent default to allow drop\n  event.preventDefault();\n}, false);\n\ndocument.addEventListener(\"dragenter\", function(event) {\n    console.log(event.target)\n    if (event.target.className == 'triple'){\n        event.target.style.opacity = 0.5;\n    } else if (event.target.className == 'double') {\n        event.target.style.opacity = 0.5;\n    } else if (event.target.className == 'double_letter') {\n        event.target.style.opacity = 0.5;\n    } else if (event.target.className == 'triple_letter') {\n        event.target.style.opacity = 0.5;\n    } else if (event.target.className == 'tile') {\n        event.target.style.opacity = 0.5;\n    }\n\n\n}, false);\n\ndocument.addEventListener(\"dragleave\", function(event) {\n    event.target.style.opacity = ''\n})\n\n\ndocument.addEventListener(\"drop\", function(event) {\n\n  event.preventDefault();\n  event.target.style.opacity = ''\n//COULD MAKE EVENT (CELL) USED MULTIPLIER FALSE\n\nif (event.target.className == \"triple\") {\n    event.target.innerHTML = ''\n    event.target.appendChild( dragged );\n\n  } else if (event.target.className == \"double\") {\n    event.target.innerHTML = ''\n    event.target.appendChild( dragged );\n\n  } else if (event.target.className == \"triple_letter\") {\n    event.target.innerHTML = ''\n    event.target.appendChild( dragged );\n\n  } else if (event.target.className == \"double_letter\") {\n    event.target.innerHTML = ''\n    event.target.appendChild( dragged );\n    \n  } else if (event.target.className == \"tile\") {\n    event.target.appendChild( dragged );\n}\n})\n\n}\n\nmodule.exports = Board\n\n//# sourceURL=webpack:///./client/src/models/board.js?");

/***/ }),

/***/ "./client/src/models/player.js":
/*!*************************************!*\
  !*** ./client/src/models/player.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst Player = function(name){\n    this.name = name\n    this.score = 0\n    this.tileRack = []\n}\n\nPlayer.prototype.bindEvents = function (){\n    PubSub.subscribe('Bag:random-tiles', (event) =>{\n        const randomTiles = event.detail\n        for (i = 0; i < 7; i++) {\n            (this.tileRack.push(randomTiles[i]))\n        }\n    })\n}\n\n\n\n\nmodule.exports = Player;\n\n//# sourceURL=webpack:///./client/src/models/player.js?");

/***/ })

/******/ });