let input = require("fs").readFileSync("./dev/stdin", "utf8");
let values = input.split("\n");

let C = values.shift();

while (C !== 0) {
  let controle = values.shift().trim().split(" ");
  controle = controle.map((x) => parseInt(x));
  let N = controle.shift();
  let media = 0,
    response = 0;

  for (let i = 0; i < N; ++i) media += controle[i];

  media /= N;

  for (let i = 0; i < N; ++i) if (controle[i] > media) response += 1;

  response = (response / N) * 100;
  console.log(`${response.toFixed(3)}%`);

  C--;
}
