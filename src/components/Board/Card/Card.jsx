import React from 'react'

import cobWeb from '../../../Assets/cobWeb.svg';
import start from '../../../Assets/start.png';


const Card = ({data}) => {
  return (
    <div className='card'>
      <div className='card-back card-face'>
        <img className="cob-web cob-web-top-left" src={cobWeb} alt='borde'></img>
        <img className="cob-web cob-web-bottom-right" src={cobWeb} alt='borde'></img>
        <img
          className='start' src={start} alt='start'>
        </img>
      </div>
      <div className="card-front card-face">
        <img
          className="card-value"
          src= {`${data}`}
          alt='card'
        >
        </img>
      </div>
    </div>
  )
}

export default Card;
