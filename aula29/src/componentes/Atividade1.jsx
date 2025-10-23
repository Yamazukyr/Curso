import { useState } from 'react'

export default function Atividade1() {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [funcionario, setFuncionario] = useState({nome: '', cargo: ''})

    function enviarFormulario(e) {
        e.preventDefault()
        if (nome === '' || cargo === '') {
            alert('Por favor, preencha todos os campos')
            
        }
        setFuncionario({ nomeFunc: nome, cargoFunc: cargo }) 
        alert('Formulário enviado com sucesso!')
        console.log(funcionario)
        setCargo('')
        setNome('')
    }   
    return (
        <>
            <h1>atividade 01</h1>

            <form action="#" onSubmit={(evento)=> enviarFormulario(evento)}>
                <input type="text" placeholder='Digite seu nome'onChange={(e)=> setNome(e.target.value)}/>
                <input type="text" placeholder='Digite seu cargo' onChange={(e)=> setCargo(e.target.value)}/>
                <input type="submit" />
            </form>
        
        <p>
            {funcionario.nomeFunc} {funcionario.cargoFunc}
        </p>
        </>
    )
}