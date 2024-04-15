import React from 'react';

const Cell = ({ value, onClick }) => (
  <div className="cell" onClick={onClick}>
    {value}
  </div>
);

export default Cell;