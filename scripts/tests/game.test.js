/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore } = require("../game");

beforeAll(() => {
  const fs = require("fs");
  const fileContents = fs.readFileSync("index.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();
});

describe("game object contains correct keys", () => {
  test("score key exist", () => {
    expect("score" in game).toBe(true);
  });

  test("currentGame key exist", () => {
    expect("currentGame" in game).toBe(true);
  });

  test("playerMoves key exist", () => {
    expect("playerMoves" in game).toBe(true);
  });

  test("choices key exist", () => {
    expect("choices" in game).toBe(true);
  });

  test("choices contain correct ids", () => {
    expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
  });
});

describe("newGame works correctly", () => {
  beforeAll(() => {
    game.score = 42;
    game.currentGame = ["button1", "button2"];
    game.playerMoves = ["button1", "button2"];
    document.getElementById("score").innerText = "42";
    newGame();
  });

  test("should reset game score to zero", () => {
    expect(game.score).toEqual(0);
  });

  test("should reset current game array", () => {
    expect(game.currentGame.length).toBe(0);
  });

  test("should reset player choices array", () => {
    expect(game.playerMoves.length).toBe(0);
  });

  test("should display 0 with the id of score", () => {
    expect(document.getElementById("score").innerText).toEqual(0);
  });
});
