const PlayerOptionsView = require('../views/player_options_view.js')
const PubSub = require('../helpers/pub_sub.js')

const StartGame = function(container){
    this.container = container
}

StartGame.prototype.listenForStart = function () {
    const playGameButton = this.container.querySelector('#play_game')
    playGameButton.addEventListener('click', (event) => {
        PubSub.publish('StartGame:play-game-pushed', event)
        }
    )
}

module.exports = StartGame