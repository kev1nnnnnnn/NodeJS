require('dotenv').config();  

const express = require('express');
const app = express();
const port = 3030;
//todo - conexão com a base de dados
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB,  { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {

    console.log('conectei a base de dados');
    app.emit('Estou pronto'); //todo - emitir um evento para a base escutar primeiro
})
.catch(e => console.log(e));
 
/** 
 *? middleware express-session armazena os dados da sessão no servidor; ele salva apenas o ID da sessão no cookie, não os dados da sessão. Por padrão, ele usa armazenamento em memória e não é projetado para um ambiente de produção. */
const session = require('express-session');   
//? CONEXÃO COM O BANCO DE DADOS MONGODB
const MongoStore = require('connect-mongo'); 
//? PERMITE QUE UMA MSG SEJA ENVIADA SEMPRE QUE O USUARIO REDIRECIONAR PARA UMA PAGINA ESPECIFICA
const flash = require('connect-flash');  
//? ROTAS    
const routes = require('./routes'); 
//? CONTROLE DE ARQUIVOS E DIRETÓRIOS     
const path = require('path');  
//?SEGURANÇA              
const helmet = require('helmet');
const csrf = require('csurf');        
//?const meuMiddleware = require('./src/middlewares/middleware');
const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware');



app.use(helmet());
app.use(express.urlencoded({extended: true}));
//Pasta de conteúdo estáticos. ex (assets, img, css)ss
app.use(express.static(path.resolve(__dirname, 'public')));

//configurando a sessao
const sessionOptions = session({
  secret: 'texto que ninguem pode saber aqui',
  store: MongoStore.create({ mongoUrl: process.env.MONGODB }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOptions);
app.use(flash());



app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//todo - meu próprio middleware
app.use(csrf());

app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

//todo - recebendo o emit para escutar primeiro.

app.on('connect', () => {
});
  app.listen(port, () => {
    console.log(`Servidor executando na porta http://localhost:${port}`);
  });

   



