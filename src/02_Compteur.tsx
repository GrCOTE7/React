import { useState } from "react";
import "./styles.css";

function App() {
  // State (État, données)
  const [compteur, setCompteur] = useState(1);

  // Comporments (Comportements, évènements)
  const handleClick = () => {
    console.log(compteur);
    setCompteur(compteur + 1);
  };

  // Render (Affichage)
  return (
    <div className="container">
      <h1>{compteur}</h1>
      <button onClick={handleClick}>Add 1</button>
    </div>
  );
}

export default App;
