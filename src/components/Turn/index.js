// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Turn = ({ xTurn }) => (
  <div className="turn">{xTurn ? 'C\'est votre tour' : 'Votre adversaire joue'}</div>
);

Turn.propTypes = {
  xTurn: PropTypes.bool.isRequired,
};

// == Export
export default Turn;
