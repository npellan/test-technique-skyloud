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
  const [start, setStart] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [yourScore, setYourScore] = useState(0);
  const [hisScore, setHisScore] = useState(0);

  const startGame = () => {
    setStart(true);
  };

  const handleClick = (i) => {
    const squaresCopy = [...squares];
    // Si la case est déjà occupée, on arrête la fonction
    if (squaresCopy[i]) return;
    // Sinon, on affiche 'X' ou 'O' dans la case sélectionnée suivant l'ordre du tour
    squaresCopy[i] = xTurn ? 'X' : 'O';
    // On "reconstruit" le tableau avec sa nouvelle valeur
    setSquares(squaresCopy);
    // Le tour passe à l'autre joueur
    setXTurn(!xTurn);
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
          xTurn={xTurn}
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
