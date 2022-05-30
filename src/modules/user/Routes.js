const Router = require('express');
const userRegister = require('./controller/userRegister');
// const userDeleteById = require('./controller/userDeleteById');
const userDeleteAll = require('./controller/userDeleteAll');
const authorization = require('../core/authorization');

const router = Router();
router.post('/add', userRegister);
// router.delete('/:userId', authorization, userDeleteById);
router.delete('/deleteAll', authorization, userDeleteAll);

module.exports = router;
