const input = require("fs").readFileSync("./dev/stdin", "utf8");

let valores = input.split(" ");

var valoresConversao = valores.map(function (x) {
  return parseInt(x, 10);
});

let [A, B, C, D] = valoresConversao;

if((B > C) && (D > A) && ((C + D) > (A + B)) && (C >= 0) && (D >= 0) && (A % 2 === 0)) {
    console.log('Valores aceitos');
} else {
    console.log('Valores nao aceitos');
}