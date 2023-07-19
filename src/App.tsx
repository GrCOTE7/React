import { useState } from "react";
import "./styles.css";

function App() {
  // State (État, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" }
  ]);

  // Events (Behaviors, events)

  // Render (Affichage)
  return (
    <div className="container">
      
      <h1>Liste de fruits</h1>

      <ul>
        {fruits.map((fruit) => (
          <li>
            {fruit.id} - {fruit.nom}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
