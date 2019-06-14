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
    this.previousCellIndex = []
    this.nextLettersArray = []
    this.nextCellIndex = []
}

Word.prototype.bindEvents = function(){
    PubSub.subscribe('Tile:letter-placed', (event)=>{
        this.letterArray.push(event.detail)
    })

    PubSub.subscribe('Tile:letter-row-index', (event)=>{
        this.rowIndexArray.push(event.detail)
    })

    PubSub.subscribe('Tile:letter-cell-index', (event)=>{
        this.cellIndexArray.push(event.detail)
        if (this.rowIndexArray.every( index => index === this.rowIndexArray[0])){
            this.createHorizontalWordObject()
        } else {
            this.createVerticalWordObject()
        }
    })

    PubSub.subscribe('Tile:dragged-detail', (dragged)=>{
        const indexOfCell = dragged.detail.offsetParent.cellIndex
        
        if ((dragged.detail.offsetParent.previousElementSibling.childElementCount == 1) && (dragged.detail.offsetParent.previousElementSibling.firstElementChild.id === "dragable_letter_fixed")){
            this.checkIfAnyPreviousLettersHorizontal(dragged.detail)
        } else if (dragged.detail.offsetParent.nextElementSibling.childElementCount == 1){
            this.checkIfAnyLettersAfterWordHorizontal(dragged.detail)
        } else if ((dragged.detail.offsetParent.parentNode.previousElementSibling.cells[indexOfCell]) && (dragged.detail.offsetParent.parentNode.previousElementSibling.cells[indexOfCell].firstElementChild.id === "dragable_letter_fixed")){
            this.checkIfAnyPreviousLettersVertical(dragged.detail)
        } else if (dragged.detail.offsetParent.parentNode.nextElementSibling.cells[indexOfCell]){
            this.checkIfAnyLettersAfterWordVertical(dragged.detail)
        }
    })
    
}

Word.prototype.createHorizontalWordObject = function(){
    for (var i = 0; i < this.cellIndexArray.length; i++)
    this.wordObj[this.cellIndexArray[i]] = this.letterArray[i];
    this.wordToString()
}

Word.prototype.createVerticalWordObject = function(){
    for (var i = 0; i < this.rowIndexArray.length; i++)
    this.wordObj[this.rowIndexArray[i]] = this.letterArray[i];
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

Word.prototype.checkIfAnyPreviousLettersHorizontal = function(dragged){
    if (dragged.offsetParent.previousElementSibling.firstElementChild.id === "dragable_letter_fixed") {
        this.previousLettersArray.push(dragged.parentElement.previousElementSibling.innerText)
        this.previousCellIndex.push(dragged.offsetParent.previousElementSibling.cellIndex)
        const newElement = dragged.offsetParent.previousElementSibling.previousElementSibling
        if (newElement.childElementCount == 1){
        this.checkForMorePreviousLettersHorizontal(newElement)
        }
    }
}

Word.prototype.checkForMorePreviousLettersHorizontal = function(cell){
    if (cell.firstElementChild.id === "dragable_letter_fixed"){
        this.previousLettersArray.push(cell.firstElementChild.innerText)
        this.previousCellIndex.push(cell.cellIndex)
        const newCell = cell.previousElementSibling;
        if (newCell.childElementCount == 1){
            this.checkForMorePreviousLettersHorizontal(newCell)
        }
    }
    for (var i = 0; i < this.previousCellIndex.length; i++)
    this.wordObj[this.previousCellIndex[i]] = this.previousLettersArray[i];
}

Word.prototype.checkIfAnyPreviousLettersVertical = function(dragged){

}

Word.prototype.checkIfAnyLettersAfterWordHorizontal = function(dragged){
    if (dragged.offsetParent.nextElementSibling.firstElementChild.id === "dragable_letter_fixed") {
        this.nextLettersArray.push(dragged.parentElement.nextElementSibling.innerText)
        this.nextCellIndex.push(dragged.offsetParent.nextElementSibling.cellIndex)
        const newElement = dragged.offsetParent.nextElementSibling.nextElementSibling
        if (newElement.childElementCount == 1){
            this.checkForMoreFollowingLettersHorizontal(newElement)
        }
    }       
}

Word.prototype.checkForMoreFollowingLettersHorizontal = function(cell){
    if (cell.firstElementChild.id === "dragable_letter_fixed"){
        this.nextLettersArray.push(cell.firstElementChild.innerText)
        this.nextCellIndex.push(cell.cellIndex)
        const newCell = cell.nextElementSibling;
        if (newCell.childElementCount == 1){
            this.checkForMoreFollowingLettersHorizontal(newCell)
        }
    }
    for (var i = 0; i < this.nextCellIndex.length; i++)
    this.wordObj[this.nextCellIndex[i]] = this.nextLettersArray[i];
}

Word.prototype.wordToString = function() {
    this.wordArray = Object.values(this.wordObj)
    this.word = this.wordArray.join('').toLowerCase()

    console.log(this.word)
    // if (word is true){
    //     publish word to scoreboard
    // } else {
    //     reset tiles
    // }
}

module.exports = Word;