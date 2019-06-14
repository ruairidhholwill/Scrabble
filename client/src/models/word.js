const RequestHelper = require('../helpers/request_helper.js');


const Word = function(url){
    this.url = url;
    this.request = new RequestHelper(this.url);
}

const word = "hello";

const wordToCheck = {word: word}

Word.prototype.checkWord = function(){
    this.request.post(wordToCheck)
        .then( (outcome) => {
            console.log("Hello", outcome);
        })
}


module.exports = Word;