const express = require('express');
const router = require('express').Router();
const usersRoute = require('./users');
const authRoute = require('./auth');

router.use(express.json());

router.use('/users', usersRoute);
router.use('/auth', authRoute);

router.get('', (req, res) => {
    res.send('router works');
})





module.exports = router;