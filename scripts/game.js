let game = {
    currentGame: [],
    score: 0,
    choices: ["button1", "button2", "button3", "button4"],
    playerMoves: [],
};


function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
};

function showScore() {
    document.getElementById("score").innerText = game.score;
}

module.exports = {
    // curly braces used as more than one function to be exported
    game,
    newGame,
    showScore,
};