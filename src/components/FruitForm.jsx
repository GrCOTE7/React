import { useState } from "react";

export default function FruitForm({ handleAdd }) {
  // State
  const [newFruit, setNewFruit] = useState("Sam");
  // Events
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("newFruit = ", newFruit);
    // copy state
    if (newFruit) {
      // console.log("Au départ:", fruits);
      // manip copy
      const id = new Date().getTime();
      const fruitToAdd = { id, nom: newFruit };
      //fruitsCopy.push({ id, nom: newFruit });
      // console.log("Après ajout:", fruitsCopy);
      handleAdd(fruitToAdd);
      setNewFruit("");
    } else {
      setNewFruit("À préciser IMPERATIVEMENT !");
      setTimeout(function () {
        setNewFruit("");
      }, 1000);
    }
  };

  const handleChange = (e) => {
    const valueAfterChange = e.target.value;
    console.log(valueAfterChange);
    setNewFruit(valueAfterChange);
  };
  // Render
  return (
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
  );
}
