const input = require("fs").readFileSync("./dev/stdin", "utf8");

let d = input.split("\n");

d = parseInt(d);

let t = d * 2;

console.log(`${t} minutos`);