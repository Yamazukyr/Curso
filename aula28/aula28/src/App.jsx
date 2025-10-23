import { useState } from 'react'
import './App.css'


function App() {
  const [pessoasPre, setPessoaspre] = useState(['Maria', 'Paulo', 'Joaquim'])

  const [pessoas, setPessoas] = useState(['Ana', 'Carlos', 'Beatriz'])

  function adicionarPessoa() {
    let ehPreferencial = Number(prompt('Digite 1 para preferencial e 2 para normal'))
    console.log(isNan(ehPreferencial))

    while (ehPreferencial <1 || ehPreferencial >2 || isNaN(ehPreferencial)) {
     
    ehPreferencial = Number (prompt('Opção inválida! Digite 1 para preferencial e 2 para normal'))
    }

    if (ehPreferencial == 1) {
      setPessoaspre([...pessoasPre, prompt('Digite o nome da pessoa')])

    } else {
      setPessoas([...pessoas, prompt('Digite o nome da pessoa')])
    }
  }

  return (
    <>
    <h1>Preferencial</h1>
    <ul>
      {pessoasPre.map((pessoa, index) => {
        console.log(pessoa)
        return(
        <li key={index}>{pessoa}
        <button>x</button></li>)
        })
      }
    </ul>
    <button onClick={()=>setPessoaspre([...pessoasPre, prompt('Digite o nome da pessoa')])}>Adicionar Preferencial</button>
      
     <ul>
      <h1>Normal</h1>
      {pessoas.map((pessoal, index) => {
        console.log(pessoal)
        return(
        <li key={index}>{pessoal}
        <button>x</button></li>)
        })
      }
    </ul>
    <button onClick={()=>setPessoas([...pessoas, prompt('Digite o nome da pessoa')])}>Adicionar Normal</button>

    <button onClick={adicionarPessoa}>Adicionar Pessoa</button>

    

      
    </>
  )
}

export default App
