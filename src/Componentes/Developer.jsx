import "./styles.css";
function Developers({ name, age, country }) {
  return (
    <div className="board">
      <p className="NomeDev">Dev: {name}</p>
      <p className="IdadeDev">Idade: {age}</p>
      <p className="PaisDev"> País: {country}</p>
    </div>
  );
}
export default Developers;
