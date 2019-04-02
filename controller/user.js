const User = require('../db/users').User;
const UserType = require('../db/users').UserType;
const Moment = require('moment');
/*
* @dec 创建用户类型列表
* @async
* */
const CreatedUserType = async (ctx, next) => {
  let userTypeOptions = [
    {
      type: 'super_admin', // 类型
      auth: 1, // 权限
      dec: '超级管理员' // 描述
    },
    {
      type: 'admin', // 类型
      auth: 2, // 权限
      dec: '管理员' // 描述
    },
    {
      type: 'operate', // 类型
      auth: 3, // 权限
      dec: '运营' // 描述
    }
  ];
  await new Promise((resolve, reject) => {
    UserType.insertMany(userTypeOptions, (err, res) => {
      if (err) {
        reject();
      } else {
        resolve(res);
      }
    });
  }).then(res => {
    ctx.body = {
      then: '123123'
    }
  });
};

const Login = async (ctx, next) => {
  ctx.status = 200;
  console.log(ctx.request.body)
  console.log(ctx.request)
};

module.exports = {
  Login,
  CreatedUserType
};
