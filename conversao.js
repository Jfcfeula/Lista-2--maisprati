const readline = require('readline');

const i = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function parParaObjeto(par) {
  const [chave, valor] = par;
  return { [chave]: valor };
}
function objetoParaPar(obj) {
  const chave = Object.keys(obj)[0];
  return [chave, obj[chave]];
}
i.question('Digite a chave do par: ', (chavePar) => {
  i.question('Digite o valor do par: ', (valorPar) => {
    const obj = parParaObjeto([chavePar, valorPar]);
    console.log('Objeto criado a partir do par:', obj);

    i.question('\nDigite a chave da propriedade do objeto: ', (chaveObj) => {
      i.question('Digite o valor da propriedade do objeto: ', (valorObj) => {
        const par = objetoParaPar({ [chaveObj]: valorObj });
        console.log('Par criado a partir do objeto:', par);

        i.close();
      });
    });
  });
});
