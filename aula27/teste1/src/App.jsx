import Atividade1 from './componentes/Atividade1'
import './App.css'
import Atividade2 from './componentes/Atividade2'

function App() {
  

  return (
    <>
      <h1>atividade1</h1>

      <Atividade1></Atividade1>
      <Atividade2 titulo='Goiaba' preco='0,50' descricao='Goiaba vermelha'/>
      <Atividade2 titulo='Manga' preco='1,00' descricao='Manga espada'/>
      <Atividade2 titulo='Banana' preco='0,50' descricao='Banana prata'/>


    </>
  )
}

export default App
