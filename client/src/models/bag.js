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
    var ctr = this.tilesInBag.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = this.tilesInBag[ctr];
        this.tilesInBag[ctr] = this.tilesInBag[index];
        this.tilesInBag[index] = temp;
    }
    console.log(this.tilesInBag);
    return this.tilesInBag;
    
}


module.exports = Bag