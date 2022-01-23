const input = require("fs").readFileSync("./dev/stdin", "utf8");

let [nome, salario, vendas] = input.split("\n");

salario = parseFloat(salario);
vendas = parseFloat(vendas);

let aux = vendas * 0.15;

aux = aux + salario;

console.log(`TOTAL = R$ ${aux.toFixed(2)}`);