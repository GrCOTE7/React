import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css'

type Props = {
  pokemon: Pokemon
  borderColor?: string // This Props is optional
}

const PokemonCard: FunctionComponent<Props> = ({ pokemon, borderColor = '#009688' }) => {

  const [color, setColor] = useState<string>()

  const showBorder = () => {
    setColor(borderColor)
  }

  const hideBorder = () => {
    setColor('#f5f5f5')
  }

  const getPokemonName = (name: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(`${name}`)
  }

  return (
    <div className="col 
            m6 l4"
      key={pokemon.id}
      onClick={(e) => getPokemonName(pokemon.name, e)}
      onMouseEnter={showBorder}
      onMouseLeave={hideBorder}
    >
      <div className="card horizontal" style={{ borderColor: color }}>
        <div className="card-image">
          <img src={pokemon.picture} alt={pokemon.name} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p><small>{pokemon.created.toString()}</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PokemonCard;