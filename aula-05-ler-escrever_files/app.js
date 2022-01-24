const path = require('path');

const caminhoArquivo = path.resolve(__dirname,'teste.json');
//txt, json
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas = [
//     {nome: 'john'},
//     {nome: 'hugo'},
//     {nome: 'viviane'},
//     {nome: 'eunice'},
// ]
// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json);

//async retorna uma promise (promeça)
async function lerArquivo(caminho) {

    const dados = await ler(caminho);
    
    renderDados(dados);
}
function renderDados(dados) {
    dados = JSON.parse(dados);
    
    dados.forEach(val => console.log(val));
}

lerArquivo(caminhoArquivo);

const dadosArquivos = lerArquivo(caminhoArquivo)
.then(dados => console.log(dados))
.catch()

console.log(dadosArquivos);