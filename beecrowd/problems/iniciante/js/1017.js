const input = require("fs").readFileSync("./dev/stdin", "utf8");

let [t, vm] = input.split("\n");

t = parseInt(t);
vm = parseInt(vm);

let dp = t * vm;

let qtd = dp / 12;

console.log(`${qtd.toFixed(3)}`);