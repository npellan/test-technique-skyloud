// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import Squares from 'src/components/Squares';
import Button from 'src/components/Button';
import Turn from 'src/components/Turn';
import Scores from 'src/components/Scores';

// == Composant
const App = () => (
  <div className="app">
    <h1 className="app__title">Tic-Tac-Toe</h1>
    <Squares />
    <Button />
    <Turn />
    <Scores />
  </div>
);

// == Export
export default App;
