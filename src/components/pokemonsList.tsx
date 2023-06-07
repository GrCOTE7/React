import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/moke-pokemon';

const PokemonsList: FunctionComponent = () => {
  const [pokemons] = useState<Pokemon[]>(POKEMONS);

  return (
    <div>
      <h1>Pokédex</h1>
      <p>Il y a {pokemons.length} pokemons dans le Pokédex</p><br/>
      <ul>
        {pokemons.map((element, index) => (
          <li key={index}>{index+1} - {element.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default PokemonsList;