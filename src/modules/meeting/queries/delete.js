const mongoose = require('mongoose');
const Meeting = require('../Model');
const message = require('../../utils/messages');

module.exports = async function deleteMeetingQuery(id) {
console.log(id)
  return Meeting.deleteOne({ _id: id })
    .exec()
    .then(() => {
        return message.success('Meeting deleted');
    })
    .catch((error) => {
      return message.fail('Meeting delete error', error.message);
    });
};