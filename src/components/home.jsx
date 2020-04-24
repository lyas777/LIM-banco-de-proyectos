import React from 'react';

import Header from './Header/header'
import Start from './Start/start'
import GameOver from './GameOver/gameOver'
import Victory from './Victory/victory'
import Board from './Board/board'

const Home = () => {
  // const [flipped , setFlipped] = useState([]);
  // const handleClick = (id) => setFlipped([...flipped, id]);

  return (
    <div>
     <Header />
     <Start />
     <GameOver />
     <Victory />
     <Board />
    </div>
  );

}

export default Home;
