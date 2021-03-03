// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Turn = ({ turn = 'Vous' }) => (
  <div className="turn">Prochain joueur : {turn}</div>
);

Turn.propTypes = {
  turn: PropTypes.string.isRequired,
};

// == Export
export default Turn;
