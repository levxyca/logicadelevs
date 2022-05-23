const input = require("fs").readFileSync("./dev/stdin", "utf8");

let lines = input.split("\n");

let notas = lines.shift().split(" ");
let exame = lines.shift();

let valuesParse = notas.map(function (x) {
  return parseFloat(x);
});

let [N1, N2, N3, N4] = valuesParse;

let media = (N1 * 2 + N2 * 3 + N3 * 4 + N4 * 1) / 10;

console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7.0) {
  console.log("Aluno aprovado.");
} else if (media < 5.0) {
  console.log("Aluno reprovado.");
} else if (media >= 5.0 && media <= 6.9) {
  console.log("Aluno em exame.");
  exame = parseFloat(exame);
  console.log(`Nota do exame: ${exame.toFixed(1)}`);
  media = (exame + media) / 2;
  if (media >= 5.0) {
    console.log("Aluno aprovado.");
  } else if (media <= 4.9) {
    console.log("Aluno reprovado.");
  }
  console.log(`Media final: ${media.toFixed(1)}`);
}
