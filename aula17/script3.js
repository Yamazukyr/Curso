let qtdNumeros = 0;

for (let i = 1; i <= 10; i++) {
    let num = Number(prompt(`Digite o ${i}º número (apenas digitos)`));
    console.log(`O número digitado foi: ${num}`);
    
    if (num >= 30 && num <= 90) {
        qtdNumeros+=1;
    }
}

console.log(`A quantidade de números entre 30 e 90 é: ${qtdNumeros}`);