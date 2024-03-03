const router = require('express').Router();
const UsersController = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');



router.get('', authMiddleware, roleMiddleware, UsersController.getUsers);
router.get('/:id', authMiddleware, roleMiddleware, UsersController.getUserById);



module.exports = router;