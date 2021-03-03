// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Square = ({ value, onClick }) => (
  <div
    className="square"
    onClick={onClick}
  >
    {value}
  </div>
);

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

Square.defaultProps = {
  value: '',
  onClick: () => {},
};

// == Export
export default Square;
