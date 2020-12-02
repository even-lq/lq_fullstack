#### JS异步代码

类名并行写中间不留空格表示同时拥有这两个类名才生效的样式

```css
.green.light {
    background-color: green;
}
```

#### Promise：可以直接new而不用在外套函数

先执行p的内容，如果resolve成功，则可以通过then属性调用

```js
let p = new Promise((resolve, reject) => {
    console.log(' i am p');
    setTimeout(() => {
        resolve();
    }, 1000);
})
p.then(() => {
    console.log('1秒后我执行');
})
```

pending -> fullfilled

`    resolve('123')`

pending -> rejected

`    resolve('error')`

```js
let url = 'https://yanxuan.nosdn.127.net/8ab9d7479cce3fb4517efc81f7f069d1.jpg?type=webp&imageView&quality=95&thumbnail=1920x420'
let p1 = new Promise((resolve, reject) => {
    let img = new Image();
    img.src = url;
    img.onload = function() {
        resolve('123')
    }
    img.onerror = function() {
        resolve('error')
    }
})
p1.then(res => console.log(res))
    .catch(err => console.log(err))
```

#### Promise：在then里面可以直接返回带有resolve的promise

```js
let readFile = (url) => new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   fs.readFile('./index.html', 'utf8', (err, file) => {
  //     resolve(file);
  //   })
  // }, 2000);
  fs.readFile(url, 'utf8', (err, file) => {
    if (err) {
      reject();
    } else {
      resolve(file);
    }
  })
})

readFile('./index.js')
  .then(res => {
    console.log(res)
    return readFile('./index.html')
  })
  .then(res => {
    console.log(res)
  })
```



#### JS异步练习

1. 经典回调

   ```js
   function light(time) {
       if (time > 4) return;
       setTimeout(() => {
           green();
           setTimeout(() => {
               yellow();
               setTimeout(() => {
                   red()
                   light(time + 1)
               }, 1000);
           }, 1000);
       }, 1000);
   }
   light(0)
   ```

2. Promise

   ```js
   function changeLights() {
       return new Promise((resolve, reject) => {
           setTimeout(() => {
               green()
               resolve(yellow)
           }, 1000);
       })
   }
   changeLights().then(res => {
       return new Promise((resolve, reject) => {
           setTimeout(() => {
               res();
               resolve(red)
           }, 1000)
       })
   }).then(res => {
       setTimeout(() => {
           res();
       }, 1000)
   })
   ```

   