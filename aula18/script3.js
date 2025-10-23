let filaAtendimentos = ['Ana', 'Joao', 'Maria', 'Claudio']
console.log(filaAtendimentos)

filaAtendimentos.unshift('Dona Iracema')
console.log(filaAtendimentos)
filaAtendimentos.push('Marcelo')
console.log(filaAtendimentos)
filaAtendimentos.push('Beatriz')
console.log(filaAtendimentos)
filaAtendimentos.unshift(1, 0, 'Marcondes')
console.log(filaAtendimentos)
console.log('--- Atendimentos ---')
let qtdSenhas = 5
for (let i = 1; i <= qtdSenhas; i++) {
    let atendido = ''
    if(i%2==0){
        atendido = filaAtendimentos.shift()
        console.log(atendido)
    }
    else{
        atendido = filaAtendimentos.pop()
        console.log(atendido)

    }

    console.log(filaAtendimentos)

}