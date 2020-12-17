const puppeteer = require('puppeteer')
const $ = require('cheerio');
const { resolve } = require('path');
const { rejects } = require('assert');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // networkidle0 等着不再网络请求的时候去到下一步
  await page.goto('https://juejin.cn/books', {
    waitUntil: 'networkidle0'
  });

  // await page.screenshot({
  //   path: './juejin.png'
  // })
  // 在获取html之前，滚动到底部
  // evaluate里面的代码会被放到浏览器（其控制台）中执行
  // 每次执行 document.querySelector('.copy-right').scrollIntoView() 等两秒加载数据再滚动
  await page.evaluate(function() {
    function req() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          document.querySelector('.copy-right').scrollIntoView()
          resolve()
        }, 2000);
      })
    }
    async function run() {
      for (let i = 0; i < 3; i++) {
        await req();
      }
    }
    // async 执行完返回的是promise，run() 会等三次下拉结束后才 resolve(), page.evaluate 将等待promise完成返回结果
    return run()
  })
  // 只有第一页数据
  const html = await page.content();
  const books = $('.info', html);
  let booksInfo = []
  books.each(function(item) {
    const book = $(this);
    let name = $(book.find('.title')).text().trim();
    let auth = $(book.find('.author-name')).text().trim();
    booksInfo.push({
      name, auth
    })
  })
  const fs = require('fs')
  // JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
  // 第二个参数：用于转换结果的函数或数组。格式化需要的结果
  // 第三个参数：如果 space 是一个数字，则返回值文本在每个级别缩进指定数目的空格
  fs.writeFile('./books.json', JSON.stringify(booksInfo, null, 2), (err) => {
    if (!err) {
      console.log('写入成功！');
    }
  })
  console.log(booksInfo);
  await browser.close()
}

run()