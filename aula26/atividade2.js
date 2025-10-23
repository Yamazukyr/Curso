const nome = document.querySelector('#nome')
const descricao = document.querySelector('#descricao')
const preco = document.querySelector('#preco')
const categoria = document.querySelector('#categoria')
const imagem = document.querySelector('#imagem')

const form = document.querySelector('form')

function postProduto(objproduto) {
    fetch('https://fakestoreapi.com/products',{
        method: 'POST',
        contentType: 'application/json',
        body: JSON.stringify(objproduto)
        
    })
    .then(resposta => resposta.json())
    .then(dados => console.log(dados))
    alert('Produto cadastrado com sucesso!')
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const novoProduto = {
        title: nome.value,
        price: preco.value,
        description: descricao.value,
        image: imagem.value,
        category: categoria.value
    }

    postProduto(novoProduto)
    
    nome.value = ''
    descricao.value = ''
    preco.value = ''
    categoria.value = ''
    imagem.value = ''
})