function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        }, tempo)
    })
}

esperarPor(3000)
    .then(() => console.log('Executando promisse 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promisse 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promisse 3...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10),5000)
    })
}

async function executar(){
    let valor = await retornarValor()

    esperarPor(1500)
    console.log(`Async/Await ${valor}...`)
    esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)
    esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log("valor = ", valor)
}

executarDeVerdade()