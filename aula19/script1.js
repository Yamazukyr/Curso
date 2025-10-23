let ContaBancaria = {
    titular : 'Cleitinho',
    agencia : '7890',
    saldo : 1000,
    divida : false,  
    valorDivida : 0,
    limiteCredito : 5000
}

console.log(ContaBancaria)

ContaBancaria.saldo = ContaBancaria.saldo + 100

console.log(ContaBancaria)

ContaBancaria.agencia = '0001'

console.log(ContaBancaria)

