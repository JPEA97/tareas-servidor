const router = require('express').Router();
const usersRoute = require('./users');

router.get('', (req, res) => {
    res.send('router works');
})

router.use('/users', usersRoute);



module.exports = router;