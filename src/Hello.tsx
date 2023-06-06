import React, { FunctionComponent } from 'react';

const Hello: FunctionComponent = () => {
  const name: String = 'React';

  return (
    <h1>Hello , {name} !</h1>
  )
}

export default Hello;