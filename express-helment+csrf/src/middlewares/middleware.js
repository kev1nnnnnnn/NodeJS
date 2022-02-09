exports.middlewareGlobal = (req, res, next) => {
    //console.log('primeiro middleware');
    res.locals.umaVariavelLocal = () => {
        const obj = {
            var: 'variavel local'
        }
        return obj;
    }
    next();
};

exports.outroMiddleware = (req, res, next) => {
    //console.log('Sou seu outro middleware');
    next();
}

exports.checkCsrfError = (err, req, res, next) => {

    if(err && 'EBADCSRFTOKEN' == err.code) {
        return res.render('error');
    }
};

exports.csrfMiddleware = (req, res, next) => {

    res.locals.csrfToken = req.csrfToken();
    next();
}