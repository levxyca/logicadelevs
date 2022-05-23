let input = require("fs").readFileSync("./dev/stdin", "utf8");
let values = input.split("\n");

let enter = values.map((x) => parseInt(x));
let counter = enter.length;

let a = 0,
  g = 0,
  d = 0;

for (let i = 0; i <= counter; i++) {
  if (enter[i] === 1) a = a += 1;
  if (enter[i] === 2) g = g += 1;
  if (enter[i] === 3) d = d += 1;
  if (enter[i] === 4) break;
}

console.log(`MUITO OBRIGADO\nAlcool: ${a}\nGasolina: ${g}\nDiesel: ${d}`);
