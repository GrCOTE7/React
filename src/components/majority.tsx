import React, { FunctionComponent, useState } from 'react';

const App: FunctionComponent = () => {
  //State
  const [age, setAge] = useState(15)
  const [majority, setMajority] = useState(0)
  // console.log((majorite ^ 1) * 10 + 15)

  // Event
  const handleClick = () => {

    // age 15 1^1
    console.log('age = ', + age);
    setMajority(majority ^ 1)
    setAge((majority ^ 1) * 10 + 15);
  }

  // Render
  return (
    <div>
      <h1>{age}</h1>
      <button onClick={() => handleClick()}>Changer</button>
      <p>Vous êtes {age > 18 ? 'majeur' : 'mineur'}</p>
      <hr />
    </div>
  )
}
export default App;