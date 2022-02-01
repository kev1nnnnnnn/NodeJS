const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({extended: true}));

//traz o arquivo html renderizado
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); //npm i ejs

app.use(routes);



app.listen(3000, () => {

    console.log("Servidor rodando -> http://localhost:3000");
});