//db.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/kgh-serve', { useNewUrlParser: true });
let db = mongoose.connection;
// 防止Mongoose: mpromise 错误
mongoose.Promise = global.Promise;
db.on('error', function () {
  console.log('数据库连接出错！');
});
db.on('open', function () {
  console.log('数据库连接成功！');
});
module.exports = mongoose;
