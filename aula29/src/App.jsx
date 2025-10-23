import { useState } from 'react'
import ExemploFormulario from './componentes/ExemploFormulario'
import Atividade1 from './componentes/Atividade1'
import Atividade2 from './componentes/Atividade2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Aula 29</h1>
      <Atividade2></Atividade2>

    </>
  )
}

export default App
