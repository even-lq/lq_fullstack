### 小程序云开发

1. 了解云开发初始页面的功能介绍

2.  let randString = + new Date() + Math.random() * 1000000; // 时间戳 \+ new Date(); +号类型的转换

3. export exports commonJS规范与ES6规范

4. 为了防止微信封装的函数干扰this作用域，现在调用微信封装的函数前绑定this作用域

      let self = this

5. wx.cloud.callFunction({

   name: 'createGroup', // 要调用的云函数名称

   data: {

   ​    groupName: self.data.groupName

      },

      success(res) {

      }

     })


