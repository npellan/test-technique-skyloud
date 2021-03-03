// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import Square from './Square';

// == Composant
const Squares = ({ onClick, value }) => (
  <div className="squares">
    <Square index="1" value={value} onClick={() => onClick('1')} />
    <Square index="2" value={value} onClick={() => onClick('2')} />
    <Square index="3" value={value} onClick={() => onClick('3')} />
    <Square index="4" value={value} onClick={() => onClick('4')} />
    <Square index="5" value={value} onClick={() => onClick('5')} />
    <Square index="6" value={value} onClick={() => onClick('6')} />
    <Square index="7" value={value} onClick={() => onClick('7')} />
    <Square index="8" value={value} onClick={() => onClick('8')} />
    <Square index="9" value={value} onClick={() => onClick('9')} />
  </div>
);

// == Export
export default Squares;
