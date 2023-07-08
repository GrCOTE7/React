import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
import PokemonCard from '../components/pokemon-card';

const PokemonsList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/pokemons')
      .then(response => response.json())
      .then((pokemons) => {
        setPokemons(pokemons)
      })
  }, [])

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <h3>Il y a {pokemons.length} pokemons dans le Pokédex :</h3><br />
        <div className="row">
          {pokemons.map(pokemon => (

            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              borderColor={"orange"}
            />

          ))}
        </div>
      </div>
    </div>
  )
}

export default PokemonsList;