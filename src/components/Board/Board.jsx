import React from 'react'
import Info from './Info/Info'
import Card from './Card/Card'

const Board = () => {
  const array= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  const listArray = array.map((obj, index) => <Card key = {index} data = {obj}/>
  );
  return(
    <div className ='game-container'>
      <Info />
      {listArray}
    </div>
  );
}
export default Board;
