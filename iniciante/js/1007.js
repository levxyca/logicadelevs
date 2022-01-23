const input = require("fs").readFileSync("./dev/stdin", "utf8");

const [a, b, c, d] = input.split("\n").map(item => parseInt(item));

const calc = ((a * b) - (c * d));

console.log(`DIFERENCA = ${calc}`);