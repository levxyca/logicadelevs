let input = require("fs").readFileSync("./dev/stdin", "utf8");
let N = input.split("\n");

N = parseInt(N);

for (let i = 1; i < 11; i++) {
  console.log(`${i} x ${N} = ${i * N}`);
}
