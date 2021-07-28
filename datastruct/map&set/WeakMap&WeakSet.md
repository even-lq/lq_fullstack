# WeakMap&WeakSet

> [WeakMap and WeakSet（弱映射和弱集合）](https://zh.javascript.info/weakmap-weakset)

## WeakMap

1. `WeakMap` 的**键**必须是**对象**，不能是原始值

2. 垃圾回收

   如果我们在 weakMap 中使用一个对象作为键，并且没有其他对这个对象的引用 —— 该对象将会被从内存（和map）中自动清除。

   例子1：

   ```javascript
   let john = { name: "John" };
   
   let weakMap = new WeakMap();
   weakMap.set(john, "...");
   
   john = null; // 覆盖引用
   
   // john 被从内存中删除了！
   ```

   例子2：

   ```js
   // 普通垃圾回收机制
   const e1 = document.getElementById('foo');
   const e2 = document.getElementById('bar');
   const arr = [
     [e1, 'foo 元素'],
     [e2, 'bar 元素'],
   ];
   // 不需要 e1 和 e2 的时候
   // 必须手动删除引用，注意这里是删除arr[0]和arr[1]，如果操作e1 = null,e2 = null，数组中的对象不会被删除
   arr [0] = null;
   arr [1] = null;
   
   // 如果是弱引用，直接让e1 = null, e2 = null即可删除引用
   ```

   例子3：

   ```js
   const wm = new WeakMap();
   
   const element = document.getElementById('example');
   
   wm.set(element, 'some information');
   wm.get(element) // "some information"
   
   // 将element = null，则在WeakMap中，由于对 “element对象” 的引用 “element” 已不可访问，所以之前 ”element引用的对象“ 被删除
   ```

3. `WeakMap` **不支持迭代**以及 `keys()`，`values()` 和 `entries()` 方法。所以没有办法获取 `WeakMap` 的所有键或值。

   `WeakMap` 只有以下的方法：

   - `weakMap.get(key)`
   - `weakMap.set(key, value)`
   - `weakMap.delete(key)`
   - `weakMap.has(key)`

   > 为什么会有这种限制呢？这是技术的原因。**如果一个对象丢失了其它所有引用（就像上面示例中的 `john`），那么它就会被垃圾回收机制自动回收**。但是在从技术的角度并不能准确知道 **何时会被回收**。
   >
   > 这些都是由 JavaScript 引擎决定的。JavaScript 引擎可能会选择立即执行内存清理，如果现在正在发生很多删除操作，那么 JavaScript 引擎可能就会选择等一等，稍后再进行内存清理。因此，从技术上讲，`WeakMap` 的当前元素的数量是未知的。JavaScript 引擎可能清理了其中的垃圾，可能没清理，也可能清理了一部分。因此，暂不支持访问 `WeakMap` 的所有键/值的方法。

4. `WeakMap`仅对键名弱引用

   键值依然是正常引用

   ```js
   const wm = new WeakMap();
   let key = {};
   let obj = {foo: 1};
   
   wm.set(key, obj);
   obj = null;
   wm.get(key)
   // Object {foo: 1}
   ```

   上面代码中，键值obj是正常引用。所以，即使在 WeakMap 外部消除了obj的引用，WeakMap 内部的引用依然存在。

### 应用

- 一个对象**没有被引用**，则该对象会被垃圾回收机制自动回收；
- 当 `john` 对象（命名对象）变成不可访问时，即便它是 `WeakMap` 里的一个键，它也会连同它作为 `WeakMap` 里的键所对应的信息一同被从内存中删除。

#### 额外的数据

```js
// 📁 visitsCount.js
let visitsCountMap = new WeakMap(); // weakmap: user => visits count

// 递增用户来访次数
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}
```

```js
// 📁 main.js
let john = { name: "John" };

countUser(john); // count his visits

// 不久之后，john 离开了
john = null;
```

- 当john引用的对象变成不可访问时（**失去了引用**），该对象作为`WeakMap`里的键及其值会从内存中删除
- 而如果使用`Map`，由于`Map`存在内存中，其键也存在于内存中；**当`Map`的引用存在**时，其键值信息也将存在，并且不会被垃圾回收机制回收

#### 缓存

当一个函数的结果需要被记住（“缓存”），这样在后续的对同一个对象的调用时，就可以重用这个被缓存的结果。

Map:

```js
// 📁 cache.js
let cache = new Map();

// 计算并记住结果
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* calculations of the result for */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// 现在我们在其它文件中使用 process()

// 📁 main.js
let obj = {/* 假设我们有个对象 */};

let result1 = process(obj); // 计算完成

// ……稍后，来自代码的另外一个地方……
let result2 = process(obj); // 取自缓存的被记忆的结果

// ……稍后，我们不再需要这个对象时：
obj = null;

alert(cache.size); // 1（啊！该对象依然在 cache 中，并占据着内存！）
```

WeakMap:

```js
let cache = new WeakMap();
.......
// ……稍后，我们不再需要这个对象时：
obj = null;

// 无法获取 cache.size，因为它是一个 WeakMap，
// 要么是 0，或即将变为 0
// 当 obj 被垃圾回收，缓存的数据也会被清除
```

对于多次调用同一个对象，它只需在第一次调用时计算出结果，之后的调用可以直接从 `cache` 中获取。这样做的缺点是，当我们不再需要这个对象的时候需要清理 `cache`。

如果我们用 `WeakMap` 替代 `Map`，这个问题便会消失：当对象被垃圾回收时，对应的缓存的结果也会被自动地从内存中清除。

## WeakSet

`WeakSet` 的表现类似：

1. 与 `Set` 类似，但是我们只能向 `WeakSet` **添加对象**（而不能是原始值）。

2. 对象只有在其它某个（些）地方**能被访问的时候**，才能留在 set 中。

3. 跟 `Set` 一样，`WeakSet` 支持 `add`，`has` 和 `delete` 方法，但不支持 `size` 和 `keys()`，并且**不可迭代**。

变“弱（weak）”的同时，它也可以**作为额外的存储空间**。但并非针对任意数据，而是针对“是/否”的事实。`WeakSet` 的元素可能代表着有关该对象的某些信息。

## [总结](https://zh.javascript.info/weakmap-weakset#zong-jie)

1. `WeakMap` 是类似于 `Map` 的集合，它仅允许对象作为键，并且一旦通过其他方式无法访问它们，便会将它们与其关联值一同删除。

2. `WeakSet` 是类似于 `Set` 的集合，它仅存储对象，并且一旦通过其他方式无法访问它们，便会将其删除。

3. 它们都不支持引用所有键或其计数的方法和属性。仅允许单个操作。

4. `WeakMap` 和 `WeakSet` 被用作“主要”对象存储之外的“辅助”数据结构。一旦将对象从主存储器中删除，如果该对象仅被用作 `WeakMap` 或 `WeakSet` 的键，那么它将被自动清除。

`WeakMap` 和 `WeakSet` 最明显的局限性就是不能迭代，并且无法获取所有当前内容。那样可能会造成不便，但是并不会阻止 `WeakMap/WeakSet` 完成其主要工作 — 成为在其它**地方管理/存储“额外”的对象数据**。