import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css'
import formatDate from '../helpers/format-date'
import formatType from '../helpers/format-type'

type Props = {
  pokemon: Pokemon
  borderColor?: string // This Props is optional
}

// Default value for optional broderColor
// in case its not precised by parent component
const PokemonCard: FunctionComponent<Props> = ({ pokemon, borderColor = '#009688' }) => {

  const [color, setColor] = useState<string>()

  const showBorder = () => {
    setColor(borderColor)
  }

  const hideBorder = () => {
    setColor('#f5f5f5')
  }

  const getPokemonName = (name: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(`${name}`, e)
  }

  return (
    <div className="col m6 l4"
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

            <p><b>{pokemon.name}</b></p>
            {/* <p><small>{pokemon.created.toString()}</small></p> */}

            <p>{formatDate(pokemon.created)}</p>

            <ul>
              {pokemon.types.map(type => (<li key={type} className={formatType(type)}>{type}</li>))}
            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}
export default PokemonCard;