const Meeting = require('../Model');
const message = require('../../utils/messages');
const { get } = require('lodash');
const MeetingSearchQuery = require('../queries/search');

// Paginated search
const MeetingSearch = async (req, res) => {
  let limit = +get(req, 'body.limit', 10);
  limit = limit > 100 ? 100 : limit; 
  const page = +get(req, 'body.page', 1);

  const hostEmail = get(req, 'body.hostEmail', '');

  // create query
  let query = {};

  if (hostEmail) {
    query.hostEmail = { $eq: hostEmail };
  }

  const meetingTotal = Meeting.countDocuments(query); // MongoDb count quantity
  const meetingSearch = MeetingSearchQuery({ query, page, limit }); 

  // Launch paralell requests
  const PromiseAllResult = await Promise.all([meetingTotal, meetingSearch]);

  const searchResultCount = PromiseAllResult[0];
  const searchResult = PromiseAllResult[1];

  if (searchResult.success) {
    // create obj with found result
    const pageCount = Math.ceil(searchResultCount / limit);
    
    const result = {
      pageCount,
      limit,
      itemsCount: searchResultCount,
      items: searchResult.payload,
    }  
    res.status(200).json(message.success('Meeting Search Result', { result }));
  } else {
    res.status(400).json(message.fail('Meeting Search Error'));
  }
};

module.exports = MeetingSearch;
