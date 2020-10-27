// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'cloud-lq-1gku60tzaccb09e4'

cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo
  // const wxContext = cloud.getWXContext()
  // const openId = cloud.getWXContext().OPENID
  // 查看user表里面有没有该用户(openId)
  // get返回promise
  const checkUser = await db.collection('user').where({
    openId: userInfo.openId
  }).get()
  
  // 已经存在该用户，更新用户信息
  if (checkUser.data.length > 0) {
    // doc(): 获取集合中指定记录的引用。方法接受一个id参数，指定需引用的记录的，_id.
    await db.collection('user').doc(checkUser.data[0]._id)
      .update({
        data: {
          avatarUrl: event.avatarUrl,
          nickName: event.nickName,
          sex: event.sex
        }
      })
  } else {
    const inserResult = await db.collection('user').add({
      data: {
        avatarUrl: event.avatarUrl,
        nickName: event.nickName,
        sex: event.sex,
        name: '',
        openId: event.userInfo.openId,
        createTime: new Date()
      }
    })
  }






  // const wxContext = cloud.getWXContext()
  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}