const readline = require('readline-sync');

function ehDataValida(dia, mes, ano) {
  if (ano < 1 || mes < 1 || mes > 12 || dia < 1) return false;
  let diasMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    diasMes[1] = 29;
  }
  return dia <= diasMes[mes - 1];
}
let dia = readline.questionInt('Dia: ');
let mes = readline.questionInt('Mês: ');
let ano = readline.questionInt('Ano: ');
console.log(ehDataValida(dia, mes, ano));

