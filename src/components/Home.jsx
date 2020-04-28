import React, {useEffect, useState} from 'react';

import Header from './Header/Header'
import Start from './Start/Start'
import GameOver from './GameOver/GameOver'
import Victory from './Victory/victory'
import Board from './Board/Board'
import Footer from './footer/Footer'

import {dataPokemons} from '../utils/pokemons'



const Home = () => {
  const [cards, setCards] = useState([]);

 // const [flipped , setFlipped] = useState([]);
  //const handleClick = (id) => setFlipped([...flipped, id]);

useEffect(() => {
  console.log('hola');
  dataPokemons(setCards);
}, []);

  return (
    <div>
     <Header />
     <Start />
     <GameOver />
     <Victory />
     <Board cards = {cards}/>
     <Footer />
    </div>
  );

}

export default Home;
