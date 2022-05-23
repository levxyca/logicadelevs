let input = require("fs").readFileSync("./dev/stdin", "utf8");
let lines = input.split("\n");

let [w1, w2, w3] = lines;

w1 = w1.trim();
w2 = w2.trim();
w3 = w3.trim();

if (w1 == "vertebrado") {
  if (w2 == "ave") if (w3 == "carnivoro") console.log("aguia");
  if (w2 == "ave") if (w3 == "onivoro") console.log("pomba");
  if (w2 == "mamifero") if (w3 == "onivoro") console.log("homem");
  if (w2 == "mamifero") if (w3 == "herbivoro") console.log("vaca");
}

if (w1 == "invertebrado") {
  if (w2 == "inseto") if (w3 == "hematofago") console.log("pulga");
  if (w2 == "inseto") if (w3 == "herbivoro") console.log("lagarta");
  if (w2 == "anelideo") if (w3 == "hematofago") console.log("sanguessuga");
  if (w2 == "anelideo") if (w3 == "onivoro") console.log("minhoca");
}
