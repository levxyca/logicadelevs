# Como resolver os problemas do URI com Javascript?

## Cabeçalho para rodar o Javascript como o URI pede

- Fazendo requisição do modulo fs(para ler o conteúdo do arquivo)
- readFileSync é um método síncrono
- Passamos dois parâmetros, o primeiro é o nome do arquivo e o segundo é o tipo de encoding

```
const input = require("fs").readFileSync("stdin", "utf8");
```

## Para quebrar a string a partir de um separador

```
const linhas = input.split(" ");
```

## Desestruturando o vetor

```
const [x, y] = input.split(" ");
```

## Utilizando o map para mapear o item e fazer com que ele retorne o valor inteiro desse item

```
const [x, y] = input.split(" ").map(item => parseInt(item));
```

## Para rodar o arquivo.

```
node .\script.js
```