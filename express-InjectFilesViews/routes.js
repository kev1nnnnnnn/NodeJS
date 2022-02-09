const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');

//GET
route.get('/', homeController.paginaInicial);

//POST
route.post('/', homeController.trataPost);

// exporta para outros arquivos
module.exports = route;
