const input = require("fs").readFileSync("./dev/stdin", "utf8");

var lines = input.split("\n");

var peca1 = lines.shift();
var peca2 = lines.shift();

let [cod1, qnt_pecas_1, valor_unitario_1] = peca1.split(" ");
let [cod2, qnt_pecas_2, valor_unitario_2] = peca2.split(" ");

qnt_pecas_1 = parseInt(qnt_pecas_1);
valor_unitario_1 = parseFloat(valor_unitario_1);

qnt_pecas_2 = parseInt(qnt_pecas_2);
valor_unitario_2 = parseFloat(valor_unitario_2);

let total = (qnt_pecas_1 * valor_unitario_1) + (qnt_pecas_2 * valor_unitario_2);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);