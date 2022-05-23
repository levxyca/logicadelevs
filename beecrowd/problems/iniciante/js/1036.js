const input = require("fs").readFileSync("./dev/stdin", "utf8");

let values = input.split(" ");

let valuesParse = values.map(function (x) {
  return parseFloat(x);
});

let [A, B, C] = valuesParse;

let delta = ((B**2)-(4*A*C));

let R1, R2;

if (delta < 0 || A === 0) {
 console.log("Impossivel calcular");
} else {
  R1 = (((-B)+(Math.sqrt(delta)))/(2*A));
  R2 = (((-B)-(Math.sqrt(delta)))/(2*A));

  console.log(`R1 = ${R1.toFixed(5)}`);
  console.log(`R2 = ${R2.toFixed(5)}`);
}