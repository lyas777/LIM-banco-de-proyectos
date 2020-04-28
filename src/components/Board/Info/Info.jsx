import React from 'react'

const Info = () => {
  return (
    <div className="game-info-container">
      <div className="game-info">
        Time: <span id="time-remaining">100</span>
      </div>
      <div className="game-info">
        Flips: <span id="flips">0</span>
      </div>
    </div>
  )
}
export default Info;
