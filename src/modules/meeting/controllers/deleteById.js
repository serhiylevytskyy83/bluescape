// const Meeting = require('../Model');
const message = require('../../utils/messages');
// const analytics = require('../../analytics/controllers/analytics');
const { get } = require('lodash');
// const clientRemoveOrderQuery = require('../../client/queries/removeOrder');
const deleteMeetingQuery = require('../queries/delete');

const meetingDeleteById = async (req, res) => {
  const meetingId = get(req, 'params.meetingId');

  await deleteMeetingQuery(meetingId)
  .then(()=> 
    res.status(201).json(message.success('Meeting deleted', { meetingId }))
  )};

module.exports = meetingDeleteById;
