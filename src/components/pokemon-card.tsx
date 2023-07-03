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

  const formatDate = (date: Date): string => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  const formatType = (type: string): string => {
    let color: string;

    switch (type) {
      case 'Feu':
        color = 'red lighten-1';
        break;
      case 'Eau':
        color = 'blue lighten-1';
        break;
      case 'Plante':
        color = 'green lighten-1';
        break;
      case 'Insecte':
        color = 'brown lighten-1';
        break;
      case 'Normal':
        color = 'grey lighten-3';
        break;
      case 'Vol':
        color = 'blue lighten-3';
        break;
      case 'Poison':
        color = 'deep-purple accent-1';
        break;
      case 'Fée':
        color = 'pink lighten-4';
        break;
      case 'Psy':
        color = 'deep-purple darken-2';
        break;
      case 'Electrik':
        color = 'lime accent-1';
        break;
      case 'Combat':
        color = 'deep-orange';
        break;
      default:
        color = 'grey';
        break;
    }

    return `chip ${color}`;
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