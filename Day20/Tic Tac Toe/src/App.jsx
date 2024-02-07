import { useEffect, useState } from 'react';
import './App.css';

const GAME_RESULTS = {
  X: 'winner is X',
  O: 'winner is O',
  tie: 'Tie',
  inProgress: '',
};

function App() {
  const [currPlayer, setCurrPlayer] = useState('X');
  const [result, setResult] = useState({
    over: false,
    message: GAME_RESULTS.inProgress,
  });
  const [game, setGame] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  useEffect(() => {
    checkWinner();

    setCurrPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
  }, [game]);

  const checkWinner = () => {
    for (const row of game) {
      if (row[0] !== '' && row[0] === row[1] && row[1] === row[2]) {
        setResult({
          over: true,
          message: GAME_RESULTS[currPlayer],
        });
        return;
      }
    }
    //column check
    //diagonal
  };

  const handleClick = (x, y) => {
    if (result.over) return;

    if (game[x][y] !== '') {
      return;
    }
    setGame((prev) => {
      const temp = [...prev];
      temp[x][y] = currPlayer;
      return temp;
    });
  };

  return (
    <div className="gameboard">
      <h3>Current player: {currPlayer}</h3>
      {result.over && <div>{result.message}</div>}
      {game.map((row, i) => {
        return (
          <div className="row">
            {row.map((cell, j) => (
              <button
                className="cell"
                // disabled={game[i][j] !== ''}
                onClick={() => handleClick(i, j)}
              >
                {cell}
              </button>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default App;
