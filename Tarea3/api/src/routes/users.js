const router = require('express').Router();
const UsersController = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
const User = require('../models/user');


router.use(authMiddleware, roleMiddleware);

router.get('', UsersController.getUsers);
router.get('/:id', UsersController.getUserById);
router.delete('/delete/:id', UsersController.deleteUser);



module.exports = router;