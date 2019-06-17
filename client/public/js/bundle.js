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

eval("const Bag = __webpack_require__(/*! ./models/bag.js */ \"./client/src/models/bag.js\")\nconst Player = __webpack_require__(/*! ./models/player.js */ \"./client/src/models/player.js\")\nconst Tile = __webpack_require__(/*! ./models/tile.js */ \"./client/src/models/tile.js\")\nconst Word = __webpack_require__(/*! ./models/word.js */ \"./client/src/models/word.js\");\nconst TileRackView = __webpack_require__(/*! ./views/tile_rack_view.js */ \"./client/src/views/tile_rack_view.js\");\nconst Board = __webpack_require__(/*! ./models/board.js */ \"./client/src/models/board.js\")\nconst StartGame = __webpack_require__(/*! ./models/start_game.js */ \"./client/src/models/start_game.js\")\nconst PlayerOptionsView = __webpack_require__(/*! ./views/player_options_view.js */ \"./client/src/views/player_options_view.js\")\nconst TurnView = __webpack_require__(/*! ./views/turn_view.js */ \"./client/src/views/turn_view.js\");\nconst ScoreBoardView = __webpack_require__(/*! ./views/scoreboard_view.js */ \"./client/src/views/scoreboard_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n    const scoreBoard = document.querySelector('#score_board');\n    const scoreBoardView = new ScoreBoardView(scoreBoard);\n    scoreBoardView.bindEvents();\n\n    const turnView = new TurnView();\n    turnView.bindEvents();\n\n    const dragElement = document.getElementById(\"#dragable_letter\")\n    const tile = new Tile(dragElement)\n    tile.bindEvents();\n\n    const tileRackElement = document.querySelector(\"#tile_rack\")\n    const tileRackView = new TileRackView(tileRackElement);\n    tileRackView.bindEvents();\n\n    const player = new Player(name)\n    player.bindEvents();\n\n    const playerOptionsElement = document.querySelector('#player_options')\n\n    const playerOptionsView = new PlayerOptionsView(playerOptionsElement)\n    playerOptionsView.bindEvents()\n\n    const startGame = new StartGame(playerOptionsElement)\n    startGame.listenForStart()\n\n    const url = 'http://localhost:3000/api/scrabble';\n    const bag = new Bag(url);\n    bag.getData();\n    // bag.bindEvents();\n\n    const wordUrl = 'http://localhost:3000/api/scrabblewords';\n    const word = new Word(wordUrl);\n    word.bindEvents();\n    // word.checkWord();\n    // word.getWords();\n})\n\n\n\n\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

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

eval("const RequestHelper = function (url) {\n  this.url = url;\n};\n\nRequestHelper.prototype.get = function () {\n  return fetch(this.url)\n    .then(response => response.json())\n    .catch(error => console.log(\"Error in get:\", error))\n};\n\nRequestHelper.prototype.post = function(payload){\n  return fetch(this.url, {\n    method: 'POST',\n    body: JSON.stringify(payload),\n    headers: {'Content-Type': 'application/json'}\n  })\n    .then(response => response.json())\n    .catch(console.error)\n}\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./client/src/helpers/request_helper.js?");

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

eval("\n\n//# sourceURL=webpack:///./client/src/models/board.js?");

/***/ }),

/***/ "./client/src/models/player.js":
/*!*************************************!*\
  !*** ./client/src/models/player.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst Player = function(name){\n    this.name = name\n    this.score = 0\n    this.tileRack = []\n}\n\nPlayer.prototype.bindEvents = function (){\n    PubSub.subscribe('Bag:random-tiles', (event) =>{\n        const randomTiles = event.detail\n        for (i = 0; i < 7; i++) {\n            (this.tileRack.push(randomTiles[i]))\n        }\n    })\n}\n\n\n\n\nmodule.exports = Player;\n\n//# sourceURL=webpack:///./client/src/models/player.js?");

/***/ }),

