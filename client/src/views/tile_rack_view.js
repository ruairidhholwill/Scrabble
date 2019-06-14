const PubSub = require('../helpers/pub_sub.js');

const TileRacKView = function(container){
    this.container = container;
}

TileRacKView.prototype.bindEvents = function(){
    this.renderTileRack();
    PubSub.subscribe('Bag:random-tiles', (event) =>{
        const tiles = event.detail;
    })
}

TileRacKView.prototype.renderTileRack = function(){

    const tileTable = document.createElement('table');
    tileTable.id = "tile_table";
    const tableRow = document.createElement('tr');
    tileTable.appendChild(tableRow);
    this.createTileSpots(tableRow);
    this.container.appendChild(tileTable);
}

TileRacKView.prototype.createTileSpots = function(tableRow){
    for (let index = 0; index < 7; index++) {
        const tableSlot = document.createElement('td');
        tableSlot.classList.add('tile');
        tableRow.appendChild(tableSlot);
    }
}




module.exports = TileRacKView;