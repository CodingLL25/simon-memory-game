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
    addTurn();
};


function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    // showTurns();
}


function showScore() {
    document.getElementById("score").innerText = game.score;
}

module.exports = {
    // curly braces used as more than one function to be exported
    game,
    newGame,
    addTurn,
    showScore,
};