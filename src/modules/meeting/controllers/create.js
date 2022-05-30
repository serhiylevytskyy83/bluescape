const message = require('../../utils/messages');
// const analytics = require('../../analytics/controllers/analytics');
const { get } = require('lodash');
const createMeetingQuery = require('../queries/create');
// const clientAddOrderQuery = require('../../client/queries/addOrder');
// const createClientQuery = require('../../client/queries/create');
// const createServiceAddressQuery = require('../../address/queries/create');
const generateId = require('../../utils/generateId');
// const clientAddAddressQuery = require('../../client/queries/addAddress');

async function meetingCreate(req, res) {
  const meetingId = generateId(); // Create id of meeting

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
  const meetingCreate = await createMeetingQuery(meeting);

  if (meetingCreate.success) {
    res.status(201).json(message.success('Meeting created', { meetingId }));
  } else {
    res.status(400).json(message.fail('Meeting create error', { meetingId, error: meetingCreate.payload.message }));
  }
}

module.exports = meetingCreate;
