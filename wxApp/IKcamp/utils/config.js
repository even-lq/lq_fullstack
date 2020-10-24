// 配置常量
'use strict'

// 环境
const env = 'dev'

// 接口错误淡出文案
const defaultAlertMessage = '好像哪里出错了，请再使用一次。'

const defaultBarTitle = {
  en: 'iKcamp英语学习'
}

const defaultImg = {
  articleImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7e8f7b63dba6fa3849b628c0ce2c2a46.png',
  coverImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7472c035ad7fe4b8db5d2b20e84f9374.png'
}

let core = {
  env: env,
  defaultAlertMessage: defaultAlertMessage,
  defaultBarTitle: defaultBarTitle,
  defaultImg: defaultImg,
  isDev: env === 'dev',
  isProduction: env === 'production'
}

export default core