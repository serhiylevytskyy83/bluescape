const Meeting = require('../Model');
const message = require('../../utils/messages');
const updateMeetingQuery = require('../queries/update');
// const analytics = require('../../analytics/controllers/analytics');
const { get } = require('lodash');
// const isClientInCompany = require('../../client/queries/isClientInCompany');

async function meetingUpdateById(req, res) {
  const meetingId = get(req, 'params.meetingId');

  // Meeting obj
  const hostEmail = get(req, 'body.hostEmail', '').trim();
  const name = get(req, 'body.name', '').trim();
  const dateTime = get(req, 'body.dateTime', '').trim();
  const attendeeEmail = get(req, 'body.attendeeEmail', []);

  const meeting = {
    _id: meetingId,
    hostEmail,
    name,
    dateTime,
    attendeeEmail,
  };
  const meetingUpdate = await updateMeetingQuery(meetingId, meeting);

  if (meetingUpdate.success) {
    res.status(201).json(message.success('Meeting updated', { meetingId }));
  } else {
    res.status(400).json(message.fail('Meeting update error', {meetingId, error: meetingUpdate.payload}));
  }
  
}

module.exports = meetingUpdateById;
