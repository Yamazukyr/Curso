let produto = {
    nome: "Caneta",
    categoria: "Material Escolar",
    preco: 1200.00,
    estoque: 10,
    disponibilidade: true
}

let arrayPropriedades = Object.keys(produto)

if (arrayPropriedades.includes('precoAtacado') == false) {
    
    produto.precoAtacado = produto.preco * 0.15;
}
console.log(Object.keys(produto));

for (let chave in produto) {
    console.log(chave + ": " + produto[chave]);
}