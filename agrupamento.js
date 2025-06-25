const readline = require('readline');

const i = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const vendas = [];

function clientes() {
    i.question('Digite o nome do cliente: ', (nome) => {
        i.question('Digite o total da venda: ', (totalStr) => {
            const total = parseFloat(totalStr);
            if (!nome || isNaN(total)) {
                console.log('Algo está errado. Tente novamente.');
                return clientes(); 
            }
            vendas.push({ nome, total });
            i.question('Quer adicionar mais um cliente? (s/n) ', (resposta) => {
                if (resposta.trim().toLowerCase() === 's') {
                    clientes();
                } else {
                    agrupamento();
                    i.close();
                }
            });
        });
    });
}
function agrupamento() {
    const grupo = vendas.reduce((acumulador, venda) => {
        if (!acumulador[venda.nome]) {
            acumulador[venda.nome] = 0;
        }
        acumulador[venda.nome] += venda.total;
        return acumulador;
    }, {});

    console.log('Total de vendas por cliente:');
    for (const cliente in grupo) {
        console.log(`${cliente}: R$ ${grupo[cliente].toFixed(2)}`);
    }
}
clientes();
