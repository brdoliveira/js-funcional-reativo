// CTRL + ALT + N = Rodar
// Precisa salvar para rodar

let a = 4;
console.log(a)

// Function Declaration
function bomDia(){
    console.log('Bom dia!')
}
bomDia()

// Function Expression
const boaTarde = function(){
    console.log('Boa tarde!')
} 
boaTarde()

function somar(a = 0 ,b = 0){
    return a + b
}

let resultado = somar(3,4)
console.log(resultado)

resultado = somar(3,5,6,7,8) // ignora os outros parametros
console.log(resultado)

resultado = somar(3)
console.log(resultado) // 3 + 0 === 3

resultado = somar()
console.log(resultado) // 0 + 0 === 0