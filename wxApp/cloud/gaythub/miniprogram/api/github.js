const trendings = (since, language) => new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve({'trends': []})
  // }, 2000);
  if (language === "all") {
    language = ""
  }
  since = 1
  const url = 'https://api.github.com/repositories'
  wx.request({
    url,
    method: 'GET',
    data: {
      since,
      language
    },
    header: {
      'content-type': 'application/json'
    },
    success (res) {
      resolve(res.data)
    }

  })
})


// 模块输出 commonjs 模块化方案
module.exports = {
  trendings
}