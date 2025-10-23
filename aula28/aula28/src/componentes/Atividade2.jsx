import desligada from '../assets/desligada.png'
import ligada from '../assets/ligada.png'
import { useState } from 'react'

function Atividade2() {
    const [imagem, setImagem] = useState(desligada)

    return (
        <>
        <img src={imagem} alt="lampada" />
        <button onClick={()=>setImagem(ligada)}>Ligar</button>
        <button onClick={()=>setImagem(desligada)}>Desligar</button>
        </>
    )
}
export default Atividade2