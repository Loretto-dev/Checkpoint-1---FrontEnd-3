
export function Card(props) {
  return (
    <div
      className="card-container"
      style={{ backgroundColor: props.corData.hexadecimalColor }}
    >
      <div className="card-body">
        <h1>{props.corData.nomeCor}</h1>
        <span>{props.corData.hexadecimalColor}</span>
      </div>
    </div>
  );  
}