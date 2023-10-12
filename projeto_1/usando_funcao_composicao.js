const path = require('path')
const fn = require("./funcoes")

const caminho = path.join(__dirname,'..', 'dados', 'legendas')
const simbolos = [
    '.','?','-',',','"','♪',
    '_','<i>','</i>','\r','[',']',
    '(',')',':'
]

fn.composicao(
    fn.lerDiretorio,
    fn.elementosTerminadosCom('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.separarPor('\n'),
    fn.removerElementosSeVazio,
    fn.removerElementosSeIncluir('-->'),
    fn.removerElementosSeApenasNumero,
    fn.removerSimbolos(simbolos),
    fn.mesclarElementos,
    fn.separarPor(' '),
    fn.removerElementosSeVazio,
    fn.removerElementosSeApenasNumero,
    fn.agruparElementos,
    fn.ordenarPorAtributoNumerico('qtde','desc')
)(caminho).then(console.log)
