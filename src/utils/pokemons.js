//instalar npm i --save lodash.shufle;
import shuffle from "lodash.shuffle";

// función que puede utilziarse para seleccionar niveles por niveles y selección random de pokemons
const randomCards = (array, numberCards) => {

  let cards = [];
  while(cards.length < numberCards){
    const index = Math.floor(Math.random() * array.length);
    const card = array.splice(index, 1)[0];
    cards.push(card);
  }
  return cards;
}

// funcion para traer data y asignación de indices unicos
export const dataPokemons = (cards) => {
    fetch('https://raw.githubusercontent.com/lyas777/LIM011-data-lovers/lyas/src/data/pokemon/pokemon.json')
    .then(response => response.json())
    .then(response =>
      {
      const newArray = [];
      response.pokemon.forEach(element => {
        const pokemon = {
          name: element.name,
          img: element.img,
          type: element.type
        }
        newArray.push(pokemon);
      });

      // aqui se da indices unicos a cada objeto
      let id =0;
      const pokemons = randomCards(newArray, 9).reduce((acc, pokemon) => {
        acc.push({
          id: id++,
          pokemon
        });
        acc.push({
          id: id++,
          pokemon
        })
        return acc;
      }, []);
      console.log(shuffle(pokemons));
      return cards(shuffle(pokemons));
    });
  };




