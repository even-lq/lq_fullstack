
// 米换算成千米
function mToKm(distance) {
  if (typeof distance === 'string') {
    distance = Number(distance)
  }
  let str = (parseInt(distance) / 1000).toString().split('.')
  return distance >= 1000 ? str[0] + '.' + str[1].substring(0, 2) + 'km' : parseInt(distance) + 'm'
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
  addProperty,
  filterObjectArray
};
