//funcionalidades de fluxo de requisições,


exports.middlewareGlobal = (req, res, next) => {
    console.log('primeiro middleware');
    next(); //responsável por chamar o próximo middleware.
};

exports.outroMiddleware = (req, res, next) => {
    console.log('Sou seu outro middleware');
    next();
}
