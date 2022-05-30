  const meetingRouter = require('../meeting/Routes');
  const loginRouter = require('../login/Routes');
  const userRouter = require('../user/Routes');

function routes(app) {
  app.use('/meeting', meetingRouter);
  app.use('/login', loginRouter);
  app.use('/user', userRouter);
}

module.exports = routes;
