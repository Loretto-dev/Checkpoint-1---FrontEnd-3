import { useState } from 'react'
import './style.scss'


export const InputNome = () => {

    const[cor, setCor] = useState('')

    
    
    return (
        <div>
            <><label>Cor</label>
            <input id="cor" type="text" value={cor} onChange={e => setCor(e.target.value)} /></>
        </div>
    )
}
