const jwt = require('jsonwebtoken');

const authorization = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decode = jwt.verify(token, 'secretKey');
    req.user = decode;
    next();
  } catch (error) {
    res.json({
      message: 'Access is forbidden',
    });
  }
};
module.exports = authorization;
