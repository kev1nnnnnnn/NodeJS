const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

const app = express();
const port = 3030;

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.get('/', (req, res) => {

    res.send(`
        <form action="/" method="POST">
        <input type="text" name="nome" placeholder="digite algo">
        <button>enviar</button>
        </form>
    `);
});

app.get('/teste/:iduser', (req, res) => {
    console.log(req.params);
    res.send(req.query.profile);
})

app.get('/testeDois/:id?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send('ola: ' + req.params);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`voce enviou: ${req.body.nome}`);
});

app.listen(port, () => {
    console.log('http://localhost:3030');
    console.log('Rodando na porta 3030');
})