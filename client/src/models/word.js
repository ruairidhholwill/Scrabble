const RequestHelper = require('../helpers/request_helper.js');

const Word = function(url){
    this.url = url;
    this.request = new RequestHelper(this.url);
}

// const word = "home"

// Word.prototype.getWords = function(){
//     this.request.post()
//         .then( (outcome) => {
//             console.log("Hello", outcome);
//         })
// }





module.exports = Word;