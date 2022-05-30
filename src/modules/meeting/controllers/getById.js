const Meeting = require('../Model');
const message = require('../../utils/messages');
// const analytics = require('../../analytics/controllers/analytics');
const { get } = require('lodash');
const findMeetingQuery = require('../queries/findById');

const orderGetById = async(req, res) => {
  const meetingId = get(req, 'params.meetingId');
  
const meetingFound = await findMeetingQuery(meetingId);

if (meetingFound.success) {
  res.status(201).json(message.success('Meeting found', meetingFound.payload ));
} else {
  res.status(400).json(message.fail('Meeting of interest does not exist', {meetingId, error: meetingFound.payload}));
}

};

module.exports = orderGetById;
