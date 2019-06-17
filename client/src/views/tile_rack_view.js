const PubSub = require('../helpers/pub_sub.js');

const TileRacKView = function(container){
    this.container = container;
}

TileRacKView.prototype.bindEvents = function(){
    this.renderTileRack();
    PubSub.subscribe('Bag:random-tiles', (event) =>{
        const tiles = event.detail;
        this.populateTileRack(tiles);
        
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

TileRacKView.prototype.populateTileRack = function(tiles){
    const tileRack = document.querySelector('#tile_table');
    const cellsArray = tileRack.rows[0].cells;
    const newTiles = [];
    for (let i = 0; i < 7; i++) {
        const tile = document.createElement('div');
        tile.textContent = tiles[i].letter;
        tile.id = 'dragable_letter';
        tile.draggable = true;
        cellsArray[i].appendChild(tile);
        // const score = document.createElement('p');
        // tile.textContent = tiles[i].score;
        // tile.appendChild(score);
    }
    for (let i = 7; i < tiles.length; i++) {
        newTiles.push(tiles[i]);
    }
    PubSub.publish('TileRackView:tiles-removed-from-bag', newTiles)
}




module.exports = TileRacKView;