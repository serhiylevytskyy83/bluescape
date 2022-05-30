const User = require('../user/Model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function userlogin(req, res) {
  const username = req.body.username;
  const passWord = req.body.password;
  // console.log(req);
  User.findOne({ username }).then((user) => {
    if (!user) {
      res.status(400).json({ message: 'The username does not exist' });
    } else {
      let token = jwt.sign({ username: user.username }, 'secretKey', {
        expiresIn: '1d',
      });
      bcrypt.compare(passWord, user.password).then((passwordMatch) =>
        passwordMatch
          ? res.status(200).json({
              message: 'The username and password combination is correct!',
              token: token,
            })
          : res.status(400).json({ message: 'The password is invalid' }),
      );
    }
  });
}

module.exports = userlogin;
