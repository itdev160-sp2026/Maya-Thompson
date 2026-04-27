//Activity 10: Tic-Tac-Toe with localStorage
//Demonstrates localStorage, JSON serialization, and game state persistence

console.log("=== Activity 10: Tic-Tac-Toe with localStorage ===");

// Part A
console.log("\n=== LOCALSTORAGE DEMONSTRATIONS ===");

//Sting storage
/*The first entered string, demo-string, is the key and the second, Hello localStorage,
is the value. This is what the localStorage object saves in the browser*/
localStorage.setItem("demo-string" , "Hello localStorage!");
console.log("Stored string:" , localStorage.getItem("demo-string"));

// Object storage (required JSON serialization)
/* JSON.stringify turns the demoObject const into a JSON string, which is set up as the
value of a localStrorage object, and then the const retrievedObject lets JSON.parse turn 
that JSON string into a JS object using the key of the localStorage
*/
const demoObject = { player: "X" , score: 3};
localStorage.setItem("demo-object" , JSON.stringify(demoObject));
const retrievedObject = JSON.parse(localStorage.getItem("demo-object"));
console.log("Stored object:" , retrievedObject)


//Clean up demo items
// Removes the localStorage objects using their keys
localStorage.removeItem("demo-string");
localStorage.removeItem("demo-object");
console.log("Demo items cleaned up!");

//Part B
console.log("\n === GAME STATE MANAGEMENT ===");

const STORAGE_KEY = "tictactoe-game-state";

// Sets up the state of the game
let gameState = {
  board: ["", "", "", "", "", "", "", "", ""],
  currentPlayer: "X",
  gameActive: true,
  winner: null,
  winningCombination: null,
};

// Winning combinations
const WINNING_COMBINATIONS = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal top-left to bottom-right
  [2, 4, 6], // Diagonal top-right to bottom-left
];

// Initialize new game
function initializeGame() {
  gameState = {
    board: ["", "", "", "", "", "", "", "", ""],
    currentPlayer: "X",
    gameActive: true,
    winner: null,
    winningCombination: null,
  };

  updateBoard();
  updateStatus();
  saveGameState();
  console.log("New game initialized");
}

// Make a move
function makeMove(index) {
  if (!gameState.gameActive || gameState.board[index] !== "") {
    return;
  }

  // Assigns the current player to a cell in the index based on what the click
  gameState.board[index] = gameState.currentPlayer;

  
  const result = checkWinner();
/* Checks if the winner property in gameState is not null, if so it ends the game,
sets the winner, and gives the winningCombination. But if every cell is currently full
but no winner was declared the game still ends this time in a draw. If neither of those
conditions are met then the currently player is determined.
  */
  if (result.winner) {
    gameState.gameActive = false;
    gameState.winner = result.winner;
    gameState.winningCombination = result.combination;
    console.log(`Game over! Winner: ${result.winner}`);
  } else if (gameState.board.every((cell) => cell !== "")) {
    gameState.gameActive = false;
    console.log("Game over! It's a draw");
  } else {
    gameState.currentPlayer = gameState.currentPlayer === "X" ? "O" : "X";
  }

  updateBoard();
  updateStatus();
  saveGameState();
}

// Check for winner
function checkWinner() {
  for (let combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    const board = gameState.board;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], combination: combination };
    }
  }

  return { winner: null, combination: null };
}

// Part C 
console.log("\n=== LOCALSTORAGE INTEGRATION ===");

// Saves the game state using the JSON.stringinfy we saw in the demo above
function saveGameState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
  console.log("Game state saved to localStorage");
}

// Loads the game state using the JSON.parse we saw in the demo above
function loadGameState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    gameState = JSON.parse(saved);
    console.log("Game state loaded from localStorage:", gameState);
    return true;
  }
  return false;
}

// Part D

/* This function updates the board with the div class "cell" that is defined in 
index.html and the value const. The forEach starts by removing certain class attributes
of the cell element and then uses the value const contents to adds the taken attribute to
cells that are taken. It also checks if the winning combination exists and if it includes
the cell of the current index, if it does the winning attribute is added to the cell and then
the forEach is looped.
*/
function updateBoard() {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell, index) => {
    const value = gameState.board[index];

    cell.textContent = value;
    cell.classList.remove("taken", "x", "o", "winning");

    if (value) {
      cell.classList.add("taken");
      cell.classList.add(value.toLowerCase());
    }

    if (
      gameState.winningCombination &&
      gameState.winningCombination.includes(index)
    ) {
      cell.classList.add("winning");
    }
  });
}

/* This function updates which player's turn it currently is swapping between the two
players until the winner property in gameState is no longer null or the gameActive property
of gameState is false
*/
function updateStatus() {
  const statusElement = document.getElementById("statusMessage");

  statusElement.classList.remove("winner", "draw");

  if (gameState.winner) {
    statusElement.textContent = `Player ${gameState.winner} wins! \uD83C\uDFC6`;
    statusElement.classList.add("winner");
  } else if (!gameState.gameActive) {
    statusElement.textContent = "It's a draw! \uD83E\uDD1D";
    statusElement.classList.add("draw");
  } else {
    statusElement.textContent = `Player ${gameState.currentPlayer}'s turn`;
  }
}



// Event handlers
function handleCellClick(event) {
  const cell = event.target;
  if (!cell.classList.contains("cell")) return;

  const index = parseInt(cell.getAttribute("data-index"));
  makeMove(index);
}

// Initialize application
function initializeApp() {
  console.log("Initializing Tic-Tac-Toe application...");

  const hasGameState = loadGameState();

  if (!hasGameState) {
    initializeGame();
  } else {
    updateBoard();
    updateStatus();
  }

  // Set up event listeners
  document
    .getElementById("gameBoard")
    .addEventListener("click", handleCellClick);
  document
    .getElementById("newGameBtn")
    .addEventListener("click", initializeGame);

  console.log("Tic-Tac-Toe application initialized successfully!");
}

// Start the application
initializeApp();
