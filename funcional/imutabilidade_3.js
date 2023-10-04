const pessoa = {
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end: {
        rua: 'Feliz!'
    }
}

// Atribuição por Referência (Função Impura!)
function alteraPessoa(pessoa){
    const novaPessoa = {...pessoa}
    novaPessoa.nome = 'João'
    novaPessoa.cidade = 'Fortaleza'
    novaPessoa.end.rua = 'ABC'
    return novaPessoa
}

console.log(alteraPessoa(pessoa))

let a = 3
let b = a // Atribuição por valor (copia)

a++
b--

console.log(a,b)