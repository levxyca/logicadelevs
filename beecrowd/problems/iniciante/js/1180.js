let input = require("fs").readFileSync("./dev/stdin", "utf8");
let value = input.split("\n");

let N = value.shift();
let V = value.shift().split(" ");
let numbers = V.map((x) => parseInt(x));

Array.min = (array) => {
  return Math.min.apply(Math, array);
};

let menor = Array.min(numbers);

console.log(`Menor valor: ${menor}\nPosicao: ${numbers.indexOf(menor)}`);
