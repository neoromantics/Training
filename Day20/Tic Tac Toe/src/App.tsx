import "./App.css";
import { useState, useEffect, useMemo } from "react";
import Square from "./Square";
import { Patterns } from "./Patterns";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  // To make sure the useEffect is called only if the element of the board changes.
  const boardAfterMove = useMemo(() => {
    return board;
  }, [...board]);

  useEffect(() => {
    let win = checkWin();
    if (!win) {
      checkIfTie();
    }

    setPlayer(player === "X" ? "O" : "X");
  }, [boardAfterMove]);

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
      restartGame();
    }
  }, [result]);

  const chooseSquare = (square: number) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === "") {
          return player;
        }

        return val;
      })
    );
  };

  const checkWin = () => {
    let win = false;
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === "") return;

      if (currPattern.every((idx) => board[idx] === firstPlayer)) {
        setResult({ winner: player, state: "Won" });
        win = true;
      }
    });
    return win;
  };

  const checkIfTie = () => {
    if (board.every((square) => square !== "")) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            val={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            val={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            val={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            val={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            val={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            val={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            val={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
