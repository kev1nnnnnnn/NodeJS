const homeModel = require('../models/HomeModel');

homeModel.find()
.then(dados => console.log(dados))
.catch(e => console.log(e));


//resposta do get
exports.paginaInicial = (req, res) => {
    //req.session.usuario = { nome: 'john', logado: true };
    //console.log(req.session.usuario);

    //const msg = req.flash('info', 'Cuidado!');
    console.log(req.flash('error'));
    res.render('index');
    return;
};

//resposta do post
exports.trataPost = (req, res) => {
    res.send(req.body.cliente);
    
    return;
}

