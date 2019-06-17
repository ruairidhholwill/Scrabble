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

eval("const Bag = __webpack_require__(/*! ./models/bag.js */ \"./client/src/models/bag.js\")\nconst Player = __webpack_require__(/*! ./models/player.js */ \"./client/src/models/player.js\")\nconst Tile = __webpack_require__(/*! ./models/tile.js */ \"./client/src/models/tile.js\")\nconst Word = __webpack_require__(/*! ./models/word.js */ \"./client/src/models/word.js\");\nconst TileRackView = __webpack_require__(/*! ./views/tile_rack_view.js */ \"./client/src/views/tile_rack_view.js\");\nconst Board = __webpack_require__(/*! ./models/board.js */ \"./client/src/models/board.js\")\nconst StartGame = __webpack_require__(/*! ./models/start_game.js */ \"./client/src/models/start_game.js\")\nconst PlayerOptionsView = __webpack_require__(/*! ./views/player_options_view.js */ \"./client/src/views/player_options_view.js\")\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n    const dragElement = document.getElementById(\"#dragable_letter\")\n    const tile = new Tile(dragElement)\n    tile.bindEvents();\n\n    const tileRackElement = document.querySelector(\"#tile_rack\")\n    const tileRackView = new TileRackView(tileRackElement);\n    tileRackView.bindEvents();\n\n    const player = new Player(name)\n    player.bindEvents();\n\n    const playerOptionsElement = document.querySelector('#player_options')\n\n    const playerOptionsView = new PlayerOptionsView(playerOptionsElement)\n    playerOptionsView.bindEvents()\n\n    const startGame = new StartGame(playerOptionsElement)\n    startGame.listenForStart()\n\n    const url = 'http://localhost:3000/api/scrabble';\n    const bag = new Bag(url);\n    bag.getData();\n    // bag.bindEvents();\n\n    const wordUrl = 'http://localhost:3000/api/scrabblewords';\n    const word = new Word(wordUrl);\n    word.bindEvents();\n    // word.checkWord();\n    // word.getWords();\n})\n\n\n\n\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

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

eval("const RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./client/src/helpers/request_helper.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst Word = function(url){\n    this.url = url;\n    this.request = new RequestHelper(this.url);\n    this.letterArray = []\n    this.cellIndexArray = []\n    this.rowIndexArray = []\n    \n    this.wordObjHorizontal = {}\n    this.wordObjVertical = {}\n    \n    this.fixedHorizontalLetters = []\n    this.fixedHorizontalCells = []\n\n    this.fixedVerticalLetters = []\n    this.fixedVerticalCells = []\n}\n\nWord.prototype.bindEvents = function(){\n    PubSub.subscribe('Tile:letter-placed', (event)=>{\n        this.letterArray.push(event.detail)\n    })\n\n    PubSub.subscribe('Tile:letter-row-index', (event)=>{\n        this.rowIndexArray.push(event.detail)\n    })\n\n    PubSub.subscribe('Tile:letter-cell-index', (event)=>{\n        this.cellIndexArray.push(event.detail)\n    })\n\n    PubSub.subscribe('Tile:dragged-detail', (dragged)=>{\n        const cellToLeft = dragged.detail.offsetParent.previousElementSibling\n        const cellToRight = dragged.detail.offsetParent.nextElementSibling\n        const rowAbove = dragged.detail.offsetParent.parentNode.previousElementSibling\n        const rowBelow = dragged.detail.offsetParent.parentNode.nextElementSibling\n        const indexOfCell = dragged.detail.offsetParent.cellIndex\n        \n        if ((cellToLeft.childElementCount == 1) && (cellToLeft.firstElementChild.id === \"dragable_letter_fixed\")){\n            this.checkIfLettersToLeft(cellToLeft)\n        } else if ((cellToRight.childElementCount == 1) && (cellToRight.firstElementChild.id === \"dragable_letter_fixed\")){\n            this.checkIfLettersToRight(cellToRight)\n        } else if ((rowAbove.cells[indexOfCell].childElementCount == 1) && (rowAbove.cells[indexOfCell].firstElementChild.id === \"dragable_letter_fixed\")){\n            this.checkIfLettersAbove(rowAbove, indexOfCell)\n        } else if (rowBelow.cells[indexOfCell].childElementCount == 1){\n            this.checkIfLettersBelow(rowBelow, indexOfCell)\n        }\n\n        if ((this.rowIndexArray.every( index => index === (this.rowIndexArray[0])) && (this.rowIndexArray.length !== 1)) && (this.fixedHorizontalLetters.length == 0)){\n            this.wordObjHorizontal = {}\n            this.createHorizontalWordObject()\n        } else if ((this.cellIndexArray.every( index => index === (this.cellIndexArray[0])) &&   (this.cellIndexArray.length !==  1)) && (this.fixedVerticalLetters.length == 0)){\n            this.wordObjVertical = {}\n            this.createVerticalWordObject()\n        } else if ((this.fixedHorizontalLetters.length >= 1) && (this.fixedVerticalLetters.length == 0)) {\n            this.createHorizontalWordObject()\n        } else if ((this.fixedHorizontalLetters.length == 0) && (this.fixedVerticalLetters.length >= 1)){\n            this.createVerticalWordObject()\n        }\n    })\n\n}\n\nWord.prototype.checkIfLettersToLeft = function(cell){\n    if (cell.firstElementChild.id === \"dragable_letter_fixed\") {\n        this.fixedHorizontalLetters.push(cell.innerText)\n        this.fixedHorizontalCells.push(cell.cellIndex)\n\n        const newCell = cell.previousElementSibling\n        if (newCell.childElementCount == 1){\n        this.checkIfLettersToLeft(newCell)\n        }\n    }\n    for (var i = 0; i < this.fixedHorizontalCells.length; i++)\n    this.wordObjHorizontal[this.fixedHorizontalCells[i]] = this.fixedHorizontalLetters[i];\n}\n\nWord.prototype.checkIfLettersToRight = function(cell){\n    if (cell.firstElementChild.id === \"dragable_letter_fixed\") {\n        this.fixedHorizontalLetters.push(cell.innerText)\n        this.fixedHorizontalCells.push(cell.cellIndex)\n        const newCell = cell.nextElementSibling\n        if (newCell.childElementCount == 1){\n            this.checkIfLettersToRight(newCell)\n        }\n    }  \n    for (var i = 0; i < this.fixedHorizontalCells.length; i++)\n    this.wordObjHorizontal[this.fixedHorizontalCells[i]] = this.fixedHorizontalLetters[i];     \n}\n\nWord.prototype.checkIfLettersAbove = function(row, index){\n    if (row.cells[index].firstElementChild.id === \"dragable_letter_fixed\"){\n        this.fixedVerticalLetters.push(row.cells[index].innerText) \n        this.fixedVerticalCells.push(row.rowIndex)\n\n        const newRow = row.previousElementSibling\n        if (newRow.cells[index].childElementCount == 1){\n            this.checkIfLettersAbove(newRow, index)\n        }\n    } \n    for (var i = 0; i < this.fixedVerticalCells.length; i++)\n    this.wordObjVertical[this.fixedVerticalCells[i]] = this.fixedVerticalLetters[i];\n}\n\nWord.prototype.checkIfLettersBelow = function(row, index){\n    if (row.cells[index].firstElementChild.id === \"dragable_letter_fixed\"){\n        this.fixedVerticalLetters.push(row.cells[index].innerText) \n        this.fixedVerticalCells.push(row.rowIndex)\n\n        const newRow = row.nextElementSibling\n        if (newRow.cells[index].childElementCount == 1){\n            this.checkIfLettersBelow(newRow, index)\n        }\n    } \n    for (var i = 0; i < this.fixedVerticalCells.length; i++)\n    this.wordObjVertical[this.fixedVerticalCells[i]] = this.fixedVerticalLetters[i];\n}\n\nWord.prototype.createHorizontalWordObject = function(){\n\n    for (var i = 0; i < this.cellIndexArray.length; i++)\n    this.wordObjHorizontal[this.cellIndexArray[i]] = this.letterArray[i];\n    this.wordToString()\n}\n\nWord.prototype.createVerticalWordObject = function(){\n    for (var i = 0; i < this.rowIndexArray.length; i++)\n    this.wordObjVertical[this.rowIndexArray[i]] = this.letterArray[i];\n    this.wordToString()\n}\n\nWord.prototype.wordToString = function() {\n    this.HorizontalWord = Object.values(this.wordObjHorizontal).join('').toLowerCase()\n    this.VerticalWord = Object.values(this.wordObjVertical).join('').toLowerCase()\n   \n    this.wordsArray = []\n\n    if (this.HorizontalWord.length > 0 && this.VerticalWord.length > 0){\n        this.wordsArray.push(this.HorizontalWord)\n        this.wordsArray.push(this.VerticalWord)\n    } else if (this.HorizontalWord.length > 0){\n        this.wordsArray.push(this.HorizontalWord)\n    } else if (this.VerticalWord.length > 0){\n        this.wordsArray.push(this.VerticalWord)\n    }\n\n    this.checkWord(this.wordsArray)\n\n    console.log('WORDS', this.wordsArray)\n}\n\nWord.prototype.checkWord = function(wordArray){\n    wordArray.forEach((word)=>{\n        let wordToCheck = {word: word}\n        this.request.post(wordToCheck)\n        .then( (outcome) => {\n            console.log(\"Hello\", outcome);\n        })\n    })\n    \n}\n\nmodule.exports = Word;\n\n//# sourceURL=webpack:///./client/src/models/word.js?");

/***/ }),

