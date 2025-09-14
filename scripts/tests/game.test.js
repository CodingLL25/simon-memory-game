/**
 * @jest-environment jsdom
 */

const {
    game,
    newGame,
    showScore
} = require("../game");


beforeAll(() => {
    // good to add this at the beginning, the same for each html folder, change name as needed
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.body.innerHTML = fileContents;
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true); // check it exists
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true); // check it exists
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true); // check it exists
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true); // check it exists
    });
    test("choices contains the correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);; // the choices array has the buttons
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerText = "42";
        newGame();
    })

    test("should set the game score to zero", () => {
        expect(game.score).toEqual(0); // checks if the game score has been reset to 0
    });
    test("player moves length should be equal to zero", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test("current game length should be equal to zero", () => {
        expect(game.currentGame.length).toBe(0);
    });
    test("should display 0 for the element with id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});