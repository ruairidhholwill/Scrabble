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
    this.word = ''
    this.previousLettersArrayHorizontal = []
    this.previousCellIndexHorizontal = []
    this.previousLettersArrayVertical = []
    this.previousCellIndexVertical = []
    this.nextLettersArrayHorizontal = []
    this.nextCellIndex = []
    this.nextLettersArrayVertical = []
    this.nextCellIndexVertical = []
}

Word.prototype.bindEvents = function(){
    PubSub.subscribe('Tile:letter-placed', (event)=>{
        this.letterArray.push(event.detail)
    })

    PubSub.subscribe('Tile:dragged-detail', (dragged)=>{
        const indexOfCell = dragged.detail.offsetParent.cellIndex
        
        if ((dragged.detail.offsetParent.previousElementSibling.childElementCount == 1) && (dragged.detail.offsetParent.previousElementSibling.firstElementChild.id === "dragable_letter_fixed")){
            this.checkIfAnyPreviousLettersHorizontal(dragged.detail)
        } else if (dragged.detail.offsetParent.nextElementSibling.childElementCount == 1){
            this.checkIfAnyLettersAfterWordHorizontal(dragged.detail)
        } else if ((dragged.detail.offsetParent.parentNode.previousElementSibling.cells[indexOfCell].childElementCount == 1) && (dragged.detail.offsetParent.parentNode.previousElementSibling.cells[indexOfCell].firstElementChild.id === "dragable_letter_fixed")){
            this.checkIfAnyPreviousLettersVertical(dragged.detail, indexOfCell)
        } else if (dragged.detail.offsetParent.parentNode.nextElementSibling.cells[indexOfCell]){
            this.checkIfAnyLettersAfterWordVertical(dragged.detail, indexOfCell)
        }
    })

    PubSub.subscribe('Tile:letter-row-index', (event)=>{
        this.rowIndexArray.push(event.detail)
    })

    PubSub.subscribe('Tile:letter-cell-index', (event)=>{
        this.cellIndexArray.push(event.detail)
        if ((this.rowIndexArray.every( index => index === (this.rowIndexArray[0])) && (this.rowIndexArray.length !==  1)) && ((this.previousLettersArrayHorizontal.length == 0) && (this.nextLettersArrayHorizontal.length == 0))){
            this.wordObj = {}
            this.createHorizontalWordObject()
        } else if ((this.previousLettersArrayHorizontal.length >= 1) || (this.nextLettersArrayHorizontal.length >= 1)){
            this.createHorizontalWordObject()
        } else {
            this.createVerticalWordObject()
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

Word.prototype.checkWord = function(word){

    const wordToCheck = {word: word}
    this.request.post(wordToCheck)
        .then( (outcome) => {
            console.log("Hello", outcome);
        })
}

Word.prototype.checkIfAnyPreviousLettersHorizontal = function(dragged){
    if (dragged.offsetParent.previousElementSibling.firstElementChild.id === "dragable_letter_fixed") {
        this.previousLettersArrayHorizontal.push(dragged.parentElement.previousElementSibling.innerText)
        this.previousCellIndexHorizontal.push(dragged.offsetParent.previousElementSibling.cellIndex)
        const newElement = dragged.offsetParent.previousElementSibling.previousElementSibling
        if (newElement.childElementCount == 1){
        this.checkForMorePreviousLettersHorizontal(newElement)
        }
    }
    for (var i = 0; i < this.previousCellIndexHorizontal.length; i++)
    this.wordObj[this.previousCellIndexHorizontal[i]] = this.previousLettersArrayHorizontal[i];
}

Word.prototype.checkForMorePreviousLettersHorizontal = function(cell){
    if (cell.firstElementChild.id === "dragable_letter_fixed"){
        this.previousLettersArrayHorizontal.push(cell.firstElementChild.innerText)
        this.previousCellIndexHorizontal.push(cell.cellIndex)
        const newCell = cell.previousElementSibling;
        if (newCell.childElementCount == 1){
            this.checkForMorePreviousLettersHorizontal(newCell)
        }
    }
    for (var i = 0; i < this.previousCellIndexHorizontal.length; i++)
    this.wordObj[this.previousCellIndexHorizontal[i]] = this.previousLettersArrayHorizontal[i];
}

Word.prototype.checkIfAnyPreviousLettersVertical = function(dragged, index){
    if (dragged.offsetParent.parentNode.previousElementSibling.cells[index].firstElementChild.id === "dragable_letter_fixed"){
        this.previousLettersArrayVertical.push(dragged.offsetParent.parentNode.previousElementSibling.cells[index].innerText) 
        this.previousCellIndexVertical.push(dragged.offsetParent.parentNode.previousElementSibling.rowIndex)
        // this.rowIndexArray.push(dragged.offsetParent.parentNode.previousElementSibling.rowIndex)
        const newElement = dragged.offsetParent.parentNode.previousElementSibling.previousElementSibling.cells[index]
        if (newElement.childElementCount == 1){
            this.checkForMorePreviousLettersVertical(newElement, index)
        }
    } 
    for (var i = 0; i < this.previousCellIndexVertical.length; i++)
    this.wordObj[this.previousCellIndexVertical[i]] = this.previousLettersArrayVertical[i];
}

Word.prototype.checkForMorePreviousLettersVertical = function(cell, index){
    if (cell.firstElementChild.id === "dragable_letter_fixed"){
        this.previousLettersArrayVertical.push(cell.firstElementChild.innerText)
        this.previousCellIndexVertical.push(cell.parentNode.rowIndex)
        // this.rowIndexArray.push(cell.parentNode.rowIndex)
        const newCell = cell.parentNode.previousElementSibling.cells[index];
        if (newCell.childElementCount == 1){
            this.checkForMorePreviousLettersVertical(newCell, index)
        }
    }
    for (var i = 0; i < this.previousCellIndexVertical.length; i++)
    this.wordObj[this.previousCellIndexVertical[i]] = this.previousLettersArrayVertical[i];
}

Word.prototype.checkIfAnyLettersAfterWordHorizontal = function(dragged){
    if (dragged.offsetParent.nextElementSibling.firstElementChild.id === "dragable_letter_fixed") {
        this.nextLettersArrayHorizontal.push(dragged.parentElement.nextElementSibling.innerText)
        this.nextCellIndex.push(dragged.offsetParent.nextElementSibling.cellIndex)
        const newElement = dragged.offsetParent.nextElementSibling.nextElementSibling
        if (newElement.childElementCount == 1){
            this.checkForMoreFollowingLettersHorizontal(newElement)
        }
    }  
    for (var i = 0; i < this.nextCellIndex.length; i++)
    this.wordObj[this.nextCellIndex[i]] = this.nextLettersArrayHorizontal[i];     
}

Word.prototype.checkForMoreFollowingLettersHorizontal = function(cell){
    if (cell.firstElementChild.id === "dragable_letter_fixed"){
        this.nextLettersArrayHorizontal.push(cell.firstElementChild.innerText)
        this.nextCellIndex.push(cell.cellIndex)
        const newCell = cell.nextElementSibling;
        if (newCell.childElementCount == 1){
            this.checkForMoreFollowingLettersHorizontal(newCell)
        }
    }
    for (var i = 0; i < this.nextCellIndex.length; i++)
    this.wordObj[this.nextCellIndex[i]] = this.nextLettersArrayHorizontal[i];
}

Word.prototype.checkIfAnyLettersAfterWordVertical = function(dragged, index){
    if (dragged.offsetParent.parentNode.nextElementSibling.cells[index].firstElementChild.id === "dragable_letter_fixed"){
        this.nextLettersArrayVertical.push(dragged.offsetParent.parentNode.nextElementSibling.cells[index].innerText) 
        this.nextCellIndexVertical.push(dragged.offsetParent.parentNode.nextElementSibling.rowIndex)
        // this.rowIndexArray.push(dragged.offsetParent.parentNode.previousElementSibling.rowIndex)
        const newElement = dragged.offsetParent.parentNode.nextElementSibling.nextElementSibling.cells[index]
        if (newElement.childElementCount == 1){
            this.checkForMoreFollowingLettersVertical(newElement, index)
        }
    } 
    for (var i = 0; i < this.nextCellIndexVertical.length; i++)
    this.wordObj[this.nextCellIndexVertical[i]] = this.nextLettersArrayVertical[i];
}

Word.prototype.checkForMoreFollowingLettersVertical = function(cell, index){
    if (cell.firstElementChild.id === "dragable_letter_fixed"){
        this.nextLettersArrayVertical.push(cell.firstElementChild.innerText)
        this.nextCellIndexVertical.push(cell.parentNode.rowIndex)
        // this.rowIndexArray.push(cell.parentNode.rowIndex)
        const newCell = cell.parentNode.nextElementSibling.cells[index];
        if (newCell.childElementCount == 1){
            this.checkForMoreFollowingLettersVertical(newCell, index)
        }
    }
    for (var i = 0; i < this.nextCellIndexVertical.length; i++)
    this.wordObj[this.nextCellIndexVertical[i]] = this.nextLettersArrayVertical[i];
}

Word.prototype.wordToString = function() {
    this.wordArray = Object.values(this.wordObj)
    this.word = this.wordArray.join('').toLowerCase()

    console.log(this.word)
    this.checkWord(this.word)

    // if (word is true){
    //     publish word to scoreboard
    // } else {
    //     reset tiles
    // }
}

module.exports = Word;