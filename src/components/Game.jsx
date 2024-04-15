import React, { useState } from 'react';
import Board from './Board';
import Player from './Player';

const Game = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleCellClick = (index) => {
    if (cells[index] || winner) return;

    const newCells = [...cells];
    newCells[index] = currentPlayer;
    setCells(newCells);

    const gameResult = checkGameResult(newCells);
    if (gameResult) {
      setWinner(gameResult);
    } else {
      setCurrentPlayer((prevPlayer) => (prevPlayer === 'X' ? 'O' : 'X'));
    }
  };

  const resetGame = () => {
    setCells(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  const checkGameResult = (cells) => {
    const winningLines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6], // diagonals
    ];

    for (const line of winningLines) {
      if (cells[line[0]] && cells[line[0]] === cells[line[1]] && cells[line[1]] === cells[line[2]]) {
        return cells[line[0]];
      }
    }

    if (!cells.includes(null)) {
      return 'draw';
    }

    return null;
  };

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <Player player={currentPlayer} />
      <Board cells={cells} onClick={handleCellClick} />
      {winner && <p>{winner === 'draw' ? 'Draw!' : `Winner: ${winner}`}</p>}
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default Game;