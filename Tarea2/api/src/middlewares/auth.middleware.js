const status = require('.././utils/response-status');

const authUser = {
    id: 1,
    role: 'admin',
    name: 'John Doe',
    token: '12345'
}

const middleware = (req, res, next) => {
    const {token} = req.query;

    if(token && token === '12345'){
        req.user = {...authUser};
        next();
    } else{
        res.sendStatus(status.UNAUTHORIZED);
    }
}

module.exports = middleware;