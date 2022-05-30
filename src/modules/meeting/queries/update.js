const mongoose = require('mongoose');
const Meeting = require('../Model');
const message = require('../../utils/messages');

module.exports = async function updateMeetingQuery(id, values) {
const _id = values._id
  return Meeting.updateOne({ _id }, { $set: values }, { runValidators: true })
    .exec()
    .then(() => {
        return message.success('Meeting updated');
    })
    .catch((error) => {
      return message.fail('Meeting update error', error.message);
    });
  
  
  
};