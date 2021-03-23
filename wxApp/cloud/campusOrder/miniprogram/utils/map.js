let QQMapWX = require('./JavaScriptSDK-v1.2/qqmap-wx-jssdk.js');
let qqmapsdk = new QQMapWX({
  key: 'W5JBZ-EIH3P-T2YDB-LACR3-KL5UE-PGBUE'
});

// 地图搜索
function mapSearch(searchOne, location, pageIndex = 1, keyword = '大学') {
  return new Promise((resolve, reject) => {
    qqmapsdk.search({
      keyword,
      location,
      page_index: pageIndex,
      success: function (res) {
        console.log(res);
        if (searchOne) {
          resolve(res.data[0])
        } else {
          
        }
      },
      fail: function (res) {
        console.log(res);
      },
    })
  })
}

// 计算距离
function calculateDistance(from, to) {
  return new Promise((resolve, reject) => {
    qqmapsdk.calculateDistance({
      //mode: 'driving',//可选值：'driving'（驾车）、'walking'（步行），不填默认：'walking',可不填
      //from参数不填默认当前地址
      //获取表单提交的经纬度并设置from和to参数（示例为string格式）
      from: from || '', //若起点有数据则采用起点坐标，若为空默认当前地址
      to, //终点坐标
      success: function (res) {//成功后的回调
        resolve(res.result)
      },
      fail: function (error) {
        reject(error);
      }
    });
  })

}

module.exports = {
  mapSearch,
  calculateDistance,
};