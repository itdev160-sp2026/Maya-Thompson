//Value and onSquareClick are props passed into the Square function from the Board component
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}


// xIsNext, squares, and onPlay are all props passed in from the Game component.
function Board({ xIsNext, squares, onPlay }) {
  //The handle click function handles what happens when a square is clicked on
  function handleClick(i) {
  /*This prematurely ends the function if the square already has a x or o in it or
    a winner is declared*/
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    /* squares.slice() method makes a copy of the current array which is useful 
       in the handlePlay function in the Game component.
       nextSquears then checks whose turn it is currently
       onPlay then connects to handlePlay in the Game component */
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  //calculateWinner is defined below
  //Status allows text to be displayed with the information of the game's current status
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
/* Each of these Square components values change when onSquareClick is triggered
This causes the handeClick function to trigger, each of these triggers are based
on the index of the square that was clicked.
*/
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}



function Game() {
  /* These useState() functions help save the current state of the history of the game
      as well as the current move*/
  const [history, setHistory] = React.useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = React.useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  // This function updates the game's state and logs the history of the moves.
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  //This function helps for when the player goes to a past move
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  /* .map array method turns the history array into buttons that the players
  can click on to return to a past move and keep play from there or go to another
  move*/
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button
          className={move === currentMove ? "current-move" : ""}
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <h2>Move History</h2>
        <ol className="moves-list">{moves}</ol>
      </div>
    </div>
  );
}

//This function declares the winner based on a set of possible winning moves
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// Render the Game component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);