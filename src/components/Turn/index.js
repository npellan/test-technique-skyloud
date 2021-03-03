// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Turn = ({ xTurn }) => (
  <div className="turn">Prochain joueur : {xTurn ? 'X' : 'O'}</div>
);

Turn.propTypes = {
  xTurn: PropTypes.bool.isRequired,
};

// == Export
export default Turn;
