const pessoa = {
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo'
}

// Atribuição por Referência
function alteraPessoa(novaPessoa){
    novaPessoa.nome = 'João'
    novaPessoa.cidade = 'Fortaleza'

    return novaPessoa
}

console.log(alteraPessoa(pessoa))