/***/ "./client/src/models/start_game.js":
/*!*****************************************!*\
  !*** ./client/src/models/start_game.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PlayerOptionsView = __webpack_require__(/*! ../views/player_options_view.js */ \"./client/src/views/player_options_view.js\")\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst StartGame = function(container){\n    this.container = container\n}\n\nStartGame.prototype.listenForStart = function () {\n    const playGameButton = this.container.querySelector('#play_game')\n    playGameButton.addEventListener('click', (event) => {\n        PubSub.publish('StartGame:play-game-pushed', event)\n        }\n    )\n}\n\nmodule.exports = StartGame\n\n//# sourceURL=webpack:///./client/src/models/start_game.js?");

/***/ }),

/***/ "./client/src/models/tile.js":
/*!***********************************!*\
  !*** ./client/src/models/tile.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst Tile = function(element){\n    this.element = element\n    this.dragged = ''\n}\n\nTile.prototype.bindEvents = function(){\n\ndocument.addEventListener(\"drag\", function(event) {\n    event.target.style.visibility = \"hidden\";\n}, 1);\n\ndocument.addEventListener(\"dragstart\", function(event) {\n  this.dragged = event.target;\n}, false);\n\ndocument.addEventListener(\"dragend\", function(event) {\n    event.target.style.visibility = \"\";\n}, 1);\n  \ndocument.addEventListener(\"dragover\", function(event) {\n  event.preventDefault();\n}, false);\n\ndocument.addEventListener(\"dragenter\", function(event) {\n   \n    if (event.target.className == 'triple'){\n        event.target.style.opacity = 0.5;\n    } else if (event.target.className == 'double') {\n        event.target.style.opacity = 0.5;\n    } else if (event.target.className == 'double_letter') {\n        event.target.style.opacity = 0.5;\n    } else if (event.target.className == 'triple_letter') {\n        event.target.style.opacity = 0.5;\n    } else if (event.target.className == 'tile') {\n        event.target.style.opacity = 0.5;\n    }\n\n}, false);\n\ndocument.addEventListener(\"dragleave\", function(event) {\n    event.target.style.opacity = ''\n})\n\n\ndocument.addEventListener(\"drop\", function(event) {\n\n  event.preventDefault();\n  event.target.style.opacity = ''\n\n\n  if (event.target.className == \"triple\") {\n    event.target.innerHTML = ''\n\n    event.target.appendChild( this.dragged );\n  } else if (event.target.className == \"double\") {\n    event.target.innerHTML = ''\n\n    event.target.appendChild( this.dragged );\n  } else if (event.target.className == \"triple_letter\") {\n    event.target.innerHTML = ''\n\n    event.target.appendChild( this.dragged );\n  } else if (event.target.className == \"double_letter\") {\n    event.target.innerHTML = ''\n  \n    event.target.appendChild( this.dragged );\n  } else if (event.target.className == \"tile\") {\n    event.target.appendChild( this.dragged );\n}\n\nPubSub.publish('Tile:letter-placed', this.dragged.innerHTML)\nPubSub.publish('Tile:letter-row-index', this.dragged.offsetParent.parentNode.rowIndex)\nPubSub.publish('Tile:letter-cell-index', this.dragged.offsetParent.cellIndex)\nPubSub.publish('Tile:dragged-detail', this.dragged)\n})\n\n}\n\nmodule.exports = Tile\n\n//# sourceURL=webpack:///./client/src/models/tile.js?");

/***/ }),

