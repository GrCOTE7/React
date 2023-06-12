import { useState } from "react";
import "./styles.css";

function App() {
  // State (État, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" }
  ]);

  // Comporments (Comportements, évènements)
  const handleDelete = (id: number) => {
    console.log("handleDelete", id);

    // 1. Copie du State
    // const fruitsCopy = fruits.slice(); // 1st way
    const fruitsCopy = [...fruits]; // 2nd way - More frequently seen
    console.log(fruitsCopy);

    // 2. Manipuler la copie du State
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    console.log("fruitsCopyUpdated", fruitsCopyUpdated);

    // 3. Modifier le state avec le setter
    setFruits(fruitsCopyUpdated);
  };

  // Render (Affichage)
  return (
    <div className="container">
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.id} - {fruit.nom}{" "}
            <button onClick={() => handleDelete(fruit.id)}  className="sp-button">&nbsp;X&nbsp;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
