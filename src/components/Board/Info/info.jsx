import React from 'react'

const Info = () => {
  return (
    <div className='game-info-contaniner'>
      <div className='game-info'>
        Tiempo
        <span id='time-remaining'>100</span>
      </div>
      <div className='game-info'>
        Intentos
          <span id="flips">0</span>
      </div>
    </div>
  )
}
export default Info;
