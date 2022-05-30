const mongoose = require('mongoose');
const Meeting = require('../Model');
const message = require('../../utils/messages');

module.exports = async function findMeetingQuery(id) {
  return Meeting.findById(id)
    .exec()
    .then((doc) => {
      if(doc){
        return message.success('Meeting found', {doc});
      } else {
        return message.fail('Meeting not found');
      }
    })
    .catch((error) => {
      return message.fail('Meeting found error', error.message);
    });
};