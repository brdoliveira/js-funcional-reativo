/**
 * Currying
 * Currying é o processo de transformar uma função que espera vários argumentos
 * em uma função que espera um único argumento e retorna outra função curried.
 * Por exemplo, uma função que recebe três argumentos, ao sofrer currying,
 * resulta em uma função que recebe um argumento e retorna uma função que recebe um argumento,
 * que por sua vez retorna uma função que recebe um argumento e
 * retorna o resultado da função original.
 */

function textoComTamanhoEntre(min, max, erro, texto) {
  const tamanho = (texto || "").trim().length;

  if (tamanho < min || tamanho > max) {
    throw erro;
  }
}

const p1 = { nome: "A", preco: 14.99, desc: 0.25 };

const mostrarTudo = textoComTamanhoEntre(4, 255, "Nome Invalido", p1.nome);

console.log(mostrarTudo);
