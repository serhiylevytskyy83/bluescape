const User = require('../Model');

function userDeleteAll(req, res) {
  User.deleteMany()
    .exec()
    .then(() => {
      res.status(200).json("Users deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Users delete error');
    });
}

module.exports = userDeleteAll;
