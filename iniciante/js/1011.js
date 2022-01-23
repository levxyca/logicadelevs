const input = require("fs").readFileSync("./dev/stdin", "utf8");

const pi = 3.14159;

let [raio] = input.split("\n");

raio = parseFloat(raio);

let volume = (4/3.0) * pi * Math.pow(raio, 3);

console.log(`VOLUME = ${volume.toFixed(3)}`);