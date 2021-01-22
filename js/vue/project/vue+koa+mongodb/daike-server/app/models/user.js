const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  userId: {
    type: String,
    unique: true,
    require: true
  },
  account: {
    type: String
  },
  userName: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  headerImg: {
    type: String
  },
  studentId: {
    type: String
  },
  school: {
    type: String
  },
  schoolId: {
    type: String
  },
  provinceId: {
    type: Number
  },
  major: {
    type: String
  },
  college: {
    type: String
  },
  wechat: {
    type: String
  },
  qq: {
    type: String
  },
  collections: {
    type: Array
  }
  // Mongoose 通过 utils.toCollectionName 方法默认生成collection的名称（生成model名称的复数形式）。 
  // 设置这个选项可以自定义名称
}, { collection: 'user', versionKey: false });

// 返回可以被实例化的表到实体类的映射的类
module.exports = mongoose.model('user', UserSchema);