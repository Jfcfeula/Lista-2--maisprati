const readline = require('readline');

const i = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const produtos = [];

function produto() {
    i.question('Digite o nome do produto: ', (nome) => {
        i.question('Digite o preço do produto: ', (precoStr) => {
            const preco = parseFloat(precoStr);

            if (!nome || isNaN(preco)) {
                console.log('Algo está errado. Tente novamente.');
                return produto(); 
            }

            produtos.push({ nome, preco });

            i.question('Quer adicionar mais um produto? (s/n) ', (resposta) => {
                if (resposta.trim().toLowerCase() === 's') {
                    produto();
                } else {
                    produtosOrdenados();
                    i.close();
                }
            });
        });
    });
}
function produtosOrdenados() {
    const nomesOrdenados = produtos
        .slice()
        .sort((a, b) => a.preco - b.preco)
        .map(produto => produto.nome);

    console.log('Produtos ordenados por preço:');
    nomesOrdenados.forEach(nome => console.log(nome));
}
produto();

