// 爬页面数据和爬服务器数据
// cheerio 服务端操作dom结构的依赖
// node遵从common.js

// 1.加载https模块，只要有获取网站链接的操作，都需要https的模块
const https = require('https')
// 2.加载cheerio
const cheerio = require('cheerio')
// 生成文件的模块
const fs = require('fs')


https.get('https://movie.douban.com/top250', (res) => {
  let html = ''
  // res.on类似于addEventListener用于监听数据
  res.on('data', (chunk) => {
    html += chunk
  })
  // 监听res数据加载完成，就执行需要的效果
  res.on('end', () => {
    // console.log(html);
    // $变量规定好的，不能改变
    const $ = cheerio.load(html)
    // 用数组保存爬到的数据
    let allFilms = []

    // $符号（）选中类名:li下的.item
    // 箭头函数里面的this不是$('li .item')
    $('li .item').each(function() {
      // this代表li下的.item，$('.title', this)代表li下的.item下的title
      const title = $('.title', this).text()
      const star = $('.rating_num', this).text()
      // attr拿属性
      const pic = $('.pic img', this).attr('src')

      allFilms.push({title, star, pic})
    })


    // 将爬到的数据传出为本地文件
    fs.writeFile('./files.json', JSON.stringify(allFilms), (err) => {
      if(!err) {
        console.log('文件写入完成');
      }
    })
  })
})