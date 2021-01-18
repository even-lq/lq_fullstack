// collection => class
// mongodb的驱动
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose); // 给model另起名字，自己绑定自己，返回新函数
const ObjectId = mongoose.Schema.Types.ObjectId;

// 电商 Product Manufacture
const productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  manufacturer: {
    type: ObjectId,
    ref: 'Manufacturer' // 外键 添加ref属性来指向另一个Schema
    // 该ref选项可以告诉Mongoose在填充过程中使用哪种模型，在本例中为Manufacturer模型
  }

})

const manufacturerSchema = Schema({
  id: ObjectId,
  name: String,
})

const Product = model('Product', productSchema)
const Manufacturer = model('Manufacturer', manufacturerSchema)

// es5 commonJS node模块化方案 稳定为主
// es6 前端
module.exports = {
  Product,
  Manufacturer
}
