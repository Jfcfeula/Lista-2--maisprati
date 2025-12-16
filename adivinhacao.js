const readline = require('readline-sync');
const numero = parseInt(Math.random() * 100);
let numero_escolhido = null;

while (numero_escolhido !== numero) {
    numero_escolhido = readline.questionInt('Digite um número entre 1 e 100:');
    if (numero_escolhido === numero) {
        console.log('Você acertou!');
    } else if (numero_escolhido > numero) {
        console.log('Mais baixo!');
    } else {
        console.log('Mais alto!');
    }

}
