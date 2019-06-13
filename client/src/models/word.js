const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js')


const Word = function(url){
    this.url = url;
    this.request = new RequestHelper(this.url);
    this.letterArray = []
    this.cellIndexArray = []
    this.rowIndexArray = []
    this.wordObj = {}
    this.word = ''
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

Word.prototype.wordToString = function() {
    this.word = Object.values(this.wordObj).join('')
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