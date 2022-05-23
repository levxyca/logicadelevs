const input = require("fs").readFileSync("./dev/stdin", "utf8");

let value = input.split("\n");

value = parseFloat(value);

switch (true) {
  case value >= 0 && value <= 25:
    console.log("Intervalo [0,25]");
    break;
  case value > 25 && value <= 50:
    console.log("Intervalo (25,50]");
    break;
  case value > 50 && value <= 75:
    console.log("Intervalo (50,75]");
    break;
  case value > 75 && value <= 100:
    console.log("Intervalo (75,100]");
    break;
  default:
    console.log("Fora de intervalo");
}
