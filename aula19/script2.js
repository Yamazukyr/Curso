let aluno = {
    nome: 'João',
    notas: [7, 10, 5,]
    
}

aluno.media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3;

console.log(aluno)

if (aluno.media >= 7) {
    console.log(`O aluno ${aluno.nome} foi aprovado com a nota ${aluno.media}`)
}   else {
    console.log(`O aluno ${aluno.nome} foi reprovado com a nota ${aluno.media}`)
}