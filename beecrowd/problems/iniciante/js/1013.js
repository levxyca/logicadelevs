const input = require("fs").readFileSync("./dev/stdin", "utf8");

let [a, b, c] = input.split(" ");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

let maiorAB = ((a+b+(Math.abs(a-b)))/2);

let maior = ((maiorAB+c+(Math.abs(maiorAB-c)))/2);

console.log(`${maior} eh o maior`);