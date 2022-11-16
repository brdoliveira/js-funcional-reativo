const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getNome = (item) => item.nome;
const qtdeMaiorQueZero = (item) => item.qtde > 0;
// const qtdeMaiorIgualAZero = item => item.qtde >= 0
// const qtdeMuitoGrande = item => item.qtde >= 1000

const nomesItensValidos = carrinho.filter(qtdeMaiorQueZero).map(getNome);
console.log(nomesItensValidos);

// Como funciona o filter:
Array.prototype.meuFilter = function (fn) {
  const novoArray = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[(i, i, this)])) {
      novoArray.push(this[i]);
    }
  }
  return novoArray;
};
