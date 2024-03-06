const status = require('.././utils/response-status');

const authUser = {
    id: 1,
    role: 'user',
    name: 'John Doe',
    token: '12345'
}

const hasRole = (req, res, next) => {
    if(authUser.role == 'user'){
        next();
    }else{
        res.sendStatus(status.FORBIDDEN);
    }
}


module.exports = hasRole;