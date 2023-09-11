// somar(3)(4)(5)
function somar(a){
    return function(b){
        return function(c){
            return  a + b + c
        }
    }
}

const soma345 = somar(3)(4)(5)
console.log(soma345);

// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn)
function calcular(x){
    return function(y){
        return function(fn){
            return fn(x,y)
        }
    }
}

function subtrair(first, second){
    return first - second
}

function multiplicar(first, second){
    return first * second
}

const r1 = calcular(3)(7)(subtrair)
console.log(r1);

const r2 = calcular(3)(7)(multiplicar)
console.log(r2);