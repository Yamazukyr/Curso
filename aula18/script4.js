let array =['item1', 'item2', 'item3', 'item4',];


console.log(array)
array.splice(1,1)
console.log(array)


array.splice(1,0,'novo item')
console.log(array)

let frutas = ['Banana', 'Maçã', 'Uva', 'Melancia'];

// Verificar se existe a fruta 'Uva' no array
console.log(frutas.includes('Uva'))

// Verificar a posição da fruta 'Uva' no array e trocar elemento
console.log(frutas.indexOf('Uva'))
frutas[2] = 'Pera'
console.log(frutas)

console.log(frutas.lastIndexOf('Pera')) // Retorna o último índice do elemento especificado no array, ou -1 se não for encontrado.

let qtdRepetição = 0

for(let i of frutas){
    if(i === 'Pera'){
        qtdRepetição++
    }
}
console.log(qtdRepetição)

let matriz = [
    [10,'Ana'],
    [8,'Pedro'],
    [10,'Pedro']
]

console.log(matriz)
console.log(matriz[0][0])
console.log(matriz[2][1])
