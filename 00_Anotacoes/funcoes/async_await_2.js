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