const mongoose = require('./index.js');
//声明schema
const userSchema = mongoose.Schema({
  _id: String,
  number: Number, //需要自增长的字段
  username: String,
  password: String,
  create_time: Number,
  update_time: Number
});
//根据schema生成model
const User = mongoose.model('User', userSchema);

//声明schema
const userTypeSchema = mongoose.Schema({
  type: String, // 类型
  auth: Number, // 权限
  dec: String, // 描述
}, {
  timestamps: {
    createdAt: 'created_time',
    updatedAt: 'update_time',
  }
});

//根据schema生成model
const UserType = mongoose.model('UserType', userTypeSchema);

module.exports = {
  User,
  UserType
};