/***/ "./client/src/models/word.js":
/*!***********************************!*\
  !*** ./client/src/models/word.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./client/src/helpers/request_helper.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\n\n\nconst Word = function(url){\n    this.url = url;\n    this.request = new RequestHelper(this.url);\n    this.letterArray = []\n    this.cellIndexArray = []\n    this.rowIndexArray = []\n    \n    this.wordObjHorizontal = {}\n    this.wordObjVertical = {}\n    // this.word = ''\n    this.previousLettersArrayHorizontal = []\n    this.previousCellIndexHorizontal = []\n\n    this.previousLettersArrayVertical = []\n    this.previousCellIndexVertical = []\n\n    this.nextLettersArrayHorizontal = []\n    this.nextCellIndex = []\n\n    this.nextLettersArrayVertical = []\n    this.nextCellIndexVertical = []\n}\n\nWord.prototype.bindEvents = function(){\n    PubSub.subscribe('Tile:letter-placed', (event)=>{\n        this.letterArray.push(event.detail)\n    })\n\n    PubSub.subscribe('Tile:letter-row-index', (event)=>{\n        this.rowIndexArray.push(event.detail)\n    })\n\n    PubSub.subscribe('Tile:letter-cell-index', (event)=>{\n        this.cellIndexArray.push(event.detail)\n    })\n\n    PubSub.subscribe('Tile:dragged-detail', (dragged)=>{\n        const indexOfCell = dragged.detail.offsetParent.cellIndex\n        \n        if ((dragged.detail.offsetParent.previousElementSibling.childElementCount == 1) && (dragged.detail.offsetParent.previousElementSibling.firstElementChild.id === \"dragable_letter_fixed\")){\n            this.checkIfAnyPreviousLettersHorizontal(dragged.detail)\n        } else if (dragged.detail.offsetParent.nextElementSibling.childElementCount == 1){\n            this.checkIfAnyLettersAfterWordHorizontal(dragged.detail)\n        } else if ((dragged.detail.offsetParent.parentNode.previousElementSibling.cells[indexOfCell].childElementCount == 1) && (dragged.detail.offsetParent.parentNode.previousElementSibling.cells[indexOfCell].firstElementChild.id === \"dragable_letter_fixed\")){\n            this.checkIfAnyPreviousLettersVertical(dragged.detail, indexOfCell)\n        } else if (dragged.detail.offsetParent.parentNode.nextElementSibling.cells[indexOfCell].childElementCount ==1){\n            this.checkIfAnyLettersAfterWordVertical(dragged.detail, indexOfCell)\n        }\n\n        if ((this.rowIndexArray.every( index => index === (this.rowIndexArray[0])) && (this.rowIndexArray.length !==  1)) && ((this.previousLettersArrayHorizontal.length == 0) && (this.nextLettersArrayHorizontal.length == 0))){\n            this.wordObjHorizontal = {}\n            // this.wordObjVertical = {}\n            this.createHorizontalWordObject()\n        } else if ((this.cellIndexArray.every( index => index === (this.cellIndexArray[0])) &&   (this.cellIndexArray.length !==  1)) && ((this.previousLettersArrayVertical.length == 0) && (this.nextLettersArrayVertical.length == 0))){\n            this.wordObjVertical = {}\n            this.createVerticalWordObject()\n         } else if (((this.previousLettersArrayHorizontal.length >= 1) || (this.nextLettersArrayHorizontal.length >= 1)) && (this.previousLettersArrayVertical.length == 0 && this.nextLettersArrayVertical.length == 0)) {\n            this.createHorizontalWordObject()\n        } else {\n            this.createVerticalWordObject()\n        }\n    })\n\n}\n\nWord.prototype.createHorizontalWordObject = function(){\n\n    for (var i = 0; i < this.cellIndexArray.length; i++)\n    this.wordObjHorizontal[this.cellIndexArray[i]] = this.letterArray[i];\n    this.wordToString()\n}\n\nWord.prototype.createVerticalWordObject = function(){\n    for (var i = 0; i < this.rowIndexArray.length; i++)\n    this.wordObjVertical[this.rowIndexArray[i]] = this.letterArray[i];\n    this.wordToString()\n}\n\nWord.prototype.checkIfAnyPreviousLettersHorizontal = function(dragged){\n    if (dragged.offsetParent.previousElementSibling.firstElementChild.id === \"dragable_letter_fixed\") {\n        this.previousLettersArrayHorizontal.push(dragged.parentElement.previousElementSibling.innerText)\n        this.previousCellIndexHorizontal.push(dragged.offsetParent.previousElementSibling.cellIndex)\n        const newElement = dragged.offsetParent.previousElementSibling.previousElementSibling\n        if (newElement.childElementCount == 1){\n        this.checkForMorePreviousLettersHorizontal(newElement)\n        }\n    }\n    for (var i = 0; i < this.previousCellIndexHorizontal.length; i++)\n    this.wordObjHorizontal[this.previousCellIndexHorizontal[i]] = this.previousLettersArrayHorizontal[i];\n}\n\nWord.prototype.checkForMorePreviousLettersHorizontal = function(cell){\n    if (cell.firstElementChild.id === \"dragable_letter_fixed\"){\n        this.previousLettersArrayHorizontal.push(cell.firstElementChild.innerText)\n        this.previousCellIndexHorizontal.push(cell.cellIndex)\n        const newCell = cell.previousElementSibling;\n        if (newCell.childElementCount == 1){\n            this.checkForMorePreviousLettersHorizontal(newCell)\n        }\n    }\n    for (var i = 0; i < this.previousCellIndexHorizontal.length; i++)\n    this.wordObjHorizontal[this.previousCellIndexHorizontal[i]] = this.previousLettersArrayHorizontal[i];\n}\n\nWord.prototype.checkIfAnyPreviousLettersVertical = function(dragged, index){\n    if (dragged.offsetParent.parentNode.previousElementSibling.cells[index].firstElementChild.id === \"dragable_letter_fixed\"){\n        this.previousLettersArrayVertical.push(dragged.offsetParent.parentNode.previousElementSibling.cells[index].innerText) \n        this.previousCellIndexVertical.push(dragged.offsetParent.parentNode.previousElementSibling.rowIndex)\n        // this.rowIndexArray.push(dragged.offsetParent.parentNode.previousElementSibling.rowIndex)\n        const newElement = dragged.offsetParent.parentNode.previousElementSibling.previousElementSibling.cells[index]\n        if (newElement.childElementCount == 1){\n            this.checkForMorePreviousLettersVertical(newElement, index)\n        }\n    } \n    for (var i = 0; i < this.previousCellIndexVertical.length; i++)\n    this.wordObjVertical[this.previousCellIndexVertical[i]] = this.previousLettersArrayVertical[i];\n}\n\nWord.prototype.checkForMorePreviousLettersVertical = function(cell, index){\n    if (cell.firstElementChild.id === \"dragable_letter_fixed\"){\n        this.previousLettersArrayVertical.push(cell.firstElementChild.innerText)\n        this.previousCellIndexVertical.push(cell.parentNode.rowIndex)\n        // this.rowIndexArray.push(cell.parentNode.rowIndex)\n        const newCell = cell.parentNode.previousElementSibling.cells[index];\n        if (newCell.childElementCount == 1){\n            this.checkForMorePreviousLettersVertical(newCell, index)\n        }\n    }\n    for (var i = 0; i < this.previousCellIndexVertical.length; i++)\n    this.wordObjVertical[this.previousCellIndexVertical[i]] = this.previousLettersArrayVertical[i];\n}\n\nWord.prototype.checkIfAnyLettersAfterWordHorizontal = function(dragged){\n    if (dragged.offsetParent.nextElementSibling.firstElementChild.id === \"dragable_letter_fixed\") {\n        this.nextLettersArrayHorizontal.push(dragged.parentElement.nextElementSibling.innerText)\n        this.nextCellIndex.push(dragged.offsetParent.nextElementSibling.cellIndex)\n        const newElement = dragged.offsetParent.nextElementSibling.nextElementSibling\n        if (newElement.childElementCount == 1){\n            this.checkForMoreFollowingLettersHorizontal(newElement)\n        }\n    }  \n    for (var i = 0; i < this.nextCellIndex.length; i++)\n    this.wordObjHorizontal[this.nextCellIndex[i]] = this.nextLettersArrayHorizontal[i];     \n}\n\nWord.prototype.checkForMoreFollowingLettersHorizontal = function(cell){\n    if (cell.firstElementChild.id === \"dragable_letter_fixed\"){\n        this.nextLettersArrayHorizontal.push(cell.firstElementChild.innerText)\n        this.nextCellIndex.push(cell.cellIndex)\n        const newCell = cell.nextElementSibling;\n        if (newCell.childElementCount == 1){\n            this.checkForMoreFollowingLettersHorizontal(newCell)\n        }\n    }\n    for (var i = 0; i < this.nextCellIndex.length; i++)\n    this.wordObjHorizontal[this.nextCellIndex[i]] = this.nextLettersArrayHorizontal[i];\n}\n\nWord.prototype.checkIfAnyLettersAfterWordVertical = function(dragged, index){\n    if (dragged.offsetParent.parentNode.nextElementSibling.cells[index].firstElementChild.id === \"dragable_letter_fixed\"){\n        this.nextLettersArrayVertical.push(dragged.offsetParent.parentNode.nextElementSibling.cells[index].innerText) \n        this.nextCellIndexVertical.push(dragged.offsetParent.parentNode.nextElementSibling.rowIndex)\n        // this.rowIndexArray.push(dragged.offsetParent.parentNode.previousElementSibling.rowIndex)\n        const newElement = dragged.offsetParent.parentNode.nextElementSibling.nextElementSibling.cells[index]\n        if (newElement.childElementCount == 1){\n            this.checkForMoreFollowingLettersVertical(newElement, index)\n        }\n    } \n    for (var i = 0; i < this.nextCellIndexVertical.length; i++)\n    this.wordObjVertical[this.nextCellIndexVertical[i]] = this.nextLettersArrayVertical[i];\n}\n\nWord.prototype.checkForMoreFollowingLettersVertical = function(cell, index){\n    if (cell.firstElementChild.id === \"dragable_letter_fixed\"){\n        this.nextLettersArrayVertical.push(cell.firstElementChild.innerText)\n        this.nextCellIndexVertical.push(cell.parentNode.rowIndex)\n        // this.rowIndexArray.push(cell.parentNode.rowIndex)\n        const newCell = cell.parentNode.nextElementSibling.cells[index];\n        if (newCell.childElementCount == 1){\n            this.checkForMoreFollowingLettersVertical(newCell, index)\n        }\n    }\n    for (var i = 0; i < this.nextCellIndexVertical.length; i++)\n    this.wordObjVertical[this.nextCellIndexVertical[i]] = this.nextLettersArrayVertical[i];\n}\n\nWord.prototype.wordToString = function() {\n    this.HorWord = ''\n    this.VerWord = ''\n    this.HorWord = Object.values(this.wordObjHorizontal).join('').toLowerCase()\n    this.VerWord = Object.values(this.wordObjVertical).join('').toLowerCase()\n   \n    this.wordsArray = []\n    this.wordsArray.push(this.HorWord)\n    this.wordsArray.push(this.VerWord)\n\n    this.checkWord(this.wordsArray)\n\n    console.log('hor', this.HorWord);\n    console.log('ver', this.VerWord);\n    console.log('WORDS', this.wordsArray)\n}\n\nWord.prototype.checkWord = function(wordArray){\n    wordArray.forEach((word)=>{\n        let wordToCheck = {word: word}\n        this.request.post(wordToCheck)\n        .then( (outcome) => {\n            console.log(\"Hello\", outcome);\n        })\n    })\n    \n}\n\nmodule.exports = Word;\n\n//# sourceURL=webpack:///./client/src/models/word.js?");

/***/ }),

