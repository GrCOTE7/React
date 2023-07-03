import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
import PokemonCard from '../components/pokemonCard';

const PokemonsList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    setPokemons(POKEMONS)
  }, [])

  const getPokemonName = (name: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(`${name}`)
  }

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <h3>Il y a {pokemons.length} pokemons dans le Pokédex :</h3><br />
        <div className="row">
          {pokemons.map(pokemon => (
            <div className="col 
            s6 m4"
              key={pokemon.id}
              onClick={(e) => getPokemonName(pokemon.name, e)}
            >
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PokemonsList;