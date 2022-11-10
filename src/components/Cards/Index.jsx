//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (cores) {
    return (
      <div className="card-container" style={{backgroundColor: cores.corData.cor}}>
              <div className="card-body">
                  <h1>Cor: {cores.corData.nomeCor}</h1>
                  <span>Código da cor: {cores.corData.cor}</span>
              </div>
        </div>
    )
  }