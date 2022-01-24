//atrela o requerimento do fileSystem para uma const
const fs = require('fs').promises; 

module.exports = (caminho, dados) => {

    //cria o arquivo
    fs.writeFile(caminho, dados, {flag: 'w'}); // 'w' apaga o arquivo inteiro e recomeça a escrever
};
