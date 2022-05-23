let input = require("fs").readFileSync("./dev/stdin", "utf8");
let lines = input.split(" ");

let v = lines.map((x) => parseInt(x));

let ordenados = [...v];

ordenados.sort((a, b) => a - b);

for (let i = 0; i < 3; ++i) {
  console.log(ordenados[i]);
}
console.log();
for (let i = 0; i < 3; ++i) {
  console.log(v[i]);
}
