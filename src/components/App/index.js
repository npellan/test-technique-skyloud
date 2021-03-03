// == Import npm
import React, { useEffect, useState } from 'react';

// == Import
import './styles.scss';

import Squares from 'src/components/Squares';
import Button from 'src/components/Button';
import Turn from 'src/components/Turn';
import Scores from 'src/components/Scores';

import { calculateWinner } from '../../selectors/winner';

// == Composant
const App = () => {
  const [start, setStart] = useState(false);
  const [squares, setSquares] = useState(['', '', '', '', '💪', '', '', '', '']);
  const [xTurn, setXTurn] = useState(true);
  const [yourScore, setYourScore] = useState(0);
  const [hisScore, setHisScore] = useState(0);
  const winner = calculateWinner(squares);

  /**
   * Lorsque l'utilisateur clique sur le bouton "Commencer",
   * on initialise une grille vide, on la rend cliquable et on fait apparaitre les infos du jeu
   */
  const startGame = () => {
    setSquares(Array(9).fill(null));
    setStart(true);
  };

  /**
   * Fonction déclenchée au clic sur l'une des cases
   * Elle parcourt le tableau de cases et ajoute le pion du joueur dont c'est le tour
   */
  const handleClick = (i) => {
    const squaresCopy = [...squares];
    // Si la case "Commencer" n'a pas été cochée, on arrête la fonction
    if (!start) return;
    // Si la case est déjà occupée, on arrête la fonction
    if (squaresCopy[i]) return;
    // Sinon, on affiche 'X' ou 'O' dans la case sélectionnée suivant l'ordre du tour
    squaresCopy[i] = xTurn ? 'X' : 'O';
    // On "reconstruit" le tableau avec sa nouvelle valeur
    setSquares(squaresCopy);
    // Le tour passe à l'autre joueur
    setXTurn(!xTurn);
  };

  /**
   * Fonction déclenchée par le useEffect qui vérifie si l'un des joueurs a gagné,
   * Le cas échéant, on augmente son score
   */
  const winPoint = () => {
    if (winner) {
      if (winner === 'X') {
        const yourNewScore = yourScore + 1;
        setYourScore(yourNewScore);
      }
      else if (winner === 'O') {
        const hisNewScore = hisScore + 1;
        setHisScore(hisNewScore);
      }
    }
  };

  useEffect(() => {
    winPoint();
  }, [squares]);

  return (
    <div className="app">
      <h1 className="app__title">Tic-Tac-Toe</h1>
      {!start && (
        <Button onClick={startGame} />
      )}
      <Squares squares={squares} onClick={handleClick} />
      {start && (
      <>
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
