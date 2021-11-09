const input = require("fs").readFileSync("./dev/stdin", "utf8");

let n = input.split("\n");

let aux;

let notas = [100, 50, 20, 10, 5, 2, 1];
let qtdNotas = new Array(7);

n = parseInt(n);
aux = n;

console.log(n);

for (let i = 0; i <= 6; i++) {
    qtdNotas[i] = parseInt(aux / notas[i]);
    aux = aux - (qtdNotas[i] * notas[i]);

    console.log(`${qtdNotas[i]} nota(s) de R$ ${notas[i]},00`);
}