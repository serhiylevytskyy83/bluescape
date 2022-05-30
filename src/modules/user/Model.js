const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
});
userSchema.index({ email: 1 }, { unique: true }); // unique index to not duplicate email or set option in MongoDB

module.exports = mongoose.model('User', userSchema);
