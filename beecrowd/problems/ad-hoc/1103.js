let input = require("fs").readFileSync("./dev/stdin", "utf8");
let values = input.trim().split("\n");

const converter = (h, m) => {
  return 60 * h + m;
};

values.pop();

while (values.length) {
  let [H1, M1, H2, M2] = values
    .shift()
    .trim()
    .split(" ")
    .map((x) => parseInt(x));

  if (H2 < H1 || (H2 == H1 && M2 < M1)) H2 += 24;
  let response = converter(H2, M2) - converter(H1, M1);

  console.log(response);
}
