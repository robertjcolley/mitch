const reset = document.getElementById("reset");
const container = document.getElementById("container");
let message = document.getElementById("message");
let finalMessage = document.getElementById("final-message");

// A user should be able to click on different squares to make a move.

let lastMove = "X";

// ===============================================================
// Initialize board
// ===============================================================

const initializeBoard = () => {
  // loops through child divs of the container
  for (let i = 0; i < container.childNodes.length; i++) {
    const tile = container.childNodes[i];
    // console.log(tile)
    //  event listener that creates p element for x or 0
    tile.addEventListener("click", () => {
      // if a tile has a child node, do not let it create another p element
      if (tile.childNodes.length === 0) {
        let newNode = document.createElement("p");

        //test displayed within newNode
        newNode.innerHTML = lastMove;
        // need to append new node the the correct tile
        tile.appendChild(newNode);

        checkWin();

        // now I need to make alternations between Xs and 0s
        if (lastMove === "X") {
          //add "0" to the board
          lastMove = "O";
          // newNode = "0"
          message.innerHTML = "X just picked. It is 0's turn.";
        } else {
          //add "X" back to the board
          lastMove = "X";
          // newNode =  "X"
          message.innerHTML = "O just picked. It is X's turn.";
        }
      }
    });
  }
};

// ===============================================================
// function to reset the board
// ===============================================================
const clearBoard = () => {
  const tile1 = document.getElementById("tile1");
  const tile2 = document.getElementById("tile2");
  const tile3 = document.getElementById("tile3");
  const tile4 = document.getElementById("tile4");
  const tile5 = document.getElementById("tile5");
  const tile6 = document.getElementById("tile6");
  const tile7 = document.getElementById("tile7");
  const tile8 = document.getElementById("tile8");
  const tile9 = document.getElementById("tile9");

  if (tile1.firstChild) {
    tile1.removeChild(tile1.firstChild);
  }

  // tile2, tile3, ...

  // also might want to reset lastMove, finalMessage, etc.
};

reset.addEventListener("click", clearBoard);

// ===============================================================
// check win
// ===============================================================
const checkWin = () => {
  console.log("checking for win");
  const tile1 = document.getElementById("tile1");
  const tile2 = document.getElementById("tile2");
  const tile3 = document.getElementById("tile3");
  const tile4 = document.getElementById("tile4");
  const tile5 = document.getElementById("tile5");
  const tile6 = document.getElementById("tile6");
  const tile7 = document.getElementById("tile7");
  const tile8 = document.getElementById("tile8");
  const tile9 = document.getElementById("tile9");

  // if tile1.firstChild is null (which evaluates to false in an if statement), then you can't access tile1.firstChile.innerHTML
  if (tile1.firstChild && tile2.firstChild && tile3.firstChild) {
    const value1 = tile1.firstChild.innerHTML;
    const value2 = tile2.firstChild.innerHTML;
    const value3 = tile3.firstChild.innerHTML;

    if (value1 === "X" && value2 === "X" && value3 === "X") {
      finalMessage.innerHTML = "X wins!";
      // disableTiles()
    } else if (value1 === "O" && value2 === "O" && value3 === "O") {
      finalMessage.innerHTML = "O wins!";
      // disableTiles()
    }
  }

  // More cases here
};

// ===============================================================
// disables the tiles (after a win)
// ===============================================================
const disableTiles = () => {
  const tile1 = document.getElementById("tile1");
  const tile2 = document.getElementById("tile2");
  const tile3 = document.getElementById("tile3");
  const tile4 = document.getElementById("tile4");
  const tile5 = document.getElementById("tile5");
  const tile6 = document.getElementById("tile6");
  const tile7 = document.getElementById("tile7");
  const tile8 = document.getElementById("tile8");
  const tile9 = document.getElementById("tile9");

  tile1.removeEventListener("click");
  // tile2, tile3, ...
};

// Every click will alternate between marking an X and O
// Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
// A cell should not be able to be replayed once marked.
// You should not be able to click remaining empty cells after the game is over.
// Add a reset button that will clear the contents of the board.
// Display a message to indicate which turn is about to be played.
// Detect draw conditions (ties/cat's game)
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.
