// 模块化控制器
const Model = require('../model');
// 解构
const { Manufacturer } = Model;
const manufacturerController = {
  create(req, res) {
    // 路由鉴权
    const requestBody = req.body;
    // 保存发送到后端的字段
    const newManufacturer = new Manufacturer(requestBody) // 保存数据
    newManufacturer.save((err, saved) => {
      if (err) {
        console.log(err);
        return;
      }
      // console.log(saved);
      // select 只取一条 
      // 响应
      Manufacturer
        .findOne({ _id: newManufacturer._id })
        .exec((err, manufacturer) => {
          res.json(manufacturer)
        })

    })
  },
  all(req, res) {
    Manufacturer
      .find({})
      .exec((err, manufacturers) => {
        res.json(manufacturers)
      })
  },
  byId(req, res) {
    const idParams = req.params.id;
    Manufacturer
      .findOne({ _id: idParams })
      .exec((err, manufacturer) => {
        res.json(manufacturer)
      })
  },
  remove(req, res) {
    const idParams = req.params.id;
    Manufacturer
      .findOne({ _id: idParams })
      .remove((err, removed) => {
        res.json(idParams)
      })
  },
  // 修改
  update(req, res) {
    const idParams = req.params.id;
    let manufacturer = req.body;
    Manufacturer.updateOne({
      _id: idParams
    }, {
      ...manufacturer
    }, (err, updated) => {
      res.json(updated)
    })
  }
}
module.exports = manufacturerController;