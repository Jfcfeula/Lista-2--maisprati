const readline = require('readline');

function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer); 
        timer = setTimeout(() => fn(...args), delay); 
    };
}
function responderGremista() {
    console.log('Belo argumento, gremista. Pena que o Chico Kim fez de pênalti.');
    process.exit();
}
const i = readline.createInterface({
    input: process.stdin, 
    output: process.stdout 
});
i.question('Você torce para o Grêmio? (SIM/NÃO) ', function(resposta) {
    if (resposta.trim().toUpperCase() === 'NÃO') {
        console.log('Você tem bom senso. Parabéns!');
        i.close();
    } else {
        console.log('Por quê?');
        let justificativa = '';

        const debouncedResponder = debounce(() => {
            console.log(`Você disse: "${justificativa.trim()}"`);
            responderGremista(); 
        }, 3000);
        process.stdin.on('data', (entrada) => {
            justificativa += entrada.toString(); 
            debouncedResponder(); 
        });
    }
});
