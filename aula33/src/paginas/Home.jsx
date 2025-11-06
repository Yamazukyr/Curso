//fazer a Home da aplicação
import React from 'react'
import { useContext } from 'react'
import { ProdutosContext } from '../contextos/ProdutosContext.jsx'

function Home() {
    const {produtos} = useContext(ProdutosContext)
    return (
        <div>
            <h2>Home</h2>
            <p>Seja bem-vindo à nossa loja virtual!</p>
            {produtos.map((produto) => 
            {return (
                <div key={produto.id} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
                    <h3>{produto.nome}</h3>
                </div>
            )})}
        </div>
    )
}
export default Home