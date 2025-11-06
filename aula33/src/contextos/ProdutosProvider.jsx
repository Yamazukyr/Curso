import {ProdutosContext} from './ProdutosContext.jsx'
import { useState } from 'react'


function ProdutosProvider({children}) {
    const [produtos, setProdutos] = useState([
    {id: 1, nome: 'Banana Prata', preco: 3.00, img:'https://cdn.awsli.com.br/600x450/681/681419/produto/314527993/banana-prata-klpaa3peu0.jpeg'},
    {id: 2, nome: 'Maçã Gala', preco: 2.50, img:'https://hortifrutibr.vtexassets.com/arquivos/ids/173595/Maca-Gala-importada-unidade.jpg.jpg?v=638888085592100000'},
    {id: 3, nome: 'Morango', preco: 10.00, img:'https://hortifrutibr.vtexassets.com/arquivos/ids/174849/Morango-Bandeja-Unidade.jpg.jpg?v=638824172558530000'},
])
    return (
        <ProdutosContext.Provider value={{produtos, setProdutos}}>
            {children}
        </ProdutosContext.Provider>
    )

}

export default ProdutosProvider