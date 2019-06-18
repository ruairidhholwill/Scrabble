const PubSub = require('../helpers/pub_sub.js');

const Score = function(){
    this.checkedWord = []
    this.allTiles = []
    this.wordScore = 0;
}

Score.prototype.bindEvents = function(){
    PubSub.subscribe('TileRackView:player-tiles', (event) => {
        const tiles = event.detail;
    })
    PubSub.subscribe('Word:check-word', (event) => {
        const checkedWord = event.detail;
        if(checkedWord != null){
            this.checkedWord = checkedWord;
        }
        console.log('Word', this.checkedWord);
        this.getScoreOfWord(this.checkedWord, this.allTiles)
        
    })
    PubSub.subscribe('Bag:random-tiles', (event) => {
        const allTiles = event.detail;
        if(allTiles != null){
            this.allTiles = allTiles;
        }
        console.log('Tiles', this.allTiles)

    })

}


Score.prototype.getScoreOfWord = function(checkedWord, allTiles){
    const totalScore = 0;
    const wordArray = checkedWord.word.split('');
    for(letter in allTiles) {
        if(wordArray.includes(letter)){
            totalScore += letter.value
        }
    }
    // allTiles.foreach((letter) => {
    //     if(checkedWord.includes(letter)){
    //         wordScore += letter.value
    //     }
    // })
    console.log('Score', totalScore);
    
}





module.exports = Score;