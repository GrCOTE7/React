import { useState } from "react";
import "./styles.css";

function App() {
  // State (État, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Pêche" },
    { id: 2, nom: "Poire" },
    { id: 3, nom: "Pomme" }
  ]);

  const [newFruit, setNewFruit] = useState("Sam");

  // const inputRef = useRef();

  // Comporments (Comportements, évènements)

  const handleChange = (e) => {
    const valueAfterChange = e.target.value;
    console.log(valueAfterChange);
    setNewFruit(valueAfterChange);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("newFruit = ", newFruit);
    // copy state
    if (newFruit) {
      const fruitsCopy = [...fruits];
      console.log("Au départ:", fruits);
      // manip copy
      const id = new Date().getTime();
      fruitsCopy.push({ id, nom: newFruit });
      console.log("Après ajout:", fruitsCopy);
      // setter
      setFruits(fruitsCopy);
      setNewFruit("");
    } else {
      setNewFruit("À préciser IMPERATIVEMENT !");
      setTimeout(function () {
        setNewFruit("");
      }, 1000);
    }
  };

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

  // Render (Affichage)
  return (
    <div className="container">
      <h1>Fruits:</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Ajouter un fruit"
          value={newFruit}
        // defaultValue="Banane"
        />
        &nbsp;
        <button>Ajouter +</button>
      </form>
      New fruit: {newFruit}
      <ol>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.nom} &nbsp;{" "}
            <button onClick={() => handleDelete(fruit.id)}>X</button>
          </li>
        ))}
      </ol>
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
