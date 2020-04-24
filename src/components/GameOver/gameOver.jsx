import React from 'react'

const GameOver = () => {
  return (
  <div className = 'overlay-text' id= 'game-over-text'>
    Game Over
    <span className = 'overlay-text-small'>
    Click to Restart
    </span>
  </div>
  )
};

export default GameOver;
