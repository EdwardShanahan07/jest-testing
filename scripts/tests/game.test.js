/**
 * @jest-environment jsdom
 */

const { game } = require("../game");

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
});
