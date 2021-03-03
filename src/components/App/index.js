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
  const [turn, setTurn] = useState('X');
  const [yourScore, setYourScore] = useState(0);
  const [hisScore, setHisScore] = useState(0);
  const [squareContent, setSquareContent] = useState('');

  const handleClick = (value) => {
    if (turn === 'X') {
      setSquareContent('X');
      setTurn('O');
    }
    if (turn === 'O') {
      setSquareContent('O');
      setTurn('X');
    }
  };

  return (
    <div className="app">
      <h1 className="app__title">Tic-Tac-Toe</h1>
      <Squares onClick={handleClick} value={squareContent} />
      <Button />
      <Turn
        turn={turn}
      />
      <Scores
        yourScore={yourScore}
        hisScore={hisScore}
      />
    </div>
  );
};

// == Export
export default App;
