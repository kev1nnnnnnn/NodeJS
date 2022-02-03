exports.middlewareGlobal = (req, res, next) => {
    //console.log('primeiro middleware');
    next();
};

exports.outroMiddleware = (req, res, next) => {
    //console.log('Sou seu outro middleware');
    next();
}