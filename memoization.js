const readline = require('readline');

function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args.sort()); // Inter x Grêmio = Grêmio x Inter
        if (cache.has(key)) {
            console.log('(Usando cache)');
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

function simularPartida(time1, time2) {
    const resultado = Math.random(); 
    if (resultado < 0.45) return `${time1} venceu ${time2}`;
    if (resultado < 0.90) return `${time2} venceu ${time1}`;
    return `${time1} e ${time2} empataram`;
}

const simularComCache = memoize(simularPartida);

const i = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntarPartida() {
    i.question('Digite o nome do primeiro time:', (t1) => {
        i.question('Digite o nome do segundo time:', (t2) => {
            if (t1.trim().toUpperCase() === t2.trim().toUpperCase()) {
                console.log('A vida não é Bomba Patch! Um time não pode jogar contra ele mesmo.');
                return perguntarPartida();
            }

            const resultado = simularComCache(t1.trim().toUpperCase(), t2.trim().toUpperCase());
            console.log(`Resultado: ${resultado}`);

            i.question('Deseja simular outro confronto? (SIM/NÃO): ', (resposta) => {
                if (resposta.trim().toUpperCase() === 'SIM') {
                    perguntarPartida();
                } else {
                    console.log('Encerrando o simulador...');
                    i.close();
                }
            });
        });
    });
}

console.log('Simulador de Futebol');
perguntarPartida();
