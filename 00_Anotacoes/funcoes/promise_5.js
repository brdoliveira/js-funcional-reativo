function funcionarOuNao(valor,chanceErro){
    return new Promise((resolve,reject) => {
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro!')
        }else{
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.1)
    .then(valor => console.log(`Valor: ${valor}`))
    .then(
        v => cond.log(v),
        error => console.log(`Erro Esp.: ${error}`)
    )
    .catch(error => console.log(`Erro: ${error}`))
    .finally((() => console.log('Fim')))