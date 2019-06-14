const Bag = require('./models/bag.js')
const Player = require('./models/player.js')
const Tile = require('./models/tile.js')
const Word = require('./models/word.js');
const TileRackView = require('./views/tile_rack_view.js');
const Board = require('./models/board.js')
const StartGame = require('./models/start_game.js')
const PlayerOptionsView = require('./views/player_options_view.js')
const TurnView = require('./views/turn_view.js');
const ScoreBoardView = require('./views/scoreboard_view.js');

document.addEventListener('DOMContentLoaded', () => {

    const scoreBoard = document.querySelector('#score_board');
    const scoreBoardView = new ScoreBoardView(scoreBoard);
    scoreBoardView.bindEvents();

    const turnView = new TurnView();
    turnView.bindEvents();

    const dragElement = document.getElementById("#dragable_letter")
    const tile = new Tile(dragElement)
    tile.bindEvents();

    const tileRackElement = document.querySelector("#tile_rack")
    const tileRackView = new TileRackView(tileRackElement);
    tileRackView.bindEvents();

    const player = new Player(name)
    player.bindEvents();

    const playerOptionsElement = document.querySelector('#player_options')

    const playerOptionsView = new PlayerOptionsView(playerOptionsElement)
    playerOptionsView.bindEvents()

    const startGame = new StartGame(playerOptionsElement)
    startGame.listenForStart()

    const url = 'http://localhost:3000/api/scrabble';
    const bag = new Bag(url);
    bag.getData();
    // bag.bindEvents();

    const wordUrl = 'http://localhost:3000/api/scrabblewords';
    const word = new Word(wordUrl);
    word.checkWord();

    
})




