const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
//const meuMiddleware = require('./src/middlewares/middleware');
const {middlewareGlobal, outroMiddleware} = require('./src/middlewares/middleware');
app.use(express.urlencoded({extended: true}));

//Pasta de conteúdo estáticos. ex (assets, img, css)
app.use(express.static(path.resolve(__dirname, 'public')));


app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//meu próprio middleware
app.use(middlewareGlobal);
app.use(outroMiddleware);
app.use(routes);

app.listen(3000, () => {

console.log("Servidor rodando -> http://localhost:3000");

});
