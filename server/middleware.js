const jwt = require('jsonwebtoken');

module.exports.saveRedirectUrl = (req,res,next) => {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send('Unauthorized');
    }

    jwt.verify(token, 'mysupersecretcode', (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(401).send('Invalid token');
        }
        
        req.user = decoded;
        next();
    });
};