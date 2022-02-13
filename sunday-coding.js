// app.js

// <div class="tile" id="tile-1" >
// <p>X</p>
// </div >

// <div id="container" >
// <div class="tile" id="tile-1" onclick="function">

// adding via onClick
// const handleClick = () => {
//   console.log('CLICK')

//   const newNode = document.createElement('p');
//   newNode.textContent = "X"
//   tile1.appendChild(newNode)
// }

// const tile1 = document.getElementById('tile-1');
// tile1.onclick = handleClick;

// ============================================================================

// click event listener on element
tile1.addEventListener("click", (event) => {
  const newNode = document.createElement("p");
  newNode.textContent = "X";
  event.target.appendChild(newNode);
});

// ============================================================================

// 1. add event listeners to all of the tiles
let lastMove = "O";
const container = document.getElementById("container"); // this is the container of the tiles

for (let i = 0; i < container.children.length; i++) {
  // might be childNodes
  const tile = container.children[i];

  tile.addEventListener("click", () => {
    const newNode = document.createElement("p");

    // 3. Game logic (x then o then x ...)
    if (lastMove === "O") {
      lastMove = "X";
      newNode.textContent = "X";
      // add X to board
    } else {
      lastMove = "O";
      newNode.textContent = "O";
      // add O to board
    }

    // 2. Make sure you only add one X or O to the tile
    // check to make sure event.target.children.length is equal to 0
    // const tileToAddChildTo = event.target;

    const tileToAddChildTo = document.getElementById("tile-" + (i + 1));

    if (tileToAddChildTo.children.length === 0) {
      tileToAddChildTo.appendChild(newNode);
      console.log(board);
      // detectWin()
    }
  });
}

// 4. Keep track of the board
// X, O, or _ for empty
let board = [
  ["_", "_", "_"],
  ["_", "_", "_"],
  ["_", "_", "_"],
];

let board = [
  ["X", "O", "_"],
  ["X", "O", "_"],
  ["X", "_", "_"],
];

let board = ["X", "O", "_", "X", "O", "_", "X", "_", "_"];

// insert into the board

const detectWin = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {}
  }
  // DO THIS!
  // board[i][j] === 'X'
  // board[1][0] === 'X'
  // board[2[0] === 'X'

  // I'd rather you don't do this - harder to understand
  const tile1 = document.getElementById("tile-1");
  const tile2 = document.getElementById("tile-2");
  const tile3 = document.getElementById("tile-3");

  if (tile1.textContent === "X") {
    if (tile2.textContent === "X") {
      if (tile3.textContent === "X") {
        return true;
      }
    }
  }
};

// 5. detect a win
// do every move

// ======================================
// instead of adding
// index.html
// <div id="container" >
//   <div id="tile-1" />
//   <div id="tile-2" />
//   <div id="tile-3" />
//   ...
// </div >

// use

// index.html
// <div id="container"></div>

// if doing it this way,
// for (let i = 0; i < 9; i++) {
//   const newTile = document.createElement('div');
//   newTile.className = 'tile-class'
//   newTile.id = 'tile-' + i;

//   container.appendChild(newTile)
// }

// 6. reset (need to add click listener to the reset button)
const reset = () => {
  board = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ];

  container.children = [];

  for (let i = 0; i < 9; i++) {
    const newTile = document.createElement("div");
    newTile.className = "tile-class";
    newTile.id = "tile-" + i;

    container.appendChild(newTile);
  }
};
