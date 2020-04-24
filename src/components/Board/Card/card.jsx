import React from 'react'

import cobWeb from '../../../Assets/cobWeb.png';
import start from '../../../Assets/start.png';


const Card = () => {
  return (
    <div className='card'>
      <div className='card-back card-face'>
        <img className="cob-web cob-web-top-left" src={cobWeb} alt = 'borde'></img>
        <img className="cob-web cob-web-top-right" src={cobWeb} alt = 'borde'></img>
        <img className="cob-web cob-web-bottom-left" src={cobWeb} alt = 'borde'></img>
        <img className="cob-web cob-web-bottom-right" src={cobWeb} alt = 'borde'></img>
        <img
        className='start' src={start} alt = 'start'>
        </img>

      </div>

      <div className="card-front card-face">
        <img
          className="card-value"
          src="http://www.serebii.net/pokemongo/pokemon/001.png"
          alt = 'card'
        >
        </img>
      </div>
    </div>
  )
}


export default Card;
