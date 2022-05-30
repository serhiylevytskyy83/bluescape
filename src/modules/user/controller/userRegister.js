const User = require('../Model');
const bcrypt = require('bcrypt');

async function userRegister(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const candidate = await User.findOne({ username });

  if (candidate) {
    return res.status(400).json({ message: 'User exists' });
  }
  const hashPassword = bcrypt.hashSync(password, 7);

  const user = new User({
    description: req.body.description,
    priority: req.body.priority,
    status: req.body.status,
    username: username,
    password: hashPassword,
  });

  user
    .save()
    .then(() => {
      res.status(200).json('User created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User not created');
    })
    .finally(() => {
      console.log('END');
    });
}

module.exports = userRegister;
