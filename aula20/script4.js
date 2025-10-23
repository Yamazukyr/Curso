function saudarFortaleza(nome){
    return(`${nome}, eiiii mah`)
}

function saudarRecife(nome){
    return(`${nome}, eiiii boy`)
}

function saudarLugar(nome, funcao){
    let frase = funcao(nome)
    console.log(frase)
}

saudarLugar("João", saudarFortaleza)