// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Scores = ({ yourScore = 0, hisScore = 0 }) => (
  <div className="scores">
    <div className="score">
      <p className="score__title">Votre score</p>
      <p className="score__number">{yourScore}</p>
    </div>
    <div className="score">
      <p className="score__title">Son score</p>
      <p className="score__number">{hisScore}</p>
    </div>
  </div>
);

Scores.propTypes = {
  turn: PropTypes.string.isRequired,
};

// == Export
export default Scores;
