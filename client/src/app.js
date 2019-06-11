const Bag = require('./models/bag.js')
const Player = require('./models/player.js')
const Board = require('./models/board.js')

document.addEventListener('DOMContentLoaded', () => {

    const dragElement = document.getElementById("#dragable_letter")
    const board = new Board(dragElement)
    board.bindEvents();


    const player = new Player(name)
    player.bindEvents();

    const url = 'http://localhost:3000/api/scrabble';
    const bag = new Bag(url);
    bag.getData();
    // bag.bindEvents();
})




