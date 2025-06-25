const readline = require('readline');

let string = readline.question('Escreva o que quiser:').split(' ');
let SemRepeticoes = [];

for (let x = 0; x < string.length; x++) {
    let repeticao = false;
    for (let y = 0; y < SemRepeticoes.length; y++) {
        if (string[x] === SemRepeticoes[y]) {
            repeticao = true
            break;
}
}
    if (!repeticao) {
        SemRepeticoes.push(string[x]);
    }
}
console.log(SemRepeticoes.join(' '));
