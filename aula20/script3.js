let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function somaImpares(array){
    let soma = 0
    for(let i=0; i<array.length; i++){
        if(array[i] % 2 !== 0){
            soma += array[i]
        }
    }
    return soma
}

let resultado = somaImpares(numeros);
console.log(resultado)
