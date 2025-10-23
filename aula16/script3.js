let ramal;
let valido = false;

while (!valido) {
    ramal = parseInt(prompt("Digite o ramal: \n" + 
        "10 - Cama e Mesa\n" + 
        "25 - Móveis\n" +
        "36 - Eletronicos\n" +
        "42 - Moda\n"));

    switch (ramal) {
        case 10:
            console.log("Seja bem-vindo ao autoatendimento do setor de Cama e Mesa\n" +
            "Aproveite nossas ofertas de Colchas e Toalhas"); 
            valido = true;
            break;
        case 25:
            console.log("Seja bem-vindo ao autoatendimento do setor de Móveis\n" +
            "Aproveite nossas ofertas de Sofás e Cadeiras");
            valido = true;
            break;
        case 36:
            console.log("Seja bem-vindo ao autoatendimento do setor de Eletronicos\n" +
            "Aproveite nossas ofertas de TV's e Smartphones");
            valido = true;
            break;
        case 42:
            console.log("Seja bem-vindo ao autoatendimento do setor de Moda\n" +
            "Aproveite nossas ofertas de Roupas e Calçados");
            valido = true;
            break;}
}