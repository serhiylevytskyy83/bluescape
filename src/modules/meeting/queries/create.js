const mongoose = require('mongoose');
const Meeting = require('../Model');
const message = require('../../utils/messages');

module.exports = async function createMeetingQuery(values) {
  const _id = values._id || new mongoose.Types.ObjectId();

  const meeting = new Meeting({
    _id,
    ...values,
  });

  return meeting
    .save()
    .then(() => {
      return message.success('Meeting created', values._id || _id);
    })
    .catch((error) => {
      return message.fail('Meeting create error', error);
    });
};
