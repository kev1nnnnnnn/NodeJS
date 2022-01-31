
//resposta do get
exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};

//resposta do post
exports.trataPost = (req, res) => {
    res.send(req.body.cliente);
    
    return;
}

