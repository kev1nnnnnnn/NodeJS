const homeModel = require('../models/HomeModel');

exports.paginaInicial = (req, res) => {
    

    res.render('index', {
        titulo: 'este será o título da pagina',
        numeros: [0, 1, 2, 3, 4, 5]
    });

    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}