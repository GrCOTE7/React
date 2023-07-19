import React, { useState } from "react";
import "./styles.css";

function App() {
  // State (État, données)
  const [compteur, setCompteur] = useState(1);

  // Comporments (Comportements, évènements)
  const handleClick = () => {
    // alert (compteur++);
    setCompteur(compteur + 1);
    console.log(compteur);
  };

  // Render (Affichage)
  return (
    <div className ='counter'>
      <h1>{compteur}</h1>
      <button onClick={handleClick}>Incrémente</button>
    </div>
  );
}

export default App;
