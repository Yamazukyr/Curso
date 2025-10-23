let filaAtendimentos = ['Ana', 'Joao', 'Maria', 'Claudio']
console.log(filaAtendimentos)

// Dona Iracema chegou no banco e é uma cliente preferencial
filaAtendimentos.unshift('Dona Iracema')
console.log(filaAtendimentos)
// Marcelo é um cliente normal
filaAtendimentos.push('Marcelo')
console.log(filaAtendimentos)
// Beatriz também é uma cliente normal
filaAtendimentos.push('Beatriz')
console.log(filaAtendimentos)
// Marcondes é um cleinte prioritario
filaAtendimentos.splice(1, 0, 'Marcondes')
console.log(filaAtendimentos)



