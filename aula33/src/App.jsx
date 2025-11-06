import { useState } from 'react'
import Rotas from './paginas/Rotas.jsx'
import { BrowserRouter} from 'react-router-dom'
import './App.css'
import BarraDeNavegacao from './componentes/BarraDeNavegacao.jsx'
import ProdutosProvider from './contextos/ProdutosProvider.jsx'

function App() {
  

  return (
    <>
      <h1>Aula 33</h1>
      <ProdutosProvider>
        <BrowserRouter>
          <BarraDeNavegacao>
            <Rotas/>
          </BarraDeNavegacao>
        </BrowserRouter>
      </ProdutosProvider>
    </>
  )
}

export default App