/***/ "./client/src/views/player_options_view.js":
/*!*************************************************!*\
  !*** ./client/src/views/player_options_view.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst PlayerOptionsView = function(container){\n    this.container = container\n}\n\nPlayerOptionsView.prototype.bindEvents = function(){\n\n    PubSub.subscribe('StartGame:play-game-pushed' , (event)=> {\n        this.startGameRender()\n    })\n  \n}\n\nPlayerOptionsView.prototype.startGameRender = function(){\n        this.container.innerHTML = ''\n\n        submitWordButton = document.createElement('button')\n        submitWordButton.id = \"submit_word\"\n        submitWordButton.textContent = \"Submit Word\"\n        this.container.appendChild(submitWordButton)\n\n        swapTilesButton = document.createElement('button')\n        swapTilesButton.id = \"swap_tiles\"\n        swapTilesButton.textContent = \"Swap Tiles\"\n        this.container.appendChild(swapTilesButton)\n\n        passButton = document.createElement('button')\n        passButton.id = \"pass\"\n        passButton.textContent = \"Pass\"\n        this.container.appendChild(passButton)\n}\n\nmodule.exports = PlayerOptionsView\n\n\n\n//# sourceURL=webpack:///./client/src/views/player_options_view.js?");

/***/ }),

/***/ "./client/src/views/tile_rack_view.js":
/*!********************************************!*\
  !*** ./client/src/views/tile_rack_view.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst TileRacKView = function(container){\n    this.container = container;\n}\n\nTileRacKView.prototype.bindEvents = function(){\n    this.renderTileRack();\n    PubSub.subscribe('Bag:random-tiles', (event) =>{\n        const tiles = event.detail;\n        this.populateTileRack(tiles);\n        \n    })\n}\n\nTileRacKView.prototype.renderTileRack = function(){\n\n    const tileTable = document.createElement('table');\n    tileTable.id = \"tile_table\";\n    const tableRow = document.createElement('tr');\n    tileTable.appendChild(tableRow);\n    this.createTileSpots(tableRow);\n    this.container.appendChild(tileTable);\n}\n\nTileRacKView.prototype.createTileSpots = function(tableRow){\n    for (let index = 0; index < 7; index++) {\n        const tableSlot = document.createElement('td');\n        tableSlot.classList.add('tile');\n        tableRow.appendChild(tableSlot);\n    }\n}\n\nTileRacKView.prototype.populateTileRack = function(tiles){\n    const tileRack = document.querySelector('#tile_table');\n    const cellsArray = tileRack.rows[0].cells;\n    const newTiles = [];\n    for (let i = 0; i < 7; i++) {\n        const tile = document.createElement('h2');\n        tile.textContent = tiles[i].letter;\n        tile.id = 'dragable_letter';\n        tile.draggable = true;\n        cellsArray[i].appendChild(tile);\n    }\n    for (let i = 7; i < tiles.length; i++) {\n        newTiles.push(tiles[i]);\n    }\n    PubSub.publish('TileRackView:tiles-removed-from-bag', newTiles)\n}\n\n\n\n\nmodule.exports = TileRacKView;\n\n//# sourceURL=webpack:///./client/src/views/tile_rack_view.js?");

/***/ })

/******/ });