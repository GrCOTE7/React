import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';

const PokemonsList: FunctionComponent = () => {
  const [pokemons] = useState<Pokemon[]>(POKEMONS);

  const getPokemonName = (name: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(`${name}`)
  }

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <h3>Il y a {pokemons.length} pokemons dans le Pokédex :</h3><br />
        <div className="row">
          {pokemons.map(({ id, name, picture, created }, index) => (
            <div className="col s6 m4"
              key={id}
              onClick={(e) => getPokemonName(name, e)}
            >
              <div className="card horizontal">
                <div className="card-image">
                  <img src={picture} alt={name} />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>{name}</p>
                    <p><small>{created.toString()}</small></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PokemonsList;