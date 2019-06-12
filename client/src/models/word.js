const RequestHelper = require('../helpers/request_helper.js');
const checkWord = require('check-word'), words = checkWord();

const Word = function(url){
    this.url = url;
    this.request = new RequestHelper(this.url);
}

Word.prototype.bindEvents = function(){
    console.log(words.check('dog'));
}



module.exports = Word;