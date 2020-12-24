watch属性

监听某个数据的值来动态控制另一个数据的值

与computed的区别：

1. watch改变的是原属性，computed新增属性
2. 只有值改变才会监听（设置immediate为true可以一开始就监听）
3. computed计算的值是有缓存的，而watch没用，因为watch没新增数据

监听对象的属性：

1. `  'temperture.num': {}`

2. 深度监听

   设置`deep: true`

   把所有newVal改为`newVal.num`

3. 两种方法的区别

   deep使用的是递归，只有在数据源比较复杂的时候用，实现原理是递归，开销大

