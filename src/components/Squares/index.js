// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import Square from './Square';

// == Composant
const Squares = ({ squares, onClick }) => (
  <div className="squares">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

Squares.propTypes = {
  squares: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

// == Export
export default Squares;
