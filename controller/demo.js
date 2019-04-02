const User = require('../db/users').User;
const Moment = require('moment');
const Demo = async (ctx) => {
  ctx.status = 200;
  let user = new User({
    username: 'username',
    password: 'password',
    token: 'token',
    create_time: Moment().unix()
  });
  user.save((err, user) => {
    console.log(err, user)
  });
  ctx.body = {
    succsess: '1',
    result: {
      a: 1
    }
  };
};

module.exports = {
  Demo
};
