const input = require("fs").readFileSync("./dev/stdin", "utf8");

let n = input.split("\n");

let aux;

let conversao = [365, 30];
let qtdConversao = new Array(2);

n = parseInt(n);
aux = n;

for (let i = 0; i <= 1; i++) {
  qtdConversao[i] = parseInt(aux / conversao[i]);
  aux = aux - qtdConversao[i] * conversao[i];
}

console.log(`${qtdConversao[0]} ano(s)`);
console.log(`${qtdConversao[1]} mes(es)`);
console.log(`${aux} dia(s)`);