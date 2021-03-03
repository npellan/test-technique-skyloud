// == Import npm
import React, { useState } from 'react';

// == Import
import './styles.scss';

import Squares from 'src/components/Squares';
import Button from 'src/components/Button';
import Turn from 'src/components/Turn';
import Scores from 'src/components/Scores';

// == Composant
const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');
  const [yourScore, setYourScore] = useState(0);
  const [hisScore, setHisScore] = useState(0);
  const [start, setStart] = useState(false);

  const startGame = () => {
    setStart(true);
  };

  const handleClick = (i) => {
    if (turn === 'X') {
      const squaresCopy = [...squares];
      // Si la case est déjà occupée, on arrête la fonction
      if (squaresCopy[i]) return;
      // Sinon, on affiche 'X' dans la case sélectionnée
      squaresCopy[i] = turn;
      // On "reconstruit" le tableau avec sa nouvelle valeur
      setSquares(squaresCopy);
      // Le tour passe à l'autre joueur
      setTurn('O');
    }
    else if (turn === 'O') {
      const squaresCopy = [...squares];
      if (squaresCopy[i]) return;
      squaresCopy[i] = turn;
      setSquares(squaresCopy);
      setTurn('X');
    }
  };

  return (
    <div className="app">
      <h1 className="app__title">Tic-Tac-Toe</h1>
      {!start && (
        <Button onClick={startGame} />
      )}
      {start && (
      <>
        <Squares squares={squares} onClick={handleClick} />
        <Turn
          turn={turn}
        />
        <Scores
          yourScore={yourScore}
          hisScore={hisScore}
        />
      </>
      )}
    </div>
  );
};

// == Export
export default App;
