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