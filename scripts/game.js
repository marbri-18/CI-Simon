let game = {
    score: 0,
    currentGame: [],
    playerMove: [],
    choices: [],
}

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore()
}

function showScore () {
    document.getElementById("score").innerText = game.score;
}


module.exports = { game, newGame, showScore };