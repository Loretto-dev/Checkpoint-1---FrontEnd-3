
import { classNames } from 'classnames';
import { useState } from "react";
import { Cards } from "./Card";
import styles from './components/Erros/styles.module.css';

function App() {
  const [nomeCor, setNomeCor] = useState("");
  const [cor, setCor] = useState("");
  const [allCores, setAllCores] = useState([]);
  const [erro, setErro] = useState(false);

  const containsNumber = (numero) => { //Validação dos números(será chamada na função ValidarForms)
    return /[0-9]/.test(numero);
  }

  function validarForms() { //Validação nome da cor e cor()
    if (nomeCor === null || nomeCor === undefined) return true;
    var nomeSemEspaco = nomeCor.trim();
    if (nomeSemEspaco.length < 3) return true;
    if (cor.length < 6 && !containsNumber(cor)) return true;
    return false;
  }

  function adicionarCor(event) { //Adicionar uma cor
    event.preventDefault()
    let validacao = validarForms();
    const coloracao = {
      nomeCor: nomeCor,
      cor: cor
    }

    setErro(validacao)

    if (validacao) return;

    setAllCores([...allCores, coloracao])
  }

  return (
    <main>
      <div className="App">
        <h1>Carga de estudiantes</h1>
        <form className="formCadastro" onSubmit={event => adicionarCor(event)}>
          <input type="text"
            className="form-control"
            value={nomeCor}
            onChange={event => setNomeCor(event.target.value)}
            placeholder="Entre com o nome da Cor" />

          <input type="color"
            className="form-control"
            value={cor}
            onChange={event => setCor(event.target.value)}
            placeholder="Escolha a cor" />
          <button type="submit" className="btn btn-primary">Adicionar</button>
        </form>
        <small className={classNames({
          [styles.erro]: erro
        })}>
          Por favor, verifique os dados inseridos no formulário
        </small>
      </div>
      
      <section className='Cards'>
        {
          allCores.map(
            cores => {
              return (
                <Cards id={cores} cores={allCores}
                />
              )
            }
          )
        }
      </section>
    </main>
  )
}

export default App