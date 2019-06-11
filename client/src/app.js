const Bag = require('./models/bag.js')

document.addEventListener('DOMContentLoaded', () => {

    const url = 'http://localhost:3000/api/scrabble';
    const bag = new Bag(url);
    bag.getData();
    // bag.bindEvents();
})




