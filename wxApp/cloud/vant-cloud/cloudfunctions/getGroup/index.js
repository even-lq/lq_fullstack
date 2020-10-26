// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'cloud-lq-1gku60tzaccb09e4'

cloud.init()
const db = cloud.database({ env }) // 指明云函数生效的环境

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // event.userInfo.openId
  const openId = cloud.getWXContext().OPENID
  return await db.collection('group').where({
    createBy: openId // 填入当前用户 openid
  }).get()
}