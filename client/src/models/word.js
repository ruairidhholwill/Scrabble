const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js')


const Word = function(url){
    this.url = url;
    this.request = new RequestHelper(this.url);
    this.letterArray = []
    this.indexArray = []
    this.wordObj = {}
    this.word = ''
}

Word.prototype.bindEvents = function(){
    PubSub.subscribe('Tile:letter-placed', (event)=>{
        this.letterArray.push(event.detail)
        // this.wordArray.push(event.detail.attributes.parentElement.cellIndex)
        console.log(this.letterArray)
    })
    PubSub.subscribe('Tile:letter-index', (event)=>{
        this.indexArray.push(event.detail)
        // this.wordArray.push(event.detail.attributes.parentElement.cellIndex)
        console.log(this.indexArray)
        this.createWordObject()
    })
}

Word.prototype.createWordObject = function(){
    for (var i = 0; i < this.indexArray.length; i++)
    this.wordObj[this.indexArray[i]] = this.letterArray[i];
    
    console.log(this.wordObj)
    this.wordToString()
}

Word.prototype.wordToString = function() {
    this.word = Object.values(this.wordObj).join('')
    console.log(this.word)
}


// const word = "home"

// Word.prototype.getWords = function(){
//     this.request.post(word)
//         .then( (outcome) => {
//             console.log("Hello", outcome);
//         })
// }


module.exports = Word;