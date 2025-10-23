let a = Number(prompt("Numero 1: "));
let b = Number(prompt("Numero 2: "));
let c = Number(prompt("Numero 3: "));

function decidirMaior(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else {
        return c;
    }
}

decidirMaior(a, b, c);
console.log("O maior numero é: " + decidirMaior(a, b, c));
