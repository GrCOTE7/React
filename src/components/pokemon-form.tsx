import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Pokemon from '../models/pokemon';
import formatType from '../helpers/format-type';
import PokemonService from '../services/pokemon-service';

type Props = {
  pokemon: Pokemon
};

type Field = {
  value: any,
  error?: string,
  isValid?: boolean
}

type Form = {
  name: Field,
  hp: Field,
  cp: Field,
  types: Field
}

const PokemonForm: FunctionComponent<Props> = ({ pokemon }) => {

  const [form, setForm] = useState<Form>({
    name: { value: pokemon.name, isValid: true },
    hp: { value: pokemon.hp, isValid: true },
    cp: { value: pokemon.cp, isValid: true },
    types: { value: pokemon.types, isValid: true },
  })

  const history = useHistory()

  const types: string[] = [
    'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
    'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
  ];

  const hasType = (type: string): boolean => {
    return form.types.value.includes(type)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.name
    const fieldValue: string = e.target.value;
    const newField: Field = {
      [fieldName]: { value: fieldValue },
      value: undefined
    }
    console.log(fieldName, fieldValue)
    setForm({ ...form, ...newField })
  }

  const selectType = (type: string, e: React.ChangeEvent<HTMLInputElement>): void => {
    const checked = e.target.checked
    let newField: Field

    if (checked) { // On coche
      const newTypes: string[] = form.types.value.concat([type])
      newField = { value: newTypes }
    } else { // On décoche
      const newTypes: string[] = form.types.value.filter((currentType: string) => currentType !== type)
      newField = { value: newTypes }
    }
    setForm({ ...form, ...{ types: newField } })
  }

  const isTypesValid = (type: string): boolean => {

    if (form.types.value.length === 1 && hasType(type)) { return false }
    if (form.types.value.length >= 3 && !hasType(type)) { return false }

    return true
  }

  const validateForm = () => {
    let newForm: Form = form

    // Validator name
    if (!/^[a-zA-Zàéè]{3,25}$/.test(form.name.value)) {
      const errMsg: string = 'Le nom du pokemon uniquement alphabétique, est requis (1-25).'
      const newField: Field = { value: form.name.value, error: errMsg, isValid: false }
      newForm = { ...newForm, ...{ name: newField } }
    } else {
      const newField: Field = { value: form.name.value, error: '', isValid: true }
      newForm = { ...newForm, ...{ name: newField } }
    }

    // Validator hp
    if (!/^[0-9]{1,3}$/.test(form.hp.value)) {
      const errMsg: string = 'Les points de vie du pokemon sont compris entre 0 et 999.'
      const newField: Field = { value: form.hp.value, error: errMsg, isValid: false }
      newForm = { ...newForm, ...{ hp: newField } }
    } else {
      const newField: Field = { value: form.hp.value, error: '', isValid: true }
      newForm = { ...newForm, ...{ hp: newField } }
    }

    // Validator cp
    if (!/^[0-9]{1,2}$/.test(form.cp.value)) {
      const errMsg: string = 'Les dégats du pokemon sont compris entre 0 et 99.'
      const newField: Field = { value: form.cp.value, error: errMsg, isValid: false }
      newForm = { ...newForm, ...{ cp: newField } }
    } else {
      const newField: Field = { value: form.cp.value, error: '', isValid: true }
      newForm = { ...newForm, ...{ cp: newField } }
    }

    setForm(newForm)
    return (newForm.name.isValid && newForm.hp.isValid && newForm.cp.isValid)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('clicked submit btn', form)
    const isFormValid = validateForm();
    console.log('isFormValid', isFormValid)
    if (isFormValid) {
      pokemon.name = form.name.value
      pokemon.hp = form.hp.value * 1
      pokemon.cp = form.cp.value * 1
      pokemon.types = form.types.value
      console.log(pokemon)

      PokemonService.updatePokemon(pokemon)
        .then(() => history.push(`/pokemons/${pokemon.id}`))
    }
  }

  const deletePokemon = () => {
    PokemonService.deletePokemon(pokemon)
      .then(() => history.push(`/pokemons`))
  }


  return (
    // 2do Think & test onChange here
    <form onSubmit={e => handleSubmit(e)}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable">
            <div className="card-image">
              <img src={pokemon.picture} alt={pokemon.name} style={{ width: '250px', margin: '0 auto' }} />

              <span className="btn btn-floating halfway-fab waves-effect waves-light"><i onClick = {deletePokemon} className="material-icons">delete</i></span>
          </div>
          <div className="card-stacked">
            <div className="card-content">

              {/* Pokemon name */}
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input id="name" name="name" type="text" className="form-control" value={form.name.value}
                  onChange={e => handleInputChange(e)}
                ></input>
                {form.name.error &&
                  <div className='card-panel red accent-1'>
                    {form.name.error}
                  </div>
                }
              </div>

              {/* Pokemon hp */}
              <div className="form-group">
                <label htmlFor="hp">Point de vie</label>
                <input id="hp" name="hp" type="number" className="form-control" value={form.hp.value}
                  onChange={e => handleInputChange(e)}
                ></input>
                {form.hp.error &&
                  <div className='card-panel red accent-1'>
                    {form.hp.error}
                  </div>
                }
              </div>

              {/* Pokemon cp */}
              <div className="form-group">
                <label htmlFor="cp">Dégâts</label>
                <input id="cp" name="cp" type="number" className="form-control" value={form.cp.value}
                  onChange={e => handleInputChange(e)}
                ></input>
                {form.cp.error &&
                  <div className='card-panel red accent-1'>
                    {form.cp.error}
                  </div>
                }
              </div>

              {/* Pokemon types */}
              <div className="form-group">
                <label>Types</label>
                {types.map(type => (
                  <div key={type} style={{ marginBottom: '10px' }}>
                    <label>
                      <input id={type} name={type} type="checkbox" className="filled-in" value={type} checked={hasType(type)}
                        onChange={e => selectType(type, e)}
                        disabled={!isTypesValid(type)}
                      ></input>
                      <span>
                        <p className={formatType(type)}>{type}</p>
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-action center">
              {/* Submit button */}
              <button type="submit" className="btn">Valider</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form >
  );
};

export default PokemonForm;