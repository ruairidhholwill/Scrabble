const PubSub = require('../helpers/pub_sub.js');

const ScoreboardView = function(container){
    this.container = container;
}

ScoreboardView.prototype.bindEvents = function(){
    PubSub.subscribe('StartGame:play-game-pushed', (event) => {

        this.populateScoreBoard();
    })
}

ScoreboardView.prototype.populateScoreBoard = function(){
    const playerOneBoard = document.createElement('table');
    playerOneBoard.id = 'table1';
    const oneRow = document.createElement('tr');
    playerOneBoard.appendChild(oneRow);
    const nameTD = document.createElement('td');
    nameTD.textContent = "Player 1: ";
    oneRow.appendChild(nameTD);
    const scoreTD = document.createElement('td');
    scoreTD.textContent = 100;
    oneRow.appendChild(scoreTD);
    this.container.appendChild(playerOneBoard);

    const playerTwoBoard = document.createElement('table');
    playerTwoBoard.id = 'table2';
    const twoRow = document.createElement('tr');
    playerTwoBoard.appendChild(twoRow);
    const name2TD = document.createElement('td');
    name2TD.textContent = "Player 2: ";
    twoRow.appendChild(name2TD);
    const Score2TD = document.createElement('td');
    Score2TD.textContent = 100;
    twoRow.appendChild(Score2TD);
    this.container.appendChild(playerTwoBoard);
}

module.exports = ScoreboardView;