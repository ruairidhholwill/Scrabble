const Bag = require('./models/bag.js')
const Player = require('./models/player.js')
const Word = require('./models/word.js');

document.addEventListener('DOMContentLoaded', () => {

    const player = new Player(name)
    player.bindEvents();

    const url = 'http://localhost:3000/api/scrabble';
    const bag = new Bag(url);
    bag.getData();
    // bag.bindEvents();

    const wordUrl = 'http://localhost:3000/api/scrabblewords';
    const word = new Word(wordUrl);
    word.getWords();
})




