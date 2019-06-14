const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js')



const Word = function(url){
    this.url = url;
    this.request = new RequestHelper(this.url);
    this.letterArray = []
    this.cellIndexArray = []
    this.rowIndexArray = []
    this.wordObj = {}
    this.wordArray = []
    this.previousLettersArray = []
}

Word.prototype.bindEvents = function(){
    PubSub.subscribe('Tile:letter-placed', (event)=>{
        this.letterArray.push(event.detail)
        // console.log(this.letterArray)
    })

    PubSub.subscribe('Tile:letter-row-index', (event)=>{
        this.rowIndexArray.push(event.detail)
        // console.log(this.rowIndexArray)
    })

    PubSub.subscribe('Tile:letter-cell-index', (event)=>{
        this.cellIndexArray.push(event.detail)
        // console.log(this.cellIndexArray)
        if (this.rowIndexArray.every( index => index === this.rowIndexArray[0])){
            this.createHorizontalWordObject()
        } else {
            this.createVerticalWordObject()
        }
    })

    PubSub.subscribe('Tile:dragged-detail', (dragged)=>{
        this.checkIfAnyPreviousLetters(dragged.detail)
    })
    
}

Word.prototype.createHorizontalWordObject = function(){
    for (var i = 0; i < this.cellIndexArray.length; i++)
    this.wordObj[this.cellIndexArray[i]] = this.letterArray[i];
    // console.log(this.wordObj)
    this.wordToString()
}

Word.prototype.createVerticalWordObject = function(){
    for (var i = 0; i < this.rowIndexArray.length; i++)
    this.wordObj[this.rowIndexArray[i]] = this.letterArray[i];
    
    // console.log(this.wordObj)
    this.wordToString()
}

const word = "hello";

const wordToCheck = {word: word}

Word.prototype.checkWord = function(){
    this.request.post(wordToCheck)
        .then( (outcome) => {
            console.log("Hello", outcome);
        })
}

Word.prototype.checkIfAnyPreviousLetters = function(dragged){
    if (dragged.offsetParent.previousElementSibling.firstElementChild.id === "dragable_letter_fixed") {
        this.previousLettersArray.push(dragged.parentElement.previousElementSibling.innerText)
        console.log('drag', this.previousLettersArray)
        const newElement = dragged.offsetParent.previousElementSibling
        this.checkForMorePreviousLetters(newElement)
    }
}

Word.prototype.checkForMorePreviousLetters = function(cell){
    if (cell.previousElementSibling.firstElementChild.id === "dragable_letter_fixed"){
        this.previousLettersArray.push(cell.previousElementSibling.firstElementChild.innerText)
        console.log(this.previousLettersArray)
        const newCell = cell.previousElementSibling;
        this.checkForMorePreviousLetters(newCell)
    }
}

Word.prototype.wordToString = function() {
    this.wordArray = Object.values(this.wordObj)
    
    if (this.previousLettersArray.length != 0){
        this.previousLettersArray.forEach((letter)=>{
            this.wordArray.unshift(letter)
        })
    } 

    this.word = this.wordArray.join('').toLowerCase()

    console.log(this.word)
    // if (word is true){
    //     publish word to scoreboard
    // } else {
    //     reset tiles
    // }
}


// const word = "home"

// Word.prototype.getWords = function(){
//     this.request.post(word)
//         .then( (outcome) => {
//             console.log("Hello", outcome);
//         })
// }


module.exports = Word;