let valorCompra = 500
let valorAdicionalCompra = 100
let porcentagemDescontoInicial = 1
let valorFinal = 500

for (let i = porcetagemDescontoInicial; i <= 25; i++) {
    valorCompra = valorAdicionalCompra
    valorFinal = valorCompra *(1 - (i%100))
    console.log(`Valor da compra: ${valorCompra} : - porcentagem de desconto: ${i}% : - valor do final: R$ ${valorFinal}`)
}                                                                        
    