function gerarNumerosEntre(min,max,numerosProibidos){
    if(min > max){
        // Desestruturação de array
        [max,min] = [min,max]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            reject('Número repetido!')
        }else{
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    try{
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarAleatório(1, 60, numeros))
        }
        return numeros;
    }catch(e) {
        if(tentativas >= 10) {
            throw 'Excedido Numero de Tentativas!!'
        }else{
            return gerarMegaSena(qtdNumeros, tentativas ++)
        }
    }

}

gerarMegaSena(100)
    .then(console.log)
    .catch(console.log)