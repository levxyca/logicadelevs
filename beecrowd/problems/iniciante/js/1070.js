let input = require("fs").readFileSync("./dev/stdin", "utf8");
let x = input.split("\n");

x = parseInt(x);

let impar = 0;

while (impar < 6) {
  if (x % 2 !== 0) {
    console.log(x);
    impar++;
  }
  x++;
}
