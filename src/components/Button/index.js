// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Button = ({ onClick, yourScore, hisScore }) => (
  <button type="button" className="button" onClick={() => onClick()}>
    {(yourScore >= 1 || hisScore >= 1) ? 'Recommencer' : 'Commencer' }
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// == Export
export default Button;
