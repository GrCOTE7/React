export default function Fruit({ fruitInfo, onClick }) {
  // State
  // const fruitinfo = props.fruitInfo;
  // const onFruitDelete = props.onFruitDelete;

  // const {fruitInfo, onFruitDelete} = props
  // Behaviour

  // Render
  return (
    <li>
      {fruitInfo.id} - {fruitInfo.nom} &nbsp;{" "}
      <button onClick={onClick}>X</button>
    </li>
  );
}
