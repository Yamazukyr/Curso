import { useState } from "react";

function ExemploFormulario() {
    const [nome, setNome] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        alert(`O nome enviado foi: ${nome}`)
        setNome('')
    }
    
    return (
        <>
        <h2>Exemplo Formulário</h2>

        <form action="#" onSubmit={(evento)=>handleSubmit(evento)}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" value= {nome} onChange={(evento)=>{ 
            setNome(evento.target.value)
            console.log(nome)
            }}
            />
            <input type="submit" />

        </form>

        <h1>{nome}</h1>
        
        </>
    )
}

export default ExemploFormulario;