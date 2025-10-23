
function somar(a=2, b=3) {
    console.log(a + b)
}
function subtrair(a=2, b=3) {
    console.log(a - b)
}
function multiplicar(a=2, b=3) {
   console.log(a * b)
}
function dividir(a=2, b=3) {
    console.log(a / b)
}
function calculadora(a=2, b=3, simbolo) {
    
    switch (simbolo){
        case '+':
            somar(a,b)
            break;
        case '-':
            subtrair(a,b)
            break;
        case '*':
            multiplicar(a,b)
            break;
        case '/':
            dividir(a,b)
            break;
    }
}

    calculadora(2,3,'+')
    calculadora(2,3,'-')
    calculadora(2,3,'*')
    calculadora(2,3,'/')