const PubSub = require('../helpers/pub_sub.js')

const Player = function(name){
    this.name = name
    this.score = 0
    this.tileRack = []
}

Player.prototype.bindEvents = function (){
    PubSub.subscribe('Bag:random-tiles', (event) =>{
        const randomTiles = event.detail
        for (i = 0; i < 7; i++) {
            (this.tileRack.push(randomTiles[i]))
        }
        console.log(this.tileRack)
    })
}




module.exports = Player;