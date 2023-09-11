function Produto(nome, preco, desc = 0.15) {
  this.nome = nome;
  this.preco = preco;
  this._desc = desc;

  this.precoFinal = function () {
    return this.preco * (1 - this._desc);
  };
}

Produto.prototype.log = function () {
  console.log(`Nome: ${this.nome} | Preço: ${this.preco}`);
};

Object.defineProperty(Produto.prototype, "desc", {
  get: function () {
    return this._desc;
  },
});

const p1 = new Produto("Caneta", 10, 0.5);
const p2 = new Produto("Geladeira", 2345.98);

p1.log();

console.log(p1.nome);
console.log(p1.precoFinal());
console.log(p1.desc);
