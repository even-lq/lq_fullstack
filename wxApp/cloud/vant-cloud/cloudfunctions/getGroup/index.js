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
  let groupList = await db.collection('user-group').where({
    userId: openId
  }).get()
  let returnResult = []
  for (let item of groupList.data) {
    // 一条一条数据的遍历，所以是data[0]
    const oneGroup = await db.collection('group').where({
      _id: item.groupId,
      deleted: false
    }).get()

    if(oneGroup.data.length > 0) {
      const userInfo = await db.collection('user').where({
        openId: oneGroup.data[0].createBy
      }).get()
      oneGroup.data[0].createBy = userInfo.data[0]
      oneGroup.data[0].relateUserGroupId = item._id
      returnResult.push(oneGroup.data[0])
    }
  }
  return returnResult.sort((a, b) => a.createTime < b.createTime ? 1 : -1)
  // return await db.collection('group').where({
  //   createBy: openId // 填入当前用户 openid
  // }).get()
}