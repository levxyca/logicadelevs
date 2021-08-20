const input = require("fs").readFileSync("./dev/stdin", "utf8");

const [a, b, c] = input.split("\n").map(item => parseFloat(item));

const media = ((a * 2) + (b * 3) + (c * 5)) / 10 

console.log(`MEDIA = ${media.toFixed(1)}`)