import React, { FunctionComponent, useState } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/moke-pokemon';

const Hello: FunctionComponent = () => {
  const [pokemons] = useState<Pokemon[]>(POKEMONS);

  return (
    <div>
      <h1>Pokédex</h1>
      <p>Il y a {pokemons.length} pokemons dans le Pokedex</p><br/>
      <ul>
        {pokemons.map((element, index) => (
          <li key={index}>{index} - {element.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Hello;