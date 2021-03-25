### call-apply-bind

1. 都是为了解决this的指向问题的

2. 传参方式不同

   出第一个参数外，call可以接任意多个参数，apply只接受一个数组参数，bind和call一样只不过会返回一个函数

### bind的实现

a.bind(b) 意思是让a的this能够访问b的内容

1. 实质是a函数放到b对象中
2. 让b去调用a
3. 将a移除

#### 考虑情况

1. 不传第一个参数，则把this绑定到window

2. 除第一个参数外，其余参数是参数列表，可以任意多个

3. 必须由函数来调用bind

4. bind返回的是一个函数，当执行该函数时，调用bind的函数执行并且改变this

5. bind返回的函数被new的情况

   bind返回的函数被new其实就是调用bind的函数被new

   判断是否new

   ```js
   if (this instanceof F) {
       // 正面F被new了
       return new _this()
   }
   ```

   ```js
   用new调用一个函数发生了这些事：
   （1）新建一个对象instance=new Object();
   （2）设置原型链instance.__proto__=F.prototype;
   （3）让F中的this指向instance，执行F的函数体。
   （4）判断F的返回值类型：如果是值类型，就丢弃它，还是返回instance。如果是引用类型，就返回这个引用类型的对象，替换掉instance。
   
   作者：何幻
   链接：https://www.zhihu.com/question/36440948/answer/71234418
   来源：知乎
   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
   ```

   