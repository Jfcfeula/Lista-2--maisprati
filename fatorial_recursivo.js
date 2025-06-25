const readline = require('readline');

function fatorial(n) {
  if (n < 0) {
    throw new Error("Não existe fatorial de número negativo.");
  }

  if (n === 0) {
    return 1;
  }

  return n * fatorial(n - 1);
}
let n = readline.questionInt('Digite um número:');
console.log(fatorial(n));
