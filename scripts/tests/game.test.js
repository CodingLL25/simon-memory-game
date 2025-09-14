/**
 * @jest-environment jsdom
 */

const {
    game
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