const input = require("fs").readFileSync("./dev/stdin", "utf8");

let values = input.split(" ");

let valuesParse = values.map(function (x) {
  return parseFloat(x);
});

let [X, Y] = valuesParse;

if (X > 0 && Y > 0) {
  console.log("Q1");
} else if (X < 0 && Y > 0) {
  console.log("Q2");
} else if (X < 0 && Y < 0) {
  console.log("Q3");
} else if (X > 0 && Y < 0) {
  console.log("Q4");
} else if (X === 0 && Y === 0) {
  console.log("Origem");
} else if (X === 0) {
  console.log("Eixo Y");
} else if (Y === 0) {
  console.log("Eixo X");
}
