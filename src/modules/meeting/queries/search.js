const Meeting = require('../Model');
const message = require('../../utils/messages');

module.exports = function MeetingSearchQuery({ query, page, limit }) {
  return Meeting.find(query)
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(limit * (page - 1))
    .lean()
    .exec()
    .then((docs) => {
      return message.success('Meeting search found', docs);
    })
    .catch((error) => {
      return message.fail('Meeeting search error', error);
    });
};
