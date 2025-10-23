let num1 = parseInt(prompt("Digite um número: "));
let num2 = parseInt(prompt("Digite outro número: "));    

let pares = 0;
let somaTotal = 0;


while (num1 <= num2) {
    if (num1 % 2 === 0) {
        console.log(num1);
        pares++;
    }
        somaTotal += num1;
    num1++;
}
    console.log(`A quantidade de números pares é de ${pares} numeros`);
    console.log(`A soma total é de ${somaTotal} números`);