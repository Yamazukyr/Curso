let listaProdutos = [
    {nome: 'cadeira', preço: 1200.00, quantidade: 10, estoque: true},
]

function cadastrarProduto(nome,preço,quantidade = 0, disponibilidade = false){
    let novoProduto = {
        nome: nome,
        preço: preço,
        quantidade: quantidade,
        estoque: disponibilidade
    }

    listaProdutos.push(novoProduto)
}

console.log(listaProdutos)
cadastrarProduto('mesa', 300.00)
console.log(listaProdutos)
cadastrarProduto('fogão', 1500.00, 5, true)
console.log(listaProdutos)