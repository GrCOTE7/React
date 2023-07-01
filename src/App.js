import { useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";
import "./styles.css";

function App() {
  // State (État, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Pêche" },
    { id: 2, nom: "Poire" },
    { id: 3, nom: "Pomme" }
  ]);

  // const inputRef = useRef();
  // Comportments (Comportements, évènements)

  const handleDelete = (id) => {
    // console.log("handleDelete", id);
    // 1. Copie du State
    const fruitsCopy = [...fruits];
    console.log("fruitsCopy", fruitsCopy.length);
    // 2. Manipuler la copie du State
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    console.log("fruitsCopyUpdated", fruitsCopyUpdated);
    // 3. Modifier le state avec le setter
    setFruits(fruitsCopyUpdated);
  };

  const handleAdd = (fruitToAdd) => {
    // copy state
    const fruitsCopy = [...fruits];
    // manip copy
    fruitsCopy.push(fruitToAdd);
    // setter
    setFruits(fruitsCopy);
  };

  const preferedFruit = (fruitNom) => {
    console.log(`Prefered Fruit : ${fruitNom}`);
  };

  // Render (Affichage)
  return (
    <div className="container">
      <h1>Fruits:</h1>

      <FruitForm handleAdd={handleAdd} />

      <ul>
        {fruits.map((fruit) => (
          <Fruit
            fruitInfo={fruit}
            onClick={() => [preferedFruit(fruit.nom), handleDelete(fruit.id)]}
            key={fruit.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

/**
 * Gestion du  formulaire:
 * 1. Création
 * 2. Soumission
 * 3. Collecte de ses données
 *  Methode 1: useRef ( Pas Re-Render :-( ) = documentGetElementById en "React"
 *  Methode 2: Synchronisation descendante / ascendante
 *
 */
