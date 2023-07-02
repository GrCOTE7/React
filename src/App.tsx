import React, { FunctionComponent, useState } from 'react';
// import POKEMONSLIST from './components/pokemonsList';

const App: FunctionComponent = () => {
  //State
  const [age, setAge] = useState(15)
  const [majorite, setMajorite] = useState(0)
  // console.log((majorite ^ 1) * 10 + 15)

  // Event
  const handleClick = () => {

    // age 15 1^1
    console.log('age = ', + age);
    setMajorite(majorite ^ 1)
    setAge((majorite ^ 1) * 10 + 15);
  }

  // Render
  return (
    // <POKEMONSLIST />
    <div>
      <h1>{age}</h1>
      <button onClick={() => handleClick()}>Changer</button>
      <p>Vous êtes {age > 18 ? 'majeur' : 'mineur'}</p>
    </div>
  )
}
export default App;