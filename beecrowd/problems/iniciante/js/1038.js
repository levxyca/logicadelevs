const input = require("fs").readFileSync("./dev/stdin", "utf8");

let values = input.split(" ");

let valuesParse = values.map(function (x) {
  return parseInt(x);
});

let [cod, qtd] = valuesParse;

let items = [
  {
    codigo: 1,
    nome: "Cachorro Quente",
    preco: 4.0,
  },
  {
    codigo: 2,
    nome: "X-Salada",
    preco: 4.5,
  },
  {
    codigo: 3,
    nome: "X-Bacon",
    preco: 5.0,
  },
  {
    codigo: 4,
    nome: "Torrada simples",
    preco: 2.0,
  },
  {
    codigo: 5,
    nome: "Refrigerante",
    preco: 1.5,
  },
];

let i = cod - 1;

let total = qtd * items[i].preco;

console.log(`Total: R$ ${total.toFixed(2)}`);
