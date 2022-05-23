const input = require("fs").readFileSync("./dev/stdin", "utf8");

const [a, b] = input.split("\n").map(item => parseInt(item));

const prod = a * b;

console.log(`PROD = ${prod}`);