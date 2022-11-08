
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
import { InputNome } from 'components/nome'
import { InputCor } from 'components/cor'
import { useState } from 'react'
function App() {

  const[nome, setNome] = useState('')
  const[cor, setCor] = useState('')

  const handleClick = () => {


  }
  

// Aqui você irá criar os Estados para manipular os Inputs
  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
     <h1>Adicione Nova Cor</h1>
      <InputNome nome={nome} setNome={setNome}/>
      <InputCor cor={cor} setCor={setCor}/>
      <button type="submit" onClick={handleClick}>Adicionar</button>
      {/* Comece a desenvolver o seu Código por aqui :) */}
     </form>
    </div>
  )
}

<div className="App">
<form onSubmit={handleSubmit}>
 <h1>ADICIONAR NOVA COR</h1>
 <InputNome name={nome} setName={setNome} />
 <InputCor color={cor} setColor={setCor} />
 <button type="submit" onClick={handleClick}>Adicionar</button>
</form>
</div>

export default App