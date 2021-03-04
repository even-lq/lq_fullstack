var saleOffices = {

}// 售楼处  发布者
saleOffices.clientList = []; // 买房者 订阅者 模拟事件池
saleOffices.listen = function(fn) {
  // 执行listen方法push事件池 => 添加订阅者
  this.clientList.push(fn)
}
saleOffices.trigger = function (price, squareMeter) {
  for (var i = 0; i < this.clientList.length; i++) {
    console.log(this.clientList[i]);
    this.clientList[i](price, squareMeter);
    
  }
}
saleOffices.listen(function(price, squareMeter) {
  if(price > 18000) {
    console.log('我的菜');
  } else {
    console.log('只买贵的，不买对的');
  }
  console.log('价格:' + price);
  console.log('面积:' + squareMeter);
})

saleOffices.listen(function(price, squareMeter) {
  if (squareMeter < 120) {
    console.log('不是我的菜');
  } else {
    console.log('内心的宽广有地方安放');
  }
  console.log('价格:' + price);
  console.log('面积:' + squareMeter);
})
// 相当于click
saleOffices.trigger(20000, 130)