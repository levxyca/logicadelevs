const input = require("fs").readFileSync("./dev/stdin", "utf8");

var lines = input.split("\n");

let line1 = lines.shift();
let line2 = lines.shift();

let [x1, y1] = line1.split(" ");
let [x2, y2] = line2.split(" ");

x1 = parseFloat(x1);
x2 = parseFloat(x2);
y1 = parseFloat(y1);
y2 = parseFloat(y2);

let d1 = x2 - x1;
let d2 = y2 - y1;

d1 = Math.pow(d1, 2);
d2 = Math.pow(d2, 2);

let d = d1 + d2;

d = Math.sqrt(d);

console.log(`${d.toFixed(4)}`);