// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Scores = ({ yourScore = 0, hisScore = 0 }) => (
  <div className="scores">
    <div className="score">
      <p className="score__title">Votre score (X)</p>
      <p className="score__number">{yourScore}</p>
    </div>
    <div className="score">
      <p className="score__title">Son score (O)</p>
      <p className="score__number">{hisScore}</p>
    </div>
  </div>
);

Scores.propTypes = {
  yourScore: PropTypes.number,
  hisScore: PropTypes.number,
};

Scores.defaultProps = {
  yourScore: 0,
  hisScore: 0,
};

// == Export
export default Scores;
