const UsersController = require('../controllers/users.controller');

const router = require('express').Router();


router.get('', (req, res) => {
    res.send('auth works!');
});

router.post('/signup', UsersController.createUser);


module.exports = router;