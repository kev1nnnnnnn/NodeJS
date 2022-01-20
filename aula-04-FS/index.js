const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    
    rootDir = rootDir || path.resolve(__dirname);
    
    const files = await fs.readdir(rootDir);

    walk(files, rootDir);
}

async function walk(files, rootDir) {
    //verifica arquivo x diretorio
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats =  await fs.stat(fileFullPath);

          //se ouver git no caminho da pasta, continua, e não mostra.
          if(/\.git/g.test(fileFullPath)) continue; 
          if(/node_modules/g.test(fileFullPath)) continue;
          
          //entrar e listar os arquivos
          if(stats.isDirectory()) {
              readdir(fileFullPath);
              continue;
            }
            
        //if(!/\.css$/g.test(fileFullPath)) continue;
        if(!/\.html$/g.test(fileFullPath)) continue;

        console.log(fileFullPath);
       
        //console.log(file, stats.isDirectory()); //verifica se é um diretorio
    }
}

readdir('/home/john/Área de Trabalho/JAVASCRIPT/curso-js-fullstack/');






