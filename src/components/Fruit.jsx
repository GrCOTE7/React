export default function Fruit({ fruitInfo, onFruitDelete }) {
  // State
  // const fruitinfo = props.fruitInfo;
  // const onFruitDelete = props.onFruitDelete;

  // const {fruitInfo, onFruitDelete} = props
  // Behaviour

  // Render
  return (
    <li>
      {fruitInfo.id} - {fruitInfo.nom} &nbsp;{" "}
      <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>
    </li>
  );
}
