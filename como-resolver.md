# Como resolver os problemas do URI com Javascript?

## Criando o algoritmo:

Para criarmos o algoritmo, precisaremos criar um arquivo com a extensão **.js**.

Então, você pode criar, como exemplo, um **script.js**.

É nele que você irá inserir o seu código Javascript com a implementação do seu algoritmo para resolver um problema do URI.

### Cabeçalho para rodar o Javascript como o URI pede

- Fazendo requisição do modulo fs(para ler o conteúdo do arquivo)
- readFileSync é um método síncrono
- Passamos dois parâmetros, o primeiro é o nome do arquivo e o segundo é o tipo de encoding

```
const input = require("fs").readFileSync("stdin", "utf8");
```

### Para quebrar a string a partir de um separador

Nesse caso, eu estou utilizando o **\n** como separador, que é o separador de pular linha, então, o código vai entender que cada vez que eu pular uma linha, é um dado diferente.

```
const linhas = input.split("\n");
```

Por esse motivo na minha entrada de dados eu estou colocando cada dado em uma linha diferente. Poderia ser feito também de outras formas, como usando um espaço como separador, nesse caso, você colocaria todos os dados na mesmo linha e cada vez que desse uma espaço o código entenderia que era um dado diferente.

### Desestruturando o vetor

Aqui estamos fazendo o seguindo, estamos criando diferentes variáveis, nesse caso, criamos x e y e estamos dizendo que cada linha é referente a um deles repectivamente.

Então, usando esse exemplo no seu código:

```
const [x, y] = input.split("\n");
```

E com essa entrada de dados:

```
10
5
```

O código irá atribuir 10 para x, e 5 para y.

### Utilizando o map para mapear o item e fazer com que ele retorne o valor inteiro desse item

Quando trabalhamos dessa forma, estamos sempre recebendo **strings** como entrada de dados, então, quando precisamos trabalhar com números, precisando converter essas strings. Nesse exemplo, estamos usando o **parseInt()** para converter uma string em um inteiro.

```
const [x, y] = input.split(" ").map(item => parseInt(item));
```

### Trabalhando com vários dados em linhas diferentes

Em um determinado momento, iremos nos deparar com a seguinte situação de uma entrada de dados:

```
10 5 9.50
6  20 4.5
```

Até o momento, estavamos usando apenas um separador para a nossa entrada de dados, mas nesse caso, temos uma linha onde é referente a uma situação e outra linha referente a outra.

Para resolvermos isso, utilizaremos o **lines.shift()**. Com ele, vamos pegar os valores de cada linha e armazenar em uma variável.

Como exemplo, vamos supor que aquele entrada de dados acima é referente a dados de peças de uma loja, sendo a linha 1 referente a uma peça e a linha 2 referente a outra peça.

```
var peca1 = lines.shift();
var peca2 = lines.shift();
```

Então aqui, peca1 recebeu os dados da primeira linha e peca 2 os da segunda linha.

Feito isso, você pode usar o esquema de desestruturar os valores para armazenar cada valor em uma variável.

## Recebendo a entrada de dados:

O primeiro passo é criar um arquivo, é através dele que iremos inserir a nossa entrada de dados quando necessário.

Por exemplo, seguindo o padrão do URI, o meu arquivo de entrada será o **stdin**, para manter a organização, irei criar uma pasta chamada dev para guardar esse arquivo, mas isso é opcional.

Dentro do arquivo, basta inserir a sua entrada de dados.

Aqui como exemplo, então inserindo dois valores inteiros:

```
10
5
```

## Para rodar o arquivo:

Após ter implementado o seu algoritmo e já tiver inserido a sua entrada de dados, vamos rodar o programa para testar se o nosso algoritmo está funcionando como o esperado.

Para isso, basta usar o **node** e indicar o caminho do seu arquivo de extensão **.js**.

Como exemplo:

```
node .\dev\script.js
```