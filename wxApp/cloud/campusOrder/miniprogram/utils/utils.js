let QQMapWX = require('./JavaScriptSDK-v1.2/qqmap-wx-jssdk.js');
let qqmapsdk = new QQMapWX({
  key: 'W5JBZ-EIH3P-T2YDB-LACR3-KL5UE-PGBUE'
});
// 米换算成千米
function mToKm(distance) {
  if (typeof distance === 'string') {
    distance = Number(distance)
  }
  let str = (parseInt(distance) / 1000).toString().split('.')
  return distance >= 1000 ? str[0] + '.' + str[1].substring(0, 2) + 'km' : parseInt(distance) + 'm'
}

// 地图搜索
function mapSearch(location, keyword = '大学') {
  return new Promise((resolve, reject) => {
    qqmapsdk.search({
      keyword,
      location,
      success: function (res) {
        console.log(res);
        resolve(res.data[0])
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

// 对象添加属性
function addProperty(obj, pro, value) {
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    if (pro in obj) {
      return
    } else {
      obj[pro] = value
      return obj
    }
  } else return
}

// 过滤对象数组
function filterObjectArray(objArr) {
  let arr = []
  for (let i = 0; i < objArr.length; i++) {
    if (objArr[i].location && Object.prototype.toString.call(objArr[i])) {
      arr.push({ location: objArr[i].location })
    }    
  }
  return arr
}
module.exports = {
  mToKm,
  mapSearch,
  calculateDistance,
  addProperty,
  filterObjectArray
};
