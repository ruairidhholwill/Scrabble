const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const Bag = function(url) {
    this.url = url;
    this.tilesInBag = [];
}

Bag.prototype.getData = function(){
    const tiles = new RequestHelper(this.url)
    tiles.get()
        .then((tileData) => {
            this.tilesInBag = tileData
        this.randomTiles();
        })
}

Bag.prototype.randomTiles = function() {
    var counter = this.tilesInBag.length, temp, index;
    while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = this.tilesInBag[counter];
        this.tilesInBag[counter] = this.tilesInBag[index];
        this.tilesInBag[index] = temp;
    }
    PubSub.publish('Bag:random-tiles', this.tilesInBag)
    return this.tilesInBag;   
}




module.exports = Bag