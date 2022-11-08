import { useState } from 'react'
import './style.scss'


export const InputNome = () => {

    const[nome, setNome] = useState('')

    
    
    return (
        <div>
            <><label>Nome</label>
            <input id="nome" type="text" value={nome} onChange={e => setNome(e.target.value)} /></>
        </div>
    )
}
