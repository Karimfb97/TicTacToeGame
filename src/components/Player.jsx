import React from 'react';

const Player = ({ player }) => (
  <div className="player">
    Current player: <strong>{player}</strong>
  </div>
);

export default Player;