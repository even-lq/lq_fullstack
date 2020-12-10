// 云函数入口文件
const cloud = require('wx-server-sdk')
const cheerio = require('cheerio') // node环境下的jQuery
let charset = require('superagent-charset') // 解决乱码
let superagent = require('superagent') // 发起请求
charset(superagent) // 解决请求的乱码
cloud.init() // init必须要在最下面

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = `https://wap.biqiuge8.com/${event.url}`
  const result = await superagent.get(serverUrl).charset('gb2312') // 取决于网页的编码方式
  const data = result.text || ''
  const $ = cheerio.load(data, { decodeEntities: false })
  let content = $('#chaptercontent').text()
  // 小程序没有br，但是可以读出\n
  let contentH = $('#chaptercontent').html()
  // let sectionName
  let catalog = $('#pb_mulu').attr('href') // 目录
  let pre = $('#pb_prev').attr('href')
  let next = $('#pb_next').attr('href')

  return {
    content,
    contentH,
    catalog,
    pre,
    next
  }
  // const wxContext = cloud.getWXContext()

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}