let input = require("fs").readFileSync("./dev/stdin", "utf8");
let values = input.split("\n");

let enter = values.map((x) => parseInt(x));
let N = enter.shift();

const isPrime = (value) => {
  for (let i = 2; i < value; i++)
    if (value % i === 0) {
      return "nao eh primo";
    }
  return "eh primo";
};

for (let i = 0; i < N; i++) console.log(`${enter[i]}`, isPrime(enter[i]));
