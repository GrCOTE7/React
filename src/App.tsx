import { useState } from "react";
import "./styles.css";

function App() {
  // State (État, données)
  // const [fruits, setFruits] = useState([
  const [fruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" }
  ]);

  // Comporments (Comportements, évènements)


  // Render (Affichage)
  return (
    <div className="container">

      <h1>Liste de fruits</h1>

      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.id} - {fruit.nom} <button>X</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
