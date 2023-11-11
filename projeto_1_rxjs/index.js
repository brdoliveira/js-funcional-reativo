const path = require('path')
const fn = require("./funcoes")

const caminho = path.join(__dirname,'..', 'dados', 'legendas')
const simbolos = [
    '.','?','-',',','"','♪',
    '_','<i>','</i>','\r','[',']',
    '(',')',':','!'
]

fn.lerDiretorio(caminho)
    .pipe(
        fn.elementosTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarPor('\n'),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeApenasNumero(),
        fn.removerSimbolos(simbolos),
        fn.separarPor(' '),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeApenasNumero()
    )
    .subscribe(console.log)

// fn.lerDiretorio(caminho)
//     .then(fn.agruparElementos)
//     .then(fn.ordenarPorAtributoNumerico('qtde','desc'))
//     .then(console.log)