/***/ "./client/src/views/player_options_view.js":
/*!*************************************************!*\
  !*** ./client/src/views/player_options_view.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst PlayerOptionsView = function(container){\n    this.container = container\n}\n\nPlayerOptionsView.prototype.bindEvents = function(){\n\n    PubSub.subscribe('StartGame:play-game-pushed' , (event)=> {\n        this.startGameRender()\n    })\n  \n}\n\nPlayerOptionsView.prototype.startGameRender = function(){\n        this.container.innerHTML = ''\n\n        submitWordButton = document.createElement('button')\n        submitWordButton.id = \"submit_word\"\n        submitWordButton.textContent = \"Submit Word\"\n        this.container.appendChild(submitWordButton)\n\n        swapTilesButton = document.createElement('button')\n        swapTilesButton.id = \"swap_tiles\"\n        swapTilesButton.textContent = \"Swap Tiles\"\n        this.container.appendChild(swapTilesButton)\n\n        passButton = document.createElement('button')\n        passButton.id = \"pass\"\n        passButton.textContent = \"Pass\"\n        this.container.appendChild(passButton)\n}\n\nmodule.exports = PlayerOptionsView\n\n\n\n//# sourceURL=webpack:///./client/src/views/player_options_view.js?");

/***/ }),

/***/ "./client/src/views/scoreboard_view.js":
/*!*********************************************!*\
  !*** ./client/src/views/scoreboard_view.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst ScoreboardView = function(container){\n    this.container = container;\n}\n\nScoreboardView.prototype.bindEvents = function(){\n    PubSub.subscribe('StartGame:play-game-pushed', (event) => {\n\n        this.populateScoreBoard();\n    })\n}\n\nScoreboardView.prototype.populateScoreBoard = function(){\n    const playerOneBoard = document.createElement('table');\n    playerOneBoard.id = 'table1';\n    const oneRow = document.createElement('tr');\n    playerOneBoard.appendChild(oneRow);\n    const nameTD = document.createElement('td');\n    nameTD.textContent = \"Player 1: \";\n    oneRow.appendChild(nameTD);\n    const scoreTD = document.createElement('td');\n    scoreTD.textContent = 100;\n    oneRow.appendChild(scoreTD);\n    this.container.appendChild(playerOneBoard);\n\n    const playerTwoBoard = document.createElement('table');\n    playerTwoBoard.id = 'table2';\n    const twoRow = document.createElement('tr');\n    playerTwoBoard.appendChild(twoRow);\n    const name2TD = document.createElement('td');\n    name2TD.textContent = \"Player 2: \";\n    twoRow.appendChild(name2TD);\n    const Score2TD = document.createElement('td');\n    Score2TD.textContent = 100;\n    twoRow.appendChild(Score2TD);\n    this.container.appendChild(playerTwoBoard);\n}\n\nmodule.exports = ScoreboardView;\n\n//# sourceURL=webpack:///./client/src/views/scoreboard_view.js?");

/***/ }),

