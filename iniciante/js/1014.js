const input = require("fs").readFileSync("./dev/stdin", "utf8");

let [x, y] = input.split("\n");

x = parseInt(x);
y = parseFloat(y).toFixed(1);

let cm = x / y;

console.log(`${cm.toFixed(3)} km/l`);