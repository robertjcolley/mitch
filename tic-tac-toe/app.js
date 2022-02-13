let lastMove = "O";

let board = [
  ["_", "_", "_"],
  ["_", "_", "_"],
  ["_", "_", "_"],
];

const tile = document.getElementById("tile-1");
const i = 0;

console.log(tile);

tile.addEventListener("click", () => {
  console.log("click");

  const tileToAddChildTo = document.getElementById("tile-" + (i + 1));

  if (tileToAddChildTo.children.length === 0) {
    console.log("Adding new item");
    const newNode = document.createElement("p");
    // 2. Make sure you only add one X or O to the tile
    // check to make sure event.target.children.length is equal to 0
    // const tileToAddChildTo = event.target;
    // 3. Game logic (x then o then x ...)
    if (lastMove === "O") {
      lastMove = "X";
      newNode.textContent = "X";
      // add X to board
      board[Math.floor(i / 3)][i % 3] = "X";
    } else {
      lastMove = "O";
      newNode.textContent = "O";
      // add O to board
      board[Math.floor(i / 3)][i % 3] = "O";
    }
    tileToAddChildTo.appendChild(newNode);
    console.log(board);
    // detectWin()
  }
});
