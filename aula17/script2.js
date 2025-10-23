let n1 = parseInt(prompt("Digite a nota de Joao 1 bimestre: "));
let n2 = parseInt(prompt("Digite a nota de Joao 2 bimestre: "));
let n3 = parseInt(prompt("Digite a nota de Joao 3 bimestre: "));
let n4 = parseInt(prompt("Digite a nota de Joao 4 bimestre: "));

let a1 = parseInt(prompt("Digite a nota de Maria 1 bimestre: "));
let a2 = parseInt(prompt("Digite a nota de Maria 2 bimestre: "));
let a3 = parseInt(prompt("Digite a nota de Maria 3 bimestre: "));
let a4 = parseInt(prompt("Digite a nota de Maria 4 bimestre: "));

let media = (n1 + n2 + n3 + n4) / 4;
let media1 = (a1 + a2 + a3 + a4) / 4;

if (media >= 7) {   
    console.log(`Joao foi aprovado com a média ${media}`);
} else if (media >= 5 && media < 7) {
    console.log(`Joao esta de recuperação com a média ${media}`);
} else {
    console.log(`Joao foi reprovado com a média ${media}`);
}


if (media1 >= 7) {
       console.log(`Maria foi aprovado com a média ${media1}`);
} else if (media1 >= 5 && media1 < 7) {
    console.log(`Maria esta de recuperação com a média ${media1}`);
} else {
    console.log(`Maria foi reprovado com a média ${media1}`);
}