/***/ "./client/src/views/tile_rack_view.js":
/*!********************************************!*\
  !*** ./client/src/views/tile_rack_view.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst TileRacKView = function(container){\n    this.container = container;\n}\n\nTileRacKView.prototype.bindEvents = function(){\n    this.renderTileRack();\n    PubSub.subscribe('Bag:random-tiles', (event) =>{\n        const tiles = event.detail;\n        this.populateTileRack(tiles);\n        \n    })\n}\n\nTileRacKView.prototype.renderTileRack = function(){\n\n    const tileTable = document.createElement('table');\n    tileTable.id = \"tile_table\";\n    const tableRow = document.createElement('tr');\n    tileTable.appendChild(tableRow);\n    this.createTileSpots(tableRow);\n    this.container.appendChild(tileTable);\n}\n\nTileRacKView.prototype.createTileSpots = function(tableRow){\n    for (let index = 0; index < 7; index++) {\n        const tableSlot = document.createElement('td');\n        tableSlot.classList.add('tile');\n        tableRow.appendChild(tableSlot);\n    }\n}\n\nTileRacKView.prototype.populateTileRack = function(tiles){\n    const tileRack = document.querySelector('#tile_table');\n    const cellsArray = tileRack.rows[0].cells;\n    const newTiles = [];\n    for (let i = 0; i < 7; i++) {\n        const tile = document.createElement('h2');\n        tile.textContent = tiles[i].letter;\n        tile.id = 'dragable_letter';\n        tile.draggable = true;\n        cellsArray[i].appendChild(tile);\n    }\n    for (let i = 7; i < tiles.length; i++) {\n        newTiles.push(tiles[i]);\n    }\n    PubSub.publish('TileRackView:tiles-removed-from-bag', newTiles)\n}\n\n\n\n\nmodule.exports = TileRacKView;\n\n//# sourceURL=webpack:///./client/src/views/tile_rack_view.js?");

/***/ }),

/***/ "./client/src/views/turn_view.js":
/*!***************************************!*\
  !*** ./client/src/views/turn_view.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst TurnView = function(){\n\n}\n\nTurnView.prototype.bindEvents = function(){\n    // const submitWordButton = document.querySelector('#options');\n    // submitWordButton.addEventListener('click', () => {\n    //     console.log(\"HERE\");\n    // })\n    \n    \n\n    \n}\n\n\n\n\nmodule.exports = TurnView;\n\n//# sourceURL=webpack:///./client/src/views/turn_view.js?");

/***/ })

/******/ });