const PubSub = require('../helpers/pub_sub.js');

const TileRacKView = function(container){
    this.container = container;
}

TileRacKView.prototype.bindEvents = function(){
    this.renderTileRack();
}

TileRacKView.prototype.renderTileRack = function(){
    const tileTable = document.createElement('table');
    tileTable.id = "tile_table";
    // const tableRow

    // this.container.appendChild(??);
}




module.exports = TileRacKView;