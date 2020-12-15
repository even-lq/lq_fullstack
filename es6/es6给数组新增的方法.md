	下面的括号的内容为参数取值

1. Object.keys(数组名)

   Object.keys可以被数组使用，获取键名(数组下标)，但是是String 类型

2. keys()

   获取键名(数组下标)，返回类型是数组的迭代器，其值(数组下标)是Number类型

   注：迭代器可用于遍历

   ```js
   let arr = ['a', 'b', 'c']
   for (const iterator of arr.keys()) {
     console.log(iterator); // 0 1 2
   }
   ```

3. entries()

   获取数组的键值对，返回类型是数组迭代器，返回的元素每一个都是一个数组，第0项是键名，第1项是键值

4. includes(数组值)

   返回类型是boolean，判断数组中是否有值为传递过来的参数的值

5. find(函数)

   参数是一个函数，该函数决定查询条件，查找数组元素，查找成功则返回该元素，否则返回undefined

   下面两者作用相同，只是前者用了原生函数，后者用了箭头函数

   ```js
   let people = [
     { name: 'xt', age: 18 },
     { name: 'yz', age: 20 },
     { name: 'dt', age: 20 }
   ]
   
   function findFriend(person) {
     return person.name === 'yz' 
   }
   console.log(people.find(findFriend));
   console.log(people.find((person) => {
     return person.name === 'xt'
   }));
   ```

老方法+方法总结

1. 类数组转数组 

   - 解构（具有迭代性质“iterable”的类数组可以解构成数组）
   - Array.from(也可以用call把数组的方法借给类数组使用，类数组自动变成了数组)

   ```js
   function a() {
     console.log(arguments);
     console.log([...arguments]);
     console.log(Array.from(arguments));
     console.log(Array.prototype.shift.call(arguments)); // 会改变传入的参数，传入的参数变成了去除首部的类数组
   }
   a(1, 2, 3)
   
   结果：
   [Arguments] { '0': 1, '1': 2, '2': 3 }
   [ 1, 2, 3 ]
   [ 1, 2, 3 ]
   1
   [Arguments] { '0': 2, '1': 3 }
   object
   2
   3
   ```

2. 分割数组的方法

   shift：改变原始数组

   slice：不改变原数组，参数：左闭右开（切割的开始，切割的结束）

   splice：改变原数组，参数：（切割的开始，切割几位）





