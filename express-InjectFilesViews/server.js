require('dotenv').config();

const express = require('express');
const app = express();
const port = 3030;
//conexão com a base de dados
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB,  { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {

    console.log('conectei a base de dados');
    app.emit('Estou pronto'); //emitir um evento para a base escutar primeiro
})
.catch(e => console.log(e));

//TRABALHANDO COM SESSION
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
//const meuMiddleware = require('./src/middlewares/middleware');
const {middlewareGlobal} = require('./src/middlewares/middleware');

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

//meu próprio middleware
app.use(middlewareGlobal);
app.use(routes);

//recebendo o emit para escutar primeiro.

app.on('connect', () => {
});
  app.listen(port, () => {
    console.log(`Servidor executando na porta http://localhost:${port}`);
  });

   



