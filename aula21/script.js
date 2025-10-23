const funcaoSeta = () => 10/2
//retorna a operação matematica para ser utilizada ou armazenada em uma variável.
let resultado = funcaoSeta()
//console.log(resultado)
//console.log(funcaoSeta()) 
//retorna o resultado da operação diretamente no console.

//essa função espera receber um callback
function mostrarNoConsole(funcao, n1, n2){
    console.log("Resultado da função passada como callback")
    console.log(funcao(n1, n2))
}
//chamando a função e passando a arrow function como callback
//mostrarNoConsole(funcaoSeta)

//arrow function de uma unica linha tem um retorno implícito / intuitivo
const somar = (n1, n2) => n1 + n2

//arrow function de multiplas linhas precisa de um return explícito
const subtrair = (n1, n2) => {
    console.log("sou a função sbtrair e tenho mais de uma linha")
    return n1 - n2
}

mostrarNoConsole(somar, 20, 30)
let resultado2 = subtrair(20, 30)
console.log(resultado2)


const frasesDeElevador ={
    dia: () => "Bom dia",
    tarde: () => "Boa tarde",
    noite: () => "Boa noite",    
    quente: () => "Nossa, que calor!",
    autor:"Joao"
}

mostrarNoConsole(frasesDeElevador.dia)