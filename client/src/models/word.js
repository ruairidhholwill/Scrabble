const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js')

const Word = function(url){
    this.url = url;
    this.request = new RequestHelper(this.url);
    this.letterArray = []
    this.cellIndexArray = []
    this.rowIndexArray = []
    
    this.wordObjHorizontal = {}
    this.wordObjVertical = {}
    
    this.fixedHorizontalLetters = []
    this.fixedHorizontalCells = []

    this.fixedVerticalLetters = []
    this.fixedVerticalCells = []
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
    })

    PubSub.subscribe('Tile:dragged-detail', (dragged)=>{
        const cellToLeft = dragged.detail.offsetParent.previousElementSibling
        const cellToRight = dragged.detail.offsetParent.nextElementSibling
        const rowAbove = dragged.detail.offsetParent.parentNode.previousElementSibling
        const rowBelow = dragged.detail.offsetParent.parentNode.nextElementSibling
        const indexOfCell = dragged.detail.offsetParent.cellIndex
        
        if ((cellToLeft.childElementCount == 1) && (cellToLeft.firstElementChild.id === "dragable_letter_fixed")){
            this.checkIfLettersToLeft(cellToLeft)
        } else if ((cellToRight.childElementCount == 1) && (cellToRight.firstElementChild.id === "dragable_letter_fixed")){
            this.checkIfLettersToRight(cellToRight)
        } else if ((rowAbove.cells[indexOfCell].childElementCount == 1) && (rowAbove.cells[indexOfCell].firstElementChild.id === "dragable_letter_fixed")){
            this.checkIfLettersAbove(rowAbove, indexOfCell)
        } else if (rowBelow.cells[indexOfCell].childElementCount == 1){
            this.checkIfLettersBelow(rowBelow, indexOfCell)
        }

        if ((this.rowIndexArray.every( index => index === (this.rowIndexArray[0])) && (this.rowIndexArray.length !== 1)) && (this.fixedHorizontalLetters.length == 0)){
            this.wordObjHorizontal = {}
            this.createHorizontalWordObject()
        } else if ((this.cellIndexArray.every( index => index === (this.cellIndexArray[0])) &&   (this.cellIndexArray.length !==  1)) && (this.fixedVerticalLetters.length == 0)){
            this.wordObjVertical = {}
            this.createVerticalWordObject()
        } else if ((this.fixedHorizontalLetters.length >= 1) && (this.fixedVerticalLetters.length == 0)) {
            this.createHorizontalWordObject()
        } else if ((this.fixedHorizontalLetters.length == 0) && (this.fixedVerticalLetters.length >= 1)){
            this.createVerticalWordObject()
        }
    })

}

Word.prototype.checkIfLettersToLeft = function(cell){
    if (cell.firstElementChild.id === "dragable_letter_fixed") {
        this.fixedHorizontalLetters.push(cell.innerText)
        this.fixedHorizontalCells.push(cell.cellIndex)

        const newCell = cell.previousElementSibling
        if (newCell.childElementCount == 1){
        this.checkIfLettersToLeft(newCell)
        }
    }
    for (var i = 0; i < this.fixedHorizontalCells.length; i++)
    this.wordObjHorizontal[this.fixedHorizontalCells[i]] = this.fixedHorizontalLetters[i];
}

Word.prototype.checkIfLettersToRight = function(cell){
    if (cell.firstElementChild.id === "dragable_letter_fixed") {
        this.fixedHorizontalLetters.push(cell.innerText)
        this.fixedHorizontalCells.push(cell.cellIndex)
        const newCell = cell.nextElementSibling
        if (newCell.childElementCount == 1){
            this.checkIfLettersToRight(newCell)
        }
    }  
    for (var i = 0; i < this.fixedHorizontalCells.length; i++)
    this.wordObjHorizontal[this.fixedHorizontalCells[i]] = this.fixedHorizontalLetters[i];     
}

Word.prototype.checkIfLettersAbove = function(row, index){
    if (row.cells[index].firstElementChild.id === "dragable_letter_fixed"){
        this.fixedVerticalLetters.push(row.cells[index].innerText) 
        this.fixedVerticalCells.push(row.rowIndex)

        const newRow = row.previousElementSibling
        if (newRow.cells[index].childElementCount == 1){
            this.checkIfLettersAbove(newRow, index)
        }
    } 
    for (var i = 0; i < this.fixedVerticalCells.length; i++)
    this.wordObjVertical[this.fixedVerticalCells[i]] = this.fixedVerticalLetters[i];
}

Word.prototype.checkIfLettersBelow = function(row, index){
    if (row.cells[index].firstElementChild.id === "dragable_letter_fixed"){
        this.fixedVerticalLetters.push(row.cells[index].innerText) 
        this.fixedVerticalCells.push(row.rowIndex)

        const newRow = row.nextElementSibling
        if (newRow.cells[index].childElementCount == 1){
            this.checkIfLettersBelow(newRow, index)
        }
    } 
    for (var i = 0; i < this.fixedVerticalCells.length; i++)
    this.wordObjVertical[this.fixedVerticalCells[i]] = this.fixedVerticalLetters[i];
}

Word.prototype.createHorizontalWordObject = function(){

    for (var i = 0; i < this.cellIndexArray.length; i++)
    this.wordObjHorizontal[this.cellIndexArray[i]] = this.letterArray[i];
    this.wordToString()
}

Word.prototype.createVerticalWordObject = function(){
    for (var i = 0; i < this.rowIndexArray.length; i++)
    this.wordObjVertical[this.rowIndexArray[i]] = this.letterArray[i];
    this.wordToString()
}

Word.prototype.wordToString = function() {
    this.HorizontalWord = Object.values(this.wordObjHorizontal).join('').toLowerCase()
    this.VerticalWord = Object.values(this.wordObjVertical).join('').toLowerCase()
   
    this.wordsArray = []

    if (this.HorizontalWord.length > 0 && this.VerticalWord.length > 0){
        this.wordsArray.push(this.HorizontalWord)
        this.wordsArray.push(this.VerticalWord)
    } else if (this.HorizontalWord.length > 0){
        this.wordsArray.push(this.HorizontalWord)
    } else if (this.VerticalWord.length > 0){
        this.wordsArray.push(this.VerticalWord)
    }

    this.checkWord(this.wordsArray)

    console.log('WORDS', this.wordsArray)
}

Word.prototype.checkWord = function(wordArray){
    wordArray.forEach((word)=>{
        let wordToCheck = {word: word}
        this.request.post(wordToCheck)
        .then( (outcome) => {
            console.log("Hello", outcome);
        })
    })
    
}

module.exports = Word;