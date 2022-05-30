const { Router } = require('express');

const meetingCreate = require('./controllers/create');
const meetingGetById = require('./controllers/getById');
const meetingSearch = require('./controllers/search');
const meetingUpdateById = require('./controllers/updateById');
const meetingDeleteById = require('./controllers/deleteById');
const authorization = require('../core/authorization');

const router = Router();

router.post('/', authorization, meetingCreate);

router.get('/:meetingId', authorization, meetingGetById);

router.post('/search', authorization, meetingSearch);

router.patch('/:meetingId', authorization, meetingUpdateById);

router.delete('/:meetingId', authorization, meetingDeleteById);

module.exports = router;
