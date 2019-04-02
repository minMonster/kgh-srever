const router = require('koa-router')();
const User = require('../controller/user.js');
const checkToken = require('../token/checkToken.js');
router.prefix('/users');

router.get('/', checkToken, User.CreatedUserType);
router.post('/login', checkToken, User.Login);

module.exports = router;
