const input = require("fs").readFileSync("./dev/stdin", "utf8");

let n = input.split("\n");

let aux;

let notas = [100, 50, 20, 10, 5, 2];
let qtdNotas = new Array(6);

let moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];
let qtdMoedas = new Array(7);

n = parseFloat(n).toFixed(2);
aux = n;

console.log("NOTAS:");

for (let i = 0; i <= 5; i++) {
  qtdNotas[i] = parseFloat(aux / notas[i]);
  aux = aux - qtdNotas[i] * notas[i];

  console.log(`${qtdNotas[i]} nota(s) de R$ ${notas[i]},00`);
}

for (let i = 0; i <= 6; i++) {
    qtdMoedas[i] = parseFloat(aux / moedas[i]);
    aux = aux - qtdMoedas[i] * moedas[i];
  
    console.log(`${qtdMoedas[i]} nota(s) de R$ ${moedas[i]},00`);
  }