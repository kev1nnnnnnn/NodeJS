// const mod1 =  require('./mod1');
// const falaNome = require('./mod1').falaNome;
// const falaNome = mod1.falaNome;
// const {nome, sobrenome, falaNome} = require('./mod1');
// console.log(falaNome());
// console.log(nome, sobrenome);
// console.log(mod1.falaNome());
const path = require('path');
const {Pessoa} = require('./mod1');

const axios = require('axios');
axios('https://viacep.com.br/ws/69038279/json/')
.then(response => console.log(response.data))
.catch(e => console.log(e));
