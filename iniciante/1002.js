const input = require("fs").readFileSync("./dev/stdin", "utf8");

const [raio] = input.split("\n").map(item => parseFloat(item));

const N = 3.14159;

const area = N * Math.pow(raio, 2);

console.log(`A=${area.toFixed(4)}`);