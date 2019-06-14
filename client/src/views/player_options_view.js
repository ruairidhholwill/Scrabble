const PubSub = require('../helpers/pub_sub.js')

const PlayerOptionsView = function(container){
    this.container = container
}

PlayerOptionsView.prototype.bindEvents = function(){

    PubSub.subscribe('StartGame:play-game-pushed' , (event)=> {
        this.startGameRender()
    })
  
}

PlayerOptionsView.prototype.startGameRender = function(){
        this.container.innerHTML = ''

        submitWordButton = document.createElement('button')
        submitWordButton.id = "submit_word"
        submitWordButton.textContent = "Submit Word"
        this.container.appendChild(submitWordButton)

        swapTilesButton = document.createElement('button')
        swapTilesButton.id = "swap_tiles"
        swapTilesButton.textContent = "Swap Tiles"
        this.container.appendChild(swapTilesButton)

        passButton = document.createElement('button')
        passButton.id = "pass"
        passButton.textContent = "Pass"
        this.container.appendChild(passButton)
}

module.exports = PlayerOptionsView

