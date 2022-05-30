const Router = require('express');
const userLogin = require('./userLogin');

const router = Router();

router.post('/', userLogin); // localhost/user

module.exports = router;
