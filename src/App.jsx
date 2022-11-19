import classNames from 'classnames';
import { useState } from "react";
import { Cards } from "./components/CardCor/Cor";
import styles from "./app.module.scss";

function App() {
  const [nomeCor, setNomeCor] = useState("");
  const [hexadecimalColor, setHexadecimalColor] = useState("");
  const [allColors, setAllColors] = useState([]);
  const [error, setError] = useState(false);

  const containsNumber = (number) => {
    return /[0-9]/.test(number);
  }

  function validateForm() {
    if (nomeCor === null || nomeCor === undefined) return true;

    var nameWithoutSpace = nomeCor.trim();

    if (nameWithoutSpace.length < 3) return true;

    if (hexadecimalColor.length < 6 && !containsNumber(hexadecimalColor)) return true;

    return false;
  }

  function addColor(event) {
    event.preventDefault()
    let validation = validateForm();
    const coloring = {
      nomeCor: nomeCor,
      hexadecimalColor: hexadecimalColor
    }

    setError(validation)

    if (validation) return;

    setAllColors([...allColors, coloring])
  }

  return (
    <div className="App">
      <h1>ADICIONAR NOVA COR</h1>
      <form className="formCadastro" onSubmit={event => addColor(event)}>
        <input type="text"
          className="form-control"
          value={nomeCor}
          onChange={event => setNomeCor(event.target.value)}
          placeholder="Digite aqui o nome da cor" />

        <input type="color"
          className="form-control2"
          value={hexadecimalColor}
          onChange={event => setHexadecimalColor(event.target.value)}
          placeholder="Escolha a sua cor em formato hexadecimal" />

        <button type="submit" className="btn btn-primary">ADICIONAR</button>
      </form>
      <small
        className={classNames({
          [styles.error]: error
        })}
      >
        Por favor, verifique os dados inseridos no formulário
      </small>

      <Cards cores={allColors} />

    </div>
  )
}

export default App