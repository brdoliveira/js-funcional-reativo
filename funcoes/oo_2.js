class Produto {
    constructor(nome, preco, desc) {
      this.nome = nome
      this.preco = preco
      this.desc = desc
    }
  
    get nome() {
      return this._nome
    }
  
    set nome(novoNome) {
      this._nome = novoNome.toUpperCase()
    }
  
    get preco() {
      return this._preco
    }
  
    set preco(novoPreco) {
      this._preco = novoPreco
    }
  
    get precoFinal() {
      return this.preco * (1 - this.desc)
    }
  }
  
  const p1 = new Produto('Caneta', 10, 0.5)
  const p2 = new Produto('Geladeira', 2345.98)
  
  console.log(p1.nome)
  console.log(p1.precoFinal)