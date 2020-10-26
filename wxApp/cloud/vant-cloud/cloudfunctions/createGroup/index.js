// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'cloud-lq-1gku60tzaccb09e4'

cloud.init()
const db = cloud.database({ env }) // 指明云函数生效的环境

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event);
  const userInfo = event.userInfo // event 不仅包含前端传递过来的参数，还会自动携带用户信息
  console.log(userInfo);
  return await db.collection('group').add({
    data: {
      name: event.groupName,
      createBy: userInfo.openId,
      createTime: new Date(),
      deleted: false,
      updateTime: new Date()
    },
    success: function (res) {
      // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
      console.log(res)
    }
  })
  .then(res => {
    // res:存成功后的数据
    return db.collection('user-group').add({
      data: {
        groupId: res._id,
        userId: userInfo.openId,
        invalid: false
      }
    })
  })
}